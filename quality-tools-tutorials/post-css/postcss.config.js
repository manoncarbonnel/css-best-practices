module.exports = (ctx) => ({
    parser: 'postcss-syntax', // switches syntax automatically by file extensions.
    // parser: 'postcss-scss', // allows you to work with SCSS.
    // parser: 'postcss-less', // allows you to work with Less.
    plugins: [
        require('autoprefixer'),
        require('postcss-sorting')({
            'order': [
                'custom-properties',
                'dollar-variables',
                'declarations',
                'at-rules',
                'rules'
            ],
            'properties-order': 'alphabetical',
            'unspecified-properties-position': 'bottom',
        }),
        require('stylelint')({
            "extends": [
                "stylelint-config-standard",
                "stylelint-config-sass-guidelines"
            ],
            "plugins": [
                "stylelint-order",
                "stylelint-scss"
            ],
            "rules": {
                "max-nesting-depth": 2,
                "order/order": [
                    "custom-properties",
                    "declarations"
                ],
                "order/properties-order": [
                    "width",
                    "height"
                ],
                "selector-max-id": 2
            }
        })
    ]
})
