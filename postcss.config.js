module.exports = {
  plugins: [
    'tailwindcss',
    ...(process.env.NODE_ENV === 'production'
      ? [
          [
            '@fullhuman/postcss-purgecss',
            {
              content: ['./src/**/*.{js,jsx,ts,tsx}'],
              whitelist: ['html', 'body', 'path'],
              whitelistPatternsChildren: [/grid*/, /gap*/],
              defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
            },
          ],
        ]
      : []),
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
  ],
};
