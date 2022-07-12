import * as React from "react";
import { MdViewQuilt } from "react-icons/md";
import { Button } from 'antd';

import './style.scss'

export default function Navbar() {
  return (
  <div className="navbar">
    <div className="navbar-logo">
      <span className="navbar-logo-icon">
        <MdViewQuilt />
      </span>
      <span className="navbar-logo-name">LaaS</span>
    </div>
    <div className="navbar-menu">
    <Button type="primary">layut builder</Button>
    <Button>relations</Button>
    <Button type="dashed">pages</Button>
    <br />
    <Button type="text">setting</Button>
    <Button type="link">history</Button>
    </div>
  </div>
  );
}