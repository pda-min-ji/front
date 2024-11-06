const BASE_URI = '/api'

export async function serverLogin({userName, password}) {
    try{
        const res = await fetch(`${BASE_URI}/users/login`,{
            method: "POST",
            body: JSON.stringify({
                userName,
                password,
            }),
            headers:{
                'Content-Type':'application/json',
            },
        }) ;
        return await res.json();
    }catch(err){
        console.error(err);
        return {};
    }
       
}

export async function serverLogout() {
    const res = await fetch(`${BASE_URI}/users/logout`);
    return await res.json();
}