import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // axios 임포트

const LoginComponent = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [loginCheck, setLoginCheck] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/users/login", {
        name: name,
        password: password,
      });

      // 로그인 성공 시
      setLoginCheck(false);
      const result = response.data; 
      
      sessionStorage.setItem("name", result.name);
      sessionStorage.setItem("bojId", result.bojId);
      sessionStorage.setItem("accessToken", result.token);
      console.log(result.token, result.name, result.bojId, result);
      navigate("/");
    } catch (error) {
      // 로그인 실패 시
      setLoginCheck(true);
      console.error("Login Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="form-container">
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

          <label htmlFor="bojId">비밀 번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          
          {loginCheck && (
            <p style={{ color: "red", textAlign: "left" }}>
              이름 혹은 비밀번호가 틀렸습니다.
            </p>
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
