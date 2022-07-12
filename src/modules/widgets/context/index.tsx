import * as React from "react";
import * as WidgetTypes from '../types'

type OnDrop = (item: unknown, path: Array<string | number>) => void 
type OnDelete = (path: Array<string | number>) => void 
type SetSetting = ( setting: WidgetTypes.WidgetSetting, path: Array<string | number>) => void;

export interface WidgetsTree {
  onDrop: OnDrop;
  onDelete: OnDelete;
  setSetting: SetSetting;
  // showDrawer: () => void;
  editable: boolean;
}

export const WidgetsTreeDefaultValue: WidgetsTree = {
  onDrop: () => null,
  onDelete: () => null,
  editable: true,
  setSetting: () => null,
  // showDrawer: () => null,
}

export const WidgetsTreeContext = React.createContext<WidgetsTree>(WidgetsTreeDefaultValue);

export const useWidgetsTree = () => {
  return React.useContext<WidgetsTree>(WidgetsTreeContext);
}

export const WidgetsTreeProvider : React.FC<{
  children?: React.ReactNode;
  editable: boolean;
  onDrop: OnDrop;
  onDelete: OnDelete;
  setSetting: SetSetting;
  // showDrawer: () => void;
}> = (props) => {
  return <WidgetsTreeContext.Provider value={props}>
    {props.children}
  </WidgetsTreeContext.Provider>
}

export default WidgetsTreeProvider;
