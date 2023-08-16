import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRouter } from "./Router";
import { DefaultLayOut } from "./Component/LayOut";
import { Fragment } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {publicRouter.map((router, index) => {
            let LayOut = DefaultLayOut;
            const Page = router.component;
            if (router.LayOut) {
              LayOut = router.LayOut;
            } else if (router.component === null) {
              LayOut = Fragment;
            }
            return (
              <Route
                key={index}
                path={router.path}
                element={
                  <LayOut>
                    <Page />
                  </LayOut>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
