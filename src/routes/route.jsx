import { createBrowserRouter } from "react-router-dom";
import Browse from "../components/Browse";
import Login from "../components/Login";
// import Footer from "../components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />
  }
]);

export default router;
