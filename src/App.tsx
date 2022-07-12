import * as React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import Navbar from "./view/common/navbar";

import PageNotFound from './view/pages/404';

const Pages: Record<string, React.LazyExoticComponent<React.FC>> = {
  Layout: React.lazy(() => import("./view/pages/layout")),
}

function Layout() {
  return (
    <div className="view">
      <Navbar />
      <div className="body">
        <Outlet />
      </div>
    </div>
  );
}

export default function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<React.Suspense fallback={null}><Pages.Layout /></React.Suspense>}/>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </HashRouter>
  );
}
