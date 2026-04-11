# Solução e características

### 2 Solução proposta

#### 2.1 Objetivo Geral do Produto

O objetivo do ProntoCare é apoiar e simplificar o fluxo operacional clínico do consultório por meio da digitalização e centralização dos prontuários e documentos assistenciais, permitindo registro, consulta e recuperação rápida das informações do paciente durante o atendimento. A solução deve reduzir a dependência de arquivos físicos, preservar a continuidade assistencial e oferecer segurança, rastreabilidade e conformidade regulatória compatíveis com o contexto do consultório.

#### 2.2 Objetivos Específicos (OE) do Produto

**(OE1)** Disponibilizar um módulo de cadastro de pacientes que permita registrar, editar e consultar, de forma centralizada, os dados cadastrais e informações clínicas básicas necessárias ao atendimento, reduzindo a fragmentação das informações e facilitando sua recuperação no contexto do consultório.

**(OE2)** Centralizar o registro clínico dos pacientes em prontuários eletrônicos individuais, contemplando anamneses, exames físicos, condutas e diagnósticos codificados pela CID-10, de modo que o histórico assistencial permaneça organizado, íntegro e disponível para consultas subsequentes.

**(OE3)** Permitir acesso rápido e estruturado ao histórico clínico do paciente durante o atendimento, apoiando a continuidade assistencial e favorecendo decisões médicas mais seguras, ágeis e contextualizadas.

**(OE4)** Automatizar a geração de documentos clínicos essenciais ao fluxo do consultório, como prescrições médicas e guias de encaminhamento, eliminando a redação manual, aumentando a legibilidade e promovendo maior padronização dos registros emitidos.

**(OE5)** Garantir a proteção e a rastreabilidade dos dados clínicos por meio de autenticação por credenciais, controle de acesso e registro das ações relevantes realizadas no sistema, em conformidade com as exigências de segurança e responsabilização aplicáveis ao tratamento de dados pessoais sensíveis de saúde.

**(OE6)** Viabilizar a transição do registro físico para o digital nas funcionalidades essenciais contempladas nesta versão do produto, reduzindo a dependência operacional de prontuários em papel e estabelecendo uma base tecnológica compatível com as exigências de guarda, integridade e conformidade aplicáveis ao prontuário médico.

##### Arquitetura de autenticidade documental

O prontuário não é um único arquivo, mas uma sequência de pequenos arquivos — um por atendimento. Cada arquivo contém: resumo clínico, data, autor, hash do arquivo anterior (garantindo ordem) e assinatura digital do profissional. Os arquivos ficam em servidores de instituições de saúde; as referências (hash, assinatura, identificador) podem ser registradas em rede pública certificada para garantir autenticidade. O médico consulta o índice público, verifica assinaturas e baixa apenas arquivos autorizados, reconstruindo a linha do tempo clínica. Resultado: cadeia de documentos médicos assinados — fácil de verificar, difícil de falsificar, simples de compartilhar.

#### 2.3 Características de Produto (mapeadas com os Objetivos Específicos do Produto)

A solução proposta deverá contemplar, de forma preliminar, as seguintes características:

