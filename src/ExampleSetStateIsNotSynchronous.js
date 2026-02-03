import { useState } from 'react';

export default function ExampleStateNotSynchronous() {
  const [isOn, setIsOn] = useState(true);

  function toggleLight() {
    // console.log('before', isOn); // true setIsOn(!isOn); //
    // After setIsOn, the value isn't immediately changed
    // console.log('after', isOn); // true

    // Recommendation: set variable with the new value
    const newIsOn = !isOn;
    console.log('before', isOn);
    setIsOn(newIsOn);
    console.log('after', newIsOn);
  }

  // Outside of the function will also show the correct value,
  // because this will run after re-render
  console.log('outside of the function', isOn);

  return (
    <div>
      light bulb is {isOn ? 'on 🌝 ' : 'off 🌑 '}
      <button onClick={() => toggleLight()}>toggle</button>
    </div>
  );
}
