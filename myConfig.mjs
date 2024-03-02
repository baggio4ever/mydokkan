const isProd = process.env.NODE_ENV === "production";

const mySettings = {
  sub_dir: isProd ? '/mydokkan' : '',
  basePath: isProd ? '/mydokkan' : '',
  assetPrefix: isProd ? '/mydokkan/' : '',
};

export default mySettings;
