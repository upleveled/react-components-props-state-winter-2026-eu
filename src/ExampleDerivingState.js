import { useEffect, useState } from 'react';

export default function ExampleDerivingState() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  // Warning: bad practice / anti-pattern / code smell
  const [positiveValues, setPositiveValues] = useState([]);

  useEffect(() => {
    // if (count1 > 0 && count2 > 0) {
    //   setPositiveValues([count1, count2]);
    // } else if (count1 <= 0 && count2 <= 0) {
    //   setPositiveValues([]);
    // } else if (count1 > 0 && count2 <= 0) {
    //   setPositiveValues([count1]);
    // } else if (count1 <= 0 && count2 > 0) {
    //   setPositiveValues([count2]);
    // }

    // Create a new array, and filter to only positive values
    setPositiveValues([count1, count2].filter((count) => count > 0));
  }, [count1, count2]);

  // Derive the state instead of state variable + useEffect
  const positiveValuesNonState = [count1, count2].filter((count) => count > 0);

  return (
    <div>
      <h1>ExampleDerivingState</h1>
      <div>
        <button onClick={() => setCount1(count1 + 1)}>+</button>
        <button onClick={() => setCount1(count1 - 1)}>-</button>
        {count1}
      </div>
      <div>
        <button onClick={() => setCount2(count2 + 1)}>+</button>
        <button onClick={() => setCount2(count2 - 1)}>-</button>
        {count2}
      </div>
      <div>Only positive values: {positiveValues.join(', ')}</div>
      <div>
        Only positive values (derived): {positiveValuesNonState.join(', ')}
      </div>
    </div>
  );
}
