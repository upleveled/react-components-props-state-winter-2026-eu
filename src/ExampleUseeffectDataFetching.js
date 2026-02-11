import { useEffect, useState } from 'react';

export default function ExampleUseeffectDataFetching() {
  const [users, setUsers] = useState([]);

  useEffect(
    () => {
      async function fetchUsers() {
        const response = await fetch('https://dummyjson.com/users');
        const json = await response.json();
        // console.log(json);
        setUsers(json.users);
      }

      fetchUsers().catch((error) => {
        console.error(error);
      });
    },
    // Empty dependencies array = fetch once, on page load
    [],
  );

  if (users.length === 0) {
    return <>Loading...</>;
  }

  return (
    <div>
      <h1>ExampleUseeffectDataFetching</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {users.map((user) => {
          return (
            <div
              key={`user-${user.id}`}
              style={{
                width: '250px',
                border: '1px solid #aaa',
                padding: '10px',
                borderRadius: 8,
              }}
            >
              <div>
                {user.firstName} {user.lastName}
              </div>
              <div>{user.age}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
