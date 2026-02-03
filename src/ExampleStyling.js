import styles from './ExampleStyling.module.scss';

export default function ExampleStyling() {
  return (
    <div>
      <h1>ExampleStyling</h1>
      <div
        style={{
          margin: '4px',
          padding: '8px',
          border: '4px solid orange',
          borderRadius: '8px',
          fontSize: '24px',
        }}
      >
        Tiger
      </div>
      <div className={styles.alligator}>Alligator</div>
    </div>
  );
}
