# Engenharia de requisitos

### 4 Engenharia de requisitos

A partir das informações apresentadas na seção 3, devem ser estabelecidas as atividades da Engenharia de Requisitos (ER), suas práticas e técnicas em alinhamento ao processo ScrumXP informado.

#### 4.1 Atividades e técnicas de ER e ScrumXP

##### Participação do cliente na Engenharia de Requisitos

O Dr. Rogério Sampaio, cliente e médico responsável pelo consultório, participa ativamente de todas as atividades críticas de ER ao longo do ciclo ScrumXP. Sua atuação não se restringe à validação ao final da sprint: ele é envolvido **antes, durante e após o desenvolvimento**, conforme detalhado abaixo.

| Atividade de ER | Forma de participação do Dr. Rogério |
| :--- | :--- |
| **Elicitação** | Entrevistas individuais e workshops para levantar necessidades clínicas, fluxos SOAP, protocolos de atendimento e restrições operacionais do consultório. |
| **Priorização** | Participa da priorização MoSCoW validando quais funcionalidades são clinicamente indispensáveis (Must have) e quais podem ser postergadas, com base em impacto assistencial. |
| **Validação de critérios de aceitação** | Antes da sprint, revisa e aprova os critérios de aceitação de cada user story, garantindo que reflitam corretamente as regras clínicas e o fluxo SOAP esperado. |
| **Revisão de RNFs clínicos** | Valida requisitos não-funcionais sensíveis ao domínio (ex.: tempo de resposta em consulta, legibilidade do prontuário, conformidade com normas do CFM e LGPD). |
| **Gestão de mudanças** | Qualquer alteração em requisitos clínicos, fluxo SOAP ou regras de negócio passa por aprovação do Dr. Rogério antes de ser incorporada ao backlog. |
| **Aprovação de segurança, privacidade e integridade documental** | Decisões que afetam a segurança do paciente, privacidade de dados (LGPD) e integridade da cadeia de autenticidade do prontuário requerem aprovação explícita do cliente. |

##### Cadeia de rastreabilidade

Todos os requisitos do ProntoCare seguem uma cadeia de rastreabilidade que conecta os objetivos estratégicos à entrega verificável:

> **OE (Objetivo Específico) → CP (Característica do Produto) → Requisito (RF/RNF) → User Story → Critério de Aceitação → Teste → Entrega**

Essa cadeia garante que cada funcionalidade entregue esteja justificada por um objetivo de negócio (OE), vinculada a uma característica do produto (CP) definida na seção 2.3, traduzida em requisitos funcionais ou não-funcionais, detalhada em user stories com critérios de aceitação verificáveis, coberta por testes e rastreável até a entrega na sprint correspondente. Por exemplo:

| Nível | Exemplo |
| :--- | :--- |
| OE | OE2 — Qualificar a precisão e a padronização do registro assistencial |
| CP | CP1 — Prontuário eletrônico estruturado (SOAP) |
| Requisito | RF: O sistema deve permitir o registro de atendimento no formato SOAP |
| User Story | Como médico, quero registrar o atendimento em campos S, O, A e P para padronizar o prontuário |
| Critério de aceitação | O registro só pode ser salvo se todos os quatro campos (S, O, A, P) estiverem preenchidos |
| Teste | Teste automatizado que verifica rejeição ao tentar salvar registro com campo vazio |
| Entrega | Sprint 2 — Módulo SOAP funcional |

##### Requisitos não-funcionais (RNFs) críticos

Dado o domínio clínico do ProntoCare, os seguintes RNFs são tratados como requisitos de primeira classe, analisados e validados desde o planejamento da release:

