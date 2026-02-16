import { useState } from 'react';

const roles = {
  admin: 'admin',
  editor: 'editor',
  noRights: 'noRights',
};

const initialTeamMembers = [
  {
    id: 1,
    name: 'Vassili',
    jobPosition: 'Developer',
    role: roles.admin,
    pets: [
      {
        name: 'Ronald',
        type: 'Cat',
      },
    ],
  },
  {
    id: 2,
    name: 'Vassili',
    jobPosition: 'Marketer',
    role: roles.editor,
    pets: [
      {
        name: 'Ronald',
        type: 'Cat',
      },
    ],
  },
  {
    id: 3,
    name: 'Eddy',
    jobPosition: 'CEO',
    role: roles.admin,
    pets: [
      {
        name: 'Xander',
        type: 'Parrot',
      },
    ],
  },
];

export default function ExampleStateDataManipulation() {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);

  return (
    <div>
      <h1>ExampleStateDataManipulation</h1>
      <div>
        {teamMembers.map((teamMember) => {
          return (
            <div key={`teamMember-${teamMember.id}`}>
              {teamMember.name} ({teamMember.jobPosition})
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          // React forces us to have some immutable
          // patterns (array spread)
          const newTeamMembers = [...teamMembers];

          // Mutation: .push()
          newTeamMembers.push({
            id: teamMembers.length + 1,
            name: 'Rhonda',
            jobPosition: 'CMO',
            role: roles.admin,
            pets: [],
          });

          setTeamMembers(newTeamMembers);
        }}
      >
        Add team member (mutation version)
      </button>

      <button
        onClick={() => {
          // Immutable version: array spread
          const newTeamMembers = [
            ...teamMembers,
            {
              id: teamMembers.length + 1,
              name: 'Jane',
              jobPosition: 'CMO',
              role: roles.admin,
              pets: [],
            },
          ];

          setTeamMembers(newTeamMembers);
        }}
      >
        Add team member (immutable version)
      </button>
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          // React forces us to have some immutable
          // patterns (array spread)
          const newTeamMembers = [...teamMembers];

          const teamMemberVassili2 = newTeamMembers.find((teamMember) => {
            return teamMember.id === 2;
          });

          // Mutation: assigning property
          teamMemberVassili2.name = 'Vasileios';

          setTeamMembers(newTeamMembers);
        }}
      >
        Modify team member (mutation version)
      </button>

      <button
        onClick={() => {
          // Immutable version: array spread
          const newTeamMembers = teamMembers.map((teamMember) => {
            // Early return
            if (teamMember.id !== 3) {
              return teamMember; // return unmodified team member
            }

            // If we have gone past the `return`, then id === 3
            return {
              ...teamMember, // Spread: all of the properties
              jobPosition: 'CEO and Investor', // Override jobPosition
            };
          });

          setTeamMembers(newTeamMembers);
        }}
      >
        Add team member (immutable version)
      </button>
    </div>
  );
}
