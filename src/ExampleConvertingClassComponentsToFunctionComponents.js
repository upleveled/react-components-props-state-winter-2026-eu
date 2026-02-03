import { useState } from 'react';

// // Class components are old and no longer recommended
// class ExampleClassToFunctionClass extends React.Component {
//   state = {
//     detailsShown: false,
//   };

//   render() {
//     const { user } = this.props;

//     if (user === undefined) return <div>User not found!</div>;

//     return (
//       <>
//         <img src={user.image} alt={user.imageAlt} />
//         <h1>{user.name}</h1>
//         <button
//           onClick={() =>
//             this.setState({ detailsShown: !this.state.detailsShown })
//           }
//         >
//           {this.state.detailsShown ? 'Hide' : 'Show'} Details
//         </button>
//         {this.state.detailsShown && <p>{user.details}</p>}
//       </>
//     );
//   }
// }

function ExampleClassToFunctionClass(props) {
  const [detailsShown, setDetailsShown] = useState(false);

  if (props.user === undefined) return <div>User not found!</div>;

  return (
    <>
      <img src={props.user.image} alt={props.user.imageAlt} />
      <h1>{props.user.name}</h1>
      <button onClick={() => setDetailsShown((prev) => !prev)}>
        {detailsShown ? 'Hide' : 'Show'} Details
      </button>
      {detailsShown && <p>{props.user.details}</p>}
    </>
  );
}

export default function ExampleConvertingClassComponentsToFunctionComponents() {
  return (
    <div>
      <h1>ExampleConvertingClassComponentsToFunctionComponents</h1>
      <ExampleClassToFunctionClass
        user={{
          details: 'I like memes',
          name: 'Lukas',
          imageAlt: 'this is an image',
          image:
            'https://api.memegen.link/images/buzz/memes/memes_everywhere.png?width=400',
        }}
      />
    </div>
  );
}

// If you wanted to learn about class components, you could use a ChatGPT / Gemini / Claude prompt like this:

// I have a React class component that I would like to convert to a function component:
//
// ```
// class ExampleClassToFunctionClass extends React.Component {
//   state = {
//     detailsShown: false,
//   };
//
//   render() {
//     const { user } = this.props;
//
//     if (user === undefined) return <div>User not found!</div>;
//
//     return (
//       <>
//         <img src={user.image} alt={user.imageAlt} />
//         <h1>{user.name}</h1>
//         <button
//           onClick={() =>
//             this.setState({ detailsShown: !this.state.detailsShown })
//           }
//         >
//           {this.state.detailsShown ? 'Hide' : 'Show'} Details
//         </button>
//         {this.state.detailsShown && <p>{user.details}</p>}
//       </>
//     );
//   }
// }
// ```
//
// I am learning about class components. Can you guide me through (without telling me the answer) and show me how to convert it myself? Work step by step and ask me lots of questions.
