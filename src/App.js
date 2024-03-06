import logo from './logo.svg';
import './App.css';
import Home from './home/Home';
import ShortUrl from './shorturl/ShortUrl';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/:shortUrlId",
    element: <ShortUrl/>,
  },
]);
function App() {
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
