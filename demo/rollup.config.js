import { main as inlineCSS } from '../src/rollup-plugin-css-module-inliner';

export default {
  input: 'src/app.js',
  output: {
    file: 'dist/app.js',
    format: 'es'
  },
  plugins: [
    inlineCSS()
  ]
};