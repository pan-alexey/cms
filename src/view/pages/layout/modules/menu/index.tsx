
import { Drawer, Button } from 'antd';
import React from 'react';
import style from './index.module.scss';


export const Menu: React.FC = () => {

  const [visibleDrawer, setVisibleDrawer] = React.useState(false);
  const showDrawer = () => {
    setVisibleDrawer(true);
  };
  const closeDrawer = () => {
    setVisibleDrawer(false);
  };


  return <>
  <div className={style.menu}>
    <Button onClick={showDrawer} type="primary" size='small'>layouts</Button>
  </div>
  <Drawer title="Выбрать layout из списка" placement="left" onClose={closeDrawer} visible={visibleDrawer}>
    <p>layout-1</p>
    <p>layout-2</p>
    <p>layout-3</p>
  </Drawer>
  </>
};

export default Menu;