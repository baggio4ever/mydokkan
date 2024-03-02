const isProd = process.env.NODE_ENV === "production";

const mySettings = {
  sub_dir: isProd? '/mydokkan':'',
};

export default mySettings;
