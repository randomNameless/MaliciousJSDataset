
var config1 = {
        slideshowGroup: 'group1',
        transitions: ['expand', 'crossfade']
};
if (typeof hs != "undefined") {
        hs.captionEval = 'this.a.title';
}

var notif_ID = 1;
var start_ID = 1;
var list_ID = new Array();

function fadeout() {

        for (j = start_ID; j <= notif_ID; j++) {
                if ($('notification_' + j)) {
                        $('notification_' + j).fade({ duration: 1.0, from: 1, to: 0 });
                        start_ID++;
                        break;
                }
        }

}

setInterval("fadeout()", 5000);

function affiche_suggestion_videos(clefd, CLEF, Contenu, Contenu2) {
        var url = '//www.free-scores.com/ajax/suggestions_videos_youtube.php';

        Params = new Hash();

        Params.set('clefd', clefd);
        Params.set('langue', 'en');
        Params.set('CLEF', CLEF);
        Params.set('Contenu2', Contenu2);

        if ($(Contenu)) {

                var myAjax = new Ajax.Request(
                        url,
                        {
                                parameters: Params,
                                evalScripts: false,
                                method: 'post',

                                onLoading: function (xhr) {
                                },

                                onSuccess: function (xhr) {
                                        //      alert(DivID + xhr.responseText);

                                        var Reponse = xhr.responseText;

                                        $(Contenu).show();
                                        $(Contenu).innerHTML = Reponse;

                                },

                                onComplete: function (xhr) { // Toujours appel&eacute; en fin de requ&ecirc;te

                                }

                        });
        }

}

function ajout_playlist(PUBLIC_ID, suffix) {
        Params = new Hash();
        Params.set('type', 1);
        //      Params.set('langue', 'fr');
        if ($('playlist_nom' + suffix).value) Params.set('playlist_nom', $('playlist_nom' + suffix).value);
        if ($('playlist_confidentialite' + suffix).value) Params.set('playlist_confidentialite', $('playlist_confidentialite' + suffix).value);
        if (PUBLIC_ID) Params.set('PUBLIC_ID', PUBLIC_ID);
        if (document.location.host == 'm.free-scores.com') {
                var url = '//m.free-scores.com/ajax/add_playlist_ajax_en.php';
                Params.set('mobile', 1);
        }
        else {
                var url = '//www.free-scores.com/ajax/add_playlist_ajax_en.php';
                Params.set('mobile', 0);
        }

        if ($('playlist_nom' + suffix).value) {

                var myAjax = new Ajax.Request(
                        url,
                        {
                                parameters: Params,
                                evalScripts: false,
                                method: 'post',
                                onLoading: function (xhr) {
                                },

                                onSuccess: function (xhr) {
                                        var Reponse2 = JSON.parse(xhr.responseText);

                                        if (Reponse2.Erreur == 10) {
                                                alert('You are not connected');
                                        }
                                        else {
                                                Add_notification('Playlist ' + $('playlist_nom' + suffix).value + ' created');
                                                $('playlist_nom' + suffix).value = '';
                                                $('playlist_confidentialite' + suffix).value = '';
                                                if ($('ouvrir_creer_playlist' + suffix)) $('ouvrir_creer_playlist' + suffix).style.display = '';
                                                if ($('fermer_creer_playlist' + suffix)) $('fermer_creer_playlist' + suffix).style.display = 'none';

                                                if (suffix = '_G') {

                                                        var parente = document.getElementById('list_playlist');

                                                        var sp1 = document.createElement('a');
                                                        sp1.setAttribute('href', '//www.free-scores.com/list_playlist_en.php?p=' + Reponse2.Pcrypt);
                                                        sp1.setAttribute('class', 'g');
                                                        sp1.setAttribute('style', 'display:block;position:relative;background-color:#efefef;padding:8px 0px 8px 25px;border-bottom:solid 2px #fff;text-align:left');
                                                        var sp2 = document.createElement('span');
                                                        sp2.setAttribute('class', 'sprite-image_invert biblio_s_gris');
                                                        sp2.setAttribute('style', 'position:absolute;left:5px;');
                                                        var sp1_content = document.createTextNode(Params.get('playlist_nom') + " (0) ");

                                                        sp1.appendChild(sp1_content);
                                                        sp1.appendChild(sp2);

                                                        parente.appendChild(sp1);
                                                        //alert(sp1.innerHTML);

                                                }

                                                if (PUBLIC_ID) {
                                                        //list_playlist("<?echo $membre_connecte['pseudo'];?>", PUBLIC_ID);
                                                }

                                        }

                                },
                                onComplete: function (xhr) { // Toujours appel&eacute; en fin de requ&ecirc;te

                                }

                        });
        }
}

function update_sortable_playlist(PHash, IDs) {

        Params = new Hash();
        Params.set('type', 6);
        if (IDs) Params.set('IDs', IDs);
        if (PHash) Params.set('Hash', PHash);

        if ($('playlist_indic_' + Hash)) {
                if ($('playlist_indic_' + Hash).checked) Params.set('Actif', 1);
                else
                        Params.set('Actif', 0);
        }

        if (document.location.host == 'm.free-scores.com') {
                var url = '//m.free-scores.com/ajax/add_playlist_ajax_en.php';
                Params.set('mobile', 1);
        }
        else {
                var url = '//www.free-scores.com/ajax/add_playlist_ajax_en.php';
                Params.set('mobile', 0);
        }

        if (PHash && IDs) {
                var myAjax = new Ajax.Request(
                        url,
                        {
                                parameters: Params,
                                evalScripts: false,
                                method: 'post',
                                onLoading: function (xhr) {
                                        //$('playlist_indic_' + Hash).disabled=TRUE;
                                },

                                onSuccess: function (xhr) {
                                        //      alert('test1');
                                        var Reponse2 = JSON.parse(xhr.responseText);
                                        if (Reponse2.Erreur == 10) {
                                                alert('You are not connected');
                                        }
                                        else {
                                                //                              alert(PHash + ' / '+ IDs);
                                                Add_notification('Playlist order changed');
                                        }

                                },
                                onComplete: function (xhr) { // Toujours appel&eacute; en fin de requ&ecirc;te

                                }


                        });
        }
}

function update_entry_playlist2(PHash, PUBLIC_ID, Div_ID) {
        Params = new Hash();
        Params.set('type', 3);
        //      Params.set('langue', 'fr');
        if (PHash) Params.set('Hash', PHash);
        if (PUBLIC_ID) Params.set('PUBLIC_ID', PUBLIC_ID);
        if ($('playlist_entry_' + PUBLIC_ID + '_' + Div_ID)) {
                if ($('playlist_entry_' + PUBLIC_ID + '_' + Div_ID).checked) Params.set('Actif', 1);
                else
                        Params.set('Actif', 0);
        }

        if (document.location.host == 'm.free-scores.com') {
                var url = '//m.free-scores.com/ajax/add_playlist_ajax_en.php';
                Params.set('mobile', 1);
        }
        else {
                var url = '//www.free-scores.com/ajax/add_playlist_ajax_en.php';
                Params.set('mobile', 0);
        }

        if (PHash && PUBLIC_ID) {
                var myAjax = new Ajax.Request(
                        url,
                        {
                                parameters: Params,
                                evalScripts: false,
                                method: 'post',
                                onLoading: function (xhr) {
                                        $('playlist_entry_' + PUBLIC_ID + '_' + Div_ID).disabled = TRUE;
                                },

                                onSuccess: function (xhr) {
                                        //      alert('test1');
                                        var Reponse2 = JSON.parse(xhr.responseText);
                                        if (Reponse2.Erreur == 10) {
                                                alert('You are not connected');
                                        }
                                        else {
                                                if ($('playlist_entry_' + PUBLIC_ID + '_' + Div_ID).checked) {
                                                        Add_notification('Sheet music added to the playlist');
                                                }
                                                else {
                                                        Add_notification('Sheet music removed from the playlist');
                                                }

                                        }

                                        if (Reponse2.Nbre_playlist > 0) {
                                                if ($('ouvrir_playlistOFF')) {
                                                        //                $('ouvrir_playlistOFF').className = 'button_ico_playlist';
                                                        $('ouvrir_playlistOFF').innerHTML = icone_vectorielle('playlistplay', 'vertical-align:middle;width:22px;height:20px;', '#FF9900', '#FF9900', 0.2) + ' Playlist';
                                                }
                                                else if ($('ouvrir_playlistOFF_' + PUBLIC_ID)) {
                                                        //                        $('ouvrir_playlistOFF_' + PUBLIC_ID).className = 'playlist_search_vert';
                                                        $('ouvrir_playlistOFF_' + PUBLIC_ID).innerHTML = icone_vectorielle('playlist', 'vertical-align:middle;width:22px;height:20px;', '#FF9900', '#FF9900', 0.2);
                                                        $('Biblio_' + PUBLIC_ID).className = 'span_annoter_transparentes_show';
                                                }
                                        }
                                        else {
                                                if ($('ouvrir_playlistOFF')) {
                                                        //                                                     $('ouvrir_playlistOFF').className = 'button_ico_light';
                                                        $('ouvrir_playlistOFF').innerHTML = icone_vectorielle('playlistplay', 'vertical-align:middle;width:22px;height:20px;', '#000', '#000', 0.2) + ' Playlist';
                                                }
                                                else if ($('ouvrir_playlistOFF_' + PUBLIC_ID)) {
                                                        $('ouvrir_playlistOFF_' + PUBLIC_ID).className = 'playlist_search';
                                                        $('ouvrir_playlistOFF_' + PUBLIC_ID).innerHTML = icone_vectorielle('playlistplay', 'vertical-align:middle;width:22px;height:20px;', '#000', '#000', 0.2);
                                                        $('Biblio_' + PUBLIC_ID).className = 'span_annoter_transparentes';
                                                }
                                        }

                                },
                                onComplete: function (xhr) { // Toujours appel&eacute; en fin de requ&ecirc;te
                                        $('playlist_entry_' + PUBLIC_ID + '_' + Div_ID).disabled = FALSE;
                                }
                        });
        }
}

function update_entry_playlist(PHash, PUBLIC_ID, Div_ID) {

        Params = new Hash();


        Params.set('type', 3);
        //      Params.set('langue', 'fr');
        if (PHash) Params.set('Hash', PHash);
        if (PUBLIC_ID) Params.set('PUBLIC_ID', PUBLIC_ID);
        if ($('playlist_entry_' + Div_ID)) {
                if ($('playlist_entry_' + Div_ID).checked) Params.set('Actif', 1);
                else
                        Params.set('Actif', 0);
        }

        if (document.location.host == 'm.free-scores.com') {
                var url = '//m.free-scores.com/ajax/add_playlist_ajax_en.php';
                Params.set('mobile', 1);
        }
        else {
                var url = '//www.free-scores.com/ajax/add_playlist_ajax_en.php';
                Params.set('mobile', 0);
        }

        if (PHash && PUBLIC_ID) {
                var myAjax = new Ajax.Request(
                        url,
                        {
                                parameters: Params,
                                evalScripts: false,
                                method: 'post',
                                onLoading: function (xhr) {
                                        $('playlist_entry_' + Div_ID).disabled = TRUE;
                                },

                                onSuccess: function (xhr) {
                                        //      alert('test1');
                                        var Reponse2 = JSON.parse(xhr.responseText);
                                        if (Reponse2.Erreur == 10) {
                                                alert('You are not connected');
                                        }
                                        else {
                                                if ($('playlist_entry_' + Div_ID).checked) {
                                                        Add_notification('Sheet music added to the playlist');
                                                }
                                                else {
                                                        Add_notification('Sheet music removed from the playlist');
                                                }

                                        }

                                },
                                onComplete: function (xhr) { // Toujours appel&eacute; en fin de requ&ecirc;te
                                        $('playlist_entry_' + Div_ID).disabled = FALSE;

                                }


                        });
        }
}

function update_entry_playlist_supPDF(PHash, PUBLIC_ID, Div_PDF_id) {

        Params = new Hash();

        Params.set('type', 4);
        //      Params.set('langue', 'fr');
        if (PHash) Params.set('Hash', PHash);
        if (PUBLIC_ID) Params.set('PUBLIC_ID', PUBLIC_ID);
        if (Div_PDF_id) Params.set('Div_PDF_id', Div_PDF_id);

        if ($('selectPDF_' + PHash + '_' + PUBLIC_ID)) {
                if ($('selectPDF_' + PHash + '_' + PUBLIC_ID).value) Params.set('Select_supPDF', $('selectPDF_' + PHash + '_' + PUBLIC_ID).value);
        }

        if (document.location.host == 'm.free-scores.com') {
                var url = '//m.free-scores.com/ajax/add_playlist_ajax_en.php';
                Params.set('mobile', 1);
        }
        else {
                var url = '//www.free-scores.com/ajax/add_playlist_ajax_en.php';
                Params.set('mobile', 0);
        }

        if (PHash && PUBLIC_ID) {
                var myAjax = new Ajax.Request(
                        url,
                        {
                                parameters: Params,
                                evalScripts: false,
                                method: 'post',
                                onLoading: function (xhr) {
                                        $('selectPDF_' + PHash + '_' + PUBLIC_ID).disabled = TRUE;
                                },

                                onSuccess: function (xhr) {

                                        var Reponse2 = JSON.parse(xhr.responseText);

                                        if (Reponse2.Erreur == 10) {
                                                alert('You are not connected');
                                        }
                                        else {
                                                if ($('selectPDF_' + PHash + '_' + PUBLIC_ID).value) {
                                                        Add_notification('Playlist changed');
                                                        if ($('LienPDF_' + PHash + '_' + PUBLIC_ID)) {
                                                                $('LienPDF_' + PHash + '_' + PUBLIC_ID).innerHTML = Reponse2.Retour_text;
                                                        }
                                                        $('Div_PDF_' + Div_PDF_id).hide();
                                                        $('span_PDF_' + Div_PDF_id).show();
                                                }
                                                else {
                                                        //			Add_notification('Sheet music removed from the playlist');
                                                }

                                        }

                                },
                                onComplete: function (xhr) { // Toujours appel&eacute; en fin de requ&ecirc;te
                                        $('selectPDF_' + PHash + '_' + PUBLIC_ID).disabled = FALSE;

                                }


                        });
        }
}

function update_entry_playlist_supMP3(PHash, PUBLIC_ID, Div_MP3_id) {

        Params = new Hash();

        Params.set('type', 5);
        //      Params.set('langue', 'fr');
        if (PHash) Params.set('Hash', PHash);
        if (PUBLIC_ID) Params.set('PUBLIC_ID', PUBLIC_ID);
        if (Div_MP3_id) Params.set('Div_MP3_id', Div_MP3_id);

        if (Asso_IDSupMP3_morceau) Params.set('Asso_IDSupMP3_morceau', Asso_IDSupMP3_morceau);
        if (Asso_IDPrinMP3_morceau) Params.set('Asso_IDPrinMP3_morceau', Asso_IDPrinMP3_morceau);

        if ($('selectMP3_' + PHash + '_' + PUBLIC_ID)) {
                if ($('selectMP3_' + PHash + '_' + PUBLIC_ID).value) Params.set('Select_supMP3', $('selectMP3_' + PHash + '_' + PUBLIC_ID).value);
        }
        //      alert(Asso_IDSupMP3_morceau + ' / ' + Asso_IDPrinMP3_morceau);

        if (document.location.host == 'm.free-scores.com') {
                var url = '//m.free-scores.com/ajax/add_playlist_ajax_en.php';
                Params.set('mobile', 1);
        }
        else {
                var url = '//www.free-scores.com/ajax/add_playlist_ajax_en.php';
                Params.set('mobile', 0);
        }

        if (PHash && PUBLIC_ID) {
                var myAjax = new Ajax.Request(
                        url,
                        {
                                parameters: Params,
                                evalScripts: false,
                                method: 'post',
                                onLoading: function (xhr) {
                                        $('selectMP3_' + PHash + '_' + PUBLIC_ID).disabled = TRUE;
                                },

                                onSuccess: function (xhr) {

                                        var Reponse2 = JSON.parse(xhr.responseText);

                                        if (Reponse2.Erreur == 10) {
                                                alert('You are not connected');
                                        }
                                        else {
                                                if ($('selectMP3_' + PHash + '_' + PUBLIC_ID).value) {
                                                        Add_notification('Playlist changed');
                                                        if ($('Lien_' + PHash + '_' + PUBLIC_ID)) {
                                                                $('Lien_' + PHash + '_' + PUBLIC_ID).innerHTML = Reponse2.Retour_text;
                                                        }

                                                        $('Div_MP3_' + Div_MP3_id).hide();
                                                        $('span_MP3_' + Div_MP3_id).show();

                                                }
                                                else {
                                                        //                              Add_notification('Partition retir&eacute;e de la playlist');
                                                }

                                        }

                                },
                                onComplete: function (xhr) { // Toujours appel&eacute; en fin de requ&ecirc;te
                                        $('selectMP3_' + PHash + '_' + PUBLIC_ID).disabled = FALSE;

                                }


                        });
        }
}

function list_playlist2(comporewrite, PUBLIC_ID) {
        Params = new Hash();
        Params.set('type', 2);
        if (comporewrite) Params.set('comporewrite', comporewrite);
        if (PUBLIC_ID) Params.set('PUBLIC_ID', PUBLIC_ID);
        if (document.location.host == 'm.free-scores.com') {
                var url = '//m.free-scores.com/ajax/add_playlist_ajax_en.php';
                Params.set('mobile', 1);
        }
        else {
                var url = '//www.free-scores.com/ajax/add_playlist_ajax_en.php';
                Params.set('mobile', 0);
        }


        var myAjax = new Ajax.Request(
                url,
                {
                        parameters: Params,
                        evalScripts: false,
                        method: 'post',
                        onLoading: function (xhr) {
                        },

                        onSuccess: function (xhr) {
                                var Reponse2 = JSON.parse(xhr.responseText);
                                //      alert(Reponse2.inspect());

                                if (Reponse2.Erreur == 10) {
                                        var cache = '';
                                        cache += '<div style="padding:8px 10px;border-bottom:1px solid #eee;">';
                                        //$url=$CONFIG['fs'].'/espace-membres/index.php?modal=1&url='.urlencode(Partition_telecharger_crypt($post2['CLEF'], $post2['cryptURL'], 'fr', 0, $CONFIG['fs']));
                                        cache += '<a href="//www.free-scores.com/espace-membres-uk/index.php?url=' + encodeURIComponent(window.location.href) + '" class="g" style="display:block;">';
                                        cache += 'Please Log in';
                                        cache += '</a>';
                                        $('Div_playlist').innerHTML = cache;
                                }
                                else {
                                        var cache = '';

                                        for (var i in Reponse2.List) {
                                                //                                      alert(Reponse2.List[i].Actif);
                                                cache += '<div style="padding:8px 10px;border-bottom:1px solid #eee;">';
                                                cache += '<span style="vertical-align:middle;">';
                                                cache += '<input type="checkbox" id="playlist_entry_' + PUBLIC_ID + '_' + i + '"  onClick="update_entry_playlist2(\'' + Reponse2.List[i].Hash + '\', ' + PUBLIC_ID + ', ' + i + ');" ';
                                                if (Reponse2.List[i].Actif == 1) cache += ' checked="checked" ';
                                                cache += ' />';
                                                cache += '</span>';
                                                if (Reponse2.List[i].Confidentialite == 2) {
                                                        cache += icone_vectorielle('terre', 'display: block-inline; float:right;width:24px;height:24px;', '#cccccc', '#cccccc', 0.2);
                                                }
                                                else if (Reponse2.List[i].Confidentialite == 1) {
                                                        cache += icone_vectorielle('cadenasouvert', 'display: block-inline; float:right;width:24px;height:24px;', '#cccccc', '#cccccc', 0.2);
                                                }
                                                else {
                                                        cache += icone_vectorielle('cadenasferme', 'display: block-inline; float:right;width:24px;height:24px;', '#aaaaaa', '#aaaaaa', 0.2);
                                                }
                                                cache += '<label for="playlist_entry_' + PUBLIC_ID + '_' + i + '">';
                                                cache += Reponse2.List[i].Nom;
                                                cache += '</label>';
                                                cache += '</div>';
                                        }

                                        //                              alert('OK ' + Reponse2.List + ' / ' + Reponse2.List[1].Hash);
                                }
                                $('Div_playlist_' + PUBLIC_ID).innerHTML = cache;
                        },
                        onComplete: function (xhr) { // Toujours appel&eacute; en fin de requ&ecirc;te

                        }
                });
}

