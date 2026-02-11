import './App.css';
import ExampleAntiPatterns from './ExampleAntiPatterns';
import ExampleCheckingDataTypesOfPropsWithTypescript from './ExampleCheckingDataTypesOfPropsWithTypescript';
import ExampleChildrenProps from './ExampleChildrenProps';
import ExampleComponents from './ExampleComponents';
import ExampleConditionalRendering from './ExampleConditionalRendering';
import ExampleControlledComponentsCheckboxes from './ExampleControlledComponentsCheckboxes';
import ExampleConvertingClassComponentsToFunctionComponents from './ExampleConvertingClassComponentsToFunctionComponents';
import ExampleFormElements from './ExampleFormElements';
import ExampleFormsWithControlledComponents from './ExampleFormsWithControlledComponents';
import ExampleLiftingStateUp from './ExampleLiftingStateUp';
import ExampleMappingOverArrays from './ExampleMappingOverArrays';
import ExampleProps from './ExampleProps';
import ExamplePropDestructuring from './ExamplePropsDestructuring';
import ExampleStateNotSynchronous from './ExampleSetStateIsNotSynchronous';
import ExampleStateArraysOfObjects from './ExampleStateArraysOfObjects';
import ExampleStateCounter from './ExampleStateCounter';
import ExampleStateEmail from './ExampleStateEmail';
import ExampleStyling from './ExampleStyling';
import ExampleUseeffect from './ExampleUseeffect';
import ExampleUseeffectDataFetching from './ExampleUseeffectDataFetching';

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
      <ExampleChildrenProps />
      <ExampleCheckingDataTypesOfPropsWithTypescript />
      <ExampleAntiPatterns />
      <ExampleControlledComponentsCheckboxes />
      <ExampleFormElements />
      <ExampleStateArraysOfObjects />
      <ExampleUseeffect />
      <ExampleUseeffectDataFetching />
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
