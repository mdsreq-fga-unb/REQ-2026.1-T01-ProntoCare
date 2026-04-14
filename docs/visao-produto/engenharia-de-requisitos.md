# Engenharia de requisitos

### 4 Engenharia de requisitos

A partir das informações apresentadas na seção 3, devem ser estabelecidas as atividades da Engenharia de Requisitos (ER), suas práticas e técnicas em alinhamento ao processo ScrumXP informado.

#### 4.1 Atividades e técnicas de ER e ScrumXP

**Planejamento da release**

*Elicitação e descoberta*

- **Entrevistas:** entrevistas com o Dr. Rogério para identificar necessidades do fluxo assistencial, prioridades do consultório e restrições operacionais.
- **Análise de domínio clínico:** estudo do fluxo SOAP, protocolos clínicos e referências como o eSUS PEC, para embasar os requisitos com o contexto médico real.

*Análise e consenso*

- **Priorização MoSCoW:** classificação das funcionalidades em Must have, Should have, Could have e Won't have, orientando o recorte do MVP.
- **Análise de custo/benefício:** avaliação do impacto de cada funcionalidade em relação ao esforço de desenvolvimento, considerando o prazo acadêmico.

*Declaração*

- **Temas, épicos e user stories:** organização dos requisitos em temas (ex.: prontuário, autenticidade) e user stories com critérios de aceitação.

**Planejamento da sprint**

*Elicitação e descoberta*

- **Entrevistas e análise documental:** refinamento dos detalhes clínicos de cada funcionalidade com o cliente antes do início da sprint.

*Análise e consenso*

- **Discussões em equipe, análise de tarefas:** análise de dependências técnicas entre módulos (ex.: cadeia de hash depende do módulo SOAP estar funcional).

*Declaração*

- **Critérios de aceitação detalhados, DoR:** garantia de que cada user story possui critérios de aceitação claros antes de entrar em desenvolvimento.

*Organização e atualização*

- **Grooming do backlog:** refinamento e repriorização do backlog com a equipe e o cliente ao início de cada sprint.

**Execução da sprint**

*Representação*

- **Protótipos e wireframes:** criação de protótipos de interface para funcionalidades como o formulário SOAP, a tela de histórico do paciente e o controle de acesso.

*Verificação e validação*

- **Checklist, revisão de critérios de aceitação:** verificação de que os critérios de aceitação foram atendidos antes de marcar uma user story como concluída.

*Organização e atualização*

- **Revisão do backlog da sprint, DEEP:** ajuste contínuo do backlog durante a sprint conforme surgem novos entendimentos técnicos ou clínicos.

**Revisão da sprint**

*Verificação e validação*

- **Coleta de feedback, workshop de requisitos:** demonstração ao Dr. Rogério das funcionalidades entregues e coleta de feedback para orientar o próximo ciclo.

*Declaração*

- **Incorporar feedback, negociação:** ajuste das user stories com base no feedback do cliente e negociação de prioridades para a sprint seguinte.

**Retrospectiva da sprint**

*Análise e consenso*

- **Discussões em grupo, análise de causas:** identificação de pontos de melhoria no processo de ER adotado pela equipe ao longo da sprint.

*Organização e atualização*

- **Atualização do workflow, resolução de conflito:** ajustes no processo de trabalho para aumentar a eficiência do ciclo seguinte.

**Planejamento da próxima release**

*Elicitação e descoberta*

- **Workshops com o cliente:** identificação de novos requisitos para a próxima release com base no produto entregue e nas necessidades emergentes do consultório.

*Análise e consenso*

- **Priorização MoSCoW, mapeamento de valor:** revisão estratégica das prioridades para a próxima release, considerando o feedback acumulado.

*Declaração*

- **Criação de épicos, user stories, INVEST:** user stories seguindo o modelo INVEST para objetivos da próxima release.

*Organização e atualização*

- **Revisão do backlog da release, DEEP:** backlog revisado e preparado para o início do próximo ciclo de desenvolvimento.

