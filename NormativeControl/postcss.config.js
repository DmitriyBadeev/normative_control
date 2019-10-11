module.exports = {
    plugins: [
        require('autoprefixer') ({
            browsers: ['last 2 versions', '> 1%'],
        }),
        require('cssnano')({
            preset: 'default',
        }),
    ]
};