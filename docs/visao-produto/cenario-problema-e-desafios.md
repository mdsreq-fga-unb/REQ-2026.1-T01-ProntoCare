# Cenário, problema e desafios

#### 1.3 Rich Picture

![](../assets/visao-produto/rich-picture.png)

O médico é ator central: atende pacientes em múltiplos contextos sem ferramenta unificada de registro. O fluxo inicia no acolhimento, passa por triagem (presencial ou teletriagem), consulta SOAP, visita domiciliar, até o acompanhamento longitudinal. Há ambientes sem conectividade, exigindo modo offline com sincronização posterior. Documentos precisam de autenticidade verificável via cadeia de hashes e assinaturas digitais. Pacientes têm acesso restrito aos próprios registros e podem encaminhar dados a outros profissionais.

#### 1.4 Identificação da Oportunidade ou Problema

O problema central do consultório não se resume ao uso de prontuários em papel, mas à dependência de um fluxo operacional manual que dificulta a localização rápida de informações clínicas, compromete a continuidade assistencial e aumenta a exposição a falhas de segurança e conformidade. Em atendimentos sucessivos, a necessidade de buscar, interpretar e atualizar registros físicos reduz a agilidade da consulta e limita o acesso estruturado ao histórico do paciente. Nesse contexto, o ProntoCare surge como uma oportunidade de digitalizar o fluxo clínico essencial do consultório, centralizando informações, reduzindo retrabalho e oferecendo suporte mais seguro à tomada de decisão médica.

As principais causas identificadas para este problema organizam-se em seis categorias, conforme ilustrado no Diagrama de Ishikawa a seguir: (1) **Tecnologia** — ausência de modo offline e sincronização automática; sem suporte integrado a teletriagem. (2) **Processo clínico** — fluxo de acolhimento até registro SOAP não estruturado digitalmente; triagem manual realizada sem apoio de protocolos clínicos. (3) **Autenticidade** — inexistência de verificação criptográfica dos registros; histórico médico suscetível a adulterações. (4) **Legislação** — complexidade da LGPD no contexto de dados de saúde; normas do CFM restritivas ao prontuário eletrônico de profissional autônomo. (5) **Acesso e dados** — paciente sem acesso estruturado ao próprio prontuário; ausência de mecanismo para compartilhamento entre profissionais. (6) **Ferramenta atual** — o eSUS PEC não foi concebido para profissionais autônomos e opera de forma limitada em ambiente offline.

![](../assets/visao-produto/ishikawa.png)

#### 1.5 Desafios do Projeto

O principal desafio técnico do projeto consiste em assegurar que a transição do ambiente físico para o digital ocorra sem prejuízo à continuidade assistencial do consultório. Nesse sentido, durante a migração, deve-se evitar qualquer perda, indisponibilidade ou inconsistência de informações históricas relevantes à segurança do paciente. Sob a perspectiva operacional, observa-se que o médico adota há anos uma rotina de atendimento fortemente apoiada em registros em papel. Por isso, a interface do ProntoCare deverá apresentar elevado grau de facilidade na interação e usabilidade, de modo a viabilizar a adaptação ao sistema sem comprometer a fluidez dos atendimentos e sem demandar treinamento formal extensivo.

Adicionalmente, o projeto está condicionado a um cronograma acadêmico fixo e à diretriz de priorização de soluções com custo zero de licenciamento. Ainda assim, tal diretriz não exclui a possibilidade de, mediante comum acordo com o cliente, serem incorporados componentes ou serviços que impliquem custo, desde que devidamente justificados. O escopo será definido com base em critérios rigorosos de priorização, contemplando exclusivamente as funcionalidades essenciais ao funcionamento do consultório.
