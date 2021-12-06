import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import DashBoard from "./Components/dashBoard/DashBoard";
import AddData from "./Components/userData/createUser/AddData";
import EditData from "./Components/userData/updateUser/EditData";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import ViewData from "./Components/userData/ViewData";
import Posts from "./Components/postsData/posts/Posts";
import ViewPostData from "./Components/postsData/ViewPostData";
import EditPosts from "./Components/postsData/updatePosts/EditPosts";
import CreatePost from "./Components/postsData/createPost/CreatePost";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route exact path="/viewData">
            <ViewData />
          </Route>
          <ProtectedRoutes exact path="/addUser" component={AddData} />
          <ProtectedRoutes exact path="/editUser" component={EditData} />
          <ProtectedRoutes exact path="/dashboard" component={DashBoard} />
          <ProtectedRoutes exact path="/posts" component={Posts} />
          <ProtectedRoutes
            exact
            path="/viewPostData"
            component={ViewPostData}
          />
          <ProtectedRoutes exact path="/editPosts" component={EditPosts} />
          <ProtectedRoutes exact path="/createPosts" component={CreatePost} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
