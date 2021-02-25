import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendInquiryForm } from '../../actions'

function InquiryForm({ name }) {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const { isPending, err } = useSelector((state) => state.sendInquiryForm);

  const dispatch = useDispatch();
  const onSendInquiryForm = () => {
    dispatch(sendInquiryForm(formName, formEmail, formMessage));
  }

  return(
    <>
      <h4 style={{marginTop: ".7rem", marginBottom: "0"}}>Interested in {name}?</h4>
      <h5 style={{marginTop: "0", marginLeft: "1rem", marginBottom: "0"}}>Please let us know!</h5>
      <form action="">
          <p>
            <label htmlFor="name">
              Name: <br />
              <input 
                type="text" 
                id="name" 
                value={formName}
                onChange={e => setFormName(e.target.value)} 
                required/>
            </label>
          </p>
          <p>
            <label htmlFor="email">
              Email address: <br /> 
              <input 
                type="email" 
                id="email" 
                value={formEmail}
                onChange={e => setFormEmail(e.target.value)} 
                required/>
            </label>
          </p>
          <p>
            <label htmlFor="message">
              <h5 style={{marginBottom: "0"}}>Share a bit about yourself 
                <br />
                (area you're from, experience with rabbits):  
              </h5>
              <textarea 
                type="text" 
                rows="5" 
                id="message" 
                value={formMessage}
                onChange={e => setFormMessage(e.target.value)} />
            </label>
          </p>
          <button type="submit">test</button>
          <input type="submit" value="Submit" />
          <br />
          Please be sure and read our pet and shipping policy!
        </form>
    </>
  );
}

export default InquiryForm;
