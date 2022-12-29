import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider} from "react-router-dom";
import Root from "./routes/root";
import Game from "./routes/game";
import Index from "./routes";
import Create, { loader as createLoader } from "./routes/create";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path="/"
                element={<Root />}
            >
                <Route index={true} element={<Index />}/>
                <Route
                    path="game/:gameSerial"
                    element={<Game />}
                />
                <Route
                    path="create/:gameSerial"
                    element={<Create />}
                    loader={createLoader}
                />
            </Route>
        </>
    )
);

function App() {
  return (
      <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
