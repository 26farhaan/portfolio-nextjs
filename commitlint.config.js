module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    //   TODO Add Scope Enum Here
    // 'scope-enum': [2, 'always', ['yourscope', 'yourscope']],
    "type-enum": [
      2,
      "always",
      [
        "add",
        "feat",
        "fix",
        "build",
        "revamp",
        "docs",
        "chore",
        "style",
        "refactor",
        "ci",
        "test",
        "perf",
        "revert",
        "vercel",
      ],
    ],
  },
};
