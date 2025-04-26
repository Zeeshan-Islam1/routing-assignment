
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Shop } from "./pages/shop";
import { Privacy } from "./pages/privacy";
import { Contact } from "./pages/contact";
import { Carrer } from "./pages/carres";
import { Pricing } from "./pages/pricing";
import Login from './pages/login';
import AppLayout from "./components/layout/AppLayout";

const App = () => {
  const router = createBrowserRouter([


    {
      path: '/',
      element : <AppLayout />,
      children: [
        
          {
            path: '/',
            element: <Home />
          },
          {
            path: '/about',
            element: <About />
          },
          {
            path : '/Shop',
            element: <Shop />
          },
          {
            path: '/contact',
            element: <Contact />
          },
          {
            path: '/carres',
            element: <Carrer />
          },
          {
            path: '/pricing',
            element: <Pricing />
          },
         {
          path: '/login',
          element: <Login />
         },
          {
            path: '/privacy',
            element: <Privacy />
          }
      ]
    }
  ]);

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element={<Home />}/>
  //       <Route path="/about" element={<About />} />
  //       <Route  path="/contact" element={<Contact />}/>
  //       <Route  path="/movies" element={<Movies />}/>
  //     </Route>
  //   )
  // );

  return (
    <RouterProvider router={router} />
  );

 };

export default App;
