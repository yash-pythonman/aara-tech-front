import axios from "axios"

const ApiHandler = (url, method, data={})=>{
    const token = localStorage.getItem("accessToken")
    var header={}
    if (url !=="auth/token/"){
        header = {"Authorization":`Bearer ${token}`}
    }
    url = `http://yashpal.com:8000/${url}`
    return  axios({url:url, method:method, data:data, headers:header}).then(response=>{return response}).catch(error=>{ return error})
}
export default ApiHandler;