import { useState } from 'react';

export default function ExampleFormsWithControlledComponents() {
  // 1. Create state variable
  const [username, setUsername] = useState('');

  const [reversedUsername, setReversedUsername] = useState('');

  return (
    <div>
      <h1>ExampleFormsWithControlledComponents</h1>

      <form
        onSubmit={(event) => {
          // Stops the form from submitting to a URL
          // (the behavior which shows the ? in the URL and refreshes the page)
          event.preventDefault();

          // Do some additional work, based on the form data
          setReversedUsername(username.split('').reverse().join(''));
        }}
      >
        <label>
          Username
          <input
            // 2. Use state variable
            value={username}
            onChange={(event) => {
              // 3. Update the state variable value
              setUsername(event.currentTarget.value);
              // another option (may not always work): event.target.value
            }}
            // // This is the name sent via the form, if we do not prevent the default action
            // name="username"
          />
        </label>
        <button>Show reversed username</button>
      </form>

      <div>Reversed username: {reversedUsername}</div>
    </div>
  );
}
