import * as React from "react";
import WidgetsTreeProvider from './context'
import * as WidgetTypes from './types';
// import { Drawer } from 'antd';

import { widgetsToBase } from './utils/adapters'
import { WidgetSlot } from './widget-tree/widget-slot';
import { cssClassName } from "../../core/utils/styles";
import style from "./index.module.scss";
import { deleteWidget, setWidgetSetting, updateWidgets, addWidgetItem } from './utils/reductors'

export const WidgetsTree : React.FC<{
  widgets: Array<WidgetTypes.Widget>;
  editable: boolean;
}> = ({
  widgets,
  editable
}) => {
  const [ widgetTree, setWidgetTree ] = React.useState<WidgetTypes.WidgetBase[]>(widgetsToBase(widgets));

  const onDrop = (item: unknown, path: Array<string|number>) => {
    // If there is $$path, then sorting tree
    if (typeof item === 'object' && item !== null && '$$path' in item) {
      const newTree = updateWidgets(widgetTree ,item as WidgetTypes.WidgetBase, path);
      setWidgetTree(newTree);
    }
    //  if not have $$path, is the item (try add item)
    else {
      const newTree = addWidgetItem(widgetTree, item as WidgetTypes.WidgetItem, path)
      setWidgetTree(newTree);
    }
  };

  const onDelete = (path: Array<string| number>) => {
    const newTree = deleteWidget(widgetTree, path);
    setWidgetTree(newTree);
  };

  const setSetting = (setting: WidgetTypes.WidgetSetting, path: Array<string|number>) => {
    const newTree = setWidgetSetting(widgetTree, setting, path);
    setWidgetTree(newTree);
  }

  return<WidgetsTreeProvider editable={editable} onDrop={onDrop} onDelete={onDelete} setSetting={setSetting}>
    <div className={cssClassName(style, ["test-content"])}>
      <div className={cssClassName(style, ["tree"])}>
        <WidgetSlot widgets={widgetTree} />
      </div>
    </div>
  </WidgetsTreeProvider>
}