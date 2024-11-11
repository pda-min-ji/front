import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/RankingStyle.css';

const RankingComponent = () => {
  const [weeklyRanks, setWeeklyRanks] = useState([]);
  const [totalRanks, setTotalRanks] = useState([]);
  const [activeTab, setActiveTab] = useState("weekly");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRanks = async () => {
      try {
        const weeklyResponse = await axios.get("/api/rank/week");
        if (weeklyResponse.data.isSuccess) {
          setWeeklyRanks(weeklyResponse.data.result);
        } else {
          throw new Error('주간 랭킹 데이터를 불러오는 데 실패했습니다.');
        }
  
        const totalResponse = await axios.get("/api/rank/total");
        if (totalResponse.data.isSuccess) {
          setTotalRanks(totalResponse.data.result);
        } else {
          throw new Error('전체 랭킹 데이터를 불러오는 데 실패했습니다.');
        }
      } catch (error) {
        console.error("랭킹 정보 가져오기 실패:", error);
        setError(error.message);
      }
    };
  
    fetchRanks();
  }, []);

  const goToProfile = (userId) => {
    navigate(`/profile/${userId}`);
  };

  const getRandomImage = () => {
    const images = ["민지 고양이.png", "민영 고양이.png","숭이.png","택이얼굴.png"];
    const randomIndex = Math.floor(Math.random() * images.length);
    const encodedImage = encodeURIComponent(images[randomIndex]);
    return `/images/${encodedImage}`;
  };

  const renderRankList = (ranks) => {
    return (
      <div className="rank-list">
        {ranks.map((rank) => (
          <div key={rank.userId} className="rank-item" onClick={() => goToProfile(rank.userId)}>
            <div className="rank-item-left">
              <div className="rank-profile">
                <img src={getRandomImage()} alt="Profile" className="profile-image" />
              </div>
              <div className="rank-info">
                <span className="rank-name">{rank.name}</span>
                <span className="rank-points">{rank.point.toLocaleString()}</span>
              </div>
            </div>
            <div className="rank-position">{rank.ranking}위</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="ranking-container">
      <div className="ranking-header">
        <h1>실시간 랭킹</h1>
        <div className="ranking-tabs">
          <button
            className={`tab-button ${activeTab === "weekly" ? "active" : ""}`}
            onClick={() => setActiveTab("weekly")}
          >
            주간 랭킹
          </button>
          <button
            className={`tab-button ${activeTab === "total" ? "active" : ""}`}
            onClick={() => setActiveTab("total")}
          >
            전체 랭킹
          </button>
        </div>
      </div>
      <div className="ranking-content">
        {activeTab === "weekly" && renderRankList(weeklyRanks)}
        {activeTab === "total" && renderRankList(totalRanks)}
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default RankingComponent;
