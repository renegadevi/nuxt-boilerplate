// commitlint.config.mjs
export default {
  // Use a sintaxe 'extends' como string, como você fez.
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 100],
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [2, "always"],
    // Adicionando uma regra obrigatória para o teste:
    "type-empty": [2, "never"],
  },
};
