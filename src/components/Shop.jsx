import { useState, useEffect } from "react";
import ApiHandler from "../helper/ApiHandler"
const Shop = ()=>{
    const [shopList, setShopList] = useState("")
    const [message, setMessage] = useState("")
    const [location, setLocation] = useState("")
    const getCurrentLocation = ()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position)=>{
                setLocation({lat:position.coords.latitude, long:position.coords.longitude})
              });
          }
    }
    useEffect(()=>{getCurrentLocation()}, [])
    const OnSumbitHandler = async ()=>{
        if (location!==""){
        const apiResponse = await ApiHandler(`shop/?lat=${location['lat']}&long=${location['long']}`, "get")
            if (apiResponse.status === 200){
                setShopList(apiResponse.data.map((item, index)=>{
                    return <div className="col-4" key={item.id} style={{border: "solid orange 2px", margin:"2px", float:"left"}}>
                        <p> <b>Number </b> : {index+1}</p>
                        <p><b>Shop Name  </b> : {item.name}</p>
                    <p> <b>Distance </b> : {item.distance}</p>
                    </div>
                }))
            }
            else{
                const apiError = apiResponse.response
                const allError =  Object.keys(apiError.data).map((item)=>{
                   return <p><spam  style={{color:"white", background:"red", padding:"5px"}}>{item.charAt(0).toUpperCase() + item.slice(1)}:{apiError.data[item]}</spam><br/></p>
                })
                setMessage(allError)
            }
            }}
        useEffect(()=>{OnSumbitHandler()}, [location]);
    return <div style={{marginLeft:"25%"}}>
        <h2 >Shop List </h2>
        {message}
        {shopList}
    </div>
}

export default Shop;