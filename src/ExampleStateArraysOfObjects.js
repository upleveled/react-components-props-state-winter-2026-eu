import { useState } from 'react';

const initialUsers = [
  {
    id: 1,
    name: 'Maya Patel',
    email: 'maya.patel@example.com',
    isActive: true,
  },
  {
    id: 2,
    name: 'Jonas Klein',
    email: 'jonas.klein@example.com',
    isActive: false,
  },
  {
    id: 3,
    name: 'Elena Rossi',
    email: 'elena.rossi@example.com',
    isActive: true,
  },
  {
    id: 4,
    name: 'Elena Rossi',
    email: 'elena.rossi@example.com',
    isActive: true,
  },
];

export default function ExampleStateArraysOfObjects() {
  const [users, setUsers] = useState(initialUsers);

  return (
    <div>
      <h1>ExampleStateArraysOfObjects</h1>
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
              <div>{user.name}</div>
              <div>{user.email}</div>
              <div>{user.isActive ? 'Active' : 'Inactive'}</div>
            </div>
          );
        })}
        <button
          style={{ width: '250px', padding: '10px' }}
          onClick={() => {
            const lastUser = users.at(-1);
            setUsers([
              ...users,
              {
                id: lastUser.id + 1,
                name: 'Torvald Rossi',
                email: 'torvald.rossi@example.com',
                isActive: true,
              },
            ]);
          }}
        >
          +
        </button>
      </div>

      <button
        onClick={() => {
          // // This will not work:
          // const firstUser = users[0];
          // firstUser.name = 'Karl';
          // setUsers(users);

          // 1. Create a copy of the array
          const newUsers = [...users];
          // 2. Change something in the array
          newUsers[0].name = 'Karl';
          // 3. Set the new array
          setUsers(newUsers);
        }}
      >
        Change first user to Karl
      </button>

      <button
        onClick={() => {
          // No need to use spread, because .filter
          // returns a copy
          const newUsers = users.filter((user) => {
            return user.name !== 'Torvald Rossi';
          });
          setUsers(newUsers);
        }}
      >
        Remove any Torvalds
      </button>
    </div>
  );
}
