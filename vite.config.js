import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
export default defineConfig({
	base:'/',
  plugins: [react()],
  server: {
 	host:'0.0.0.0',
	proxy: {
      "/api": {
        target: "http://15.165.253.181:8080", // 백엔드 API 서버
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // '/api'를 제거
      },
    },
  },
})
