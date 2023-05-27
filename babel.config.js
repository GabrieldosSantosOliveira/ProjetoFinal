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
    [
      'module-resolver',
      {
        alias: {
          '@/controllers': './src/controllers',
          '@/helpers': './src/helpers',
          '@/infra': './src/infra',
          '@/interface': './src/interface',
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
