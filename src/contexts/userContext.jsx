import { createContext ,useContext,useEffect,useState} from "react";

export const UserContext = createContext();

export function UserProvider({children}){
    const [name,setName] = useState('민지');
    const [onLogin,setOnLogin]=useState(false);

    useEffect(()=>{
        const storedName = sessionStorage.getItem('name');
        if (storedName!==undefined){
            setOnLogin(true);
            setName(storedName);
            console.log(storedName)
        }
    },[])

    return (
        <UserContext.Provider value = {{name}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser(){
    const {name,setName,onLogin,setOnLogin}=useContext(UserContext);
    return {name,setName,onLogin,setOnLogin};
}