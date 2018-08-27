import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default [{
  plugins: [babel(), commonjs(), resolve()],
  input: 'src/observable.js',
  output: {
    name: 'Observable',
    file: 'dist/observable.js',
    format: 'umd',
  }
}];
