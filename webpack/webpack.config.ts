import { buildWebpack } from './build/build-webpack';
import { ROOT_URL } from './consts/consts';
import path from 'path';

import { BuildPaths } from './types/build-options';

interface EnvVariables {
  mode?: 'development' | 'production';
  port?: number;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(ROOT_URL, 'src', 'index.tsx'),
    output: path.resolve(ROOT_URL, 'dist'),
    html: path.resolve(ROOT_URL, 'public', 'index.html'),
    public: path.resolve(ROOT_URL, 'public'),
    dirname: path.resolve(ROOT_URL),
  };

  return buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths: paths,
  });
};
