# Cronograma e entregas

### 5 Cronograma e entregas

A partir da estratégia de desenvolvimento de software estabelecida, tem-se a seguinte proposta de cronograma, suas fases e resultados esperados. O planejamento deverá ser atualizado ao longo de cada sprint.

| Sprint | Início | Fim | Objetivo principal | Entregas esperadas | Validação do cliente |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Sprint 1 | 10/03/2026 | 23/03/2026 | Configuração e planejamento | Definição do backlog inicial. Configuração do ambiente de desenvolvimento. Definição da stack tecnológica. Arquitetura inicial do sistema. | Revisão do backlog e confirmação de prioridades com o cliente. |
| Sprint 2 | 24/03/2026 | 06/04/2026 | Módulo de cadastro de pacientes (CP1 — fase 1) | Cadastro, edição e consulta de pacientes. Entrega parcial 1: módulo de cadastro funcional. | Validação do fluxo de cadastro pelo cliente (Dr. Rogério). |
| Sprint 3 | 07/04/2026 | 20/04/2026 | Prontuário SOAP — estrutura (CP1 — fase 2) | Folha de rosto e estrutura do prontuário SOAP. Integração entre cadastro de pacientes e prontuário. | Feedback sobre estrutura do SOAP e campos clínicos. |
| Sprint 4 | 21/04/2026 | 04/05/2026 | Prontuário SOAP — completo + entrega parcial 2 | Registro completo de atendimentos no formato SOAP. Entrega parcial 2: prontuário SOAP funcional e integrado. | Validação do prontuário SOAP completo com o cliente. |
| Sprint 5 | 05/05/2026 | 18/05/2026 | Cadeia de autenticidade (CP4) | Hash SHA-256 por registro de atendimento. Cadeia sequencial de prontuários. | Validação da integridade criptográfica dos registros. |
| Sprint 6 | 19/05/2026 | 01/06/2026 | Operação offline (CP5) | Armazenamento local dos prontuários. Sincronização automática ao recuperar conectividade. Entrega parcial 3: modo offline funcional. | Teste do fluxo offline → online com o cliente. |
| Sprint 7 | 02/06/2026 | 15/06/2026 | Controle de acesso e compartilhamento (CP6) | Perfil médico (acesso pleno) e perfil paciente (acesso restrito). Mecanismo de compartilhamento entre profissionais. | Validação dos perfis de acesso e permissões. |
| Sprint 8 | 16/06/2026 | 29/06/2026 | Integração completa e testes | Integração de todos os módulos do MVP. Testes de sistema e correções. Entrega parcial 4: MVP integrado. | Feedback sobre o sistema integrado e performance. |
| Sprint 9 | 30/06/2026 | 13/07/2026 | Homologação e entrega final | Testes de aceitação com o cliente. Ajustes finais com base no feedback. Entrega final: MVP homologado. | Homologação pelo cliente (Dr. Rogério) e aprovação final do MVP. |

**Considerações importantes**

- Cada sprint tem duração de duas semanas, de 10/03/2026 a 13/07/2026.
- Ao final de cada sprint, haverá reunião de revisão com o cliente para validar funcionalidades entregues e coletar feedback.
- As entregas parciais marcadas no cronograma serão disponibilizadas em ambiente funcional para validação pelo cliente.
