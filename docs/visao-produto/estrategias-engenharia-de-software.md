# Estratégias de engenharia de software

### 3 Estratégias de engenharia de software

A partir das informações apresentadas nas seções 1 e 2, devem ser tomadas as decisões no que diz respeito às estratégias de engenharia de software a serem utilizadas.

#### 3.1 Estratégia priorizada

- **Abordagem de desenvolvimento de software:** Ágil
- **Ciclo de vida:** Incremental e iterativo
- **Processo de engenharia de software:** ScrumXP

#### 3.2 Quadro comparativo

O quadro a seguir apresenta características que podem ser relacionadas ao OpenUP e ao ScrumXP, visando auxiliar no entendimento e justificativa da escolha do processo mais adequado ao caso do ProntoCare.

| Características | OpenUP | ScrumXP |
| :--- | :--- | :--- |
| Abordagem geral | Iterativo, incremental e orientado a arquitetura sólida. | Iterativo e incremental, com foco em entregas rápidas e feedback contínuo. |
| Foco em arquitetura | Forte ênfase em arquitetura flexível e bem definida desde o início do projeto. | Arquitetura evolui ao longo do tempo, conforme a necessidade do produto. |
| Estrutura de processos | Fases claras: Iniciação, Elaboração, Construção, Transição. Mais estruturado. | Sprints curtos (2–4 semanas) com entregas incrementais e adaptação contínua. |
| Flexibilidade de requisitos | Flexibilidade com adaptações iterativas; arquitetura principal definida nas fases iniciais. | Alta flexibilidade para mudanças a cada sprint; adaptável a feedback frequente do cliente. |
| Colaboração com o cliente | Envolvimento intenso nas fases iniciais e finais; menos frequente no decorrer do projeto. | Envolvimento constante; feedback ao final de cada sprint, requisitos sempre atualizados. |
| Qualidade técnica | Qualidade assegurada pela arquitetura e por validações incrementais. | Alta ênfase em qualidade via TDD, pair programming e integração contínua. |
| Práticas de desenvolvimento | Estrutura formal com controle de progresso; menos práticas técnicas específicas. | TDD, refatoração contínua, integração contínua e pair programming. |
| Adaptação ao ProntoCare | Adequado para projetos que exigem arquitetura robusta definida desde o início. | Ideal para equipe pequena, prazo curto e validação frequente com o cliente médico. |
| Documentação | Documentação formal por fase, com ênfase em requisitos e arquitetura. | Documentação mínima; foco em comunicação e feedback rápido entre equipe e cliente. |
| Escalabilidade | Aplicável a projetos maiores com equipes médias a grandes. | Mais indicado para equipes pequenas e colaborativas. |

#### 3.3 Justificativa

Com base nas características do projeto e nos desafios do ProntoCare, o ScrumXP é o processo mais adequado pelos seguintes motivos:

- **Flexibilidade e entregas rápidas** — o prazo acadêmico exige sprints quinzenais com entregas incrementais e feedback constante do Dr. Rogério, único ponto de validação clínica do produto.
- **Práticas de qualidade técnica** — a sensibilidade dos dados clínicos exige TDD e integração contínua para garantir que cada entrega não comprometa a integridade dos registros.
- **Adaptação ao porte da equipe** — o ScrumXP é indicado para equipes pequenas e colaborativas, como os Prontuariantes (seis membros).
- **Foco na entrega de valor** — ciclos curtos permitem que o médico valide funcionalidades do prontuário SOAP rapidamente, reduzindo retrabalho e garantindo aderência ao fluxo real do consultório.


#### Histórico de Revisões

| Data | Versão | Descrição | Autor |
| :---: | :---: | :---: | :---: |
| 2026-02-10 | 0.1 | Elaboração inicial da visão do produto e projeto. | Prontuariantes |
| 2026-02-24 | 0.2 | Refinamento do escopo após reuniões de elicitação com o cliente. | Prontuariantes |
| 2026-03-10 | 0.3 | Definição da arquitetura documental e cadeia de autenticidade. | Prontuariantes |
| 2026-03-25 | 0.4 | Delimitação do escopo reduzido do MVP e revisão geral. | Prontuariantes |
| 2026-04-11 | 0.5 | Correções conforme revisão do professor; inclusão das seções 2.4 a 6. | Prontuariantes |
| 2026-04-13 | 0.6 | Últimas revisões antes da primeira entrega. | Prontuariantes |