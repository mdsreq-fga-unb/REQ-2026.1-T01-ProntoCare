# Estratégias de engenharia de software

### 3 Estratégias de engenharia de software

A partir das informações apresentadas nas seções 1 e 2, devem ser tomadas as decisões no que diz respeito às estratégias de engenharia de software a serem utilizadas.

#### 3.1 Estratégia priorizada

- **Abordagem de desenvolvimento de software:** Ágil
- **Ciclo de vida:** Incremental e iterativo
- **Processo de engenharia de software:** ScrumXP

#### 3.2 Quadro comparativo

O quadro a seguir compara características do OpenUP e do ScrumXP relevantes para a escolha do processo do ProntoCare. Ambos são processos iterativos e incrementais; as diferenças residem na ênfase e na forma de organização do trabalho.

| Características | OpenUP | ScrumXP |
| :--- | :--- | :--- |
| Abordagem geral | Iterativo, incremental e orientado a arquitetura. Organiza o trabalho em fases (Iniciação, Elaboração, Construção, Transição) com marcos definidos. | Iterativo e incremental, organizado em sprints curtos (2–4 semanas) com entregas frequentes e adaptação contínua. |
| Foco em arquitetura | Forte ênfase em definir a arquitetura nas fases iniciais para mitigar riscos técnicos precocemente. | Arquitetura evolui ao longo das sprints; decisões arquiteturais são tomadas conforme a necessidade emerge (design incremental). |
| Estrutura de processos | Fases sequenciais com iterações internas; cada fase tem objetivos e critérios de saída específicos. | Sprints uniformes com cerimônias fixas (planejamento, daily, revisão, retrospectiva) e práticas técnicas contínuas do XP. |
| Flexibilidade de requisitos | Requisitos podem evoluir entre iterações, mas a arquitetura central é estabilizada na Elaboração. | Alta flexibilidade para mudanças a cada sprint; backlog repriorizado continuamente com o cliente. |
| Colaboração com o cliente | Envolvimento do cliente em todas as fases, com ênfase maior na Iniciação, Elaboração e Transição. | Envolvimento constante e intenso; feedback ao final de cada sprint; cliente participa de priorização e validação contínuas. |
| Qualidade técnica | Qualidade assegurada por revisões de arquitetura, validações incrementais e testes ao longo das iterações. | Práticas técnicas explícitas do XP: TDD, pair programming, refatoração contínua e integração contínua. |
| Práticas de desenvolvimento | Papéis bem definidos (analista, arquiteto, desenvolvedor, testador); práticas guiadas por disciplinas. | Equipe multifuncional com práticas técnicas prescritas (TDD, CI, pair programming, refatoração). |
| Documentação | Documentação formal por fase (visão, arquitetura, requisitos, plano de testes). | Documentação direcionada ao que agrega valor. No ProntoCare, isso inclui documentação de requisitos de segurança, rastreabilidade e conformidade exigidos pelo domínio clínico. |
| Escalabilidade | Aplicável a projetos de portes variados; estrutura de fases facilita equipes maiores. | Mais indicado para equipes pequenas e colaborativas. |
| Adaptação ao ProntoCare | Adequado para projetos com requisitos arquiteturais complexos desde o início e equipes com papéis especializados. | Ideal para equipe pequena (6 membros), prazo acadêmico curto e validação frequente com o cliente médico, combinando agilidade com práticas técnicas rigorosas. |

#### 3.3 Composição do ScrumXP no ProntoCare

O ScrumXP adotado no projeto combina o framework de gestão do **Scrum** com as práticas técnicas do **Extreme Programming (XP)**. A tabela a seguir explicita quais práticas vêm de cada origem:

