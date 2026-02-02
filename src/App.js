import './App.css';
import ExampleComponents from './ExampleComponents';
import ExampleProps from './ExampleProps';
import ExampleStateCounter from './ExampleStateCounter';
import ExampleStateEmail from './ExampleStateEmail';

export default function App() {
  return (
    <div className="App">
      <ExampleComponents />
      <ExampleProps
        name="Karl"
        age={23}
        street="Wibautstraat"
        postalCode="1012"
      />
      <ExampleStateCounter />
      <ExampleStateEmail />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
