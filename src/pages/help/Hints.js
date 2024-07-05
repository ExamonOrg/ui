export default function Hints(props) {
  return (
    <>
      <h5>Hints</h5>
      <ul>
        {
          props.hints.map((hint) => {
            return <li>{hint}</li>;
          })
        }
      </ul>
    </>
  );
}
