import * as React from "react";
import uniqueId from "lodash/uniqueId";
import * as WidgetTypes from '../../types';
import { WidgetSlot } from '../../widget-tree/widget-slot';
import style from './index.module.scss'

export const Row: React.FC<WidgetTypes.WidgetBase> = ({
  slots,
  $$path = [],
}) => {
  const elements = slots ? Object.keys(slots).map((name) => {
    const widgets = slots[name];
    const path = [...$$path];
    return <WidgetSlot $$path={[...path, name]}  widgets={widgets} name={name} direction={'row'} key={uniqueId()}/>
  }) : null

  return (elements && <div className={style.slots}>
    {elements}
  </div>)
}

export default Row;