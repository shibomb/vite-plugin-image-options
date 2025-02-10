// import type { Plugin, ResolvedConfig } from 'vite'
// import { VITE_PLUGIN_NAME, DEFAULT_OPTIONS } from './constants';
import type { Plugin } from 'vite'
import { VITE_PLUGIN_NAME } from './constants';

interface Options {
}

function ViteImageOptions(optionsParam: Options = {}): Plugin {

  console.log(optionsParam)

  // let outputPath: string;
  // let publicDir: string;
  // let rootConfig: ResolvedConfig;

  return {
    name: VITE_PLUGIN_NAME,
    enforce: 'post',
    apply: 'build',
    // configResolved(c) {
    //   rootConfig = c;
    //   outputPath = c.build.outDir;
    //   if (typeof c.publicDir === 'string') {
    //     publicDir = c.publicDir.replace(/\\/g, '/');
    //   }
    // },
    // generateBundle: async (_, bundler) => {
    //   console.log("#generateBundle")
    //   console.log("DEFAULT_OPTIONS", DEFAULT_OPTIONS)
    //   console.log("c", { outputPath, publicDir, rootConfig })

    //   const allFiles: string[] = Object.keys(bundler);
    //   console.log("allFiles", allFiles)
    // },
    // async closeBundle() {
    //   console.log("#closeBundle")
    // },
  }
}

export { Options, ViteImageOptions };
