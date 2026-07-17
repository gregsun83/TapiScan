export const brandSystem = {
  colors: {
    ink: "#03070d",
    night: "#07111d",
    charcoal: "#101720",
    blue: "#2f80ff",
    electricBlue: "#63b3ff",
    mint: "#5ef1c6",
    aqua: "#8be9ff",
    amber: "#ffcf66"
  },
  typography: {
    display: "Inter/system display with tight, high-contrast headlines",
    body: "Inter/system UI for bilingual EN/ES readability"
  },
  motion: {
    ui: "120-240ms ease-out transitions",
    storytelling: "slow scan pulses and context handoffs",
    reducedMotion: "remove position animation, preserve readable state"
  }
} as const;
