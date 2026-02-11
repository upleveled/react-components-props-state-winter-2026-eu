import { useState } from 'react';

export default function ExampleControlledComponentsCheckboxes() {
  // 1. Create a state variable
  const [showInformation, setShowInformation] = useState(false);

  return (
    <div>
      <h1>ExampleControlledComponentsCheckboxes</h1>

      <input
        type="checkbox"
        // 2. Connect the state variable to the checked prop
        checked={showInformation}
        onChange={(event) => {
          // 3. Update the state variable
          setShowInformation(event.currentTarget.checked);
        }}
      />

      {showInformation && <div>Hidden information</div>}
    </div>
  );
}
