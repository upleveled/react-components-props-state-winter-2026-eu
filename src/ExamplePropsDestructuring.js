// // While learning, use the `props` parameter and `props.`
// function Tweet(props) {
//   return (
//     <div
//       style={{
//         border: '2px solid',
//         margin: '8px',
//         padding: '0 12px 12px',
//       }}
//     >
//       <h2>Name: {props.name}</h2>
//       <div>Message: {props.message}</div>
//       <div>Likes: {props.likes}</div>
//     </div>
//   );
// }

// 1. Destructure by using the {} and naming the props
function Tweet({ name, message, likes }) {
  return (
    <div
      style={{
        border: '2px solid',
        margin: '8px',
        padding: '0 12px 12px',
      }}
    >
      {/* 2. Refer to props without `props.` */}
      <h2>Name: {name}</h2>
      <div>Message: {message}</div>
      <div>Likes: {likes}</div>
    </div>
  );
}

export default function ExamplePropDestructuring() {
  return (
    <div>
      <Tweet name="Karl" message="I like React" likes={12} />
      <Tweet name="Victor" message="Please post on Slack" likes={56} />
    </div>
  );
}
