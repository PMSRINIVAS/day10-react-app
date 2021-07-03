import { useSelector } from "react-redux";

export function Page1() {
  //By using state=> state, we are selecting all the things in store
  const state = useSelector((state) => state);

  //filter out :: t-shirt- counter
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <h1>Page1</h1>

      <div className="alert alert-secondary">{state.counter}</div>
      <div className="alert alert-secondary">{counter}</div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        asperiores qui aperiam expedita suscipit amet quaerat. Odit voluptatibus
        labore officiis?
      </p>
    </div>
  );
}
