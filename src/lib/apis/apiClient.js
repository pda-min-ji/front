// src/api/apiClient.js
import axios from "axios";

// Axios 인스턴스 생성
const apiClient = axios.create({
//   baseURL: "http://localhost:8080", // 서버의 기본 URL
  baseURL:"/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터 설정
apiClient.interceptors.request.use(
  (config) => {
    // accessToken을 세션 스토리지 또는 로컬 스토리지에서 가져옴
    const token = sessionStorage.getItem("accessToken") || localStorage.getItem("accessToken");
    
    if (token) {
      // Authorization 헤더에 Bearer 토큰 추가
      config.headers["Authorization"] = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