function list_playlist(comporewrite, PUBLIC_ID) {
        Params = new Hash();
        Params.set('type', 2);
        if (comporewrite) Params.set('comporewrite', comporewrite);
        if (PUBLIC_ID) Params.set('PUBLIC_ID', PUBLIC_ID);
        if (document.location.host == 'm.free-scores.com') {
                var url = '//m.free-scores.com/ajax/add_playlist_ajax_en.php';
                Params.set('mobile', 1);
        }
        else {
                var url = '//www.free-scores.com/ajax/add_playlist_ajax_en.php';
                Params.set('mobile', 0);
        }


        var myAjax = new Ajax.Request(
                url,
                {
                        parameters: Params,
                        evalScripts: false,
                        method: 'post',
                        onLoading: function (xhr) {
                        },

                        onSuccess: function (xhr) {
                                var Reponse2 = JSON.parse(xhr.responseText);
                                //      var Reponse2 = xhr.responseText.evalJSON();
                                //      alert(Reponse2.inspect());

                                if (Reponse2.Erreur == 10) {
                                        //                      alert('Vous n\'&ecirc;tes pas connecté');
                                        var cache = '';
                                        cache += '<div style="padding:8px 10px;border-bottom:1px solid #eee;">';
                                        //$url=$CONFIG['fs'].'/espace-membres/index.php?modal=1&url='.urlencode(Partition_telecharger_crypt($post2['CLEF'], $post2['cryptURL'], 'fr', 0, $CONFIG['fs']));
                                        cache += '<a href="//www.free-scores.com/espace-membres-uk/index.php?url=' + encodeURIComponent(window.location.href) + '" class="g" style="display:block;">';
                                        cache += 'Please Log in';
                                        cache += '</a>';
                                        $('Div_playlist').innerHTML = cache;
                                }
                                else {
                                        var cache = '';

                                        //alert(Object.keys(Reponse2.List).length);

                                        //for (var i=1;i<=Object.keys(Reponse2.List).length;i++)
                                        for (var i in Reponse2.List) {
                                                //                                      alert(Reponse2.List[i].Actif);
                                                cache += '<div style="padding:8px 10px;border-bottom:1px solid #eee;">';
                                                cache += '<span style="vertical-align:middle;">';
                                                cache += '<input type="checkbox" id="playlist_entry_' + i + '"  onClick="update_entry_playlist(\'' + Reponse2.List[i].Hash + '\', ' + PUBLIC_ID + ', ' + i + ');" ';
                                                if (Reponse2.List[i].Actif == 1) cache += ' checked="checked" ';
                                                cache += ' />';
                                                cache += '</span>';
                                                if (Reponse2.List[i].Confidentialite == 2) {
                                                        cache += '<svg style="display: block-inline; float:right;width:24px;height:24px;"><path  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" stroke-width="0.2" stroke="#cccccc" fill="#cccccc"></path></svg>';
                                                }
                                                else if (Reponse2.List[i].Confidentialite == 1) {
                                                        cache += '<svg style="display: block-inline; float:right;width:24px;height:24px;"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z" stroke-width="0.2" stroke="#cccccc" fill="#cccccc"></path></svg>';
                                                }
                                                else {
                                                        cache += '<svg style="display: block-inline; float:right;width:24px;height:24px;"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z" stroke-width="0.2" stroke="#cccccc" fill="#cccccc"></path></svg>';
                                                }
                                                cache += '<label for="playlist_entry_' + i + '">';
                                                cache += Reponse2.List[i].Nom;
                                                cache += '</label>';
                                                cache += '</div>';
                                        }

                                        //                              alert('OK ' + Reponse2.List + ' / ' + Reponse2.List[1].Hash);
                                }
                                $('Div_playlist').innerHTML = cache;

                        },
                        onComplete: function (xhr) { // Toujours appel&eacute; en fin de requ&ecirc;te

                        }


                });

}

function ajout_une_video(VideoID, CLEF, Contenu, remplacement) {
        


        Params = new Hash();
        if (document.location.host == 'm.free-scores.com') {
                var url = '//m.free-scores.com/ajax/ajout_public_video_ajax_owner.php';
                Params.set('mobile', 1);
        }
        else {
                var url = '//www.free-scores.com/ajax/ajout_public_video_ajax_owner.php';
                Params.set('mobile', 0);
        }

        Params.set('VideoID', VideoID);
        Params.set('langue', 'en');
        Params.set('CLEF', CLEF);
        if (remplacement) Params.set('remplacement', remplacement);

        if ($(Contenu)) {

                var myAjax = new Ajax.Request(
                        url,
                        {
                                parameters: Params,
                                evalScripts: false,
                                method: 'post',

                                onLoading: function (xhr) {
                                },

                                onSuccess: function (xhr) {
                                        //      alert(DivID + xhr.responseText);

                                        var Reponse = xhr.responseText;

                                        if (Reponse == 20) {
                                                alert(decodeURIComponent(escape("Permutation not possible")));
                                        }
                                        else if (Reponse == 10) {
                                                alert(decodeURIComponent(escape("video already added")));
                                        }
                                        else if (Reponse == -1) {
                                                alert(decodeURIComponent(escape("This video isn't valid")));
                                        }
                                        else if (Reponse == -2) {
                                                alert(decodeURIComponent(escape("Error : this video hasn't been added")));
                                        }
                                        else if (Reponse) {
                                                if ($('aucunevideo') && ('aucunevideo').innerHTML != '') {
                                                        ('aucunevideo').innerHTML = '';
                                                }

                                                if (remplacement) {
                                                        $(Contenu).innerHTML = xhr.responseText;
                                                        affiche_suggestion_videos(VideoID, CLEF, 'suggestion' + remplacement, 'slidedown' + remplacement);
                                                        $('video_title' + remplacement).innerHTML = '';
                                                }
                                                else {
                                                        $(Contenu).innerHTML += xhr.responseText;
                                                }

                                        }
                                        else {
                                                alert(decodeURIComponent(escape("Error : this video hasn't been added")));
                                        }

                                },

                                onComplete: function (xhr) { // Toujours appel&eacute; en fin de requ&ecirc;te

                                }

                        });
        }

}

function effacer_video_membre(clefd, CLEF) {
        if (confirm(decodeURIComponent(escape('Are you sure to delete this video ?')))) {

                Params = new Hash();
                if (document.location.host == 'm.free-scores.com') {
                        var url = '//m.free-scores.com/ajax/effacer_video.php';
                        Params.set('mobile', 1);
                }
                else {
                        var url = '//www.free-scores.com/ajax/effacer_video.php';
                        Params.set('mobile', 0);
                }

                Params.set('clefd', clefd);
                Params.set('CLEF', CLEF);

                var myAjax = new Ajax.Request(
                        url,
                        {
                                parameters: Params,
                                evalScripts: false,
                                method: 'post',
                                onLoading: function (xhr) {

                                        cache = $('poubelle_' + clefd).innerHTML;
                                        $('poubelle_' + clefd).innerHTML = '<img src="https://img.free-scores.com/IMAGES/loading.gif" width=12 align=absmiddle />';


                                },
                                onSuccess: function (xhr) {
                                        res = xhr.responseText;
                                        //      alert(res);

                                        var Reponse = xhr.responseText;

                                        if (Reponse == 1) {

                                                $('tr' + clefd).fade({ duration: 1.0, from: 1, to: 0 });

                                        } else if (Reponse == 10) {
                                                alert(decodeURIComponent(escape('This video has been deleted.')));
                                        }

                                },

                                onComplete: function () {
                                        $('poubelle_' + clefd).innerHTML = cache;
                                }
                        });
        }

}

function affiche_une_video(CLEF, video_id, autoplay, prefixediv) {
        if (document.location.host == 'm.free-scores.com') {
                var url = '//m.free-scores.com/ajax/include_public_video_ajax_owner.php';
        }
        else {
                var url = '//www.free-scores.com/ajax/include_public_video_ajax_owner.php';
        }

        var DivID;
        Params = new Hash();

        Params.set('video_id', video_id);
        Params.set('CLEF', CLEF);
        Params.set('autoplay', autoplay);

        if (prefixediv == 'unique') {
                DivID = 'unique';
        }
        else if (prefixediv) {
                DivID = prefixediv + video_id;
        }
        else {
                DivID = 'slidedown' + video_id;
        }


        if ($(DivID)) {

                if (prefixediv != 'unique') $(DivID).toggle();

                if (!$(DivID).innerHTML || prefixediv == 'unique') {
                        var myAjax = new Ajax.Request(
                                url,
                                {
                                        parameters: Params,
                                        evalScripts: false,
                                        method: 'post',

                                        onLoading: function (xhr) {
                                        },

                                        onSuccess: function (xhr) {
                                                $(DivID).show();
                                                $(DivID).innerHTML = xhr.responseText;
                                        },

                                        onComplete: function (xhr) { // Toujours appel&eacute; en fin de requ&ecirc;te

                                        }

                                });
                }
        }
}

function gestionClic_comment(start, ordrepar) {
        var compteurRequetesEnCours = 0;
        if (document.location.host == 'm.free-scores.com') {
                var url = '//m.free-scores.com/ajax/commentaire_partitions_ajax_fr.php';
                Params.set('mobile', 1);
        }
        else {
                var url = '//www.free-scores.com/ajax/commentaire_partitions_ajax_fr.php';
                Params.set('mobile', 0);
        }

        Params = new Hash();

        if ($('pdf')) {
                Params.set('pdf', $('pdf').value);
        }

        if ($('langue_site')) {
                Params.set('langue_site', $('langue_site').value);
        }

        if ($('nombre_avis')) {
                Params.set('nombre_avis', $('nombre_avis').value);
        }

        Params.set('start', start);
        Params.set('ordrepar', ordrepar);

        var myAjax = new Ajax.Request(
                url,
                {
                        parameters: Params,
                        evalScripts: false,
                        method: 'post',
                        onLoading: function (xhr) {
                                Element.show('chargement_comment');
                                compteurRequetesEnCours++;
                        },
                        onSuccess: function (xhr) {
                                $('resultat_comment').innerHTML = xhr.responseText;
                        },

                        onComplete: function () {
                                if (!--compteurRequetesEnCours) {
                                        Element.hide('chargement_comment');
                                }

                        }
                });
}


function Add_notification(Message) {

        Add = '<div id="notification_' + notif_ID + '" class="notif" style="display:none;">';
        Add += Message;

        Add += '</div>';

        if ($('encart_notifications')) {
                $('encart_notifications').insert({ bottom: Add });
                $('notification_' + notif_ID).fade({ duration: 1.0, from: 0, to: 1 });
                $('notification_' + notif_ID).style.display = '';
        }

        notif_ID++;
}

/* VDA */
function gestion_VDA(start, step, mobile, url) {
        var compteurRequetesEnCours = 0;
        // var url = '//www.free-scores.com/ajax/VDA_ajax_uk.php';

        Params = new Hash();
        if ($('search_VDA')) {
                Params.set('search', $('search_VDA').value);
        }

        if ($('style_VDA')) {
                Params.set('style', $('style').value);
        }

        if ($('style')) {
                Params.set('style', $('style').value);
        }

        if ($('vendeur_VDA')) {
                Params.set('vendeur', $('vendeur_VDA').value);
        }

        if ($('verbose_VDA')) {
                Params.set('verbose', $('verbose_VDA').value);
        }

        if ($('format_VDA')) {
                Params.set('format', $('format_VDA').value);
        }

        if ($('IDv_VDA')) {
                Params.set('IDv', $('IDv_VDA').value);
        }

        if ($('IDt_VDA')) {
                Params.set('IDt', $('IDt_VDA').value);
        }

        if ($('instrumentation')) {
                Params.set('instrumentation', $('instrumentation').value);
        }
        if ($('CATEGORIE') && $('CATEGORIE').value) {
                Params.set('CATEGORIE', $('CATEGORIE').value);
        }
        // console.log('CATEGORIE: ' + $('CATEGORIE').value);

        if ($('CAT_NUM') && $('CAT_NUM').value) {
                Params.set('CAT_NUM', $('CAT_NUM').value);
        }

        if ($('ordrepar_VDA')) {
                Params.set('ordrepar', $('ordrepar_VDA').value);
                // URL_change += 'ordrepar=' + $('ordrepar_VDA').value + '&';
        }

        //alert($('format_VDA').value + "/"+ $('vendeur_VDA').value + "/" + $('search_VDA').value);
        Params.set('start', start);
        Params.set('step', step);
        Params.set('affichage', 1);
        Params.set('mobile', mobile);
        //if ($verbose) { echo "Params.set('verbose',1);\n" ;}

        var myAjax = new Ajax.Request(
                url,
                {
                        parameters: Params,
                        evalScripts: false,
                        method: 'post',
                        onLoading: function (xhr) {
                                Element.show('chargement_VDA');
                        },
                        onSuccess: function (xhr) {
                                $('resultat_VDA').innerHTML = xhr.responseText;
                        },
                        onComplete: function () { // Toujours appel&eacute; en fin de requ&ecirc;te
                                Element.hide('chargement_VDA');
                        }

                });
}

/* VDA Avancée*/
function gestion_VDA_avancee(start, step, mobile, url) {
        URL_change = '/boutique/digital-sheet-music.php?';
        var compteurRequetesEnCours = 0;
        // var url = '//www.free-scores.com/ajax/VDA_ajax_uk.php';

        Params = new Hash();
        if ($('search_VDA')) {
                Params.set('search', $('search_VDA').value);
                URL_change += 'search=' + $('search_VDA').value + '&';
        }

        if ($('niveau_VDA')) {
                Params.set('niveau', $('niveau_VDA').value);
                URL_change += 'niveau=' + $('niveau_VDA').value + '&';
        }

        if ($('style_VDA')) {
                Params.set('style', $('style_VDA').value);
                URL_change += 'style=' + $('style_VDA').value + '&';
        }

        if ($('vendeur_VDA')) {
                Params.set('vendeur', $('vendeur_VDA').value);
                URL_change += 'vendeur=' + $('vendeur_VDA').value + '&';
        }
        if ($('IDv_VDA')) {
                Params.set('IDv', $('IDv_VDA').value);
                URL_change += 'IDv=' + $('IDv_VDA').value + '&';
        }

        if ($('IDt_VDA')) {
                Params.set('IDt', $('IDt_VDA').value);
                URL_change += 'IDt=' + $('IDt_VDA').value + '&';
        }

        if ($('format_VDA')) {
                Params.set('format', $('format_VDA').value);
        }

        if ($('ordrepar_VDA')) {
                Params.set('ordrepar', $('ordrepar_VDA').value);
                URL_change += 'ordrepar=' + $('ordrepar_VDA').value + '&';
        }

        if ($('FSinstrumentation_ID_VDA')) {
                Params.set('instrumentation', $('FSinstrumentation_ID_VDA').value);
                URL_change += 'instrumentation=' + $('FSinstrumentation_ID_VDA').value + '&';
        }

        if ($('verbose_VDA')) {
                Params.set('verbose', $('verbose_VDA').value);
        }

        if ($('devise_VDA')) {
                Params.set('devise', $('devise_VDA').value);
                URL_change += 'devise=' + $('devise_VDA').value + '&';
        }
        if ($('autres_VDA')) {
                Params.set('autres', $('autres_VDA').value);
                URL_change += 'autres=' + $('autres_VDA').value + '&';
        }

        if ($('playalong_VDA')) {
                Params.set('playalong', $('playalong_VDA').value);
                URL_change += 'playalong=' + $('playalong_VDA').value + '&';
        }
        if ($('videos_VDA')) {
                Params.set('videos', $('videos_VDA').value);
                URL_change += 'videos=' + $('videos_VDA').value + '&';
        }

        if ($('CATEGORIE')) {
                Params.set('CATEGORIE', $('CATEGORIE').value);
                URL_change += 'CATEGORIE=' + $('CATEGORIE').value + '&';
        }
        if (start) {
                Params.set('start', start);
                URL_change += 'start=' + start + '&';
        }

        Params.set('step', step);
        Params.set('mobile', mobile);
        Params.set('affichage', 2);
        //if ($verbose) { echo "Params.set('verbose',1);\n" ;}
        Page = 1 + Math.ceil(start / step);

        URL_change = URL_change.replace(/\&$|\?$/g, '');

        var myAjax = new Ajax.Request(
                url,
                {
                        parameters: Params,
                        evalScripts: false,
                        method: 'post',
                        onLoading: function (xhr) {
                                Element.show('chargement_VDA');
                        },
                        onSuccess: function (xhr) {
                                $('resultat_VDA').innerHTML = xhr.responseText;
                        },
                        onComplete: function () { // Toujours appel&eacute; en fin de requ&ecirc;te
                                Element.hide('chargement_VDA');
                                history.pushState('', ' - page ' + Page, URL_change);
                        }

                });
}


/* GESTION COEUR */

