import { useState } from "react";
import {Form, Button} from "react-bootstrap"
import ApiHandler from "../helper/ApiHandler"
const Login= ()=>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const OnSumbitHandler = async (e) =>{
        e.preventDefault()
        const response = await ApiHandler("auth/token/", 
                    "POST", 
                    {"username":username, 
                    "password":password, 
                    "grant_type":"password",
                    "client_id":"frontend"
                })
            if (response.status === 200){
                setError("")
                localStorage.setItem("accessToken", response.data["access_token"])
                localStorage.setItem("refreshToken", response.data["refresh_token"])
                localStorage.setItem("expiresIn", response.data["expires_in"])
                setUsername("")
                setPassword("")
            }
            else{
                setError("Invalid Username or Password.")
            }
            }
            
    return (<div>
<Form className="col-6" style={{marginLeft:"25%"}}>
<h2> Login </h2>
<p style={{color:"red"}}>{error}</p>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Enter Username" onChange={(e)=>setUsername(e.target.value)} value={username}  />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}  value={password}/>
  </Form.Group>
  <Button variant="primary" type="submit" onClick={(e)=>OnSumbitHandler(e)}>
    Login
  </Button>
</Form>
    </div>)
}

export default Login;