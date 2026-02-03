import './App.css';
import ExampleComponents from './ExampleComponents';
import ExampleConditionalRendering from './ExampleConditionalRendering';
import ExampleConvertingClassComponentsToFunctionComponents from './ExampleConvertingClassComponentsToFunctionComponents';
import ExampleFormsWithControlledComponents from './ExampleFormsWithControlledComponents';
import ExampleLiftingStateUp from './ExampleLiftingStateUp';
import ExampleMappingOverArrays from './ExampleMappingOverArrays';
import ExampleProps from './ExampleProps';
import ExamplePropDestructuring from './ExamplePropsDestructuring';
import ExampleStateNotSynchronous from './ExampleSetStateIsNotSynchronous';
import ExampleStateCounter from './ExampleStateCounter';
import ExampleStateEmail from './ExampleStateEmail';
import ExampleStyling from './ExampleStyling';

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
      <ExampleFormsWithControlledComponents />
      <ExampleLiftingStateUp />
      <ExampleStyling />
      <ExampleConvertingClassComponentsToFunctionComponents />
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
