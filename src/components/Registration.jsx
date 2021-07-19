import { useState } from "react";
import {Form, Button} from "react-bootstrap"
import ApiHandler from "../helper/ApiHandler"
const Registration= ()=>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [email, setEmail] = useState("")

    const [message, setMessage] = useState("")

    const OnSumbitHandler = async e =>{
        e.preventDefault()
        const apiResponse = await ApiHandler("registration/", 
                    "POST", 
                    {"username":username, 
                    "password":password, 
                    "email":email
                })
            if (apiResponse.status === 201){
                setMessage(<spam  style={{color:"white", background:"green", padding:"5px"}}> User Created successfully.</spam>)
                setUsername("")
                setPassword("")
                setConfirmPassword("")
                setEmail("")
            }
            else{
                const apiError = apiResponse.response
                const allError =  Object.keys(apiError.data).map((item)=>{
                   return <p><spam  style={{color:"white", background:"red", padding:"5px"}}>{item.charAt(0).toUpperCase() + item.slice(1)}:{apiError.data[item]}</spam><br/></p>
                })
                setMessage(allError)
            }
            }
    return <div>
<Form className="col-6" style={{marginLeft:"25%"}}>
<h2> Registration </h2>
<p>{message}</p>
  <Form.Group className="mb-3" controlId="formBasicUsername">
    <Form.Control type="text" placeholder="Enter Username" onChange={(e)=>setUsername(e.target.value)} value={username}  />
  </Form.Group>
  <Form.Group className="mb-3"  controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} value={email} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password}  />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
    <Form.Control type="password" placeholder="Confirm Password" onChange={(e)=>setConfirmPassword(e.target.value)}  value={confirmPassword}/>
    <Form.Text style={{color:"red"}}>{password===confirmPassword? "": "Please check the Entered Password."}</Form.Text>
  </Form.Group>
  <Button variant="primary" type="submit" onClick={e=>{OnSumbitHandler(e)}}>
    Register
  </Button>
</Form>
    </div>
}

export default Registration;