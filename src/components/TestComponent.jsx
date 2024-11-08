import { useEffect, useState } from "react";
import apiClient from "../lib/apis/apiClient";

function TestComponent(){

    const [userName, setUserName] = useState();

    async function fetchData() {
        try{
            const response = await apiClient.get("/users/test");
            setUserName(response.data);
            console.log("서버에서 받은 데이터:", response.data);
        }catch(err){
            console.error("API 요청 중 오류 발생: ",err);
        }
    }
    useEffect(function(){
        fetchData();
    }, []);

    return(
        <div>
            Test {userName}
            <h1></h1>
        </div>
    )
}

export default TestComponent;