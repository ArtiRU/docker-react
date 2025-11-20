export type BuildPaths = {
  entry: string;
  output: string;
  html: string;
  dirname: string;
  public: string;
};

export interface BuildOptions {
  port: number;
  mode: 'development' | 'production';
  paths: BuildPaths;
}