| Categoria de RNF | Descrição | Referência normativa |
| :--- | :--- | :--- |
| **Segurança** | Autenticação, controle de acesso baseado em papel, proteção contra acesso não autorizado a dados clínicos. | LGPD Art. 46; CFM Res. 1.638/2002 |
| **Privacidade** | Dados pessoais e sensíveis do paciente acessíveis apenas por atores autorizados; consentimento rastreável. | LGPD Arts. 7, 11 e 18 |
| **Integridade documental** | Cadeia de hash SHA-256 e assinatura digital garantindo que registros não sejam alterados após a assinatura. | CFM Res. 2.218/2018; SBIS |
| **Auditoria e rastreabilidade** | Log de todas as operações sobre dados sensíveis (quem, quando, o quê). | LGPD Art. 37; CFM Res. 1.638/2002 |
| **Disponibilidade e backup** | Operação offline via PWA; sincronização ao reconectar; backup periódico dos dados. | — |
| **Controle de acesso** | Perfis de acesso diferenciados (médico, paciente); princípio do menor privilégio. | LGPD Art. 46 |
| **Conformidade (LGPD/CFM)** | Aderência às normas de proteção de dados e exportação deles para outros sistemas e às resoluções do CFM sobre prontuário eletrônico. | LGPD; CFM Res. 1.638/2002 e 2.218/2018 |

Esses RNFs são elicitados, priorizados, verificados e validados com o Dr. Rogério ao longo de todo o ciclo, não apenas ao final da sprint.

**Planejamento da release**

*Elicitação e descoberta*

- **Entrevistas com o cliente:** entrevistas estruturadas com o Dr. Rogério para identificar necessidades do fluxo assistencial, prioridades do consultório, restrições operacionais e expectativas quanto à segurança e privacidade dos dados clínicos.
- **Análise de domínio clínico:** estudo do fluxo SOAP, protocolos clínicos e referências como o eSUS PEC, para embasar os requisitos com o contexto médico real. O Dr. Rogério valida se a análise reflete fielmente a prática do consultório.

*Análise e consenso*

- **Priorização MoSCoW com o cliente:** classificação das funcionalidades em Must have, Should have, Could have e Won't have, com participação direta do Dr. Rogério para assegurar que a priorização reflita o impacto clínico real.
- **Análise de custo/benefício:** avaliação do impacto de cada funcionalidade em relação ao esforço de desenvolvimento, considerando o prazo acadêmico.
- **Validação de RNFs clínicos:** o Dr. Rogério revisa os requisitos não-funcionais ligados a desempenho em consulta, legibilidade do prontuário, conformidade com normas do CFM e proteção de dados (LGPD).

*Declaração*

- **Temas, épicos e user stories:** organização dos requisitos em temas (ex.: prontuário, autenticidade) e user stories com critérios de aceitação, seguindo a cadeia de rastreabilidade OE → CP → requisito → user story → critério de aceitação → teste → entrega (ver cadeia de rastreabilidade acima).

*Verificação e validação*

- **Revisão de clareza, consistência e completude:** verificação antecipada dos requisitos declarados quanto à clareza das definições, consistência entre requisitos funcionais e não-funcionais, e completude frente aos objetivos específicos (OEs) e características do produto (CPs).
- **Verificação de RNFs críticos:** avaliação dos requisitos de segurança, privacidade, auditoria, integridade documental, disponibilidade, controle de acesso e conformidade (LGPD/CFM) quanto à verificabilidade — cada RNF deve ser mensurável e testável antes de avançar para a sprint.
- **Validação clínica com o Dr. Rogério:** o cliente valida se os requisitos de alto nível refletem fielmente as necessidades do consultório e se os RNFs sensíveis estão adequados à prática médica.

*Organização e atualização*

- **Estruturação inicial do backlog da release:** organização do backlog com os requisitos priorizados, épicos e user stories classificados por tema, com rastreabilidade aos OEs e CPs correspondentes.
- **Definição do baseline de RNFs:** registro formal dos RNFs críticos aceitos para a release, servindo como referência para verificação nas sprints subsequentes.

**Planejamento da sprint**

*Elicitação e descoberta*

