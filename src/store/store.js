

export const getState = ({ getActions, getStore, setStore }) => {
    return {
        store: {
            contact: {

                name: "",
                phone: "",
                email: "",
                address: ""
               
            },

        listOfContacts: [],
   
        },
        actions: {
            insertContact:(index)=>{
                const {listOfContacts,contact}=getStore()
                listOfContacts[index]= contact
                setStore({listOfContacts})
  
                
            },
            setEdit:(value)=>{
                setStore({edit:value})

            },
            setContact:(contact)=>{
                setStore({contact:contact})

            },
            handleOnChange: (event) => {
                let {contact}= getStore()
                const {name,value} = event.target
                contact[name]= value
                setStore(contact);
                console.log(getStore().contact)

            },
       
            handleOnSubmit: (event) => {
                const  store  = getStore();
                event.preventDefault();
                  setStore({
                    contact: {

                        name: "",
                        email: "",
                        phone: "",
                        address: "",
                    },
                     listOfContacts: [...store.listOfContacts,{...store.contact}]
                     
                  
                    })      
                          
            },

            quitarContacto(index){
                const  store  = getStore();
                store.listOfContacts.splice(index,1)
                setStore({listOfContacts:store.listOfContacts})
            },
            createAgenda(){ 
               
                fetch('https://playground.4geeks.com/contact/agendas/Agendadzm', {
                    method: "POST",
                    body:JSON.stringify(),
                    headers: {
                     "Content-Type": "application/json"
                   }
             
                  }).then(response=>response.json())
                  .then(data =>getStore.listOfContacts=data)
                  .catch(error=>console.log(error))
              },
            createContact(contact){
                const store= getStore
                console.log(contact)
                fetch('https://playground.4geeks.com/contact/agendas/Agendadzm/contacts', {
                    method: "POST",
                    body:JSON.stringify(contact),
                    headers: {
                     "Content-Type": "application/json"
                   }
             
                  }).then(data =>console.log(data))
                  .catch(error=>console.log(error))

            },
          
            getAgenda(){      
                const store= getStore()
                
                fetch('https://playground.4geeks.com/contact/agendas/Agendadzm/contacts', {
                    method: "GET",
                    headers: {
                     "Content-Type": "application/json"
                   }
             
                  }).then(response=>response.json())
                  .then(data =>setStore({listOfContacts:[...data.contacts]}))
                  .catch(error=>console.log("error"))
                  console.log(store.listOfContacts)
  
  

              },
            updateContact(contact,id){

                fetch('https://playground.4geeks.com/contact/agendas/Agendadzm/contacts/'+id, {
                    method: "PUT",
                    body:JSON.stringify(contact),
                    headers: {
                     "Content-Type": "application/json"
                   }
             
                  }).then(response=>response.json())
                  .then(data =>console.log(data))
                  .catch(error=>console.log("error"))
          
    
            },
            delContact(id){

                fetch('https://playground.4geeks.com/contact/agendas/Agendadzm/contacts/'+id, {
                    method: "DELETE",
                    headers: {
                     "Content-Type": "application/json"
                   }
             
                  }).then(response=>response.json())
                  .then(data =>console.log(data))
                  .catch(error=>console.log("error"))
          
    
            }
            
     
               
             

        }
    }
}