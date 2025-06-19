// Aguarda carregamento completo do DOM antes de executar o script
// Isso garante que todos os elementos existam no momento da seleção.
document.addEventListener("DOMContentLoaded", () => {
   // Seleciona o formulário de contato pelo ID
  const form = document.getElementById("formContato");
    // Verifica se o formulário existe na página
  if (form) {
    // Adiciona listener para o evento de submit do formulário
    form.addEventListener("submit", (e) => {
      e.preventDefault(); //Previne o envio padrão para permitir validação personalizada

      // Coleta os valores dos campos e remove espaços em branco nas extremidades
      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();
      const msgErro = document.getElementById("msgErro"); // Elemento para exibir mensagens de feedback

      // Validação básica: todos os campos devem estar preenchidos
      if (!nome || !email || !mensagem) {
        msgErro.textContent = "Por favor, preencha todos os campos."; // Mensagem de erro
        return;
      }

      // Validação simples de formato de e-mail (verifica presença de '@')
      if (!email.includes("@")) {
        msgErro.textContent = "E-mail inválido.";
        return;
      }

      // Se passou nas validações, exibe mensagem de sucesso
      msgErro.textContent = "Mensagem enviada com sucesso!";
      msgErro.className = "sucesso"; // Aplica estilo de sucesso definido no CSS
        form.reset(); // Limpa os campos do formulário

        // Limpa a mensagem de feedback após 5 segundos
        setTimeout(() => {
          msgErro.textContent = "";
          msgErro.className = ""; // Remove classe de sucesso
      }, 5000);
    });
  }
});

// Mensagens de validação customizada usando eventos nativos de formulário

// Campo 'nome': mostra mensagem personalizada se inválido
const nome = document.getElementById("nome");
nome.addEventListener("invalid", () => {
  nome.setCustomValidity("Por favor, insira seu nome.");
});
nome.addEventListener("input", () => {
  nome.setCustomValidity("");  // Reseta mensagem ao digitar
});

// Campo 'email': mostra mensagem personalizada se inválido
const email = document.getElementById("email");
email.addEventListener("invalid", () => {
  email.setCustomValidity("Por favor, insira um e-mail válido.");
});
email.addEventListener("input", () => {
  email.setCustomValidity("");
});

// Campo 'mensagem': mostra mensagem personalizada se inválido
const mensagem = document.getElementById("mensagem");
mensagem.addEventListener("invalid", () => {
  mensagem.setCustomValidity("Por favor, escreva sua mensagem.");
});
mensagem.addEventListener("input", () => {
  mensagem.setCustomValidity("");
});

