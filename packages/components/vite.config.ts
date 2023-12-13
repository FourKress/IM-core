import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { generateVueConfig } from '../build/scripts';

export default generateVueConfig({}, {
  plugins: [
    libInjectCss(), // For a simple usage
  ],
});
