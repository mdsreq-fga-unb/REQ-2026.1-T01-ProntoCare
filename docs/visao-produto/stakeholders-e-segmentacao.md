# Stakeholders e segmentação

#### 1.6 Mapa de Stakeholders

- **(1) Médico cliente (Dr. Rogério Duarte)** — valida requisitos, prioridades e entregas; principal decisor e usuário primário do sistema. 
- **(2) Pacientes** — acesso restrito ao próprio prontuário; podem encaminhar dados a outros profissionais. 
- **(3) Outros profissionais de saúde** — destinatários de dados encaminhados pelo paciente. 
- **(4) Equipe de desenvolvimento (Prontuariantes)** — implementa e refina escopo ao longo das sprints. 
- **(5) Professor orientador (George Marsicano)** — valida escopo, processo e viabilidade acadêmica. 
- **(6) Monitor (Willian)** — apoia a equipe no processo e nas entregas da disciplina.

![](../assets/visao-produto/stakeholders.png)

| Stakeholder | Relação | Interesse principal | Influência |
| --- | --- | --- | --- |
| Dr. Rogério Duarte | Representante do cliente. | Validar escopo, prioridades e adequação ao consultório. | Alta |
| Médico (Usuário) | Usuário principal do sistema. | Agilidade no registro clínico e acesso rápido ao histórico. | Alta |
| Pacientes | Usuários indiretos e Titulares dos dados. | Privacidade e segurança. Embora não influenciam o andamento do projeto, como Titulares dos Dados (LGPD), exercem alta influência sobre os requisitos de privacidade e exclusão de dados do sistema. | Baixa (projeto) / Alta (Regras) |
| Outros profissionais de saúde | Destinatários de dados encaminhados pelo paciente. | Recebimento seguro e íntegro do prontuário do paciente para continuidade do cuidado. | Média |
| Órgãos Reguladores (CFM/LGPD) | Fontes de conformidade e regulamentação. | Garantir a guarda documental e o tratamento ético dos dados. | Alta |
| Equipe de desenvolvimento | Responsáveis pela construção do produto | Entregar uma solução funcional e cumprir requisitos acadêmicos. | Alta |
| Professor orientador (George Marsicano) | Valida escopo, processo e viabilidade acadêmica. | Validar o escopo, o processo e a viabilidade acadêmica do projeto. | Alta |
| Monitor (Willian) | Apoia a equipe no processo e nas entregas da disciplina. | Apoiar a equipe de desenvolvimento e garantir o cumprimento das entregas da disciplina. | Média |



#### 1.7 Segmentação de Clientes

O segmento de cliente alvo exclusivo deste projeto é o Médico Autônomo (Consultório Individual). Este segmento é composto por profissionais liberais da área médica que atuam de forma independente, gerindo a própria carteira de pacientes sem o suporte de grandes infraestruturas hospitalares ou equipes dedicadas de Tecnologia da Informação. O perfil caracteriza-se por uma rotina de trabalho altamente flexível, englobando uma jornada multimodal que divide-se entre atendimentos presenciais em consultório próprio, visitas domiciliares itinerantes e consultas remotas via telemedicina.	

*![](../assets/visao-produto/segmentacao.png)*

#### Histórico de Revisões

| Data | Versão | Descrição | Autor |
| :---: | :---: | :---: | :---: |
| 2026-02-10 | 0.1 | Elaboração inicial da visão do produto e projeto. | Prontuariantes |
| 2026-02-24 | 0.2 | Refinamento do escopo após reuniões de elicitação com o cliente. | Prontuariantes |
| 2026-03-10 | 0.3 | Definição da arquitetura documental e cadeia de autenticidade. | Prontuariantes |
| 2026-03-25 | 0.4 | Delimitação do escopo reduzido do MVP e revisão geral. | Prontuariantes |
| 2026-04-11 | 0.5 | Correções conforme revisão do professor; inclusão das seções 2.4 a 6. | Prontuariantes |
| 2026-04-13 | 0.6 | Últimas revisões antes da primeira entrega. | Prontuariantes |