"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import { useLanguage } from "@/components/providers/language-provider";
import type { Locale } from "@/content/marketing";

export type FlowSequenceStep = {
  frameStart?: number;
  frameEnd?: number;
  title: string;
  text: string;
};

export type FlowSequenceCopy = Record<
  Locale,
  {
    kicker: string;
    title: string;
    stepsLabel: string;
    steps: FlowSequenceStep[];
  }
>;

type FlowSequenceProps = {
  frames: string[];
  copy: FlowSequenceCopy;
  imageAlt: string;
  className?: string;
  priority?: boolean;
  dense?: boolean;
};

function getStepRange(index: number, stepsLength: number, frameCount: number) {
  const start = Math.floor((index / stepsLength) * frameCount);
  const end = Math.max(start, Math.ceil(((index + 1) / stepsLength) * frameCount) - 1);

  return { start, end };
}

function getActiveStepIndex(frameIndex: number, steps: readonly FlowSequenceStep[], frameCount: number) {
  const stepIndex = steps.findIndex((step, index) => {
    const fallback = getStepRange(index, steps.length, frameCount);
    const frameStart = step.frameStart ?? fallback.start;
    const frameEnd = step.frameEnd ?? fallback.end;

    return frameIndex >= frameStart && frameIndex <= frameEnd;
  });

  return stepIndex === -1 ? steps.length - 1 : stepIndex;
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");

    function syncPreference() {
      setPrefersReducedMotion(query.matches);
    }

    syncPreference();
    query.addEventListener("change", syncPreference);

    return () => {
      query.removeEventListener("change", syncPreference);
    };
  }, []);

  return prefersReducedMotion;
}

export function FlowSequence({
  frames,
  copy,
  imageAlt,
  className,
  priority = false,
  dense = false
}: FlowSequenceProps) {
  const { locale } = useLanguage();
  const stageRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isReady, setIsReady] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);

  const sequenceCopy = copy[locale];
  const safeFrames = useMemo(() => frames.filter(Boolean), [frames]);
  const lastFrameIndex = Math.max(0, safeFrames.length - 1);

  useEffect(() => {
    let isCancelled = false;

    setIsReady(false);

    Promise.all(
      safeFrames.map(
        (src) =>
          new Promise<void>((resolve) => {
            const image = new window.Image();
            image.onload = () => resolve();
            image.onerror = () => resolve();
            image.src = src;
          })
      )
    ).then(() => {
      if (!isCancelled) {
        setIsReady(true);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [safeFrames]);

  useEffect(() => {
    if (!isReady || prefersReducedMotion || safeFrames.length <= 1) {
      return;
    }

    let animationFrame = 0;

    function updateFrame() {
      const stage = stageRef.current;
      const sticky = stickyRef.current;

      if (!stage || !sticky) {
        return;
      }

      const stageRect = stage.getBoundingClientRect();
      const stickyTop = Number.parseFloat(window.getComputedStyle(sticky).top) || 0;
      const stageTop = stageRect.top + window.scrollY;
      const travel = Math.max(1, stage.offsetHeight - sticky.offsetHeight - stickyTop);
      const progress = Math.min(1, Math.max(0, (window.scrollY - stageTop) / travel));
      const nextFrame = Math.min(lastFrameIndex, Math.floor(progress * safeFrames.length));

      setFrameIndex((currentFrame) => (currentFrame === nextFrame ? currentFrame : nextFrame));
    }

    function requestUpdate() {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateFrame);
    }

    updateFrame();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [isReady, lastFrameIndex, prefersReducedMotion, safeFrames.length]);

  const activeFrameIndex = prefersReducedMotion ? lastFrameIndex : Math.min(frameIndex, lastFrameIndex);
  const currentFrame = safeFrames[activeFrameIndex] ?? safeFrames[0];
  const activeStepIndex = prefersReducedMotion
    ? sequenceCopy.steps.length - 1
    : getActiveStepIndex(activeFrameIndex, sequenceCopy.steps, safeFrames.length);
  const activeStep = sequenceCopy.steps[activeStepIndex] ?? sequenceCopy.steps[0];
  const stageClassName = [
    "tap-flow-scroll-stage",
    dense ? "is-dense" : "",
    className ?? ""
  ]
    .filter(Boolean)
    .join(" ");

  if (!currentFrame || !activeStep) {
    return null;
  }

  return (
    <div className={stageClassName} ref={stageRef}>
      <div className="tap-flow-sticky" ref={stickyRef}>
        <div className="tap-flow-story-grid">
          <div className="tap-flow-story-copy">
            <p className="tap-flow-story-kicker">{sequenceCopy.kicker}</p>
            <h2>{sequenceCopy.title}</h2>
            <div className="tap-flow-active-step">
              <span>
                {String(activeStepIndex + 1).padStart(2, "0")} /{" "}
                {String(sequenceCopy.steps.length).padStart(2, "0")}
              </span>
              <h3>{activeStep.title}</h3>
              <p>{activeStep.text}</p>
            </div>
            <ol className="tap-flow-step-list" aria-label={sequenceCopy.stepsLabel}>
              {sequenceCopy.steps.map((step, index) => (
                <li
                  key={`${step.title}-${index}`}
                  className={index === activeStepIndex ? "is-active" : undefined}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step.title}</strong>
                </li>
              ))}
            </ol>
          </div>

          <div className="tap-flow-visual-column">
            <div className="tap-flow-animation" data-ready={isReady}>
              <Image
                src={currentFrame}
                alt={imageAlt}
                width={900}
                height={506}
                priority={priority}
                unoptimized
                sizes="(max-width: 720px) calc(100vw - 32px), 640px"
                className="tap-flow-animation-frame"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
