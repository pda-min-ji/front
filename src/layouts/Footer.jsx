// // import React from 'react';
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
// import '../App.css'
// export default function MMFooter() {
//   return (
//     <MDBFooter
//       bgColor='light'

//       className='text-center text-lg-start text-muted'
//       style={{ width: '100%' ,position:'relative', padding: '10px 0'}}
//     >
//       {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
//         <div className='me-5 d-none d-lg-block'>
//           <span>Get connected with us on social networks:</span>
//         </div>

//         <div>
//           <a href='' className='me-4 text-reset'>
//             <MDBIcon color='secondary' fab icon='github' />
//           </a>
//         </div>
//       </section> */}

//       <section className='' style={{margin:'0 0', padding :'0 0'}} >
//         <MDBContainer>
//         {/* <MDBContainer className='text-center text-md-start mt-5' style={{padding: '0 10px', margin:'0'}}> */}
//           <MDBRow className='mt-3'>
//             <MDBCol md='3' lg='3' xl='3' className='mx-auto mb-4'>
//               <h6 className='text-uppercase fw-bold mb-4'>
//                 <MDBIcon color='secondary' icon='gem' className='me-3' />
//                 Company name
//               </h6>
//               <p className='footer-text'>
//                 민지와 아이들 ^.^
//               </p>
//             </MDBCol>

//             <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
//               <h6 className='text-uppercase fw-bold mb-2'>Useful</h6>
//               <p>
//                 <a href='https://www.acmicpc.net/' className='footer-text' target="_blank" rel="noopener noreferrer">
//                  백준
//                 </a>
//               </p>
//               <p>
//                 <a href='https://programmers.co.kr/' className='footer-text' target="_blank" rel="noopener noreferrer">
//                   프로그래머스
//                 </a>
//               </p>
//               <p>
//                 <a href='https://level.goorm.io/?_gl=1*c8bl64*_gcl_au*MTIxMDM1MDQxOC4xNzMwODczOTk3' className='footer-text' target="_blank" rel="noopener noreferrer">
//                   구름
//                 </a>
//               </p>
//               <p>
//                 <a href='https://www.codetree.ai/' className='footer-text' target="_blank" rel="noopener noreferrer">
//                   코드트리
//                 </a>
//               </p>
//             </MDBCol>

//             <MDBCol md='2' lg='2' xl='3' className='mx-auto mb-4'>
//               <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
//               <p className='footer-text'>
//                 {/* <MDBIcon color='secondary' icon='home' className='me-2' /> */}
//                 민영언니
//               </p>
//               <p className='footer-text'>
//                 {/* <MDBIcon color='secondary' icon='envelope' className='me-3' /> */}
//                 택이님
//               </p>
//               <p className='footer-text'>
//                 {/* <MDBIcon color='secondary' icon='phone' className='me-3' />  */}
//                 하민지
//               </p>
//               <p className='footer-text'>
//                 {/* <MDBIcon color='secondary' icon='print' className='me-3' />  */}
//                 주훈짱^_^
//               </p>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       </section>

//       {/* <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
//         contact : 
//         <a className='text-reset fw-bold' href='https://github.com/pda-min-ji'>
//              pda-min-ji
//         </a>
//       </div> */}
//     </MDBFooter>
//   );
// }

// src/layouts/Footer.jsx
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function MMFooter() {
  return (
    <MDBFooter
      bgColor='light'
      className='text-center text-lg-start text-muted'
      style={{ width: '100%', position: 'relative', padding: '10px 0', margin: '0' }} // 패딩과 마진 조정
    >
      <section className=''>
        <MDBContainer className='text-center text-md-start' style={{ padding: '0' }}> {/* 내부 패딩 제거 */}
          <MDBRow className='mt-3'>
            <MDBCol md='6' lg='6' xl='6' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-1' style={{fontSize:'0.9rem'}}> {/* 여백 줄이기 */}
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Company name
              </h6>
              <p className='footer-text mb-1'> {/* 여백 줄이기 */}
                민지와 아이들 ^.^
              </p>
            </MDBCol>

          <MDBCol md='3' lg='3' xl='3' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-1' style={{ fontSize: '0.9rem' }}>
              Useful
            </h6>
            
            <MDBRow>
              <MDBCol>
                <p className='footer-text mb-1'>
                  <a href='https://www.acmicpc.net/' className='text-reset no-underline' target="_blank" rel="noopener noreferrer">
                    백준
                  </a>
                </p>
                <p className='footer-text mb-1'>
                  <a href='https://programmers.co.kr/' className='text-reset no-underline' target="_blank" rel="noopener noreferrer">
                    프로그래머스
                  </a>
                </p>
              </MDBCol>
              
              <MDBCol>
                <p className='footer-text mb-1'>
                  <a href='https://level.goorm.io/?_gl=1*c8bl64*_gcl_au*MTIxMDM1MDQxOC4xNzMwODczOTk3' className='text-reset no-underline' target="_blank" rel="noopener noreferrer">
                    구름
                  </a>
                </p>
                <p className='footer-text mb-1'>
                  <a href='https://www.codetree.ai/' className='text-reset no-underline' target="_blank" rel="noopener noreferrer">
                    코드트리
                  </a>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>

            <MDBCol md='3' lg='3' xl='3' className='mx-auto mb-4' >
              <h6 className='text-uppercase fw-bold mb-1' style={{fontSize:'0.9rem'}}> {/* 여백 줄이기 */}
                Contact
              </h6>
              <MDBRow className='g-0 p-0'>
                <MDBCol className='g-0 p-0'>
                  <p className='footer-text mb-0'>
                    <a href ='https://github.com/MinYeong-mkk'className='text-reset no-underline' target="_blank" >
                    민영언니
                    </a>
                  </p>
                </MDBCol>
                <MDBCol className='g-0 p-0'>
                  <p className='footer-text mb-0'>
                    <a href ='https://github.com/Chaean00'className='text-reset no-underline' target="_blank" >
                    택이님
                    </a>
                  </p>
                </MDBCol>
              </MDBRow>
              
              <MDBRow className='g-0 p-0'>
                <MDBCol className='g-0 p-0'>
                  <p className='footer-text mb-0'>
                    <a href = 'https://github.com/0321minji' className='text-reset no-underline' target="_blank" >
                    {/* <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88 */}
                    민지
                    </a>
                  </p>
                </MDBCol>
                <MDBCol className='g-0 p-0'>
                  <p className='footer-text mb-0 p-0'>
                    <a href='https://github.com/jjjuhoon' className='text-reset no-underline' target="_blank" rel="noopener noreferrer">
                    {/* <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89 */}
                    주훈짱^_^
                    </a>
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}