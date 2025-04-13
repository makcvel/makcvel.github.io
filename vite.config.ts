
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/makcvel.github.io/", // Замените на имя вашего репозитория
  server: {
    // ... keep existing code (server configuration)
  },
  plugins: [
    // ... keep existing code (plugins configuration)
  ],
  resolve: {
    // ... keep existing code (resolve configuration)
  },
}));
