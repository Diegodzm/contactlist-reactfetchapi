import './Contactlist.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import DeleteModal from '../Components/Modal';
import { useContext } from 'react';
import { Context } from '../store/Context';


function Contactlist() {
    const {store,actions}=useContext(Context)
    let newList=[]
    let listof_contacts= (store.listOfContacts)
    const navigate=useNavigate()
    const editarContacto=(index)=>{
        actions.setEdit(true)
        const contactoEditado=listof_contacts[index]
        contactoEditado.index=index
        actions.setContact(contactoEditado)
        navigate("/Form")

    }
    
 
    return <div className=''>
       
        <div className="BtnTopBox d-flex justify-content-end">
            <Link to="/Form"><button className="btn btn-success me-5 mt-5"> Add new Contact</button></Link>
        </div>
        <div>
            <div className='ContactInfo'>
               
                <ul>{store.listOfContacts.map((contact,index)=>  
                
                <li className='ListaContactos  border d-flex p-2 mt-4'key={index}> 
                        <img className='p-1 mx-2' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' alt='none'></img>
                        <div className='mt-4 ms-5 d-flex-block Conct_list'>
                            <h5 className='' > {listof_contacts[index]?.Fullname}</h5>
                            <div><FontAwesomeIcon className='me-2' icon={faLocationDot}/>{listof_contacts[index]?.Address}</div>
                            <div><FontAwesomeIcon className='me-2' icon={faPhone} />{listof_contacts[index]?.Phone}</div>
                            <div className=''><FontAwesomeIcon className='me-2' icon={faEnvelope} />{listof_contacts[index]?.Email}</div>
                        </div>
                        <div className='ContactIcons'>
                            <Link to="/Form"> <FontAwesomeIcon className='btn' icon={faPencil} onClick={e=>editarContacto(index)}/></Link>
                            <DeleteModal index={index}></DeleteModal>
                        </div>
                    </li>)}
                  
                </ul>
                
            </div>
        </div>
    </div>

 



}

export default Contactlist