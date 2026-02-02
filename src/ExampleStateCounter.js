// 1. Import useState from react
import { useState } from 'react';

export default function ExampleStateCounter() {
  // 2. Create state variable
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>ExampleStateCounter</h1>
      <div
        style={{
          display: 'inline-block',
          border: '1px solid #ddd',
          padding: '3px',
          borderRadius: 2,
        }}
      >
        {/* 3. Use state variable */}
        {count}
      </div>

      <button
        onClick={() => {
          // 4. Update state variable value
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}
