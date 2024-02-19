
// -----selecao terco ou rosario -------
 var n=0
function escolhaTerco(){
 if(n%2===0){
  document.getElementById('selecaoTercos').style.display="block";
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
var cruz = new Partes('Sinal da Cruz', 'Em nome do Pai, do Filho e do Espirito Santo', false)
var credo = new Partes('Credo apostolico', 'Creio em Deus pai todo poderoso, criador do céu e da terra, e em Jesus cristo seu único filho, nosso senhor que foi concebido, pelo poder do Espírito Santo, nasceu da virgem Maria, padeceu sob pôncio Pilatos, foi crucificado, morto e sepultado, desceu a mansão dos mortos, ressuscitou ao terceiro dia subiu aos céus e está sentado a direita de Deus pai todo poderoso donde há de vir e julgar os vivos e os mortos. Creio no Espírito santo, na Santa igreja Católica, na comunhão dos santos, na remissão dos pecados na ressurreição da carne e na vida eterna. Amém.', false)
var paiNosso = new Partes('Pai Nosso', 'Pai nosso, que estais no céu, santificado seja o vosso nome; venha a nós o vosso reino; seja feita a vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje; e perdoai as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.', false)
var aveMaria = new Partes ('Ave Maria', 'Ave Maria, cheia de graça, o Senhor é convosco; bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora da nossa morte. Amém.', true)
var gloria = new Partes('Gloria ao Pai', 'Glória ao Pai, ao Filho e ao Espírito Santo, como era no princípio, agora e sempre. Amém.', false)
var ohJesus= new Partes('Oracao de Fatima', 'Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno; levai as almas para o Céu, principalmente as que mais precisarem. Amém', false)
var mGo1 = new Partes('Primeiro Misterio: ','content', false)
var mGo2 = new Partes('seg Misterio: ','content', false)
var mGo3 = new Partes('ter Misterio: ','content', false)
var mGo4 = new Partes('quart Misterio: ','content', false)
var mGo5 = new Partes('quin Misterio: ','content', false)
var mDo1 = new Partes('Primeiro Misterio: ','content', false)
var mDo2 = new Partes('Primeiro Misterio: ','content', false)
var mDo3 = new Partes('Primeiro Misterio: ','content', false)
var mDo4 = new Partes('Primeiro Misterio: ','content', false)
var mDo5 = new Partes('Primeiro Misterio: ','content', false)
var mGlo1 = new Partes('Primeiro Misterio: ','content', false)
var mGlo2 = new Partes('Primeiro Misterio: ','content', false)
var mGlo3 = new Partes('Primeiro Misterio: ','content', false)
var mGlo4 = new Partes('Primeiro Misterio: ','content', false)
var mGlo5 = new Partes('Primeiro Misterio: ','content', false)

//-----listas de objetos ----//
var lista = [cruz, credo, paiNosso, aveMaria,aveMaria,aveMaria, gloria]
var combo = [paiNosso, aveMaria,aveMaria,aveMaria,aveMaria,aveMaria,aveMaria,aveMaria,aveMaria,aveMaria,aveMaria, gloria, ohJesus]
var gozosos = [mGo1,  mGo2,  mGo3, mGo4, mGo5]
var dolorosos = [mDo1, mDo2, , mDo3,mDo4, mDo5]
var gloriosos = [mGlo1,  mGlo2, mGlo3, mGlo4, mGlo5]

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

  executar(ordem);

}

function misteriosGozosos(){
  apagarTela();

  var ordem = lista;
  for(i in gozosos){
    ordem.push(gozosos[i])
    var ordem = ordem.concat(combo)
  }
  
  executar(ordem);
}

function misteriosDolorosos(){
  apagarTela();

  var ordem = lista;
  for(i in dolorosos){
    ordem.push(dolorosos[i])
    var ordem = ordem.concat(combo)
  }
  
  executar(ordem);
}

function misteriosGloriosos(){
  apagarTela();

  var ordem = lista;
  for(i in gloriosos){
    ordem.push(gloriosos[i])
    var ordem = ordem.concat(combo)
  }
  
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
function executar(a){
  window.addEventListener('click', Clique);
  contador=0
  var display = document.querySelector('#container')
  function Clique(){
    display.innerHTML = `<h1>${a[contador].title}</h1> <p>${a[contador].content}</p>` ;
    if(a[contador]=== aveMaria){
        if(a[contador-1]=== aveMaria){
          document.querySelectorAll('li div')[c-1].style.backgroundColor = 'blue'
        }
      divBolas.style.display = "flex"
      var red = document.querySelectorAll('li div')[c]
      red.style.backgroundColor = 'red'
      c++
    }else{
        if(a[contador-1]=== aveMaria){
          document.querySelectorAll('li div')[c-1].style.backgroundColor = 'blue'
        }
      divBolas.style.display = "none"
      c=0
    }
    contador++;
}
}
