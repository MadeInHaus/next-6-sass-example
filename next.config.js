const withSass = require('@zeit/next-sass');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extract = new ExtractTextPlugin({ filename: 'static/style.css' });

module.exports = withSass({
    cssModules: true,
    extractCSSPlugin: extract,
    webpack: config => {
        config.plugins.push(extract);
        return config;
    },
});
