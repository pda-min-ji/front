// import React from 'react'

export default function UserProfile() {
  return (
    <div className="container-fluid">
      <div className="card" style={{maxWidth: '200px'}}>
        <div className="card-body d-flex flex-column align-items-center p-3">
          {/* Profile Image */}
          <div className="mb-2">
            <img 
            //   src="/placeholder.svg" 
            src="./assets/img/default_profile.png"

              alt="Profile" 
              className="rounded-circle border"
              style={{
                width: '50px',
                height: '50px',
                objectFit: 'contain'
              }}
            />
          </div>
          
          {/* Username */}
          <h6 className="card-title mb-2">사용자 이름</h6>
          
          {/* Score */}
          <div className="text-muted">
            내 점수: <span className="text-primary fw-bold">1,250</span>
          </div>
        </div>
      </div>
    </div>
  )
}