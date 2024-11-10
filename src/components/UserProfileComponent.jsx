// import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Container} from 'react-bootstrap';

export default function UserProfile() {
  //이것도 일단 올린 뒤에 userContext로 분리 가능
  const {userId} = useParams();
  const [profileData, setProfileData] = useState(null);
  const [point,setPoint] =useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const fetchProfile = async () =>{
      try {
        const profileResponse = await axios.get(`/api/users/profile?userId=${userId}`);
        // console.log('respone:',profileResponse);
        console.log(profileResponse.data.result);
        if (profileResponse.data.isSuccess){
          setProfileData(profileResponse.data.result);
          const totalPoints = profileResponse.data.result.solvedQ.reduce((sum, q) => sum + (q.level || 0), 0);
          setPoint(totalPoints);
        }
        else{
          throw new Error("프로필 정보를 불러오는데 실패했습니다.");
        }
      }catch (error){
        console.error(error);
      } finally {
        setIsLoading(false);
    }
    }
    fetchProfile();
    
  },[])

  if (isLoading) {
    return <div>Loading...</div>;
}
  const getRandomImage = () => {
    const images = ["민지 고양이.png", "민영 고양이.png"];
    const randomIndex = Math.floor(Math.random() * images.length);
    const encodedImage = encodeURIComponent(images[randomIndex]);
    return `/images/${encodedImage}`;
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh', paddingTop: '80px' }}>
    <div style={{ maxWidth: "800px", width: '100%' }}>
      <div className="card" style={{maxWidth: "100%"}}>
        <div className="card-body d-flex flex-column align-items-center p-3">
          {/* Profile Image */}
          <div className="mb-2">
            <img 
            //   src="/placeholder.svg" 
            src={getRandomImage()}

              alt="Profile" 
              className="rounded-circle border"
              style={{
                width: '80px',
                height: '80px',
                objectFit: 'contain'
              }}
            />
          </div>
          
          {/* Username */}
          {/* <h6 className="card-title mb-2 bold">{profileData.name}</h6> */}
          <h5 className="card-title mb-2" style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{profileData.name}</h5>

          
          {/* Score */}
          <div className="text-muted">
            점수: <span className="text-primary fw-bold">{point}</span>
          </div>
            <table className="table table-striped table-hover mt-3" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#f2f2f2' }}>
                  
                  <th style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold',width: '10%'  }}>ID</th>
                  <th style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold',width: '15%'  }}>Level</th>
                  <th style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold' }}>Title</th>
                </tr>
              </thead>
              <tbody>
                {profileData.solvedQ.map((q, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid #ddd' }} onClick={() => window.open(q.url,'_blank')}>
                    <td style={{ padding: '10px', textAlign: 'center' }}>{q.id || 'Unknown ID'}</td>
                    <td style={{ padding: '10px', textAlign: 'center' }}>{q.level || 'Unknown Level'}</td>
                    <td style={{ padding: '10px' }}>{q.title || 'Unknown Title'}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      </div>
    </div>
    </Container>
  )
}