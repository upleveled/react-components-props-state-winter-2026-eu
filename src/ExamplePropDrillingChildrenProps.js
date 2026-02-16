export default function ExamplePropDrillingChildrenProps() {
  const user = {
    username: 'karl',
  };
  return (
    <div>
      <h1>ExamplePropDrillingChildrenProps</h1>
      <Header>
        <Nav>
          <UserProfile username={user.username} />
        </Nav>
      </Header>
    </div>
  );
}

function Header(props) {
  return (
    <header style={{ border: '2px solid green', padding: '4px' }}>
      {props.children}
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
      {props.children}
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
