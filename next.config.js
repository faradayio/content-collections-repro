// @ts-check

const { withContentCollections } = require("@content-collections/next");
const nextRoutes = require("nextjs-routes/config");

// @ts-ignore
const withRoutes = nextRoutes();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    scrollRestoration: true,
    // nextjs incremental page building fails with phosphor icons unless we do this
    // https://github.com/phosphor-icons/react/issues/45
    optimizePackageImports: ["@phosphor-icons/react"],
  },
  transpilePackages: [
    "react-syntax-highlighter",
    "@content-collections/mdx",
    "mdx-bundler",
  ],
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "removeViewBox",
                  active: false,
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

module.exports = withRoutes(
  withContentCollections(nextConfig)
);
