import * as React from 'react';
import * as WidgetTypes from '../types';
// components
import Column from './column'
import Row from './row'
import Singe from './single' 

export const WidgetComponents: Record<string, React.FC<WidgetTypes.WidgetBase>> = {
  general: Row,
  column: Column,
  row: Row,
  single: Singe,

  // lazy load supported
  // 'test': React.lazy(() => import('./column-single')),
  // container: React.lazy(() => import('./container')),
  // navbar: React.lazy(() => import('./navbar'))
}

export type WidgetComponentNames = keyof typeof WidgetComponents

export default WidgetComponents;