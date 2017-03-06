

module.exports = {
    "module": {
        "rules": [
            {
                "test": /\.pug$/,
                "loader": "apply-loader!pug-loader?self"
            }
        ]
    }
};
