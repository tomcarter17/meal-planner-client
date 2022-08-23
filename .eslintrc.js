module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  env: {
    browser: true,
    es6: "es2021",
    node: true,
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
  plugins: [
    "import",
    "jsx-a11y",
    "prettier",
    "security",
    "solid",
    "unicorn",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/typescript",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:security/recommended",
    "plugin:solid/typescript",
    "plugin:unicorn/recommended",
  ],
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "@typescript-eslint/consistent-type-imports": "error",
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
        },
        groups: [["builtin", "external"], "internal"],
        "newlines-between": "always",
      },
    ],
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
        ignore: ["vite-env.d.ts"],
      },
    ],
    "unicorn/prevent-abbreviations": "off",
  },
};
