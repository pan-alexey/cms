import * as React from "react";
import { Button, Dropdown, Menu, Input, Tooltip, Typography } from 'antd';
import { CaretDownOutlined, EllipsisOutlined, FireOutlined } from '@ant-design/icons';
import style from "./index.module.scss";
import { cssClassName } from "../../../../../core/utils/styles";

const { Text } = Typography;

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <div>Склонировать шаблон</div>
        ),
      },
      {
        key: '2',
        label: (
          <div>Заблокировать шаблон</div>
        ),
      },
    ]}
  />
);

export const HeaderTree: React.FC = () => {
 
  return (
    <div className={cssClassName(style, ["widget-header"])}>
      <div className={cssClassName(style, ["actions-info"])}>
        <div className={cssClassName(style, ["info-title"])}>
          <Text strong>Главная страница</Text>
        </div>
        <div className={cssClassName(style, ["info-description"])}>Описание шаблона. Описание создается при создании шаблона</div>
        <div><Text type="secondary">Платформа: android</Text></div>
        <div><Text type="secondary">Дата создания 24.02.2022. Создал @agpan</Text></div>
        <div><Text type="secondary">Дата последней публикации 24.02.2022. Опубликовал @agpan</Text></div>
      </div>
      <div className={cssClassName(style, ["actions"])}>
        <div className={cssClassName(style, ["actions-buttons"])}>
          <Tooltip placement="bottomRight" title={'Будет создана новая версия'}>
            <Button>Сохранить</Button>
          </Tooltip>
         
          <Button type="primary">Опубликовать</Button>
          <Dropdown overlay={menu} placement="bottomRight">
            <Button><EllipsisOutlined /></Button>
          </Dropdown>
        </div>
        <div className={cssClassName(style, ["actions-versions"])}>
          Версия: <Input value={'1023'} placeholder="Версия шаблона" prefix={<FireOutlined />} suffix={<CaretDownOutlined />}/>
        </div>
      </div>
    </div>
  );
};
