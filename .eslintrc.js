const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  plugins: ["react-hooks", "@typescript-eslint", "prettier"],
  rules: {
    camelcase: WARN,
    "no-nested-ternary": OFF,
    "import/prefer-default-export": OFF,
    "import/extensions": [
      "error",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "no-use-before-define": OFF,
    "react/jsx-props-no-spreading": OFF,
    "react/jsx-filename-extension": OFF,
    "react/prop-types": OFF,
    "react/jsx-fragments": [ERROR, "element"],
    "react-hooks/rules-of-hooks": ERROR,
    "jsx-a11y/anchor-is-valid": OFF,
    "jsx-a11y/label-has-associated-control": OFF,
    "prettier/prettier": ERROR,
    "@typescript-eslint/explicit-module-boundary-types": OFF,
    "@typescript-eslint/explicit-member-accessibility": OFF,
    "@typescript-eslint/explicit-function-return-type": OFF,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".tsx"],
      },
    },
  },
}
