import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link,useHistory,useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const EditContact = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [number, setNumber] = useState("");
    const {id}= useParams();
    
    const contacts= useSelector(state=> state);
    const dispatch = useDispatch();
    const history =useHistory();
    const currentContact = contacts.find(contact=> contact.id ===parseInt(id));
    useEffect(()=> {

      if(currentContact){
        setName(currentContact.name);
        setEmail(currentContact.email);
        setNumber(currentContact.number);
      }

    },[currentContact]);

    const handleSubmit = (e) => {
      e.preventDefault();
      
      const checkEmail = contacts.find(
          (contact) => contact.id !== parseInt(id) && contact.email === email
          );
  
          const checkNumber = contacts.find(
            (contact) => contact.id !== parseInt(id) && contact.number=== parseInt(number)
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
      id: parseInt(id),
      name,
      email,
      number
  };
  dispatch({type: "UPDATE_CONTACT", payload: data})
  toast.success("Student updated successfully");
  history.push("/");
  };


    return (
        <div className="container">

            {
                currentContact?( 
                <>
       <h1 className="display-3 my-5 text-center"> Edit student {id} </h1>
            
            <div className="row">

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
                className="btn btn-dark"
                type="submit"
                value="Update Student"
              />
              <Link to="/" className="btn btn-danger ml-4"> 
                
                Cancel 
                </Link>
            </div>
    </form>
    </div>
    </div>
    </>
                
    ):(
        <h1 className="display-3 my-5 text-center">
                Studentcontact with id {id} not exist
            </h1>
    )}
    </div>
    );
};

export default EditContact;
