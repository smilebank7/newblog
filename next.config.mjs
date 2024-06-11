/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.md/,
            use: 'raw-loader',
        });
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
    output: 'standalone',
    assetPrefix : '/blog'
/*
    assetPrefix: isProd ? 'http://smilebank7.com' : undefined
*/
};

export default nextConfig;