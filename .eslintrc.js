module.exports = {
  extends: ["blitz"],
  rules: {
    "no-unused-vars": "warn",
    "no-empty": "off",
    "no-console": "warn",
    "no-warning-comments": ["warn", { terms: ["fixme", "xxx", "todo"], location: "anywhere" }],
  },
}
