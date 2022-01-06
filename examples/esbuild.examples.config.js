const { build, serve } = require('esbuild')

serve(
  {
    servedir: 'public',
    port: 3000,
  },
  {
    entryPoints: ['index.js'],
    outdir: 'public',
    bundle: true,
    loader: { '.js': 'jsx' },
    platform: 'browser',
  }
).catch((error) => {
  console.error(error)
  process.exit(1)
})
