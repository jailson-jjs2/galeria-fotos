$(document).ready(function(){
  //alert('testando jQuery') 
  // console.log($('header button')); SELETOR MOSTRANDO O ACESSO AO BOTÃO

  //FUNÇÃO QUE SERA ACIONADO APOIS O CLIC, O CONTEUDO SE CHAMA callback,
  //A SEDUNDA FORMA UTILIZANDO jQuery
  //document.querySelector('header button').addEventListener('click', function() {

    $('header button').click(function() { // PARA MOSTRAR O MENU
      $('form').slideDown();
    })

    $('#btnCancelar').click(function() { // PARA REMOVER O MENU
      $('form').slideUp();
    })

    $('form').on('submit', function(evento) {
/*       console.log("submit"); */ // TESTANDO O submit
      evento.preventDefault();// PARA EVITAR O COMPORTAMENTO PADRÃO DE ATUALIZAR PAG
      const endDaNova_Imagem = $('#endImagem_nova').val(); //PEGANDO O VALOR = AO .value
      const novoItem = $('<li style="display: none"></li>');
      $(`<img src='${endDaNova_Imagem}'/>`).appendTo(novoItem);//.appendTo ADD NO li
      $(`
        <div class='overlayImagem_link'>
          <a href='${endDaNova_Imagem}' target='_blank' title='Ver em tamnho real'>
            Ver imagem em tamanho real 
          </a>
        </div>
      `).appendTo(novoItem);
      $(novoItem).appendTo('ul');//ADD A NOVA IMAGEM
      $(novoItem).fadeIn(1000);// EFEITO AO ADD
      $('#endImagem_nova').val(''); // LIMPAR CAMPO
    })
})