requirejs.config({
    baseUrl: '++theme++tema-do-portal-correios/static/js/cod',

    paths: {
        bib: '../bib',
        signal: '../bib/signalr.min',
        // dynatrace: 'https://js-cdn.dynatrace.com/jstag/17cdb8fd6ce/bf62475kpy/47fca5cf7bd2003c_complete.js'
        domReady: 'bib/popup.js',
    },

    shim: {
        'bib/chatweb': {
            //These script dependencies should be loaded before loading
            //chatcorreios.js
            deps: ['signal'],
            //Once loaded, use the global 'ChatCorreios' as the
            //module value.
            exports: 'ChatWeb'
        }
    }
});

requirejs(["acessibilidade", "menu", "buscaNoPortal", "chatcorreios", "cookies", "rodape", "popup"], function(acessibilidade, menu, busca, chatCorreios, cookiesCorreios, rodape, popup) {

    var blackFridayHome = document.querySelector('[data-blackfriday]')
    if (blackFridayHome) {
        requirejs(["blackFridayCorreios"], function(blackFridayCorreios) {
            blackFridayCorreios.getBlackFriday()
        })
    }

    acessibilidade.acessibilidade();

    //Monta o menu do Portal para telas grandes
    menu.identificaItemMenu();

    busca.BuscaNoPortal();

    chatCorreios.preparaChat();

    cookiesCorreios.mainCookiesCorreios();

    //Mostra a opção voltar para a pagina anterior no menu lateral
    menu.mostraOpcaoVoltar();

    rodape.ajustaLayoutRodape()
    rodape.criaEventosClick()
    rodape.scrollLeftRight()
    popup.verficaDestinoLink()


    // Gerencia a exibição dos banners com cards e links
    if ( document.querySelector( '.banner-cards-links' )) requirejs( ['tinymceCorreios' ], ( banners ) => banners.bannerWithCards() );


    // Gerencia a criação do objeto cards-configuraveis
    if ( document.querySelector( '.template-cards_configuraveis' ) || document.querySelector( '#form #formfield-form-widgets-cntnr-title' )) {
        requirejs( ['tinymceCorreios' ], ( cards ) => cards.createCardsConfiguraveis() );
    }

    // Gerencia a edicao do objeto cards-configuraveis
    if ( document.querySelector( '#formfield-form-widgets-IRichText-text' ) || document.querySelector( '#form #formfield-form-widgets-cntnr-title' )) {
        requirejs( ['tinymceCorreios' ], ( cards ) => cards.tinymceMutationObserver())
    }

    let testahome = document.querySelector(".section-homepage.template-homeview");
    if (testahome) {
        requirejs(['portletsHome'], function(portlets) {
            // portlets.ajustarQtdIconesAcessoRapido();
            portlets.verificaCardCarrossel();
            portlets.verificaBanner(); 
            portlets.verificaPortletNoticias();
        });
    }

    const edicaoPortletCard = document.querySelectorAll('.section-homepage.template-manage-portlets');
    if (edicaoPortletCard.length){
        requirejs(['portletsHome'], function(portlets) {
            portlets.verificaEdicaoPortletCards();
        });
    }

    const urlPortal = ['www.correios.com.br'];
    urlPortal.includes(window.location.host) ? require(['https://js-cdn.dynatrace.com/jstag/17cdb8fd6ce/bf62475kpy/47fca5cf7bd2003c_complete.js'], function(){}) : false;

    var testaPaginaInterna = document.querySelector(".template-document_view");
    if (testaPaginaInterna) {
        requirejs(['tinymceCorreios'], function(tinymceCorreios) {
            // Não mostrar o menu lateral quando a tela estiver com o botão de hamburguer após o seu carregamento
            tinymceCorreios.trataCargaInicialMenuLateral();

            var testaAccordion = document.querySelector(".accordion");
            if (testaAccordion) {
                tinymceCorreios.inicializaAccordion();
            }

            var testaGaleriaImagem = document.querySelector(".container-galeria-imagem");
            if (testaGaleriaImagem) {
                tinymceCorreios.showSlides();
            }

            if ( document.querySelector(".gal-imagem-rotativo") ){
                tinymceCorreios.carrosselImg();
            }

            if (document.querySelectorAll("#parent-fieldname-text .container-banner-rotativo")); {
                tinymceCorreios.CarroselBanner();
            }

            const contador = document.querySelectorAll("#parent-fieldname-text #tinyMCE-content-core")
            if (contador.length) {
                tinymceCorreios.contador(contador);
            }
        });
    }

    var compBuscaCEP = document.querySelector('[data-componente-buscaCEP]')
    if (compBuscaCEP) {
        requirejs(["buscaCEP"], function(buscaCEP) {
            buscaCEP.getBusca();

        })
    }

    if (document.querySelector(".template-contarpalavrasview")) {
        requirejs(['contarPalavras'], function(contarPalavras) {
            contarPalavras.contaPalavras()
        });
    }

    // Verifica se o portlet de preços e prazos está habilitado
    const campoOrigemCEP = document.querySelector('[data-cep-origem]')
    if (campoOrigemCEP){
        requirejs(['validaCEP', 'precosEPrazos', 'validaMedidasPrecosEPrazos'], function(validaCEP, precosEPrazos, validaMedidasPrecosEPrazos) {
            validaCEP.getValidaCepOrigem();
            validaCEP.getValidaCEPDestino();
            precosEPrazos.getSimular();
            validaMedidasPrecosEPrazos.getTrataMedidas();
        });
    }
});
