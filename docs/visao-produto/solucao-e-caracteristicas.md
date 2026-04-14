# Solução e características

### 2 Solução proposta

#### 2.1 Objetivo Geral do Produto

Para solucionar a ineficiência operacional e os riscos de segurança gerados pela dependência exclusiva de registros em papel e fluxos manuais, o objetivo do ProntoCare é digitalizar e centralizar o fluxo assistencial do consultório. A solução visa substituir o arquivo físico por um sistema estruturado que permita o registro, a consulta e a recuperação imediata das informações clínicas durante o atendimento, assegurando a agilidade da consulta e a continuidade do cuidado ao paciente. Além de otimizar a rotina do médico, o produto deve garantir a integridade, a rastreabilidade e a conformidade regulatória dos dados sensíveis, mitigando as vulnerabilidades de segurança do cenário atual.

- **CP1** — Gestão de Documentação Clínica Estruturada: Provê um ambiente de registro assistencial organizado que garante a organização lógica das informações e a continuidade do cuidado.
- **CP2** — Jornada Assistencial Multicanal: Expansão para fluxos operacionais de alta complexidade, integrando plenamente as modalidades de teletriagem avançada e visitas domiciliares exaustivas.
- **CP3** — Suporte Algorítmico à Decisão Clínica: Incorporação de inteligência para auxílio em diagnósticos e triagens baseadas em protocolos clínicos complexos.
- **CP4** — Garantia de Integridade e Autoria Documental: Implementa mecanismos que asseguram a inviolabilidade dos registros clínicos e a verificação de autoria, garantindo segurança jurídica inicial.
- **CP5** — Disponibilidade Operacional Ubíqua: Capacidade de operação contínua em diversos cenários de atendimento, garantindo que o médico não seja interrompido por instabilidades de infraestrutura externa.
- **CP6** — Governança de Privacidade e Acesso: Camada de controle que gerencia a visibilidade de dados sensíveis conforme o papel do ator no ecossistema de saúde.


#### 2.2 Objetivos Específicos (OE) do Produto

- **(OE1)** Reduzir a fragmentação e o tempo de recuperação de informações clínicas.  Em vez de focar no "módulo de cadastro", o foco é no ganho operacional de ter os dados centralizados para consulta imediata em qualquer cenário de atendimento.

- **(OE2)** Qualificar a precisão e a padronização do registro assistencial.  O objetivo não é apenas ter um "prontuário eletrônico", mas garantir que o histórico utilize padrões (como SOAP e CID-10) que evitem erros de interpretação comuns no papel.

- **(OE3)** Mitigar riscos de segurança e garantir o compliance jurídico (LGPD/CFM).  O objetivo aqui é a proteção legal do médico, substituindo a vulnerabilidade do papel por um ambiente rastreável e auditável.

- **(OE4)** Otimizar a continuidade do cuidado em atendimentos multiplataforma.  Garantir que o médico tenha o mesmo nível de informação no consultório, no atendimento domiciliar ou remoto, eliminando o "apagão" de dados entre um local e outro.

- **(OE5)** Eliminar o erro humano na emissão de documentos clínicos.  Substituir a redação manual por processos automatizados para garantir a legibilidade e a padronização de prescrições e encaminhamentos.

##### Arquitetura de autenticidade documental

    O prontuário não é um único arquivo, mas uma sequência de pequenos arquivos — um por atendimento. Cada arquivo contém: resumo clínico, data, autor, hash do arquivo anterior (garantindo ordem) e assinatura digital do profissional. Os arquivos ficam em servidores de instituições de saúde; as referências (hash, assinatura, identificador) podem ser registradas em rede pública certificada para garantir autenticidade. O médico consulta o índice público, verifica assinaturas e baixa apenas arquivos autorizados, reconstruindo a linha do tempo clínica. Resultado: cadeia de documentos médicos assinados — fácil de verificar, difícil de falsificar, simples de compartilhar.

#### 2.3 Características de Produto (mapeadas com os Objetivos Específicos do Produto)

A solução proposta deverá contemplar, de forma preliminar, as seguintes características:

