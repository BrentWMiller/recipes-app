module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '~styles': ['./src/styles'],
            '~components': ['./src/components'],
            '~screens': ['./src/screens'],
            '~navigation': ['./src/navigation'],
            '~svgs': ['./assets/svgs'],
            '~helpers': ['./src/helpers'],
            '~store': ['./src/store'],
            '~utils': ['./src/utils'],
          },
        },
      ],
    ],
  };
};