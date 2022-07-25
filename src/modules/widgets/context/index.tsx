import * as React from "react";
import * as WidgetTypes from '../types'

type OnDrop = (item: unknown, path: Array<string | number>) => void 
type OnDelete = (path: Array<string | number>) => void 
type SetSetting = ( setting: WidgetTypes.WidgetSetting, path: Array<string | number>) => void;

export interface WidgetsTree {
  onDrop: OnDrop;
  onDelete: OnDelete;
  setSetting: SetSetting;
  editable: boolean;
}

export const WidgetsTreeDefaultValue: WidgetsTree = {
  editable: true,
  onDrop: () => null,
  onDelete: () => null,
  setSetting: () => null,
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
}> = (props) => {
  return <WidgetsTreeContext.Provider value={props}>
    {props.children}
  </WidgetsTreeContext.Provider>
}

export default WidgetsTreeProvider;
