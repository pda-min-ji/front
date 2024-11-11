import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/SignUpStyle.css';

const SignUpComponent = () => {
  const [bojId, setBojId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // 에러 메시지 상태 추가
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();

    // 빈 값 유효성 검사
    if (!bojId.trim() || !name.trim() || !password.trim()) {
      setErrorMessage("모든 필드를 입력해 주세요."); // 빈 값일 때 메시지
      return;
    }

    const payload = {
      bojId: bojId,
      name: name,
      password: password,
    };

    try {
      const response = await axios.post("/api/users/signUp", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        console.log("성공! 이름: " + response.data.name);
        navigate("/users/login");
      }
    } catch (error) {
      if (error.response && error.response.status === 500) {
        // 중복된 백준 계정일 경우
        setErrorMessage("이미 존재하는 백준 계정입니다.");
      } else {
        setErrorMessage("회원가입에 실패했습니다. 다시 시도해 주세요.");
      }
      console.error("오류 발생:", error);
    }
  };

  return (
    <div className="signup-container">
    <div className="signup-page">
      <form className="signup-form" onSubmit={handleSignup}>
        <h1>회원가입</h1>

        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* 에러 메시지 출력 */}

        <label htmlFor="bojId">백준계정</label>
        <input
          type="text"
          id="bojId"
          value={bojId}
          onChange={(e) => setBojId(e.target.value)}
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
    </div>
  );
};

export default SignUpComponent;
