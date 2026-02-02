import { useState } from 'react';

export default function ExampleStateEmail() {
  const [email, setEmail] = useState('');
  return (
    <div>
      <h1>ExampleStateEmail</h1>
      <div
        style={{
          background: '#eee',
          borderRadius: 6,
          display: 'inline-block',
          marginRight: 8,
          padding: 10,
        }}
      >
        Email: {email}
      </div>
      {/* Controlled component (value and onChange) */}
      <input
        value={email}
        onChange={(event) => {
          console.log(`Setting email to ${event.currentTarget.value}`);
          setEmail(event.currentTarget.value);
        }}
      />
    </div>
  );
}
