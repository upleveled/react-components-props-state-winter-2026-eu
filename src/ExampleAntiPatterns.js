import { useState } from 'react';

// DO NOT USE
function GetelementbyidAntiPattern() {
  return (
    <button
      id="my-button"
      onClick={() => {
        const user = 'Karl';
        document.getElementById('my-button').textContent = `Hi ${user}`;
      }}
    >
      Log in
    </button>
  );
}

function WithoutAntiPattern() {
  const [user, setUser] = useState('');

  return (
    <button onClick={() => setUser('Karl')}>
      {!user ? 'Log in' : `Hi ${user}`}
    </button>
  );
}

export default function ExampleAntiPatterns() {
  return (
    <div>
      <h1>ExampleAntiPatterns</h1>

      <GetelementbyidAntiPattern />
      <WithoutAntiPattern />
    </div>
  );
}
