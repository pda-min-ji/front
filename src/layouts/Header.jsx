import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useUser } from '../contexts/userContext';
export default function MMHeader() {
    const expand = 'lg';
    // const [isLogOn, setIsLogOn] = useState();
    const {name,onLogin,Logout,first,id,goToProfile} = useUser();
    console.log(id);
    // const profileUrl = `/profile/${id}`;

    return (
        <Navbar fixed="top" style={{marginBottom:'20px', height: '60px', // 헤더의 높이를 설정
            '--header-height': '60px' }} expand={expand} className="bg-body-tertiary mb-3">
            <Container fluid>
                <Navbar.Brand href="/">{first}문 - {name}의 문제</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            Offcanvas Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                            {/* {!isLogOn ?  */}
                            {!onLogin?
                            (
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="/users/login">로그인</Nav.Link>
                                    <Nav.Link href="/users/signup">회원가입</Nav.Link>
                                    <Nav.Link href="/ranking" >랭킹</Nav.Link>
                                </Nav>
                            ) : (
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link 
                                    onClick={()=>goToProfile(id)}
                                    // href={profileUrl}
                                    
                                    >마이페이지</Nav.Link>
                                    <Nav.Link onClick={Logout}>로그아웃</Nav.Link>
                                    <Nav.Link href="/ranking" >랭킹</Nav.Link>
                                </Nav>
                            )

                            }

                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}