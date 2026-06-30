---
icon: material/calendar-check
---
# **Planejamento e Quadro Figma**

Esta página é dedicada ao acompanhamento do planejamento estratégico do projeto ProntoCare através do nosso quadro colaborativo (Figma JamBoard). O quadro é utilizado pela equipe como artefato central para a elicitação de requisitos, mapeamento de objetivos específicos, definição de características do produto (CPs), modelagem do backlog e dinâmicas de priorização.

![](../assets/visao-produto/matriz-de-progresso.png)

## :material-bulletin-board: **Quadro Colaborativo do Figma**

O quadro de desenvolvimento e organização de sprints está disponível para visualização e interação na janela abaixo. Mais do que registrar o progresso cronológico do projeto, este artefato evidencia a governança do processo ágil e desenvolvimento da matéria adotado pela equipe, demonstrando a distribuição de esforço, a dinâmica de priorização e a maturidade operacional do grupo ao longo das iterações.

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 8px; width: 100%; max-width: 1024px; aspect-ratio: 16/9;" src="https://embed.figma.com/board/0vnXsFutjGoQcCT6oQQ2lX/Prontuariantes?node-id=0-1&embed-host=share" allowfullscreen></iframe>

---

## :material-tag-multiple-outline: **Legenda do Estado dos Requisitos**

No quadro colaborativo, cada requisito é marcado com selos na matriz de rastreabilidade (*stamps*) específicos que indicam o progresso e o status da sua homologação:

| Selo no Quadro | Significado | Descrição do Estado |
| :---: | :--- | :--- |
| :material-thumb-up:{ .middle } | **Concluído** | O requisito foi totalmente desenvolvido, testado e implementado. |
| :material-heart:{ .middle } | **Validado** | O requisito foi revisado, validado e homologado diretamente com o cliente. |
| :material-thumb-down:{ .middle } | **Fora do MVP** | O requisito foi despriorizado ou postergado, não integrando o escopo do MVP atual. |
| *Nenhum* | **Não Iniciado** | O requisito ainda não foi planejado ou trabalhado em nenhuma Sprint da equipe. |

---

## :material-scale-balance: **Justificativa de Itens Regulatórios de Alta Complexidade Mantidos no MVP**

Apesar da alta complexidade técnica (estimadas com PT de 3.0 e 3.5), os requisitos de assinatura digital de prontuários (**RF08**) e receitas (**RF15**) baseados na infraestrutura ICP-Brasil foram **mantidos obrigatoriamente** no MVP da solução. 

Esta decisão deve-se a **restrições regulatórias e jurídicas intransponíveis** no domínio clínico nacional:
1. **Validade Jurídica Compulsória:** Conforme a Lei nº 14.063/2020 e as resoluções do CFM, prontuários e receitas eletrônicos só possuem validade legal e médica se assinados por assinatura eletrônica qualificada (certificado ICP-Brasil). A ausência desse recurso inviabilizaria o uso do software em ambiente real.
2. **Segurança de Prescrição:** Receitas médicas não assinadas digitalmente não podem ser aceitas por farmácias para dispensação de medicamentos controlados, inviabilizando o fluxo assistencial do MVP.
3. **Não-Repúdio e Integridade (LGPD):** A assinatura garante o não-repúdio e a integridade documental dos prontuários em caso de litígios jurídicos ou auditorias de conselhos de classe.

---

> :octicons-link-external-16: Você também pode visualizar o board em tela cheia diretamente no Figma clicando [aqui](https://www.figma.com/board/0vnXsFutjGoQcCT6oQQ2lX/Prontuariantes?node-id=0-1&t=7WDzylophLcdH6TL-1).

---

## :material-calendar-month: **Histórico de Revisões**

| Data | Versão | Descrição | Autor |
| :---: | :---: | :---: | :---: |
| 2026-06-30 | 1.0 | Criação do documento de planejamento com o quadro colaborativo, legenda de estados e justificativas regulatórias. | Prontuariantes |
