import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    let firstName = useRef();
    let lastName = useRef();
    let age = useRef();
    let gender = useRef();
    let email = useRef();
    let phone = useRef();
    let address = useRef();

    let navigate = useNavigate();

    let handleSignup = (e)=>{
        e.preventDefault();
        let signup = {
            firstName: firstName.current.value,
            lastName:  lastName.current.value,
            age:  age.current.value,
            gender: gender.current.value,
            email: email.current.value,
            phone: phone.current.value,
            address: address.current.value,
        }
        let config = {
            method : "POST",
            header : {"content-type":"xyz/json"},
            body : JSON.stringify(signup)
        }
        fetch("http://localhost:4001/Users" , config)
        .then(()=>{
            toast.success("Signup successfuly")
            setTimeout(()=>{ navigate("/")} , 3000)
        })
    }

    return ( <div className="add-signup-cont">
      <img  width="250" height="120" viewBox="0 0 114 30" fill="none" src="data:image/png;base64,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"/>
                <h1>SIGNUP !!</h1>
                <form onSubmit={handleSignup}>
                    <div className="inp-grp">
                        <label>First Name</label>
                        <input type="text" ref={firstName} required/>
                    </div>
                    <div className="inp-grp">
                        <label>Last Name</label>
                        <input type="text" ref={lastName}required/>
                    </div>
                    <div className="inp-grp">
                        <label>Age</label>
                        <input type="number" ref={age}required/>
                       
                    </div>
                    <div className="inp-grp">
                        <label>Gender</label>
                        <input type="text" ref={gender}required/>
                    </div>
                    <div className="inp-grp">
                        <label>Email</label>
                        <input type="text" ref={email}required/>
                    </div>
                    <div className="inp-grp">
                        <label>Phone</label>
                        <input type="text" ref={phone}required/>
                         
                    </div>

                    <div className="inp-grp">
                        <label>Address</label>
                       
                        <textarea name="" cols="20" rows="5" ref={address}></textarea>
                    </div>

                    <input type="submit" value="SignUp"/>
                </form>
                <ToastContainer />
            </div> );
}
 
export default  Signup;