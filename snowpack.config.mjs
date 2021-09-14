/** @type {import("snowpack").SnowpackUserConfig } */
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';

export default {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  alias: {
    components: './src/components',
    helpers: './src/helpers',
    hooks: './src/helpers',
    pages: './src/pages',
    styles: './src/styles',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-sass',
    [
      '@snowpack/plugin-typescript',
      {
        /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
        ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
      },
    ],
    [
      '@snowpack/plugin-webpack',
      {
        extendConfig: (config) => {
          config.plugins.push(
            new WebpackManifestPlugin({
              fileName: 'asset-manifest.json',
              publicPath: '/',
              generate: (seed, files, entrypoints) => {
                const manifestFiles = files.reduce((manifest, file) => {
                  manifest[file.name] = file.path;
                  return manifest;
                }, seed);
                const entrypointFiles = entrypoints['dist/index'].filter((fileName) => !fileName.endsWith('.map'));

                return {
                  files: manifestFiles,
                  entrypoints: entrypointFiles,
                };
              },
            }),
          );

          return config;
        },
      },
    ],
  ],

  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    port: 8081,
  },
  buildOptions: {
    /* ... */
  },
};
