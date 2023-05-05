import React from 'react'

export default function Contact(props) {
  return (
    <div>

  
          <div className='col-md-3'>
          {props.book.map((contact) =>(
        <div key={contact.phone}>
          <p>{contact.name}</p>
          <p>{contact.phone}</p>
          <p>{contact.location}</p>
        </div>
      ))}
</div>



    </div>
  )
}
