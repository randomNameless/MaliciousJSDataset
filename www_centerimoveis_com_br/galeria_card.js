$(".setaCard").on("click", function () {

    // Recupera os data meta
    var tipo = $(this).data("tipo");
    var id = $(this).data("id");

    // Recupera o objeto
    var obj = $("#" + id);

    // Recupera os data meta
    var ativo = obj.data("ativo");
    var total = obj.data("total");
    var itens = obj.data("itens");

    // Remove 1 do total
    total = total - 1;

    // Verifica se é para pegar a próxima imagem
    // ou se é para voltar
    if(tipo === "proximo") {
        // Verifica se a imagem ativa é a ultima imagem
        if(ativo === total) {
            // Se for a ultima imagem volta para a primeira
            obj.data("ativo", 0);
            obj.css("background-image", "url(" + itens[0] +  ")");
        } else {
            obj.data("ativo", (ativo + 1));
            obj.css("background-image", "url(" + itens[ativo + 1] +  ")");
        }
    } else {
        // Verifica se a imagem ativa é a primeira
        if(ativo === 0) {
            // Caso seja, volta a ultima imagem.
            obj.data("ativo", total);
            obj.css("background-image", "url(" + itens[total] +  ")");
        } else {
            obj.data("ativo", (ativo - 1));
            obj.css("background-image", "url(" + itens[ativo - 1] +  ")");
        }
    }
});