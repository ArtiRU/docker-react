import path from 'path';

import { BuildOptions } from '../types/build-options';

export function buildResolvers(options: BuildOptions) {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(options.paths.dirname, 'src'),
    },
  };
}
