"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { siteCopy } from "@/content/marketing";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";

export function RestaurantFlow() {
  const { locale } = useLanguage();
  const copy = siteCopy[locale];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();
  const page = copy.restaurants;

  // Use the 6 restaurantLane titles as the pipeline steps
  const pipelineSteps = copy.restaurantLanes.map((lane) => lane.title);

  return (
    <section className="section-shell flow-connector-section" ref={ref}>
      <div className="content-shell">
        <SectionHeader
          eyebrow={page.flowEyebrow}
          title={page.flowTitle}
          text={page.flowText}
        />
        <div className="flow-pipeline">
          {pipelineSteps.map((label, i) => (
            <motion.div
              key={label}
              className={`pipeline-node${i === pipelineSteps.length - 1 ? " node-pos" : ""}`}
              initial={
                shouldReduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.88 }
              }
              animate={isInView ? { opacity: 1, scale: 1 } : undefined}
              transition={{ duration: 0.38, delay: i * 0.09, ease: "easeOut" }}
            >
              <span className="node-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="node-label">{label}</span>
            </motion.div>
          ))}
        </div>
        <p className="flow-note">
          {locale === "en"
            ? "The menu stages intent. POS remains source of truth for orders, inventory, kitchen, and payment."
            : "El menú prepara la intención. El POS es la fuente de verdad para pedidos, inventario, cocina y pagos."}
        </p>
      </div>
    </section>
  );
}
