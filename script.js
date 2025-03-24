function simular() {
  // Obter os valores dos campos de entrada
  const valor = parseFloat(document.getElementById('valor').value);
  const prazo = parseInt(document.getElementById('prazo').value);
  const jurosAno = parseFloat(document.getElementById('juros').value) / 100;

  // Calcular o prazo em meses
  const prazoMeses = prazo * 12;
  document.getElementById('prazo-meses').textContent = `Prazo (meses): ${prazoMeses}`;

  // Calcular a taxa de juros mensal
  const jurosMes = jurosAno / 12;
  document.getElementById('juros-mensais').textContent = `Juros ao mês: ${(jurosMes * 100).toFixed(2)}%`;

  // Calcular a amortização
  const amortizacao = valor / prazoMeses;

  let saldoDevedor = valor;
  let jurosAcumulados = 0;

  // Limpar a tabela
  const tabela = document.getElementById('tabela-prestacoes').getElementsByTagName('tbody')[0];
  tabela.innerHTML = '';

  // Loop para calcular as parcelas e gerar a tabela
  for (let mes = 1; mes <= prazoMeses; mes++) {
      // Calcular juros do mês
      const juros = saldoDevedor * jurosMes;
      // Calcular o total pago (amortização + juros)
      const total = amortizacao + juros;

      // Atualizar o saldo devedor
      saldoDevedor -= amortizacao;

      // Atualizar o total de juros acumulados
      jurosAcumulados += juros;

      // Criar uma nova linha para a tabela
      const row = tabela.insertRow();
      row.insertCell(0).textContent = mes;
      row.insertCell(1).textContent = amortizacao.toFixed(2);
      row.insertCell(2).textContent = juros.toFixed(2);
      row.insertCell(3).textContent = total.toFixed(2);
  }

  // Exibir os juros acumulados
  document.getElementById('juros-acumulados').textContent = `Juros acumulados: R$ ${jurosAcumulados.toFixed(2)}`;
}
