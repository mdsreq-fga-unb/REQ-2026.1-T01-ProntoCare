# Intervenção Social

### 3 Intervenção Social

A prestação de serviços de saúde, especialmente no contexto de consultórios médicos independentes e de atendimento itinerante ou domiciliar, é afetada por barreiras que extrapolam o âmbito técnico. O ProntoCare propõe uma intervenção que visa transformar a dinâmica de relacionamento, a cultura de segurança documental e a autonomia na gestão das informações clínicas, gerando impacto social e comportamental direto sobre profissionais de saúde e pacientes.

#### 3.1 Objetivos de Transformação Social

O principal objetivo de impacto social do ProntoCare é a **democratização do controle sobre as informações de saúde**. Ao oferecer um sistema open-source e focado na portabilidade de dados, o projeto atua contra o aprisionamento tecnológico (*vendor lock-in*) que hoje restringe o acesso dos médicos aos seus próprios registros e dificulta o compartilhamento histórico com os pacientes. 

Adicionalmente, ao focar na resiliência operacional em áreas de baixa ou nenhuma conectividade (como consultórios em regiões rurais ou atendimento domiciliar itinerante), o sistema atua na inclusão digital de saúde de populações geograficamente isoladas, garantindo que o mesmo padrão de excelência e segurança clínica seja aplicado independentemente da infraestrutura de rede disponível.

#### 3.2 Mudanças Comportamentais Esperadas

A implantação do sistema visa incentivar e consolidar novas atitudes no ciclo assistencial:

1.   **Para o Profissional de Saúde:**
    *   *Transição Cultural:* Abandono do uso do papel ou de registros digitais informais e desestruturados em favor de um registro clínico estruturado (padrão SOAP), promovendo uma postura de maior rigor metodológico nas consultas.
    *   *Cultura de Segurança Legal e Privacidade:* Adoção ativa de mecanismos de segurança (como a assinatura digital padrão ICP-Brasil e o registro de logs de auditoria), gerando maior zelo pela integridade de dados e proteção à privacidade do paciente (LGPD).
    *   *Autonomia Operacional:* Transição de hábitos de trabalho baseados na dependência de conexão estável ou licenças comerciais de software para uma rotina focada em autonomia e portabilidade de dados.

2.  **Para os Pacientes:**
    *   *Postura Ativa:* Mudança de uma postura de receptor passivo do atendimento para um papel de agente ativo e consciente sobre a posse e a segurança das suas próprias informações médicas.
    *   *Consciência de Consentimento:* Percepção clara sobre a importância do Termo de Consentimento Livre e Esclarecido (TCLE) eletrônico, entendendo os direitos sobre seus dados sensíveis.
    *   *Mobilidade e Continuidade:* Compreensão do valor da portabilidade clínica, sentindo-se empoderado para solicitar seu histórico clínico em formatos universais (PDF/JSON) e usá-lo em outros níveis de atenção à saúde.

#### 3.3 Benefícios para os Atores

1. **Benefícios para os Profissionais de Saúde:**
    *   *Segurança Jurídica:* A assinatura ICP-Brasil em prontuários e receitas protege legalmente o médico contra litígios e falsificações.
    *   *Resiliência Operacional:* Capacidade de continuar trabalhando e registrando dados sem internet, reduzindo o estresse operacional causado por quedas de conectividade.
    *   *Autonomia de Negócio:* Eliminação de custos recorrentes com licenças proprietárias e a certeza de que seus dados médicos sempre pertencerão a ele (via exportação JSON livre).

2. **Benefícios para os Pacientes:**
    *   *Redução de Erros Médicos:* A legibilidade na emissão de receitas digitais e a análise em tempo real de interações medicamentosas por IA reduzem riscos de erros em farmácias ou na autoadministração de fármacos.
    *   *Garantia de Privacidade:* Confiança de que seus dados de saúde estão criptografados e que todos os acessos são estritamente auditados.
    *   *Continuidade de Tratamento:* Facilidade em manter e compartilhar o histórico de saúde com outros especialistas, evitando repetição desnecessária de exames ou interrupção de tratamentos.

#### 3.4 Impactos Positivos e Riscos Associados

##### **Impactos Positivos**
1.   Melhoria imediata na qualidade do registro clínico através da padronização e estruturação dos prontuários médicos.
2.   Redução da pegada ecológica e do custo logístico associados ao armazenamento físico de papéis.
3.   Aumento da transparência da relação médico-paciente através da facilitação do acesso aos dados.

##### **Riscos Associados e Mitigações**

1.  **Risco Comportamental: Resistência à Mudança por Profissionais**
    *   *Descrição:* Médicos acostumados a escrever à mão podem considerar o preenchimento digital lento ou distrativo durante a consulta.
    *   *Mitigação:* Desenho de interface de alta usabilidade, focada em preenchimentos rápidos e sem barreiras visuais excessivas.
2.  **Risco Social: Exclusão Digital de Pacientes**
    *   *Descrição:* Pacientes com baixo letramento digital ou sem acesso a dispositivos móveis podem ter dificuldades com termos de consentimento digitais ou no recebimento de receitas.
    *   *Mitigação:* Manutenção de um fluxo de apoio offline que permite imprimir termos e receitas assinadas digitalmente para entrega física no consultório.
3.  **Risco de Segurança: Exposição de Dispositivos Locais**
    *   *Descrição:* Como o sistema opera offline e os dados são salvos localmente antes de sincronizar, a perda ou roubo físico do dispositivo do médico pode expor dados de pacientes.
    *   *Mitigação:* Criptografia de armazenamento local (Dexie.js com camada segura) e autenticação de sessão rigorosa e recorrente.

#### Histórico de Revisões

| Data | Versão | Descrição | Autor |
| :---: | :---: | :---: | :---: |
| 2026-05-18 | 0.1 | Elaboração e revisão da intervenção social do projeto. | Prontuariantes |
| 2026-06-13 | 0.2 | Reestruturação focada em transformações comportamentais, impactos sociais, benefícios, riscos e mitigações. | Prontuariantes |
