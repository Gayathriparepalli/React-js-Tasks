import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import DashBoard from "./Components/DashBoard";
import AddData from "./Components/AddData";
import EditData from "./Components/EditData";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import ViewRawData from "./Components/ViewRawData";
function App() {
  const [auth, setAuth] = useState(localStorage.getItem("auth"));
  //const [view, setView] = useState(localStorage.getItem("view"));
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LoginPage setAuth={setAuth} />
          </Route>
          <Route exact path="/viewData">
            <ViewRawData />
          </Route>
          <ProtectedRoutes
            exact
            path="/addUser"
            component={AddData}
            auth={auth}
          />
          <ProtectedRoutes
            exact
            path="/editUser"
            component={EditData}
            auth={auth}
          />
          <ProtectedRoutes
            exact
            path="/dashboard"
            component={DashBoard}
            auth={auth}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
