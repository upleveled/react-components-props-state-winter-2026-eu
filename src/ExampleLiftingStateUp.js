import { useState } from 'react';

export default function ExampleLiftingStateUp() {
  // 2. State was "lifted up" to here
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <h1>ExampleLiftingStateUp</h1>
      {/* 3. We added the `isOn` and `setIsOn` props to both components */}
      <LightBulb isOn={isOn} />
      <LightSwitch isOn={isOn} setIsOn={setIsOn} />
    </div>
  );
}

// 4. Add `props` parameter to accept props
function LightBulb(props) {
  // 1. Previously, the state was here
  // const [isOn, setIsOn] = useState(false);

  // 5. Use props within component
  return <div>Lightbulb is {props.isOn ? '🌞 ON' : '🌑 OFF'}</div>;
}

function LightSwitch(props) {
  return <button onClick={() => props.setIsOn(!props.isOn)}>Toggle</button>;
}
