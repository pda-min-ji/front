import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/SignUpStyle.css'


const SignUpComponent = () => {
  const [bojId, setbojId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();

    const payload = {
      bojId: bojId,
      name: name,
      password: password,
    };

    try {
      const response = await axios.post("http://localhost:8080/users/signUp", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        console.log("성공! 이름: " + response.data.name);
        navigate("/login");
      } else if (response.status === 400) {
        alert(`회원가입 실패`);
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  return (
    <div className="signup-page">
      <form className="signup-form" onSubmit={handleSignup}>
        <h1>회원가입</h1>
        <label htmlFor="bojId">백준계정</label>
        <input
          type="text"
          id="bojId"
          value={bojId}
          onChange={(e) => setbojId(e.target.value)}
        />

        <label htmlFor="name">사용자명</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button id="signup-button" type="submit">
          회원가입
        </button>

        <p className="login-link">
          이미 회원이신가요? <Link to="/users/login">로그인</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpComponent;