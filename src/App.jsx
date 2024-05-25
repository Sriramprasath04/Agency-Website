import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {Outlet} from 'react-router-dom';
import Body from './components/Body';
import Error from './components/Error';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

export const App = () => {
  return (
    <div id="body" className="w-full p-5 md:p-10 text-gray-800">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}


const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/portfolio",
        element: <Portfolio/>,
      },
    ],
    errorElement: <Error/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRoutes}/>);