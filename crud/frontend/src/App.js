import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <ProductsList />
          </Route>
          <Route path="/add">
            <AddProduct />
          </Route>
          <Route path="/edit/:id">
            <EditProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
