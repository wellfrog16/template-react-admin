const {
    override,
    addTslintLoader,
    disableEsLint,
} = require("customize-cra");

module.exports = override(
    disableEsLint(),
    addTslintLoader(),
);