#### 4.2 Engenharia de requisitos e o ScrumXP

As atividades da ER, suas práticas e técnicas são mapeadas a partir das fases do ScrumXP, conforme a tabela a seguir.

| Fases do ScrumXP | Atividades da ER | Prática | Técnica | Resultado esperado |
| :--- | :--- | :--- | :--- | :--- |
| Planejamento da release | Elicitação e descoberta | Levantamento de requisitos | Entrevistas, brainstorming, análise de domínio clínico | Requisitos de alto nível identificados; objetivos da release definidos. |
| Planejamento da release | Análise e consenso | Priorização de requisitos | Priorização MoSCoW, análise custo/benefício | Escopo e funcionalidades críticas priorizadas. |
| Planejamento da release | Declaração | Registro dos requisitos | Temas, épicos e user stories | User stories que descrevem os requisitos da release. |
| Planejamento da sprint | Elicitação e descoberta | Refinamento de requisitos | Entrevistas, análise documental | Requisitos refinados para a sprint. |
| Planejamento da sprint | Análise e consenso | Análise de dependências | Discussões em equipe, análise de tarefas | Consenso sobre viabilidade e priorização. |
| Planejamento da sprint | Declaração | Critérios de aceitação | Critérios detalhados, DoR | User stories com critérios de aceitação claros. |
| Planejamento da sprint | Organização e atualização | Refinamento do backlog | Grooming do backlog | Backlog refinado e priorizado. |
| Execução da sprint | Representação | Criação de protótipos | Protótipos, wireframes | Protótipos que orientam a implementação. |
| Execução da sprint | Verificação e validação | Validação de requisitos | Checklist, revisão de critérios | Requisitos validados conforme critérios acordados. |
| Execução da sprint | Organização e atualização | Revisão do backlog | Revisão do backlog da sprint, DEEP | Backlog atualizado e alinhado. |
| Revisão da sprint | Verificação e validação | Demonstração ao cliente | Coleta de feedback, workshop de requisitos | Funcionalidades verificadas; feedback coletado. |
| Revisão da sprint | Declaração | Atualização de user stories | Incorporar feedback, negociação | User stories ajustadas conforme feedback. |
| Retrospectiva da sprint | Análise e consenso | Revisão do processo | Discussões em grupo, análise de causas | Melhorias identificadas e aplicadas ao processo. |
| Retrospectiva da sprint | Organização e atualização | Ajustes no workflow | Atualização do workflow, resolução de conflito | Processo ajustado para maior eficiência. |
| Planejamento da próxima release | Elicitação e descoberta | Identificação de novos requisitos | Workshops, análise de domínio clínico | Requisitos revisados com base no feedback. |
| Planejamento da próxima release | Análise e consenso | Priorização estratégica | Priorização MoSCoW, mapeamento de valor | Requisitos priorizados para a próxima release. |
| Planejamento da próxima release | Declaração | Épicos e user stories | Criação de épicos, user stories, INVEST | User stories para objetivos da próxima release. |
| Planejamento da próxima release | Organização e atualização | Revisão do backlog | Revisão do backlog da release, DEEP | Backlog preparado para início da próxima fase. |

#### Histórico de Revisões

| Data | Versão | Descrição | Autor |
| :---: | :---: | :---: | :---: |
| 2026-02-10 | 0.1 | Elaboração inicial da visão do produto e projeto. | Prontuariantes |
| 2026-02-24 | 0.2 | Refinamento do escopo após reuniões de elicitação com o cliente. | Prontuariantes |
| 2026-03-10 | 0.3 | Definição da arquitetura documental e cadeia de autenticidade. | Prontuariantes |
| 2026-03-25 | 0.4 | Delimitação do escopo reduzido do MVP e revisão geral. | Prontuariantes |
| 2026-04-11 | 0.5 | Correções conforme revisão do professor; inclusão das seções 2.4 a 6. | Prontuariantes |
| 2026-04-13 | 0.6 | Últimas revisões antes da primeira entrega. | Prontuariantes |