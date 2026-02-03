import './App.css';
import ExampleComponents from './ExampleComponents';
import ExampleConditionalRendering from './ExampleConditionalRendering';
import ExampleMappingOverArrays from './ExampleMappingOverArrays';
import ExampleProps from './ExampleProps';
import ExamplePropDestructuring from './ExamplePropsDestructuring';
import ExampleStateNotSynchronous from './ExampleSetStateIsNotSynchronous';
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
      <ExampleMappingOverArrays />
      <ExampleConditionalRendering />
      <ExamplePropDestructuring />
      <ExampleStateNotSynchronous />
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
