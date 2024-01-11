import defineConfig from 'stylelint-define-config';

export default defineConfig({
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recess-order',
        'stylelint-config-html',
    ],
    plugins: ['stylelint-declaration-block-no-ignored-properties'],
    rules: {
        'plugin/declaration-block-no-ignored-properties': true,
    },
    ignoreFiles: ['**/node_modules/**/*', '**/*.d.ts'],
});
