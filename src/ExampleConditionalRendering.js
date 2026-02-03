import { useState } from 'react';

export default function ExampleConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [messageIsVisible, setMessageIsVisible] = useState(false);

  return (
    <div>
      <h1>ExampleConditionalRendering</h1>
      {/* Conditional rendering with ternary operator */}
      <div style={{ marginBottom: 10 }}>
        isLoggedIn:{' '}
        {isLoggedIn
          ? // Show welcome message if logged in
            'Welcome Karl'
          : // Show message prompting user to log in if not logged in
            'Please log in'}
      </div>
      {/* <button onClick={() => setIsLoggedIn(true)}>Log in</button>
      <button onClick={() => setIsLoggedIn(false)}>Log out</button> */}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log out' : 'Log in'}
      </button>

      {/* Conditional rendering with boolean operator */}
      <div style={{ marginTop: 30 }}>
        <button onClick={() => setMessageIsVisible(!messageIsVisible)}>
          Toggle message
        </button>

        {messageIsVisible && <div>Hidden message</div>}
      </div>
    </div>
  );
}
