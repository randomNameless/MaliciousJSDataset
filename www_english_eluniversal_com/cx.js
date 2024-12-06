/*!
 * CX JavaScript Library v2.1.4
 * http://www.campusxity.com/
 *
 * Date: 2018-02-23T00:00Z
 */

function cargarPortada(seccion) {
    
    if (seccion === null || seccion === undefined || seccion.trim().length <= 0 ) {
        seccion = '01-HOME';
    } else if (seccion === 'economia') {
        seccion = '01-ECO';
    } else if (seccion === 'caracas') {
        seccion = '01-CCS';
    } else if (seccion === 'deportes') {
        seccion = '01-DEP';
    } else if (seccion === 'opinion') {
        seccion = '01-OPI';
    } else if (seccion === 'entretenimiento') {
        seccion = '01-ENT';
    } else if (seccion === 'internacional') {
        seccion = '01-INT';
    } else if (seccion === 'sucesos') {
        seccion = '01-SUC';
    } else if (seccion === 'politica') {
        seccion = '01-POL';
    } else if (seccion === 'universo-empresarial') {
        seccion = '01-ECO-UNE';
    } else if (seccion === 'historias-de-vida') {
        seccion = '01-CCS-HIS';
    } else if (seccion === 'venezuela') {
        seccion = '01-VEN';
    } else if (seccion === 'sociales') {
        seccion = '01-SOC';
    } else if (seccion === 'guia-turistica') {
        seccion = '01-TUR';
    } else if (seccion === 'estilo-de-vida') {
        seccion = '01-VID';
    } else if (seccion === 'gastronomia') {
        seccion = '01-GST';
    } else if (seccion === 'tecnologia') {
        seccion = '01-TEC';
    } else if (seccion === 'doblevia') {
        seccion = '01-DBL';
    } else if (seccion === 'daily-news') {
        seccion = '01-DNW';
    }else if (seccion === 'suplementos') {
        seccion = '01-SUP';
    } else if (seccion === 'lazos') {
        seccion = '01-SUP-LAZ';
    } else if (seccion === 'verbigracia') {
        seccion = '01-SUP-VER';
    } else if (seccion === 'bienestar') {
        seccion = '01-SUP-BIE';
    } else if (seccion === 'certera-edad') {
        seccion = '01-SUP-CER';
    } else if (seccion === 'obituarios') {
        seccion = '01-OBI';
    } 
    
	
    var inicio = new Date(); 
    
    $.ajax({
        type: "GET",
        dataType: "json",
        url: 'rest.php?accion=carga_portada&seccioncod=' + seccion,
        success: function(data) {
            
            console.log('Data -------------------> ' + ((new Date()).getTime() - inicio.getTime()));
            this.pagina = data;
            var notas = this.pagina.bloques[0].notas;
            
            for(var i = 0 ; i < notas.length ; i++) {
                var fecha = Date(notas[i].nota.fch_public);
                
                $("#notas").append(
                    '<li>'
                    +'<article class="local clearfix">'
                    +'<figure class="thumb">'
                    +'<a href="'
                    + notas[i].nota.nota_url+'" title="">'
                    +'<img alt="" src="'
                    + notas[i].nota.imagenes[0].notaimag_url+'" width="100%" height="auto">'
                    +'</a>'
                    +'</figure>'
                    +'<div class="txt">'
                    +'<h3 class="title">'
                    +'<a title="" href="'+notas[i].nota.nota_url+'">' 
                    + notas[i].nota.titulo +   '</a>'
                    +'</h3>'
                    +'<p class="epigraph">'
                    + '<span class="c1">'+ notas[i].nota.fch_public + '</span>'
                    + '<a href="#" title="" class="c2">' + notas[i].nota.subtitulo + '</a>'
                    +'</p>'
                    +'<p class="newtext">' + notas[i].nota.sumario + '</p>'
                    + '<span class="c1">'
                    + (seccion == '01-OPI'? 
                        notas[i].nota.autores[0].apodo != null && notas[i].nota.autores[0].apodo.length >0 ?  
                            notas[i].nota.autores[0].apodo:
                                notas[i].nota.autores[0].nombrecorto:'')
                    +'</span>'
                    +'</div>'
                    +'</article>'
                    +'</li>'
                );
            }
        },
        error: function(data) {
            console.log('No pude consultar las notas. ' + JSON.stringify(data));
        }
    });
}

