export interface WidgetItems {
  id: string,
  completed: boolean
  text: string, 
}

export interface Page {
  ready: boolean;
}

export type RemoteWidgets = Array<{ name: string}>;
export type RemoteWidgetItems = Array<{ name: string}>
export interface LayoutInfo {
  createdAt: ''
  vesions: Array<{
    version: number,
    isProduction: boolean,
    publishedAt: string,
    depricatedAt: string,
  }>,
  platform: string,
}
