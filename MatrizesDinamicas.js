
function GerarCamposMatriz() {
   var Verdade = false
   const IdBotao = ("BotaoGerar");
   ChecarStatus(Verdade, IdBotao);
   var ReferenciaLinha = 1;
   var ReferenciaColuna = 1;

   var InputLinhas = parseInt(document.getElementById("InputLinha").value);
   var InputColunas = parseInt(document.getElementById("InputColuna").value);
   var QuantidadeInputs = InputLinhas * InputColunas;
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
   var ElementosAlvos = document.querySelectorAll(LocalClasseAlvo);
   for (let Elements = 0; Elements < ElementosAlvos.length; Elements++) {
      ElementosAlvos[Elements].remove();
   }

   document.getElementById(idBotaoEnviar).remove();
   document.getElementById(IdBotaoLimpar).remove();
   Verdade = true;
   ChecarStatus(Verdade, "BotaoGerar")
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
   var CamposVazios = 0;
   var QuantidadeCampos = document.querySelectorAll(ClasseCampos);


   for (let CampoValor = 1; CampoValor <= QuantidadeCampos.length; CampoValor++) {
      var CampoAtual = document.getElementById(`Input${CampoValor}`).value
      if (CampoAtual == '') {
         CamposVazios++
      }
   }
   if (CamposVazios == 1) {
      alert(`Existe ${CamposVazios} campo vazio preencha-o antes de continuar! `)
   }
   if (CamposVazios > 1) {
      alert(`Existem ${CamposVazios} campos vazios preencha-os antes de continuar! `)
   }
   if (CamposVazios == 0) {
      var VariavelEscalar = parseFloat(prompt("Insira um número Real: "));
      document.getElementById("Variavel").value = VariavelEscalar;
      if (document.getElementById("Variavel").value != 'NaN') {
         Verdade = true;
         ChecarStatus(Verdade, "BotaoEnviar")
         document.getElementById(IdFormulario).submit();
         LimparTela();
      }

   }
}
