import { createBrowserRouter } from "react-router-dom";

import Layout from "../pages/layout/component/Layout";
import Main from "../pages/main/component/Main";
import Intro from "../pages/intro/component/Intro"

const router= createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children : [
      {
        index :true,
        element : <Main/>
      },
      {
        path :"/intro",
        element : <Intro/>
      }
    ]
  },

]);
export default router