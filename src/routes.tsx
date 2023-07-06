import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import PodcastList from "./pages/PodcastList";
import PodcastDetail from "./pages/PodcastDetail";
import PodcastEpisode from "./pages/PodcastEpisode";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <PodcastList />,
      },
      {
        path: "podcast/:id",
        element: <PodcastDetail />,
      },
      {
        path: "podcast/:podcastId/episode/:episodeId",
        element: <PodcastEpisode />,
      },
    ],
  },
]);

export default router;
