import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useUser } from '../contexts/userContext';
export default function MMHeader() {
    const expand = 'lg';
    // const [isLogOn, setIsLogOn] = useState();
    const {name,onLogin,Logout,first} = useUser();
    
    // //바보같은 방법
    // useEffect(()=>{
    //     const intervalId = setInterval(()=>{
    //         const token = sessionStorage.getItem('accessToken');
    //         if(token && !isLogOn){
    //             setIsLogOn(true);
    //         } else if (!token) {
    //             setIsLogOn(false)
    //         }
    //     }, 10)
    //     return ()=>{
    //         clearInterval(intervalId)
    //     }
    // }, [isLogOn])
    

    // function Logout(){
    //     sessionStorage.clear();
    //     // setIsLogOn(false);
    //     setOnLogin(false);
    //     window.location.href = "/";
    // }


    return (
        <Navbar fixed="top" style={{marginBottom:'20px', height: '60px', // 헤더의 높이를 설정
            '--header-height': '60px' }} expand={expand} className="bg-body-tertiary mb-3">
            <Container fluid>
                <Navbar.Brand href="#">{first}문 - {name}의 문제</Navbar.Brand>
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
                                    <Nav.Link href="#contact" >랭킹</Nav.Link>
                                </Nav>
                            ) : (
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link onClick={Logout}>로그아웃</Nav.Link>
                                    <Nav.Link href="#contact" >랭킹</Nav.Link>
                                </Nav>
                            )

                            }
                        {/* <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form> */}
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}