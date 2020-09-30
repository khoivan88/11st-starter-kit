module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-100vh-fix'),
    require('postcss-preset-env')({ stage: 3 }),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};
