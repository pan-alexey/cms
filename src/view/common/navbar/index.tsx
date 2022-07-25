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
      <span className="navbar-logo-name">LaaS Concept</span>
    </div>
    <div className="navbar-menu">
      <Button type="text">Шаблоны</Button>
      <Button type="text">Страницы</Button>
      <Button type="text">Зависиости</Button>
    </div>
  </div>
  );
}