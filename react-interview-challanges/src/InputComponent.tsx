import {useEffect, useState} from 'react'

export default function InputComponent () {
    const [name, setName] = useState("")
    const [touched,setTouched] = useState(false)

    const trimmeredName = name.trim();

    const error = touched &&
                trimmeredName.length === 0 ? 
                "Please enter name" : touched && trimmeredName.length < 6 ?
                 "enter name with more than 6 letter" : ""

    const success = touched && error === "" ? "Good Job" : ""

    useEffect(()=> {
        const controller = new AbortController();
        
        return(
            controller.abort()
        )
    },[name])


    return(
        <div style={{
            margin:"10px"
        }}>
        <label style={{
            padding:"10px"
        }}>Enter your name</label>
        <input name="useName" value={name} onChange={(e)=> setName(e.target.value)} onBlur={()=>setTouched(true)}/>
        <div style={{
            color: "red"
        }}>{error}</div>
        {success && success + " "+ name}
        </div>
        
    
    )

}