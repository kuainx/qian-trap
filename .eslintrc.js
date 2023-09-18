module.exports = {
  globals: {
    definePageConfig: "readonly",
    defineAppConfig: "readonly",
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:import/recommended",
    // "taro/vue3",
    // "plugin:vue/vue3-essential",
    // "@vue/standard",
    // "./.eslintrc-auto-import.json",
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "warn",
    // "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "import/newline-after-import": ["error", { count: 1 }],
    // "max-len": "off",
    // "arrow-parens": ["error", "as-needed"],
    "vue/multi-word-component-names": "off",
    semi: ["error", "never"],
  },
};
