
import React, { useState } from 'react';
import './App.css';

function App() {

  //for the email
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [messageEmail, setMessageEmail] = useState('');
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
  //             yourname @ domain   .  com          ( .uk )

  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setIsValidEmail(true);
      setMessageEmail('Your email looks good!');
    } else {
      setIsValidEmail(false);
      setMessageEmail('Please enter a valid email!');
    }
  };

  //for the phonenb
  const [isValidPhoneNb, setIsValidPhoneNb] = useState(false);
  const [messagePhoneNb, setMessagePhoneNb] = useState('');
  const phoneNbRegex = new RegExp(/^[0-9]{8}$/);//   or      phoneNbRegex =/^[0-9]{8}$/;
  //const myregExp =new RegExp(pattern[, flags]) 

  const validatePhoneNb = (event) => {
    const phoneNb = event.target.value;
    if (phoneNbRegex.test(phoneNb)) {
      setIsValidPhoneNb(true);
      setMessagePhoneNb('Your Phone number looks good!');
    } else {
      setIsValidPhoneNb(false);
      setMessagePhoneNb('Please enter a valid Phone Number!');
    }
  };


  return (
    <div className="container">
      <label>Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        className="an-input"
        onChange={validateEmail}
      />

      {/*If the entered email is valid, the message will be blue, otherwise it will be red. */}
      <div className={`message ${isValidEmail ? 'success' : 'error'}`}>
        {messageEmail}
      </div>
      <label>Phone</label>
      <input
        placeholder="Enter your phone number"
        className="an-input"
        onChange={validatePhoneNb}
      />

      {/*If the entered phone number is valid, the message will be blue, otherwise it will be red. */}
      <div className={`message ${isValidPhoneNb ? 'success' : 'error'}`}>
        {messagePhoneNb}
      </div>



    </div>
  );
}

export default App;