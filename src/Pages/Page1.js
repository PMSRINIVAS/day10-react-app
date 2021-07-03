import { useDispatch, useSelector } from "react-redux";

export function Page1() {
  const dispatch = useDispatch();

  //By using state=> state, we are selecting all the things in store
  const state = useSelector((state) => state);

  //filter out :: t-shirt- counter
  //   const counter = useSelector((state) => state.counter);

  const increment = () => {
    //Logic is not given here. its in store.js
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    //Logic is not given here. its in store.js
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>Page1</h1>

      <div className="alert alert-secondary">{state.counter}</div>
      <input
        type="button"
        value="Increment"
        onClick={increment}
        className="btn btn-secondary w-100"
      />

      <input
        type="button"
        value="Decrement"
        onClick={decrement}
        className="btn btn-info w-100"
      />

      {/* <div className="alert alert-secondary">{counter}</div> */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        asperiores qui aperiam expedita suscipit amet quaerat. Odit voluptatibus
        labore officiis?
      </p>
    </div>
  );
}
