import { useEffect, useState } from 'react';

export default function ExampleUseeffect() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [name2, setName2] = useState('');

  // document.title = 'title 2';

  // // 1. useEffect with no dependency array (this runs on
  // //    every re-rerender - changes to state or props)
  // //
  // // Avoid using this - it will often run more than you want
  // useEffect(() => {
  //   console.log('asdf');
  //   document.title = `${name} clicked ${count} times`;
  // });

  // // 2. useEffect with empty dependency array (this runs on
  // //    page load)
  // useEffect(() => {
  //   console.log('asdf');
  //   document.title = `${name} clicked ${count} times`;
  // }, []);

  // 3. useEffect with non-empty dependency array (this runs on
  //    page load and on any change to the variables in the
  //    dependency array)
  useEffect(
    () => {
      console.log('asdf');
      document.title = `${name} clicked ${count} times`;
      // Warning: Calling `setState` on one of the state variables
      // in the dependency array will cause an endless loop:
      // setName(name + 'zz1');
    },
    // The depedency array determines which variables to "watch"
    // to re-run the function above
    [name, count],
  );

  return (
    <div>
      <h1>ExampleUseeffect</h1>
      <input
        value={name}
        onChange={(event) => setName(event.currentTarget.value)}
      />
      <button onClick={() => setCount(count + 1)}>+</button>
      <br />
      <br />
      <br />
      <div>
        Unrelated:
        <input
          value={name2}
          onChange={(event) => setName2(event.currentTarget.value)}
        />
      </div>
    </div>
  );
}
