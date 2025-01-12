import Login from "./Components/User/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rules from "./Components/User/Rules";
import Timer from "./Components/User/Timer";
import LoadingPage from "./Components/User/LoadingPage";
import StateRoute from "./Components/Universal/StateRoute";
import ScorePage from "./Components/User/ScorePage";
import Reviews from "./Components/User/Reviews";
import ProtectedRoute from "./Components/Universal/ProtectedRoute";
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
      element: (
        <>
          <StateRoute>
            <ProtectedRoute>
              <Rules />
            </ProtectedRoute>
          </StateRoute>
        </>
      ),
    },
    {
      path: "/timer",
      element: <Timer />,
    },
    {
      path: "/CalculationPage",
      element: (
        <>
          <StateRoute>
            <ProtectedRoute>
              <LoadingPage />
            </ProtectedRoute>
          </StateRoute>
        </>
      ),
    },

    {
      path: "/score",
      element: (
        <>
          <ProtectedRoute>
            <ScorePage />
          </ProtectedRoute>
        </>
      ),
    },
    {
      path: "/reviews",
      element: (
        <>
          <ProtectedRoute>
            <Reviews />
          </ProtectedRoute>
        </>
      ),
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
