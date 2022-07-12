import * as WidgetTypes from '../types';
import { itemToBase } from './adapters';
import _set from 'lodash/set';
import _get from 'lodash/get';


// ---------- widgets processing ------------//
export const sweepWidgets = (widgets: Array<WidgetTypes.WidgetBase>): Array<WidgetTypes.WidgetBase> => {
  const result: Array<WidgetTypes.WidgetBase> = [];

  for (let i = 0; i < widgets.length; i++) {
    const widget = widgets[i];
    if (widget.$$mark) continue; // filtering widget with mark


    if (widget.slots) {
      const slots: Record<string, WidgetTypes.WidgetBase[]> = {};
      Object.keys(widget.slots).forEach((key: string) => {
        const slotWidgets = widget.slots ? widget.slots[key] : [];
        slots[key] = sweepWidgets(slotWidgets);
      })
      widget.slots = slots;
    }
    result.push(widget)
  }

  return result;
};

export const setWidgetSetting = (widgets: Array<WidgetTypes.WidgetBase>, setting: WidgetTypes.WidgetSetting, path: Array<string|number>): Array<WidgetTypes.WidgetBase> => {
  const tree = JSON.parse(JSON.stringify(widgets));
  _set(tree, [...path, '$$setting'], setting);

  return tree
}

export const deleteWidget = (
  widgets: Array<WidgetTypes.WidgetBase>,
  path: Array<string|number>
): Array<WidgetTypes.WidgetBase> => {
  // todo clone
  const tree =  JSON.parse(JSON.stringify(widgets));
  _set(tree, [...path, '$$mark'], true);
  return sweepWidgets(tree);
};

export const updateWidgets = (
  widgets: Array<WidgetTypes.WidgetBase>,
  widget: WidgetTypes.WidgetBase,
  dropPath: Array<string|number>
): Array<WidgetTypes.WidgetBase> => {
  const tree = {
    // добовляем $root, для того чтобы легче работать с корневым узлом
    $root: JSON.parse(JSON.stringify(widgets))
  };

  // 1. Сохраняем новую копию виджета
  const widgetPath = ['$root', ...(widget.$$path || [])];
  const widgetCopy = JSON.parse(JSON.stringify(_get(tree, widgetPath)));

  // 2. помечаем старый виджет, чтобы потом удалить его из дерева
  _set(tree, [...widgetPath, '$$mark'], true)

  // 3. Вставляем новый виджет в необходимую зону.
  // 3.1 Определяем ноду и индекс для вставки
  const zonePath = ['$root', ...dropPath];
  const zoneIndex = Number(zonePath.pop());
  const zoneNode = _get(tree, zonePath);
  // 3.2 Вствыляем виджет в установленный dropzone
  const zoneNodeNew = [];
  if (zoneNode.length === 0 || zoneIndex === -1 ) {
    zoneNodeNew.push(widgetCopy);
  }
  zoneNode.forEach((nodeWidget: unknown, i: number) => {
    zoneNodeNew.push(nodeWidget)
    if (i === zoneIndex) {
      zoneNodeNew.push(widgetCopy)
    }
  });
  _set(tree, zonePath, zoneNodeNew);
  return sweepWidgets(tree.$root);
};

export const addWidgetItem = (
  widgets: Array<WidgetTypes.WidgetBase>,
  item: WidgetTypes.WidgetItem,
  dropPath: Array<string|number>
): Array<WidgetTypes.WidgetBase> => {
  const tree = {
    // добовляем $root, для того чтобы легче работать с корневым узлом
    $root: JSON.parse(JSON.stringify(widgets))
  };
  
  // 1. Конвертируем item в basewidget
  const widget: WidgetTypes.WidgetBase = itemToBase(item);
  const zonePath = ['$root', ...dropPath];
  const zoneIndex = Number(zonePath.pop());
  const zoneNode = _get(tree, zonePath);

  // 2. Вствыляем виджет в установленный dropzone
  const zoneNodeNew = [];
  if (zoneNode.length === 0 || zoneIndex === -1 ) {
    zoneNodeNew.push(widget);
  }
  zoneNode.forEach((nodeWidget: unknown, i: number) => {
    zoneNodeNew.push(nodeWidget)
    if (i === zoneIndex) {
      zoneNodeNew.push(widget)
    }
  });
  _set(tree, zonePath, zoneNodeNew);

  return tree.$root
}
