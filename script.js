
// -----selecao terco ou rosario -------
 var n=0
function escolhaTerco(){
 if(n%2===0){
  document.getElementById('selecaoTercos').style.display="flex";
  n++
 }
 else{
  document.getElementById('selecaoTercos').style.display="none";
  n++
 }
  }

//----funcao construtora das partes ----//
function Partes(title, content, balls){
  this.title = title;
  this.content = content;
  this.balls = balls;
}

//------criando as partes -----//
var cruz = new Partes('Sinal da Cruz', 'Em nome do Pai, do Filho e do Espírito Santo', false)
var introCredo = new Partes('','Divino Jesus, eu vos ofereço esse terço que vou rezar contemplando os mistérios de vossa redenção. Concedei pela intercessão de Maria, vossa mãe santíssima, a quem me dirijo, as virtudes que são necessárias para bem rezá-lo e a graça de ganhar as indulgências anexas a essa adoração. Ofereço-vos particularmente este santo terço pelas necessidades mais urgentes de nosso país. Abençoai e santificai a família brasileira e dai-nos a paz.', false)
var credo = new Partes('Credo apostólico', 'Creio em Deus pai todo poderoso, criador do céu e da terra, e em Jesus cristo seu único filho, nosso senhor que foi concebido, pelo poder do Espírito Santo, nasceu da virgem Maria, padeceu sob pôncio Pilatos, foi crucificado, morto e sepultado, desceu a mansão dos mortos, ressuscitou ao terceiro dia subiu aos céus e está sentado a direita de Deus pai todo poderoso donde há de vir e julgar os vivos e os mortos. Creio no Espírito santo, na Santa igreja Católica, na comunhão dos santos, na remissão dos pecados na ressurreição da carne e na vida eterna. Amém.', false)
var paiNosso = new Partes('Pai Nosso', 'Pai nosso, que estais no céu, santificado seja o vosso nome; venha a nós o vosso reino; seja feita a vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje; e perdoai as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.', false)
var introAveMariaUm = new Partes('','O anjo do senhor anunciou à Maria. E ela concebeu do Espírito Santo', false)
var introAveMariaDois = new Partes('', 'Eis aqui a escrava do Senhor. Faça-se em mim segundo a vossa palavra', false)
var introAveMariaTres = new Partes('', 'E o Verbo se fez carne. E habitou entre nós', false)
var aveMaria = new Partes ('Ave Maria', 'Ave Maria, cheia de graça, o Senhor é convosco; bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora da nossa morte. Amém.', true)
var gloria = new Partes('Glória ao Pai', 'Glória ao Pai, ao Filho e ao Espírito Santo, como era no princípio, agora e sempre. Amém.', false)
var ohJesus= new Partes('Ó meu Jesus, perdoai-nos!', 'Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno; levai as almas para o Céu, principalmente as que mais precisarem. Amém', false)
var mGo1 = new Partes('O anúncio do Arcanjo São Gabriel a Virgem Maria','"O anjo disse-lhe: Não temas, Maria, pois encontraste graça diante de Deus. Eis que conceberás e darás à luz um filho e lhe porás o nome de Jesus" (Lc 1,30-31) Contemplamos a anunciação do anjo Gabriel à Nossa Senhora e a encarnação do verbo de Deus em seu ventre.   "Eis aqui a serva do Senhor, faça-se em mim segundo a vossa palavra" - aqui vemos em Maria o despojamento, a humildade, o amor a Deus e a entrega de si mesma. Meditação: Hoje o Senhor nos chama dar o sim para Jesus; nascer em nosso coração em nossa vida, dar sentido à nossa vida terrena e acolher o plano de Deus para nossa salvação', false)
var mGo2 = new Partes('Visitação de Maria a sua prima, Isabel','"Naqueles dias, Maria se levantou e foi às pressas às montanhas, a uma cidade de Judá.Entrou em casa de Zacarias e saudou Isabel"( Lc 1,39-40) Contemplamos a visitação de Nossa Senhora à Santa Isabel.     "E partindo às pressas foi às montanhas ficar com sua prima que já de idade avançada estava grávida"....  Isabel a saúda: Tu és bendita.. como posso merecer que a MÃE do meu Senhor venha me visitar, quando adentrastes pela porta a criança saltou em meu ventre.  Maria responde: "Minha Alma glorifica o Senhor... Meu espírito exulta em Deus Meu Salvador!" A humildade e a entrega de si mesma em favor dos mais necessitados; hoje Deus nos chama a trabalhar em sua vinha, sair de nosso conforto e procurar os que estão necessitados; não só de pão, mas de amor, apoio e do conhecimento da palavra do Senhor.', false)
var mGo3 = new Partes('Nascimento do Filho de Deus','"Estando eles ali, completaram-se os dias dela. E deu à luz seu filho primogênito"( Lc 2,6-7a) Contemplamos o nascimento de Nosso Senhor Jesus Cristo em Belém.   Um Deus tão grande e poderoso vem até nós... o verbo de Deus se faz carne, sai da sua divindade e se torna um pobre mortal semelhante a nós em tudo, menos no pecado. Jesus nos mostra que nada que temos ou possuímos, nesse mundo importa, comparado àquilo que há de vir... o mais importante: a vida eterna. O orgulho de um anjo que queria ser Deus gerou o pecado. E o salário do pecado é a morte...   ...a humildade é a chave de toda a nossa salvação, a pureza de coração, a entrega sincera a Deus é a obediência, e o salário da obediência é a vida eterna. Pois todo aquele que crer em mim mesmo que morra eu o ressuscitarei.', false)
var mGo4 = new Partes('Apresentação do Menino Jesus no Templo','"Concluídos os dias da sua purificação segundo a lei de Moisés, levaram-no a Jerusalém para o apresentar ao Senhor, conforme o que está escrito na Lei do Senhor..."(Lc.2.22-23 a) Contemplamos a apresentação do Menino Jesus no Templo e a Purificação de Nossa Senhora.  Uma espada de dor transpassará o vosso Coração. Apresentando o nosso coração ao Senhor para que ele faça a circuncisão e tire aquela pele que impede a ação do Espírito Santo em nossa vida. E mesmo que em nossa caminhada junto ao Senhor uma espada penetre nossa alma, possamos pela força de seu Espírito Santo ver a salvação que vem de Jesus.', false)
var mGo5 = new Partes('Reencontro do Menino-Deus no Templo','"Quando eles o viram, ficaram admirados. E sua mãe disse-lhe: Meu filho, que nos fizeste? Eis que teu pai e eu andávamos à tua procura, cheios de aflição.Respondeu-lhes ele: Por que me procuráveis? Não sabíeis que devo ocupar-me das coiss de meu Pai? (Lc 2,48-49). Contemplamos a perda e o reencontro de Jesus no templo de Jerusalém.    Maria e José perderam Jesus ainda menino aos 12 anos em Jerusalém e após três dias de dor e sofrimento o encontram no templo no meio de doutores da lei ensinando a doutrina do Pai. A Escritura Sagrada, é o caminho para encontrarmos Jesus, quando nos perdemos ou desviamos desse caminho, a conseqüência é a dor o sofrimento.  Na procura diária pela leitura, estudo e reflexão da Bíblia, podemos buscar o encontro ou o reencontro com Nosso Senhor e depois viver essas palavras e ensinamentos o quanto mais cedo. E, assim como Jesus, crescer na obediência e cuidar das coisaS do Pai.', false)
var mDo1 = new Partes('Agonia do Senhor no Horto das Oliveiras','"Adiantou-se um pouco e, prostando-se com a face por terra, assim rezou: Meu Pai, se é possível, afasta de mim este cálice! Todavia não se faça o que eu quero, mas sim, o que tu queres"(Mt 26,39) Contemplamos a agonia Mortal de Nosso Senhor, quando suou sangue no Horto das Oliveiras.    "Minha alma está triste a ponto de morrer, ficai aqui e vigiai. "Vigiai e orai para não cairdes em tentação, o espírito está pronto, mas a carne é fraca." A oração e vigilância nos livra de cairmos nas armadilhas do demônio. Ele está sempre esperando uma oportunidade para nos fazer cair no pecado. Só com a força da oração constante podemos vencê-lo. Jesus mesmo sabendo tudo o que iria lhe acontecer, suportou toda tristeza e foi obediente ao Pai. Seguir o seu exemplo e em todas as coisas que nos acontecer, seja boa ou má ...sempre seja feito a vontade de Deus e não a nossa, pois Ele sabe o que é melhor para cada um de nós.', false)
var mDo2 = new Partes('Flagelação de Jesus','"Pilatos mandou então flagelar a Jesus"( Jo 19,1). Contemplamos a flagelação de Nosso Senhor.    O sofrimento – a humilhação o escárnio- a violência de um inocente. Toda essa humilhação e dor por cada um de nós, pecadores. O amor que sente por cada ser humano é impossível de se imaginar. E todas as vezes que pecamos e ofendemos um irmão estamos sendo os carrascos que torturaram Jesus.', false)
var mDo3 = new Partes('Coroação de espinhos','"Depois, trançaram uma coroa de espinhos, meteram-lha na cabeça e puseram-lhe na mão uma vara..." (mt 27,29 a ). Contemplamos a coroação de espinhos de Nosso Senhor Jesus Cristo.    Cada ponta de espinho... um pecado – em cada gota de sangue derramado o perdão. Sua sagrada face coberta de sangue... o sangue que nos lavou e limpou de nossos pecados; na dor provocada pelos espinhos resgatou-nos da morte.  O mesmo sangue que hoje derrama em cada Santa Missa Celebrada; poderoso sangue redentor, que nos cura e liberta de toda escravidão do pecado.', false)
var mDo4 = new Partes('Jesus carregando a Cruz até o Calvário','"Levaram então consigo Jesus. Ele próprio carregava a sua cruz para fora da cidade, em direção do lugar chamado Calvário, em hebraico Gólgota"( Jo 19,17 ) . Contemplamos a subida dolorosa de Jesus carregando a Cruz para o Calvário.    O peso dos pecados do mundo nos ombros abriram chagas que chegavam até os ossos. Todo aquele que quiser vir após mim, renegue a si mesmo toma sua cruz e siga-me.  As cruzes diárias é caminho de redenção e salvação. Aceitar as cruzes é amar a Jesus e imitá-lo. O servo fiel que segue seu mestre e também dá a vida por outro irmão.', false)
var mDo5 = new Partes('Crucificação e morte do Senhor','"Chegados que foram ao lugar chamado Calvário, ali o crucificaram, como também os ladrões, um à direita o outro à esquerda"( Lc 23,33) Contemplamos a crucificação e morte de Nosso Senhor Jesus Cristo. Cruz, escândalo para os judeus, loucura para os gentios, consolo e sinal de fé para os cristãos. A cruz Sagrada seja a nossa luz... todo sofrimento na terra não tem comparação ao da cruz do Senhor. Por amor ao ser humano e ao pecador suportou dores incalculáveis, humilhou-se, foi insultado e desprezado, tratado como o pior dos criminosos. O maior dos tesouro de um cristão ..honrar a Santa Cruz!', false)
var mGlo1 = new Partes('Ressurreição triunfante do Senhor','"Mas o anjo disse às mulheres: Não temais! Sei que procurais a Jesus que foi crucificado. Não está aqui. Ressuscitou como disse..."(Mt 28, 5-6 a ) . Contemplamos a ressurreição de Jesus.   A morte não é o fim para aqueles que crêem em Jesus.    A vitória sobre a morte, a esperança na vida eterna, o envio a anunciar a boa-nova, a remissão dos pecados.  A paz de Jesus àqueles que O seguem.', false)
var mGlo2 = new Partes('Sua gloriosa Ascensão aos céus','"Dizendo isto, elevou-se ( da terra ) à vista deles, e uma nuvem o ocultou aos seus olhos" (At 1,9). Contemplamos a ascensão de Nosso Senhor Jesus Cristo ao Céu.    A volta ao Pai para preparar–nos um lugar e para cuidar de cada um de nós intercedendo junto a Deus pelo perdão de nossos pecados.', false)
var mGlo3 = new Partes('Vinda do Espírito Santo','"De repente veio do céu um ruído, como se soprasse um vento impetuoso, e encheu toda a casa onde estavam sentados. Apareceram-lhes então uma espécie de línguas de fogo, que se repartiram e repousaram sobre cada um deles"( At. 2,2-3). Contemplamos a vinda do Espírito Santo sobre os apóstolos reunidos com a Virgem Maria em Jerusalém.  A vinda do Prometido, o Espírito Santo Paráclito: o advogado-defensor.    O Paráclito, o Espírito Santo que o Pai enviará em meu nome, vos ensinará todas as coisas e vos fará recordar tudo os que vos disse. O Espírito Santo que recebemos no Batismo é nosso condutor, defende-nos diante do Pai, pois temos um acusador dia e noite que nos acusa diante de Deus... satanás; mas o Espírito Santo que habita em nós, ora em nós com gemidos inefáveis, pois não sabemos o que pedir a Deus.', false)
var mGlo4 = new Partes('Assunção da Virgem Maria aos céus','" Apareceu em seguida um grande sinal no céu: uma Mulher revestida do sol, a lua debaixo dos seus pés, e na cabeça uma coroa de doze estrelas"( Ap 12,1) Contemplamos a assunção de Nossa Senhora ao Céu: o encontro da Mãe com o Filho no céu. Concebida sem pecado Virgem Santa merecedora de todas as graças. A filha predileta do Pai sempre fiel a Deus, guardou tudo sempre em seu coração, virgem do silêncio, seu corpo templo do Espírito Santo, Sacrário Vivo, não poderia ser corrompido pela terra como simples pecadora.', false)
var mGlo5 = new Partes('Coroação de Nossa Senhora como Rainha dos Céus e da Terra','"Tu és a glória de Jerusalém...tu és a honra de nosso povo... o Senhor te fortaleceu e por isso serás eternamente bendita" ( Jt 15,10b; 11b). Contemplamos a coroação de Nossa Senhora como Rainha de todos os anjos e santos.    Rainha dos Anjos: Uma mulher vestida de Sol, sobre a cabeça uma coroa de estrelas e sobre o os pés a lua.  Rainha da Terra, Rainha da Igreja intercessora poderosa junto a Jesus, tem poder de esmagar a cabeça do dragão infernal, na hora de nossa morte nos defenderá junto a Jesus, e a todos aqueles que por amor a ela e a seu filho forem fiéis na oração do Santo Rosário. ....a cada Ave-Maria depositamos uma rosa a seus pés...', false)
var Lu1 = new Partes('Batismo no rio Jordão','Contemplamos o Batismo de Jesus Cristo no rio Jordão.   Com atitude humilde ele nos mostra o caminho inicial da Salvação: a aceitação de Deus como nosso único Senhor. Cristo é a luz do mundo, Luz é o atributo da divindade. "Esta era a luz verdadeira, que vindo ao mundo a todos ilumina"(Jo 1,9). "Quem me segue..."- disse Jesus - terá a luz da vida"(Jo 8,12). Nós, cristãos, somos "filhos da luz" (cf. Ef 5,8). A luz de Cristo é levada a todo o mundo pelos seus discípulos. Batismo de Jesus - Enquanto Cristo desce à água do rio Jordão, como inocente que se faz pecado por nós (cf 2Cor 5,21), o céu se abre e a voz do Pai proclama-o Filho amado (cf Mt 3,17), ao mesmo tempo em que o Espírito o investe na missão que o esperava.', false)
var Lu2 = new Partes('Auto-revelação nas Bodas de Caná','Contemplamos sua auto-revelação nas bodas de Caná, quando transformou água em vinho.   Atendendo o pedido de Maria, Jesus inicia seu caminho em direção à Salvação dos Homens fazendo seu primeiro milagre. Auto-revelação de Jesus nas bodas de Caná - Mistério de luz é o inicio dos sinais em Caná (cf Jo 2, 1-12), quando Cristo, transformando a água em vinho, abre a fé o coração dos discípulos graças à intervenção de Maria, a primeira entre os que crêem', false)
var Lu3 = new Partes('Anúncio do Reino de Deus e convite à conversão','Contemplamos o anúncio do Reino de Deus com o convite à conversão.   Jesus nos convida a nos convertermos plenamente às leis de Deus em busca da felicidade eterna.   O anúncio da Boa-Nova traz a esperança de um mundo melhor para todos os homens. Jesus anuncia o Reino de Deus com o convite à conversão - Mistério de luz é a pregação com a qual Jesus anuncia o advento do Reino de Deus e convida à conversão (cf Mc 1,15), perdoando os pecados de quem a ele se dirige com humilde confiança (cf Mc 2,3-1; Lc 7,47s), início do mistério de misericórdia que ele prosseguirá exercendo até o fim do mundo, especialmente da reconciliação confiado à sua Igreja (cf Jo 20,22s)', false)
var Lu4 = new Partes('Transfiguração','Contemplamos a transfiguração de Nosso Senhor Jesus Cristo.   Assim Ele mostra aos Apóstolos e a todos os seres humanos a Sua verdadeira essência divina.   Sua Luz nos orienta a seguir os caminhos do bem. Transfiguração de Jesus - Mistério da luz por excelência é a transfiguração que, segundo a tradição, se deu no monte Tabor. A glória da divindade reluz no rosto de Cristo, enquanto o Pai o apresenta aos apóstolos extasiados para que o "escutem" (cf Lc 9,35) e se disponham a viver com ele o momento doloroso da paixão, a fim de chegarem com ele à glória da ressurreição e a uma vida transfigurada pelo Espírito Santo', false)
var Lu5 = new Partes('Instituição da Eucaristia','Contemplamos a instituição da Eucaristia.   Jesus nos dá seu próprio corpo e sangue como alimento espiritual para nossas almas.   É a entrega total e a maior prova de Seu Amor por toda a humanidade.   Mesmo sabendo que ia ser traído e entregue ao sacrifício Ele nos deu uma mostra suprema de Sua divindade. Instituição da Eucaristia - Mistério da luz é, enfim, a instituição da Eucaristia, na qual Cristo se faz alimento com o seu corpo e o seu sangue sob os sinais do pão e do vinho, testemunhando "até o extremo" o seu amor pela humanidade (Jo 13,1), por cuja salvação se oferecerá em sacrifício', false)
var introSalveRainha = new Partes('','Infinitas graças vos damos, Soberana Rainha, pelos benefícios que todos os dias recebemos de vossas mãos liberais. Dignai-vos agora e para sempre, tomar-nos debaixo de vosso misericordioso amparo, e para mais vos obrigar, vos saudamos com a Salve Rainha.', false)
var SalveRainha = new Partes('Salve Rainha', 'Salve, Rainha, mãe de misericórdia, vida, doçura, esperança nossa, salve! A Vós bradamos, os degredados filhos de Eva. A Vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses Vossos olhos misericordiosos a nós volvei. E, depois deste desterro, nos mostrai Jesus, bendito fruto do Vosso ventre. Ó clemente, ó piedosa,ó doce Virgem Maria. Rogai por nós, Santa Mãe de Deus, para que sejamos dignos das promessas de Cristo. Amém.', false)
var aveMaria2 = aveMaria
//-----listas de objetos ----//
var lista = [cruz, introCredo, credo, paiNosso, introAveMariaUm, aveMaria2, introAveMariaDois, aveMaria2, introAveMariaTres, aveMaria2, gloria, ohJesus]
var combo = [paiNosso, aveMaria,aveMaria,aveMaria,aveMaria,aveMaria,aveMaria,aveMaria,aveMaria,aveMaria,aveMaria, gloria, ohJesus]
var gozosos = [mGo1,  mGo2,  mGo3, mGo4, mGo5]
var dolorosos = [mDo1, mDo2, , mDo3,mDo4, mDo5]
var gloriosos = [mGlo1,  mGlo2, mGlo3, mGlo4, mGlo5]
var luminosos = [Lu1, Lu2, Lu3, Lu4, Lu5]

