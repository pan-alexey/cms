import * as WidgetTypes from '../types';
import uniqueId from 'lodash/uniqueId'

const getDefaultWidgetSetting = (): WidgetTypes.WidgetSetting => {
  return {
    collapse: true,
  }
}

export const itemToBase = (widget: WidgetTypes.WidgetItem ): WidgetTypes.WidgetBase => {
  const {
    name,
    version,
    owner,
    schema,
    widgetComponent,
    slots
  } = widget;

  // fill slots
  const widgetSlots: Record<string, WidgetTypes.WidgetBase[]> = {}
  if (slots) {
    slots.forEach(name => {
      widgetSlots[name] = []
    })
  }

  const reult: WidgetTypes.WidgetBase =  {
    name,
    version,
    owner,
    schema,
    widgetComponent,
    data: {}, // fill data
    slots: widgetSlots,
    $$setting: getDefaultWidgetSetting(),
    $$key: uniqueId('widget')
  }

  return reult;
}

// convert remote widget to base widget (for render widget tree)
export const widgetsToBase = (widgets: Array<WidgetTypes.Widget>): Array<WidgetTypes.WidgetBase> => {
  const result: Array<WidgetTypes.WidgetBase> = [];
  widgets.forEach((item: WidgetTypes.Widget) => {
    const slots: Record<string, WidgetTypes.WidgetBase[]> = {}
    if (item.slots) {
      Object.keys(item.slots).forEach((key: string) => {
        const slotWidgets = item.slots ? item.slots[key] : [];
        slots[key] = widgetsToBase(slotWidgets);
      })
    }

    result.push({
      ...item,
      data: item.data || {},
      slots, // convert slots
      $$setting: getDefaultWidgetSetting(),
      $$key: uniqueId('widget')
    })
  });
  return result
}

export const baseToWidget = (widgets: Array<WidgetTypes.WidgetBase>): Array<WidgetTypes.Widget> => {
  const result: Array<WidgetTypes.Widget> = [];

  widgets.forEach((item: WidgetTypes.WidgetBase) => {
    const slots: Record<string, WidgetTypes.Widget[]> = {};
    if (item.slots) {
      Object.keys(item.slots).forEach((key: string) => {
        const slotWidgets = item.slots ? item.slots[key] : [];
        slots[key] = baseToWidget(slotWidgets);
      })
    }

    result.push({
      name: item.name,
      version: item.version,
      owner: item.owner,
      widgetComponent: item.widgetComponent,
      schema: item.schema,
      data: item.data || {},
      slots, // convert slots
    })
  });

  return result;
};