/**
 * This file provides the mock "data" received
 * by your visualization code when you develop
 * locally.
 *
 */
export const message = {
  tables: {
    DEFAULT: [
      {
        dimID: ['churned'],
        metricID: [20,	10,	-15,	30,  {isSum: true}],
      },
      {
        dimID: ['not churned'],
        metricID:  [20,	50,	-25,	10,  {isSum: true}],
      },
      {
        dimID: ['churning'],
        metricID: [5,	10,	-5,	10,  {isSum: true}],
      },
    ],
  },
  fields: {
    dimID: [
      {
        id: 'qt_nzqx6a0xvb',
        name: 'Data Set Name',
        type: 'TEXT',
        concept: 'DIMENSION',
      },
    ],
    metricID: [
      {
        id: 'qt_8isx6a0xvb',
        name: '2020-11',
        type: 'NUMBER',
        concept: 'METRIC',
      },
      {
        id: 'qt_8isx6a0xvc',
        name: '2020-12',
        type: 'NUMBER',
        concept: 'METRIC',
      },
      {
        id: 'qt_8isx6a0xvd',
        name: '2021-01',
        type: 'NUMBER',
        concept: 'METRIC',
      },
      {
        id: 'qt_8isx6a0xve',
        name: '2021-02',
        type: 'NUMBER',
        concept: 'METRIC',
      },
      {
        id: 'qt_8isx6a0xve',
        name: 'Sub-Total',
        type: 'TEXT',
        concept: 'METRIC',
      },
    ],
  },
  style: {},
};
