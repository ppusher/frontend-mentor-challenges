import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HomePage, { loader as homePageLoader } from "./pages/HomePage.jsx";
import MoviesPage, { loader as moviesPageLoader } from "./pages/MoviesPage.jsx";
import TVShowsPage, {
  loader as tvshowsPageLoader,
} from "./pages/TVShowsPage.jsx";
import MediaPage from "./pages/MediaPage.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Error from "./components/Error.jsx";
import BookmarksPage from "./pages/BookmarksPage.jsx";
import { getMovieDetails } from "./services/movies.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<Error />}>
        <Route
          index
          element={<HomePage />}
          loader={homePageLoader}
          errorElement={<Error />}
        />
        <Route
          path="movies"
          element={<MoviesPage />}
          loader={moviesPageLoader}
          errorElement={<Error />}
        />
        <Route path="movies/:id" 
          element={<MediaPage />} 
          loader={({params}) => {return getMovieDetails(params.id) }}
        />
        <Route
          path="tvshows"
          element={<TVShowsPage />}
          loader={tvshowsPageLoader}
          errorElement={<Error />}
        />
        <Route path="tvshows/:id" element={<MediaPage />} />
        <Route
          path="bookmarks"
          element={<BookmarksPage />}
          errorElement={<Error />}
        />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
