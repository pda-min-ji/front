import { createContext ,useContext,useEffect,useState} from "react";
export const UserContext = createContext();
import { useNavigate } from "react-router-dom";

export function UserProvider({children}){
    const [name,setName] = useState('민지');
    const [onLogin,setOnLogin]=useState(false);
    const [first,setFirst] =useState('민');
    const [id,setId] = useState();
    const navigate = useNavigate();


    useEffect(()=>{
        const storedName = sessionStorage.getItem('name');
        if (storedName!=null){
            setOnLogin(true);
            setName(storedName);
            setFirst(storedName.charAt(0));
        }
        else{
            setName('민지');
        }
    },[]);

    const Logout =()=>{
        sessionStorage.clear();
        // setIsLogOn(false);
        setOnLogin(false);
        setName('민지');
        setFirst('민')
        window.location.href = "/";
    }

    const Login = (res)=>{
        console.log(res, res.bojId);
        sessionStorage.setItem('name',res.name);
        sessionStorage.setItem('accessToken',res.token);
        sessionStorage.setItem('bojId',res.bojId);
        sessionStorage.setItem('id',res.id);
        setName(res.name);
        setFirst(res.name.charAt(0));
        setOnLogin(true);
        setId(res.id);
    }

    const goToProfile = (id) => {
        navigate(`/profile/${id}`);
    };

    return (
        <UserContext.Provider value = {{name,setName,onLogin,setOnLogin,Logout,first,Login,id,goToProfile}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser(){
    const {name,setName,onLogin,setOnLogin,Logout,first,Login,id,goToProfile}=useContext(UserContext);
    return {name,setName,onLogin,setOnLogin,Logout,first,Login,id,goToProfile};
}