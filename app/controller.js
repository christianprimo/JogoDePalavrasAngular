angular.module("myApp")
    .controller("indexController", function ($scope, $rootScope) {
        $rootScope.tips = ["Grão usado para fazer picopa", "Instrumento usado para gravar imagens",
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

        $rootScope.answers = ["Milho", "Camera", "Vaso", "Porta", "Capacete", "Mercado", "Carro", "Moto", "Cama",
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
        $rootScope.classification =
            { names: "", points: 0 };
        $rootScope.claFinal = [];
        $rootScope.inputAnswer = "";
        $rootScope.hideRegister = 0;
        $rootScope.showReturn = false;
        $rootScope.countAnswer = 0;
        $rootScope.countJump = 0;
        $rootScope.iniTimer = true;
        $rootScope.i = Math.floor(Math.random() * $rootScope.answers.length);
        $rootScope.t = 30;

        $rootScope.timer = function () {
            $rootScope.time = setInterval(function () {
                $rootScope.t--;
                $rootScope.$digest();
            }, 1000);
        }

        $rootScope.inputChanged = function () {
            $rootScope.showReturn = false;
            $rootScope.missLetters = $rootScope.answers[$rootScope.i].length - $rootScope.inputAnswer.length;
            if ($rootScope.answers[$rootScope.i].length == $rootScope.inputAnswer.length) {
                $rootScope.checkAnswer();
            }
        }

        $rootScope.checkAnswer = function () {
            $rootScope.shoAnswer = false;
            $rootScope.checkAwr = $rootScope.inputAnswer.toUpperCase() == $rootScope.answers[$rootScope.i].toUpperCase();
            $rootScope.showReturn = true;
            if ($rootScope.checkAwr) {
                $rootScope.inputAnswer = "";
                $rootScope.i = Math.floor(Math.random() * $rootScope.answers.length);
                $rootScope.t += 5;
                $rootScope.classification.points += 100;
            }
            else {
                $rootScope.inputAnswer = "";
                $rootScope.t -= 5;
            }
        }

        $rootScope.reset = function () {
            $rootScope.t = 30;
            $rootScope.showClassification = false;
            $rootScope.hideClassification = true;
            $rootScope.showTime = true;
            $rootScope.hideRegister = true;
            $rootScope.showReturn = false;
            $rootScope.classification.points = 0;
            $rootScope.inputAnswer = "";
            $rootScope.i = Math.floor(Math.random() * $rootScope.answers.length);
        }

        $rootScope.addClassification = function () {
            let getNames = $rootScope.classification.names.toString();
            let getPoints = $rootScope.classification.points.toString();
            $rootScope.claFinal.push({ names: getNames, points: getPoints });
        }
        $rootScope.countPoints = function (pts) {
            for ($scope.j = pts; $scope.j <= $rootScope.classification.points; $scope.j += pts) {
                if (pts == 1000) $rootScope.countAnswer++;
                else $rootScope.countJump++;
            }
        }
        $rootScope.showAnswer = function () {
            if ($rootScope.countAnswer <= 0) {
                return;
            }
            $rootScope.shoAnswer = true;
            $rootScope.countAnswer--;
        }

        $rootScope.skipQuestion = function () {
            if ($rootScope.countJump <= 0) {
                return;
            }
            $rootScope.i = Math.floor(Math.random() * $rootScope.answers.length);
            $rootScope.shoAnswer = false;
            $rootScope.countJump--;
        }
    })