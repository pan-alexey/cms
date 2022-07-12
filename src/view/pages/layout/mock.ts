import * as WidgetTypes from "../../../modules/widgets/types";

export const remoteWidgetTree: Array<WidgetTypes.Widget> = [
  {
    name: "widget lvl 0-0",
    data: {},
    version: "1.3",
    owner: "infomodel",
    widgetComponent: "column",
  },
  {
    name: "widget single",
    data: {},
    version: "1.1.1",
    owner: "infomodel",
    widgetComponent: "single",
    slots: {
      test: []
    }
  },
  {
    name: "widget lvl 0-2",
    data: {},
    version: "1.1",
    owner: "infomodel",
    widgetComponent: "column",
    slots: {
      test1: [
        {
          name: "widget lvl 1-0",
          data: {},
          version: "1.1",
          owner: "infomodel",
          widgetComponent: "column",
        },
        {
          name: "widget lvl 1-1",
          data: {},
          version: "1.1",
          owner: "infomodel",
          widgetComponent: "column",
        },
        {
          name: "widget lvl 1-2",
          data: {},
          version: "1.1",
          owner: "infomodel",
          widgetComponent: "column",
          slots: {
            test: []
          }
        }
      ],
      test2: [
        {
          name: "widget lvl 1-0",
          data: {},
          version: "1.1",
          owner: "infomodel",
          widgetComponent: "column",
        },
        {
          name: "widget lvl 1-1",
          data: {},
          version: "1.1",
          owner: "infomodel",
          widgetComponent: "column",
        },
        {
          name: "widget lvl 1-2",
          data: {},
          version: "1.1",
          owner: "infomodel",
          widgetComponent: "column",
          slots: {
            test: []
          }
        }
      ]
    }
  }
]

export const remoteWidgetItems: Array<WidgetTypes.WidgetItem> = [
  {
    name: "liar-col",
    platform: 'web',
    version: "1.2",
    owner: "infomodel",
    widgetComponent: "column",
    slots: ['liar-slot-1', 'liar-slot-2']
  },
  {
    name: "liar-row",
    platform: 'web',
    version: "1.2",
    owner: "infomodel",
    widgetComponent: "row",
    slots: ['liar-slot-1', 'liar-slot-2']
  },
  {
    name: "widget",
    platform: 'web',
    version: "1.1",
    owner: "infomodel",
    widgetComponent: "column",
  },
  {
    name: "widget",
    platform: 'web',
    version: "1.2",
    owner: "pdp",
    widgetComponent: "column",
  },
  {
    name: "widget",
    platform: 'web',
    version: "2.2",
    owner: "pdp",
    widgetComponent: "column",
  },
  {
    name: "widget",
    platform: 'web',
    version: "1.1",
    owner: "infomodel",
    widgetComponent: "column",
  },
  {
    name: "widget",
    platform: 'web',
    version: "1.2",
    owner: "pdp",
    widgetComponent: "column",
  },
  {
    name: "widget",
    platform: 'web',
    version: "2.2",
    owner: "pdp",
    widgetComponent: "column",
  },
  {
    name: "widget",
    platform: 'web',
    version: "1.1",
    owner: "infomodel",
    widgetComponent: "column",
  },
  {
    name: "widget",
    platform: 'web',
    version: "1.2",
    owner: "pdp",
    widgetComponent: "column",
  },
  {
    name: "widget",
    platform: 'web',
    version: "2.2",
    owner: "pdp",
    widgetComponent: "column",
    
  },
  {
    name: "widget",
    platform: 'web',
    version: "1.1",
    owner: "infomodel",
    widgetComponent: "column",
  },
  {
    name: "widget",
    platform: 'web',
    version: "1.2",
    owner: "pdp",
    widgetComponent: "column",
  },
  {
    name: "widget",
    platform: 'web',
    version: "2.2",
    owner: "pdp",
    widgetComponent: "column",
  },
  {
    name: "widget",
    platform: 'web',
    version: "1.1",
    owner: "infomodel",
    widgetComponent: "column",
  },
  {
    name: "widget",
    platform: 'web',
    version: "1.2",
    owner: "pdp",
    widgetComponent: "column",
  },
  {
    name: "widget",
    platform: 'web',
    version: "2.2",
    owner: "pdp",
    widgetComponent: "column",
  },
  {
    name: "widget",
    platform: 'web',
    version: "1.1",
    owner: "infomodel",
    widgetComponent: "column",
  },
  {
    name: "widget",
    platform: 'web',
    version: "1.2",
    owner: "pdp",
    widgetComponent: "column",
  },
  {
    name: "widget",
    platform: 'web',
    version: "2.2",
    owner: "pdp",
    widgetComponent: "column",
  },
  {
    name: "widget",
    platform: 'web',
    version: "1.1",
    owner: "infomodel",
    widgetComponent: "column",
  },
  {
    name: "widget",
    platform: 'web',
    version: "1.2",
    owner: "pdp",
    widgetComponent: "column",
  },
  {
    name: "widget",
    platform: 'web',
    version: "2.2",
    owner: "pdp",
    widgetComponent: "column",
  },
  {
    name: "widget",
    platform: 'web',
    version: "1.1",
    owner: "infomodel",
    widgetComponent: "column",
  },
  {
    name: "widget",
    platform: 'web',
    version: "2.2",
    owner: "pdp",
    widgetComponent: "column",
  }
]
