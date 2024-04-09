export const getState = ({ getActions, getStore, setStore }) => {
    const contact = {}
    return {
        store: {
            contact: {

                Fullname: "",
                Email: "",
                Phone: 0,
                Address: "",
                index: null
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

                        Fullname: "",
                        Email: "",
                        Phone: 0,
                        Address: "",
                    },
                     listOfContacts: [...store.listOfContacts,{...store.contact}]
                    })                   
            },
            quitarContacto(index){
                const  store  = getStore();
                store.listOfContacts.splice(index,1)
                setStore({listOfContacts:store.listOfContacts})

            },

            modificarContacto(event,index){
              
            }

        }
    }
}