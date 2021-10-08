import NavBar from "./components/NavBar";
import ItemPage from "./components/ItemPage";
import MainPage from "./components/MainPage";
import Cart from "./components/Cart";
import { Switch, Route, useHistory } from "react-router-dom";
import Settings from "./components/Settings";

function AuthenticatedApp({ currentUser, setCurrentUser }) {
  const history = useHistory();

  const handleLogout = () => {
    fetch(`/logout`, {
      method: "DELETE",
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        setCurrentUser(null);
        history.push("/");
      }
    });
  };

  return (
    <div className="App">
      <NavBar handleLogout={handleLogout} />
      <Switch>
        <Route path="/item/:id">
          <ItemPage />
        </Route>
        <Route exact path="/mainpage">
          <MainPage />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/settings">
          <Settings user={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default AuthenticatedApp;