| Origem | Prática | Aplicação no ProntoCare |
| :--- | :--- | :--- |
| **Scrum** | Sprints (2 semanas) | Ciclos quinzenais de entrega incremental com validação do Dr. Rogério. |
| **Scrum** | Product Backlog e Sprint Backlog | Backlog priorizado com o cliente; user stories rastreáveis aos OEs e CPs. |
| **Scrum** | Planejamento da sprint | Seleção e refinamento de user stories com validação clínica prévia. |
| **Scrum** | Revisão da sprint | Demonstração ao cliente e aprovação de funcionalidades, incluindo itens de segurança e privacidade. |
| **Scrum** | Retrospectiva da sprint | Avaliação do processo de ER e identificação de causas-raiz de defeitos. |
| **Scrum** | Daily standup | Sincronização diária da equipe sobre progresso e impedimentos. |
| **XP** | TDD (Test-Driven Development) | Testes escritos antes do código para garantir cobertura de regras clínicas e critérios de aceitação. |
| **XP** | Integração contínua | Build e testes automáticos a cada commit, prevenindo regressões em funcionalidades críticas. |
| **XP** | Pair programming | Revisão em tempo real, especialmente em módulos sensíveis (cadeia de hash, controle de acesso). |
| **XP** | Refatoração contínua | Melhoria incremental do código sem alteração de comportamento, mantendo a base sustentável. |
| **XP** | Design simples / incremental | Arquitetura evolui sprint a sprint; decisões de design tomadas no momento adequado. |

#### 3.4 Justificativa

Com base nas características do projeto e nos desafios do ProntoCare, o ScrumXP é o processo mais adequado pelos seguintes motivos:

- **Flexibilidade com disciplina** — o prazo acadêmico exige sprints quinzenais com entregas incrementais e feedback constante do Dr. Rogério, único ponto de validação clínica do produto. Ao mesmo tempo, o domínio clínico exige documentação direcionada (requisitos de segurança, rastreabilidade, conformidade) que vai além do mínimo típico de projetos ágeis.
- **Práticas técnicas complementares à segurança** — TDD e integração contínua contribuem para a qualidade do código e a prevenção de regressões, mas a integridade clínica e documental do ProntoCare exige também requisitos explícitos de segurança, auditoria (logs de acesso), controle de acesso baseado em papéis, backup, criptografia (SHA-256, assinatura digital) e validação de regras de negócio clínicas. Essas garantias são tratadas como requisitos não-funcionais críticos na seção 4.
- **Adaptação ao porte da equipe** — o ScrumXP é indicado para equipes pequenas e colaborativas, como os Prontuariantes (seis membros), onde a comunicação direta e o pair programming substituem processos burocráticos de coordenação.
- **Foco na entrega de valor com validação clínica** — ciclos curtos permitem que o médico valide funcionalidades do prontuário SOAP rapidamente, reduzindo retrabalho e garantindo aderência ao fluxo real do consultório.

> **Nota:** embora o ScrumXP favoreça documentação enxuta, o domínio clínico do ProntoCare impõe documentação complementar obrigatória: rastreabilidade de requisitos (OE → CP → US), registro de RNFs críticos, cadeia de autenticidade e evidências de conformidade com LGPD e normas do CFM. Essa documentação é detalhada na seção 4.


#### Histórico de Revisões

| Data | Versão | Descrição | Autor |
| :---: | :---: | :---: | :---: |
| 2026-02-10 | 0.1 | Elaboração inicial da visão do produto e projeto. | Prontuariantes |
| 2026-02-24 | 0.2 | Refinamento do escopo após reuniões de elicitação com o cliente. | Prontuariantes |
| 2026-03-10 | 0.3 | Definição da arquitetura documental e cadeia de autenticidade. | Prontuariantes |
| 2026-03-25 | 0.4 | Delimitação do escopo reduzido do MVP e revisão geral. | Prontuariantes |
| 2026-04-11 | 0.5 | Correções conforme revisão do professor; inclusão das seções 2.4 a 6. | Prontuariantes |
| 2026-04-13 | 0.6 | Últimas revisões antes da primeira entrega. | Prontuariantes |
| 2026-05-03 | 0.7 | Correção do quadro comparativo, decomposição Scrum vs XP, ajuste de justificativa e documentação conforme domínio clínico. | Prontuariantes |