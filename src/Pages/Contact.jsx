import React from 'react'

const Contact = () => {
  const handleFormSubmit = (formData) =>{
const formInputData = Object.fromEntries(formData.entries())
  }
  return (
    <section className='section-contact'>
      <h2 className='container-title'>Contact US</h2>

      <div className="contact-wrapper container">
        
      <form action={handleFormSubmit}>
        <input type="text" name="username" id="" required placeholder='Enter Your Name' autoComplete='off'/>
        <input type="email" className='form-control' name="email" id="" required placeholder='Enter Your Email' autoComplete='off' />
        <textarea className='form-control' rows="10" name="message" id="" required placeholder='Enter Your message' autoComplete='off' />
        <button type='submit' value="Send">Send</button>
      </form>
      </div>
    </section>
  )
}

export default Contact