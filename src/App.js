import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import DashBoard from "./Components/dashBoard/DashBoard";
import AddData from "./Components/userData/createUser/AddData";
import EditData from "./Components/userData/updateUser/EditData";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import ViewData from "./Components/userData/ViewData";
import Posts from "./Components/postsData/posts/Posts";
import ViewPostData from "./Components/postsData/ViewPostsWithComments/ViewPostData";
import EditPosts from "./Components/postsData/updatePosts/EditPosts";
import CreatePost from "./Components/postsData/createPost/CreatePost";
import TagData from "./Components/TagData";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllPosts from "./Components/postsData/AllPosts";
import ViewComments from "./Components/postsData/ViewComments";

function App() {
  return (
    <div>
      <ToastContainer />
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
          <ProtectedRoutes exact path="/viewTags" component={TagData} />
          <ProtectedRoutes exact path="/allPosts" component={AllPosts} />
          <ProtectedRoutes
            exact
            path="/viewComments"
            component={ViewComments}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
