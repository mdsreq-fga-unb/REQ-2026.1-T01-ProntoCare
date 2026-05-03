# Cronograma e entregas

### 5 Cronograma e entregas

A partir da estratégia de desenvolvimento ScrumXP estabelecida, tem-se a seguinte proposta de cronograma. Cada sprint entrega um incremento funcional **integrado e testado** — não há sprints dedicadas exclusivamente a integração ou testes. Os RNFs críticos (segurança, privacidade, auditoria, integridade, conformidade) são tratados de forma **transversal** desde a Sprint 2, incorporados em cada funcionalidade à medida que são desenvolvidas.

| Sprint | Início | Fim | Objetivo principal | CPs | Entregas esperadas | RNFs transversais nesta sprint | Validação do cliente |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Sprint 1 | 19/04/2026 | 02/05/2026 | Configuração, arquitetura e cadastro de pacientes | CP1, CP6 | Ambiente configurado. Arquitetura inicial. Cadastro de pacientes com autenticação. **Entrega parcial 1:** módulo de cadastro funcional. | Controle de acesso básico; dados sensíveis protegidos no cadastro. | Validação do fluxo de cadastro e controle de acesso com o Dr. Rogério. |
| Sprint 2 | 03/05/2026 | 16/05/2026 | Prontuário SOAP e histórico clínico | CP1, CP3 | Estrutura SOAP. Integração com cadastro. Campos guiados por protocolos (CID-10). **Entrega parcial 2:** prontuário SOAP funcional. | Privacidade (acesso restrito ao perfil autorizado); início da auditoria de acesso aos registros. | Feedback sobre estrutura do SOAP, campos clínicos e fluxo de consulta. |
| Sprint 3 | 17/05/2026 | 30/05/2026 | Integridade documental e exportação de dados | CP4, CP7, CP9 | Cadeia de integridade criptográfica. Exportação de dados do prontuário (JSON, PDF). Log completo de auditoria. | Integridade documental verificável; rastreabilidade completa de operações; não repúdio. | Validação da verificação de integridade, logs de auditoria e exportação com o Dr. Rogério. |
| Sprint 4 | 31/05/2026 | 13/06/2026 | Operação offline e sincronização | CP5, CP2 | Armazenamento local (PWA/Dexie.js). Sincronização automática. Acesso em múltiplos contextos. **Entrega parcial 3:** operação offline funcional. | Integridade mantida offline; conflitos de sincronização tratados; privacidade no armazenamento local. | Teste do fluxo offline → online com o Dr. Rogério; validação em cenário de atendimento domiciliar. |
| Sprint 5 | 14/06/2026 | 27/06/2026 | Conformidade regulatória e emissão de documentos | CP8, CP9, CP6 | Perfil paciente. Controles de conformidade LGPD (consentimento, proteção). Emissão padronizada de receitas. **Entrega parcial 4:** MVP com conformidade básica. | Conformidade LGPD parcial aplicada; controle de acesso completo (médico + paciente); auditoria abrangente. | Validação dos perfis de acesso, controles de privacidade e documentos emitidos. |
| Sprint 6 | 28/06/2026 | 11/07/2026 | Homologação, testes de aceitação e entrega final | Todas | Revisão de todos os módulos. Testes de aceitação com o Dr. Rogério. Ajustes finais. **Entrega final:** MVP homologado (entrega acadêmica dia 13/07). | Revisão transversal de todos os RNFs críticos; testes de segurança e integridade ponta a ponta. | Homologação formal pelo Dr. Rogério e aprovação final do MVP. |

**Princípios do cronograma**

- **Duração padronizada**: as sprints têm duração fixa de exatas 2 semanas, conforme o manual da equipe, iniciando em 19/04/2026 e finalizando a última sprint em 11/07/2026 (com a entrega acadêmica na segunda-feira, 13/07/2026).
- **Integração contínua**: cada sprint entrega código integrado ao sistema existente, testado e funcional — não há sprint de "integração de módulos".
- **Testes a cada sprint**: TDD e testes de integração são executados em todas as sprints, não apenas ao final. A Sprint 6 foca em testes de aceitação com o cliente.
- **RNFs transversais**: segurança, privacidade, auditoria, integridade e conformidade são incorporados em cada funcionalidade desde a Sprint 2. A coluna "RNFs transversais" explicita quais aspectos são tratados em cada sprint.
- **Validação clínica contínua**: o Dr. Rogério valida funcionalidades ao final de cada sprint, não apenas na homologação final.
- **Cobertura das CPs**: todas as características de produto (CP1–CP9) estão mapeadas nas sprints, garantindo rastreabilidade entre o cronograma e a seção 2.3.

#### Histórico de Revisões

| Data | Versão | Descrição | Autor |
| :---: | :---: | :---: | :---: |
| 2026-02-10 | 0.1 | Elaboração inicial da visão do produto e projeto. | Prontuariantes |
| 2026-02-24 | 0.2 | Refinamento do escopo após reuniões de elicitação com o cliente. | Prontuariantes |
| 2026-03-10 | 0.3 | Definição da arquitetura documental e cadeia de autenticidade. | Prontuariantes |
| 2026-03-25 | 0.4 | Delimitação do escopo reduzido do MVP e revisão geral. | Prontuariantes |
| 2026-04-11 | 0.5 | Correções conforme revisão do professor; inclusão das seções 2.4 a 6. | Prontuariantes |
| 2026-04-13 | 0.6 | Últimas revisões antes da primeira entrega. | Prontuariantes |
| 2026-05-03 | 0.7 | Reestruturação do cronograma: cobertura de todas as CPs, RNFs transversais, eliminação de mini-cascata, integração e testes contínuos. | Prontuariantes |
| 2026-05-03 | 0.8 | Ajuste de datas das sprints (19/04 a 13/07) para se adequar ao semestre letivo atual. | Prontuariantes |
| 2026-05-03 | 0.9 | Condensação para 6 sprints de 2 semanas exatas, para manter consistência com as regras da equipe. | Prontuariantes |