- **Entrevistas e análise documental:** refinamento dos detalhes clínicos de cada funcionalidade com o Dr. Rogério antes do início da sprint, incluindo validação de fluxos SOAP, regras clínicas e cenários de uso.

*Análise e consenso*

- **Discussões em equipe, análise de tarefas:** análise de dependências técnicas entre módulos (ex.: cadeia de hash depende do módulo SOAP estar funcional).

*Verificação e validação*

- **Verificação pré-desenvolvimento:** antes de a sprint iniciar, cada user story é verificada quanto à clareza, consistência com os RNFs críticos, completude dos critérios de aceitação e viabilidade de teste. Histórias que envolvem segurança, privacidade, integridade documental ou conformidade são revisadas com atenção especial.
- **Validação de histórias e fluxos com o Dr. Rogério:** o cliente valida as user stories candidatas à sprint, especialmente critérios de aceitação de fluxo SOAP, regras clínicas e RNFs sensíveis, garantindo que estejam corretas antes do desenvolvimento.

*Declaração*

- **Critérios de aceitação detalhados, DoR:** garantia de que cada user story possui critérios de aceitação claros antes de entrar em desenvolvimento. **O Dr. Rogério revisa e aprova os critérios de aceitação**, especialmente aqueles relacionados ao fluxo SOAP, regras clínicas e RNFs sensíveis (segurança, privacidade, integridade documental), como parte do Definition of Ready.

*Organização e atualização*

- **Grooming do backlog com o cliente:** refinamento e repriorização do backlog com a equipe e o Dr. Rogério ao início de cada sprint. O cliente valida as user stories candidatas, confirma prioridades clínicas e aprova quaisquer mudanças de escopo ou novos requisitos.
- **Gestão de mudanças:** alterações em requisitos clínicos, fluxo SOAP ou regras de negócio identificadas durante o grooming passam por aprovação do Dr. Rogério antes de serem incorporadas ao backlog da sprint.

**Execução da sprint**

*Representação*

- **Protótipos e wireframes:** criação de protótipos de interface para funcionalidades como o formulário SOAP, a tela de histórico do paciente e o controle de acesso.

*Verificação e validação*

- **Checklist, revisão de critérios de aceitação:** verificação de que os critérios de aceitação foram atendidos antes de marcar uma user story como concluída.
- **Validação clínica intermediária:** em funcionalidades que envolvem o fluxo SOAP, regras clínicas ou decisões sobre segurança e privacidade, o Dr. Rogério é consultado durante a sprint para validar protótipos e comportamentos antes da entrega final.

*Verificação e validação*

- **DEEP (Detalhado, Estimado, Emergente, Priorizado):** verificação contínua de que os itens do backlog da sprint estão suficientemente detalhados, com estimativas realistas, refletindo entendimentos emergentes e priorizados conforme o valor clínico. Itens que não atendem aos critérios DEEP são sinalizados para refinamento antes de continuar.

*Organização e atualização*

- **Revisão do backlog da sprint:** ajuste contínuo do backlog durante a sprint conforme surgem novos entendimentos técnicos ou clínicos.

**Revisão da sprint**

*Verificação e validação*

- **Coleta de feedback, workshop de requisitos:** demonstração ao Dr. Rogério das funcionalidades entregues e coleta de feedback para orientar o próximo ciclo.
- **Aprovação de decisões de segurança e privacidade:** o Dr. Rogério aprova formalmente funcionalidades que afetam segurança do paciente, privacidade de dados (LGPD) e integridade da cadeia de autenticidade do prontuário antes da liberação.

*Declaração*

- **Incorporar feedback, negociação:** ajuste das user stories com base no feedback do cliente e negociação de prioridades para a sprint seguinte.

**Retrospectiva da sprint**

*Verificação e validação*

- **Avaliação do processo de ER:** a equipe verifica se as práticas de ER adotadas na sprint foram eficazes — se os requisitos estavam claros o suficiente, se os critérios de aceitação eram verificáveis, se os RNFs críticos foram adequadamente tratados e se houve falhas de comunicação com o cliente.
- **Análise de causas-raiz:** identificação das causas de defeitos, retrabalho ou mal-entendidos relacionados a requisitos, para prevenir recorrências.