var modifier_coeur3 = function (ID, Etat, spanID, classON, classOFF, score) {
        Params = new Hash();
        Params.set('partition', ID);
        Params.set('Etat', Etat);
        Params.set('wallet', 'like');
        if (document.location.host == 'm.free-scores.com') {
                var url = '//m.free-scores.com/espace-membres/wallet.php';
                Params.set('mobile', 1);
        }
        else {
                var url = '//www.free-scores.com/espace-membres/wallet.php';
                Params.set('mobile', 0);
        }


        if (typeof langue_site != "undefined") {
                Params.set('langue_site', langue_site);
        }

        cache_avant = $(spanID).innerHTML;

   var loadingDiv = document.createElement('div');
   // loadingDiv.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; background: transparent;';
loadingDiv.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%;display: flex; justify-content: center; align-items: center; background: transparent;';
loadingDiv.innerHTML = "<img src='https://www.free-scores.com/IMAGES/loading.gif' style='width:16px;height:16px;display: inline-block; vertical-align: middle;' />";
    var parentElement = $(spanID);
    parentElement.style.position = 'relative';
    parentElement.appendChild(loadingDiv);

        var myAjax = new Ajax.Request(url,
                {
                        method: 'get',
                        evalScripts: false,
                        parameters: Params,
                        onLoading: function (xhr) {
//                                $(spanID).Pulsate();
loadingDiv.style.display = 'flex';

                        },

                        onFailure: function (xhr) { // Réponse HTTP != 2xx
                                $(spanID).innerHTML = cache_avant;

                        },
                        onComplete: function (xhr, json) {
                                var Reponse = xhr.responseText;

                                if (Reponse == 1 || Reponse == 6) {
                                        score = parseInt(score);

                                        var nv_score = score;
                                        if (Reponse == 1 && score) {
                                                if (Etat == 1) {
                                                        nv_score = score + 1;
                                                }
                                                else {
                                                        nv_score = score - 1;
                                                }
                                        }
                                        new Effect.Opacity(spanID, { from: 1, to: 0, duration: 0 });
                                        if (Etat == 1) {
                                                Etat_show = '0';
                                                couleur = '#fff';
                                                message_notif = 'You like this sheet music';
                                                classe = classON;
                                        }
                                        else {
                                                Etat_show = '1';
                                                //imageclass='sprite-image coeur_s_gris';
                                                couleur = '#000';
                                                message_notif = 'You don\'t like anymore this sheet music';
                                                classe = classOFF;
                                        }

                                        output = '<a href="?like?' + ID + '?' + Etat_show + '" ';

                                        output += ' class="' + classe + '" style=\'\' ';
                                        output += " onClick=\"modifier_coeur3(" + ID + ", " + Etat_show + ", '" + spanID + "', '" + classON + "', '" + classOFF + "'";
                                        if (!isNaN(score) && nv_score) {
                                                output += ", " + String(nv_score);
                                        }
                                        output += ");return false;\">";

                                        //output += '<span class=" ' + imageclass + '" style=\'vertical-align: middle\'></span>';
                                        output += icone_vectorielle('coeur', 'display: block-inline; vertical-align:middle;width:22px;height:20px;', couleur, couleur, 0.2);

                                        //if ((!isNaN(score) || score===0) && nv_score)
                                        if (nv_score) {
                                                //output += '<font class="rouge" style="font-size:8pt;">' + String(nv_score) + ' </font>';
                                                output += "<span> <b><span style='color:" + couleur + ";'>" + String(nv_score) + "</span></b> </span>";
                                        }
                                        else {
                                                output += "<span></span>";
                                        }
                                        output += '</a>';

                                        $(spanID).innerHTML = output;
                                        new Effect.Opacity(spanID, { from: 0, to: 1, duration: 0.5 });
                                        Add_notification(message_notif);

                                }
                                else if (Reponse == 0) {
                                        if (Params.get('mobile')) {
                                                document.location.href = '//m.free-scores.com/espace-membres/?url=' + encodeURIComponent(window.location.href);

                                        }
                                        else {
                                                hs.htmlExpand(null, { objectType: 'iframe', width: 900, height: 490, anchor: 'left', align: 'center', headingText: 'Log in or sign up', src: '//www.free-scores.com/espace-membres-uk/?modal=1&url=' + encodeURIComponent(window.location.href) });
                                        }

                                }
                                else {
                                        $(spanID).innerHTML = cache_avant;
                                }

                        }

                }

        );

}

/* GESTION ABONNEMENT */

var modifier_abonnement = function (clef_alerte, Etat, spanID, classON, classOFF, score) {
        Params = new Hash();
        if (isNaN(clef_alerte)) {
                Params.set('comporewrite', clef_alerte);
        }
        else {
                Params.set('clef_alerte', clef_alerte);
        }
        Params.set('Etat', Etat);
        Params.set('wallet', 'abonnement');
        if (document.location.host == 'm.free-scores.com') {
                var url = '//m.free-scores.com/espace-membres/wallet.php';
                Params.set('mobile', 1);
        }
        else {
                var url = '//www.free-scores.com/espace-membres/wallet.php';
                Params.set('mobile', 0);
        }


        if (typeof langue_site != "undefined") {
                Params.set('langue_site', langue_site);
        }

        cache_avant = $(spanID).innerHTML;
var loadingDiv = document.createElement('div');
    loadingDiv.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; background: transparent;';
    loadingDiv.innerHTML = "<img src='https://www.free-scores.com/IMAGES/loading.gif' style='display: inline-block; vertical-align: middle;' />";
    var parentElement = $(spanID);
    parentElement.style.position = 'relative';
    parentElement.appendChild(loadingDiv);


        var myAjax = new Ajax.Request(url,
                {
                        method: 'get',
                        evalScripts: false,
                        parameters: Params,
                        onLoading: function (xhr) {
                                //$(spanID).Pulsate();
                       
loadingDiv.style.display = 'flex';

 },

                        onFailure: function (xhr) { // Réponse HTTP != 2xx
                                $(spanID).innerHTML = cache_avant;

                        },
                        onComplete: function (xhr, json) {
                                var Reponse = xhr.responseText;
                                //      console.log('reponse ' + Reponse);
                                if (Reponse == 1 || Reponse == 6) {
                                        score = parseInt(score);

                                        var nv_score = score;
                                        if (Reponse == 1 && score) {
                                                if (Etat == 1) {
                                                        nv_score = score + 1;
                                                }
                                                else {
                                                        nv_score = score - 1;
                                                }
                                        }

                                        new Effect.Opacity(spanID, { from: 1, to: 0, duration: 0 });
                                        if (Etat == 1) {
                                                Etat_show = '0';
                                                couleur = '#333';
                                                message_notif = 'You are subscribed to this member';
                                                classe = classON;
                                                text = 'FOLLOWED';
                                        }
                                        else {
                                                Etat_show = '1';
                                                //imageclass='sprite-image coeur_s_gris';
                                                couleur = '#333';
                                                message_notif = 'You are unsubscribed from this member';
                                                classe = classOFF;
                                                text = 'FOLLOW';
                                        }

                                        output = '<a href="#" ';

                                        output += ' class="' + classe + '" ';
                                        output += " onMouseOut=\"UnTip()\" onClick=\"modifier_abonnement('" + clef_alerte + "', " + Etat_show + ", '" + spanID + "', '" + classON + "', '" + classOFF + "'";
                                        if (!isNaN(score) && nv_score) {
                                                output += ", " + String(nv_score);
                                        }
                                        output += ");return false;\">";

                                        if (Etat_show == '0') output += icone_vectorielle('followminus', 'display: block-inline; vertical-align:middle;width:24px;height:24px;', couleur, couleur, 0.2);
					if (Etat_show == '1') output += icone_vectorielle('followplus', 'display: block-inline; vertical-align:middle;width:24px;height:24px;', couleur, couleur, 0.2);

                                        //if ((!isNaN(score) || score===0) && nv_score)
                                        if (nv_score) {
                                                //output += '<font class="rouge" style="font-size:8pt;">' + String(nv_score) + ' </font>';
                                                output += "<span> " + text + " <b><span style='color:" + couleur + ";'>" + String(nv_score) + "</span></b> </span>";
                                        }
                                        else {
                                                output += "<span> " + text + "</span>";
                                        }
                                        output += '</a>';
                                        console.log(output);
                                        $(spanID).innerHTML = output;
                                        new Effect.Opacity(spanID, { from: 0, to: 1, duration: 0.5 });
                                        Add_notification(message_notif);

                                }
                                else if (Reponse == 0) {
                                        if (Params.get('mobile')) {
                                                document.location.href = '//m.free-scores.com/espace-membres-uk/?url=' + encodeURIComponent(window.location.href);

                                        }
                                        else {
                                                hs.htmlExpand(null, { objectType: 'iframe', width: 900, height: 490, anchor: 'left', align: 'center', headingText: 'Sign up or sign in', src: '//www.free-scores.com/espace-membres-uk/?modal=1&url=' + encodeURIComponent(window.location.href) });
                                        }

                                }
                                else {
                                        $(spanID).innerHTML = cache_avant;
                                }

                        }

                }

        );

}

var modifier_coeur2 = function (ID, Etat, spanID, classON, classOFF, score) {

        //	alert("test");

        Params = new Hash();
        Params.set('partition', ID);
        Params.set('Etat', Etat);
        Params.set('wallet', 'like');

        if (document.location.host == 'm.free-scores.com') {
                var url = '//m.free-scores.com/espace-membres/wallet.php';
                urlhost = 'm.free-scores.com';
                Params.set('mobile', 1);
        }
        else {
                var url = '//www.free-scores.com/espace-membres/wallet.php';
                urlhost = 'www.free-scores.com';
                Params.set('mobile', 0);
        }

        /*
                Params = 'partition='+ID;
                Params += '&Etat='+Etat;
                Params += '&wallet=like';
        */
        if (typeof langue_site != "undefined") {
                Params.set('langue_site', langue_site);
                //  Params += '&langue_site=' + langue_site;
        }


        cache_avant = $(spanID).innerHTML;

        var myAjax = new Ajax.Request(url,
                {
                        method: 'get',
                        evalScripts: false,
                        parameters: Params,
                        onLoading: function (xhr) { // Après appel méthode open
                                //     $(spanID).innerHTML = '<img src="https://img.free-scores.com/IMAGES/loading.gif" />';
                                //     new Effect.Opacity(spanID, { from: 1, to: 0, duration: 0.5 });
                                $(spanID).Pulsate();

                        },
                        onFailure: function (xhr) { // Réponse HTTP != 2xx
                                $(spanID).innerHTML = cache_avant;

                        },
                        onComplete: function (xhr, json) {
                                var Reponse = xhr.responseText;

                                //	console.log('test '+ Reponse);

                                if (Reponse == 1 || Reponse == 6) {
                                        score = parseInt(score);
                                        //	alert(!isNan(score));

                                        var nv_score = score;
                                        //		if (Reponse==1 && !isNan(score))
                                        if (Reponse == 1 && score) {
                                                if (Etat == 1) {
                                                        nv_score = score + 1;
                                                }
                                                else {
                                                        nv_score = score - 1;
                                                }
                                        }

                                        //console.log('Reponse :'+ Reponse + '; score :'+ score + '; nv_score:'+nv_score);

                                        // Requête totalement terminée
                                        new Effect.Opacity(spanID, { from: 1, to: 0, duration: 0 });
                                        if (Etat == 1) {
                                                Etat_show = '0';
                                                if (!isNaN(score) && nv_score) {
                                                        imageclass = 'sprite-image coeur_s_gris';
                                                }
                                                else {
                                                        imageclass = 'sprite-image coeur_s';
                                                }
                                                //message_notif='This sheetmusic has been successfully added to <a href="//www.free-scores.com/free-sheet-music.php?wallet=c">your Like-wallet</a>';
                                                classe = classON;
                                        }
                                        else {
                                                Etat_show = '1';
                                                imageclass = 'sprite-image coeur_s_gris';
                                                //message_notif='This sheetmusic has been successfully removed from <a href="//www.free-scores.com/free-sheet-music.php?wallet=c">your Like-wallet</a>';
                                                classe = classOFF;
                                        }

                                        output = '<a href="?like?' + ID + '?' + Etat_show + '" ';

                                        output += ' class="' + classe + '" style=\'\' ';
                                        output += " onClick=\"modifier_coeur2(" + ID + ", " + Etat_show + ", '" + spanID + "', '" + classON + "', '" + classOFF + "'";
                                        if (!isNaN(score) && nv_score) {
                                                output += ", " + String(nv_score);
                                        }
                                        output += ");return false;\"";

                                        output += '><span class=" ' + imageclass + '" style=\'vertical-align: middle\'></span>';
                                        if (!isNaN(score) && nv_score) {
                                                output += '<span>' + String(nv_score) + ' </span>';
                                        }
                                        output += '</a>';

                                        $(spanID).innerHTML = output;
                                        new Effect.Opacity(spanID, { from: 0, to: 1, duration: 0.5 });
                                        //                Add_notification(message_notif);

                                }
                                else if (Reponse == 0) {

                                        if (urlhost == 'm.free-scores.com') {
                                                document.location.href = '//' + urlhost + '/espace-membres-uk/?url=' + encodeURIComponent(window.location.href);
                                        }
                                        else {
                                                hs.htmlExpand(null, { objectType: 'iframe', width: 900, height: 490, anchor: 'left', align: 'center', headingText: 'Sign up or Log in', src: '//' + urlhost + '/espace-membres-uk/?modal=1&url=' + encodeURIComponent(window.location.href) });
                                        }

                                }
                                else {
                                        $(spanID).innerHTML = cache_avant;
                                }

                        }

                }

        );

}

var modifier_coeur = function (ID, Etat) {

        Params = new Hash();
        Params.set('partition', ID);
        Params.set('Etat', Etat);
        Params.set('wallet', 'like');

        var url = '//www.free-scores.com/espace-membres/wallet.php';
        /*
                Params = 'partition='+ID;
                Params += '&Etat='+Etat;
                Params += '&wallet=like';
        */
        cache_avant = $('Ilike_' + ID).innerHTML;

        if (typeof langue_site != "undefined") {
                Params.set('langue_site', langue_site);
                //  Params += '&langue_site=' + langue_site;
        }

        var myAjax = new Ajax.Request(url,
                {
                        method: 'get',
                        evalScripts: false,
                        parameters: Params,
                        onLoading: function (xhr) { // Après appel méthode open
                                //$('Ilike_'+ID).innerHTML = '<img src=\"//www.free-scores.com/IMAGES/loading.gif\" />';
                                //new Effect.Opacity('Ilike_'+ID, { from: 1, to: 0, duration: 0.5 });

                        },
                        onFailure: function (xhr) { // Réponse HTTP != 2xx
                                $('Ilike_' + ID).innerHTML = cache_avant;

                        },
                        onComplete: function (xhr, json) {
                                var Reponse = xhr.responseText;
                                if (Reponse == 1 || Reponse == 6) {
                                        // Requête totalement terminée
                                        new Effect.Opacity('Ilike_' + ID, { from: 1, to: 0, duration: 0 });
                                        if (Etat == 1) {
                                                Etat_show = '0';
                                                image = 'ico-coeur2.png';
                                                message = 'Remove like'; //message='Retirez cette partition de vos favoris.';
                                                message_notif = 'This sheetmusic has been successfully added to <a href="//www.free-scores.com/free-sheet-music.php?wallet=c">your Like-wallet</a>';
                                                classe = 'coeur_selected';
                                        }
                                        else {
                                                Etat_show = '1';
                                                image = 'ico-coeur.png';
                                                message = '<b>Like</b>'; //  message='Ajoutez à vos favoris';
                                                message_notif = 'This sheetmusic has been successfully removed from <a href="//www.free-scores.com/free-sheet-music.php?wallet=c">your Like-wallet</a>';
                                                classe = 'coeur';
                                        }

                                        output = '<a href="#" ';

                                        if (!browserIsMobileSafari) {

                                                output += 'onMouseOver="Tip(\'' + message + '\',  SHADOW, true,DELAY,0)" onMouseOut="UnTip()"';
                                        }

                                        output += ' class=' + classe + '  style="display: inline-block;outline: none;width:30px;height:20px;margin:0;padding: 0px 2px; text-align: center;border: solid 1px #bfbfbf;-webkit-border-radius: .5em;-moz-border-radius: .5em;border-radius: .3em;background: -webkit-gradient(linear, left top, left bottom, from(#ffffff), to(#f1f1f1));background: -moz-linear-gradient(top,  #ffffff,  #f1f1f1);filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#ffffff, endColorstr=#f1f1f1);" ';
                                        output += ' onClick="modifier_coeur(' + ID + ', ' + Etat_show + ');return false;"';

                                        output += '><img src="https://img.free-scores.com/IMAGES/' + image + '"  border=0 /></a>';

                                        $('Ilike_' + ID).innerHTML = output;
                                        new Effect.Opacity('Ilike_' + ID, { from: 0, to: 1, duration: 0.5 });
                                        Add_notification(message_notif);

                                }
                                else if (Reponse == 0) {

                                        hs.htmlExpand(null, { objectType: 'iframe', width: 900, height: 490, anchor: 'left', align: 'center', headingText: 'Sign up or log in', src: '//www.free-scores.com/espace-membres-uk/?modal=1&url=' + encodeURIComponent(window.location.href) });

                                }
                                else {
                                        $('Ilike_' + ID).innerHTML = cache_avant;
                                }

                        }

                }

        );

}

var supprimer_de_la_playlist = function (ID, DHash) {

        //      alert("test");

        Params = new Hash();
        Params.set('ID', ID);
        Params.set('type', 7);
        Params.set('DHash', DHash);

        if (document.location.host == 'm.free-scores.com') {
                var url = '//m.free-scores.com/ajax/add_playlist_ajax_en.php';
                Params.set('mobile', 1);
        }
        else {
                var url = '//www.free-scores.com/ajax/add_playlist_ajax_en.php';
                Params.set('mobile', 0);
        }

        if (typeof langue_site != "undefined") {
                Params.set('langue_site', langue_site);
        }

        //cache_avant=$(spanID).innerHTML;

        var myAjax = new Ajax.Request(url,
                {
                        method: 'get',
                        evalScripts: false,
                        parameters: Params,
                        onLoading: function (xhr) {
                                $(spanID).Pulsate();
                        },

                        onFailure: function (xhr) { // Réponse HTTP != 2xx

                        },
                        onComplete: function (xhr, json) {
                                $('position' + ID).fade();
                        }
                });
}

