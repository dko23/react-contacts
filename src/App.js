
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
  
  return (
    <>
      <div className='container'>
  <div className='row'>
    <div className='col-md-4'>
    <ContactsForm old={handleAddContact }/>
    </div> 
    <div className='col-md-8'>
    <Contact book={state} /> 
    </div> 
</div>
</div>  
      
    
    </>
  ); 
}