function cargarNota(id) {

//    var nota;
    var inicio = new Date();        
    $.ajax({
        type: "GET",
        dataType: "json",
        url: '/rest.php?accion=carga_nota&nronota2=' + id,
        success: function(data) {
            console.log('Data -------------------> ' + ((new Date()).getTime() - inicio.getTime()));        
            nota = data;
        },
        error: function(data) {
            console.log('No pude consultar la nota. id=' + id);
        }
    });
}

function buscaNotas(query) {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: '/rest.php?accion=carga_nota&nronota2=' + id,
        success: function(data) {
            console.log('Data -------------------> ' + ((new Date()).getTime() - inicio.getTime()));        
            nota = data;
        },
        error: function(data) {
            console.log('No pude consultar la nota. id=' + id);
        }
    });
}

function escribeNota(nota_json) {

    if (nota_json.nota_estatus01_cod == 'ACT'){
        this.escribeNotaValidada(nota_json);
    }else if(nota_json.nota_estatus01_cod != 'ACT' &&  
        (document.referrer.includes('gestiona.pagina.artesanossiglo21.com') || 
            document.referrer.includes('knoios.artesanossiglo21.com'))) {
            $('#mensaje_mostrar').html("Esta nota esta en fase de diseño ya que no se encuentra con estatus activa, para visualizarla correctamente cambiar su estatus a activa");
            this.escribeNotaValidada(nota_json);

    }else{
        $('#mensaje_mostrar').html("La nota que esta intentando visualizar no se encuentra disponible, por favor intente mas tarde");
    }
}

function escribeResultadoConsulta(w) {
    console.log(JSON.stringify(w));
    if (w.results) {
        for (var i = 0; i < w.results.length; i++) {
            var nota = w.results[i];
            $('#bloque_notas')
                .append('<li>'
                     + '<article class="local clearfix">'
                     + '<figure class="thumb">'
                     + '<a href="' + nota.nota_url + '" title="' + nota.titulo +' ">'
                     + '<img alt="" src="' + nota.imagenes[0].notaimag_url + '" width="100%" height="auto">'
                     + '</a>' 
                     + '</figure>'
                     + '<div class="txt">'
                     + '<h3 class="title">'
                     + '<a title="' + nota.titulo + '" href="' + nota.nota_url + '">'
                     + nota.titulo 
                     + '</a>'
                     + '</h3>'
                     + '<p class="epigraph">'
                     + '<span class="c1">'
                     + nota.fch_public 
                     + '</span>'
                     + '<a href="#" title="" class="c2">'
                     + nota.seccioncod1 + ' --> Sustituir por el nombre de la sección'
                     + '</a>'
                     + '</p>'
                     + '<p class="newtext">'
                     + nota.sumario 
                     + '</p>'
                     + '</div>' 
                     + '</article>'
                     + '</li>');
        }
    }
}

function escribeNotaValidada(nota_json){
    $('#antetitulo').html(nota_json.antetitulo);
    $('#meta_titulo').attr('content', nota_json.titulo);
            
    //Inclusion de Metatags...
    //setMetaTags(nota);
            
    $('#titulo').html(nota_json.titulo);
    $('#sumario').html(nota_json.sumario);
    $('#cuerpo').html(nota_json.cuerpo);
    $('#fch_public').html(nota_json.fch_public);

    if(nota_json.autores && nota_json.autores[0] && nota_json.autores[0].nombrecompleto) {
        $('#autor').html(nota_json.autores[0].nombrecompleto);    
    } else {
        $('#autor').html("EL UNIVERSAL");
    }
                
    if(nota_json.imagenes) {
        for (var i = 0; i < nota_json.imagenes.length; i++) {
            $('#imagenes')
                .html('<div class="item">'
                +'<figure class="thumb">'
                +'<a href="modal-foto.html" title="" class="zoom open-vm">'
                +'<img alt="" src="' + nota_json.imagenes[i].notaimag_url +'">'
                +'</a>'
                +'<figcaption class="credit-thumb">'
                +'<p>'
                + nota_json.imagenes[i].notaimag_titulo1
                +'</p>'
                +'<p class="robotobold">'
                +nota_json.imagenes[i].notaimag_titulo1
                +'</p>'
                +'</figcaption>'
                +'<ul class="photomore right">'
                +'<li class="dejeshare">'
                +'<a href="#" title="" class="">'
                +'<i class="icon-information"></i>'
                +'</a>'
                +'</li>'
                +'</ul>'
                +'</figure>'
                +'</div>'
                );
                        
            $('#imagenes_t')
                .html('<li data="'+(i+1)+'">'
                +'<a href="#" title="">'
                +'<img src="' + nota_json.imagenes[i].notaimag_url + '" />'
                +'</a>'
                +'</li>');
        }
    }
}