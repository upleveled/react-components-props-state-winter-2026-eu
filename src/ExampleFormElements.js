import { useState } from 'react';

export default function ExampleFormElements() {
  const [email, setEmail] = useState('');

  return (
    <div>
      <h1>ExampleControlledComponentsCheckboxes</h1>
      {/*
        <form> is good for:
        1. Pressing "return" submits form
        2. Better accessibility
        3. onSubmit function when form is submitted
      */}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log('form submitted');
          // Do more things with the form data
          console.log('email address is', email);
        }}
      >
        <input
          value={email}
          onChange={(event) => {
            setEmail(event.currentTarget.value);
          }}
        />
      </form>
      Email: {email}
    </div>
  );
}
