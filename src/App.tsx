import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CharactersList from "./pages/CharactersList";
import CharacterProfile from "./pages/CharacterProfile";
import LocationsList from "./pages/LocationsList";
import LocationDetails from "./pages/LocationDetails";
import EpisodesList from "./pages/EpisodesList";
import EpisodeDetails from "./pages/EpisodeDetails";
import "./App.scss";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "characters",
        element: <CharactersList />,
      },
      {
        path: "characters/:id",
        element: <CharacterProfile />,
      },
      {
        path: "locations",
        element: <LocationsList />,
      },
      {
        path: "locations/:id",
        element: <LocationDetails />,
      },
      {
        path: "episodes",
        element: <EpisodesList />,
      },
      {
        path: "episodes/:id",
        element: <EpisodeDetails />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
