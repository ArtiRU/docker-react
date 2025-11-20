import { buildDevServer } from './build-dev-server';
import { buildLoaders } from './build-loaders';
import { buildPlugins } from './build-plugins';
import { buildResolvers } from './build-resolvers';
import { Configuration } from 'webpack';

import { BuildOptions } from '../types/build-options';

export function buildWebpack(options: BuildOptions): Configuration {
  const isDev = options.mode === 'development';

  return {
    mode: options.mode ?? 'development',
    entry: options.paths.entry,
    module: {
      rules: buildLoaders(options),
    },
    devServer: buildDevServer(options),
    devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
    resolve: buildResolvers(options),
    output: {
      filename: 'js/[contenthash].bundle.js',
      assetModuleFilename: 'images/[hash][ext][query]',
      path: options.paths.output,
      clean: true,
      publicPath: 'auto',
    },
    plugins: buildPlugins(options),
  };
}
