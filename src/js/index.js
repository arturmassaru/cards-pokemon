/*objetivo 1 quando clicar na seta de avançar temos que mostrar o proximo cartão da lista
   passo 1 - dar um jeito de pegar o elemento html da seta avançar    
   passo 2 - identificar o clique do usuário na seta avançar 
   passo 3 - fazer aparecer o proximo elemento da lista 
   passo 4 - buscar o cartao selecionado e esconder 

objetivo 2 quando clicar na seta de voltar temos que mostrar o cartão anterior da lista
    passo 1 - dar um jeito de pegar o elemento html da seta voltar
    passo 2 - identificar o clique do usuário na seta voltar
    passo 3 - fazer aparecer o elemento anterior da lista 
    passo 4 - buscar o cartao selecionado e esconder */

const btnavancar = document.getElementById('btn-avancar');
const btnvoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoatual = 0;


function escondercartaoselecionado() {

  const cartaoselecionado = document.querySelector('.selecionado');
  cartaoselecionado.classList.remove('selecionado');}

  function mostrarcartao(indicecartao){

    cartoes[cartaoatual].classList.add('selecionado');};



btnavancar.addEventListener('click', function () {
  if (cartaoatual === cartoes.length - 1) return;

  escondercartaoselecionado();

  cartaoatual++;
  mostrarcartao(cartaoatual)
});


btnvoltar.addEventListener('click', function () {
  if (cartaoatual === 0) return;

  escondercartaoselecionado();

  cartaoatual--;
  mostrarcartao(cartaoatual);
});