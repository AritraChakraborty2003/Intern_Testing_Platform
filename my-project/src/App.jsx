import Login from "./Components/User/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rules from "./Components/User/Rules";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/rules",
      element: <Rules />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
