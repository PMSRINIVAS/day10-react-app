import { useSelector } from "react-redux";

export function Page3() {
  const state = useSelector((state) => state);
  return (
    <div>
      <h1>Page3</h1>

      <div className="alert alert-secondary">{state.counter}</div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, neque
        sapiente! Quibusdam aliquid reiciendis totam officiis quidem voluptate,
        tenetur quae!
      </p>
    </div>
  );
}
