import { useState } from "react";
import {Form, Button} from "react-bootstrap"
import ApiHandler from "../helper/ApiHandler"
const AddShop= ()=>{
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [lat, setLat] = useState("")
    const [long, setLong] = useState("")

    const [message, setMessage] = useState("")

    const OnSumbitHandler = async e =>{
        e.preventDefault()
        const apiResponse = await ApiHandler("shop/", 
                    "POST", 
                    {"name":name, 
                    "address":address, 
                    "lat":lat,
                    "long":long
                })
            if (apiResponse.status === 201){
                setMessage(<spam  style={{color:"white", background:"green", padding:"5px"}}> Shop Added successfully.</spam>)
                setName("")
                setAddress("")
                setLat("")
                setLong("")
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
<h2> Add New Shop </h2>
<p>{message}</p>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Control type="text" placeholder="Enter Shop Name" onChange={(e)=>setName(e.target.value)} value={name}  />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicAddress">
    <Form.Control type="text" placeholder="Address" onChange={(e)=>setAddress(e.target.value)} value={address}  />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicLat">
    <Form.Control type="text" placeholder="Latitude" onChange={(e)=>setLat(e.target.value)}  value={lat}/>
  </Form.Group>
  <Form.Group className="mb-3"  controlId="formBasicLong">
    <Form.Control type="text" placeholder="Longitude" onChange={(e)=>setLong(e.target.value)} value={long} />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={e=>{OnSumbitHandler(e)}}>
    Submit
  </Button>
</Form>
    </div>
}

export default AddShop;