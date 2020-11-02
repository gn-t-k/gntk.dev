module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "airbnb/hooks",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:prettier/recommended",
        "prettier",
        "prettier/@typescript-eslint",
        "prettier/react",
        "prettier/standard"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2020,
        "project": "./tsconfig.eslint.json",
        "sourceType": "module",
        "tsconfigRootDir": __dirname,
    },
    "plugins": [
        "@typescript-eslint",
        "import",
        "jsx-a11y",
        "prettier",
        "react",
        "react-hooks",
    ],
    "rules": {
        "no-void": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                "vars": "all",
                "args": "after-used",
                "argsIgnorePattern": "_",
                "ignoreRestSiblings": false,
                "varsIgnorePattern": "_",
            },
        ],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never"
            }
        ],
        "react/jsx-filename-extension": [
            "error",
            {
                extensions: [".jsx", "tsx"]
            }
        ],
        "react/jsx-props-no-spreading": [
            "error",
            {
                html: "enforce",
                custom: "enforce",
                explicitSpread: "ignore"
            }
        ],
        "import/no-extraneous-dependencies": [
            "error", {
                devDependencies: ["**/*.stories.tsx"],
                peerDependencies: false
            }
        ],
    },
    overrides: [
        {
            "files": ["*.tsx"],
            "rules": {
                "react/prop-types": "off"
            }
        }
    ],
    settings: {
        "import/resolver": {
            node: {
                paths: ["src"]
            }
        }
    },
    "root": true,
};
