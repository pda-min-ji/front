import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // axios 임포트
import '../styles/LoginStyle.css';
import { useUser } from "../contexts/userContext";

const LoginComponent = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [loginCheck, setLoginCheck] = useState(false);
  const navigate = useNavigate();
  const {Login} =useUser();
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/users/login", {
        name: name,
        password: password,
      });

      // 로그인 성공 시
      const result = response.data;
      
      Login(result);

      navigate("/");
    } catch (error) {
      setLoginCheck(true);
      console.error("Login Error:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    const container = document.querySelector('.falling-circles-container');

    const createCircle = () => {
      const circle = document.createElement('div');
      circle.classList.add('circle');
      circle.style.left = `${Math.random() * 100}%`; // 랜덤 수평 위치
      circle.style.animationDuration = `${3 + Math.random() * 2}s`; // 랜덤 애니메이션 속도
      container.appendChild(circle);

      // 애니메이션이 끝나면 원소 삭제
      circle.addEventListener('animationend', () => {
        circle.remove();
      });
    };

    // 일정 간격으로 동그라미 생성
    const interval = setInterval(createCircle, 800);

    // 컴포넌트가 언마운트되면 애니메이션 중지
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="form-container">
      <div className="falling-circles-container"></div> {/* Falling circles 컨테이너 추가 */}
      <div className="side-info">
        <h2>환영합니다!</h2>
        <p>회원이 되시면 더 많은 서비스를 이용할 수 있습니다.</p>
      </div>
      <div className="form-box">
        <h1>로그인</h1>
        <form onSubmit={handleLogin}>
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
            <p className="error-message">이름 혹은 비밀번호가 틀렸습니다.</p>
          )}

          <button type="submit">로그인</button>
        </form>

        <p className="link">
          아직 회원이 아니신가요? <Link to="/users/signup">회원가입</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginComponent;
