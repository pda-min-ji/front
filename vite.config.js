import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080", // 백엔드 API 서버
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // '/api'를 제거
      },
    },
  },
})