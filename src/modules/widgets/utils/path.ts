export const isCurrentZone = (widgetPath: Array<string|number>, dropZonePath: Array<string|number>): boolean => {
  if (widgetPath.length !== dropZonePath.length) {
    return false
  }

  for (let i = 0; i < widgetPath.length - 1; i++) {
    if ( widgetPath[i] !== dropZonePath[i]) {
      return false
    }
  }
  return true
}

export const isNearZone =  (widgetPath: Array<string|number>, dropZonePath: Array<string|number>): boolean => {
  const widgetPathIndex = Number(widgetPath[widgetPath.length-1]);
  const dropPathIndex = Number(dropZonePath[dropZonePath.length-1]);

  return ( widgetPathIndex - 1 === dropPathIndex || widgetPathIndex === dropPathIndex );
}

export const getItemPath = ( item: unknown ): Array<string|number>  => {
  const { $$path = [] } = item as { $$path?: Array<string|number>}
  return $$path;
}