import * as React from "react";

import { useDrag } from "react-dnd";
import * as WidgetTypes from '../../types';
import { WidgetTitle } from './widget-title';

import { WidgetComponents } from '../../components'

import { cssClassName } from "../../../../core/utils/styles";
import { isNotEmptyObject } from "../../../../core/utils/object";

import style from "./index.module.scss";

export const WidgetBase: React.FC<WidgetTypes.WidgetBase> = (props) => {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: "widget",
    item: props,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const Component = WidgetComponents[props.widgetComponent] || WidgetComponents["column"]; // column - is a failback conponent

  // Patch $$path for slots
  const componentProps = Object.assign({}, props, {
    $$path: props.$$path ? [...props.$$path, 'slots'] : []
  });

  const classNames = isDragging ? ['widget-is-drag', 'widget']: ['widget'];

  const hasSlots = isNotEmptyObject(props.slots)
  return (
    <div ref={preview} className={cssClassName(style, classNames)}>
      <WidgetTitle
        name={props.name}
        version={props.version}
        owner={props.owner}
        hasSlots={hasSlots}
        $$path={props.$$path}
        $$drag={drag}
        $$setting={props.$$setting}
      />
      {hasSlots && props.$$setting.collapse && (<div className={style.slots}>
        <React.Suspense fallback={null}>
          <Component {...componentProps}/>
        </React.Suspense>
      </div>)}
    </div>
  );
};

export default WidgetBase;