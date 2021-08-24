import { Route, Switch } from 'react-router-dom';
import All from "./pages/All";
import New from "./pages/New";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="container-fluid p-0">
        <Layout>
            {/*Switch tag - render just one Route!*/}
            <Switch>
                <Route exact path="/">
                    <All/>
                </Route>

                <Route path="/new">
                    <New/>
                </Route>

                <Route path="/favorites">
                    <Favorites/>
                </Route>
            </Switch>
        </Layout>
    </div>
  );
}

export default App;
