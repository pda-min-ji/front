import { createContext ,useContext,useEffect,useState} from "react";

export const UserContext = createContext();

export function UserProvider({children}){
    const [name,setName] = useState('민지');
    const [onLogin,setOnLogin]=useState(false);
    const [first,setFirst] =useState('민');

    useEffect(()=>{
        const storedName = sessionStorage.getItem('name');
        if (storedName!=null){
            setOnLogin(true);
            setName(storedName);
            setFirst(storedName.charAt(0));
            console.log(storedName, onLogin)
        }
        else{
            setName('민지');
        }
    },[]);

    // useEffect((loginName)=>{
    //     setName(loginName);
    //     setFirst(loginName.charAt(0));
    // },[onLogin]);

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
        setName(res.name);
        setFirst(res.name.charAt(0));
        setOnLogin(true);
    }

    return (
        <UserContext.Provider value = {{name,setName,onLogin,setOnLogin,Logout,first,Login}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser(){
    const {name,setName,onLogin,setOnLogin,Logout,first,Login}=useContext(UserContext);
    return {name,setName,onLogin,setOnLogin,Logout,first,Login};
}