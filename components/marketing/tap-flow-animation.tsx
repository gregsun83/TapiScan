"use client";

import { FlowSequence, type FlowSequenceCopy } from "@/components/marketing/flow-sequence";

const GENERIC_FRAMES = Array.from({ length: 18 }, (_, index) => {
  const frameNumber = String(index + 1).padStart(2, "0");

  return `/reference-assets/tap-flow/tap-flow-${frameNumber}.png`;
});

const storyCopy: FlowSequenceCopy = {
  en: {
    kicker: "Tap-flow walkthrough",
    title: "From tap to the right page.",
    stepsLabel: "Tap-flow steps",
    steps: [
      {
        frameStart: 0,
        frameEnd: 3,
        title: "The touchpoint is ready",
        text: "An NFC stand, sticker, or QR code waits where service begins."
      },
      {
        frameStart: 4,
        frameEnd: 7,
        title: "The phone taps or scans",
        text: "The guest taps with NFC or scans the QR from any phone."
      },
      {
        frameStart: 8,
        frameEnd: 11,
        title: "The right page opens",
        text: "TapiScan opens the menu, service page, product details, or exhibit info. No app required."
      },
      {
        frameStart: 12,
        frameEnd: 14,
        title: "Context is already attached",
        text: "The table, room, zone, product, or exhibit stays connected to the visit."
      },
      {
        frameStart: 15,
        frameEnd: 17,
        title: "The guest continues",
        text: "They browse, request, order, learn more, or take the next step from the right page."
      }
    ]
  },
  es: {
    kicker: "Recorrido del toque",
    title: "Del toque a la página correcta.",
    stepsLabel: "Pasos del flujo de toque",
    steps: [
      {
        frameStart: 0,
        frameEnd: 3,
        title: "El punto está listo",
        text: "Un stand NFC, sticker o QR espera donde empieza el servicio."
      },
      {
        frameStart: 4,
        frameEnd: 7,
        title: "El teléfono toca o escanea",
        text: "El cliente toca con NFC o escanea el QR desde cualquier teléfono."
      },
      {
        frameStart: 8,
        frameEnd: 11,
        title: "Se abre la página correcta",
        text: "TapiScan abre el menú, servicio, ficha de producto o información de exhibición. Sin app."
      },
      {
        frameStart: 12,
        frameEnd: 14,
        title: "El contexto ya queda identificado",
        text: "La mesa, habitación, zona, producto o exhibición queda conectada a la visita."
      },
      {
        frameStart: 15,
        frameEnd: 17,
        title: "El cliente continúa",
        text: "Navega, solicita, pide, aprende más o sigue desde la página correcta."
      }
    ]
  }
};

export function TapFlowAnimation() {
  return (
    <FlowSequence
      frames={GENERIC_FRAMES}
      copy={storyCopy}
      imageAlt="A phone taps a TapiScan NFC and QR stand, then opens the right digital page."
      priority
    />
  );
}
