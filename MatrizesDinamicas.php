<?php
$Matriz = array();
$Linha = 1;
$Coluna = 1;
$QuantidadeColunas = 0;
$QuantidadeLinhas = 0;


foreach ($_POST as $chave => $valor) {

    if ($chave == "QuantidadeLinhas") {
        $QuantidadeLinhas = intval($valor);
    }
    if ($chave == "QuantidadeColunas") {
        $QuantidadeColunas = intval($valor);
    }
    if ($chave == "Variavel") {
        $VariavelEscalar = intval($valor);
    }
}
$QuantidadeCampos = $QuantidadeColunas * $QuantidadeLinhas;
for ($campos = 1; $campos <= $QuantidadeCampos; $campos++) {
    if ($Coluna > $QuantidadeColunas) {
        $Coluna = 1;
        $Linha++;
    }
    $url = "L" . $Linha . "C" . $Coluna;
    $Matriz[$Linha][$Coluna] = $_POST[$url];
    $Coluna++;

}

#Formatando e abstraindo os valores da Matriz
echo " <span>Matriz: <table border='1'></span>";
for ($numeroLinha = 1; $numeroLinha <= $QuantidadeLinhas; $numeroLinha++) {
    echo "<tr>";
    for ($numeroColuna = 1; $numeroColuna <= $QuantidadeColunas; $numeroColuna++) {
        echo "<td>" . $Matriz[$numeroLinha][$numeroColuna];
    }
    echo "</tr>";
}
echo "</table><br>";

#Gerando uma Matriz Oposta da Matriz Anterior   
echo " <span>Matriz Oposta: <table border='1'></span>";
for ($numeroLinha = 1; $numeroLinha <= $QuantidadeLinhas; $numeroLinha++) {
    echo "<tr>";
    for ($numeroColuna = 1; $numeroColuna <= $QuantidadeColunas; $numeroColuna++) {
        echo "<td>" . $Matriz[$numeroLinha][$numeroColuna] * -1;
    }
    echo "</tr>";
}
echo "</table><br>";

#Gerando uma Matriz Transposta
$MatrizTransposta = array();
$LinhaTransposta = 1;
$ColunaTransposta = 1;
for ($numeroLinha = 1; $numeroLinha <= $QuantidadeLinhas; $numeroLinha++) {
    for ($numeroColuna = 1; $numeroColuna <= $QuantidadeColunas; $numeroColuna++) {
        $MatrizTransposta[$LinhaTransposta][$ColunaTransposta] = $Matriz[$numeroLinha][$numeroColuna];
        $LinhaTransposta++;
        if ($LinhaTransposta > $QuantidadeColunas) {
            $LinhaTransposta = 1;
            $ColunaTransposta++;
        }

    }

}
echo " <span>Matriz Transposta: <table border='1'></span>";

#Como as linhas se tornam colunas e as colunas se tornam linhas, troco as variaveis de comparação
$QuantidadeLinhasTransposta = $QuantidadeColunas;
$QuantidadeColunasTransposta = $QuantidadeLinhas;
for ($numeroLinhaTransposta = 1; $numeroLinhaTransposta <= $QuantidadeLinhasTransposta; $numeroLinhaTransposta++) {
    echo "<tr>";
    for ($numeroColunaTransposta = 1; $numeroColunaTransposta <= $QuantidadeColunasTransposta; $numeroColunaTransposta++) {
        echo "<td>" . $MatrizTransposta[$numeroLinhaTransposta][$numeroColunaTransposta];
    }
    echo "</tr>";
}
echo "</table><br>";

#Gerando uma Matriz que é a multiplicação da Matriz Oposta com a Matriz Transposta
if ($QuantidadeColunas == $QuantidadeLinhasTransposta) {
    $MatrizProduto = array();
    $linhasA = count($Matriz);
    $colunasA = count($Matriz[1]);
    $colunasB = count($MatrizTransposta[1]);
    for ($i = 1; $i <= $linhasA; $i++) {
        for ($j = 1; $j <= $colunasB; $j++) {
            $MatrizProduto[$i][$j] = 0;
            for ($k = 1; $k <= $colunasA; $k++) {
                $MatrizProduto[$i][$j] += $Matriz[$i][$k] * $MatrizTransposta[$k][$j];
            }
        }
    }
}
#Gerando a Matriz Produto Visualmente
echo " <span>Matriz Produto(Original * Transposta): <table border='1'></span>";
for ($numeroLinha = 1; $numeroLinha <= $QuantidadeLinhas; $numeroLinha++) {
    echo "<tr>";
    for ($numeroColuna = 1; $numeroColuna <= $QuantidadeColunasTransposta; $numeroColuna++) {
        echo "<td>" . $MatrizProduto[$numeroLinha][$numeroColuna];
    }
    echo "</tr>";
}
echo "</table><br>";

#Multiplicação de um número real pela Matriz Original
$MatrizMultiplicada = array();
foreach ($Matriz as $chave => $valor) {
    foreach ($valor as $elemento => $val) {
        $MatrizMultiplicada[$chave][$elemento] = $val * $VariavelEscalar;
    }
}
echo " <span>Matriz Original * " . $VariavelEscalar . ": <table border='1'></span>";
for ($numeroLinha = 1; $numeroLinha <= $QuantidadeLinhas; $numeroLinha++) {
    echo "<tr>";
    for ($numeroColuna = 1; $numeroColuna <= $QuantidadeColunas; $numeroColuna++) {
        echo "<td>" . $MatrizMultiplicada[$numeroLinha][$numeroColuna];
    }
    echo "</tr>";
}
echo "</table><br>";




#Produzindo um Vetor que cada indice é a soma de uma linha da matriz original

$VetorSoma = array();
foreach ($Matriz as $linha) {
    $VetorSoma[] = array_sum($linha);
}

echo " <span>Vetor Soma Linhas Matriz: <table border='1'></span>";
echo "<tr>";
foreach ($VetorSoma as $indice => $soma) {
    echo "<td>" . $soma;
}
echo "</tr></table><br>";

#Soma de todos os elementos da Matriz
$SomaTotal = 0;

foreach ($VetorSoma as $value) {
    $SomaTotal += $value;
}
echo " <span>Soma Total dos elementos da Matriz Original: <table border='1'></span>";
echo "<tr>";
echo "<td>" . $SomaTotal;
echo "</tr></table><br>";

?>
