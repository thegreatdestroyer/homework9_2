import './App.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from "./components/Main";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import ViewPosts from "./components/ViewPosts";
import PostsProvider from "./components/Posts/PostsProvider";

function App() {
  return (
    <div className="App">
      <PostsProvider>
          <Routes>
            <Route path='/' exact element={<Main />} ></Route>
            <Route path='/posts/new' element={<CreatePost />} ></Route>
            <Route path='/posts/edit/:id' element={<EditPost />} ></Route>
            <Route path='/posts/:id' element={<ViewPosts />} ></Route>
          </Routes>
      </PostsProvider>
    </div>
  );
}

export default App;
