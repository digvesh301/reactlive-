import React, { useState ,useEffect} from "react";

const Contact=()=>{
    let num=8
    const [form,setform] = useState({
        fname:"",
        email:"",
        mobile:""
    });
    const inputevent=(event)=>{
        const {name,value}=event.target
        // console.log(name);
        console.log(form);
        setform((prevalue)=>{
            return {...prevalue,[name]:value}
        })
    }

   
  

    const submits=()=>{
        num=9
        const {fname,email,mobile}=form
        console.log(fname)
            // const fname=form.fname;
            // const email=form.email;
            // const mobile=form.mobile;
         alert(`                Success full submited`+`
                your fullname is ${fname}
                your mobile number is ${mobile}
                yout email is ${email}`)
    }

    return(
        <>
        <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
        <h1>welcome to Contact page 😄</h1>
        <form onSubmit={submits}>
        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Fullname</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" name="fname" onChange={inputevent}  placeholder="Enter your name" required/>
        </div>

        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Moblie Number</label>
        <input type="number" className="form-control" id="exampleFormControlInput1" name="mobile" onChange={inputevent}  placeholder="Mobile number" required/>
        </div>

        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" name="email" onChange={inputevent}  placeholder="name@example.com" required/>
        </div>
        <div class="col-12">
        
        <button type="submit"  className="btn btn-primary">Sign in</button>
        
    </div>
    </form>
    </div>
    </div>
    </div>

        </>
    );

}
export default Contact;