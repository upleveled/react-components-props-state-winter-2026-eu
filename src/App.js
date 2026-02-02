import './App.css';
import ExampleComponents from './ExampleComponents';
import ExampleProps from './ExampleProps';

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
    </div>
  );
}
