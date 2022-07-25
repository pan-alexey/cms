// import { Components } from './slots';

export type WidgetComponents = 'column' | 'row' | 'single'

export type WidgetPath = Array<number | string>;

// common interface for widget
export interface WidgetCommmon {
  name: string;
  version: string;
  owner: string;
  widgetComponent: WidgetComponents; // Visual element for displaying slots
  schema?: unknown; // JSON schema for validation data
}

// Remote ItemWidget for 
export interface WidgetItem extends WidgetCommmon {
  slots?: Array<string>; // slots names
  platform: 'mobile' | 'ios' | 'android' | 'web'; // for filtering widgets in list
}

// Remote Widget
export interface Widget extends WidgetCommmon {
  data: unknown // remote widget data
  slots?: Record<string, Widget[]>; // (default slots key: general)
}

// Widget for render tree
export interface WidgetBase extends Widget {
  slots?: Record<string, WidgetBase[]>; // Path fileds, because we have new fields

  $$setting: WidgetSetting; // The widget's data in the tree. No effect on remote data
  // need only render

  $$key: string; // genered uniq key
  $$mark?: boolean; // mark for delete step
  $$path?: WidgetPath; // generated path in layout tree (in frontend app widget-slots components)
}

export interface WidgetSetting {
  collapse: boolean;
}