import * as React from "react";
import * as WidgetTypes from '../../types';
import { WidgetBase } from '../widget-base'
import { DropZone } from "./drop-zone";
import uniqueId from 'lodash/uniqueId'

import style from "./index.module.scss";
import { cssClassName } from "../../../../core/utils/styles";

export const WidgetSlot: React.FC<{
  widgets: Array<WidgetTypes.WidgetBase>;
  $$path?: WidgetTypes.WidgetPath;
  name?: string;
  max?: number;
  direction?: "row" | "column"; 
}> = ({
  widgets,
  $$path = [],
  name,
  max = Infinity,
  direction = 'column'
}) => {
  const path = [...$$path, -1];
  const sortOnly = widgets.length >= max;
  const elements: Array<React.ReactNode> = [];
  elements.push(<DropZone direction={direction} sortOnly={sortOnly} $$path={path} key={uniqueId('DropZone')}/>);
  widgets.forEach((widget, i) => {
    const path = [...$$path, i];
    elements.push(<WidgetBase $$path={path} {...widget} key={uniqueId('widget')}/>);
    elements.push(<DropZone direction={direction} sortOnly={sortOnly} $$path={path} key={uniqueId('DropZone')}/>);
  });

  return (
    <div className={cssClassName(style, ["slot-container"])}>
      <div className={cssClassName(style, ["slot-name"])}>{name}</div>
      <div className={cssClassName(style, ["slot", direction])}>{elements}</div>
    </div>
  );
};

export const WidgetSlotSingle: React.FC<{
  widgets: Array<WidgetTypes.WidgetBase>;
  $$path?: WidgetTypes.WidgetPath;
  name?: string;
}> = ({
  widgets,
  $$path = [],
  name,
}) => {
  const elements: Array<React.ReactNode> = [];

  if (widgets.length === 0) {
    elements.push(
      <DropZone
        direction={"column"}
        $$path={[...$$path, -1]}
        key={uniqueId('DropZone')}
        sortOnly={false}
      />
    );  
  }

  widgets.forEach((widget, i) => {
    const path = [...$$path, i];
    elements.push(<WidgetBase $$path={path} {...widget} key={uniqueId('WidgetBase')} />);
  });

  return (
    <div className={cssClassName(style, ["slot-container"])}>
      <div className={cssClassName(style, ["slot-name"])}>{name}</div>
      <div className={cssClassName(style, ["slot", "column"])}>{elements}</div>
    </div>
  );
};