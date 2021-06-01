import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import autoExternal from 'rollup-plugin-auto-external'
import cleaner from 'rollup-plugin-cleaner';

export default {
  input: 'src/index.js',
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      exports: 'auto',
      sourcemap: true,
      inlineDynamicImports: false,
      preserveModules: true
    },
    {
      dir: 'dist/es',
      sourcemap: true,
      inlineDynamicImports: false,
      preserveModules: true
    }
  ],
  external: id => id.includes('lodash') || ['react', 'prop-types'].includes(id),
  plugins: [
    cleaner({
      targets: [
        './dist/'
      ]
    }),
    autoExternal({
      builtins: false,
      dependencies: true,
      peerDependencies: false
    }),
    postcss({
      modules: true
    }),
    url(),
    babel({
      exclude: 'node_modules/**',
      plugins: []
    }),
    resolve(),
    commonjs()
  ]
}
