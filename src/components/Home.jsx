import { useEffect,useState } from "react"
import Shop from "./Shop" 
import Login from "./Login"
const Home = ()=>{
    const [targetComponent, setTargetComponetn] = useState()
    useEffect(()=>{
        if (localStorage.getItem("accessToken")){
            setTargetComponetn(<Shop/>)
        }
        else{
            setTargetComponetn(<Login/>)
        }
    },  [])
    return <div>
        {targetComponent}
    </div>
}

export default Home