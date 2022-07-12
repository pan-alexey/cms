import * as React from "react";
import uniqueId from "lodash/uniqueId";
import * as WidgetTypes from '../../types';
import { WidgetSlotSingle } from '../../widget-tree/widget-slot';
import style from './index.module.scss'

export const Single: React.FC<WidgetTypes.WidgetBase> = ({
  slots,
  $$path = [],
}) => {
  const elements = slots ? Object.keys(slots).map((name) => {
    const widgets = slots[name];
    const path = [...$$path];
    return <WidgetSlotSingle  $$path={[...path, name]}  widgets={widgets} name={name} key={uniqueId()}/>
  }) : null

  return (elements && <div className={style.slots}>
    {elements}
  </div>)
}

export default Single;