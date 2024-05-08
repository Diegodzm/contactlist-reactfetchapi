import './Form.css'
import {Link} from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { Context } from '../store/Context';



function Form() {
  
  const {store,actions}=useContext(Context)


  const guardar=(e)=>{
    e.preventDefault()
  
    if(store.edit){
      actions.setEdit(false)
      actions.insertContact(store.contact.index)
      const id= store.contact.id
      console.log(id)
      console.log(store.contact)
      actions.updateContact(store.contact,id)
     
      
    }
    else{
      actions.createContact(store.contact)
      actions.handleOnSubmit(e)
      
    }
    
  }
  
    return <form className='col-10 mx-auto mt-5'>
        <h2 className="mb-4">Add a new contact</h2>
    <div className="form-group p-2">  
      <label for="Nameinput">Name</label>
      <input name='name' type="text" className="form-control" id="Nameinput" placeholder=" name" value={store.contact.name}  onChange={actions.handleOnChange}></input>
     
    </div>
    <div className="form-group p-2">
      <label for="EmailInput">Email</label>
      <input name='email' type="text" className="form-control" id="EmailInput" placeholder="Enter email" value={store.contact.email}onChange={actions.handleOnChange}></input>
      
    </div>
    <div className="form-group p-2">
      <label for="PhoneInput">Phone</label>
      <input name='phone' type="number" className="form-control" id="PhoneInput" placeholder="Enter phone" value={store.contact.phone} onChange={actions.handleOnChange}></input>
      
    </div>
    <div className="form-group p-2">
      <label for="AddressInput">Address</label>
      <input name='address' type="text" className="form-control" id="AdressInput" placeholder="Enter address" value={store.contact.address} onChange={actions.handleOnChange}></input>
      <button className='btn btn-primary col-12 mt-4 mb-2 mx-auto' onClick={e=>guardar(e)}>save</button>
     
      
    </div>
 

    
    <Link to="/">or get back to contacts</Link>
  </form>
}


export default Form