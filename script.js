const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "As plataformas educacionais são ambientes virtuais que oferecem recursos e ferramentas para facilitar o processo de ensino e aprendizagem. Você prefere?",
        alternativas: [ 
            {
                texto: "Plataformas educacionais",
                afirmação:"Afirmaçao da alternativa 1"
            },
            {
                texto: "Livros didáticos",
              afirmação: "Afirmaçao da alternativa 2"
            }
        ]
    },
    {
        enunciado: "A educação à distância é uma modalidade de ensino em que a transmissão de conhecimento ocorre de forma remota. Você prefere?",
        alternativas: [
            {
                texto: "Aulas presenciais",
                afirmação:"afirmacao da alternativa 1"
            },
            {
                texto: "Aulas remótas",
              afirmação:"afirmaçao da alternativa 2"
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";  

function mostraPergunta() {
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        
        function respostaSelecionada(opcaoSelecionada){
            const afirmacoes = opcaoSelecionada.afirmacao;
            historiaFinal += afirmacoes + " ";
            atual++
            mostraPergunta();
        }
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta()
