export default function ExamplePropDrilling() {
  const user = {
    username: 'karl',
  };
  return (
    <div>
      <h1>ExamplePropDrilling</h1>
      <Header username={user.username} />
    </div>
  );
}

function Header(props) {
  return (
    <header style={{ border: '2px solid green', padding: '4px' }}>
      <Nav username={props.username} />
    </header>
  );
}

function Nav(props) {
  return (
    <nav
      style={{
        display: 'inline-block',
        border: '2px solid purple',
        padding: '4px',
      }}
    >
      <UserProfile username={props.username} />
    </nav>
  );
}

function UserProfile(props) {
  return (
    <div style={{ border: '2px solid red', padding: '4px' }}>
      <div>User profile</div>
      {props.username}
    </div>
  );
}
