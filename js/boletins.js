/* ====================================================================
   LISTA DE INFORMES — RURALIN
   --------------------------------------------------------------------
   Este é o ÚNICO arquivo que você edita ao publicar um informe novo.
   NÃO precisa mexer no index.html nunca mais.

   COMO ADICIONAR UM INFORME NOVO:
   1) Salve o arquivo dentro da pasta "relatorios/".
   2) Copie um bloco { ... } abaixo e cole NO TOPO da lista (logo após
      o colchete [ ), para ele virar a "Edição atual" em destaque.
   3) Preencha os campos. Salve. Commit -> Push. Pronto.

   CAMPOS:
   - arquivo:   nome EXATO do arquivo na pasta relatorios
                (minúsculas, com hífen, sem acento, sem espaço).
   - data:      o texto da data que aparece no card.
   - titulo:    a manchete do informe.
   - resumo:    (opcional) frase de chamada. Só aparece no destaque.
   - categoria: controla a ABA onde o informe aparece E o ícone.
                Use uma destas: "Boletim", "Insumos", "Radar", "Relatório".
                (Se criar uma categoria nova, uma aba nova aparece sozinha.)

   REGRAS:
   - Separe cada bloco por vírgula.
   - O 1º item da lista é sempre o destaque "Edição atual".
   ==================================================================== */

window.BOLETINS = [

  {
    arquivo: "info-usda-30-06.html",
    data: "30 jun. 2026",
    titulo: "Resposta do Mercado ao USDA",
    categoria: "Boletim"
  },

  {
    arquivo: "info-junho-22-26.html",
    data: "22 a 26 jun. 2026",
    titulo: "Boletim de Mercado — Soja, Milho e Boi",
    categoria: "Boletim"
  },

  {
    arquivo: "boi-jul-ago-set-2026.html",
    data: "Informativo do Boi Gordo",
    titulo: "Panorama para jul-ago-set",
    categoria: "Boletim"
  },

  {
    arquivo: "info-insumos-26-27.html",
    data: "Informativo de Insumos",
    titulo: "Panorama de preços e disponibilidade de insumos",
    categoria: "Boletim"
  },

  {
    arquivo: "info-junho-15-19.html",
    data: "15 a 19 jun. 2026",
    titulo: "Boletim de Mercado — Soja, Milho e Boi",
    resumo: "Panorama da semana, leitura de câmbio e clima e os principais pontos de atenção para a comercialização da safra.",
    categoria: "Boletim"
  },

  {
    arquivo: "info-junho-08-12.html",
    data: "08 a 12 jun. 2026",
    titulo: "Boletim de Mercado — Soja, Milho e Boi",
    categoria: "Boletim"
  },

  {
    arquivo: "radar-agro-soja-maio-junho-2026.html",
    data: "Maio 2026",
    titulo: "Radar Agro — Soja",
    categoria: "Radar"
  },

  {
    arquivo: "radar-agro-milho-maio-2026.html",
    data: "Maio 2026",
    titulo: "Radar Agro — Milho",
    categoria: "Radar"
  },

  {
    arquivo: "radar-agro-algodao-maio-junho-2026.html",
    data: "Maio 2026",
    titulo: "Radar Agro — Algodão",
    categoria: "Radar"
  },

  {
    arquivo: "radar-agro-trigo-maio-junho-2026.html",
    data: "Maio 2026",
    titulo: "Radar Agro — Trigo",
    categoria: "Radar"
  },

  {
    arquivo: "soja-30-04.html",
    data: "27 a 30 abr. 2026",
    titulo: "Relatório de Soja",
    categoria: "Relatório"
  },

  {
    arquivo: "milho-30-04.html",
    data: "27 a 30 abr. 2026",
    titulo: "Relatório de Milho",
    categoria: "Relatório"
  },

  {
    arquivo: "trigo-30-04.html",
    data: "27 a 30 abr. 2026",
    titulo: "Relatório de Trigo",
    categoria: "Relatório"
  },

  {
    arquivo: "algodao-30-04.html",
    data: "27 a 30 abr. 2026",
    titulo: "Relatório de Algodão",
    categoria: "Relatório"
  },

  {
    arquivo: "cafe-30-04.html",
    data: "27 a 30 abr. 2026",
    titulo: "Relatório de Café",
    categoria: "Relatório"
  },

  {
    arquivo: "radar-macro-geo-maio-2026.html",
    data: "Maio 2026",
    titulo: "Radar Geopolítico & Macroeconômico",
    categoria: "Radar"
  },

  {
    arquivo: "rel-pensar-27-03.html",
    data: "Maio. 2026",
    titulo: "Relatório de Opinião",
    categoria: "Relatório"
  }

];
