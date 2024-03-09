module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:import/recommended", "plugin:prettier/recommended", "prettier"],
  overrides: [],
  root: true,
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["import", "prettier"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js"],
        moduleDirectory: ["node_modules", "./"],
      },
    },
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    quotes: ["error", "double"],
    // Import rules
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
      },
    ],
    semi: ["error", "always"],
    "no-case-declarations": ["off"],
    "import/no-unresolved": [2, { commonjs: true, amd: true }],
    "import/namespace": 2,
    "import/default": 2,
    "import/export": 2,
  },
};
