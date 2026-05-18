## **10 Backlog**
Esta seção descreve o backlog de produto (preliminar ou completo, dependendo do produto), que é uma lista priorizada de todas as funcionalidades e melhorias planejadas para o software. Também aborda a priorização dessas funcionalidades e o que será entregue no Produto Mínimo Viável (MVP).

### **10.1 Backlog Geral**

| **RF** | **User Story Derivada** | **RNFs relacionados** |
| :---: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------: |
| RF01-5 | Como médico, eu quero registrar novos pacientes com seus dados cadastrais básicos, para que eu possa iniciar e manter o acompanhamento do histórico clínico deles no sistema. | RNF01, RNF03, RNF06 |
| RF02-5 | Como médico, eu quero atualizar dados cadastrais ou inativar logicamente o registro de pacientes, para manter a base de dados sempre correta e atualizada, sem perder o histórico do paciente inativado. | RNF01, RNF03, RNF06 |
| RF03-4 | Como médico, eu quero visualizar uma listagem e buscar pacientes utilizando filtros (ex: nome, CPF), para localizar rapidamente o prontuário da pessoa que estou atendendo. | RNF03, RNF06 |
| RF04-4 | Como médico ou administrador da clínica, eu quero exportar a base de dados completa dos pacientes em formato JSON, para garantir a portabilidade das informações e evitar o aprisionamento tecnológico (vendor lock-in). | RNF01, RNF06 |
| RF05-5 | Como médico, eu quero criar prontuários preenchendo campos estruturados no padrão SOAP, para padronizar o registro assistencial e facilitar a interpretação segura do histórico clínico em consultas futuras. | RNF01, RNF03, RNF06 |
| RF06-4 | Como médico, eu quero ter uma área de texto livre para o registro detalhado da anamnese, para complementar a avaliação do paciente com relatos e observações que não se encaixam nos campos estruturados. | RNF01, RNF03, RNF06 |
| RF07-4 | Como médico, eu quero fazer o upload e anexar arquivos, como imagens e exames em PDF, diretamente à anamnese, para centralizar todos os laudos e resultados relevantes no mesmo ambiente do prontuário. | RNF01, RNF03, RNF06 |
| RF08-5 | Como médico, eu quero visualizar uma linha do tempo cronológica com todo o histórico clínico do paciente, para compreender rapidamente a evolução do quadro de saúde e os tratamentos anteriores durante a consulta. | RNF03, RNF06 |
| RF09-4 | Como médico, eu quero assinar digitalmente o prontuário utilizando um certificado padrão ICP-Brasil, para garantir a autoria, a integridade e a validade jurídica do atendimento médico realizado. | RNF01, RNF05 |
| RF10-4 | Como médico, eu quero gerar e exportar um arquivo PDF contendo o prontuário completo do paciente, para facilitar o compartilhamento físico, arquivamento ou a entrega do documento ao próprio paciente quando solicitado. | RNF06, RNF08 |
| RF11-5 | Como médico, eu quero visualizar um calendário semanal das minhas consultas, para ter uma visão clara e organizada da minha agenda e planejar meu dia de trabalho. | RNF03, RNF06 |
| RF12-5 | Como médico, eu quero agendar novas consultas e/ou teleconsultas, vinculando paciente, data e horário, para gerenciar a marcação de atendimentos de forma eficiente. | RNF03, RNF06 |
| RF13-5 | Como médico, eu quero listar as consultas do dia e alterar o status (ex: Agendado, Em atendimento, Finalizado), para acompanhar o fluxo de trabalho da clínica em tempo real. | RNF01, RNF03, RNF06 |
| RF14-5 | Como médico, eu quero elaborar receitas médicas digitais no sistema, para formalizar a prescrição de medicamentos de forma clara e padronizada. | RNF03, RNF06 |
| RF15-4 | Como médico, eu quero assinar digitalmente a receita utilizando um certificado padrão ICP-Brasil, para garantir a autenticidade e a validade legal da prescrição. | RNF01, RNF05 |
| RF16-5 | Como médico, eu quero salvar a receita gerada em formato PDF, para imprimi-la ou enviá-la ao paciente de forma segura. | RNF06, RNF08 |
| RF17-3 | Como médico, eu quero que o sistema analise a prescrição em tempo real, utilizando IA para alertar sobre interações medicamentosas, garantindo a segurança do paciente. | RNF03, RNF07 |
| RF18-4 | Como médico, eu quero manter um log visível de todas as receitas anteriormente prescritas ao paciente, para consultar o histórico de tratamentos ao longo do tempo. | RNF01, RNF03, RNF06 |
| RF19-3 | Como médico, eu quero que o sistema gere um link de videoconferência via Google Meet automaticamente ao agendar uma teleconsulta, para facilitar o início do atendimento remoto. | RNF06 |
| RF20-3 | Como médico, eu quero gerar o Termo de Consentimento (TCLE) e permitir sua assinatura digital (ICP-Brasil), para formalizar o aceite do paciente antes do atendimento e cumprir exigências legais. | RNF01, RNF05 |
| RF21-5 | Como administrador, eu quero gerenciar os perfis de acesso do sistema, para definir as permissões de cada usuário e garantir a segurança e o controle das informações. | RNF01, RNF02 |
| RF22-4 | Como médico ou administrador, eu quero visualizar, buscar e filtrar o histórico de logs de auditoria sobre dados sensíveis, para rastrear todas as operações e garantir a conformidade e segurança. | RNF01 |

