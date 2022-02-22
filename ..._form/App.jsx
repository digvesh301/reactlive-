import { getRoles } from "@testing-library/react";
import React, { useState } from "react";
import './index.css'


const App=()=>{
    const [fullname,setFullname]=useState({
        fname:'',
        lname:'',
        email:''
    });
    const [getname,setgetname]=useState({
        fastname:'',
        lastname:'',
        emails:''
    })
   

    const inputEvent=(event)=>{
        // const value =event.target.value;
        // const name=event.target.name;
        const {value,name}=event.target;
        console.log(fullname.fname)

        setFullname((preValue)=>{

            return{...preValue,
                [name]:value};
            // if(name==='fname')
            // {
            //     console.log(preValue);
            //     return{...preValue,
            //     [name]:value};
            // }
            // else if(name==="lname"){
            //     console.log(preValue);
            //     return{
            //         fname:preValue.fname,
            //         lname:value,
            //         email:preValue.email
            //     };
            // }
            // else if(name==="email"){
            //     console.log(preValue);
            //     return{
            //         fname:preValue.fname,
            //         lname:preValue.lname,
            //         email:value
            //     };
            // }
            
        });
        
    }
    
    const onSubmit=(event)=>{
        event.preventDefault();
        setgetname(
            {fastname:fullname.fname,
             lastname:fullname.lname,
             emails:fullname.email}
        )
    
    }
    return(<div>
            <form onSubmit={onSubmit}>
                <h1>
                    Hello {getname.fastname} {getname.lastname} {getname.emails     }
                </h1>
                <input type='text' 
                name="fname"
                placeholder="Enter your fname" 
                onChange={inputEvent}
                value={fullname.fname} 
                />

                <input type='text'
                placeholder="Enter your lname" 
                name="lname"
                onChange={inputEvent}
                value={fullname.lname} 
                />

                <input type='email'
                placeholder="Enter your email" 
                name="email"
                onChange={inputEvent}
                //value={fullname.lname} 
                />

                <button type="onSubmit">
                     Click Me 🔥
                </button>
            </form>
        </div>
    )
}
export default App;