module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-class-properties',
    [
      'module-resolver',
      {
        alias: {
          '@/app': './src/app',
          '@/controllers': './src/controllers',
          '@/helpers': './src/helpers',
          '@/infra': './src/infra',
          '@/interfaces': './src/interfaces',
          '@/main': './src/main',
          '@/presentation': './src/presentation',
          '@/routes': './src/routes',
          '@/utils': './src/utils',
          '@/test': './test',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts'],
}
