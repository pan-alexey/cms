import * as React from "react";
import { Link } from "react-router-dom";
import './style.scss'

export default function Toolbar() {
  return (
    <div className="toolbar">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/404">404</Link>
      </div>
  </div>
  );
}