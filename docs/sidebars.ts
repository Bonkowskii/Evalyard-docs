import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Getting started',
      items: ['intro', 'quickstart'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Guides',
      items: ['jobs', 'devices', 'metrics'],
    }
  ],
};

export default sidebars;
