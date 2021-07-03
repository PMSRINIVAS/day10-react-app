import { useSelector } from "react-redux";

export function Page2() {
  const state = useSelector((state) => state);
  return (
    <div>
      <h1>Page2</h1>

      <div className="alert alert-secondary">{state.counter}</div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, totam
        iste. Quaerat vero ea suscipit error voluptate dolore totam quam!
      </p>
    </div>
  );
}