**Planejamento da próxima release**

*Elicitação e descoberta*

- **Workshops com o cliente:** identificação de novos requisitos para a próxima release com base no produto entregue e nas necessidades emergentes do consultório.

*Análise e consenso*

- **Priorização MoSCoW, mapeamento de valor:** revisão estratégica das prioridades para a próxima release, considerando o feedback acumulado.

*Declaração*

- **Criação de épicos, user stories, INVEST:** user stories seguindo o modelo INVEST para objetivos da próxima release.

*Verificação e validação*

- **DEEP do backlog da release:** verificação de que o backlog da próxima release atende aos critérios DEEP (Detalhado, Estimado, Emergente, Priorizado), com atenção especial à verificabilidade dos RNFs críticos.

*Organização e atualização*

- **Revisão e baseline do backlog da release:** backlog revisado, priorizado e preparado para o início do próximo ciclo de desenvolvimento, com rastreabilidade atualizada (OE → CP → requisito → US).

#### 4.2 Engenharia de requisitos e o ScrumXP

As atividades da ER, suas práticas e técnicas são mapeadas a partir das fases do ScrumXP, conforme a tabela a seguir. A coluna **Participação do cliente** indica como o Dr. Rogério atua em cada atividade.

| Fases do ScrumXP | Atividades da ER | Prática | Técnica | Participação do cliente | Resultado esperado |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Planejamento da release | Elicitação e descoberta | Levantamento de requisitos | Entrevistas, brainstorming, análise de domínio clínico | Dr. Rogério é entrevistado e valida a análise de domínio | Requisitos de alto nível identificados; objetivos da release definidos. |
| Planejamento da release | Análise e consenso | Priorização de requisitos | Priorização MoSCoW, análise custo/benefício | Participa da priorização validando impacto clínico; revisa RNFs clínicos | Escopo e funcionalidades críticas priorizadas. |
| Planejamento da release | Declaração | Registro dos requisitos | Temas, épicos e user stories (com rastreabilidade OE → CP → requisito → US) | Valida se as user stories refletem as necessidades clínicas | User stories rastreáveis aos OEs e CPs. |
| Planejamento da release | Verificação e validação | Revisão antecipada de requisitos | Revisão de clareza, consistência, completude; verificação de RNFs críticos | Valida RNFs de segurança, privacidade, integridade e conformidade | Requisitos verificados e validados antes das sprints. |
| Planejamento da release | Organização e atualização | Estruturação do backlog | Backlog inicial, baseline de RNFs | Aprova baseline de RNFs clínicos | Backlog estruturado com rastreabilidade e RNFs definidos. |
| Planejamento da sprint | Elicitação e descoberta | Refinamento de requisitos | Entrevistas, análise documental | Refina detalhes de fluxo SOAP, regras clínicas e cenários de uso | Requisitos refinados para a sprint. |
| Planejamento da sprint | Análise e consenso | Análise de dependências | Discussões em equipe, análise de tarefas | Consultado sobre dependências clínicas entre funcionalidades | Consenso sobre viabilidade e priorização. |
| Planejamento da sprint | Declaração | Critérios de aceitação | Critérios detalhados, DoR | **Revisa e aprova critérios de aceitação** (fluxo SOAP, regras clínicas, RNFs sensíveis) | User stories com critérios de aceitação validados pelo cliente. |
| Planejamento da sprint | Verificação e validação | Verificação pré-desenvolvimento | Revisão de clareza, consistência com RNFs, verificabilidade | Valida histórias, fluxos SOAP e RNFs sensíveis antes do desenvolvimento | User stories verificadas e aprovadas para desenvolvimento. |
| Planejamento da sprint | Organização e atualização | Refinamento do backlog | Grooming do backlog | Confirma prioridades clínicas; aprova mudanças de escopo | Backlog refinado e priorizado com aval clínico. |
| Execução da sprint | Representação | Criação de protótipos | Protótipos, wireframes | Valida protótipos de fluxo SOAP e interfaces clínicas | Protótipos que orientam a implementação. |
| Execução da sprint | Verificação e validação | Validação de requisitos | Checklist, revisão de critérios | Consultado para validação clínica intermediária em funcionalidades sensíveis | Requisitos validados conforme critérios acordados. |
| Execução da sprint | Verificação e validação | DEEP do backlog | DEEP (Detalhado, Estimado, Emergente, Priorizado) | Aprova mudanças em requisitos clínicos (gestão de mudanças) | Backlog verificado e atualizado conforme critérios DEEP. |
| Execução da sprint | Organização e atualização | Revisão do backlog | Revisão do backlog da sprint | Informado de ajustes no backlog | Backlog atualizado e alinhado. |
| Revisão da sprint | Verificação e validação | Demonstração ao cliente | Coleta de feedback, workshop de requisitos | Avalia funcionalidades entregues; **aprova decisões de segurança, privacidade e integridade documental** | Funcionalidades verificadas; feedback coletado; aprovação formal de itens sensíveis. |
| Revisão da sprint | Declaração | Atualização de user stories | Incorporar feedback, negociação | Negocia ajustes e prioridades para o próximo ciclo | User stories ajustadas conforme feedback. |
| Retrospectiva da sprint | Verificação e validação | Avaliação do processo de ER | Análise de causas-raiz, revisão de eficácia das práticas de ER | — (atividade interna da equipe) | Causas de defeitos e retrabalho identificadas; melhorias no processo de ER definidas. |
| Planejamento da próxima release | Elicitação e descoberta | Identificação de novos requisitos | Workshops, análise de domínio clínico | Workshops com o Dr. Rogério para novos requisitos | Requisitos revisados com base no feedback. |
| Planejamento da próxima release | Análise e consenso | Priorização estratégica | Priorização MoSCoW, mapeamento de valor | Valida prioridades clínicas da nova release | Requisitos priorizados para a próxima release. |
| Planejamento da próxima release | Declaração | Épicos e user stories | Criação de épicos, user stories, INVEST | Valida épicos e user stories antes da declaração final | User stories para objetivos da próxima release. |
| Planejamento da próxima release | Verificação e validação | DEEP do backlog da release | DEEP (Detalhado, Estimado, Emergente, Priorizado) | Valida que RNFs críticos são verificáveis | Backlog verificado conforme critérios DEEP. |
| Planejamento da próxima release | Organização e atualização | Revisão do backlog | Revisão e baseline do backlog da release | Aprova backlog revisado para o próximo ciclo | Backlog preparado com rastreabilidade atualizada. |

#### Histórico de Revisões

| Data | Versão | Descrição | Autor |
| :---: | :---: | :---: | :---: |
| 2026-02-10 | 0.1 | Elaboração inicial da visão do produto e projeto. | Prontuariantes |
| 2026-02-24 | 0.2 | Refinamento do escopo após reuniões de elicitação com o cliente. | Prontuariantes |
| 2026-03-10 | 0.3 | Definição da arquitetura documental e cadeia de autenticidade. | Prontuariantes |
| 2026-03-25 | 0.4 | Delimitação do escopo reduzido do MVP e revisão geral. | Prontuariantes |
| 2026-04-11 | 0.5 | Correções conforme revisão do professor; inclusão das seções 2.4 a 6. | Prontuariantes |
| 2026-04-13 | 0.6 | Últimas revisões antes da primeira entrega. | Prontuariantes |
| 2026-05-03 | 0.7 | Reestruturação da seção 4: rastreabilidade OE→CP→US, V&V antecipada, RNFs estruturados, correção de categorias (DEEP, retrospectiva), participação do cliente. | Prontuariantes |