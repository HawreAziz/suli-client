import webpack from 'webpack';

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            'process.env.TS': JSON.stringify(process.env.NODE_ENV),
            'process.env.MY_ENV': JSON.stringify(process.env.MY_ENV),
        })
    ],
}