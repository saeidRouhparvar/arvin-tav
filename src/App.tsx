import { RouterProvider } from "react-router-dom";
import { CreateRouter } from "./routes";

const App = () => {
  return <RouterProvider router={CreateRouter} />;
};

export default App;
