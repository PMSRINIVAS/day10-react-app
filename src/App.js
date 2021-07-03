import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      {/**COMMON NAVIGATION */}
      <div className="bg-dark text-light p-2 d-flex justify-content-between">
        <Link to="/page1">
          <h3>Page1</h3>
        </Link>

        <Link to="/page2">
          <h3>Page2</h3>
        </Link>

        <Link to="/page3">
          <h3>Page3</h3>
        </Link>
      </div>

      <Route exact path="/" component={Page1} />
      <Route exact path="/page1" component={Page1} />
      <Route exact path="/page2" component={Page2} />
      <Route exact path="/page3" component={Page3} />
    </Router>
  );
}

function Page1() {
  return (
    <div>
      <h1>Page1</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        asperiores qui aperiam expedita suscipit amet quaerat. Odit voluptatibus
        labore officiis?
      </p>
    </div>
  );
}

function Page2() {
  return (
    <div>
      <h1>Page2</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, totam
        iste. Quaerat vero ea suscipit error voluptate dolore totam quam!
      </p>
    </div>
  );
}
function Page3() {
  return (
    <div>
      <h1>Page3</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, neque
        sapiente! Quibusdam aliquid reiciendis totam officiis quidem voluptate,
        tenetur quae!
      </p>
    </div>
  );
}
export default App;