//----- construcao da lista principal---//
function rosarioInteiro(){
  apagarTela();
var ordem = lista;
  for(i in gozosos){
    ordem.push(gozosos[i])
    var ordem = ordem.concat(combo)
  }
  for(i in dolorosos){
    ordem.push(dolorosos[i])
    var ordem = ordem.concat(combo)
  }
  for(i in gloriosos){
    ordem.push(gloriosos[i])
    var ordem = ordem.concat(combo)
  }
  ordem.push(introSalveRainha)
  ordem.push(SalveRainha)
  executar(ordem);
}

function misteriosGozosos(){
  apagarTela();
  var ordem = lista;
  for(i in gozosos){
    ordem.push(gozosos[i])
    var ordem = ordem.concat(combo)
  }
  ordem.push(introSalveRainha)
  ordem.push(SalveRainha)
  executar(ordem);
}

function misteriosDolorosos(){
  apagarTela();
  var ordem = lista;
  for(i in dolorosos){
    ordem.push(dolorosos[i])
    var ordem = ordem.concat(combo)
  }
  ordem.push(introSalveRainha)
  ordem.push(SalveRainha)
  executar(ordem);
}

function misteriosGloriosos(){
  apagarTela();
  var ordem = lista;
  for(i in gloriosos){
    ordem.push(gloriosos[i])
    var ordem = ordem.concat(combo)
  }
  ordem.push(introSalveRainha)
  ordem.push(SalveRainha)
  executar(ordem);
}
function misteriosLuminosos(){
  apagarTela();
  var ordem = lista;
  for(i in luminosos){
    ordem.push(luminosos[i])
    var ordem = ordem.concat(combo)
  }
  ordem.push(introSalveRainha)
  ordem.push(SalveRainha)
  executar(ordem);
}
//-----funcao apagar a tela inicial---//
function apagarTela(){
  document.getElementById('botoes').style.display = 'none';
  document.querySelector('header').style.display = 'none';
}

