import * as React from "react";

import { useDrop } from "react-dnd";
import { useWidgetsTree } from '../../context'
import style from './drop-zone.module.scss'
import { cssClassName } from '../../../../core/utils/styles';

import { MdOutlineAddCircleOutline } from "react-icons/md";

import { getItemPath, isCurrentZone, isNearZone } from '../../utils/path'

const canDrop = (
  item: unknown,
  dropZonePath: Array<string|number> = [],
  isOverCurrent = true,
): boolean => {
  if (!item || !isOverCurrent) return false;

  const itemPath = getItemPath(item)

  // Path may be missing, only for the new widget. Let's add a new widget
  if (!itemPath) {
    return true
  }

  if (!isCurrentZone(itemPath, dropZonePath)) {
    return true;
  }

  // If in the near zone, then we do not transfer the widget
  return !isNearZone(itemPath, dropZonePath)
}

// DropZone
export const DropZone: React.FC<{ sortOnly: boolean, $$path?: Array<string|number>, direction?: 'column' | 'row'}> = ({
  $$path=[], direction='column', sortOnly = false,
}) => {
  const { onDrop } = useWidgetsTree();

  const [{ item, isOverCurrent }, drop] = useDrop(() => ({
    accept: "widget",
    drop(item: unknown, monitor) {
      const didDrop = monitor.didDrop();
      if (didDrop)  return;

      if (!canDrop(item, $$path)) {
        return;
      }

      if (sortOnly && !isCurrentZone(getItemPath(item), $$path)) {
        return;
      }

      onDrop(item, $$path);
    },
    collect: (monitor) => ({
      item: monitor.getItem(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  }));

  const classNames = ['drop-zone', direction];
  if (isOverCurrent) {
    // if sort only
    if ((sortOnly && !isCurrentZone(getItemPath(item), $$path))) {
      classNames.push('drop-zone-disable');
    } else if (canDrop(item, $$path, isOverCurrent)) {
      classNames.push('drop-zone-active');
    }
  }

  return (
    <div ref={drop} className={cssClassName(style, classNames)}>
      {!sortOnly && <MdOutlineAddCircleOutline />}
    </div>
  );
};