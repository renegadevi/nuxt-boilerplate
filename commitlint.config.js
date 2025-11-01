module.exports = {
  // O preset convencional é a base do cz-git
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Se você usa emojis, essa regra é crucial para permitir o formato
    // "✨ feat: mensagem" em vez de apenas "feat: mensagem"
    "header-max-length": [2, "always", 100], // Garante que a linha do cabeçalho tenha no máximo 100 caracteres
    "body-leading-blank": [2, "always"], // Exige uma linha em branco antes do corpo da mensagem
    "footer-leading-blank": [2, "always"], // Exige uma linha em branco antes do rodapé da mensagem

    // Você pode remover o 'type-enum' se o cz-git já for rigoroso o suficiente,
    // mas deixá-lo é uma garantia extra.
  },
};
