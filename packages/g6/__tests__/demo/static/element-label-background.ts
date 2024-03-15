import { Graph } from '@/src';
import type { StaticTestCase } from '../types';

export const elementLabelBackground: StaticTestCase = async (context) => {
  const { container, animation, theme } = context;

  const data = {
    nodes: [
      {
        id: 'node1',
        style: { x: 250, y: 100 },
      },
      {
        id: 'node2',
        style: { x: 150, y: 300 },
      },
      {
        id: 'node3',
        style: { x: 400, y: 300 },
      },
    ],
    edges: [
      {
        id: 'edge1',
        source: 'node1',
        target: 'node2',
      },
      {
        id: 'edge2',
        source: 'node1',
        target: 'node3',
      },
      {
        id: 'edge3',
        source: 'node2',
        target: 'node3',
      },
    ],
  };

  const graph = new Graph({
    container,
    data,
    node: {
      style: {
        labelText: (d: any) => d.id,
        labelPlacement: 'bottom',
        labelFill: '#e66465',
        labelFontSize: 12,
        labelFontStyle: 'italic',
        labelBackground: true,
        labelBackgroundFill: '#eee',
        labelBackgroundStroke: '#9ec9ff',
        labelBackgroundRadius: 2,
      },
    },
    edge: {
      style: {
        labelText: (d: any) => d.id,
        labelPlacement: 'center',
        labelTextBaseline: 'top',
        labelDy: 5,
        labelFontSize: 12,
        labelFontWeight: 'bold',
        labelFill: '#1890ff',
        labelBackgroundFill: '#eee',
        labelBackgroundStroke: '#9ec9ff',
        labelBackgroundRadius: 2,
      },
    },
    behaviors: ['drag-canvas', 'drag-node'],
    animation,
    theme,
  });

  await graph.render();
};
