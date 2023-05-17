module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ],
    plugins: [
        [
            'module-resolver',
            {
                alias: {
                    '@myapp-application': './src/application',
                    '@myapp-domain': './src/domain',
                    '@myapp-infrastructure': './src/infrastructure'
                }
            }
        ]
    ],
    ignore: ['**/*.space.ts']
};