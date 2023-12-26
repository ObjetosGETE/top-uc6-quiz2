var estruturageral = {
    mensagemfinal: {
        positiva: [
            "Muito bem! Você arrasou!",
            "Se você quiser, você pode praticar novamente clicando no botão abaixo."
        ],
        negativa: [
            "Foi por pouco!",
            "Talvez seja interessante revisar o conteúdo e tentar de novo.",
            "Para reiniciar, basta clicar no botão abaixo."
        ]
    }
}
var perguntas = [
    {
        titulo: "1. Lentes esféricas centradas",
        pergunta: "Qual é a principal correção visual proporcionada por lentes esféricas centradas?",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Astigmatismo e miopia."
            },
            {
                botao: "b",
                validacao: true,
                texto: "Miopia e hipermetropia."
            },
            {
                botao: "c",
                validacao: false,
                texto: "Hipermetropia e presbiopia."
            },
          
        ],
        feedbacks: {
            
            positivo: "Muito bem! Lentes esféricas são usadas para correção de ametropias esféricas.", 
            negativo: "A resposta não está correta, pois lentes esféricas são usadas apenas para correção de ametropias esféricas."
            
        }
    },
    {
        titulo: "2. Lentes esféricas descentradas",
        pergunta: "O que as lentes esféricas descentradas buscam otimizar?",
        respostas: [
            {
                botao: "a",
                validacao: true,
                texto: "Posicionamento ideal do centro óptico das lentes."
            },
            {
                botao: "b",
                validacao: false,
                texto: "Posicionamento ideal da visão periférica."
            },
            {
                botao: "c",
                validacao: false,
                texto: "Posicionamento ideal na armação de acetato."
            },
         
        ],
        feedbacks: {
            
            positivo: "Isso mesmo! O objetivo é coincidir o centro óptico das lentes com as medidas oculares do usuário.", 
            negativo: "A resposta não está correta. Reveja as opções e tente novamente."
            
        }
    },
    {
        titulo: "3. Lentes cilíndricas centradas e descentradas",
        pergunta: "Para qual condição oftálmica as lentes cilíndricas centradas e descentradas são essenciais?",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Catarata"
            },
            {
                botao: "b",
                validacao: true,
                texto: "Astigmatismo"
            },
            {
                botao: "c",
                validacao: false,
                texto: "Presbiopia"
            },
            
        ],
        feedbacks: {
            
            positivo: "Está correto! Lentes cilíndricas em geral são essenciais na correção do astigmatismo.", 
            negativo: "Esta não é a resposta correta. Lentes cilíndricas não corrigem patologias ou ametropias esféricas."
            
        }
    },
    {
        titulo: "4. Lentes cilíndricas centradas e descentradas",
        pergunta: "Qual particularidade ambas as lentes terão em comum na realização dos processos de montagem?",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "A forma geométrica das lentes."
            },
            {
                botao: "b",
                validacao: true,
                texto: "O posicionamento do eixo do astigmatismo."
            },
            {
                botao: "c",
                validacao: false,
                texto: "A espessura de todas as bordas."
            },
            
        ],
        feedbacks: {
            
            positivo: "Está correto! Independentemente de as lentes cilíndricas serem centradas ou descentradas, o posicionamento do eixo do astigmatismo deve ser preservado.", 
            negativo: "A resposta não está correta. Lentes cilíndricas têm diferença visível de bordas, além de a descentração causar um aumento dessa diferença."
            
        }
    },
    {
        titulo: "5. Lentes prismáticas",
        pergunta: "Qual é a principal característica de uma lente prismática?",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Corrigir o astigmatismo."
            },
            {
                botao: "b",
                validacao: false,
                texto: "Melhorar a visão distorcida."
            },
            {
                botao: "c",
                validacao: true,
                texto: "Ter um excesso de descentração."
            },
        
        ],
        feedbacks: {
            
            positivo: "Correto! As lentes prismáticas são caracterizadas pelo excesso de descentração.", 
            negativo: "A resposta não está correta. As lentes prismáticas não têm como característica principal a correção do astigmatismo e da visão distorcida."
            
        }
    },
    {
        titulo: "6. Lentes bifocais",
        pergunta: "O que caracteriza as lentes bifocais?",
        respostas: [
            {
                botao: "a",
                validacao: false,
                texto: "Transição gradual de poder de correção."
            },
            {
                botao: "b",
                validacao: false,
                texto: "Correção apenas para miopia."
            },
            {
                botao: "c",
                validacao: true,
                texto: "Correção de duas distâncias focais."
            },
          
        ],
        feedbacks: {
            
            positivo: "Muito bem! As lentes bifocais corrigem as distâncias de longe e perto simultaneamente.", 
            negativo: "Esta não é a resposta correta! As lentes bifocais não corrigem apenas uma ametropia e contam com um salto de imagem."
            
        }
    },
    {
        titulo: "7. Lentes multifocais",
        pergunta: "Como as lentes multifocais diferem das bifocais?",
        respostas: [
            {
                botao: "a",
                validacao: true,
                texto: "Proporcionam correção para várias distâncias focais com alternância gradual progressiva."
            },
            {
                botao: "b",
                validacao: false,
                texto: "Oferecem apenas correção para visão de longe e de perto com salto de imagem, dependendo do desenho."
            },
            {
                botao: "c",
                validacao: false,
                texto: "Não contêm transição gradual progressiva e película com grau de perto visível, disponível em vários desenhos."
            },
        ],
        feedbacks: {
            
            positivo: "Correto! Lentes multifocais atendem a várias distâncias focais de forma progressiva.", 
            negativo: "Infelizmente a resposta está incorreta! As lentes multifocais não contêm película visível nem salto de imagem."
            
        }
    }
  
]