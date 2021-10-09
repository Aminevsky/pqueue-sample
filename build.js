const esbuild = require('esbuild');

esbuild.buildSync({
  entryPoints: ['src/client.ts'],
  outdir: 'dist',
  outExtension: { '.js': '.mjs' },
  format: 'esm',
});

esbuild.buildSync({
  entryPoints: ['src/server.ts'],
  outdir: 'dist',
  outExtension: { '.js': '.mjs' },
  format: 'esm',
});