| ID | Característica do produto | Descrição resumida | ID | Valor de negócio principal | Contribuição principal | Contribuição secundária |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| CP1 | Gestão de Documentação Assistencial Estruturada | Provê uma estrutura lógica de registro clínico que organiza o pensamento médico e facilita a recuperação histórica. | VN1 | Padronização e rastreabilidade dos registros clínicos. | OE1 | OE3 |
| CP2 | Ecossistema de Cuidado Multimodal | Suporte integrado às diversas frentes de atuação do médico, do acolhimento fixo ao atendimento itinerante. | VN2 | Cobertura integral do ciclo assistencial. | OE2 | OE6 |
| CP3 | Apoio Algorítmico à Decisão | Guia o fluxo assistencial por meio de protocolos clínicos, garantindo consistência técnica nas triagens. | VN3 | Agilidade e consistência nas decisões de triagem. | OE3 | OE2 |
| CP4 | Garantia de Fé Pública e Integridade Digital | Assegura que o prontuário seja nativamente inviolável e tenha autoria incontestável para fins legais. | VN4 | Integridade, autoria e não repúdio dos documentos clínicos. | OE3 | OE1 |
| CP5 | Resiliência e Ubiquidade Operacional | Garante que a operação clínica não seja interrompida por falhas de conectividade ou infraestrutura externa. | VN5 | Continuidade do atendimento em ambientes sem internet. | OE4 | OE2 |
| CP6 | Governança de Privacidade e Acesso | Gerencia a visibilidade de dados sensíveis e o compartilhamento seguro entre os atores do cuidado. | VN6 | Privacidade, segurança e autonomia do paciente. | OE5 | OE6 |
| CP7 | Monitoramento de Transparência Operacional | Provê visibilidade total sobre quem, quando e como as informações sensíveis foram acessadas. | VN7 | Rastreabilidade das operações, fortalecendo controle e responsabilização. | OE5 | OE2 |
| CP8 | Framework de Conformidade Normativa | Harmoniza os fluxos digitais às exigências de proteção de dados (LGPD) e normativas do CFM. | VN8 | Aderência regulatória e redução de controles manuais para sustentação jurídica. | OE6 | OE5 |
| CP6 | Governança de Privacidade e Acesso | Gerencia a visibilidade de dados sensíveis e o compartilhamento seguro entre os atores do cuidado. | VN6 | Privacidade, segurança e autonomia do paciente. | OE5 | OE6 |
| CP7 | Monitoramento de Transparência Operacional | Provê visibilidade total sobre quem, quando e como as informações sensíveis foram acessadas. | VN7 | Rastreabilidade das operações, fortalecendo controle e responsabilização. | OE5 | OE2 |
| CP8 | Framework de Conformidade Normativa | Harmoniza os fluxos digitais às exigências de proteção de dados (LGPD) e normativas do CFM. | VN8 | Aderência regulatória e redução de controles manuais para sustentação jurídica. | OE6 | OE5 |

#### 2.4 Tecnologias a Serem Utilizadas

Para a construção da solução proposta para o ProntoCare , serão utilizadas tecnologias compatíveis com a necessidade de operação em ambientes sem conectividade , segurança de dados sensíveis e desenvolvimento iterativo do produto. No frontend, será utilizado React , para a construção de interfaces de alta usabilidade que facilitem a adaptação do médico ao sistema digital. No backend, será utilizado Node.js, favorecendo a implementação de serviços web e a lógica de autenticação manual necessária para o controle de acesso. Para persistência de dados, será utilizado PostgreSQL , considerando a estrutura necessária para gerenciar prontuários individuais , dados cadastrais e o histórico clínico dos pacientes.

A integração entre o webapp e o servidor será realizada por meio de APIs RESTful , permitindo a sincronização de dados e atualização dos registros assim que a conectividade for recuperada. Para garantir a operação offline, serão adotadas tecnologias de PWA (Progressive Web App) e Dexie.js para armazenamento local no navegador. A integridade dos documentos será assegurada por uma cadeia de autenticidade criptográfica com hashes SHA-256 gerados via Web Crypto API. Para apoio ao desenvolvimento colaborativo, serão utilizados Git e GitHub , além de práticas de testes e integração contínua para garantir a qualidade técnica. Também serão considerados mecanismos de segurança, privacidade e conformidade com a LGPD , em alinhamento com as normas do CFM e os requisitos de rastreabilidade do prontuário médico.



#### 2.5 Pesquisa de Mercado e Análise Competitiva

