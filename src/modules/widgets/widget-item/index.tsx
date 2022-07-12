import * as React from "react";
import * as WidgetTypes from '../types'
import { useDrag } from "react-dnd";
import { MdDragIndicator } from "react-icons/md";

import { cssClassName } from "../../../core/utils/styles";
import style from './index.module.scss';

export const WidgetItem: React.FC<WidgetTypes.WidgetItem> = (props) => {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: "widget",
    item: props,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const classNames = isDragging ? ['item-is-drag', 'item']: ['item'];

  return (
    <div className={cssClassName(style, classNames)} ref={preview}>
      <div className={style.title}>
        <div className={style.info}>
          <div className={style.drag} ref={drag}>
            <MdDragIndicator />
          </div>
          <div className={style.content}>
            <div className={style.name}>{props.name} [{props.version}]</div>
            <div className={style.description}>{props.owner}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
