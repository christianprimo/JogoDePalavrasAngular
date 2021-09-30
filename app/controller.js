angular.module("myApp")
    .controller("indexController", function ($scope, $rootScope) {
        $rootScope.dicas = ["Grão usado para fazer picopa", "Instrumento usado para gravar imagens",
            "É utilizado para decoração, sendo utulizado para armazenar flores",
            "Serve de entrada ou saída de um recinto",
            "Objeto que serve para proteger a cabeça de impactos externos",
            "Establecimento comercial onde se vende alimentos e produtos variados",
            "Veículo motorizado que se locomove sobre quatro rodas",
            "Veículo motorizado que se locomove sobre duas rodas", "Mobília utilizada para durmir",
            "Almofada que fica na cama utilizada para descansar a cabeça",
            "Também conhecido como o melhor amigo do homem",
            "Utensílio contendo tinta em que se pode escrever ou desenhar",
            "Conjunto de garfo, faca e colher", "Peça de tecido para proteger ou adornar janelas",
            "Aparelho que marca o tempo e indica as horas",
            "Ferramenta para fazer furos em material como concreto, madeira e metal",
            "Dispositivo elétrico que transforma energia elétrica em energia luminosa",
            "Objeto que bloqueia ou impede o acesso a uma determinada área ou coisa",
            "Primeira capital do Brasil", "Planeta que é famoso por possuir três anéis em sua volta",
            "Terceira estação do ano",
            "Primeiro personagem criado por Walt Disney", "Continente em que a Índia está localizada",
            "Pessoa que descobriu a América",
            "Nome do país onde a Mona Lisa é exibida", "Transdutor que converte o som em sinais elétricos",
            "Fécula comestível extraída da mandioca em que se preparam pratos doces ou salgados",
            "Substâncias com agentes patogênos que estimulam o sistema imune a produzir anticorpos",
            "Aparelho elétrico composto de um recipiente com uma hélice de pás cortantes no fundo para trirurar alimentos",
            "Jogo de celular em que você deve fugir de um guarda por trilhos de uma estação de trem",
            "Jogo mobile em que você deve atirar pássaros de um estiligue para eliminar os porcos",
            "Animal terrestre mais veloz do mundo",
            "Processo em que uma larva se transforma em um indivíduo adulto", "Complete o ditado: Cavalo dado...",
            "Usado para higiêne bucal",
            "Pequena e fina haste com um orifício por onde passa linha usada para coser, bordar ou tecer",
            "O menor país do mundo", "País com a maior população do mundo",
            "País em que Santa Catarina faz fronteira",
            "Programa de comédia sobre um garoto órfão e sempre faminto que passa a maior parte do tempo num barril no pátio principal",
            "Filme de animação em que um pai superprotetor que embarca em uma aventura para resgatá seu filho quando ele é levado",
            "Série de animação de gira em torno de um um gato azul de 12 anos de idade acompanhado por seu irmão, um peixinho dourado com pernas",
            "Série de animação em que dois meio-irmãos realizam atividades extravagentes durante suas férias de verão enquanto seu ornitorrinco de estimação luta contra um cientista malvado",
            "Lugar mais frio do mundo", "Continente com o maior número de países",
            "Especialidade médica que se dedica ao estudo e tratamento das doenças que ocorrem na orelha, no nariz e na garganta",
            "Lagarto com habilidade de mudar de cor",
            "Compilação que contém as palavras de uma língua, apresentando seu significado, utilização, etimologia, sinônimos, antônimos ou com a tradução para outra língua",
            "É um órgão musculoso que apresenta como função principal garantir que o sangue seja enviado para todas as partes do corpo",
            "Maior orgão do corpo humano", "Grupo de animais pré-históricos já exstintos"
        ];

        $rootScope.dados = ["Milho", "Camera", "Vaso", "Porta", "Capacete", "Mercado", "Carro", "Moto", "Cama",
            "Travesseiro", "Cachorro", "Caneta", "Talher", "Cortina", "Relogio", "Furadeira", "Lampada", "Cadeado",
            "Salvador",
            "Saturno", "Outono", "Mickey Mouse", "Asia", "Cristovao Colombo", "Franca", "Microfone",
            "Tapioca", "Vacina", "Liquidificador", "Subway Surfers", "Angry Birds", "Guepardo", "Metamorfose",
            "Nao se olha os dentes", "Fio dental", "Agulha", "Vaticano", "China", "Argentina", "Chaves",
            "Procurando Nemo",
            "O Incrivel Mundo de Gumball", "Phineas e Ferb", "Antartida", "Africa", "otorrinolaringologia",
            "Camaleao",
            "Dicionario", "Coracao", "Pele", "Dinossauro"
        ];
        $rootScope.classificacao =
            { nomes: "", pontos: 0 };
        $rootScope.claFinal = [];
        $rootScope.verifica = "";
        $rootScope.n = 0;
        $rootScope.v = 0;
        $rootScope.contadorResp = 0;
        $rootScope.contadorPula = 0;
        $rootScope.iniTimer = true;
        $rootScope.i = Math.floor(Math.random() * $rootScope.dados.length);
        $rootScope.t = 30;

        $rootScope.timer = function () {
            $rootScope.tempo = setInterval(function () {
                $rootScope.t--;
                $rootScope.$digest();
            }, 1000);
        }

        $rootScope.inputChanged = function () {
            $rootScope.v = 1;
            $rootScope.retornoResp = "";
            $rootScope.retornoTemp = "";
            $rootScope.retornoPonto = "";
            $rootScope.tam = $rootScope.dados[$rootScope.i].length - $rootScope.verifica.length;
            if ($rootScope.dados[$rootScope.i].length == $rootScope.verifica.length) {
                $rootScope.ve();
            }
        }

        $rootScope.ve = function () {
            $rootScope.mostra = false;
            if ($rootScope.verifica.toUpperCase() == $rootScope.dados[$rootScope.i].toUpperCase()) {
                $rootScope.verifica = "";
                $rootScope.i = Math.floor(Math.random() * $rootScope.dados.length);
                $rootScope.t += 5;
                $rootScope.classificacao.pontos += 100;
                $rootScope.retornoResp = "Acertou";
                $rootScope.retornoTemp = "+5 segundos";
                $rootScope.retornoPonto = "+100 pontos";
            }
            else {
                $rootScope.verifica = "";
                $rootScope.t -= 5;
                $rootScope.retornoResp = "Errou";
                $rootScope.retornoTemp = "-5 segundos";
            }
        }

        $rootScope.reset = function () {
            $rootScope.t = 30;
            $rootScope.c = false;
            $rootScope.z = true;
            $rootScope.m = true;
            $rootScope.n = true;
            $rootScope.y = true;
            $rootScope.classificacao.pontos = 0;
            $rootScope.verifica = "";
            $rootScope.retornoResp = "";
            $rootScope.retornoTemp = "";
            $rootScope.retornoPonto = "";
            $rootScope.i = Math.floor(Math.random() * $rootScope.dados.length);
        }

        $rootScope.adicionar = function () {
            let recebeNomes = $rootScope.classificacao.nomes.toString();
            let recebePontos = $rootScope.classificacao.pontos.toString();
            $rootScope.claFinal.push({ nomes: recebeNomes, pontos: recebePontos });        
        }
        $rootScope.mostraRespostaCount = function () {
            for ($scope.j = 1000; $scope.j <= $rootScope.classificacao.pontos; $scope.j += 1000) {
                $rootScope.contadorResp++;
            }
        }
        $rootScope.mostraResposta = function () {
            if ($rootScope.contadorResp <= 0) {
                return;
            }
            $rootScope.mostra = true;
            $rootScope.contadorResp--;
        }
        $rootScope.pulaPerguntaCount = function () {
            for ($scope.j = 500; $scope.j <= $rootScope.classificacao.pontos; $scope.j += 500) {
                $rootScope.contadorPula++;
            }
        }
        $rootScope.pulaPergunta = function () {
            if ($rootScope.contadorPula <= 0) {
                return;
            }
            $rootScope.i = Math.floor(Math.random() * $rootScope.dados.length);
            $rootScope.mostra = false;
            $rootScope.contadorPula--;
        }
    })