import { libInjectCss } from 'vite-plugin-lib-inject-css';

import { generateVueConfig } from '../build/build.config';

export default generateVueConfig({}, {
  plugins: [
    libInjectCss(), // For a simple usage
  ],
});
