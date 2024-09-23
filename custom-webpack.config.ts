import CompressionPlugin from "compression-webpack-plugin";
import DotenvWebpackPlugin from "dotenv-webpack";

// import { EAppEnvironment } from "@environments/environment.model";

/*const getEnvFilePerEnvironment = (): string => {
  return !process.env.APP_ENV || process.env.APP_ENV === EAppEnvironment.LOCAL ? ".env" : `.env.${process.env.APP_ENV}`;
};*/

module.exports = {
  output: {
    crossOriginLoading: "anonymous"
  },
  plugins: [
    new DotenvWebpackPlugin({
      systemvars: true
    }),
    new CompressionPlugin({
      // Be very carefully with 'true', sometimes bug happens
      deleteOriginalAssets: false,
      algorithm: "gzip",
      test: /\.(js|css|svg|txt|eot|otf|ttf|gif)$/
    })
  ]
};
