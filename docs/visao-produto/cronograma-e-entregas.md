# Cronograma e entregas

### 5 Cronograma e entregas

A partir da estratégia de desenvolvimento ScrumXP estabelecida, tem-se a seguinte proposta de cronograma. Cada sprint entrega um incremento funcional **integrado e testado** — não há sprints dedicadas exclusivamente a integração ou testes. Os RNFs críticos (segurança, privacidade, auditoria, integridade, conformidade) são tratados de forma **transversal** desde a Sprint 2, incorporados em cada funcionalidade à medida que são desenvolvidas.

| Sprint | Início | Fim | Objetivo principal | CPs | Entregas esperadas | RNFs transversais nesta sprint | Validação do cliente |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Sprint 0 | 19/04/2026 | 02/05/2026 | Configuração e arquitetura inicial | - | Ambiente configurado. Arquitetura inicial. | - | N/A (Validação interna) |
| Sprint 1 | 03/05/2026 | 09/05/2026 | Cadastro de pacientes | CP1, CP6 | Cadastro de pacientes com autenticação. **Entrega parcial 1:** módulo de cadastro funcional. | Controle de acesso básico; dados sensíveis protegidos no cadastro. | Validação do fluxo de cadastro e controle de acesso com o Dr. Rogério. |
| Sprint 2 | 10/05/2026 | 16/05/2026 | Prontuário SOAP (Estrutura base) | CP1 | Estrutura SOAP inicial. Integração com cadastro. | Privacidade (acesso restrito ao perfil autorizado). | Feedback sobre estrutura base do SOAP. |
| Sprint 3 | 17/05/2026 | 23/05/2026 | Histórico clínico e protocolos | CP3 | Campos guiados por protocolos (CID-10). **Entrega parcial 2:** prontuário SOAP funcional. | Início da auditoria de acesso aos registros. | Feedback sobre campos clínicos e fluxo de consulta. |
| Sprint 4 | 24/05/2026 | 30/05/2026 | Integridade documental (Cadeia criptográfica) | CP4 | Cadeia de integridade criptográfica. | Integridade documental verificável. | Validação da verificação de integridade. |
| Sprint 5 | 31/05/2026 | 06/06/2026 | Exportação de dados e Auditoria | CP7, CP9 | Exportação de dados do prontuário (JSON, PDF). Log completo de auditoria. | Rastreabilidade completa de operações; não repúdio. | Validação dos logs de auditoria e exportação com o Dr. Rogério. |
| Sprint 6 | 07/06/2026 | 13/06/2026 | Operação offline (Armazenamento local) | CP5 | Armazenamento local (PWA/Dexie.js). | Privacidade no armazenamento local. | Validação do funcionamento básico offline. |
| Sprint 7 | 14/06/2026 | 20/06/2026 | Sincronização automática | CP2 | Sincronização automática. Acesso em múltiplos contextos. **Entrega parcial 3:** operação offline funcional. | Integridade mantida offline; conflitos de sincronização tratados. | Teste do fluxo offline → online com o Dr. Rogério; validação em cenário de atendimento domiciliar. |
| Sprint 8 | 21/06/2026 | 27/06/2026 | Conformidade LGPD (Consentimento) | CP8 | Perfil paciente. Controles de conformidade LGPD (consentimento, proteção). | Conformidade LGPD parcial aplicada; controle de acesso (paciente). | Validação dos perfis de acesso e controles de privacidade. |
| Sprint 9 | 28/06/2026 | 04/07/2026 | Emissão de documentos | CP9, CP6 | Emissão padronizada de receitas. **Entrega parcial 4:** MVP com conformidade básica. | Auditoria abrangente. | Validação dos documentos emitidos. |
| Sprint 10 | 05/07/2026 | 11/07/2026 | Homologação, testes e entrega final | Todas | Revisão geral e ajustes finais. **Entrega final:** MVP homologado (entrega acadêmica dia 13/07). | Validação final de segurança, integridade e todos os RNFs críticos. | Homologação formal pelo Dr. Rogério e aprovação final do MVP. |

**Princípios do cronograma**

- **Duração padronizada**: a Sprint 0 tem duração de 2 semanas (para ambientação e infraestrutura inicial). As demais sprints (1 a 10) têm duração fixa de exata 1 semana, iniciando em 19/04/2026 e finalizando a última sprint em 11/07/2026 (com a entrega acadêmica na segunda-feira, 13/07/2026).
- **Integração contínua**: cada sprint entrega código integrado ao sistema existente, testado e funcional — não há sprint de "integração de módulos".
- **Testes a cada sprint**: TDD e testes de integração são executados em todas as sprints, não apenas ao final. As Sprints 9 e 10 focam em testes de aceitação com o cliente.
- **RNFs transversais**: segurança, privacidade, auditoria, integridade e conformidade são incorporados em cada funcionalidade desde a Sprint 1. A coluna "RNFs transversais" explicita quais aspectos são tratados em cada sprint.
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
| 2026-05-04 | 1.0 | Ajuste para sprints de 1 semana (exceto Sprint 0 com 2 semanas). | Prontuariantes |