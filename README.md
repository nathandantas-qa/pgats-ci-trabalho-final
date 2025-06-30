# Trabalho Final - Integração Contínua para Automação de Testes

Este repositório contém o trabalho final do módulo 04 - Integração Contínua para Automação de Testes, com foco na execução de testes automatizados e integração contínua usando GitHub Actions.

## 🚀 Como executar e acompanhar os testes no GitHub Actions

Este projeto utiliza uma pipeline configurada no GitHub Actions para executar os testes automaticamente.

### Para disparar a execução manualmente:

1. Acesse a aba **Actions** no seu repositório GitHub.
2. Selecione o workflow chamado **CI - Execução Manual de Testes Unitários**.
3. Clique no botão **Run workflow** para iniciar a execução manualmente.
4. Aguarde a conclusão do workflow e verifique o status dos testes.

### Para visualizar o relatório de testes gerado:

1. Após a execução, na página do workflow, desça até a seção **Artifacts**.
2. Baixe o arquivo `relatorio-mochawesome.zip`.
3. Extraia o conteúdo e abra o arquivo `mochawesome.html` no seu navegador para ver os detalhes dos testes.
