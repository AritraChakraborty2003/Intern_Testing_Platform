import Login from "./Components/User/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rules from "./Components/User/Rules";
import Timer from "./Components/User/Timer";
import LoadingPage from "./Components/User/LoadingPage";

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
    {
      path: "/timer",
      element: <Timer />,
    },
    {
      path: "/CalculationPage",
      element: <LoadingPage />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