### **10.2 Priorização do Backlog e MVP**

Para a priorização do backlog foram utilizados os seguintes critérios:

* VB = valor de negócio (1 a 5)
* CX = complexidade técnica (1 a 5)
* ES = esforço de implementação (1 a 5)

**i) Pontuação Técnica**

Para representar o “custo técnico” da US:

PT = (CX + ES) / 2

Assim, a pontuação técnica continua na mesma escala de 1 a 5.

**ii) Índice de Prioridade**

Para comparar valor versus custo técnico:

IP = VB / PT

Quanto maior o IP, maior a prioridade.

**iii) Interpretação**

* IP alto = muito valor de negócio para baixo/médio custo técnico
* IP médio = equilíbrio razoável
* IP baixo = pouco valor de negócio para alto custo técnico

**iv) Faixas de decisão**

* IP ≥ 1,50 → Alta prioridade
* IP entre 1,00 e 1,49 → Média prioridade
* IP < 1,00 → Baixa prioridade

A partir disso, foi gerada a seguinte tabela.

| **US** | **Descrição** | **VB** | **CX** | **ES** | **PT** | **IP** | **Quadrante** | **Prioridade sugerida** |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| US01 | registrar novos pacientes | 5 | 2 | 2 | 2.0 | 2.50 | 1 | Alta |
| US02 | Editar/inativar registros de pacientes | 5 | 2 | 2 | 2.0 | 2.00 | 1 | Alta |
| US03 | Buscar/listar pacientes | 5 | 2 | 2 | 2.0 | 2.50 | 1 | Alta |
| US04 | Exportar base de dados JSON | 3 | 3 | 2 | 2.5 | 1.20 | 3 | Média |
| US05 | Criar prontuário SOAP | 5 | 3 | 3 | 3.0 | 1.67 | 2 | Alta |
| US06 | Registrar anamnese | 5 | 2 | 2 | 2.0 | 2.50 | 1 | Alta |
| US07 | Anexar documentos/exames | 3 | 3 | 2 | 2.5 | 1.20 | 3 | Média |
| US08 | Exibir histórico clínico | 5 | 3 | 3 | 3.0 | 1.67 | 2 | Alta |
| US09 | Assinar prontuário digital | 4 | 3 | 4 | 3.5 | 1.14 | 2 | Média |
| US10 | Exportar prontuário PDF | 4 | 3 | 3 | 3.0 | 1.33 | 2 | Média |
| US11 | Exibir calendário semanal | 4 | 2 | 2 | 2.0 | 2.00 | 1 | Alta |
| US12 | Agendar consultas/teleconsultas | 4 | 3 | 3 | 3.0 | 1.33 | 2 | Média |
| US13 | Gerenciar status de consultas | 3 | 3 | 2 | 2.5 | 1.20 | 3 | Média |
| US14 | Elaborar receita digital | 4 | 3 | 3 | 3.0 | 1.33 | 2 | Média |
| US15 | Assinar receita digital | 5 | 3 | 3 | 3.0 | 1.67 | 2 | Alta |
| US16 | Emitir receita PDF | 3 | 3 | 2 | 2.5 | 1.20 | 3 | Média |
| US17 | Analisar interações por IA | 2 | 4 | 4 | 4.0 | 0.50 | 4 | Baixa |
| US18 | Manter histórico prescrições | 3 | 3 | 2 | 2.5 | 1.20 | 3 | Média |
| US19 | Integrar Google Meet | 2 | 3 | 3 | 3.0 | 0.67 | 4 | Baixa |
| US20 | Gerar/assinar TCLE | 5 | 3 | 3 | 3.0 | 1.67 | 2 | Alta |
| US21 | Gerenciar perfis de acesso | 3 | 3 | 3 | 3.0 | 1.00 | 4 | Média |
| US22 | Consultar logs de auditoria | 3 | 3 | 3 | 3.0 | 1.00 | 4 | Média |