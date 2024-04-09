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
    }
    else{
      actions.handleOnSubmit(e)
    }
  }
  
    return <form className='col-10 mx-auto mt-5'>
        <h2 className="mb-4">Add a new contact</h2>
    <div className="form-group p-2">  
      <label for="FullnameInput">Full name</label>
      <input name='Fullname' type="text" className="form-control" id="FullnameInput" placeholder="Full name" value={store.contact.Fullname}  onChange={actions.handleOnChange}></input>
     
    </div>
    <div className="form-group p-2">
      <label for="EmailInput">Email</label>
      <input name='Email' type="text" className="form-control" id="EmailInput" placeholder="Enter Email" value={store.contact.Email}onChange={actions.handleOnChange}></input>
      
    </div>
    <div className="form-group p-2">
      <label for="PhoneInput">Phone</label>
      <input name='Phone' type="number" className="form-control" id="PhoneInput" placeholder="Enter phone" value={store.contact.Phone} onChange={actions.handleOnChange}></input>
      
    </div>
    <div className="form-group p-2">
      <label for="AddressInput">Adress</label>
      <input name='Address' type="text" className="form-control" id="AdressInput" placeholder="Enter address" value={store.contact.Address} onChange={actions.handleOnChange}></input>
      <button className='btn btn-primary col-12 mt-4 mb-2 mx-auto' onClick={e=>guardar(e)}>save</button>
      
    </div>
 
    
    
    <Link to="/">or get back to contacts</Link>
  </form>
}

export default Form