import * as React from "react";
import style from "./index.module.scss";
import { Input } from 'antd';
import { BorderlessTableOutlined, SearchOutlined } from '@ant-design/icons';
import { cssClassName } from "../../../../../core/utils/styles";

export const HeaderItems: React.FC = () => {
 
  return (
    <div className={cssClassName(style, ["header-items"])}>
      <Input size="large" placeholder="Поиск виджетов" prefix={<SearchOutlined />} />
      <Input placeholder="Вертикаль" prefix={<BorderlessTableOutlined />} />
    </div>
  );
};
