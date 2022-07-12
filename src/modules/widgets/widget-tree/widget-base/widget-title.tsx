import * as React from "react";
import * as WidgetTypes from '../../types'
import { ConnectDragSource } from "react-dnd";
import { Tooltip } from 'antd';
import { MdDragIndicator, MdDelete, MdKeyboardArrowDown, MdKeyboardArrowUp, MdOutlineSettings,MdCopyAll } from "react-icons/md";
import { useWidgetsTree } from '../../context'

import style from './widget-title.module.scss';

export const WidgetTitle: React.FC<{
  name: string;
  version: string;
  owner: string;
  hasSlots: boolean;
  $$path?: Array<number|string>
  $$drag: ConnectDragSource;
  $$setting: WidgetTypes.WidgetSetting
}> = ({ name, owner, version, $$path = [], $$drag, $$setting, hasSlots }) => {
  const { onDelete, setSetting } = useWidgetsTree();

  const toggle = () => {
    setSetting({collapse: !$$setting.collapse}, $$path)
  }

  return (
    <div className={style.title}>
      <div className={style.info}>
        <div  className={style.drag} ref={$$drag}>
          <MdDragIndicator />
        </div>
        <div className={style.content}>
          <div className={style.name}>{name} [{version}]</div>
          <div className={style.description}>{owner}</div>
        </div>
      </div>
      <div className={style.actions}>

        <div className={style.action}>
          <Tooltip placement="top" title={'? скопировать виджет'} destroyTooltipOnHide={{keepParent: false}}>
            <MdCopyAll />
          </Tooltip>
        </div>
        <div className={style.action}>
          <Tooltip placement="top" title={'Настройка виджета'} destroyTooltipOnHide={{keepParent: false}}>
            <MdOutlineSettings />
          </Tooltip>
        </div>
        <div className={style.action} onClick={() => {onDelete($$path)}}>
          <MdDelete />
        </div>
        {hasSlots && <div className={style.action} onClick={() => {toggle()}}>
          { $$setting.collapse ?  <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </div>}
      </div>
    </div>
  );
};
