function BlogPost(props) {
  return (
    <>
      <h2>{props.title}</h2>
      {props.children}
    </>
  );
}

export default function ExampleChildrenProps() {
  return (
    <>
      <BlogPost title="Alligator eats man">
        <p>On Saturday ...</p>
        <p>Then something else happened ...</p>
      </BlogPost>

      <BlogPost title="Title2">Some other story ...</BlogPost>

      <BlogPost title="Title3">A last story ...</BlogPost>
    </>
  );
}
