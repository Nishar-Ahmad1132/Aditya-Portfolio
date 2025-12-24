export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b0f1a",
        bgSecondary: "#111827",
        accent: "#22d3ee",
        accentSoft: "#67e8f9",
        textPrimary: "#f8fafc",
        textMuted: "#9ca3af",
        borderColor: "#1f2933",
      },
      boxShadow: {
        glow: "0 0 20px rgba(34,211,238,0.25)",
      },
    },
  },
  plugins: [],
};
