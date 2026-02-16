import { useMachine } from '@xstate/react';
import { useReducer } from 'react';
import { createMachine } from 'xstate';

export default function ExampleStateManagement() {
  return (
    <div>
      <h1>ExampleStateManagement</h1>
      <ExampleStateManagementUseReducer />
      <ExampleStateManagementXstate />
    </div>
  );
}

function lightbulbReducer(state, action) {
  if (action.type === 'turn_on') {
    if (state.status === 'broken') {
      return state;
    }
    return {
      status: 'on',
    };
  } else if (action.type === 'turn_off') {
    if (state.status === 'broken') {
      return state;
    }
    return {
      status: 'off',
    };
  } else if (action.type === 'break') {
    return {
      status: 'broken',
    };
  }
  throw Error('Unknown action.');
}

function ExampleStateManagementUseReducer() {
  const [lightbulb, dispatchLightbulb] = useReducer(lightbulbReducer, {
    status: 'off',
  });

  return (
    <div>
      <h2>State Management with useReducer</h2>
      <div>Lightbulb: {lightbulb.status}</div>
      <button onClick={() => dispatchLightbulb({ type: 'turn_on' })}>On</button>
      <button onClick={() => dispatchLightbulb({ type: 'turn_off' })}>
        Off
      </button>
      <button onClick={() => dispatchLightbulb({ type: 'break' })}>
        Break
      </button>
    </div>
  );
}

const lightbulbMachine = createMachine({
  id: 'lightbulb',
  initial: 'lightbulbOn',
  states: {
    lightbulbOn: {
      on: {
        TURN_OFF: 'lightbulbOff',
        BREAK: 'lightbulbBroken',
      },
    },
    lightbulbOff: {
      on: {
        TURN_ON: 'lightbulbOn',
        BREAK: 'lightbulbBroken',
      },
    },
    lightbulbBroken: {
      on: {
        // No transition when its broken
      },
    },
  },
});

function ExampleStateManagementXstate() {
  const [lightbulb, send] = useMachine(lightbulbMachine);

  return (
    <div>
      <h2>State Management with XState</h2>
      <div>Lightbulb: {lightbulb.value}</div>
      <button onClick={() => send({ type: 'TURN_ON' })}>On</button>
      <button onClick={() => send({ type: 'TURN_OFF' })}>Off</button>
      <button onClick={() => send({ type: 'BREAK' })}>Break</button>
    </div>
  );
}
