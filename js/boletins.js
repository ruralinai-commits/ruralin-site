/* ====================================================================
   LISTA DE BOLETINS — RURALIN
   --------------------------------------------------------------------
   Este é o ÚNICO arquivo que você edita ao publicar um boletim novo.
   NÃO precisa mexer no index.html nunca mais.

   COMO ADICIONAR UM BOLETIM NOVO:
   1) Salve o arquivo do boletim dentro da pasta "relatorios/".
   2) Copie um bloco { ... } abaixo e cole NO TOPO da lista (logo após
      o colchete [ ), para ele virar a "Edição atual".
   3) Preencha os 4 campos. Salve. Commit -> Push. Pronto.

   REGRAS:
   - "arquivo": o nome EXATO do arquivo na pasta relatorios
                (minúsculas, com hífen, sem acento, sem espaço).
   - Separe cada bloco por vírgula.
   - "tipo" controla o ícone: use "mercado" (calendário) ou "insumos" (carrinho).
   - "resumo" só aparece no destaque (a edição atual). Pode deixar nas outras.
   ==================================================================== */

window.BOLETINS = [

  {
    arquivo: "info-junho-15-19.html",
    data: "Semana de 15 a 19 de junho de 2026",
    titulo: "Soja em recuperação e milho pressionado pela safrinha",
    resumo: "Panorama da semana, leitura de câmbio e clima e os principais pontos de atenção para quem está definindo a comercialização da safra.",
    tipo: "mercado"
  },

  {
    arquivo: "info-junho-08-12.html",
    data: "08 a 12 jun. 2026",
    titulo: "Exportações aquecidas sustentam os preços da soja",
    tipo: "mercado"
  },

  {
    arquivo: "info-insumos-26-27.html",
    data: "Informativo de Insumos",
    titulo: "Panorama de preços e disponibilidade de insumos",
    tipo: "insumos"
  }

];
