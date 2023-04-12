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
    port: 5000,
    strictPort: true,
  },
  plugins: [
    react(),
    federation({
      name: "app1",
      filename: "remoteEntry.js",
      // Modules to expose
      remotes: {
        app2: "http://localhost:5001/assets/remoteEntry.js",
      },
      exposes: {},
      shared: [
        {
          react: {
            singleton: true,
          },
          "react-dom": {
            singleton: true,
          },
          "random-number": {}
        },
      ],
    }),
  ],
});
