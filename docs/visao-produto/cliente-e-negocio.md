# Cliente e negócio

## 1 Cenário atual do cliente e do negócio

#### 1.1 Identificação do Cliente/Parceiro

- **Nome:** Médico autônomo - profissional liberal da área médica
- **Tipo:** Pessoa física - profissional de saúde com consultório médico
- **Representante:** Dr. Rogério Duarte
- **Forma de contato:** Reuniões periódicas por videoconferência e mensagens instantâneas
- **Vínculo com o projeto:** Cliente real e principal parte interessada. Participa ativamente das sessões de elicitação, valida escopo, prioridades e entregas ao longo do desenvolvimento.

#### 1.2 Introdução ao Negócio e Contexto

O modelo de negócio baseia-se na prestação de serviços médicos por um profissional autônomo que atua de forma itinerante e fixa, realizando atendimentos em consultório próprio, em domicílio e via telemedicina. O ciclo assistencial é composto por atividades sequenciais: inicia-se no acolhimento, seguido por uma triagem (que pode ser presencial ou remota via teletriagem), a consulta clínica propriamente dita, e o acompanhamento longitudinal do paciente ao longo do tempo.

Atualmente, a execução dessas atividades é estritamente manual e apoiada em registros físicos. Durante as consultas, o registro clínico é realizado no formato SOAP em prontuários de papel, que compõem o arquivo histórico do consultório. A manutenção desses documentos segue as exigências do CFM, que obriga a guarda dos registros por no mínimo 20 anos. Na prática diária, o médico precisa localizar, interpretar e atualizar manualmente essas fichas a cada novo contato com o paciente, dependendo exclusivamente da organização física dos arquivos para garantir a continuidade do cuidado. Em atendimentos domiciliares ou remotos, o profissional opera sem uma ferramenta unificada, o que exige o transporte de informações ou o registro posterior no arquivo central.


#### Histórico de Revisões

| Data | Versão | Descrição | Autor |
| :---: | :---: | :---: | :---: |
| 2026-02-10 | 0.1 | Elaboração inicial da visão do produto e projeto. | Prontuariantes |
| 2026-02-24 | 0.2 | Refinamento do escopo após reuniões de elicitação com o cliente. | Prontuariantes |
| 2026-03-10 | 0.3 | Definição da arquitetura documental e cadeia de autenticidade. | Prontuariantes |
| 2026-03-25 | 0.4 | Delimitação do escopo reduzido do MVP e revisão geral. | Prontuariantes |
| 2026-04-11 | 0.5 | Correções conforme revisão do professor; inclusão das seções 2.4 a 6. | Prontuariantes |
| 2026-04-13 | 0.6 | Últimas revisões antes da primeira entrega. | Prontuariantes |