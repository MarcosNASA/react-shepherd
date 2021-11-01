const { build, serve } = require('esbuild')

serve(
  {
    servedir: 'public',
    port: 3000,
  },
  {
    entryPoints: ['examples/index.js'],
    outdir: 'public',
    loader: { '.js': 'jsx' },
    bundle: true,
    platform: 'browser',
  }
).catch((error) => {
  console.error(error)
  process.exit(1)
})