var modifier_coeur_grand2 = function (ID, Etat, spanID, classON, classOFF, score) {

        //	alert("test");

        Params = new Hash();
        Params.set('partition', ID);
        Params.set('Etat', Etat);
        Params.set('wallet', 'like');

        if (document.location.host == 'm.free-scores.com') {
                var url = '//m.free-scores.com/espace-membres/wallet.php';
                urlhost = 'm.free-scores.com';
                Params.set('mobile', 1);
        }
        else {
                var url = '//www.free-scores.com/espace-membres/wallet.php';
                urlhost = 'www.free-scores.com';
                Params.set('mobile', 0);
        }

        /*
                Params = 'partition='+ID;
                Params += '&Etat='+Etat;
                Params += '&wallet=like';
        */
        if (typeof langue_site != "undefined") {
                Params.set('langue_site', langue_site);
                //  Params += '&langue_site=' + langue_site;
        }


        cache_avant = $(spanID).innerHTML;
   var loadingDiv = document.createElement('div');
   // loadingDiv.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; background: transparent;';
loadingDiv.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%;display: flex; justify-content: center; align-items: center; background: transparent;';
loadingDiv.innerHTML = "<img src='https://www.free-scores.com/IMAGES/loading.gif' style='width:16px;height:16px;display: inline-block; vertical-align: middle;' />";
    var parentElement = $(spanID);
    parentElement.style.position = 'relative';
    parentElement.appendChild(loadingDiv);

        var myAjax = new Ajax.Request(url,
                {
                        method: 'get',
                        evalScripts: false,
                        parameters: Params,
                        onLoading: function (xhr) { // Après appel méthode open
                                $(spanID).Pulsate();
loadingDiv.style.display = 'flex';
                        },
                        onFailure: function (xhr) { // Réponse HTTP != 2xx
                                $(spanID).innerHTML = cache_avant;

                        },
                        onComplete: function (xhr, json) {
                                var Reponse = xhr.responseText;

                                //	console.log('test '+ Reponse);

                                if (Reponse == 1 || Reponse == 6) {
                                        score = parseInt(score);
                                        //	alert(!isNan(score));

                                        var nv_score = score;
                                        if (Reponse == 1 && score) {
                                                if (Etat == 1) {
                                                        nv_score = score + 1;
                                                }
                                                else {
                                                        nv_score = score - 1;
                                                }
                                        }

                                        //console.log('Reponse :'+ Reponse + '; score :'+ score + '; nv_score:'+nv_score);

                                        // Requête totalement terminée
                                        new Effect.Opacity(spanID, { from: 1, to: 0, duration: 0 });
                                        if (Etat == 1) {
                                                Etat_show = '0';
                                                couleur = '#e02b00';
                                                message_notif = 'You like this sheet music';
                                                classe = classON;
                                        }
                                        else {
                                                Etat_show = '1';
                                                //imageclass='sprite-image coeur_s_gris';
                                                couleur = '#000';
                                                message_notif = 'You don\'t like anymore this sheet music';
                                                classe = classOFF;
                                        }

                                        output = '<a href="?like?' + ID + '?' + Etat_show + '" ';
                                        if (Params.get('mobile') == 0) {
                                                output += " onMouseOver=\"Tip('Like (" + String(nv_score) + ")',  SHADOW, true,DELAY,0)\" onMouseOut='UnTip()'";
                                        }
                                        output += ' class="' + classe + '" ';
                                        output += " onClick=\"modifier_coeur_grand2(" + ID + ", " + Etat_show + ", '" + spanID + "', '" + classON + "', '" + classOFF + "'";
                                        if (!isNaN(score)) {
                                                output += ", " + String(nv_score);
                                        }
                                        output += ");return false;\"";

                                        output += '>';
                                        if (Params.get('mobile') == 0) {
                                                output += icone_vectorielle('coeur', 'display: block-inline; vertical-align:middle;width:22px;height:20px;', couleur, couleur, 0.2);
                                        }
                                        else {
                                                output += icone_vectorielle('coeur', 'display: block-inline; vertical-align:middle;width:32px;height:32px;', couleur, couleur, 0.2);
                                        }

                                        output += '</a>';

                                        $(spanID).innerHTML = output;
                                        new Effect.Opacity(spanID, { from: 0, to: 1, duration: 0.5 });
                                        Add_notification(message_notif);

                                }
                                else if (Reponse == 0) {

                                        if (Params.get('mobile')) {
                                                document.location.href = '//' + urlhost + '/espace-membres-uk/?url=' + encodeURIComponent(window.location.href);
                                        }
                                        else {
                                                hs.htmlExpand(null, { objectType: 'iframe', width: 900, height: 490, anchor: 'left', align: 'center', headingText: 'Sign up or Log in', src: '//' + urlhost + '/espace-membres-uk/?modal=1&url=' + encodeURIComponent(window.location.href) });
                                        }

                                }
                                else {
                                        $(spanID).innerHTML = cache_avant;
                                }

                        }

                }

        );

}

/* FIN GESTION COEUR */
//////////////////////

/* GESTION BIBLIO */

var modifier_biblio = function (ID, Etat) {

        var url = '//www.free-scores.com/espace-membres/wallet.php';
        Params = 'partition=' + ID;
        Params += '&Etat=' + Etat;
        Params += '&wallet=biblio';

        cache_avant = $('Biblio_' + ID).innerHTML;

        if (typeof langue_site != "undefined") {
                Params += '&langue_site=' + langue_site;
        }

        var myAjax = new Ajax.Request(url,
                {
                        method: 'get',
                        evalScripts: false,
                        parameters: Params,
                        onLoading: function (xhr) { // Après appel méthode open

                        },
                        onFailure: function (xhr) { // Réponse HTTP != 2xx
                                $('Biblio_' + ID).innerHTML = cache_avant;

                        },
                        onComplete: function (xhr, json) {
                                var Reponse = xhr.responseText;
                                if (Reponse == 1 || Reponse == 6) {
                                        // Requête totalement terminée
                                        new Effect.Opacity('Biblio_' + ID, { from: 1, to: 0, duration: 0 });
                                        if (Etat == 1) {
                                                Etat_show = '0';
                                                image = 'check_vert.png';
                                                message = 'Remove';
                                                message_notif = 'This sheetmusic has been successfully added to <a href="//www.free-scores.com/free-sheet-music.php?wallet=b">your library</a>';
                                                classe = 'coeur_selected';
                                        }
                                        else {
                                                Etat_show = '1';
                                                image = 'check_gris.png';
                                                message = 'Add';
                                                message_notif = 'This sheetmusic has been successfully removed from <a href="//www.free-scores.com/free-sheet-music.php?wallet=b">your library</a>';
                                                classe = 'coeur';
                                        }

                                        output = '<a href="#" ';
                                        if (!browserIsMobileSafari) {
                                                output += 'onMouseOver="Tip(\'<b>Library</b><br />' + message + '\',  SHADOW, true,DELAY,0)" onMouseOut="UnTip()"';
                                        }

                                        output += ' class=' + classe + '  style="display: inline-block;outline: none;width:30px;height:20px;margin:0px 0px 0px 0px;padding: 0px 2px 0px 2px; text-align: center;border: solid 1px #bfbfbf;-webkit-border-radius: .5em;-moz-border-radius: .5em;border-radius: .3em;background: -webkit-gradient(linear, left top, left bottom, from(#ffffff), to(#f1f1f1));background: -moz-linear-gradient(top,  #ffffff,  #f1f1f1);filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#ffffff, endColorstr=#f1f1f1);" ';
                                        output += ' onClick="modifier_biblio(' + ID + ', ' + Etat_show + ');return false;"';

                                        output += '><img src="https://img.free-scores.com/IMAGES/' + image + '" border=0/></a>';

                                        $('Biblio_' + ID).innerHTML = output;
                                        new Effect.Opacity('Biblio_' + ID, { from: 0, to: 1, duration: 0.5 });
                                        //               Add_notification(message_notif);

                                }
                                else if (Reponse == 0) {

                                        hs.htmlExpand(null, { objectType: 'iframe', width: 900, height: 490, anchor: 'left', align: 'center', headingText: 'Sign up or Log in', src: '//' + urlhost + '/espace-membres-uk/?modal=1&url=' + encodeURIComponent(window.location.href) });


                                }
                                else {
                                        $('Biblio_' + ID).innerHTML = cache_avant;
                                }

                        }

                }

        );

}

var modifier_biblio2 = function (ID, Etat, spanID, classON, classOFF) {

        Params = new Hash();
        Params.set('partition', ID);
        Params.set('Etat', Etat);
        Params.set('wallet', 'biblio');


        //²	alert(document.location.host + ' m.free-scores.com');
        if (document.location.host == 'm.free-scores.com') {
                var url = '//m.free-scores.com/espace-membres/wallet.php';
                urlhost = 'm.free-scores.com';
                Params.set('mobile', 1);
        }
        else {
                var url = '//www.free-scores.com/espace-membres/wallet.php';
                urlhost = 'www.free-scores.com';
                Params.set('mobile', 0);
        }

        if (typeof langue_site != "undefined") {
                Params.set('langue_site', langue_site);
        }

        cache_avant = $(spanID).innerHTML;

        var myAjax = new Ajax.Request(url,
                {
                        method: 'get',
                        evalScripts: false,
                        parameters: Params,
                        onLoading: function (xhr) { // Après appel méthode open
                                $(spanID).Pulsate();

                        },
                        onFailure: function (xhr) { // Réponse HTTP != 2xx
                                $(spanID).innerHTML = cache_avant;

                        },
                        onComplete: function (xhr, json) {
                                var Reponse = xhr.responseText;
                                if (Reponse == 1 || Reponse == 6) {
                                        // Requête totalement terminée
                                        new Effect.Opacity(spanID, { from: 1, to: 0, duration: 0 });
                                        if (Etat == 1) {
                                                Etat_show = '0';
                                                imageclass = 'sprite-image biblio_s';
                                                message_notif = 'This sheetmusic has been successfully added to <a href="//' + urlhost + '/free-sheet-music.php?wallet=c">your library</a>';
                                                classe = classON;
                                        }
                                        else {
                                                Etat_show = '1';
                                                imageclass = 'sprite-image biblio_s_gris';
                                                message_notif = 'This sheetmusic has been successfully removed from <a href="//' + urlhost + '/free-sheet-music.php?wallet=b">your library</a>';
                                                classe = classOFF;
                                        }

                                        output = '<a href="?biblio?' + ID + '?' + Etat_show + '" ';

                                        output += ' class=' + classe + '  style=\'\' ';
                                        output += " onClick=\"modifier_biblio2(" + ID + ", " + Etat_show + ", '" + spanID + "', '" + classON + "', '" + classOFF + "');return false;\"";

                                        output += '><span class=" ' + imageclass + '" style=\'vertical-align: middle\'></span>';
                                        output += '</a>';

                                        $(spanID).innerHTML = output;
                                        new Effect.Opacity(spanID, { from: 0, to: 1, duration: 0.5 });
                                        //   Add_notification(message_notif);

                                }
                                else if (Reponse == 0) {

                                        if (urlhost == 'm.free-scores.com') {
                                                document.location.href = '//' + urlhost + '/espace-membres-uk/?url=' + encodeURIComponent(window.location.href);
                                        }
                                        else {
                                                hs.htmlExpand(null, { objectType: 'iframe', width: 900, height: 490, anchor: 'left', align: 'center', headingText: 'Sign up or Log in', src: '//' + urlhost + '/espace-membres-uk/?modal=1&url=' + encodeURIComponent(window.location.href) });
                                        }

                                }
                                else {
                                        $(spanID).innerHTML = cache_avant;
                                }

                        }

                }

        );

}

/* FIN GESTION Biblio */
//////////////////////

/* GESTION VIDEO */

function gestionVideo_multiOptions(ID_div, CLEF, video_id, membre, langue_site, fenetre_div, mobile, url) {
        var video_id;

        if ($(fenetre_div + ID_div)) {
                $(fenetre_div + ID_div).toggle();

                Params = new Hash();

                Params.set('CLEF', CLEF);
                Params.set('v', ID_div);
                Params.set('video_id', video_id);
                Params.set('membre', membre);
                Params.set('langue_site', langue_site);
                Params.set('mobile', mobile);

                var compteurRequetesEnCours = 0;

                //var url = '//www.free-scores.com/ajax/include_public_video_ajax.php?CLEF=' + CLEF + '&video_id=' + video_id + '&membre=' + membre + '&v=' + ID_div + '&langue_site=fr';
                if (!$(fenetre_div + ID_div).innerHTML) {
                        var myAjax = new Ajax.Request(
                                url,
                                {
                                        method: 'post',
                                        evalScripts: false,
                                        parameters: Params,
                                        onLoading: function (xhr) {
                                                Element.show('chargement_video_' + ID_div);
                                                compteurRequetesEnCours++;
                                        },
                                        onSuccess: function (xhr) {

                                                $(fenetre_div + ID_div).show();
                                                $(fenetre_div + ID_div).innerHTML = xhr.responseText;

                                        },
                                        onComplete: function (xhr) { // Toujours appel&eacute; en fin de requ&ecirc;te
                                                if (!--compteurRequetesEnCours) {

                                                        Element.hide('chargement_video_' + ID_div);

                                                }

                                        }

                                });
                }
        }
}

var Total_clapet_video = 0;

function gestionVideo_(ID_div, CLEF, video_id, membre, autoplay) {

        for (v = 1; v <= (Total_clapet_video); v++) {
                if ($('resultat_video_' + v) && v != ID_div) {
                        $('resultat_video_' + v).innerHTML = '';
                        $('resultat_video_' + v).hide();
                }
        }


        var video_id;

        if ($('resultat_video_' + ID_div)) {
                $('resultat_video_' + ID_div).toggle();

                var compteurRequetesEnCours = 0;
                var url = '//www.free-scores.com/ajax/include_public_video_ajax.php?CLEF=' + CLEF + '&video_id=' + video_id + '&membre=' + membre + '&v=' + ID_div + '&autoplay=' + autoplay + '&langue_site=uk';
                if (!$('resultat_video_' + ID_div).innerHTML) {
                        var myAjax = new Ajax.Request(
                                url,
                                {
                                        method: 'post',
                                        onLoading: function (xhr) {
                                                Element.show('chargement_video_' + ID_div);
                                                compteurRequetesEnCours++;
                                        },
                                        onSuccess: function (xhr) {

                                                $('resultat_video_' + ID_div).show();
                                                $('resultat_video_' + ID_div).innerHTML = xhr.responseText;

                                        },
                                        onComplete: function (xhr) { // Toujours appel&eacute; en fin de requ&ecirc;te
                                                if (!--compteurRequetesEnCours) {

                                                        Element.hide('chargement_video_' + ID_div);

                                                }

                                        }

                                });
                }
        }
}
/* FIN GESTION VIDEO */

/* GESTION AUDIO  */

var Total_clapet = 0;

function gestionAudio_multiOptions(ID_div, CLEF, secteur, langue_site, fenetre_div, mobile, url) {

        for (u = 1; u <= (Total_clapet); u++) {
                if ($(fenetre_div + u) && u != ID_div) {
                        $(fenetre_div + u).innerHTML = '';
                        $(fenetre_div + u).hide();
                }
        }

        $(fenetre_div + ID_div).toggle();

        var compteurRequetesEnCours = 0;

        //	var url = '//www.free-scores.com/ajax/include_public_audio_ajax_listing.php';

        Params = new Hash();

        Params.set('CLEF', CLEF);
        Params.set('secteur', secteur);
        Params.set('langue_site', langue_site);
        Params.set('mobile', mobile);

        if (!$(fenetre_div + ID_div).innerHTML) {
                var myAjax = new Ajax.Request(
                        url,
                        {
                                method: 'post',
                                evalScripts: false,
                                parameters: Params,
                                onSuccess: function (xhr) {
                                        $(fenetre_div + ID_div).show();
                                        $(fenetre_div + ID_div).innerHTML = xhr.responseText;
                                }

                        });
        }
}


