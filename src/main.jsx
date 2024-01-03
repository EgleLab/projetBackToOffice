
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from "./pages/Home";
import Cards from "./pages/Cards";

import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

const router = createBrowserRouter([ //on configure des routes dans react
{
  element: <App/>,
  children:[
      {
  path: "/",
  element: <Home/>,   
},
{
  path: "/card",
  element: <Cards />,
}, 
  ],
},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);