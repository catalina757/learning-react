import { Route, Switch } from 'react-router-dom';
import All from "./pages/All";
import New from "./pages/New";
import Favorites from "./pages/Favorites";
import MainNav from "./components/layout/MainNav";

function App() {
  return (
    <div className="container-fluid p-0">
        <MainNav/>
        <Switch>
          <Route path="/" exact>
              <All/>
          </Route>

            <Route path="/new">
                <New/>
            </Route>

            <Route path="/favorites">
                <Favorites/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;
