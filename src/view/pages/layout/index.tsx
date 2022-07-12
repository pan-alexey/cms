import * as React from "react";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { useAppDispatch } from "../../../app/store";
import { loadWidget } from './store/actions';
import { getWidgets } from './store/selectors';

import { Menu } from './modules/menu';

// import * as WidgetTypes from "../../../modules/widgets/types";
import { WidgetsTree } from "../../../modules/widgets";
import { WidgetItem } from "../../../modules/widgets/widget-item";

import { cssClassName } from "../../../core/utils/styles";
import style from "./style.module.scss";

// mock types
import { remoteWidgetTree, remoteWidgetItems} from './mock';

export const Layout: React.FC = () => {
  const selector = getWidgets()
  const dispatch = useAppDispatch();

  console.log(selector)
  React.useEffect(() => {
    dispatch(loadWidget()) //
  }, [])

  return (
    <div className={cssClassName(style, ["page"])}>
      <div className={cssClassName(style, ["page-menu"])}>
        <Menu />
      </div>
      <div className={cssClassName(style, ["view"])}>
        <DndProvider backend={HTML5Backend}>
        <div className={cssClassName(style, ["content"])}>

            <div className={cssClassName(style, ["sidebar"])}>
              <div className={cssClassName(style, ["sidebar-content"])}>
                <div className={cssClassName(style, ["items-header"])}>
                  1. search panel
                  <br/>
                  2. filter by owner
                  <br/>
                  3. load new widget items
                </div>
                <div className={cssClassName(style, ["items-content"])}>
                  <div className={cssClassName(style, ["items-body"])}>
                    {remoteWidgetItems.map((item, i) => {
                      return <WidgetItem {...item} key={i}/>
                    })}
                    <br/>
                  </div>
                </div>
              </div>

              {/* <div className={cssClassName(style, ["sidebar-content"])}>
                Виджет который можно вставить кликом.
                Вставить из буфера обмена (попытаться вставить)
              </div> */}
            </div>

            <div className={cssClassName(style, ["panel-widget"])}>
              <div className={cssClassName(style, ["widget-header"])}>
                1. save new version / clone layout
                <br/>
                2. publish new version
                <br/>
                3. set version
                <br/>
                4. show information (routes, platform, platform-version, example page [qrcode])
              </div>
              <div className={cssClassName(style, ["widget-body"])}>
                <WidgetsTree editable={true} widgets={remoteWidgetTree}/>
              </div>
            </div>
        </div>
        </DndProvider>
      </div>
    </div>
  );
};

export default Layout;