| Contribuição principal | Contribuição secundária | ID | Característica | Descrição resumida | Valor de negócio principal |
| :--- | :--- | :--- | :--- | :--- | :--- |
| OE1 | OE2 | CP1 | Prontuário SOAP e folha de rosto | Registro estruturado no formato SOAP com folha de rosto contendo identificação, histórico clínico e dados relevantes do paciente. | Padronização e rastreabilidade dos registros clínicos. |
| OE2 | OE1 | CP2 | Fluxos assistenciais completos | Suporte ao ciclo: acolhimento, triagem, teletriagem, consulta SOAP, visita domiciliar e acompanhamento longitudinal. | Cobertura integral do ciclo assistencial. |
| OE3 | OE2 | CP3 | Suporte inteligente à triagem | Módulo de apoio à decisão por protocolos clínicos determinísticos para doenças prevalentes. Aberto a outras técnicas de IA. | Agilidade e consistência nas decisões de triagem. |
| OE4 | OE5 | CP4 | Cadeia de autenticidade documental | Cada registro contém hash do anterior e assinatura digital. Referências publicadas em índice verificável externamente. | Integridade, autoria e não repúdio dos documentos clínicos. |
| OE5 | OE1 | CP5 | Operação híbrida (online/offline) | Armazenamento local com sincronização automática ao recuperar conectividade. | Continuidade do atendimento em ambientes sem internet. |
| OE6 | OE4 | CP6 | Controle de acesso e compartilhamento | Perfis diferenciados: profissionais com acesso pleno; pacientes com acesso restrito e envio de dados a outros profissionais. | Privacidade, segurança e autonomia do paciente. |
| OE5 | OE2 | CP7 | Trilha de auditoria (logs) | O sistema deve registrar as ações relevantes realizadas no prontuário, incluindo criação, edição, consulta e demais operações críticas, com identificação do usuário, data, hora e tipo de ação executada. | Rastreabilidade das operações, fortalecendo controle e responsabilização. |
| OE6 | OE5 | CP8 | Conformidade regulatória aplicada | O sistema deve incorporar mecanismos compatíveis com as exigências da LGPD e da regulamentação aplicável ao prontuário médico, incluindo controle de acesso, proteção de dados, registro de atividades e preservação da integridade. | Aderência regulatória e redução de controles manuais para sustentação jurídica. |

#### 2.4 Tecnologias a Serem Utilizadas

As tecnologias a serem utilizadas na construção do ProntoCare serão definidas pela equipe em alinhamento com o cliente e com os requisitos técnicos do produto, considerando os critérios de custo zero de licenciamento, suporte a operação offline, segurança de dados clínicos e viabilidade de implementação no prazo acadêmico estabelecido. A definição da stack tecnológica será formalizada ao término do Sprint 1, após análise de viabilidade técnica e acordo com o cliente.

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

A proposta é viável no contexto da disciplina, considerando o acesso ao cliente, o escopo definido e a possibilidade de entrega incremental de um MVP funcional ao final do semestre. Embora a equipe seja estudantil e o prazo seja de aproximadamente quatro meses, o projeto foi estruturado com priorização rigorosa das funcionalidades essenciais e validações frequentes com o cliente.

**Nota de escopo — MVP:** A visão descrita neste documento representa o cenário completo e de longo prazo do produto. Dado o contexto de desenvolvimento — equipe estudantil, prazo de 3–4 meses e recursos limitados — o escopo será reduzido a um subconjunto funcional e coerente. O MVP (produto mínimo viável) cobre as características essenciais que demonstram o valor central do sistema sem comprometer a viabilidade da entrega.

**Dentro do MVP (escopo reduzido para 3–4 meses)**

- CP1 — Prontuário SOAP com folha de rosto (núcleo do produto, OE1)
- CP4 — Autenticidade por hash criptográfico por registro (simplificado, sem rede pública — OE4 parcial)
- CP5 — Operação offline com armazenamento local e sincronização básica (OE5 parcial)
- CP6 — Controle de acesso básico: médico com acesso pleno, paciente com acesso restrito (OE6 parcial)

**Fora do MVP (visão futura — fora do escopo acadêmico neste ciclo)**

- CP2 — Fluxos assistenciais completos (teletriagem, visita domiciliar) — complexidade operacional
- CP3 — Módulo de inteligência para triagem — complexidade técnica elevada para o prazo
- Integração com rede pública certificada — requer parceiros e infraestrutura externos
- Clínicas como clientes — fora do escopo acadêmico desta versão
- Conformidade com LGPD — reconhecida como inviável neste ciclo pelo professor orientador

**Principais riscos e mitigações**

| Risco | Probabilidade | Mitigação |
| :--- | :--- | :--- |
| Sincronização offline/online | Alta | Implementação incremental; testes de integração com dados reais desde as primeiras sprints. |
| Cadeia criptográfica por registro | Média | Uso de bibliotecas consolidadas; escopo limitado ao MVP sem rede pública certificada. |
| Adaptação do médico ao sistema | Média | Interface de alta usabilidade; validações frequentes com o cliente ao longo das sprints. |
| Conformidade com LGPD | Baixa (fora do MVP) | Excluída explicitamente do escopo por acordo com o professor orientador. |

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