No mercado de prontuários eletrônicos para profissionais autônomos, as soluções mais relevantes são o eSUS PEC — referência técnica do próprio cliente — e plataformas comerciais como iClinic e Clinic nas Nuvens. Cada uma apresenta características e limitações que contextualizam a oportunidade do ProntoCare.

| Solução | Limitações | Pontos fortes |
| :--- | :--- | :--- |
| eSUS PEC | Concebido para unidades públicas de atenção básica, não para autônomos; interface complexa; operação offline limitada; sem cadeia de autenticidade criptográfica por registro individual. | Gratuito; referência técnica do cliente; amplamente utilizado na atenção básica. |
| iClinic | Operação exclusivamente online (sem suporte offline); custo de licença mensal recorrente; sem cadeia de autenticidade criptográfica por registro. | Interface moderna e consolidada; adoção ampla entre médicos autônomos. |
| Clinic nas Nuvens | Dependência total de conectividade; sem verificação criptográfica de documentos; custo de licença mensal. | Integração com convênios e agenda; experiência de uso satisfatória para consultórios. |

**Diferenciais do ProntoCare**

- Operação híbrida online/offline — atendimentos continuam sem interrupção mesmo sem internet.
- Cadeia de autenticidade criptográfica por registro (hash sequencial + assinatura digital) — integridade e autoria verificáveis.
- Custo zero de licenciamento — compatível com a diretriz do projeto e com o contexto de pequeno consultório autônomo.
- Fluxo orientado ao médico autônomo — interface adaptada ao ciclo SOAP sem a complexidade do sistema público.

#### 2.6 Viabilidade da Proposta

A proposta é viável no contexto da disciplina, considerando o acesso ao cliente, o escopo definido e a possibilidade de entrega incremental de um MVP funcional ao final do semestre. Embora a equipe seja estudantil, possua recursos limitados e o prazo seja restrito a aproximadamente quatro meses, o projeto foi estruturado de forma compatível com essa realidade, com priorização rigorosa das funcionalidades essenciais e validações frequentes com o cliente.

O principal desafio frente à visão completa e de longo prazo do produto é o limite de tempo e recursos, mas esse risco é mitigado pela redução do escopo a um subconjunto funcional e coerente. O MVP (produto mínimo viável) garante a entrega das características essenciais que demonstram o valor central do sistema, sem comprometer a viabilidade da entrega.

Assim, a proposta é considerada viável, desde que:
- O escopo do MVP permaneça estritamente controlado;
- As prioridades essenciais sejam mantidas; e
- A equipe gerencie adequadamente os recursos e o escopo dentro do prazo de 3 a 4 meses.

#### 2.7 Benefícios Esperados

**Para o cliente (Dr. Rogério Duarte)**

- Digitalização do fluxo clínico essencial, eliminando a dependência de prontuários em papel.
- Acesso rápido e estruturado ao histórico do paciente durante o atendimento.
- Rastreabilidade criptográfica dos registros, garantindo integridade e autoria verificáveis.
- Continuidade assistencial mesmo em ambientes sem conectividade.
- Base tecnológica para expansão futura sem necessidade de reescrita do sistema.

**Para os usuários (pacientes)**

- Acesso restrito e seguro ao próprio prontuário, preservando a privacidade do paciente.
- Possibilidade de encaminhar registros clínicos a outros profissionais de saúde.
- Registros padronizados no formato SOAP, favorecendo a continuidade do cuidado.
- Maior confiança no armazenamento e na integridade dos dados clínicos pessoais.


#### Histórico de Revisões

| Data | Versão | Descrição | Autor |
| :---: | :---: | :---: | :---: |
| 2026-02-10 | 0.1 | Elaboração inicial da visão do produto e projeto. | Prontuariantes |
| 2026-02-24 | 0.2 | Refinamento do escopo após reuniões de elicitação com o cliente. | Prontuariantes |
| 2026-03-10 | 0.3 | Definição da arquitetura documental e cadeia de autenticidade. | Prontuariantes |
| 2026-03-25 | 0.4 | Delimitação do escopo reduzido do MVP e revisão geral. | Prontuariantes |
| 2026-04-11 | 0.5 | Correções conforme revisão do professor; inclusão das seções 2.4 a 6. | Prontuariantes |
| 2026-04-13 | 0.6 | Últimas revisões antes da primeira entrega. | Prontuariantes |