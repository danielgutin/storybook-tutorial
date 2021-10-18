import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
    },
  },
}

addDecorator(story => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    {story()}
  </div>
));

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
})
