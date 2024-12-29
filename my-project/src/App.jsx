import Login from "./Components/User/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rules from "./Components/User/Rules";
import Timer from "./Components/User/Timer";
import LoadingPage from "./Components/User/LoadingPage";
import ScorePage from "./Components/User/ScorePage";
import Reviews from "./Components/User/Reviews";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login category={"user"} />,
    },
    {
      path: "/login",
      element: <Login category={"user"} />,
    },
    {
      path: "/cms",
      element: <Login category={"CMS"} />,
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

    {
      path: "/score",
      element: <ScorePage />,
    },
    {
      path: "/reviews",
      element: <Reviews />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
