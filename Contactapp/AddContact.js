import React, { useState } from 'react'
import{ useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { toast } from "react-toastify";
const AddContact = () =>
 {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [number, setNumber] = useState("");


const contacts = useSelector((state)=> state);
const dispatch= useDispatch();

const history = useHistory();
const handleSubmit = (e) => {
    e.preventDefault();
    
    const checkEmail = contacts.find(
        (contact) => contact.email=== email && email
        );

        const checkNumber = contacts.find(
            (contact) => contact.number=== parseInt(number)
            );
    if (!email || !name || !number) {
        return toast.warning("Please fill in all fields!!");
      }
    if(checkEmail){
        return toast.error("This email already exist!");
    }
    if(checkNumber){
        return toast.error("This number already exist!");
    }
const data = {
    id: contacts[contacts.length -1].id + 1,
    name,
    email,
    number
};
dispatch({type: "ADD_CONTACT", payload: data})
toast.success("Student added successfully");
history.push("/");
};

return (

        <div className="container">
        <div className="row">
            <h1 className="display-3 my-5 text-center">
               Add Student
            </h1>

    <div className="col-md-6 shadow mx-auto p-5">
    
    <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
               
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder="Phone number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Student"
              />
            </div>
    </form>
    </div>
    </div>
    </div>
    );
};

export default AddContact