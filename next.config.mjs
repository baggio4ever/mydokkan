//const SUB_DIRECTORY = "/mydokkan";
const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: isProd ? "/mydokkan" : "",
    //    assetPrefix: "/mydokkan/",
    /*
        publicRuntimeConfig: {
            basePath: isProd ? SUB_DIRECTORY : "",
        }
        */
};

export default nextConfig;
