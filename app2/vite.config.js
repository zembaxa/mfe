import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
    watch: true,
  },
  preview: {
    port: 5001,
    strictPort: true,
  },
  plugins: [
    react(),
    federation({
      name: "app2",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./Hello": "./src/Hello.jsx",
        "./App": "./src/App.jsx",
        "./CountContext": "./src/CountContext.jsx",
      },
      shared: [
        {
          react: {
            singleton: true,
          },
          "react-dom": {
            singleton: true,
          },
          "random-number": {},
        },
      ],
    }),
  ],
});
