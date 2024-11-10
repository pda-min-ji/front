import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/LoginStyle.css';
import { useUser } from "../contexts/userContext";
import { Typewriter } from "react-simple-typewriter";

const LoginComponent = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [loginCheck, setLoginCheck] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // 에러 메시지 상태 추가
  const navigate = useNavigate();
  const { Login } = useUser();

  const handleLogin = async (event) => {
    event.preventDefault();
    
    // 빈 값 유효성 검사 추가
    if (!name.trim() || !password.trim()) {
      setLoginCheck(true);
      setErrorMessage("이름과 비밀번호를 모두 입력해 주세요."); // 빈 값일 때 에러 메시지 설정
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/users/login", {
        name: name,
        password: password,
      });

      // 로그인 성공 시
      const result = response.data;
      Login(result);
      navigate("/");
    } catch (error) {
      setLoginCheck(true);
      setErrorMessage("이름 혹은 비밀번호가 틀렸습니다."); // 로그인 실패 시 에러 메시지 설정
      console.error("Login Error:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    const container = document.querySelector('.falling-circles-container');
    const images = [
      "/images/circle_white.png",
      "/images/triangle_white.png",
      "/images/rectangle_white.png"
    ];

    const createFallingImage = () => {
      const img = document.createElement('img');
      img.classList.add('falling-image');
      img.src = images[Math.floor(Math.random() * images.length)];
      img.style.left = `${Math.random() * 100}%`;
      img.style.animationDuration = `${5 + Math.random() * 3}s`;
  
      img.onload = () => {
        container.appendChild(img);
      };
  
      img.onerror = () => {
        console.error("Failed to load image:", img.src);
      };
  
      img.addEventListener('animationend', () => {
        img.remove();
      });
    };

    const interval = setInterval(createFallingImage, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-container">
      <div className="falling-circles-container"></div>
      <div className="frame-container">
      <div className="form-container">
        <div className="side-info">
        <Typewriter
          words={[
            "printf('Welcome Minji's Question')"
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={70}
          delaySpeed={1000}
        />
        </div>
      <div className="form-box">
        <h1>로그인</h1>
        <form className="form-box-inside" onSubmit={handleLogin}>
          <label htmlFor="username">이름</label>
          <input
            type="text"
            id="username"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />

          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />

          {loginCheck && (
            <p className="error-message">{errorMessage}</p> // 에러 메시지 화면에 표시
          )}

          <button type="submit">로그인</button>
        </form>

        <p className="link">
          아직 회원이 아니신가요? <Link to="/users/signup">회원가입</Link>
        </p>
      </div>
    </div>
    </div>
  </div>
);
};

export default LoginComponent;
