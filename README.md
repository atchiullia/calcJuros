# Simulação de Financiamento - Sistema de Amortizações Constantes (SAC)

Este projeto simula o cálculo de um financiamento utilizando o Sistema de Amortizações Constantes (SAC), onde o valor da amortização é constante e a parcela total diminui ao longo do tempo devido à redução dos juros sobre o saldo devedor.

### Objetivos

- Calcular e exibir o valor das primeiras prestações de um financiamento.
- Exibir o valor total pago em juros ao longo do financiamento.
- Gerar uma tabela com os detalhes de cada prestação, incluindo amortização, juros e total pago.

### Tecnologias Utilizadas

- **HTML**: Estrutura da página.
- **CSS**: Estilização da interface.
- **JavaScript**: Lógica para calcular o financiamento e atualizar a interface de forma dinâmica.

### Funcionalidades

1. **Entrada de Dados**:
   - **Valor do financiamento**: Campo numérico para o valor total a ser financiado.
   - **Prazo (anos)**: Campo numérico para o número de anos do financiamento.
   - **Juros ao ano**: Campo numérico para a taxa de juros anual.

2. **Botão Simular**:
   - Ao clicar no botão, os cálculos são realizados e os seguintes resultados são exibidos:
     - **Prazo (meses)**: O prazo total do financiamento em meses.
     - **Juros ao mês**: Taxa de juros mensal calculada a partir da taxa de juros anual.
     - **Juros acumulados**: O valor total de juros pagos ao longo do financiamento.
     - **Tabela de Prestações**: Tabela com o valor de cada prestação, detalhando o valor pago como amortização, juros e o total (amortização + juros).

### Como Usar

1. **Clone este repositório** para sua máquina local:

    ```bash
    git clone https://github.com/seu-usuario/simulacao-financiamento-sac.git
    ```

2. **Abra o arquivo `index.html`** em seu navegador.

3. **Preencha os campos** com os valores desejados:
    - Valor do financiamento
    - Prazo em anos
    - Juros ao ano (em formato decimal, por exemplo, 8% ao ano é 0.08)

4. **Clique no botão "Simular"** para ver os resultados, incluindo:
    - O prazo total em meses.
    - O valor dos juros ao mês.
    - O total de juros pagos ao longo do financiamento.
    - Uma tabela com as prestações detalhadas.

### Exemplo

Se você preencher o seguinte:

- **Valor**: R$ 200.000
- **Prazo**: 20 anos
- **Juros ao ano**: 8% (0,08)

Ao clicar em "Simular", os resultados podem ser exibidos da seguinte forma:

- **Prazo (meses)**: 240 meses
- **Juros ao mês**: 0,00612287
- **Juros acumulados**: R$ 155.000
- **Tabela de Prestações**: Uma tabela com a divisão dos valores de amortização, juros e total pago por cada prestação.

### Estrutura de Arquivos

```plaintext
simulacao-financiamento-sac/
├── index.html      # Arquivo HTML com a estrutura da página
├── style.css       # Arquivo CSS com a estilização da página
└── script.js       # Arquivo JavaScript com a lógica de cálculos e interação com o DOM
