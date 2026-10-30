/* =========================================================
   🎀 DESAFIO DO MILHÃO
   QUIZ ESCOLAR - 2º ANO DO ENSINO MÉDIO
   ========================================================= */


/* =========================================================
   ELEMENTOS
   ========================================================= */

   const telaInicial = document.getElementById("tela-inicial");
   const telaQuiz = document.getElementById("tela-quiz");
   const telaFinal = document.getElementById("tela-final");
   const telaRanking = document.getElementById("tela-ranking");
   
   const nomeInput = document.getElementById("nome-jogador");
   
   const perguntaElemento = document.getElementById("pergunta");
   const alternativasElemento = document.getElementById("alternativas");
   
   const numeroPergunta = document.getElementById("numero-pergunta");
   const premioElemento = document.getElementById("premio");
   const materiaElemento = document.getElementById("materia");
   
   const mensagem = document.getElementById("mensagem");
   
   const proxima = document.getElementById("proxima");
   
   const progressBar = document.getElementById("progress-bar");
   
   const premioFinal = document.getElementById("premio-final");
   const resultadoFinal = document.getElementById("resultado-final");
   
   const rankingLista = document.getElementById("ranking-lista");
   
   
   /* =========================================================
      PERGUNTAS
      ========================================================= */
   
   const bancoPerguntas = [
   
       /* ================= MATEMÁTICA ================= */
   
       {
           materia: "📐 Matemática",
           pergunta: "Qual é o resultado de 2² + 3²?",
           alternativas: ["10", "13", "12", "9"],
           correta: 1
       },
   
       {
           materia: "📐 Matemática",
           pergunta: "Qual é a raiz quadrada de 144?",
           alternativas: ["10", "11", "12", "14"],
           correta: 2
       },
   
       {
           materia: "📐 Matemática",
           pergunta: "Qual é o valor de x na equação 2x + 6 = 16?",
           alternativas: ["4", "5", "6", "8"],
           correta: 1
       },
   
       {
           materia: "📐 Matemática",
           pergunta: "Quanto é 20% de 250?",
           alternativas: ["25", "40", "50", "75"],
           correta: 2
       },
   
       {
           materia: "📐 Matemática",
           pergunta: "Qual é a área de um retângulo com 8 cm de comprimento e 5 cm de largura?",
           alternativas: ["13 cm²", "26 cm²", "40 cm²", "80 cm²"],
           correta: 2
       },
   
       {
           materia: "📐 Matemática",
           pergunta: "Em uma PA, com primeiro termo 3 e razão 4, qual é o quinto termo?",
           alternativas: ["15", "17", "19", "21"],
           correta: 2
       },
   
       /* ================= PORTUGUÊS ================= */
   
       {
           materia: "📚 Português",
           pergunta: "Qual figura de linguagem consiste em comparar duas coisas usando 'como'?",
           alternativas: [
               "Metáfora",
               "Comparação",
               "Ironia",
               "Hipérbole"
           ],
           correta: 1
       },
   
       {
           materia: "📚 Português",
           pergunta: "Qual é a classe gramatical da palavra 'rapidamente'?",
           alternativas: [
               "Substantivo",
               "Adjetivo",
               "Advérbio",
               "Verbo"
           ],
           correta: 2
       },
   
       {
           materia: "📚 Português",
           pergunta: "O que caracteriza principalmente o texto dissertativo-argumentativo?",
           alternativas: [
               "Apresentação de argumentos sobre uma ideia",
               "Uso exclusivo de diálogos",
               "Narrativa de acontecimentos fictícios",
               "Descrição de personagens"
           ],
           correta: 0
       },
   
       {
           materia: "📚 Português",
           pergunta: "Qual alternativa apresenta uma palavra com sentido contrário a 'efêmero'?",
           alternativas: [
               "Passageiro",
               "Temporário",
               "Duradouro",
               "Breve"
           ],
           correta: 2
       },
   
       /* ================= HISTÓRIA ================= */
   
       {
           materia: "🏛️ História",
           pergunta: "Qual acontecimento marcou o início da Revolução Francesa?",
           alternativas: [
               "Queda da Bastilha",
               "Independência dos EUA",
               "Revolução Russa",
               "Congresso de Viena"
           ],
           correta: 0
       },
   
       {
           materia: "🏛️ História",
           pergunta: "A Revolução Industrial começou inicialmente em qual país?",
           alternativas: [
               "França",
               "Alemanha",
               "Inglaterra",
               "Itália"
           ],
           correta: 2
       },
   
       {
           materia: "🏛️ História",
           pergunta: "Qual ideologia defendia a organização da sociedade sem classes sociais?",
           alternativas: [
               "Socialismo",
               "Mercantilismo",
               "Absolutismo",
               "Liberalismo"
           ],
           correta: 0
       },
   
       {
           materia: "🏛️ História",
           pergunta: "A Primeira Guerra Mundial ocorreu principalmente entre quais anos?",
           alternativas: [
               "1900–1904",
               "1914–1918",
               "1920–1925",
               "1939–1945"
           ],
           correta: 1
       },
   
       /* ================= GEOGRAFIA ================= */
   
       {
           materia: "🌎 Geografia",
           pergunta: "Qual é o maior país da América do Sul em extensão territorial?",
           alternativas: [
               "Argentina",
               "Brasil",
               "Peru",
               "Colômbia"
           ],
           correta: 1
       },
   
       {
           materia: "🌎 Geografia",
           pergunta: "O que é urbanização?",
           alternativas: [
               "Redução das áreas rurais",
               "Crescimento da população urbana",
               "Aumento das florestas",
               "Diminuição das cidades"
           ],
           correta: 1
       },
   
       {
           materia: "🌎 Geografia",
           pergunta: "Qual linha imaginária divide a Terra em hemisférios Norte e Sul?",
           alternativas: [
               "Meridiano de Greenwich",
               "Trópico de Câncer",
               "Linha do Equador",
               "Trópico de Capricórnio"
           ],
           correta: 2
       },
   
       {
           materia: "🌎 Geografia",
           pergunta: "Qual bioma brasileiro possui grande biodiversidade e clima predominantemente quente e úmido?",
           alternativas: [
               "Caatinga",
               "Pampa",
               "Amazônia",
               "Pantanal"
           ],
           correta: 2
       },
   
       /* ================= FÍSICA ================= */
   
       {
           materia: "⚡ Física",
           pergunta: "Qual é a unidade de medida da força no Sistema Internacional?",
           alternativas: [
               "Joule",
               "Watt",
               "Newton",
               "Pascal"
           ],
           correta: 2
       },
   
       {
           materia: "⚡ Física",
           pergunta: "Qual é a velocidade média de um carro que percorre 100 km em 2 horas?",
           alternativas: [
               "25 km/h",
               "50 km/h",
               "75 km/h",
               "100 km/h"
           ],
           correta: 1
       },
   
       {
           materia: "⚡ Física",
           pergunta: "Qual princípio afirma que toda ação possui uma reação de mesma intensidade e sentido oposto?",
           alternativas: [
               "Primeira Lei de Newton",
               "Segunda Lei de Newton",
               "Terceira Lei de Newton",
               "Lei de Coulomb"
           ],
           correta: 2
       },
   
       {
           materia: "⚡ Física",
           pergunta: "Qual é a unidade de potência no Sistema Internacional?",
           alternativas: [
               "Watt",
               "Newton",
               "Volt",
               "Ohm"
           ],
           correta: 0
       },
   
       /* ================= QUÍMICA ================= */
   
       {
           materia: "🧪 Química",
           pergunta: "Qual é o símbolo químico do oxigênio?",
           alternativas: [
               "Ox",
               "O",
               "Og",
               "C"
           ],
           correta: 1
       },
   
       {
           materia: "🧪 Química",
           pergunta: "Qual é o pH aproximado de uma solução neutra a 25 °C?",
           alternativas: [
               "0",
               "5",
               "7",
               "14"
           ],
           correta: 2
       },
   
       {
           materia: "🧪 Química",
           pergunta: "Qual partícula possui carga elétrica negativa?",
           alternativas: [
               "Próton",
               "Nêutron",
               "Elétron",
               "Núcleo"
           ],
           correta: 2
       },
   
       {
           materia: "🧪 Química",
           pergunta: "A água é formada por quais elementos?",
           alternativas: [
               "Carbono e oxigênio",
               "Hidrogênio e oxigênio",
               "Nitrogênio e hidrogênio",
               "Sódio e cloro"
           ],
           correta: 1
       },
   
       /* ================= BIOLOGIA ================= */
   
       {
           materia: "🧬 Biologia",
           pergunta: "Qual organela é conhecida como responsável pela produção de energia da célula?",
           alternativas: [
               "Ribossomo",
               "Núcleo",
               "Mitocôndria",
               "Lisossomo"
           ],
           correta: 2
       },
   
       {
           materia: "🧬 Biologia",
           pergunta: "Qual molécula contém a maior parte das informações genéticas dos seres vivos?",
           alternativas: [
               "ATP",
               "DNA",
               "Glicose",
               "Água"
           ],
           correta: 1
       },
   
       {
           materia: "🧬 Biologia",
           pergunta: "Qual processo as plantas utilizam para produzir glicose usando luz?",
           alternativas: [
               "Respiração",
               "Digestão",
               "Fotossíntese",
               "Fermentação"
           ],
           correta: 2
       },
   
       {
           materia: "🧬 Biologia",
           pergunta: "Qual sistema é responsável pela circulação do sangue pelo corpo?",
           alternativas: [
               "Sistema digestório",
               "Sistema circulatório",
               "Sistema respiratório",
               "Sistema nervoso"
           ],
           correta: 1
       },
   
       /* ================= INGLÊS ================= */
   
       {
           materia: "🇺🇸 Inglês",
           pergunta: "Qual é o passado do verbo 'go'?",
           alternativas: [
               "Goed",
               "Gone",
               "Went",
               "Going"
           ],
           correta: 2
       },
   
       {
           materia: "🇺🇸 Inglês",
           pergunta: "Qual palavra significa 'desenvolvimento' em inglês?",
           alternativas: [
               "Development",
               "Environment",
               "Achievement",
               "Knowledge"
           ],
           correta: 0
       },
   
       {
           materia: "🇺🇸 Inglês",
           pergunta: "Qual é o significado de 'although'?",
           alternativas: [
               "Porque",
               "Embora",
               "Portanto",
               "Enquanto"
           ],
           correta: 1
       },
   
       /* ================= DESENVOLVIMENTO DE SISTEMAS ================= */
   
       {
           materia: "💻 Desenvolvimento de Sistemas",
           pergunta: "Qual linguagem é utilizada para estruturar o conteúdo de páginas web?",
           alternativas: [
               "HTML",
               "CSS",
               "SQL",
               "Python"
           ],
           correta: 0
       },
   
       {
           materia: "💻 Desenvolvimento de Sistemas",
           pergunta: "Qual tecnologia é utilizada principalmente para estilizar páginas HTML?",
           alternativas: [
               "JavaScript",
               "CSS",
               "SQL",
               "PHP"
           ],
           correta: 1
       },
   
       {
           materia: "💻 Desenvolvimento de Sistemas",
           pergunta: "Qual linguagem permite adicionar interatividade às páginas web?",
           alternativas: [
               "HTML",
               "CSS",
               "JavaScript",
               "XML"
           ],
           correta: 2
       },
   
       {
           materia: "💻 Desenvolvimento de Sistemas",
           pergunta: "O que é uma variável em programação?",
           alternativas: [
               "Um tipo de computador",
               "Um espaço que armazena um valor",
               "Um navegador",
               "Uma linguagem"
           ],
           correta: 1
       },
   
       {
           materia: "💻 Desenvolvimento de Sistemas",
           pergunta: "Qual estrutura é utilizada para executar um código dependendo de uma condição?",
           alternativas: [
               "if",
               "print",
               "array",
               "import"
           ],
           correta: 0
       },
   
       {
           materia: "💻 Desenvolvimento de Sistemas",
           pergunta: "O que significa a sigla SQL?",
           alternativas: [
               "Simple Question Language",
               "Structured Query Language",
               "System Quality Logic",
               "Server Query List"
           ],
           correta: 1
       },
   
       {
           materia: "💻 Desenvolvimento de Sistemas",
           pergunta: "Qual comando JavaScript pode mostrar uma mensagem no console?",
           alternativas: [
               "console.log()",
               "print.console()",
               "message()",
               "show.log()"
           ],
           correta: 0
       },
   
       {
           materia: "💻 Desenvolvimento de Sistemas",
           pergunta: "O que é um algoritmo?",
           alternativas: [
               "Um conjunto de passos para resolver um problema",
               "Um tipo de computador",
               "Uma rede social",
               "Um banco de dados"
           ],
           correta: 0
       },
   
       {
           materia: "💻 Desenvolvimento de Sistemas",
           pergunta: "Qual destes é um sistema de gerenciamento de banco de dados?",
           alternativas: [
               "MySQL",
               "HTML",
               "CSS",
               "Photoshop"
           ],
           correta: 0
       },
   
       {
           materia: "💻 Desenvolvimento de Sistemas",
           pergunta: "Em programação, o que representa normalmente o operador === em JavaScript?",
           alternativas: [
               "Atribuição",
               "Comparação estrita",
               "Soma",
               "Divisão"
           ],
           correta: 1
       },
   
       {
           materia: "💻 Desenvolvimento de Sistemas",
           pergunta: "Qual destes é um tipo de dado comum em JavaScript?",
           alternativas: [
               "String",
               "Página",
               "Servidor",
               "Pixel"
           ],
           correta: 0
       }
   
   ];
   
   
   /* =========================================================
      CONFIGURAÇÕES
      ========================================================= */
   
   const premios = [
       0,
       100,
       200,
       500,
       1000,
       2000,
       5000,
       10000,
       20000,
       30000,
       50000,
       75000,
       100000,
       150000,
       200000,
       300000,
       500000,
       750000,
       1000000
   ];
   
   let perguntas = [];
   let perguntaAtual = 0;
   let dinheiro = 0;
   let nomeJogador = "";
   
   let respostaSelecionada = false;
   
   let poderPularUsado = false;
   let poderDobrarUsado = false;
   let poderEliminarUsado = false;
   
   
   /* =========================================================
      EMBARALHAR
      ========================================================= */
   
   function embaralhar(array) {
   
       const copia = [...array];
   
       for (let i = copia.length - 1; i > 0; i--) {
   
           const j = Math.floor(Math.random() * (i + 1));
   
           [copia[i], copia[j]] = [copia[j], copia[i]];
       }
   
       return copia;
   }
   
   
   /* =========================================================
      INICIAR JOGO
      ========================================================= */
   
   document.getElementById("começar").addEventListener("click", iniciarJogo);
   
   nomeInput.addEventListener("keydown", function(event) {
   
       if (event.key === "Enter") {
           iniciarJogo();
       }
   
   });
   
   
   function iniciarJogo() {
   
       nomeJogador =
           nomeInput.value.trim() || "Jogador(a)";
   
       perguntas = embaralhar(bancoPerguntas);
   
       perguntaAtual = 0;
   
       dinheiro = 0;
   
       respostaSelecionada = false;
   
       poderPularUsado = false;
       poderDobrarUsado = false;
       poderEliminarUsado = false;
   
       document.getElementById("pular").disabled = false;
       document.getElementById("dobrar").disabled = false;
       document.getElementById("eliminar").disabled = false;
   
       telaInicial.classList.add("hidden");
       telaFinal.classList.add("hidden");
       telaRanking.classList.add("hidden");
   
       telaQuiz.classList.remove("hidden");
   
       carregarPergunta();
   }
   
   
   /* =========================================================
      CARREGAR PERGUNTA
      ========================================================= */
   
   function carregarPergunta() {
   
       if (perguntaAtual >= perguntas.length) {
   
           finalizarJogo();
   
           return;
       }
   
       const atual = perguntas[perguntaAtual];
   
       respostaSelecionada = false;
   
       proxima.disabled = true;
   
       mensagem.textContent = "";
   
       materiaElemento.textContent = atual.materia;
   
       perguntaElemento.textContent = atual.pergunta;
   
       numeroPergunta.textContent =
           `💗 Pergunta: ${perguntaAtual + 1}/${perguntas.length}`;
   
       premioElemento.textContent =
           `💰 Prêmio: ${formatarDinheiro(dinheiro)}`;
   
       const progresso =
           ((perguntaAtual) / perguntas.length) * 100;
   
       progressBar.style.width = `${progresso}%`;
   
       alternativasElemento.innerHTML = "";
   
       const alternativasEmbaralhadas =
           atual.alternativas.map((texto, indice) => ({
               texto,
               indice
           }));
   
       const alternativasMisturadas =
           embaralhar(alternativasEmbaralhadas);
   
       alternativasMisturadas.forEach(item => {
   
           const botao = document.createElement("button");
   
           botao.classList.add("alternativas");
   
           botao.textContent =
               `${String.fromCharCode(65 + item.indice)}) ${item.texto}`;
   
           botao.dataset.indice = item.indice;
   
           botao.addEventListener(
               "click",
               () => responder(botao, item.indice)
           );
   
           alternativasElemento.appendChild(botao);
   
       });
   
   }
   
   
   /* =========================================================
      RESPONDER
      ========================================================= */
   
   function responder(botao, indice) {
   
       if (respostaSelecionada) {
           return;
       }
   
       respostaSelecionada = true;
   
       const atual = perguntas[perguntaAtual];
   
       const botoes =
           document.querySelectorAll(".alternativas");
   
       botoes.forEach(b => {
           b.disabled = true;
       });
   
       if (indice === atual.correta) {
   
           botao.classList.add("correta");
   
           const premioAtual =
               premios[Math.min(
                   perguntaAtual + 1,
                   premios.length - 1
               )];
   
           dinheiro = premioAtual;
   
           premioElemento.textContent =
               `💰 Prêmio: ${formatarDinheiro(dinheiro)}`;
   
           mensagem.textContent =
               "🎀 CORRETO! Você arrasou! ✨";
   
           mensagem.style.color = "#46a878";
   
           criarConfetes();
   
       } else {
   
           botao.classList.add("errada");
   
           botoes.forEach(b => {
   
               if (
                   Number(b.dataset.indice) ===
                   atual.correta
               ) {
                   b.classList.add("correta");
               }
   
           });
   
           mensagem.textContent =
               `💔 Ops! A resposta correta era "${atual.alternativas[atual.correta]}".`;
   
           mensagem.style.color = "#c34570";
   
       }
   
       proxima.disabled = false;
   }
   
   
   /* =========================================================
      PRÓXIMA PERGUNTA
      ========================================================= */
   
   proxima.addEventListener("click", function() {
   
       perguntaAtual++;
   
       carregarPergunta();
   
   });
   
   
   /* =========================================================
      PULAR
      ========================================================= */
   
   document.getElementById("pular")
       .addEventListener("click", function() {
   
           if (poderPularUsado || respostaSelecionada) {
               return;
           }
   
           poderPularUsado = true;
   
           this.disabled = true;
   
           mensagem.textContent =
               "⏭️ Pergunta pulada!";
   
           perguntaAtual++;
   
           setTimeout(() => {
   
               carregarPergunta();
   
           }, 500);
   
       });
   
   
   /* =========================================================
      DOBRAR
      ========================================================= */
   
   document.getElementById("dobrar")
       .addEventListener("click", function() {
   
           if (poderDobrarUsado) {
               return;
           }
   
           poderDobrarUsado = true;
   
           this.disabled = true;
   
           mensagem.textContent =
               "💰 Poder ativado! Se acertar, o prêmio desta pergunta será dobrado!";
   
           const premioAtual =
               premios[Math.min(
                   perguntaAtual + 1,
                   premios.length - 1
               )];
   
           if (!respostaSelecionada) {
   
               const observer =
                   new MutationObserver(() => {
   
                       if (dinheiro >= premioAtual * 2) {
   
                           observer.disconnect();
   
                       }
   
                   });
   
           }
   
           /* Marca para o sistema */
           window.dobrarProxima = true;
   
       });
   
   
   /* =========================================================
      ELIMINAR DUAS
      ========================================================= */
   
   document.getElementById("eliminar")
       .addEventListener("click", function() {
   
           if (
               poderEliminarUsado ||
               respostaSelecionada
           ) {
               return;
           }
   
           poderEliminarUsado = true;
   
           this.disabled = true;
   
           const atual = perguntas[perguntaAtual];
   
           const botoes =
               [...document.querySelectorAll(".alternativas")];
   
           const erradas =
               botoes.filter(botao =>
                   Number(botao.dataset.indice) !==
                   atual.correta
               );
   
           const duas =
               embaralhar(erradas).slice(0, 2);
   
           duas.forEach(botao => {
   
               botao.disabled = true;
   
               botao.classList.add("eliminada");
   
               botao.textContent =
                   "❌ Alternativa eliminada";
   
           });
   
           mensagem.textContent =
               "✨ Duas alternativas erradas foram eliminadas!";
   
       });
   
   
   /* =========================================================
      CORREÇÃO DO DOBRO
      ========================================================= */
   
   const responderOriginal = responder;
   
   function responderComDobro(botao, indice) {
   
       if (respostaSelecionada) {
           return;
       }
   
       const premioAntes =
           dinheiro;
   
       responderOriginal(botao, indice);
   
       if (
           window.dobrarProxima &&
           respostaSelecionada &&
           botao.classList.contains("correta")
       ) {
   
           dinheiro =
               Math.min(
                   dinheiro * 2,
                   1000000
               );
   
           premioElemento.textContent =
               `💰 Prêmio: ${formatarDinheiro(dinheiro)}`;
   
           mensagem.textContent =
               "💖 ACERTOU! O prêmio foi DOBRADO! 💖";
   
           window.dobrarProxima = false;
       }
   
   }
   
   
   /* =========================================================
      SUBSTITUIR EVENTOS DAS ALTERNATIVAS
      ========================================================= */
   
   function recarregarComEventos() {
   
       const atual = perguntas[perguntaAtual];
   
       const botoes =
           document.querySelectorAll(".alternativas");
   
       botoes.forEach(botao => {
   
           const clone = botao.cloneNode(true);
   
           botao.replaceWith(clone);
   
           clone.addEventListener(
               "click",
               () =>
                   responderComDobro(
                       clone,
                       Number(clone.dataset.indice)
                   )
           );
   
       });
   
   }
   
   
   /* =========================================================
      SOBRESCREVER CARREGAMENTO
      ========================================================= */
   
   const carregarPerguntaOriginal =
       carregarPergunta;
   
   carregarPergunta = function() {
   
       carregarPerguntaOriginal();
   
       recarregarComEventos();
   
   };
   
   
   /* =========================================================
      FORMATAÇÃO DE DINHEIRO
      ========================================================= */
   
   function formatarDinheiro(valor) {
   
       return valor.toLocaleString(
           "pt-BR",
           {
               style: "currency",
               currency: "BRL",
               maximumFractionDigits: 0
           }
       );
   
   }
   
   
   /* =========================================================
      FINALIZAR
      ========================================================= */
   
   function finalizarJogo() {
   
       telaQuiz.classList.add("hidden");
   
       telaFinal.classList.remove("hidden");
   
       premioFinal.textContent =
           formatarDinheiro(dinheiro);
   
       resultadoFinal.textContent =
           `Parabéns, ${nomeJogador}! Você terminou o desafio com ${formatarDinheiro(dinheiro)}! 🎀`;
   
       salvarRanking();
   
       criarConfetes();
   
       setTimeout(criarConfetes, 800);
       setTimeout(criarConfetes, 1600);
   }
   
   
   /* =========================================================
      RANKING
      ========================================================= */
   
   function obterRanking() {
   
       try {
   
           return JSON.parse(
               localStorage.getItem("rankingMilhao")
           ) || [];
   
       } catch {
   
           return [];
   
       }
   
   }
   
   
   function salvarRanking() {
   
       const ranking =
           obterRanking();
   
       ranking.push({
           nome: nomeJogador,
           premio: dinheiro
       });
   
       ranking.sort(
           (a, b) =>
               b.premio - a.premio
       );
   
       const rankingLimitado =
           ranking.slice(0, 10);
   
       localStorage.setItem(
           "rankingMilhao",
           JSON.stringify(rankingLimitado)
       );
   
   }
   
   
   function mostrarRanking() {
   
       telaInicial.classList.add("hidden");
       telaQuiz.classList.add("hidden");
       telaFinal.classList.add("hidden");
   
       telaRanking.classList.remove("hidden");
   
       rankingLista.innerHTML = "";
   
       const ranking =
           obterRanking();
   
       if (ranking.length === 0) {
   
           rankingLista.innerHTML = `
               <div class="ranking-item">
                   <span class="ranking-nome">
                       🎀 Ainda não há jogadores no ranking!
                   </span>
               </div>
           `;
   
           return;
       }
   
       ranking.forEach((jogador, indice) => {
   
           const item =
               document.createElement("div");
   
           item.classList.add("ranking-item");
   
           let medalha;
   
           if (indice === 0) {
               medalha = "🥇";
           } else if (indice === 1) {
               medalha = "🥈";
           } else if (indice === 2) {
               medalha = "🥉";
           } else {
               medalha = `${indice + 1}º`;
           }
   
           item.innerHTML = `
               <span class="ranking-posicao">
                   ${medalha}
               </span>
   
               <span class="ranking-nome">
                   ${escaparHTML(jogador.nome)}
               </span>
   
               <span class="ranking-premio">
                   ${formatarDinheiro(jogador.premio)}
               </span>
           `;
   
           rankingLista.appendChild(item);
   
       });
   
   }
   
   
   /* =========================================================
      BOTÕES DO RANKING
      ========================================================= */
   
   document.getElementById("ver-ranking")
       .addEventListener(
           "click",
           mostrarRanking
       );
   
   
   document.getElementById("mostrar-ranking-final")
       .addEventListener(
           "click",
           mostrarRanking
       );
   
   
   document.getElementById("voltar-ranking")
       .addEventListener(
           "click",
           function() {
   
               telaRanking.classList.add("hidden");
   
               telaInicial.classList.remove("hidden");
   
           }
       );
   
   
   /* =========================================================
      JOGAR NOVAMENTE
      ========================================================= */
   
   document.getElementById("jogar-novamente")
       .addEventListener(
           "click",
           function() {
   
               telaFinal.classList.add("hidden");
   
               telaInicial.classList.remove("hidden");
   
               nomeInput.value =
                   nomeJogador;
   
           }
       );
   
   
   /* =========================================================
      LIMPAR RANKING
      ========================================================= */
   
   document.getElementById("limpar-ranking")
       .addEventListener(
           "click",
           function() {
   
               const confirmar =
                   confirm(
                       "Tem certeza que deseja apagar todo o ranking? 💔"
                   );
   
               if (!confirmar) {
                   return;
               }
   
               localStorage.removeItem(
                   "rankingMilhao"
               );
   
               mostrarRanking();
   
           }
       );
   
   
   /* =========================================================
      CONFETES
      ========================================================= */
   
   function criarConfetes() {
   
       const container =
           document.getElementById("confetes");
   
       const simbolos = [
           "💗",
           "🎀",
           "✨",
           "♡",
           "⭐",
           "🌸"
       ];
   
       for (let i = 0; i < 30; i++) {
   
           const confete =
               document.createElement("span");
   
           confete.classList.add("confete");
   
           confete.textContent =
               simbolos[
                   Math.floor(
                       Math.random() *
                       simbolos.length
                   )
               ];
   
           confete.style.left =
               `${Math.random() * 100}vw`;
   
           confete.style.fontSize =
               `${14 + Math.random() * 18}px`;
   
           confete.style.animationDuration =
               `${2 + Math.random() * 2}s`;
   
           confete.style.animationDelay =
               `${Math.random() * .5}s`;
   
           container.appendChild(confete);
   
           setTimeout(() => {
   
               confete.remove();
   
           }, 4500);
   
       }
   
   }
   
   
   /* =========================================================
      SEGURANÇA DO RANKING
      ========================================================= */
   
   function escaparHTML(texto) {
   
       return String(texto)
           .replace(/&/g, "&amp;")
           .replace(/</g, "&lt;")
           .replace(/>/g, "&gt;")
           .replace(/"/g, "&quot;")
           .replace(/'/g, "&#039;");
   
   }
   