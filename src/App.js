
import './App.css';
import { useState } from 'react';
import Contact from './Contacts';
import { ContactsForm } from './ContactsForm';

export default function App() {

  const [state, setState] = useState([
      { name: "Daniel", phone: "049934303", location: "Accra" },
      { name: "John", phone: "0894634303", location: "Kumasi" }
  ]);
  

  function handleAddContact(person) {
    setState([...state, person])
  }

  function handleDeleteContact(phone) {
    let deleteContact = state.filter((user) => user.phone !== phone)
    setState(deleteContact);
  }
  
  function handleEditContact(phone,updatedUser){
    const updatedContacts=(state.map(user => user.phone === phone ? updatedUser : user));
    setState(updatedContacts);
  };

  
  return (
    <>
      <div className='container'>
  <div className='row'>
    <div className='col-md-4'>
    <ContactsForm old={handleAddContact }/>
    </div> 
    <div className='col-md-8'>
    <Contact book={state} delete={handleDeleteContact} edit={handleEditContact} /> 
    </div> 
</div>
</div>  
      
    
    </>
  ); 
}









