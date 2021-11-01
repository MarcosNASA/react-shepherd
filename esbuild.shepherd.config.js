const { build } = require('esbuild')

build({
  entryPoints: ['index.js'],
  outdir: 'dist',
  external: ['react', 'react-dom'],
  loader: { '.js': 'jsx' },
  bundle: true,
  minify: true,
  format: 'esm',
  target: 'es2017',
  platform: 'browser',
  splitting: true,
}).catch((error) => {
  console.error(error)
  process.exit(1)
})