//------ execucao da lista e impressao em tela ---//

var c=0
var divBolas = document.getElementById("divBolas")
var tremarias = document.getElementById("tresmarias")
function executar(a){
  window.addEventListener('click', Clique);
  contador=0
  var display = document.querySelector('#container')
  function Clique(){
    display.innerHTML = `<h1>${a[contador].title}</h1> <p>${a[contador].content}</p>` ;
    
    if(contador>3 && contador<10){
      if(a[contador-2]==aveMaria2){
        document.querySelectorAll('div .tresmarias')[c-2].style.backgroundColor = ' rgb(237, 218, 166)'
      }
      tremarias.style.display="flex";
      var verm = document.querySelectorAll('div .tresmarias')[c]
      if( c==0||c==2||c==4)
      verm.style.backgroundColor = 'rgb(203, 182, 117)'
      c++
    }else{
      tremarias.style.display = "none"
      if(a[contador]=== aveMaria){
              if(a[contador-1]=== aveMaria){
                document.querySelectorAll('li div')[c-1].style.backgroundColor = ' rgb(237, 218, 166)'
              }
            divBolas.style.display = "flex"
            var red = document.querySelectorAll('li div')[c]
            red.style.backgroundColor = ' rgb(203, 182, 117)'
            c++
          }else{
              if(a[contador-1]=== aveMaria){
                document.querySelectorAll('li div')[c-1].style.backgroundColor = ' rgb(237, 218, 166)'
              }
            divBolas.style.display = "none"
            c=0
          }
    }

    contador++;
}
}
















