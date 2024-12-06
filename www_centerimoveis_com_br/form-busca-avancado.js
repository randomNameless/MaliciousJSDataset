jQuery(".vagas-avancado").on('change', function () {
    jQuery('.vagas-avancado').not(this).prop('checked', false);
    jQuery(this).siblings('input:checkbox').prop('checked', false);
});

jQuery(".banheiros-avancado").on('change', function () {
    jQuery('.banheiros-avancado').not(this).prop('checked', false);
    jQuery(this).siblings('input:checkbox').prop('checked', false);
});

jQuery(".dormitorios-avancado").on('change', function () {
    jQuery('.dormitorios-avancado').not(this).prop('checked', false);
    jQuery(this).siblings('input:checkbox').prop('checked', false);
});

jQuery(".suites-avancado").on('change', function () {
    jQuery('.suites-avancado').not(this).prop('checked', false);
    jQuery(this).siblings('input:checkbox').prop('checked', false);
});

/**
 * manage selected items
 */
jQuery(".label-item-busca").on('change', function (e) {
    e.preventDefault();
    var name = this.id.split('-', 2)[0] + '[]';
    var group_label = '.label-' + this.id.split('-', 2)[0];

    var checkboxes = selectedItens(document.getElementsByName(name));
    if (!checkboxes) {
        return $(group_label).removeClass('active');
    }
    $(group_label).removeClass('active');
    if (!$(`#${this.id}`).hasClass('active')) {
        return $(`#${this.id}`).addClass('active');
    }
});


/**
 * return the selected item in checkbox form
 * how this inputs is programed to be possible select only one item, when the loop find the selected value, he break the loop to return imediately
 */
function selectedItens(checkboxes) {
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) return checkboxes[i].value;
    }
    return null;
}

/**
 * ref a lista de preço fixo
 */

$('.lista_preco_fixo').select2();


/**
 * manipula a don para valor do imovel para lista de selects do form modelo default
 */
jQuery(".btn_finalidade_form_busca_avancado").on('click', function (e) {
    e.preventDefault();
    var finalide = $(this).children('input[name="finalidade"]').val();
    finalidade = finalide[0].toUpperCase() + finalide.substr(1);
    select_valor_html(finalidade);
});

jQuery("#finalidade_type_select").on('change', function (e) {
    e.preventDefault();
    var finalidade = this.value;
    select_valor_html(finalidade);
    change_label_value(finalidade);
});

function change_label_value(finalidade) {
    if (finalidade == 'Aluguel') {
        $(".tituloPreco").html("para Aluguel");
        $("#alugar").attr('checked', 'checked');

        if (valores_lista_avancado.tipo_plugin == 'crm') {
            $("#exibe_valortotal").css("display", "block");
        }
    }

    if (finalidade == 'Temporada') {
        $("#temporada").attr('checked', 'checked');
        $(".tituloPreco").html("para Temporada");
        $("#exibe_valortotal").css("display", "none");
    }

    if (finalidade == 'Venda' || finalidade == 'Lancamento') {
        $(".tituloPreco").html("para Venda");
        $("#comprar").attr('checked', 'checked');
        $("#exibe_valortotal").css("display", "none");
    }

    if (finalidade == 'Venda e Aluguel') {
        $("#venda_aluguel").attr('checked', 'checked');
        $(".tituloPreco").html("para Venda ou Aluguel");

        if (valores_lista_avancado.tipo_plugin == 'crm') {
            $("#exibe_valortotal").css("display", "block");
        }
    }
}

function select_valor_html(finalidade) {
    var lista_valor_imoveis_venda_default = [
        { 'val': '0;40000', 'title': 'Até 40.000,00' },
        { 'val': '40000;60000', 'title': 'De 40.000,00 a 60.000,00' },
        { 'val': '60000;80000', 'title': 'De 60.000,00 a 80.000,00' },
        { 'val': '100000;200000', 'title': 'De 100.000,00 a 200.000,00' },
        { 'val': '200000;400000', 'title': 'De 200.000,00 a 400.000,00' },
        { 'val': '400000;600000', 'title': 'De 400.000,00 a 600.000,00' },
        { 'val': '600000;800000', 'title': 'De 600.000,00 a 800.000,00' },
        { 'val': '800000;1000000', 'title': 'De 800.000,00 a 1.000.000,00' },
        { 'val': '1000000;2000000', 'title': 'De 1.000.000,00 a 2.000.000,00' },
        { 'val': '2000000;4000000', 'title': 'De 2.000.000,00 a 4.000.000,00' },
        { 'val': '4000000;6000000', 'title': 'De 4.000.000,00 a 6.000.000,00' },
        { 'val': '6000000;', 'title': 'Acima de 6.000.000,00' }
    ];
    
    var lista_valor_imoveis_aluguel_default = [
        { 'val': '0;600', 'title': 'Até 600,00' },
        { 'val': '600;800', 'title': 'De 600,00 a 800,00' },
        { 'val': '800;1000', 'title': 'De 800,00 a 1.000,00' },
        { 'val': '1000;2000', 'title': 'De 1.000,00 a 2.000,00' },
        { 'val': '4000;6000', 'title': 'De 4.000,00 a 6.000,00' },
        { 'val': '6000;8000', 'title': 'De 6.000,00 a 8.000,00' },
        { 'val': '8000;10000', 'title': 'De 8.000,00 a 10.000,00' },
        { 'val': '10000;20000', 'title': 'De 10.000,00 a 20.000,00' },
        { 'val': '20000;40000', 'title': 'De 20.000,00 a 40.000,00' },
        { 'val': '40000;60000', 'title': 'De 40.000,00 a 60.000,00' },
        { 'val': '60000;80000', 'title': 'De 60.000,00 a 80.000,00' },
        { 'val': '80000;', 'title': 'Acima de 80.000,00' }
    ];

    var itens = {};
    let options = '';
    if (!finalidade) return;

    if (finalidade == 'Aluguel') {
        options += '<option value="" selected> Preço Locação </option>';
        let list = JSON.parse(valores_lista_avancado.lista_valor_imoveis_aluguel)
        itens = list.length > 0 ? list : lista_valor_imoveis_aluguel_default;
    }


    if (finalidade == 'Temporada') {
        options += '<option value="" selected> Preço Temporada </option>';
        let list = JSON.parse(valores_lista_avancado.lista_valor_imoveis_temporada);
        itens = list.length > 0 ? list : lista_valor_imoveis_aluguel_default;
    }

    if (finalidade == 'Venda' || finalidade == 'Lancamento') {
        options += '<option value="" selected> Preço de venda </option>';
        let list = JSON.parse(valores_lista_avancado.lista_valor_imoveis_venda);
        itens = list.length > 0 ? list : lista_valor_imoveis_venda_default;
    }

    if (finalidade == 'Venda e Aluguel') {
        options += '<option value="" selected> Preço </option>';
        let list = JSON.parse(valores_lista_avancado.lista_valor_imoveis_venda);
        itens = list.length > 0 ? list : lista_valor_imoveis_venda_default;
    }

    for (var i = 0; i < itens.length; i++) {
        options += '<option value="' + itens[i].val + '">' + itens[i].title + '</option>';
    }

    $('.select_valor').empty();
    $('.select_valor').append(options);
    $('.select_valor').trigger("chosen:updated");

    $('.lista_preco_fixo').data('placeholder', `Preço para ${finalidade}`);
    $('.lista_preco_fixo').select2();
}