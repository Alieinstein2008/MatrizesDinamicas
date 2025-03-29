
function GerarCamposMatriz() {
   const IdBotao = ("BotaoGerar");
   ChecarStatus(false, IdBotao);
   let ReferenciaLinha = 1;
   let ReferenciaColuna = 1;

   let InputLinhas = parseInt(document.getElementById("InputLinha").value);
   let InputColunas = parseInt(document.getElementById("InputColuna").value);
   let QuantidadeInputs = InputLinhas * InputColunas;
   for (let CampoValor = 1; CampoValor <= QuantidadeInputs; CampoValor++) {
      if (ReferenciaColuna > InputColunas) {
         ReferenciaColuna = 1;
         ReferenciaLinha++;
      }
      document.getElementById('GenerateFormBoard').insertAdjacentHTML('beforeend', `<div class="GenerateForm">
            <p>Valor da Linha ${ReferenciaLinha} e Coluna ${ReferenciaColuna}:
            <input type="number" name="L${ReferenciaLinha}C${ReferenciaColuna}" id="Input${CampoValor}" autocomplete="off"></p>
            </div>`)
      ReferenciaColuna++
   }
   document.getElementById('ButtonsBoard').insertAdjacentHTML('beforeend', `<input type="button" value="Enviar" id="BotaoEnviar" onclick="ChecarCampos()">
      <input type="button" onclick="LimparTela()" id="BotaoLimpar" value="Limpar">`)

}
function LimparTela() {
   const LocalClasseAlvo = ".GenerateForm";
   const IdBotaoLimpar = ("BotaoLimpar");
   const idBotaoEnviar = ("BotaoEnviar");
   let ElementosAlvos = document.querySelectorAll(LocalClasseAlvo);
   for (let Elements = 0; Elements < ElementosAlvos.length; Elements++) {
      ElementosAlvos[Elements].remove();
   }

   document.getElementById(idBotaoEnviar).remove();
   document.getElementById(IdBotaoLimpar).remove();
   ChecarStatus(true, "BotaoGerar")
}

function ChecarStatus(Verdade, IdBotao) {
   if (IdBotao == "BotaoGerar") {
      document.getElementById(IdBotao).disabled = !Verdade
      document.getElementById("InputLinha").disabled = !Verdade;
      document.getElementById("InputColuna").disabled = !Verdade;
   }
   if (IdBotao == 'BotaoEnviar') {
      document.getElementById("InputLinha").disabled = !Verdade;
      document.getElementById("InputColuna").disabled = !Verdade;



   }

}

function ChecarCampos() {
   const ClasseCampos = ".GenerateForm";
   const IdFormulario = "Formulario";
   const IdNumeroReal = "Variavel";
   let CamposVazios = 0;
   let QuantidadeCampos = document.querySelectorAll(ClasseCampos);


   for (let CampoValor = 1; CampoValor <= QuantidadeCampos.length; CampoValor++) {
      let CampoAtual = document.getElementById(`Input${CampoValor}`).value
      if (CampoAtual == '') {
         CamposVazios++
      }
   }
   switch (CamposVazios) {
      case 1:
         alert(`Existe ${CamposVazios} campo vazio preencha-o antes de continuar!! `);
         break;
      case 0:
         let VariavelEscalar = parseFloat(prompt("Insira um número Real: "));
         document.getElementById(IdNumeroReal).value = VariavelEscalar;
         if (document.getElementById(IdNumeroReal).value != 'NaN') {
            ChecarStatus(true, "BotaoEnviar")
            document.getElementById(IdFormulario).submit();
            LimparTela();
         }
         break;

   }
   if (CamposVazios > 1) {
      alert(`Existem ${CamposVazios} campos vazios preencha-os antes de continuar!! `)
   }

}
