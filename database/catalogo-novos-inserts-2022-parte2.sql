
ALTER SEQUENCE catalogo.area_id_seq RESTART WITH 30;
ALTER SEQUENCE catalogo.categoria_id_seq RESTART WITH 46;
ALTER SEQUENCE catalogo.grande_area_id_seq RESTART WITH 7;
ALTER SEQUENCE catalogo.orgao_id_seq RESTART WITH 154;
ALTER SEQUENCE catalogo.politica_id_seq RESTART WITH 749;
ALTER SEQUENCE catalogo.publico_alvo_id_seq RESTART WITH 46;
ALTER SEQUENCE catalogo.tipo_politica_id_seq RESTART WITH 9;


INSERT INTO catalogo.area (id, nome, icone, resumo, descricao, imagem, caminho_arquivo) VALUES (31, 'Cutlura', null, null, null, null, null);

INSERT INTO catalogo.categoria (id, nome) VALUES (47, 'Cutlura');

INSERT INTO catalogo.orgao (id, nome) VALUES (156, 'Ministério do Desenvolvimento, Indústria e Comércio');
INSERT INTO catalogo.orgao (id, nome) VALUES (157, 'Agência Nacional do Cinema');

INSERT INTO catalogo.politica (id, nome, ano, medida_provisoria, medida_provisoria_inicio_vigencia, legislacao, vigencia_inicio, vigencia_fim, objetivos, observacao, acao_orcamentaria_assoc, instrumento_legal, tipo_politica, grande_area, area, created_at, updated_at, publico_alvo_legislacao) VALUES (757, 'Política Regulatória de Direitoa Autorais', '1973-01-01', 'Não se aplica', 'Não se aplica', '5988/1973', '1973-12-14', '1988-02-19', 'Ementa: Regula os direitos autorais e dá outras providências', '#N/A', '#N/A', 'Lei ordinária', 4, 3, 18, null, null, 'Art. 1º Esta Lei regula os direitos autorais, entendendo-se sob esta denominação os direitos de autor e os que lhes são conexos.');
INSERT INTO catalogo.politica (id, nome, ano, medida_provisoria, medida_provisoria_inicio_vigencia, legislacao, vigencia_inicio, vigencia_fim, objetivos, observacao, acao_orcamentaria_assoc, instrumento_legal, tipo_politica, grande_area, area, created_at, updated_at, publico_alvo_legislacao) VALUES (758, 'Política Regulatória de Direitoa Autorais', '1998-01-01', 'Não se aplica', 'Não se aplica', '9610/1998', '1998-02-19', null, 'Ementa: Altera, atualiza e consolida a legislação sobre direitos autorais e dá outras providências.', '#N/A', '#N/A', 'Lei ordinária', 4, 3, 18, null, null, 'Art. 1º Esta Lei regula os direitos autorais, entendendo-se sob esta denominação os direitos de autor e os que lhes são conexos.');
INSERT INTO catalogo.politica (id, nome, ano, medida_provisoria, medida_provisoria_inicio_vigencia, legislacao, vigencia_inicio, vigencia_fim, objetivos, observacao, acao_orcamentaria_assoc, instrumento_legal, tipo_politica, grande_area, area, created_at, updated_at, publico_alvo_legislacao) VALUES (759, 'Programa do Artesanato Brasileiro (PAB)', '1991-01-01', 'Não se aplica', 'Não se aplica', 'Sem número', '1991-03-21', '1995-05-31', 'Art. 1° Fica instituído no Ministério da Ação Social, sob a supervisão da Secretaria Nacional de Promoção Social, o Programa do Artesanato Brasileiro, com a finalidade de coordenar e desenvolver atividades que visem valorizar o artesão brasileiro, elevando o seu nível cultural, profissional, social e econômico, bem assim desenvolver e promover o artesanato e a empresa artesanal.', '#N/A', 'Programa com ação orçamentária associada', 'Decreto', 5, 1, 18, null, null, 'Art. 1°  (…) desenvolver atividades que visem valorizar o artesão brasileiro (…).');
INSERT INTO catalogo.politica (id, nome, ano, medida_provisoria, medida_provisoria_inicio_vigencia, legislacao, vigencia_inicio, vigencia_fim, objetivos, observacao, acao_orcamentaria_assoc, instrumento_legal, tipo_politica, grande_area, area, created_at, updated_at, publico_alvo_legislacao) VALUES (760, 'Programa do Artesanato Brasileiro (PAB)', '1995-01-01', 'Não se aplica', 'Não se aplica', '1508/1995', '1995-05-31', null, 'Art. 1º Decreta O programa do Artesanato Brasileiro, instituído com a finalidade de coordenar e desenvolver atividades que visem valorizar o artesão brasileiro, elevando o seu nível cultural, profissional, social e econômico, bem assim desenvolver e promover o artesanato e a empresa artesanal, passa a subordinar-se ao Ministério da Indústria, do Comércio e do Turismo', '#N/A', 'Programa com ação orçamentária associada', 'Decreto', 5, 1, 31, null, null, 'Art 1º (…) desenvolver atividades que visem valorizar o artesão brasileiro (…)');
INSERT INTO catalogo.politica (id, nome, ano, medida_provisoria, medida_provisoria_inicio_vigencia, legislacao, vigencia_inicio, vigencia_fim, objetivos, observacao, acao_orcamentaria_assoc, instrumento_legal, tipo_politica, grande_area, area, created_at, updated_at, publico_alvo_legislacao) VALUES (761, 'Política de Fomento à atividade audiovisual', '1993-01-01', 'Não se aplica', 'Não se aplica', '8685/1993', '1993-07-20', null, 'Ementa: Cria mecanismos de fomento à atividade audiovisual e dá outras providências.', '#N/A', '#N/A', 'Lei ordinária', 4, 1, 18, null, null, 'Art. 1º-A  Até o ano-calendário de 2024, inclusive, as quantias referentes ao patrocínio à produção de obras audiovisuais brasileiras de produção independente, cujos projetos tenham sido previamente aprovados pela Ancine, poderão ser deduzidas do imposto de renda devido apurado: 
(...)
§ 4o  Os projetos específicos da área audiovisual, cinematográfica de difusão, preservação, exibição, distribuição e infra-estrutura técnica apresentados por empresa brasileira poderão ser credenciados pela Ancine para fruição dos incentivos fiscais de que trata o caput deste artigo, na forma do regulamento.   ');
INSERT INTO catalogo.politica (id, nome, ano, medida_provisoria, medida_provisoria_inicio_vigencia, legislacao, vigencia_inicio, vigencia_fim, objetivos, observacao, acao_orcamentaria_assoc, instrumento_legal, tipo_politica, grande_area, area, created_at, updated_at, publico_alvo_legislacao) VALUES (762, 'Programa de Apoio ao Desenvolvimento do Cinema Brasileiro (Prodecine)', '2006-01-01', 'Não se aplica', 'Não se aplica', '11437/2006', '2006-12-28', null, 'Art. 47. Como mecanismos de fomento de atividades audiovisuais, ficam instituídos, conforme normas a serem expedidas pela Ancine:
I - o Programa de Apoio ao Desenvolvimento do Cinema Brasileiro - PRODECINE, destinado ao fomento de projetos de produção independente, distribuição, comercialização e exibição por empresas brasileiras;', '#N/A', 'Política com ação orçamentária associada', 'Lei ordinária', 5, 1, 18, null, null, 'Sem especificação');
INSERT INTO catalogo.politica (id, nome, ano, medida_provisoria, medida_provisoria_inicio_vigencia, legislacao, vigencia_inicio, vigencia_fim, objetivos, observacao, acao_orcamentaria_assoc, instrumento_legal, tipo_politica, grande_area, area, created_at, updated_at, publico_alvo_legislacao) VALUES (763, 'Programa de Apoio ao Desenvolvimento da Infraestrutura do Cinema e do Audiovisual (Proinfra)', '2006-01-01', 'Não se aplica', 'Não se aplica', '11437/2006', '2006-12-28', null, 'Art. 47. Como mecanismos de fomento de atividades audiovisuais, ficam instituídos, conforme normas a serem expedidas pela Ancine:
(…)
III - o Programa de Apoio ao Desenvolvimento da Infra-Estrutura do Cinema e do Audiovisual - PRÓ-INFRA, destinado ao fomento de projetos de infra-estrutura técnica para a atividade cinematográfica e audiovisual e de desenvolvimento, ampliação e modernização dos serviços e bens de capital de empresas brasileiras e profissionais autônomos que atendam às necessidades tecnológicas das produções audiovisuais brasileiras.', '#N/A', 'Política com ação orçamentária associada', 'Lei ordinária', 5, 1, 18, null, null, 'Sem especificação');
INSERT INTO catalogo.politica (id, nome, ano, medida_provisoria, medida_provisoria_inicio_vigencia, legislacao, vigencia_inicio, vigencia_fim, objetivos, observacao, acao_orcamentaria_assoc, instrumento_legal, tipo_politica, grande_area, area, created_at, updated_at, publico_alvo_legislacao) VALUES (764, 'Plano Nacional de Livro e Leitura (PNLL)', '2003-01-01', 'Não se aplica', 'Não se aplica', '1442/2006', '2006-08-10', null, 'Art. 1- Fica institui?do o Plano Nacional do Livro e Leitura
(PNLL), de durac?a?o trienal, tendo por finalidade ba?sica assegurar a democratizac?a?o do acesso ao livro, o fomento e a valorizac?a?o da leitura e o fortalecimento da cadeia produtiva do livro como fator relevante para o incremento da produc?a?o intelectual e o desenvol-
vimento da economia nacional.', '#N/A', 'Política com ação orçamentária associada', 'Portaria', 3, 1, 18, null, null, 'Sem especificação');
INSERT INTO catalogo.politica (id, nome, ano, medida_provisoria, medida_provisoria_inicio_vigencia, legislacao, vigencia_inicio, vigencia_fim, objetivos, observacao, acao_orcamentaria_assoc, instrumento_legal, tipo_politica, grande_area, area, created_at, updated_at, publico_alvo_legislacao) VALUES (765, 'Política Nacional de Leitura e Escrita (PNLE)', '2018-01-01', 'Não se aplica', 'Não se aplica', '13696/2018', '2018-07-12', null, 'Art. 3º São objetivos da Política Nacional de Leitura e Escrita:

I - democratizar o acesso ao livro e aos diversos suportes à leitura por meio de bibliotecas de acesso público, entre outros espaços de incentivo à leitura, de forma a ampliar os acervos físicos e digitais e as condições de acessibilidade;

II - fomentar a formação de mediadores de leitura e fortalecer ações de estímulo à leitura, por meio da formação continuada em práticas de leitura para professores, bibliotecários e agentes de leitura, entre outros agentes educativos, culturais e sociais;

III - valorizar a leitura e o incremento de seu valor simbólico e institucional por meio de campanhas, premiações e eventos de difusão cultural do livro, da leitura, da literatura e das bibliotecas;

IV - desenvolver a economia do livro como estímulo à produção intelectual e ao fortalecimento da economia nacional, por meio de ações de incentivo ao mercado editorial e livreiro, às feiras de livros, aos eventos literários e à aquisição de acervos físicos e digitais para bibliotecas de acesso público;

V - promover a literatura, as humanidades e o fomento aos processos de criação, formação, pesquisa, difusão e intercâmbio literário e acadêmico em território nacional e no exterior, para autores e escritores, por meio de prêmios, intercâmbios e bolsas, entre outros mecanismos;

VI - fortalecer institucionalmente as bibliotecas de acesso público, com qualificação de espaços, acervos, mobiliários, equipamentos, programação cultural, atividades pedagógicas, extensão comunitária, incentivo à leitura, capacitação de pessoal, digitalização de acervos, empréstimos digitais, entre outras ações;

VII - incentivar pesquisas, estudos e o estabelecimento de indicadores relativos ao livro, à leitura, à escrita, à literatura e às bibliotecas, com vistas a fomentar a produção de conhecimento e de estatísticas como instrumentos de avaliação e qualificação das políticas públicas do setor;

VIII - promover a formação profissional no âmbito das cadeias criativa e produtiva do livro e mediadora da leitura, por meio de ações de qualificação e capacitação sistemáticas e contínuas;

IX - incentivar a criação e a implantação de planos estaduais, distrital e municipais do livro e da leitura, em fortalecimento ao SNC;

X - incentivar a expansão das capacidades de criação cultural e de compreensão leitora, por meio do fortalecimento de ações educativas e culturais focadas no desenvolvimento das competências de produção e interpretação de textos.', '#N/A', 'Política com ação orçamentária associada', 'Lei ordinária', 4, 1, 18, null, null, 'Art. 2º São diretrizes da Política Nacional de Leitura e Escrita:

I - a universalização do direito ao acesso ao livro, à leitura, à escrita, à literatura e às bibliotecas;

II - o reconhecimento da leitura e da escrita como um direito, a fim de possibilitar a todos, inclusive por meio de políticas de estímulo à leitura, as condições para exercer plenamente a cidadania, para viver uma vida digna e para contribuir com a construção de uma sociedade mais justa;

III - o fortalecimento do Sistema Nacional de Bibliotecas Públicas (SNBP), no âmbito do Sistema Nacional de Cultura (SNC);

IV - a articulação com as demais políticas de estímulo à leitura, ao conhecimento, às tecnologias e ao desenvolvimento educacional, cultural e social do País, especialmente com a Política Nacional do Livro, instituída pela Lei nº 10.753, de 30 de outubro de 2003 ;

V - o reconhecimento das cadeias criativa, produtiva, distributiva e mediadora do livro, da leitura, da escrita, da literatura e das bibliotecas como integrantes fundamentais e dinamizadoras da economia criativa.');
INSERT INTO catalogo.politica (id, nome, ano, medida_provisoria, medida_provisoria_inicio_vigencia, legislacao, vigencia_inicio, vigencia_fim, objetivos, observacao, acao_orcamentaria_assoc, instrumento_legal, tipo_politica, grande_area, area, created_at, updated_at, publico_alvo_legislacao) VALUES (766, 'Política de Promoção e Defesa dos Direitos Autorais', '2018-01-01', 'Não se aplica', 'Não se aplica', '8469/2015 ', '2015-06-22', null, 'Apoiar e promover a difusão, o ensino e a pesquisa sobre direitos autorais, a formação de recursos humanos para atuar nos temas de direitos autorais e, no que couber, dos conhecimentos tradicionais e expressões culturais tradicionais; além da implantação do sistema brasileiro de registro de direitos autorais e de ações de combate à pirataria.', '#N/A', '#N/A', 'Decreto', 4, 1, 18, null, null, 'Sociedade civil (usuários e titulares), academia, agentes públicos e privados, órgãos e instituições públicas e privadas que lidam com o tema.');
INSERT INTO catalogo.politica (id, nome, ano, medida_provisoria, medida_provisoria_inicio_vigencia, legislacao, vigencia_inicio, vigencia_fim, objetivos, observacao, acao_orcamentaria_assoc, instrumento_legal, tipo_politica, grande_area, area, created_at, updated_at, publico_alvo_legislacao) VALUES (767, 'Politica de Regulação da Gestão Coletiva dos Direitos Autorais', '2018-01-01', 'Não se aplica', 'Não se aplica', '8469/2015 ', '2015-06-22', null, 'Criar um ambiente regulatório favorável que viabilize a transparência e o bom funcionamento do sistema de gestão coletiva de direitos autorais, por meio do monitoramento e fiscalização das entidades de gestão coletiva; a implantação do núcleo de mediação e arbitragem e da Comissão Permanente para o Aperfeiçoamento da Gestão Coletiva (CPAGC).', '#N/A', '#N/A', 'Decreto', 4, 1, 18, null, null, 'Entidades de Gestão Coletiva, titulares e usuários de direitos autorais.');
INSERT INTO catalogo.politica (id, nome, ano, medida_provisoria, medida_provisoria_inicio_vigencia, legislacao, vigencia_inicio, vigencia_fim, objetivos, observacao, acao_orcamentaria_assoc, instrumento_legal, tipo_politica, grande_area, area, created_at, updated_at, publico_alvo_legislacao) VALUES (768, 'Programa de Desenvolvimento e Preservação do Livro (Prodelivro)', '1979-01-01', 'Não se aplica', 'Não se aplica', '1234/1979', '1979-12-18', '1985-08-19', 'Incrementar e facilitar a produc?a?o, a difusa?o e o acesso ao livro', '#N/A', 'Política com ação orçamentária associada', 'Portaria', 5, 1, 19, null, null, 'Sem especificação');
INSERT INTO catalogo.politica (id, nome, ano, medida_provisoria, medida_provisoria_inicio_vigencia, legislacao, vigencia_inicio, vigencia_fim, objetivos, observacao, acao_orcamentaria_assoc, instrumento_legal, tipo_politica, grande_area, area, created_at, updated_at, publico_alvo_legislacao) VALUES (769, 'Programa Nacional do Livro Didático (PNLD)', '1985-01-01', 'Não se aplica', 'Não se aplica', '91542/1985', '1985-08-19', '2017-07-18', 'Art. 1º. Fica instituído o Programa Nacional do Livro Didático, com a finalidade de distribuir livros escolares aos estudantes matriculados nas escolas públicas de 1º Grau.', '#N/A', 'Política com ação orçamentária associada', 'Decreto', 5, 1, 19, null, null, 'Art. 1º. (..) estudantes matriculados nas escolas públicas de 1º Grau.');
INSERT INTO catalogo.politica (id, nome, ano, medida_provisoria, medida_provisoria_inicio_vigencia, legislacao, vigencia_inicio, vigencia_fim, objetivos, observacao, acao_orcamentaria_assoc, instrumento_legal, tipo_politica, grande_area, area, created_at, updated_at, publico_alvo_legislacao) VALUES (770, 'Programa Nacional Biblioteca na Escola (PNBE)', '1997-01-01', 'Não se aplica', 'Não se aplica', '584/1997', '1997-04-28', '2017-07-18', 'Art. 1º – Instituir o Programa Nacional Biblioteca da Escola, com as as seguintes características básicas: 
 
a) aquisição de obras de literatura brasileira, textos sobre a formação histórica, econômica e cultural do Brasil, e de dicionários, atlas, enciclopédias e outros materiais de apoio e obras de referência; 
 
b) produção e difusão de materiais destinados a apoiar projetos de capacitação e atualização do professor que atua no ensino fundamental; 
 
c) apoio e difusão de programas destinados a incentivar o hábito de leitura; 
 
d) produção e difusão de materiais audiovisuais e de caráter educacional e científico . ', '#N/A', 'Política com ação orçamentária associada', 'Portaria', 5, 1, 19, null, null, 'Ementa: a necessidade de oferecer aos professores e alunos de ensino fundamental um conjunto de obras literárias e textos sobre a formação histórica, econômica e cultural do Brasil, além de obras de referência');
INSERT INTO catalogo.politica (id, nome, ano, medida_provisoria, medida_provisoria_inicio_vigencia, legislacao, vigencia_inicio, vigencia_fim, objetivos, observacao, acao_orcamentaria_assoc, instrumento_legal, tipo_politica, grande_area, area, created_at, updated_at, publico_alvo_legislacao) VALUES (771, 'Programa Nacional do Livro e do Material Didático (PNLD)', '2017-01-01', 'Não se aplica', 'Não se aplica', '9099/2017', '2017-07-18', null, 'Art. 1º O Programa Nacional do Livro e do Material Didático - PNLD, executado no âmbito do Ministério da Educação, será destinado a avaliar e a disponibilizar obras didáticas, pedagógicas e literárias, entre outros materiais de apoio à prática educativa, de forma sistemática, regular e gratuita, às escolas públicas de educação básica das redes federal, estaduais, municipais e distrital e às instituições comunitárias, confessionais ou filantrópicas sem fins lucrativos e conveniadas com o Poder Público.', '#N/A', 'Política com ação orçamentária associada', 'Decreto', 5, 1, 19, null, null, 'Art. 1º (...)
(...)
§ 2º As ações do PNLD serão destinadas aos estudantes, aos professores e aos gestores das instituições a que se refere o caput , as quais garantirão o acesso aos materiais didáticos distribuídos, inclusive fora do ambiente escolar, no caso dos materiais didáticos de uso individual.');
INSERT INTO catalogo.politica (id, nome, ano, medida_provisoria, medida_provisoria_inicio_vigencia, legislacao, vigencia_inicio, vigencia_fim, objetivos, observacao, acao_orcamentaria_assoc, instrumento_legal, tipo_politica, grande_area, area, created_at, updated_at, publico_alvo_legislacao) VALUES (772, 'Plano Nacional de Cultura (PNC)', '2010-01-01', 'Não se aplica', 'Não se aplica', '12343/2010', '2010-12-02', '2024-12-31', 'Art. 3o  Compete ao poder público, nos termos desta Lei: 

I - formular políticas públicas e programas que conduzam à efetivação dos objetivos, diretrizes e metas do Plano; 

II - garantir a avaliação e a mensuração do desempenho do Plano Nacional de Cultura e assegurar sua efetivação pelos órgãos responsáveis; 

III - fomentar a cultura de forma ampla, por meio da promoção e difusão, da realização de editais e seleções públicas para o estímulo a projetos e processos culturais, da concessão de apoio financeiro e fiscal aos agentes culturais, da adoção de subsídios econômicos, da implantação regulada de fundos públicos e privados, entre outros incentivos, nos termos da lei; 

IV - proteger e promover a diversidade cultural, a criação artística e suas manifestações e as expressões culturais, individuais ou coletivas, de todos os grupos étnicos e suas derivações sociais, reconhecendo a abrangência da noção de cultura em todo o território nacional e garantindo a multiplicidade de seus valores e formações; 

V - promover e estimular o acesso à produção e ao empreendimento cultural; a circulação e o intercâmbio de bens, serviços e conteúdos culturais; e o contato e a fruição do público com a arte e a cultura de forma universal; 

VI - garantir a preservação do patrimônio cultural brasileiro, resguardando os bens de natureza material e imaterial, os documentos históricos, acervos e coleções, as formações urbanas e rurais, as línguas e cosmologias indígenas, os sítios arqueológicos pré-históricos e as obras de arte, tomados individualmente ou em conjunto, portadores de referência aos valores, identidades, ações e memórias dos diferentes grupos formadores da sociedade brasileira; 

VII - articular as políticas públicas de cultura e promover a organização de redes e consórcios para a sua implantação, de forma integrada com as políticas públicas de educação, comunicação, ciência e tecnologia, direitos humanos, meio ambiente, turismo, planejamento urbano e cidades, desenvolvimento econômico e social, indústria e comércio, relações exteriores, dentre outras; 

VIII - dinamizar as políticas de intercâmbio e a difusão da cultura brasileira no exterior, promovendo bens culturais e criações artísticas brasileiras no ambiente internacional; dar suporte à presença desses produtos nos mercados de interesse econômico e geopolítico do País; 

IX - organizar instâncias consultivas e de participação da sociedade para contribuir na formulação e debater estratégias de execução das políticas públicas de cultura; 

X - regular o mercado interno, estimulando os produtos culturais brasileiros com o objetivo de reduzir desigualdades sociais e regionais, profissionalizando os agentes culturais, formalizando o mercado e qualificando as relações de trabalho na cultura, consolidando e ampliando os níveis de emprego e renda, fortalecendo redes de colaboração, valorizando empreendimentos de economia solidária e controlando abusos de poder econômico; 

XI - coordenar o processo de elaboração de planos setoriais para as diferentes áreas artísticas, respeitando seus desdobramentos e segmentações, e também para os demais campos de manifestação simbólica identificados entre as diversas expressões culturais e que reivindiquem a sua estruturação nacional; 

XII - incentivar a adesão de organizações e instituições do setor privado e entidades da sociedade civil às diretrizes e metas do Plano Nacional de Cultura por meio de ações próprias, parcerias, participação em programas e integração ao Sistema Nacional de Informações e Indicadores Culturais - SNIIC. ', '#N/A', 'Política com ação orçamentária associada', 'Lei ordinária', 3, 1, 18, null, null, 'Sem especificação');
INSERT INTO catalogo.politica (id, nome, ano, medida_provisoria, medida_provisoria_inicio_vigencia, legislacao, vigencia_inicio, vigencia_fim, objetivos, observacao, acao_orcamentaria_assoc, instrumento_legal, tipo_politica, grande_area, area, created_at, updated_at, publico_alvo_legislacao) VALUES (773, 'Programa Nacional de Cultura, Educação e Cidadania - CULTURA VIVA', '2004-01-01', 'Não se aplica', 'Não se aplica', '156/2004', '2004-07-06', '2013-12-30', 'Art. 1º Criar o Programa Nacional de Cultura, Educação e Cidadania - CULTURA VIVA, com o objetivo de promover o acesso aos meios de fruição, produção e difusão cultural, assim como de potencializar energias sociais e culturais, visando a construção de novos valores de cooperação e solidariedade.', '#N/A', 'Política com ação orçamentária associada', 'Portaria', 5, 1, 18, null, null, 'Art. 3º O Programa CULTURA VIVA se destina à populações de baixa renda; estudantes da rede básica de ensino; comunidades indígenas, rurais e quilombolas; agentes culturais, artistas, professores e militantes que desenvolvem ações no combate à exclusão social e cultural');
INSERT INTO catalogo.politica (id, nome, ano, medida_provisoria, medida_provisoria_inicio_vigencia, legislacao, vigencia_inicio, vigencia_fim, objetivos, observacao, acao_orcamentaria_assoc, instrumento_legal, tipo_politica, grande_area, area, created_at, updated_at, publico_alvo_legislacao) VALUES (774, 'Política Nacional Aldir Blanc de Fomento à Cultura', '2022-01-01', 'Não se aplica', 'Não se aplica', '14399/2022', '2022-07-08', null, 'Art. 2º São objetivos da Política Nacional Aldir Blanc de Fomento à Cultura:

I - estimular ações, iniciativas, atividades e projetos culturais, por meio de apoio e de fomento da União, dos Estados, do Distrito Federal e dos Municípios;

II - garantir o financiamento e a manutenção de ações, de espaços, de ambientes e de iniciativas artístico-culturais que contribuam para o pleno exercício dos direitos culturais pelos cidadãos brasileiros, dispondo-lhes os meios e os insumos necessários para a produção, o registro, a gestão e a difusão cultural de suas práticas e seus saberes, fazeres, modos de vida, bens, produtos e serviços culturais;

III - democratizar o acesso à fruição e à produção artística e cultural nos Estados, no Distrito Federal e nos Municípios, inclusive em suas áreas periféricas, urbanas e rurais;

IV - garantir o financiamento para as ações, os projetos, as políticas e os programas públicos de cultura previstos nos planos de cultura dos Estados, dos Municípios e do Distrito Federal;

V - estabelecer diretrizes para a prestação de contas de projetos culturais, inclusive audiovisuais, realizados no âmbito das leis federais, estaduais, municipais e distritais de incentivo à cultura.

Art. 3º São princípios da Política Nacional Aldir Blanc de Fomento à Cultura:

I - eficiência, racionalidade administrativa e desburocratização;

II - universalidade no atendimento às áreas de atuação previstas nesta Lei;

III - descentralização dos recursos de que trata esta Lei;

IV - respeito à diversidade cultural;

V - gestão democrática e compartilhada dos poderes públicos entre si e entre eles e a sociedade civil;

VI - universalização, padronização e simplificação dos procedimentos e dos mecanismos de repasse, de contrapartidas e de prestação de contas relativos à aplicação dos recursos de que trata esta Lei;

VII - desconcentração por beneficiários na destinação de recursos de que trata esta Lei;

VIII - estímulo à participação e ao controle social das políticas públicas de cultura, por meio dos órgãos e instâncias competentes dos Estados, do Distrito Federal e dos Municípios;

IX - direito de qualquer pessoa física ou jurídica de candidatar-se a receber benefício oriundo de recursos de que trata esta Lei oferecido por Estados, por Municípios ou pelo Distrito Federal.', '#N/A', 'Política com ação orçamentária associada', 'Lei ordinária', 4, 1, 18, null, null, 'Art. 4º A Política Nacional Aldir Blanc de Fomento à Cultura tem como beneficiários os trabalhadores da cultura e as entidades e pessoas físicas e jurídicas que atuem na produção, na difusão, na promoção, na preservação e na aquisição de bens, produtos ou serviços artísticos e culturais, inclusive o patrimônio cultural material e imaterial.');

