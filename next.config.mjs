import mySettings from './myConfig.mjs';
//const SUB_DIRECTORY = "/mydokkan";
const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    //    basePath: isProd ? "/mydokkan" : "",
    assetPrefix: isProd ? "/mydokkan/" : "",
    basePath: isProd ? mySettings.sub_dir : "",
//    assetPrefix: isProd ? mySettings.sub_dir + '/' : "",
    /*
        publicRuntimeConfig: {
            basePath: isProd ? SUB_DIRECTORY : "",
        }
        */
};

export default nextConfig;