function gestionAudio2016brut(CLEF, secteur) {
        Params = new Hash();
        if (secteur == 3) {

                if (document.location.host == 'm.free-scores.com') {
                        var url = '//m.free-scores.com/ajax/include_public_audio_ajax_membreamembre.php';
                        Params.set('mobile', 1);
                }
                else {
                        var url = '//www.free-scores.com/ajax/include_public_audio_ajax_membreamembre.php';
                        Params.set('mobile', 0);
                }




        }
        else {
                if (document.location.host == 'm.free-scores.com') {
                        var url = '//m.free-scores.com/ajax/include_public_audio_ajax_listing2.php';
                        Params.set('mobile', 1);
                }
                else {
                        var url = '//www.free-scores.com/ajax/include_public_audio_ajax_listing2.php';
                        Params.set('mobile', 0);
                }


        }


        Params.set('CLEF', CLEF);
        Params.set('secteur', secteur);
        Params.set('langue_site', 'uk');

        var myAjax = new Ajax.Request(
                url,
                {
                        method: 'post',
                        evalScripts: false,
                        parameters: Params,
                        onSuccess: function (xhr, json) {

                                var Reponse2 = JSON.parse(xhr.responseText);

                                ll = Reponse2.principal.Titre;

                                retour_text = '';
                                Add = '';

                                //                console.log('TEST1 ' + Reponse2.principal.indice);

                                if (!document.getElementById(Reponse2.principal.indice)) {

                                        //                console.log('TEST2 ' + Reponse2.sup);
                                        Add += "<li>\n";
                                        Add += "<a type='audio/mpeg' href='" + Reponse2.principal.URL + "' class='texte marque_transp_inv' ";
                                        Add += "id='" + Reponse2.principal.indice + "'";
                                        Add += ">";
                                        Add += "<b>" + Reponse2.principal.Titre + "</b>";
                                        if (Reponse2.principal.Interprete) {
                                                Add += " - " + Reponse2.principal.Interprete;
                                        }

                                        if (Reponse2.principal.Option) {
                                                Add += "<span class='label'>" + Reponse2.principal.Option + "</span>";
                                        }
                                        Add += "</a>";
                                        if (Reponse2.principal.PagePDF) {
                                                Add += "<a href='" + Reponse2.principal.PagePDF + "' class='texte marque_transp_inv' style='clear:none;float:right;' >";
                                                Add += "<img src='https://img.free-scores.com/IMAGES/notes.png' /> SHEET MUSIC";
                                                Add += "</a>";
                                        }

                                        if (Reponse2.principal.Biblio) {
                                                Add += "<span id='SM_biblio_" + Reponse2.principal.CLEF + Reponse2.principal.indice + "'>";
                                                Add += "<a href='?biblio?" + Reponse2.principal.CLEF + "?0' class='biblio2a_selected marque_transp_inv' onClick=\"modifier_biblio2(" + Reponse2.principal.CLEF + ", 0, 'SM_biblio_" + Reponse2.principal.CLEF + Reponse2.principal.indice + "', 'biblio2a_selected marque_transp_inv', 'biblio2a marque_transp_inv');return false;\" >";
                                                Add += "<span class='sprite-image biblio_s'></span>";
                                                Add += "</a></span>";
                                        }
                                        else {
                                                Add += "<span id='SM_biblio_" + Reponse2.principal.CLEF + Reponse2.principal.indice + "'>";
                                                Add += "<a href='?biblio?" + Reponse2.principal.CLEF + "?1' class='biblio2a_selected marque_transp_inv' onClick=\"modifier_biblio2(" + Reponse2.principal.CLEF + ", 1, 'SM_biblio_" + Reponse2.principal.CLEF + Reponse2.principal.indice + "', 'biblio2a_selected marque_transp_inv', 'biblio2a marque_transp_inv');return false;\" >";
                                                Add += "<span class='sprite-image biblio_s_gris'></span>";
                                                Add += "</a></span>";
                                        }

                                        if (Reponse2.principal.Jaime) {
                                                Add += "<span id='SM_like_" + Reponse2.principal.CLEF + Reponse2.principal.indice + "'>";
                                                Add += "<a href='?like?" + Reponse2.principal.CLEF + "?0' class='coeur2a_selected marque_transp_inv' onClick=\"modifier_coeur2(" + Reponse2.principal.CLEF + ", 0, 'SM_like_" + Reponse2.principal.CLEF + Reponse2.principal.indice + "', 'coeur2a_selected marque_transp_inv', 'coeur2a marque_transp_inv');return false;\" >";
                                                Add += "<span class='sprite-image coeur_s'></span>";
                                                Add += "</a></span>";
                                        }
                                        else {
                                                Add += "<span id='SM_like_" + Reponse2.principal.CLEF + Reponse2.principal.indice + "'>";
                                                Add += "<a href='?like?" + Reponse2.principal.CLEF + "?1' class='coeur2a_selected marque_transp_inv' onClick=\"modifier_coeur2(" + Reponse2.principal.CLEF + ", 1, 'SM_like_" + Reponse2.principal.CLEF + Reponse2.principal.indice + "', 'coeur2a_selected marque_transp_inv', 'coeur2a marque_transp_inv');return false;\" >";
                                                Add += "<span class='sprite-image coeur_s_gris'></span>";
                                                Add += "</a></span>";
                                        }

                                        if (Reponse2.principal.VotreAvisMP3) {
                                                Add += "<a href='" + Reponse2.principal.VotreAvisMP3 + "' class='addcommentmp3_2a marque_transp_inv' onClick=\"return hs.htmlExpand(this, {objectType: 'iframe', width: 650, height: 650 , anchor: 'auto'} );\" >";
                                                Add += "<span class='sprite-image edit2'></span>";
                                                Add += "</a>";
                                        }

                                        Add += "</li>";
                                }
                                else {
                                        //                console.log('TEST3');

                                }

                                if (Reponse2.sup) {

                                        for (MP3 in Reponse2.sup) {

                                                if (!isNaN(MP3)) {

                                                        //retour+="<a href=''>";

                                                        if (Reponse2.sup[MP3].radio_shuffle_validation == 1) {
                                                                image_play = 'sprite-image button_play_semi_10x10';
                                                                type_mp3 = "<font color='#F68618'><b>Human</b></font> interpretation";
                                                        }
                                                        else if (Reponse2.sup[MP3].radio_shuffle_validation == 0) {
                                                                image_play = 'sprite-image button_play_semi_nb10x10';
                                                                type_mp3 = "<font color='#317FCB'><b>Digital</b></font> interpretation";
                                                        }
                                                        else if (Reponse2.sup[MP3].radio_shuffle_validation == 2) {
                                                                image_play = 'sprite-image button_play_semi_nb10x10';
                                                                type_mp3 = "<font color='#317FCB'><b>Digital</b></font> interpretation";
                                                        }
                                                        else if (Reponse2.sup[MP3].radio_shuffle_validation == 3) {
                                                                image_play = 'sprite-image button_play_semi_nb10x10';
                                                                type_mp3 = "<font color='#317FCB'><b>Digital</b></font> interpretation";
                                                        }

                                                        Text_tip = "<b>" + type_mp3 + " ";
                                                        if (Reponse2.sup[MP3].membre == 'free-scores-admin') {
                                                                Text_tip += "[free-scores]";
                                                        }
                                                        else {
                                                                Text_tip += "[" + Reponse2.sup[MP3].Interprete + "]";
                                                        }

                                                        //   console.log(MP3 + ' / '+ Reponse2.sup[MP3].Titre);

                                                        retour_text += "<a href='#play' onMouseOver=\"Tip('" + Text_tip.replace(/'/g, "\\'") + "',  SHADOW, true,DELAY, 0)\" onMouseOut=\"UnTip()\" onClick=\"document.getElementById('" + Reponse2.sup[MP3].indice + "').click();\" ><span class='" + image_play + " marque_transp_inv'></span>";
                                                        retour_text + "</a>";
                                                        if (!document.getElementById(Reponse2.sup[MP3].indice)) {
                                                                Add += "<li>\n";
                                                                Add += "<a type='audio/mpeg' href='" + Reponse2.sup[MP3].URL + "' class='texte marque_transp_inv' ";
                                                                Add += "id='" + Reponse2.sup[MP3].indice + "'";
                                                                Add += ">";
                                                                Add += "<b>" + Reponse2.sup[MP3].Titre + "</b>";
                                                                if (Reponse2.sup[MP3].Interprete) {
                                                                        Add += " - " + Reponse2.sup[MP3].Interprete;
                                                                }

                                                                if (Reponse2.sup[MP3].Option) {
                                                                        Add += "<span class='label'>" + Reponse2.sup[MP3].Option + "</span>";
                                                                }
                                                                Add += "</a>";
                                                                if (Reponse2.sup[MP3].PagePDF) {
                                                                        Add += "<a href='" + Reponse2.sup[MP3].PagePDF + "' class='texte marque_transp_inv' style='clear:none;float:right;' >";
                                                                        Add += "<img src='https://img.free-scores.com/IMAGES/notes.png' /> SHEET MUSIC";
                                                                        Add += "</a>";
                                                                }

                                                                if (Reponse2.sup[MP3].Biblio) {
                                                                        Add += "<span id='SM_biblio_" + Reponse2.sup[MP3].CLEF + Reponse2.sup[MP3].indice + "'>";
                                                                        Add += "<a href='?biblio?" + Reponse2.sup[MP3].CLEF + "?0' class='biblio2a_selected marque_transp_inv' onClick=\"modifier_biblio2(" + Reponse2.sup[MP3].CLEF + ", 0, 'SM_biblio_" + Reponse2.sup[MP3].CLEF + Reponse2.sup[MP3].indice + "', 'biblio2a_selected marque_transp_inv', 'biblio2a marque_transp_inv');return false;\" >";
                                                                        Add += "<span class='sprite-image biblio_s'></span>";
                                                                        Add += "</a></span>";
                                                                }
                                                                else {
                                                                        Add += "<span id='SM_biblio_" + Reponse2.sup[MP3].CLEF + Reponse2.sup[MP3].indice + "'>";
                                                                        Add += "<a href='?biblio?" + Reponse2.sup[MP3].CLEF + "?1' class='biblio2a_selected marque_transp_inv' onClick=\"modifier_biblio2(" + Reponse2.sup[MP3].CLEF + ", 1, 'SM_biblio_" + Reponse2.sup[MP3].CLEF + Reponse2.sup[MP3].indice + "', 'biblio2a_selected marque_transp_inv', 'biblio2a marque_transp_inv');return false;\" >";
                                                                        Add += "<span class='sprite-image biblio_s_gris'></span>";
                                                                        Add += "</a></span>";
                                                                }

                                                                if (Reponse2.sup[MP3].Jaime) {
                                                                        Add += "<span id='SM_like_" + Reponse2.sup[MP3].CLEF + Reponse2.sup[MP3].indice + "'>";
                                                                        Add += "<a href='?like?" + Reponse2.sup[MP3].CLEF + "?0' class='coeur2a_selected marque_transp_inv' onClick=\"modifier_coeur2(" + Reponse2.sup[MP3].CLEF + ", 0, 'SM_like_" + Reponse2.sup[MP3].CLEF + Reponse2.sup[MP3].indice + "', 'coeur2a_selected marque_transp_inv', 'coeur2a marque_transp_inv');return false;\" >";
                                                                        Add += "<span class='sprite-image coeur_s'></span>";
                                                                        Add += "</a></span>";
                                                                }
                                                                else {
                                                                        Add += "<span id='SM_like_" + Reponse2.sup[MP3].CLEF + Reponse2.sup[MP3].indice + "'>";
                                                                        Add += "<a href='?like?" + Reponse2.sup[MP3].CLEF + "?1' class='coeur2a_selected marque_transp_inv' onClick=\"modifier_coeur2(" + Reponse2.sup[MP3].CLEF + ", 1, 'SM_like_" + Reponse2.sup[MP3].CLEF + Reponse2.sup[MP3].indice + "', 'coeur2a_selected marque_transp_inv', 'coeur2a marque_transp_inv');return false;\" >";
                                                                        Add += "<span class='sprite-image coeur_s_gris'></span>";
                                                                        Add += "</a></span>";
                                                                }

                                                                if (Reponse2.sup[MP3].VotreAvisMP3) {
                                                                        Add += "<a href='" + Reponse2.sup[MP3].VotreAvisMP3 + "' class='addcommentmp3_2a marque_transp_inv' onClick=\"return hs.htmlExpand(this, {objectType: 'iframe', width: 650, height: 650 , anchor: 'auto'} );\" >";
                                                                        Add += "<span class='sprite-image edit2'></span>";
                                                                        Add += "</a>";
                                                                }

                                                                Add += "</li>";

                                                        }

                                                }

                                        }

                                }
                                //                console.log('TEST4');
                                if (Add) {
                                        $('sm2-playlist-bd').insert({ bottom: Add });
                                }

                                document.getElementById(Reponse2.principal.indice).click();

                        }

                });

}

function gestionAudio2016(ID_div, CLEF, secteur) {

        if ($('resultat_audio_' + ID_div)) {
                $('resultat_audio_' + ID_div).toggle();
        }

        var url = '//www.free-scores.com/ajax/include_public_audio_ajax_listing2.php';

        Params = new Hash();

        Params.set('CLEF', CLEF);
        Params.set('secteur', secteur);
        Params.set('langue_site', 'uk');

        if (!$('resultat_audio_' + ID_div).innerHTML) {
                var myAjax = new Ajax.Request(
                        url,
                        {
                                method: 'post',
                                evalScripts: false,
                                parameters: Params,
                                onSuccess: function (xhr, json) {
                                        Reponse_membres_ajax = xhr.responseText;

                                        var Reponse2 = eval("(" + Reponse_membres_ajax + ")");


                                        ll = Reponse2.principal.Titre;

                                        //ll=ll+Reponse2.sup[2].Titre;

                                        //              Params.set("SUP", Reponse2.sup);

                                        retour_text = '';
                                        Add = '';

                                        //                console.log('TEST1 ' + Reponse2.principal.indice);

                                        if (!document.getElementById(Reponse2.principal.indice)) {

                                                //                console.log('TEST2 ' + Reponse2.sup);
                                                Add += "<li>\n";
                                                Add += "<a type='audio/mpeg' href='" + Reponse2.principal.URL + "'  class='texte marque_transp_inv' ";
                                                Add += "id='" + Reponse2.principal.indice + "'";
                                                Add += ">";
                                                Add += "<b>" + Reponse2.principal.Titre + "</b>";
                                                if (Reponse2.principal.Interprete) {
                                                        Add += " - " + Reponse2.principal.Interprete;
                                                }

                                                if (Reponse2.principal.Option) {
                                                        Add += "<span class='label'>" + Reponse2.principal.Option + "</span>";
                                                }
                                                Add += "</a>";
                                                if (Reponse2.principal.PagePDF) {
                                                        Add += "<a href='" + Reponse2.principal.PagePDF + "' class='texte marque_transp_inv' style='clear:none;float:right;' >";
                                                        Add += "<img src='https://img.free-scores.com/IMAGES/notes.png' /> SHEET MUSIC";
                                                        Add += "</a>";
                                                }

                                                if (Reponse2.principal.Biblio) {
                                                        Add += "<span id='SM_biblio_" + Reponse2.principal.CLEF + Reponse2.principal.indice + "'>";
                                                        Add += "<a href='?biblio?" + Reponse2.principal.CLEF + "?0' class='biblio2a_selected marque_transp_inv' onClick=\"modifier_biblio2(" + Reponse2.principal.CLEF + ", 0, 'SM_biblio_" + Reponse2.principal.CLEF + Reponse2.principal.indice + "', 'biblio2a_selected marque_transp_inv', 'biblio2a marque_transp_inv');return false;\" >";
                                                        Add += "<span class='sprite-image biblio_s'></span>";
                                                        Add += "</a></span>";
                                                }
                                                else {
                                                        Add += "<span id='SM_biblio_" + Reponse2.principal.CLEF + Reponse2.principal.indice + "'>";
                                                        Add += "<a href='?biblio?" + Reponse2.principal.CLEF + "?1' class='biblio2a_selected marque_transp_inv' onClick=\"modifier_biblio2(" + Reponse2.principal.CLEF + ", 1, 'SM_biblio_" + Reponse2.principal.CLEF + Reponse2.principal.indice + "', 'biblio2a_selected marque_transp_inv', 'biblio2a marque_transp_inv');return false;\" >";
                                                        Add += "<span class='sprite-image biblio_s_gris'></span>";
                                                        Add += "</a></span>";
                                                }

                                                if (Reponse2.principal.Jaime) {
                                                        Add += "<span id='SM_like_" + Reponse2.principal.CLEF + Reponse2.principal.indice + "'>";
                                                        Add += "<a href='?like?" + Reponse2.principal.CLEF + "?0' class='coeur2a_selected marque_transp_inv' onClick=\"modifier_coeur2(" + Reponse2.principal.CLEF + ", 0, 'SM_like_" + Reponse2.principal.CLEF + Reponse2.principal.indice + "', 'coeur2a_selected marque_transp_inv', 'coeur2a marque_transp_inv');return false;\" >";
                                                        Add += "<span class='sprite-image coeur_s'></span>";
                                                        Add += "</a></span>";
                                                }
                                                else {
                                                        Add += "<span id='SM_like_" + Reponse2.principal.CLEF + Reponse2.principal.indice + "'>";
                                                        Add += "<a href='?like?" + Reponse2.principal.CLEF + "?1' class='coeur2a_selected marque_transp_inv' onClick=\"modifier_coeur2(" + Reponse2.principal.CLEF + ", 1, 'SM_like_" + Reponse2.principal.CLEF + Reponse2.principal.indice + "', 'coeur2a_selected marque_transp_inv', 'coeur2a marque_transp_inv');return false;\" >";
                                                        Add += "<span class='sprite-image coeur_s_gris'></span>";
                                                        Add += "</a></span>";
                                                }

                                                if (Reponse2.principal.VotreAvisMP3) {
                                                        Add += "<a href='" + Reponse2.principal.VotreAvisMP3 + "' class='addcommentmp3_2a marque_transp_inv' onClick=\"return hs.htmlExpand(this, {objectType: 'iframe', width: 650, height: 650 , anchor: 'auto'} );\" >";
                                                        Add += "<span class='sprite-image edit2'></span>";
                                                        Add += "</a>";
                                                }

                                                Add += "</li>";
                                        }
                                        else {
                                                //                console.log('TEST3');

                                        }

                                        if (Reponse2.sup) {

                                                for (MP3 in Reponse2.sup) {

                                                        if (!isNaN(MP3)) {

                                                                //retour+="<a href=''>";

                                                                if (Reponse2.sup[MP3].radio_shuffle_validation == 1) {
                                                                        image_play = 'sprite-image button_play_semi_10x10';
                                                                        type_mp3 = "<font color='#F68618'><b>Human</b></font> interpretation";
                                                                }
                                                                else if (Reponse2.sup[MP3].radio_shuffle_validation == 0) {
                                                                        image_play = 'sprite-image button_play_semi_nb10x10';
                                                                        type_mp3 = "<font color='#317FCB'><b>Digital</b></font> interpretation";
                                                                }
                                                                else if (Reponse2.sup[MP3].radio_shuffle_validation == 2) {
                                                                        image_play = 'sprite-image button_play_semi_nb10x10';
                                                                        type_mp3 = "<font color='#317FCB'><b>Digital</b></font> interpretation";
                                                                }
                                                                else if (Reponse2.sup[MP3].radio_shuffle_validation == 3) {
                                                                        image_play = 'sprite-image button_play_semi_nb10x10';
                                                                        type_mp3 = "<font color='#317FCB'><b>Digital</b></font> interpretation";
                                                                }

                                                                Text_tip = "<b>" + type_mp3 + " ";
                                                                if (Reponse2.sup[MP3].membre == 'free-scores-admin') {
                                                                        Text_tip += "[free-scores]";
                                                                }
                                                                else {
                                                                        Text_tip += "[" + Reponse2.sup[MP3].Interprete + "]";
                                                                }

                                                                console.log(MP3 + ' / ' + Reponse2.sup[MP3].Titre);

                                                                retour_text += "<a href='#play' onMouseOver=\"Tip('" + Text_tip.replace(/'/g, "\\'") + "',  SHADOW, true,DELAY, 0)\" onMouseOut=\"UnTip()\" onClick=\"document.getElementById('" + Reponse2.sup[MP3].indice + "').click();\" ><span class='" + image_play + " marque_transp_inv'></span>";
                                                                retour_text + "</a>";
                                                                if (!document.getElementById(Reponse2.sup[MP3].indice)) {
                                                                        Add += "<li>\n";
                                                                        Add += "<a type='audio/mpeg' href='" + Reponse2.sup[MP3].URL + "' class='texte marque_transp_inv' ";
                                                                        Add += "id='" + Reponse2.sup[MP3].indice + "'";
                                                                        Add += ">";
                                                                        Add += "<b>" + Reponse2.sup[MP3].Titre + "</b>";
                                                                        if (Reponse2.sup[MP3].Interprete) {
                                                                                Add += " - " + Reponse2.sup[MP3].Interprete;
                                                                        }

                                                                        if (Reponse2.sup[MP3].Option) {
                                                                                Add += "<span class='label'>" + Reponse2.sup[MP3].Option + "</span>";
                                                                        }
                                                                        Add += "</a>";
                                                                        if (Reponse2.sup[MP3].PagePDF) {
                                                                                Add += "<a href='" + Reponse2.sup[MP3].PagePDF + "' class='texte marque_transp_inv' style='clear:none;float:right;' >";
                                                                                Add += "<img src='https://img.free-scores.com/IMAGES/notes.png' /> SHEET MUSIC";
                                                                                Add += "</a>";
                                                                        }

                                                                        if (Reponse2.sup[MP3].Biblio) {
                                                                                Add += "<span id='SM_biblio_" + Reponse2.sup[MP3].CLEF + Reponse2.sup[MP3].indice + "'>";
                                                                                Add += "<a href='?biblio?" + Reponse2.sup[MP3].CLEF + "?0' class='biblio2a_selected marque_transp_inv' onClick=\"modifier_biblio2(" + Reponse2.sup[MP3].CLEF + ", 0, 'SM_biblio_" + Reponse2.sup[MP3].CLEF + Reponse2.sup[MP3].indice + "', 'biblio2a_selected marque_transp_inv', 'biblio2a marque_transp_inv');return false;\" >";
                                                                                Add += "<span class='sprite-image biblio_s'></span>";
                                                                                Add += "</a></span>";
                                                                        }
                                                                        else {
                                                                                Add += "<span id='SM_biblio_" + Reponse2.sup[MP3].CLEF + Reponse2.sup[MP3].indice + "'>";
                                                                                Add += "<a href='?biblio?" + Reponse2.sup[MP3].CLEF + "?1' class='biblio2a_selected marque_transp_inv' onClick=\"modifier_biblio2(" + Reponse2.sup[MP3].CLEF + ", 1, 'SM_biblio_" + Reponse2.sup[MP3].CLEF + Reponse2.sup[MP3].indice + "', 'biblio2a_selected marque_transp_inv', 'biblio2a marque_transp_inv');return false;\" >";
                                                                                Add += "<span class='sprite-image biblio_s_gris'></span>";
                                                                                Add += "</a></span>";
                                                                        }

                                                                        if (Reponse2.sup[MP3].Jaime) {
                                                                                Add += "<span id='SM_like_" + Reponse2.sup[MP3].CLEF + Reponse2.sup[MP3].indice + "'>";
                                                                                Add += "<a href='?like?" + Reponse2.sup[MP3].CLEF + "?0' class='coeur2a_selected marque_transp_inv' onClick=\"modifier_coeur2(" + Reponse2.sup[MP3].CLEF + ", 0, 'SM_like_" + Reponse2.sup[MP3].CLEF + Reponse2.sup[MP3].indice + "', 'coeur2a_selected marque_transp_inv', 'coeur2a marque_transp_inv');return false;\" >";
                                                                                Add += "<span class='sprite-image coeur_s'></span>";
                                                                                Add += "</a></span>";
                                                                        }
                                                                        else {
                                                                                Add += "<span id='SM_like_" + Reponse2.sup[MP3].CLEF + Reponse2.sup[MP3].indice + "'>";
                                                                                Add += "<a href='?like?" + Reponse2.sup[MP3].CLEF + "?1' class='coeur2a_selected marque_transp_inv' onClick=\"modifier_coeur2(" + Reponse2.sup[MP3].CLEF + ", 1, 'SM_like_" + Reponse2.sup[MP3].CLEF + Reponse2.sup[MP3].indice + "', 'coeur2a_selected marque_transp_inv', 'coeur2a marque_transp_inv');return false;\" >";
                                                                                Add += "<span class='sprite-image coeur_s_gris'></span>";
                                                                                Add += "</a></span>";
                                                                        }

                                                                        if (Reponse2.sup[MP3].VotreAvisMP3) {
                                                                                Add += "<a href='" + Reponse2.sup[MP3].VotreAvisMP3 + "' class='addcommentmp3_2a marque_transp_inv' onClick=\"return hs.htmlExpand(this, {objectType: 'iframe', width: 650, height: 650 , anchor: 'auto'} );\" >";
                                                                                Add += "<span class='sprite-image edit2'></span>";
                                                                                Add += "</a>";
                                                                        }

                                                                        Add += "</li>";

                                                                }

                                                        }

                                                }

                                        }
                                        //                console.log('TEST4');
                                        if (Add) {
                                                $('sm2-playlist-bd').insert({ bottom: Add });
                                        }


                                        if (retour_text) {
                                                retour_text = "<font class='dp'>Others audio</font> " + retour_text;
                                        }
                                        $('resultat_audio_' + ID_div).show();
                                        $('resultat_audio_' + ID_div).innerHTML = retour_text;

                                        document.getElementById(Reponse2.principal.indice).click();

                                }

                        });
        }
        //alert("test");

}


/* FIN GESTION AUDIO */

function gestionAudio_(ID_div, CLEF, secteur) {


        if ($('dewplayer-vol') != null) {
                //alert($('dewplayer-vol').inspect());
                //$('dewplayer-vol').dewstop();
        }

        for (u = 1; u <= (Total_clapet); u++) {
                if ($('resultat_audio_' + u) && u != ID_div) {
                        $('resultat_audio_' + u).innerHTML = '';
                        $('resultat_audio_' + u).hide();
                }
        }

        $('resultat_audio_' + ID_div).toggle();

        var compteurRequetesEnCours = 0;



        // var url = '//www.free-scores.com/ajax/include_public_audio_ajax_listing_html5.php?CLEF=' + CLEF + '&secteur=' + secteur + '&langue_site=fr';
        var url = '//www.free-scores.com/ajax/include_public_audio_ajax_listing.php?CLEF=' + CLEF + '&secteur=' + secteur + '&langue_site=uk';

        if (!$('resultat_audio_' + ID_div).innerHTML) {
                var myAjax = new Ajax.Request(
                        url,
                        {
                                method: 'post',
                                onSuccess: function (xhr) {

                                        $('resultat_audio_' + ID_div).show();
                                        $('resultat_audio_' + ID_div).innerHTML = xhr.responseText;

                                }

                        });
        }
        //alert("test");

}
/* FIN GESTION AUDIO */

function Stripe_donation(token_id, devise_selectionnee, somme_stripe, mail_address) {
        //      alert(token_id);
        var url = 'https://www.free-scores.com/ajax/charge_stripe_donation.php';
        Params = new Hash();

        Params.set('Token_id', token_id);
        Params.set('devise_selectionnee', devise_selectionnee);
        Params.set('somme_stripe', somme_stripe);
        Params.set('mail_address', mail_address);

        var myAjax = new Ajax.Request(
                url,
                {
                        method: 'post',
                        evalScripts: false,
                        parameters: Params,
                        onLoading: function (xhr) { // Apr&egrave;s appel m&eacute;thode open
                                $('loading2').show();

                        },
                        onSuccess: function (xhr) {
                                var resultat = JSON.parse(xhr.responseText);

                                if (resultat.Erreur == 1) {
                                        //              alert("Attention un problème a été détecté, le paiement n'a pas été effectué");
                                        //      $(res_span).innerHTML = '<span style="color:#cc0000"><img src="https://img.free-scores.com/IMAGES/icones/cross.png" width=12 align=absmiddle /> cet email est d&eacute;j&agrave; utilis&eacute;</span>';
                                }
                                else {
                                        $('Merci').show();

                                        window.location.replace(window.location.href + '?paiementOK=1&AnonymeH=' + resultat.Hash);
                                        $('loading2').hide();

                                        //alert("Paiement effectu&eacute;!\nMerci pour votre g&eacute;n&eacute;rosit&eacute;!");
                                        //              alert(decodeURIComponent("Paiement effectu&eacute;!\nMerci pour votre générosité!"));
                                }

                        }

                });
}


/* GESTION PARTAGE */


function gestionPartage_(ID_div, CLEF, sa, membre) {
        var CLEF;
        $('resultat_partage_' + ID_div).toggle();

        var compteurRequetesEnCours = 0;
        var url = '//www.free-scores.com/ajax/share.php?CLEF=' + CLEF + '&sa=' + sa + '&membre=' + membre + '&v=' + ID_div + '&langue_site=uk';
        if (!$('resultat_partage_' + ID_div).innerHTML) {
                var myAjax = new Ajax.Request(
                        url,
                        {
                                method: 'post',
                                onSuccess: function (xhr) {

                                        $('resultat_partage_' + ID_div).show();
                                        $('resultat_partage_' + ID_div).innerHTML = xhr.responseText;

                                }

                        });
        }
}
/* FIN GESTION PARTAGE */


/* GESTION AUDIO PAGE PRINCIPALE */

var Total_clapet = 0;

function gestionAudio2_(ID_div, CLEF, secteur) {


        if ($('dewplayer-vol') != null) {
                //alert($('dewplayer-vol').inspect());
                //$('dewplayer-vol').dewstop();
        }

        for (u = 1; u <= (Total_clapet); u++) {
                if ($('resultat_audio2_' + u) && u != ID_div) {
                        $('resultat_audio2_' + u).innerHTML = '';
                        $('resultat_audio2_' + u).hide();
                }
        }

        $('resultat_audio2_' + ID_div).toggle();

        var compteurRequetesEnCours = 0;



        // var url = '//www.free-scores.com/ajax/include_public_audio_ajax_listing_html5.php?CLEF=' + CLEF + '&secteur=' + secteur + '&langue_site=fr';
        var url = '//www.free-scores.com/ajax/include_public_audio_ajax.php?CLEF=' + CLEF + '&secteur=' + secteur + '&langue_site=uk';

        if (!$('resultat_audio2_' + ID_div).innerHTML) {
                var myAjax = new Ajax.Request(
                        url,
                        {
                                method: 'post',
                                onSuccess: function (xhr) {

                                        $('resultat_audio2_' + ID_div).show();
                                        $('resultat_audio2_' + ID_div).innerHTML = xhr.responseText;

                                }

                        });
        }
}
/* FIN GESTION AUDIO PAGE PRINCIPALE */

/* GESTION AUDIO  MP3 SUP*/

var Total_clapet_mp3sup = 0;

function gestionAudio_mp3sup_(ID_div, CLEF, secteur) {

        if ($('dewplayer-vol') != null) {
                //alert($('dewplayer-vol').inspect());
                //$('dewplayer-vol').dewstop();
        }

        for (u = 1; u <= (Total_clapet_mp3sup); u++) {
                if ($('resultat_audio_mp3sup_' + u) && u != ID_div) {
                        $('resultat_audio_mp3sup_' + u).innerHTML = '';
                        $('resultat_audio_mp3sup_' + u).hide();
                }
        }

        $('resultat_audio_mp3sup_' + ID_div).toggle();

        var compteurRequetesEnCours = 0;



        var url = '//www.free-scores.com/ajax/include_public_audio_ajax.php?CLEF=' + CLEF + '&secteur=' + secteur + '&langue_site=uk';

        if (!$('resultat_audio_mp3sup_' + ID_div).innerHTML) {
                var myAjax = new Ajax.Request(
                        url,
                        {
                                method: 'post',
                                onSuccess: function (xhr) {

                                        $('resultat_audio_mp3sup_' + ID_div).show();
                                        $('resultat_audio_mp3sup_' + ID_div).innerHTML = xhr.responseText;

                                }

                        });
        }
}
/* FIN GESTION AUDIO MP3 SUP*/

function gestionAudioVDA(ID_div, url_audio) {
        for (i = 1; i <= (Total_clapet); i++) {
                if ($('resultat_audioVDA_' + i) && i != ID_div) {
                        $('resultat_audioVDA_' + i).innerHTML = '';
                        $('resultat_audioVDA_' + i).hide();
                }
        }

        $('resultat_audioVDA_' + ID_div).show();
        $('resultat_audioVDA_' + ID_div).innerHTML = "<audio controls src='" + url_audio + "' autoplay>";

}

/* GESTION AUDIO/VIDEO VPU */
// secteur : 0 = VPU
// secteur : 1 = VDA SMP
// secteur : 2 = VDA les autres non ajaxés
function gestionAudioVPU_(ID_div, clef, langue_site, mobile, url, secteur) {

        for (i = 1; i <= (Total_clapet); i++) {
                if ($('resultat_audioVPU_' + i) && i != ID_div) {
                        if ($('audio_' + i)) {
                                $('resultat_audioVPU_' + i).hide();
                                $('audio_' + i).pause();
                        }
                        else {
                                $('resultat_audioVPU_' + i).innerHTML = '';
                                $('resultat_audioVPU_' + i).hide();
                        }

                }
        }

        if (secteur == 2) {
                if ($('resultat_audioVPU_' + ID_div).visible()) {
                        $('audio_' + ID_div).pause();
                }
                else {
                        $('audio_' + ID_div).play();
                }

                $('resultat_audioVPU_' + ID_div).toggle();
        }
        else {
                /*
                if ($('dewplayer-vol')!=null)
                        {
                        //alert($('dewplayer-vol').inspect());
                        //$('dewplayer-vol').dewstop();
                        }
                */
                $('resultat_audioVPU_' + ID_div).toggle();

                var compteurRequetesEnCours = 0;

                Params = new Hash();
                Params.set('clef', clef);
                Params.set('langue_site', langue_site);
                Params.set('mobile', mobile);
                Params.set('secteur', secteur);
                Params.set('avpu', ID_div);


                // var url = '//www.free-scores.com/boutique/ajax/include_ajax_boutique_audio.php?clef=' + clef +'&langue_site=' + langue_site +'&avpu=' + ID_div;

                if (!$('resultat_audioVPU_' + ID_div).innerHTML) {
                        var myAjax = new Ajax.Request(
                                url,
                                {
                                        method: 'post',
                                        evalScripts: false,
                                        parameters: Params,
                                        onLoading: function (xhr) { // Apr&egrave;s appel m&eacute;thode open
                                                // (d&eacute;but de la requ&ecirc;te Ajax)
                                                Element.show('chargement_vpu_' + ID_div);
                                                compteurRequetesEnCours++;


                                        },
                                        onSuccess: function (xhr) {

                                                $('resultat_audioVPU_' + ID_div).show();
                                                $('resultat_audioVPU_' + ID_div).innerHTML = xhr.responseText;

                                        },
                                        onComplete: function (xhr) { // Toujours appel&eacute; en fin de requ&ecirc;te
                                                if (!--compteurRequetesEnCours) {

                                                        Element.hide('chargement_vpu_' + ID_div);

                                                }

                                        }

                                });
                }
        }
}
/* FIN GESTION AUDIO */


/* GESTION AUDIO/VIDEO VDA SMP */
// secteur : 0 = VPU
// secteur : 1 = VDA SMP
// secteur : 2 = VDA les autres non ajaxés
function gestionAudioVDASMP_(ID_div, clef, langue_site, mobile, url, secteur) {

        for (i = 1; i <= (Total_clapet); i++) {
                if ($('resultat_audioVDASMP_' + i) && i != ID_div) {
                        if ($('audio_' + i)) {
                                $('resultat_audioVDASMP_' + i).hide();
                                $('audio_' + i).pause();
                        }
                        else {
                                $('resultat_audioVDASMP_' + i).innerHTML = '';
                                $('resultat_audioVDASMP_' + i).hide();
                        }

                }
        }

        if (secteur == 2) {
                if ($('resultat_audioVDASMP_' + ID_div).visible()) {
                        $('audio_' + ID_div).pause();
                }
                else {
                        $('audio_' + ID_div).play();
                }

                $('resultat_audioVDASMP_' + ID_div).toggle();
        }
        else {
                /*
                if ($('dewplayer-vol')!=null)
                        {
                        //alert($('dewplayer-vol').inspect());
                        //$('dewplayer-vol').dewstop();
                        }
                */
                $('resultat_audioVDASMP_' + ID_div).toggle();

                var compteurRequetesEnCours = 0;

                Params = new Hash();
                Params.set('clef', clef);
                Params.set('langue_site', langue_site);
                Params.set('mobile', mobile);
                Params.set('secteur', secteur);
                Params.set('avdasmp', ID_div);


                // var url = '//www.free-scores.com/boutique/ajax/include_ajax_boutique_audio.php?clef=' + clef +'&langue_site=' + langue_site +'&avpu=' + ID_div;

                if (!$('resultat_audioVDASMP_' + ID_div).innerHTML) {
                        var myAjax = new Ajax.Request(
                                url,
                                {
                                        method: 'post',
                                        evalScripts: false,
                                        parameters: Params,
                                        onLoading: function (xhr) { // Apr&egrave;s appel m&eacute;thode open
                                                // (d&eacute;but de la requ&ecirc;te Ajax)
                                                Element.show('chargement_vdasmp_' + ID_div);
                                                compteurRequetesEnCours++;


                                        },
                                        onSuccess: function (xhr) {

                                                $('resultat_audioVDASMP_' + ID_div).show();
                                                $('resultat_audioVDASMP_' + ID_div).innerHTML = xhr.responseText;

                                        },
                                        onComplete: function (xhr) { // Toujours appel&eacute; en fin de requ&ecirc;te
                                                if (!--compteurRequetesEnCours) {

                                                        Element.hide('chargement_vdasmp_' + ID_div);

                                                }

                                        }

                                });
                }
        }
}
/* FIN GESTION AUDIO VDA SMP */

/* DEBUT GESTION AUDIO/VIDEO VPE */
function gestionAudioVPE_(ID_div, clef, langue_site, mobile, url) {

        if ($('dewplayer-vol') != null) {
                //alert($('dewplayer-vol').inspect());
                //$('dewplayer-vol').dewstop();
        }

        for (i = 1; i <= (Total_clapet_vpe); i++) {
                if ($('resultat_audioVPE_' + i) && i != ID_div) {
                        $('resultat_audioVPE_' + i).innerHTML = '';
                        $('resultat_audioVPE_' + i).hide();
                }
        }

        $('resultat_audioVPE_' + ID_div).toggle();

        var compteurRequetesEnCours = 0;
        Params = new Hash();
        Params.set('clef', clef);
        Params.set('langue_site', langue_site);
        Params.set('mobile', mobile);
        Params.set('avpe', ID_div);

        // var url = '//www.free-scores.com/boutique/ajax/include_ajax_boutique_vpe.php?clef=' + clef +'&langue_site=' + langue_site +'&avpe=' + ID_div;

        if (!$('resultat_audioVPE_' + ID_div).innerHTML) {
                var myAjax = new Ajax.Request(
                        url,
                        {
                                method: 'post',
                                evalScripts: false,
                                parameters: Params,
                                onLoading: function (xhr) { // Apr&egrave;s appel m&eacute;thode open
                                        // (d&eacute;but de la requ&ecirc;te Ajax)
                                        Element.show('chargement_vpe_' + ID_div);
                                        compteurRequetesEnCours++;


                                },
                                onSuccess: function (xhr) {

                                        $('resultat_audioVPE_' + ID_div).show();
                                        $('resultat_audioVPE_' + ID_div).innerHTML = xhr.responseText;

                                },
                                onComplete: function (xhr) { // Toujours appel&eacute; en fin de requ&ecirc;te
                                        if (!--compteurRequetesEnCours) {

                                                Element.hide('chargement_vpe_' + ID_div);

                                        }

                                }

                        });
        }
}
/* FIN GESTION AUDIO/VIDEO VPE */

/* debut GESTION AUDIO/video VIU */
function gestionAudioVIU_(ID_div, clef, langue_site) {

        if ($('dewplayer-vol') != null) {
                //alert($('dewplayer-vol').inspect());
                //$('dewplayer-vol').dewstop();
        }

        for (i = 1; i <= (Total_clapet); i++) {
                if ($('resultat_audioVIU_' + i) && i != ID_div) {
                        $('resultat_audioVIU_' + i).innerHTML = '';
                        $('resultat_audioVIU_' + i).hide();
                }
        }

        $('resultat_audioVIU_' + ID_div).toggle();

        var compteurRequetesEnCours = 0;

        var url = '//www.free-scores.com/boutique/ajax/include_ajax_boutique_viu.php?clef=' + clef + '&langue_site=' + langue_site + '&aviu=' + ID_div;

        if (!$('resultat_audioVIU_' + ID_div).innerHTML) {
                var myAjax = new Ajax.Request(
                        url,
                        {
                                method: 'post',
                                onLoading: function (xhr) { // Apr&egrave;s appel m&eacute;thode open
                                        // (d&eacute;but de la requ&ecirc;te Ajax)
                                        Element.show('chargement_viu_' + ID_div);
                                        compteurRequetesEnCours++;


                                },
                                onSuccess: function (xhr) {

                                        $('resultat_audioVIU_' + ID_div).show();
                                        $('resultat_audioVIU_' + ID_div).innerHTML = xhr.responseText;

                                },
                                onComplete: function (xhr) { // Toujours appel&eacute; en fin de requ&ecirc;te
                                        if (!--compteurRequetesEnCours) {

                                                Element.hide('chargement_viu_' + ID_div);

                                        }

                                }

                        });
        }
}
/* FIN GESTION AUDIO/VIDEO VIU */

/* debut GESTION AUDIO/video VIE */
var Total_clapetVIE = 0;
function gestionAudioVIE_(ID_div, clef, langue_site, nbr_references, zone_pays, url) {



        if ($('dewplayer-vol') != null) {
                //alert($('dewplayer-vol').inspect());
                //$('dewplayer-vol').dewstop();
        }

        for (i = 1; i <= (Total_clapetVIE); i++) {
                if ($('resultat_audioVIE_' + i) && i != ID_div) {
                        $('resultat_audioVIE_' + i).innerHTML = '';
                        $('resultat_audioVIE_' + i).hide();
                }
        }

        $('resultat_audioVIE_' + ID_div).toggle();

        var compteurRequetesEnCours = 0;
        Params = new Hash();
        Params.set('clef', clef);
        Params.set('langue_site', langue_site);
        Params.set('avie', ID_div);
        Params.set('nbr_references', nbr_references);
        Params.set('zone_pays', zone_pays);

        // var url = '//www.free-scores.com/boutique/ajax/include_ajax_boutique_vie.php?clef=' + clef +'&langue_site=' + langue_site +'&avie=' + ID_div + '&nbr_references=' + nbr_references + '&zone_pays=' + zone_pays;

        if (!$('resultat_audioVIE_' + ID_div).innerHTML) {
                var myAjax = new Ajax.Request(
                        url,
                        {
                                method: 'post',
                                evalScripts: false,
                                parameters: Params,
                                onLoading: function (xhr) { // Apr&egrave;s appel m&eacute;thode open
                                        // (d&eacute;but de la requ&ecirc;te Ajax)
                                        Element.show('chargement_vie_' + ID_div);
                                        compteurRequetesEnCours++;


                                },
                                onSuccess: function (xhr) {

                                        $('resultat_audioVIE_' + ID_div).show();
                                        $('resultat_audioVIE_' + ID_div).innerHTML = xhr.responseText;

                                },
                                onComplete: function (xhr) { // Toujours appel&eacute; en fin de requ&ecirc;te
                                        if (!--compteurRequetesEnCours) {

                                                Element.hide('chargement_vie_' + ID_div);

                                        }

                                }

                        });
        }
}
/* FIN GESTION AUDIO/VIDEO VIE */




/* debut GESTION VIDEO MANUELLE */
var Total_clapetVM = 0;
function gestionVM_(ID_div, id_youtube, langue_site) {



        if ($('dewplayer-vol') != null) {
                //alert($('dewplayer-vol').inspect());
                //$('dewplayer-vol').dewstop();
        }

        for (i = 1; i <= (Total_clapetVM); i++) {
                if ($('resultat_VM_' + i) && i != ID_div) {
                        $('resultat_VM_' + i).innerHTML = '';
                        $('resultat_VM_' + i).hide();
                }
        }

        $('resultat_VM_' + ID_div).toggle();

        var compteurRequetesEnCours = 0;

        var url = '//www.free-scores.com/boutique/ajax/include_ajax_boutique_vm.php?id_youtube=' + id_youtube + '&langue_site=' + langue_site + '&avie=' + ID_div;

        if (!$('resultat_VM_' + ID_div).innerHTML) {
                var myAjax = new Ajax.Request(
                        url,
                        {
                                method: 'post',
                                onLoading: function (xhr) { // Apr&egrave;s appel m&eacute;thode open
                                        // (d&eacute;but de la requ&ecirc;te Ajax)
                                        Element.show('chargement_VM_' + ID_div);
                                        compteurRequetesEnCours++;


                                },
                                onSuccess: function (xhr) {

                                        $('resultat_VM_' + ID_div).show();
                                        $('resultat_VM_' + ID_div).innerHTML = xhr.responseText;

                                },
                                onComplete: function (xhr) { // Toujours appel&eacute; en fin de requ&ecirc;te
                                        if (!--compteurRequetesEnCours) {

                                                Element.hide('chargement_VM_' + ID_div);

                                        }

                                }

                        });
        }
}
/* FIN GESTION VIDEO MANUELLE */

function bonmail(mailteste) {
        var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');

        if (reg.test(mailteste)) {
                return (true);
        }
        else {
                return (false);
        }
}

function verifEmail(mail, res_span, Spry = '', email_validation = '') {
        erreur = 0;
        mess_erreur = '';
        if (mail) {
                if (mail.length > 235) {
                        mess_erreur += '<span style="color:#cc0000"><b>' + mail + ' :</b> this e-mail is too long</span>';
                        if (Spry && $(Spry)) { $(Spry).className = 'textfieldRequiredState'; }
                        if (email_validation && $(email_validation)) { $(email_validation).value = 0; }
                        erreur++;
                }
                else if (!bonmail(mail)) {
                        mess_erreur += '<span style="color:#cc0000"><b>' + mail + ' :</b> this e-mail is not correct</span>';
                        if (Spry && $(Spry)) { $(Spry).className = 'textfieldRequiredState'; }
                        if (email_validation && $(email_validation)) { $(email_validation).value = 0; }
                        erreur++;
                }


                if (erreur == 0) {
                $(res_span).innerHTML = '<span style="color:#00cc00"><b>' + mail + ' :</b> this e-mail is correct</span>';
                }
                else {
                        $(res_span).innerHTML = mess_erreur;
                }

        }

}

function verifEmail2(mail, res_span, Spry = '', email_validation = '') {
        erreur = 0;
        mess_erreur = '';
        if (mail) {
                if (mail.length > 235) {
                        mess_erreur += '<span style="color:#cc0000"><b>' + mail + ' :</b> this email is too long</span>';
                        if (Spry && $(Spry)) { $(Spry).className = 'textfieldRequiredState'; }
                        if (email_validation && $(email_validation)) { $(email_validation).value = 0; }
                        erreur++;
                }
                else if (!bonmail(mail)) {
                        mess_erreur += '<span style="color:#cc0000"><b>' + mail + ' :</b> this email isn\'t correct</span>';
                        if (Spry && $(Spry)) { $(Spry).className = 'textfieldRequiredState'; }
                        if (email_validation && $(email_validation)) { $(email_validation).value = 0; }
                        erreur++;
                }

                if (erreur == 0) {
                        $(res_span).innerHTML = '';

                        Params = new Hash();
                        if (document.location.host == 'm.free-scores.com') {
                                var url = '//m.free-scores.com/ajax/verifie_email.php';
                                Params.set('mobile', 1);
                        }
                        else {
                                var url = '//www.free-scores.com/ajax/verifie_email.php';
                                Params.set('mobile', 0);
                        }


                        Params.set('mail', mail);

                        // SUIVI NOUVELLES PARTITIONS

                        var myAjax = new Ajax.Request(url,
                                {
                                        method: 'post',
                                        evalScripts: false,
                                        parameters: Params,
                                        onLoading: function (xhr) { // actions à faire pendant le chargement
                                                $(res_span).innerHTML = '<img src="https://img.free-scores.com/IMAGES/loading.gif" width=12 align=absmiddle />';
                                        },
                                        onFailure: function (xhr) { // actions si échec ( ../ajax/serveur/affiche_partitions_centrales_fr.php en erreur 404 par exemple)

                                        },
                                        onComplete: function (xhr, json) { // Requête totalement terminée
                                                var resultat = xhr.responseText;
                                                if (resultat == 1) {
                                                        $(res_span).innerHTML = '<span style="color:#cc0000"><b>' + mail + ' :</b> this mail is already used</span>';
                                                        if (Spry && $(Spry)) { $(Spry).className = 'textfieldRequiredState'; }
                                                        if (email_validation && $(email_validation)) { $(email_validation).value = 0; }
                                                }
                                                else if (resultat == 2) {
                                                        $(res_span).innerHTML = '<span style="color:#cc0000"><b>' + mail + ' :</b> this email isn\'t correct</span>';
                                                        if (Spry && $(Spry)) { $(Spry).className = 'textfieldRequiredState'; }
                                                        if (email_validation && $(email_validation)) { $(email_validation).value = 0; }
                                                }
                                                else {
                                                        $(res_span).innerHTML = '<span style="color:#00cc00"><b>' + mail + ' :</b> this mail is correct</span>';
                                                        if (Spry && $(Spry)) { $(Spry).className = ''; }
                                                        if (email_validation && $(email_validation)) { $(email_validation).value = 1; }
                                                }
                                        }
                                }
                        );
                }
                else {
                        $(res_span).innerHTML = mess_erreur;
                }

        }

}

function verifPseudo2(pseudo, res_span, Spry = '', pseudo_validation = '') {

        erreur = 0;
        mess_erreur = '';
        if (mail) {
                if (pseudo.length < 3) {
                        mess_erreur += '<span style="color:#cc0000"><img src="https://img.free-scores.com/IMAGES/icones/cross.png" />this pseudo is too short (3 characters minimum)</span>';
                        if (Spry && $(Spry)) { $(Spry).className = 'textfieldRequiredState'; }
                        if (pseudo_validation && $(pseudo_validation)) { $(pseudo_validation).value = 0; }
                        erreur++;
                }
                else if (pseudo.length > 30) {
                        mess_erreur += '<span style="color:#cc0000"><img src="https://img.free-scores.com/IMAGES/icones/cross.png" />this pseudo is too long (30 characters maximum)</span>';
                        if (pseudo_validation && $(pseudo_validation)) { $(pseudo_validation).value = 0; }
                        if (Spry && $(Spry)) { $(Spry).className = 'textfieldRequiredState'; }
                        erreur++;
                }

                if (erreur == 0) {
                        $(res_span).innerHTML = '';

                        Params = new Hash();
                        if (document.location.host == 'm.free-scores.com') {
                                var url = '//m.free-scores.com/ajax/verifie_pseudo.php';
                                Params.set('mobile', 1);
                        }
                        else {
                                var url = '//www.free-scores.com/ajax/verifie_pseudo.php';
                                Params.set('mobile', 0);
                        }


                        Params.set('pseudo', pseudo);

                        // SUIVI NOUVELLES PARTITIONS

                        var myAjax = new Ajax.Request(url,
                                {
                                        method: 'post',
                                        evalScripts: false,
                                        parameters: Params,
                                        onLoading: function (xhr) { // actions à faire pendant le chargement
                                                $(res_span).innerHTML = '<img src="https://img.free-scores.com/IMAGES/loading.gif" width=12 align=absmiddle />';
                                        },
                                        onFailure: function (xhr) { // actions si échec ( ../ajax/serveur/affiche_partitions_centrales_fr.php en erreur 404 par exemple)

                                        },
                                        onComplete: function (xhr, json) { // Requête totalement terminée
                                                var resultat = xhr.responseText;
                                                if (resultat == 1) {
                                                        $(res_span).innerHTML = '<span style="color:#cc0000"><b>' + pseudo + ' :</b> this pseudo is already used</span>';
                                                        if (Spry && $(Spry)) { $(Spry).className = 'textfieldRequiredState'; }
                                                        if (pseudo_validation && $(pseudo_validation)) { $(pseudo_validation).value = 0; }
                                                }
                                                else if (resultat == 2) {
                                                        $(res_span).innerHTML = '<span style="color:#cc0000"><b>' + pseudo + ' :</b> Special characters are not allowed in the pseudo. You can use alphanumeric characters (a-z; 0-9), hyphen - and underscore _.</span>';
                                                        if (Spry && $(Spry)) { $(Spry).className = 'textfieldRequiredState'; }
                                                        if (pseudo_validation && $(pseudo_validation)) { $(pseudo_validation).value = 0; }
                                                }
                                                else {
                                                        $(res_span).innerHTML = '<span style="color:#00cc00"><b>' + pseudo + ' :</b> this pseudo is available</span>';
                                                        if (Spry && $(Spry)) { $(Spry).className = ''; }
                                                        if (pseudo_validation && $(pseudo_validation)) { $(pseudo_validation).value = 1; }
                                                }
                                        }
                                }
                        );
                }

        }

}

function verifier3() {
        var nberreurs = 0, erreurs = '';

        if (document.f1.search.value == "") {
                erreurs += 'Please submit a word on search field\n';
                nberreurs += 1;
        }
        if (document.f1.search.value.length < 2) {
                erreurs += '2 characters minimum\n';
                nberreurs += 1;
        }

        if (nberreurs == 1) {
                alert('Please correct this error :\n' + erreurs);
                return false;
        }
        if (nberreurs > 1) {
                alert('Please correct these ' + nberreurs + ' errors :\n' + erreurs);
                return false;
        }
        return true;
}

/* GESTION CRITERES */
var Total_clapet_nesertarien = 0;
function gestionVPcritere_(ID_div, CLEF, secteur) {


        if ($('dewplayer-vol') != null) {
                //alert($('dewplayer-vol').inspect());
                //$('dewplayer-vol').dewstop();
        }

        for (i = 1; i <= (Total_clapet_nesertarien); i++) {
                if ($('resultat_VPcriteres_' + i) && i != ID_div) {
                        $('resultat_VPcriteres_' + i).innerHTML = '';
                        $('resultat_VPcriteres_' + i).hide();
                }
        }

        $('resultat_VPcriteres_' + ID_div).toggle();

        var compteurRequetesEnCours = 0;

        var url = '//www.free-scores.com/ajax/include_VP_critere_etendus.php?CLEF=' + CLEF + '&secteur=' + secteur + '&langue_site=uk';

        if (!$('resultat_VPcriteres_' + ID_div).innerHTML) {
                var myAjax = new Ajax.Request(
                        url,
                        {
                                method: 'post',
                                onSuccess: function (xhr) {

                                        $('resultat_VPcriteres_' + ID_div).show();
                                        $('resultat_VPcriteres_' + ID_div).innerHTML = xhr.responseText;

                                }

                        });
        }
}
/* FIN GESTION CRITERES */


function verifierma() {
        var nberreurs = 0, erreurs = '';

        if ((document.catt.CATEGORIE.value == "") && (document.catt.style.value == "") && (document.catt.instrumentation.value == "") && (document.catt.search.value == "") && (document.catt.editeur.value == "")) {

                erreurs += 'Please select at least one of the three fields\n';
                nberreurs += 1;
        }

        if (nberreurs == 1) {
                alert('Please correct this error :\n' + erreurs);
                return false;
        }
        if (nberreurs > 1) {
                alert('Please correct these ' + nberreurs + ' errors :\n' + erreurs);
                return false;
        }
        return true;
}



function effacertout() {

        document.catt.style.value = '';
        document.catt.CATEGORIE.value = '';
        document.catt.instrumentation.value = '';
        document.catt.editeur.value = '';
        document.catt.niveau.value = '';
        document.catt.medias.value = '';
        document.catt.autres.value = '';
        document.catt.langue.value = '';
        document.catt.vendeur.value = '';
        document.catt.exact.checked = false;

        //return false;
}

function effacerinstru() {
        document.catt.instrumentation.value = '';
        //return false;
}


function verifier6mb() {
        var nberreurs = 0, erreurs = '';

        if (document.searchmb.search.value == "") {
                erreurs += 'Please entered keywords\n';
                nberreurs += 1;
        }
        if (document.searchmb.search.value.length < 2) {
                erreurs += '2 characters minimum\n';
                nberreurs += 1;
        }

        if (nberreurs == 1) {
                alert('Please correct this error :\n' + erreurs);
                return false;
        }
        if (nberreurs > 1) {
                alert('Please correct these ' + nberreurs + ' errors :\n' + erreurs);
                return false;
        }
        return true;
}

function verifier6mr() {
        var nberreurs = 0, erreurs = '';

        if (document.searchmr.search.value == "") {
                erreurs += 'Please entered keywords\n';
                nberreurs += 1;
        }
        if (document.searchmr.search.value.length < 2) {
                erreurs += '2 characters minimum\n';
                nberreurs += 1;
        }

        if (nberreurs == 1) {
                alert('Please correct this error :\n' + erreurs);
                return false;
        }
        if (nberreurs > 1) {
                alert('Please correct these ' + nberreurs + ' errors :\n' + erreurs);
                return false;
        }
        return true;
}


function autocomplete_pseudo(data, res_input) {
        //      alert(data + 'data' + $(res_in²put).value.length);
        var seuil = 0;

        a = data.split('@');

        if (data.length > 0) {
                if (data.length > $(res_input).value.length) seuil = $(res_input).value.length;
                else
                        seuil = data.length;
        }
        else {
                seuil = $(res_input).value.length;
        }
        if ($(res_input) && data.substr(0, seuil) == $(res_input).value.substr(0, seuil)) {
                if (a[0].length < 21 && $(res_input).value != a[0]) {
                        $(res_input).value = a[0];
                        verifPseudo2($(res_input).value, 'res_pseudo');
                }
        }

}

// script ANTI ADBLOCK

adblockblock = function () {
        if (window.addEventListener) {
                window.addEventListener('load', this.bind(this.initialize), false);
        } else if (window.attachEvent) {
                window.attachEvent('onload', this.bind(this.initialize));
        }
};

adblockblock.prototype = {

        initialize: function () {
                this.interval = setInterval(this.bind(this.test), 1000);
                this.test();
        },

        test: function () {

                var element = document.getElementById('adblocktest');

                /* On test si l'element a été supprimé par le bloqueur
                * Maxthon?, Konqueror
                */
                if (!element) {
                        this.logger('Element image non trouvé');
                        return this.block();
                }

                /* On test si l'image n'a tout pas été chargée dutout
                * Adblock, /etc/hosts, proxies, etc
                * Gecko: element.complete==true, même si image non trouvée / mauvaise image et onerror||onload appellée
                * IE: element.complete==false quand image non trouvée.
                */
                if (element.complete && !element.imgloaded) {
                        this.logger('Image non chargée');
                        return this.block();
                }

                /* On test si l'element a été caché par le bloqueur 
                * (display:none, ou visibility:hidden, ou position:absolute et top/left hors de la page)
                * Old adblock
                */
                var display = this.getStyle(element, 'display');
                var visibility = this.getStyle(element, 'visibility');
                var position = this.getStyle(element, 'position');
                if (display != 'inline' || (visibility != 'visible' && visibility != 'inherit') || position != 'static') {
                        this.logger('Image cachée: display=' + display + ' visibility=' + visibility + ' position=' + position);
                        return this.block();
                }

                /* On test si l'image a été remplacée
                * Pour une image non chargée, naturalWidth/Height doit être indéfini ou 0
                */
                if ((element.naturalWidth && element.naturalWidth > 0) || (element.naturalHeight && element.naturalHeight > 0)) {
                        this.logger('Image remplacée');
                        return this.block();
                }
                /* Pour Konqueror
                */
                if (element.width && element.width == 64) {
                        this.logger('Image remplacée (Konqueror)');
                        return this.block();
                }
        },

        getStyle: function (element, key) {
                if (document.defaultView && document.defaultView.getComputedStyle) {
                        return document.defaultView.getComputedStyle(element, '').getPropertyValue(key);
                } else {
                        return element.currentStyle[key];
                }
        },

        block: function (blockMethod) {
                // Ne pas supprimer cette ligne
                if (this.interval) clearInterval(this.interval);

                // Mettez ce que vous voulez ici

                // alert('Adblock activé ! ');
                if (document.getElementById('blockstatus2')) {
                        var status_div2 = document.getElementById('blockstatus2');
                        //  document.getElementById('blockstatus2');
                        status_div2.innerHTML = "<center><form name=\"form_m_adblock\" method=\"post\" action=\"#\"><div style=\"display:block;position:relative;\"><div class=\"rouge\" style=\"display:block;text-align:middle;width:100%;padding:0;margin:0;spacing:0;z-index:1000\"><div style=\"position:absolute;right:100px\"><img src='https://img.free-scores.com/IMAGES/adb-arrow.png'></div><font size=4 face=verdana><img src='https://img.free-scores.com/IMAGES/noabp.png' width=250><br>It appears that you are using an ad blocker!</font><br><font size=3 face=arial color='#000000'>Free-scores is financed with advertising and share these incomes with hundreds of members composers on this site.<br>Thank you kindly <a href=\"exception_message_adblock_uk.php\" id=\"thumb3\" onClick=\"return hs.htmlExpand(this,  { objectType: \'iframe\', anchor: \'top right\', width: 850, height: 730, anchor: \'left\',align: \'center\'}  )\">add free-scores.com except</a> in your ad blocker.<font><br><br><center><font class=vert><input name=\"message_adblock_off\" type=\"checkbox\" value=\"1\" id=\"message_adblock_off\" onchange=\"window.document.form_m_adblock.submit()\"/> <label for=\"message_adblock_off\">I UNDERSTAND <font class=d>(close this message without acting)</font> </label><a href=\"https://www.free-scores.com/pleasedonate.php\" class=jt><img src=\"https://img.free-scores.com/IMAGES/donate-tree.jpg\" height=45 border=0>Donate</a></center></div></form></center>";
                        status_div2.style.color = '#c00';
                }

                //  partitions_telecharger.php

                if (document.getElementById('blockstatus_r')) {
                        var status_pub1 = document.getElementById('remplace_pub');
                        status_pub1.innerHTML = "<a href='//www.free-scores.com/boutique/redirect-eur.php?clef=145&offre=1' class='bouton_submit_public7'><img src='https://img.free-scores.com/IMAGES/promo/music-gift-ideas.jpg' border=0 width=750px></a>";
                }



                //  partitions-libres.php
                if (document.getElementById('blockstatus_paloma')) {
                        var status_pub3 = document.getElementById('remplace_pub_paloma');
                        status_pub3.innerHTML = "<div id='ouvrir_paloma' style='position:relative;'><a href='//www.free-scores.com/boutique/redirect-eur.php?clef=187&offre=1' target=_blank class='bouton_submit_public7'><img src='https://img.free-scores.com/IMAGES/promo/VDA.jpg' border=0 width=759px></div></a></div>";
                }
                // <a href='//www.free-scores.com/boutique/redirect-eur.php?clef=187&offre=1' target=_blank class='bouton_submit_public7'><img src='https://img.free-scores.com/IMAGES/promo/VDA.jpg' border=0 width=759px></div></a>

                if (document.getElementById('blockstatus_rdeux')) {
                        var status_pub2 = document.getElementById('remplace_pub_deux');
                        status_pub2.innerHTML = "<a href='//www.free-scores.com/boutique/redirect-eur.php?clef=150&offre=1' class='bouton_submit_public7'><img src='https://img.free-scores.com/IMAGES/promo/cases.jpg' border=0 width=750px></a>";
                }


        },

        bind: function (func) {
                var obj = this;
                return function () {
                        return func.apply(obj, []);
                };
        },

        logger: function (str) {
                if (typeof console == 'undefined') return;
                if (typeof console.log == 'undefined') return;
                console.log(str);
        }
};

/*Décommenter pour débugger (ou utiliser firebug)
if (typeof console == 'undefined') {
   console={};
   console.log = function(str) {
      var el = document.createElement('div');
      el.appendChild(document.createTextNode(str));
      document.body.appendChild(el);
   };
}
*/

new adblockblock();
// FIN ANTI ADBLOCK


// DEBUT ECHERCHE DANS COMPOSITEUR


function gestionClic_auto_recherche_public_opus(search_auto_public_opus, clef_compositeur, compositeur, pont_vp) {
        var compteurRequetesEnCours = 0;


        var url2 = '//www.free-scores.com/ajax/auto_recherche_public_opus.php';
        Params = new Hash();

        Params.set('langue_site', 'en');
        Params.set('clef_compositeur', clef_compositeur);
        Params.set('compositeur', compositeur);
        Params.set('search_auto_public_opus', search_auto_public_opus);
        Params.set('pont_vp', pont_vp);

        var myAjax = new Ajax.Request(
                url2,
                {
                        method: 'post',
                        evalScripts: false,
                        parameters: Params,
                        onLoading: function (xhr2) { // Apr&egrave;s appel m&eacute;thode open
                                // (d&eacute;but de la requ&ecirc;te Ajax)
                                Element.show('chargement_auto_recherche_public_opus');
                                compteurRequetesEnCours++;


                        },
                        onSuccess: function (xhr2) {

                                $('resultat_auto_recherche_public_opus').innerHTML = xhr2.responseText;


                        },


                        onComplete: function () { // Toujours appel&eacute; en fin de requ&ecirc;te
                                if (!--compteurRequetesEnCours) {

                                        Element.hide('chargement_auto_recherche_public_opus');

                                }

                        }
                });
}

// FIN RECHERCHE COMPOSITEUR

// DEBUT GESTION DES SUIVIS
function gestionSuiveurs(statut, membre) {
        $('resultat_suiveurs').toggle();
        var compteurRequetesEnCours = 0;

        var url = '//www.free-scores.com/ajax/afficher_suivi.php';
        Params = new Hash();

        Params.set('langue_site', 'en');
        Params.set('statut', statut);
        Params.set('membre', membre);



        if (!$('resultat_suiveurs').innerHTML) {
                var myAjax = new Ajax.Request(
                        url,
                        {
                                method: 'post',
                                evalScripts: false,
                                parameters: Params,
                                onLoading: function (xhr) { // Apr&egrave;s appel m&eacute;thode open
                                        // (d&eacute;but de la requ&ecirc;te Ajax)
                                        Element.show('chargement_s');
                                        compteurRequetesEnCours++;


                                },
                                onSuccess: function (xhr) {
                                        $('resultat_suiveurs').show();
                                        $('resultat_suiveurs').innerHTML = xhr.responseText;



                                },


                                onComplete: function () { // Toujours appel&eacute; en fin de requ&ecirc;te
                                        if (!--compteurRequetesEnCours) {

                                                Element.hide('chargement_s');

                                        }

                                }


                        });
        }
}
// FIN GESTION SUIVI

// DEBUT INSTRUMENTATION PAR COMPOSITEURS
function gestionInstrumentation(statut, membre, COMPOSITEURID, mobile, url2) {
        $('resultat_instru').toggle();
        var compteurRequetesEnCours = 0;

        if ($('resultat_instru').visible()) {
                $('triangle_i').src = 'https://img.free-scores.com/IMAGES/triangle_utd.gif';
        }
        else {
                $('triangle_i').src = 'https://img.free-scores.com/IMAGES/triangle_up.gif';
        }

        // var url2 = '//www.free-scores.com/ajax/afficher_instrumentation_compositeur.php';
        Params = new Hash();
        Params.set('langue_site', 'en');
        Params.set('statut', statut);
        Params.set('membre', membre);
        Params.set('COMPOSITEURID', COMPOSITEURID);
        Params.set('mobile', mobile);

        if (!$('resultat_instru').innerHTML) {
                var myAjax = new Ajax.Request(
                        url2,
                        {
                                method: 'post',
                                evalScripts: false,
                                parameters: Params,
                                onLoading: function (xhr) { // Apr&egrave;s appel m&eacute;thode open
                                        // (d&eacute;but de la requ&ecirc;te Ajax)
                                        Element.show('chargement_ii');
                                        compteurRequetesEnCours++;


                                },
                                onSuccess: function (xhr) {
                                        $('resultat_instru').show();
                                        $('resultat_instru').innerHTML = xhr.responseText;



                                },


                                onComplete: function () { // Toujours appel&eacute; en fin de requ&ecirc;te
                                        if (!--compteurRequetesEnCours) {

                                                Element.hide('chargement_ii');

                                        }

                                }


                        });
        }
}
// FIN INSTRUMENTATION PAR COMPOSITEURS

/*
var ResizingTextArea = Class.create();

ResizingTextArea.prototype = {
    defaultRows: 1,

    initialize: function(field)
    {
        this.defaultRows = Math.max(field.rows, 1);
        this.resizeNeeded = this.resizeNeeded.bindAsEventListener(this);
        Event.observe(field, "click", this.resizeNeeded);
        Event.observe(field, "keyup", this.resizeNeeded);
    },

    resizeNeeded: function(event)
    {
        var t = Event.element(event);
        var lines = t.value.split('\n');
        var newRows = lines.length + 1;
        var oldRows = t.rows;
        for (var i = 0; i < lines.length; i++)
        {
            var line = lines[i];
            if (line.length >= t.cols) newRows += Math.floor(line.length / t.cols);
        }
        if (newRows > t.rows) t.rows = newRows;
        if (newRows < t.rows) t.rows = Math.max(this.defaultRows, newRows);
    }
}
*/

// INFO COOKIE IMPOSE PAR L'UE
function createCookie(name, value, days) {
        if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
        }
        else var expires = "";
        document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
}

function eraseCookie(name) {
        createCookie(name, "", -1);
}
// FIN INFO COOKIE IMPOSE PAR L'UE


/* GESTION PDF VIEWER */


function gestionVPDF_(VPDF_div, CLEF, repvpdf, PDFSUP) {
        // var vpdf_id;

        for (i = 1; i <= (Total_clapet); i++) {
                if ($('resultat_vpdf_' + i) && i != VPDF_div) {
                        $('resultat_vpdf_' + i).innerHTML = '';
                        $('resultat_vpdf_' + i).hide();
                }
        }


        $('resultat_vpdf_' + VPDF_div).toggle();
        var compteurRequetesEnCours = 0;

        var w = window, d = document, e = d.documentElement, g = d.getElementsByTagName('body')[0], x = w.innerWidth || e.clientWidth || g.clientWidth, y = w.innerHeight || e.clientHeight || g.clientHeight;

        Params = new Hash();
        if (document.location.host == 'm.free-scores.com') {
                var url = '//m.free-scores.com/ajax/pdf_viewer.php';
                Params.set('mobile', 1);
                Params.set('Widthmobile', x);
                Params.set('Heightmobile', y);

                //      alert(x + ' × ' + y);
        }
        else {
                var url = '//www.free-scores.com/ajax/pdf_viewer.php';
                Params.set('mobile', 0);
        }

        Params.set('langue_site', 'en');
        Params.set('partition', CLEF);
        Params.set('repvpdf', repvpdf);
        Params.set('PDFSUP', PDFSUP);

        if (!$('resultat_vpdf_' + VPDF_div).innerHTML) {
                var myAjax = new Ajax.Request(
                        url,
                        {
                                method: 'post',
                                evalScripts: false,
                                parameters: Params,
                                onSuccess: function (xhr) {

                                        $('resultat_vpdf_' + VPDF_div).show();
                                        $('resultat_vpdf_' + VPDF_div).innerHTML = xhr.responseText;

                                }

                        });
        }
}
/* FIN PDF VIEWER */
/* ICONES VECTORIELLES */
function icone_vectorielle(str, style, stroke, fill, strokeheight) {
        Path = new Hash();
        Viewbox = new Hash();

        var retour = '';
        Path.set('playlistplay', 'M19 9H2v2h17V9zm0-4H2v2h17V5zM2 15h13v-2H2v2zm15-2v6l5-3-5-3z');
        Viewbox.set('playlistplay', '0 0 24 24');
        Path.set('terre', 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z');
        Viewbox.set('terre', '0 0 24 24');
        Path.set('cadenasouvert', 'M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z');
        Viewbox.set('cadenasouvert', '0 0 24 24');
        Path.set('cadenasferme', 'M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z');
        Viewbox.set('cadenasferme', '0 0 24 24');
        Path.set('coeur', 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z');
        Viewbox.set('coeur', '0 0 24 24');
        Path.set('playlist', 'M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z');
        Viewbox.set('playlist', '0 0 24 24');
        Path.set('musvideo', 'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3z');
        Viewbox.set('musvideo', '0 0 24 24');
        Path.set('terre', 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z');
        Viewbox.set('terre', '0 0 24 24');
        Path.set('cadenasouvert', 'M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z');
        Viewbox.set('cadenasouvert', '0 0 24 24');
        Path.set('cadenasferme', 'M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z');
        Viewbox.set('cadenasferme', '0 0 24 24');
Viewbox.set('followminus', '0 0 24 24');
Path.set('followminus', 'M14 14.252V16.3414C13.3744 16.1203 12.7013 16 12 16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM19 17.5858L21.1213 15.4645L22.5355 16.8787L20.4142 19L22.5355 21.1213L21.1213 22.5355L19 20.4142L16.8787 22.5355L15.4645 21.1213L17.5858 19L15.4645 16.8787L16.8787 15.4645L19 17.5858Z');


Viewbox.set('followplus', '0 0 24 24');
Path.set('followplus', 'M14 14.252V16.3414C13.3744 16.1203 12.7013 16 12 16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM17.7929 19.9142L21.3284 16.3787L22.7426 17.7929L17.7929 22.7426L14.2574 19.2071L15.6716 17.7929L17.7929 19.9142Z');

        if (Path.get(str)) {
                retour = "<svg xmlns='https://www.w3.org/2000/svg' style='" + style + "' viewBox='" + Viewbox.get(str) + "'>";
                retour += "<path d='" + Path.get(str) + "' stroke-width='" + strokeheight + "' stroke='" + stroke + "' fill='" + fill + "'>";
                retour += "</path></svg>";
        }
        else {
                console.log(str + " en icone_vectorielle n'existe pas");
        }

        return retour;
}

/* BOUTON STOP PLAYER */
function Player_icones_reset() {
        var comptePlay = document.getElementsByClassName('Play marque_transp_inv').length;
        if (comptePlay > 0) {
                for (var i = 0; i < comptePlay; i++) {
                        //	console.log(document.getElementsByClassName('Play marque_transp_inv')[i].id);
                        $(document.getElementsByClassName('Play marque_transp_inv')[i].id).show();
                }
        }

        var comptePause = document.getElementsByClassName('Pause marque_transp_inv').length;
        if (comptePause > 0) {
                for (var j = 0; j < comptePause; j++) {
                        //	console.log(document.getElementsByClassName('Pause marque_transp_inv')[j].id);
                        $(document.getElementsByClassName('Pause marque_transp_inv')[j].id).hide();
                }
        }


}

document.addEventListener('DOMContentLoaded', function() {
        const menu = document.getElementById('menu');
        const sideDiv = document.querySelector('.side-div');
        const menuParent = document.getElementById('menuToggle').parentNode;
        const menuToggle = document.getElementById('menu-toggle');
        const menuOverlay = document.getElementById('menuOverlay');
    menu.style.display = 'block';         
        function moveMenu() {
            if (window.innerWidth >= 1300) {
                // Version desktop : déplacer le menu dans side-div
                if (menu.parentNode !== sideDiv) {
                    // Reset des styles avant le déplacement
                    menu.style.transition = 'none';
                    menu.style.transform = 'translateX(-30px)';
                    menu.style.opacity = '0';
	
                    
                    // Déplacer le menu
                    sideDiv.appendChild(menu);
                    
                    // Forcer un reflow
                    menu.offsetHeight;
                    
                    // Réactiver les transitions et appliquer les styles finaux
                    menu.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
                    menu.style.position = 'static';
                    menu.style.zIndex = 'auto';
                    
                    // Ajouter un petit délai avant l'animation
                    setTimeout(() => {
                        sideDiv.classList.add('active');
                        menu.style.transform = 'translateX(0)';
                        menu.style.opacity = '1';
                    }, 50);
                    
                    menuOverlay.style.display = 'none';
                }
            } else {
                // Version mobile : remettre le menu après le menuToggle
                if (menu.parentNode !== menuParent) {
                    sideDiv.classList.remove('active');
                    menuParent.appendChild(menu);
                    // Remettre les styles pour mobile
                    menu.style.opacity = '1';
                    menu.style.position = 'absolute';
                    menu.style.zIndex = '100';

                    menu.style.transition = 'transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0)';
                }
                // Réinitialiser la transformation selon l'état du checkbox
                menu.style.transform = menuToggle.checked ? 'none' : 'translate(-100%, 0)';
            }
        }
        
        // Gérer le clic sur le menu hamburger
        menuToggle.addEventListener('change', function() {
            if (window.innerWidth < 1300) {
                menu.style.transform = this.checked ? 'none' : 'translate(-100%, 0)';
                menuOverlay.style.display = this.checked ? 'block' : 'none';
                // S'assurer que le menu reste au-dessus de l'overlay
                menu.style.zIndex = '100';
                menuOverlay.style.zIndex = '90';
            }
        });
        
        // Gérer le clic sur l'overlay pour fermer le menu
        menuOverlay.addEventListener('click', function() {
            menuToggle.checked = false;
            menu.style.transform = 'translate(-100%, 0)';
            menuOverlay.style.display = 'none';
        });
        
        // Gérer la position initiale
        moveMenu();
        
        // Utiliser un debounce pour éviter trop d'appels lors du redimensionnement
        let resizeTimeout;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(moveMenu, 100);
        });
    });

