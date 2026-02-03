export default function ExampleMappingOverArrays() {
  const technologies = [
    {
      id: 1,
      name: 'TypeScript',
    },
    {
      id: 2,
      name: 'React',
    },
    {
      id: 3,
      name: 'React',
    },
  ];

  return (
    <div>
      <h1>ExampleMappingOverArrays</h1>

      <ul style={{ textAlign: 'left' }}>
        {technologies.map((technology) => {
          return (
            <li
              // Keys are needed inside of returned element inside .map
              key={`technology-${technology.id}`}
            >
              {technology.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
