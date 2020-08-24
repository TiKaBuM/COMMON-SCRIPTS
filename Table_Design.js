// ==UserScript==
// @name               ## TABLE DESIGNER ##
// @namespace          https://pastebin.com/raw/L7VMaxnt
// @icon               https://i.imgur.com/HFDXavN.png
//⭐ESCOLHA SEU ÍCONE  https://pastebin.com/raw/wpcDVCdE
// @author             TiKa and Tsalkapone
// @include            https://br*.tribalwars.com.br/*&screen=info_ally*
// @include            https://br*.tribalwars.com.br/*&screen=info_member*
// @include            https://br*.tribalwars.com.br/*&screen=info_player*
// @version            4.4 (1/07/2019)
// @updateURL          https://pastebin.com/raw/L7VMaxnt
// @downloadURL        https://pastebin.com/raw/L7VMaxnt
// @description        R2-D2 como o Melhor Robô-Suporte te Oferece Praticidade em qualquer Missão!
// @changelog          ⌛ PARA MOSTRAR/OCULTAR CLIQUE NA SETA AO LADO DO NÚMERO "15" NA LINHA ABAIXO! ⌛
/*
1.0 - Script do Tsalkapone
2.0 - Traduzido Pt/BR
2.1 - Bugs consertados
2.2 - Tabela Otimizada
2.3 - Códigos de Cor Removidos
2.4 - Códigos Desnecessários de Tabela Removidos
2.5 - Adicionado R2-D2
2.6 - Adicionado Emblema da STRIKE!
3.0 - Script Apelidado de ## TABLE DESIGNER ##
3.1 - Adicionada Descrição
3.2 - Códigos para Atualização Automática Incluídos!
3.3 - Script Otimizado!
3.4 - Corrgido Bug que Impedia o Funcionamento do Script na Página do Jogador
3.5 - Corrigidos Erros de Tradução
3.6 - Adicionada Descrição
3.7 - Códigos para Atualização Automática Incluídos!
3.8 - Corrigido Bug Nas Células de Exibição da Opção "Adicionar Colunas"
3.9 - Changelog corrigido
4.0 - Script Otimizado!
4.1 - Script Completamente Traduzido Pt/Bt
4.2 - Esquema de Cores Atualizado!
4.3 - Códigos de Formatação de Tabela Otimizados!
4.4 - Tabela de Tribos Otimizada!
*/
// ==/UserScript==


var Tsalactive = location.href.indexOf('info_ally') > -1;
var Tsalactive1 = location.href.indexOf('info_player') > -1;
var Tsalactive2 = location.href.indexOf('info_member') > -1;
if (!Tsalactive && !Tsalactive1 && !Tsalactive2) {
    var contact_url = "https://forum.tribalwars.com.br/index.php?members/tikabum.58522/";
    var content = '<div style=max-width:1000px;>' +
        '<h2 class="popup_box_header"><center><u><font color="darkred">## Estatísticas de Jogadores e Tribos ##</font></u></center></h2>' +
        '<hr><p><center><font color=maroon><b>Este Script será ativado no Perfil de um Jogador, de uma Tribo ou na Lista de Membros da Tribo.</b></font></center></p>' +
        '<p><center><font color=maroon><b>Você gostaria de ser Redirecionado aos Rankings Mundiais?</b></font></center></p>' +
        '<br><br><center><input type="button" class="btn evt-confirm-btn btn-confirm-yes" id="go_man1" value="Vá para o Ranking de Jogadores">&emsp;' +
        '<input type="button" class="btn evt-confirm-btn btn-confirm-yes" id="go_man2" value="Vá para o Ranking de Tribos">&emsp;' +
        '<input type="button" class="btn evt-cancel-btn btn-confirm-no" id="close_this" value="Não"></center>' +
        '<br><br><hr><center><img class="tooltip-delayed" title="<font color=darkred>## Estatísticas de Jogadores e Tribos ##</font>" src="https://i.imgur.com/RrAg5YW.gif" style="cursor:help; position: relative"></center><br><center><p>Sinta-se livre para Relatar qualquer BUG do Script ou Enviar Sugestões de Melhoria. <a href="' + contact_url + '" title="Perfil FTW" target="_blank">⚡ TiKa ⚡</a></p></center>' +
        '</div>';
    Dialog.show('tribe_player_stats_intro', content);
    $("#go_man1").click(function() {
        window.location.assign(game_data.link_base_pure + "ranking&mode=player&rank=1");
    });
    $("#go_man2").click(function() {
        window.location.assign(game_data.link_base_pure + "ranking&mode=ally&rank=1");
    });
    $("#close_this").click(function() {
        var close_this = document.getElementsByClassName('popup_box_close');
        close_this[0].click();
    });
} else {
    var tsaldiamorfwsi = '<link rel="stylesheet" type="text/css" href="https://dl.dropboxusercontent.com/s/r3ov8brxa6oxoal/Tsalkapone.Advanced_Coords_Extractor.css" />';
    var tsalbody = '<style>';
    tsalbody += '.tsalkembed1{ font-family: "Comic Sans MS", cursive, sans-serif;font-style:italic;color: purple;-webkit-animation: mymove1 3s infinite; -moz-animation: mymove1 3s infinite; animation: mymove1 6s infinite;font-weight: bold;}';
    tsalbody += '@-webkit-keyframes mymove1 {50% {color: red;}} @-moz-keyframes mymove1 {50% {color: red;}} @keyframes mymove1 {50% {color:red;}';
    tsalbody += '</style>';
    var tsalscript = '<script type="text/javascript">function tsal_align () {tsalkapone();}';
    tsalscript += 'function tsal_select() { var x=document.getElementById("tsal_plithos").value; var y1 = document.getElementById("sel1"); var y2 = document.getElementById("sel2"); var y3 = document.getElementById("sel3");';
    tsalscript += 'if (x=="0") {y1.style.display=""; y2.style.display="none"; y3.style.display="none";} if (x=="1") {y1.style.display="none"; y2.style.display=""; y3.style.display="none";} if (x=="2") {y1.style.display="none"; y2.style.display="none"; y3.style.display="";} }';
    tsalscript += 'function tsal_select1() { var x=document.getElementById("tsal_plithos1").value; var y1 = document.getElementById("sel4"); var y2 = document.getElementById("sel5"); var y3 = document.getElementById("sel6");';
    tsalscript += 'if (x=="0") {y1.style.display=""; y2.style.display="none"; y3.style.display="none";} if (x=="1") {y1.style.display="none"; y2.style.display=""; y3.style.display="none";} if (x=="2") {y1.style.display="none"; y2.style.display="none"; y3.style.display="";} }';
    tsalscript += 'function tsal_check(){var x1 = document.getElementById("tsal_act1"); var x2= document.getElementById("tsal_act2"); if (x1.checked==true) {x2.disabled=true;} else {x2.disabled=false;} if (x2.checked==true) {x1.disabled=true;} else {x1.disabled=false;}}';
    tsalscript += 'function tsal_extra(){var x = document.getElementById("plan7"); var y=document.getElementById("tsal_extra"); var z=document.getElementById("tsal_extra1");if (x.checked){y.style.display="";z.style.display="none";} else {y.style.display="none";z.style.display="";}}';
    tsalscript += 'function tsal_disable(){var x = document.getElementById("plan4"); var y=document.getElementById("plan9"); var z=document.getElementById("plan10");if (x.checked){y.disabled=false;z.disabled=false;} else {y.disabled=true;z.disabled=true;}}';
    tsalscript += '</script>';

    $("head").append(tsaldiamorfwsi + tsalbody + tsalscript);


    if (Tsalactive1) {

        var pageurltsal = window.location.href;
        var pageurl1 = pageurltsal.split("=");
        var pageurl2;
        var pageid;
        if (pageurl1[3] !== undefined) {
            pageurl2 = pageurl1[3].split("#");
            pageid = pageurl2[0];
        } else {
            pageid = game_data.player.id;
        }
        var pageurltsal1 = pageurltsal.split("//");
        var pageurltsal2 = pageurltsal1[1].split("/");
        var pageurltsal3 = pageurltsal1[1].split(".");
        var pageurltsal5 = pageurltsal3[2].split("/");
        var pageurltsal4 = pageurltsal3[1] + "." + pageurltsal5[0];
        var tsal_market = game_data.market;
        var main_url = pageurltsal1[0] + "//" + pageurltsal2[0] + game_data.link_base_pure;
        var urlPrefix = "";
        if (game_data.market == "en") {
            urlPrefix = "";
        } else {
            urlPrefix = '.' + game_data.market;
        }

        var graphs = '<table id="tsalkaponemagic" width="100%" class="vis"><tbody><tr><th colspan="2"><center><font color="black"><b>Gráficos Disponíveis</b></font></center></th></tr>';
        graphs += '<tr><td><center><div id="spoiler"><input type="button" class="btn tsalbutton" value="⭐ GRÁFICO GERAL ⭐" onclick="toggle_spoiler(this)"><div><span style="display:none">';
        graphs += '<img src="http://' + pageurltsal3[0] + '.tribalwarsmap.com/' + game_data.market + '/graph/player/' + pageid + '" title="TribalWarsMap.com"></span></div></div></center></td></tr><tr><td><center><div id="spoiler">';
        graphs += '<input type="button" class="btn tsalbutton" value="Gráfico de ODA" onclick="toggle_spoiler(this)"><div>';
        graphs += '<span style="display:none"><img src="http://' + pageurltsal3[0] + '.tribalwarsmap.com/' + game_data.market + '/graph/oda_player/' + pageid + '" title="TribalWarsMap.com"></span></div></div></center></td></tr><tr><td><center><div id="spoiler">';
        graphs += '<input type="button" class="btn tsalbutton" value="Gráfico de ODD" onclick="toggle_spoiler(this)"><div><span style="display:none">';
        graphs += '<img src="http://' + pageurltsal3[0] + '.tribalwarsmap.com/' + game_data.market + '/graph/odd_player/' + pageid + '" title="TribalWarsMap.com"></span></div></td></tr><tr><td><center>';
        graphs += '<input type="button" class="btn tsalbutton" value="Gráfico de ODS" onclick="toggle_spoiler(this)"><div><span style="display:none">';
        graphs += '<img src="http://' + pageurltsal3[0] + '.tribalwarsmap.com/' + game_data.market + '/graph/ods_player/' + pageid + '" title="TribalWarsMap.com"></span></div></div></td></tr>';
        graphs += '<tr><th><center><font color="black"><b>Estatísticas Disponíveis</b></font></center></th></tr>';
        graphs += '<tr><td><a href="http://www' + urlPrefix + '.twstats.com/' + pageurltsal3[0] + '/index.php?page=player&id=' + pageid + '&utm_source=en&utm_medium=player&utm_campaign=dsref" target="_blank"><img src="graphic/welcome/ext.png"> Ir para o Perfil do TW~Stats</a></td></tr>';
        graphs += '<tr><td><a href="http://www' + urlPrefix + '.twstats.com/' + pageurltsal3[0] + '/index.php?page=player&id=' + pageid + '&mode=conquer_periods" target="_blank"><img src="graphic/welcome/ext.png"> Períodos de Conquistas</a></td></tr>';
        graphs += '<tr><td><a href="http://www' + urlPrefix + '.twstats.com/' + pageurltsal3[0] + '/index.php?page=player&id=' + pageid + '&mode=history" target="_blank"><img src="graphic/welcome/ext.png"> Histórico de Pontuação e OD</a></td></tr>';
        graphs += '<tr><td><a href="http://www' + urlPrefix + '.twstats.com/' + pageurltsal3[0] + '/index.php?page=player&mode=conquers&id=' + pageid + '" target="_blank"><img src="graphic/welcome/ext.png"> Conquistas</a></td></tr>';
        graphs += '</tbody></table>';



        var villageTable = $("th:contains('Aldeias')").parent().parent();
        var playerTable = villageTable.parent().parent();
        var thePlayer1 = playerTable.find("th:first").text().replace(/\s+/, "");
        var thePlayer = thePlayer1.trim();
        var playerId;
        var Tsalactive3 = location.href.indexOf('id=') > -1;
        if (Tsalactive3) {
            playerId = document.URL.match(/id\=(\d+)/i)[1];
        } else {
            playerId = game_data.player.id;
        }
        var server = document.URL.match(/\/\/([a-z0-9]{1,5})\./i)[1];

        var theTribeTd = playerTable.find("td:contains('Tribo:')").next("td");

        var tribeId = 0;
        var theTribe = theTribeTd.html().match(/.*>(.*)<\/a>/i);
        if (theTribe) {
            theTribe = theTribe[1];
            tribeId = parseInt(theTribeTd.html().match(/id\=(\d+)/i)[1], 10);
        }
        var thePoints = playerTable.find("td:contains('Pontos:')").next("td").text();
        var OD = playerTable.find("td:contains('Oponentes derrotados:')").next("td").text();

        var lexpand = "Exibir todas outras";


        function tsalscripts() {

            var tsal = "";

            var tsalk = document.getElementById('taCoords').value;
            var tsal3in = "[spoiler=⚡ Script de Fakes Nº1 - Coordenada Aleatória]\nAperte [b]T[/b] no seu Teclado (Após ativar o script) para saber mais sobre as Variáveis e Configurações\n\n[spoiler=⚫ Código do Script][code]javascript:var Tsalkapone_coords='" + tsalk + "';var Tsalkapone_scouts=5;var Tsalkapone_units_order={ram:1,catapult:1,sword:1,spear:1,axe:1,archer:1,light:1,marcher:1,heavy:1};$.getScript('https://dl.dropboxusercontent.com/s/n0945rwkzzqa4pl/Tsalkapone.Fake_Script_No1_ek.js');void 0;[/code][/spoiler][/spoiler]";
            tsal3in += "\n[spoiler=⚡ Script de Fakes Nº2 - Coordenada Consecutiva (Contínua)]\nAperte [b]T[/b] no seu Teclado (Após ativar o script) para saber mais sobre as Variáveis e Configurações\n\n[spoiler=⚫ Código do Script][code]javascript:var Tsalkapone_scouts=5;var Tsalkapone_units_order={ram:1,catapult:1,sword:1,spear:1,axe:1,archer:1,light:1,marcher:1,heavy:1};var Tsalkapone_coords='" + tsalk + "';var config={Tsalkapone_target:'Tsalkapone',Tsalkapone_repeat:1,Tsalkapone_cookieID:'fake'};$.getScript('https://dl.dropboxusercontent.com/s/jyufjpwbdo8h0id/Tsalkapone.Fake_Script_No2_ek.js');void 0;[/code][/spoiler][/spoiler]";
            tsal3in += "\n[spoiler=⚡ Script de Fakes Nº3 - Coordenada Aleatória, Aríete e Catapulta Apenas]\nAperte [b]T[/b] no seu Teclado (Após ativar o script) para saber mais sobre as Variáveis e Configurações\n\n[spoiler=⚫ Código do Script][code]javascript:var Tsalkapone_coords='" + tsalk + "';var Tsalkapone_scouts=5;var Tsalkapone_units_order={ram:1,catapult:1,sword:0,spear:0,axe:0,archer:0,light:0,marcher:0,heavy:0};$.getScript('https://dl.dropboxusercontent.com/s/n0945rwkzzqa4pl/Tsalkapone.Fake_Script_No1_ek.js');void 0;[/code][/spoiler][/spoiler]";
            var tsal3 = "";
            tsal3 += tsal3in;


            tsal += "javascript:var Tsalkapone_coords='" + tsalk + "';var Tsalkapone_scouts=1;var Tsalkapone_units_order={ram:1,catapult:1,sword:1,spear:1,axe:1,archer:1,light:1,marcher:1,heavy:1};$.getScript('https://dl.dropboxusercontent.com/s/n0945rwkzzqa4pl/Tsalkapone.Fake_Script_No1_ek.js');void 0;";

            var tsal2 = "";
            tsal2 += "javascript:var Tsalkapone_scouts=1;var Tsalkapone_units_order={ram:1,catapult:1,sword:1,spear:1,axe:1,archer:1,light:1,marcher:1,heavy:1};var Tsalkapone_coords='" + tsalk + "';var config={Tsalkapone_target:'Tsalkapone',Tsalkapone_repeat:1,Tsalkapone_cookieID:'fake'};$.getScript('https://dl.dropboxusercontent.com/s/jyufjpwbdo8h0id/Tsalkapone.Fake_Script_No2_ek.js');void 0;";

            var tsal4 = "";
            tsal4 += "javascript:var Tsalkapone_coords='" + tsalk + "';var snob=0;var spy=100; var ram=1e6;var catapult=0; var light=1e6; var heavy=0; var marcher=1e6;var axe=1e6;var spear=0; var archer=0; var sword=0; var Tsalkapone_script_title='Nuke';var Tsalkapone_cookieID='nuke1';$.getScript('https://dl.dropboxusercontent.com/s/uqon51aliz193wm/Tsalkapone.Nuke_Support_script_ek.js');void 0;";


            var content = '<div style=max-width:1500px;>' +
                '<h2 class="popup_box_header"><center><font color="red">⭐ SCRIPTS ESSENCIAIS ⭐</font></center></h2>' +
                '<br><font color="black"><b>As coordenada usadas como Alvo nos Scripts a seguir serão mostradas na Área de Extração de Coordenadas</b></font>\n' +
                '<hr><font color="maroon"><b>⚡ Script de Fakes Νο1</b></font><br><textarea onFocus="this.select();" cols=100 rows=4>' + tsal + '</textarea><br>' +
                '<hr><font color="maroon"><b>⚡ Script de Fakes Νο2</b></font><br><textarea onFocus="this.select();" cols=100 rows=4>' + tsal2 + '</textarea><br>' +
                '<hr><font color="maroon"><b>⚡ Script de NUKE (Selecionar Tropas)</b></font><br><textarea onFocus="this.select();" cols=100 rows=4>' + tsal4 + '</textarea><br>' +
                '<hr><font color="maroon"><b>⚡ Scripts para Mensagens ou Postagens em Fórum</b></font><br><textarea onFocus="this.select();" cols=100 rows=4>' + tsal3 + '</textarea><br>' +
                '<hr><center><img style="cursor:help" class="tooltip-delayed" title="<font color=darkred>## STRIKE TEAM ##</font>" src="https://i.imgur.com/RrAg5YW.gif"></center><p><center>Sinta-se livre para Relatar qualquer BUG do Script ou Enviar Sugestões de Melhoria. <a href="' + contact_url + '" target="_blank">⚡ TiKa ⚡</a></center></p>' +
                '</div>';

            Dialog.show('tsalkapone_syntetagmenes', content);
        }


        var strCoords;
        var coords = new Array();
        var kont = new Array();

        function gui() {
            var tds = document.getElementsByTagName("TD");
            var K = new Array();
            for (var idx = 0; idx < 100; idx++) K[idx] = new Array();
            var C = new Array();
            var C1 = new Array();
            for (var idx = 0; idx < tds.length; idx++) {
                var xy = tds[idx].innerHTML;
                if (/^\d+\|\d+$/.test(xy)) {
                    C.push(xy);
                    C1.push(xy);
                    var xys = xy.split('|');
                    K[Math.floor(parseInt(xys[0]) / 100) + Math.floor(parseInt(xys[1]) / 100) * 10].push(xy);
                }
            }
            C = C.join(' ');
            C1 = C1.join('\n');


            var prefix = '<textarea cols=100 rows=4>javascript: var coords=\'';
            var postfix = '\';var Tsalkapone_ανιχνευτές=1; var Tsalkapone_πολιορκητικοί_κριοί=1; var Tsalkapone_καταπέλτες=1;$.getScript(\'https://media.innogamescdn.com/com_DS_GR/Scripts/Scripts_vol2/Tsalkapone. Fake με κριό ή καταπέλτη_εκ.js\');void 0;</textarea><br>';
            var S = '<b><a target=\'_blank\' title="Tsalkapone profile" href=\'https://forum.tribalwars.net/index.php?members/tsalkapone.114063/\'>Tsalkapone, GR Game Operator-Script Editor</a> <br><br><u> Fake scripts με κριό ή καταπέλτη για όλα τα χωριά και για χωριά ανά ήπειρο</u></b><hr><font color=black><b>Όλα τα χωριά του λογαριασμού:</b></font><br>' + prefix + C + postfix;
            for (var idx = 0; idx < 100; idx++)
                if (K[idx].length > 0) {
                    var Ks = K[idx].join(' ');
                    S += '<br><br><font color=black><b>Χωριά στη Κ' + idx + '</b></font>:<br>' + prefix + Ks + postfix;
                }


            function getTableColumnValues(col) {
                var columnValues = [];
                $('#villages_list').each(function() {
                    $('tr>td:nth-child(' + col + ')', $(this)).each(function() {
                        columnValues.push($(this).text());
                    });
                });
                return columnValues;
            }

            function getTableColumnValues1() {
                var columnValues = [];
                var allSpans = document.getElementsByClassName('village_anchor');
                for (var i = 0; i < allSpans.length; i++) {
                    columnValues.push(allSpans[i].getElementsByTagName('a')[0].href);
                }
                return columnValues;
            }

            var vals = getTableColumnValues(2);
            var vals2 = getTableColumnValues(3);
            var vals3 = getTableColumnValues1();
            var tsal_cols = [];
            var tsal_cols2 = [];


            for (var i = 0; i < vals.length; ++i) {
                if (vals[i].indexOf("|") > 0) {
                    tsal_cols.push(vals[i]);
                }
            }
            for (var i = 0; i < vals2.length; ++i) {
                tsal_cols2.push(vals2[i]);
            }


            var tsal_options = '<tr><th><center><b><font color="maroon">Descrição</font></b></center></th>';
            tsal_options += '<th><center><b><font color="maroon">Ativar</font></b></center></th>';
            tsal_options += '<th><center><b><font color="maroon">Cor do Título</font></b></center></th></tr>';
            tsal_options += '<tr><td>Adicionar Numeração</td><td><center><input id="tsal_num" type="checkbox"></center></td><td><center><input id="color1" type="color" value="#C50505"></center></td></tr>';
            tsal_options += '<tr><td>Adicionar [claim] nas Coordenadas</td><td><center><input id="tsal_claim" type="checkbox"></center></td><td><center><input id="color2" type="color" value="#4205C5"></center></td></tr>';
            tsal_options += '<tr><td>Adicionar Pontuação das Aldeias</td><td><center><input id="check_points" type="checkbox" ></center></td><td><center><input id="color3" type="color" value="#2E8E02"></center></td></tr>';
            tsal_options += '<tr><td>Adicionar Planejamento de Noblagem em cada Linha</td><td><center><input id="check_reserve_par" type="checkbox"></center></td><td><center><input id="color4" type="color" value="#FF0000"></center></td></tr>';
            tsal_options += '<tr><td>Adicionar Nova Coluna</td><td><input id="tsal_newcol" onchange="tsal_check();" type="checkbox">&nbsp;<span class="tsaltooltip"><img style="cursor: help; height:13px; width:13px" src="graphic/questionmark.png" ><span class="tsalinfo">Você precisa Ativar esta Opção para Adiconar uma nova Coluna</span></span>&nbsp;Ativar';
            tsal_options += '<br><input id="tsal_act1" onchange="tsal_check();" type="checkbox">&nbsp;<span class="tsaltooltip"><img style="cursor: help; height:13px; width:13px" src="graphic/questionmark.png" ><span class="tsalinfo">Adicionar [player] em TODAS as Linhas de uma Coluna Específica.</span></span>&nbsp;[player] TAG';
            tsal_options += '<br><input id="tsal_act2"  onchange="tsal_check();" type="checkbox">&nbsp;<span class="tsaltooltip"><img style="cursor: help; height:13px; width:13px" src="graphic/questionmark.png" ><span class="tsalinfo">Adicionar [ally] em TODAS as Linhas de uma Coluna Específica.</span></span>&nbsp;[ally] TAG';
            tsal_options += '<br><input id="col_title"  type="text" size="6" placeholder="Título" value="">&nbsp;<span class="tsaltooltip"><img style="cursor: help; height:13px; width:13px" src="graphic/questionmark.png" ><span class="tsalinfo">Inserir o Título da Coluna em Específico.</span></span>&nbsp;Título';
            tsal_options += '</td><td><center><input id="color5" type="color" value="#FF0000"></center></td></tr>';
            tsal_options += '<tr><th colspan="3"><center><span class="tsaltooltip"><img style="cursor: help; height:13px; width:13px" src="graphic/questionmark.png" ><span class="tsalinfo">Defina como as Linhas de Aldeias serão Incluídas na Tabela Projetada</span></span>&emsp;<font color="darkred"><b>Selecionar Aldeias</b></font></th></tr>';
            tsal_options += '<tr><td>Método:&nbsp;<select id="tsal_plithos" onchange="tsal_select();"><option value="0">Todas as Linhas</option><option value="1">Até o Número da Linha</option><option value="2">Depende da Pontuação</option></select></td>';
            tsal_options += '</td><td  colspan="2"><span id="sel1">' + tsal_cols.length + ' Aldeias que serão Incluídas na Tabela</span>';
            tsal_options += '<span id="sel2" style="display:none;">Número da Linha:&nbsp;<input id="plithos" type="number" value="' + tsal_cols.length + '" min="0" max="' + tsal_cols.length + '"></span>';
            tsal_options += '<span id="sel3" style="display:none;">Pontuação Mínima:&nbsp;<input id="tsalk_pontoi" type="number" value="5000" min="0"><br>Pontuação Máxima:&nbsp;<input id="tsalk_pontoi1" type="number" value="13000" min="0"></span>';
            tsal_options += '</td></tr>';

            var tsalin = '<br /><table id="tableOptions" class="vis " width="100%"><tr><th colspan="3"><center><font color="black"><b>Designer de Tabela</b></font></center></th></tr><tr><th colspan="3"><center><span class="tsaltooltip"><img style="cursor: help; height:13px; width:13px" src="graphic/questionmark.png" ><span class="tsalinfo">Defina as Colunas da Tabela e seu Contexto.<br> Você podera Adicionar uma Cor para cada Título.</span></span>&emsp;<font color="darkred"><b>Opções Disponíveis</b></font></center></th></tr>' + tsal_options;
            tsalin += '<br /><table id="tableText" class="vis " width="100%"><tr><th colspan="2"><center><font color="darkred"><b><span class="tsaltooltip"><img style="cursor: help; height:13px; width:13px" src="graphic/questionmark.png" ><span class="tsalinfo">O Código a seguir é Compatível com o Fórum da Tribo e o Bloco de Notas.</span></span>&nbsp;Código de Tabela</b></font></center></th></tr>' + '<tr><td>';
            tsalin += '<input type="button" id="button_generate" class="btn tsalbutton" value="Gerar Código de Tabela" /></td><td><textarea rows="10" cols="60" id="text_area" name="text_area" onfocus="select();" value=""></textarea></td></tr>';
            tsalin += '<tr><td colspan="2"><center><span class="tsalkembed1"><img width="20px;" src="https://dl.dropboxusercontent.com/s/s9swak86tirwdpd/Tsalkapone.%20Warning.gif">&emsp;ATENÇÃO: Você não pode postar Textos/Tableas que contenham 1.000 ou mais <b>]</b> (Colchetes)</span></center></td></tr></table>';

            var tsalcell = '<table class="vis" width="100%" id="tsalplan_tab"><tr><th colspan="5">';
            tsalcell += '<center><font color="black"><b>Configurações do Plano</b></font></center></th></tr>';
            tsalcell += '<tr><th colspan="3"><center><b><font color="maroon">Descrição</font></b></center></th>';
            tsalcell += '<th><center><b><font color="maroon">Ativar</font></b></center></th>';
            tsalcell += '<th><center><b><font color="maroon">Cor do Título</font></b></center></th></tr>';
            tsalcell += '<tr><td>Título Principal</td><td colspan="2"><center>Texto<br><textarea cols="50" rows="2" id="k5">[color=#FFF8E6]________________________________________[/color][img]https://i.imgur.com/j3jpjYV.png[/img][code][/code]</textarea></center></td><td><center><input type="checkbox" id="plan8" checked></center></td><td><center><b><input id="col11" type="color" value="#009F05"></center></td></tr>';
            tsalcell += '<tr><td colspan="3">Adicionar Cor e [b] em toda numeração</td><td><center><input type="checkbox" id="plan1" checked></center></td><td><center><input id="col1" type="color" value="#FF0000"></center></td></tr>';
            tsalcell += '<tr><td colspan="3">Gerar Scripts de Fakes</td><td><center><input type="checkbox" id="plan2" checked></center></td><td><center><input id="col2" type="color" value="#3D01FF"></center></td></tr>';
            tsalcell += '<tr><td colspan="3">&emsp;&emsp;<span class="tsaltooltip"><img style="cursor: help; height:13px; width:13px" src="graphic/questionmark.png" ><span class="tsalinfo">Ao Ativar esta Opção, a Tabela que você Gerou usando o <b> Design de Tabela </b> será Incluída no Código. <br> <br> Caso não tenha Gerado nenhuma Tabela, um Spoiler VAZIO será Incluído no seu lugar.</span></span>&nbsp;Incluir Designer de Tabela</td><td><center><input type="checkbox" id="plan3"></center></td><td><center><b><input id="col3" type="color" value="#B700C7"></center></td></tr>';
            tsalcell += '<tr><td >Incluir Lista de Aldeias</td><td><span class="tsaltooltip"><img style="cursor: help; height:13px; width:13px" src="graphic/questionmark.png" ><span class="tsalinfo">Defina como as Coordenadas serão Selecionadas e Incluídas na Lista de Aldeias do Plano.</span></span>&nbsp;';
            tsalcell += 'Método:&nbsp;<select id="tsal_plithos1" onchange="tsal_select1();"><option value="0">Todas as ldeias</option><option value="1">Selecionar Aldeias Extraídas</option><option value="2">Selecionar Aldeias que Dependem de Pontuação</option></select>';
            tsalcell += '</td><td><span id="sel4">' + tsal_cols.length + ' Aldeias que serão Incluídas na Tabela</span>';
            tsalcell += '<span id="sel5" style="display:none;">Selecione o grupo Desejado de Aldeias Extraídas</span>';
            tsalcell += '<span id="sel6" style="display:none;">Pontuação Mínima:&nbsp;<input id="tsalk_p" type="number" value="5000" min="0"><br>Pontuação Máxima:&nbsp;<input id="tsalk_p1" type="number" value="13000" min="0"></span>';
            tsalcell += '</td><td><center><input type="checkbox" onchange="tsal_disable();" id="plan4" checked></center></td><td><center><input id="col4" type="color" value="#4EA700"></center></td></tr>';
            tsalcell += '<tr><td colspan="3">Estatísticas da Tribo</td><td><center><input type="checkbox"  id="plan5"></center></td><td><center><input id="col5" type="color" value="#FF7700"></center></td></tr>';
            tsalcell += '<tr><td colspan="3">Estatísticas do Jogador</td><td><center><input type="checkbox" id="plan6"></center></td><td><center><input id="col6" type="color" value="#4EA700"></center></td></tr>';
            tsalcell += '<tr><td>Informação Adicional</td><td colspan="3"><center><b><span class="pulse1" id="tsal_extra1">Ative para Costumizar as opções Disponíveis</span></b></center><span id="tsal_extra" style="display:none">';
            tsalcell += '<br><center><b><u>Título</b></u></center><br>';
            tsalcell += 'Título:&emsp;<input type="text" size="30" id="t1" value="Descrição do Plano">';
            tsalcell += '<br>Texto:&emsp;<input type="text" size="70" id="k1" value="">';
            tsalcell += '<br>Cor do Título:&emsp;<input id="col7" type="color" value="#B700C7">';
            tsalcell += '<br><center><b><u>Texto Adicional</b></u></center><br>';
            tsalcell += 'Título:&emsp;<input type="text" size="30" id="t2" value="Horário em que os Ataques devem bater">';
            tsalcell += '<br>Texto:&emsp;<input type="text" size="70" id="k2" value="">';
            tsalcell += '<br>Cor do Título:&emsp;<input id="col8" type="color" value="#B700C7">';
            tsalcell += '<br><center><b><u>Texto Adicional</b></u></center><br>';
            tsalcell += 'Título:&emsp;<input type="text" size="30" id="t3" value="Meta do Planejamento">';
            tsalcell += '<br>Texto:&emsp;<input type="text" size="70" id="k3" value="">';
            tsalcell += '<br>Cor do Título:&emsp;<input id="col9" type="color" value="#B700C7">';
            tsalcell += '<br><center><b><u>Texto Adicional</b></u></center><br>';
            tsalcell += 'Título:&emsp;<input type="text" size="30" id="t4" value="Anotações">';
            tsalcell += '<br>Texto:&emsp;<input type="text" size="70" id="k4" value="">';
            tsalcell += '<br>Cor do Título:&emsp;<input id="col10" type="color" value="#B700C7">';
            tsalcell += '</span><td><center><input type="checkbox" onchange="tsal_extra();" id="plan7"></center></td></tr>';
            tsalcell += '<tr><td colspan="4">&emsp;&emsp;<span class="tsaltooltip"><img style="cursor: help; height:13px; width:13px" src="graphic/questionmark.png" ><span class="tsalinfo">Você precisa Ativar a <b> Lista da Aldeias </b> para Habilitar esta Opção</span></span>&nbsp;Adicionar [claim] em toda Coordenada na Lista de Aldeias</td><td><center><input type="checkbox" id="plan9"></center></td></tr>';
            tsalcell += '<tr><td colspan="4">&emsp;&emsp;<span class="tsaltooltip"><img style="cursor: help; height:13px; width:13px" src="graphic/questionmark.png" ><span class="tsalinfo">Você precisa Ativar a <b> Lista da Aldeias </b> para Habilitar esta Opção</span></span>&nbsp;Adicionar [player][/player]</b> em toda Coordenada na Lista de Aldeias</td><td><center><input type="checkbox" id="plan10"></center></td></tr>';
            tsalcell += '<tr><td colspan="5"><center><a class="btn tsalbutton" onclick="tsalplano();">Gerar Planejamento</a></center></td></tr>';
            tsalcell += "<tr><th colspan='5'><center><b><font color='black'><span class='tsaltooltip'><img style='cursor: help; height:13px; width:13px' src='graphic/questionmark.png' ><span class='tsalinfo'>O Código a seguir é Compatível com o Fórum da Tribo e o Bloco de Notas.</span></span>&nbsp;Código do Plano</font></b></th></tr>";
            tsalcell += "<tr><td colspan='5'><center><textarea cols='80' rows='10' id='plano_per' onFocus='this.select()'></textarea></center></td></tr>";
            tsalcell += '<tr><td colspan="5"><center><span class="tsalkembed1"><img width="20px;" src="https://dl.dropboxusercontent.com/s/s9swak86tirwdpd/Tsalkapone.%20Warning.gif">&emsp;ATENÇÃO: Você não pode postar Textos/Tableas que contenham 1.000 ou mais <b>]</b> (Colchetes)</span></center></td></tr></table>';


            kontClick = '<div><a style="cursor:pointer" title="Mostrar TODAS as Aldeias" onclick="setCoords(kont[0]);">⚡Todas as Aldeias</a>';
            for (i=11;i<100;i++) {
                if (kont[i] && kont[i].length > 0) {
                    kontClick=kontClick+'<b> | </b><a style="cursor:pointer" title="Mostrar as Aldeias do Continente '+i+'" onclick="setCoords(kont['+i+'])">⚡ К'+i+'</a>';
                }
            }
            kontClick = kontClick + "</div>";
            var tsalkaponecell = '';
            tsalkaponecell += '<div style="min-width: 700px;" class="target-select clearfix vis float_left"><h4><font color=darkred><center>## ALDEIAS EXTRAÍDAS ##</center></font></h4>';
            tsalkaponecell += '<br><div>' + kontClick + '<textarea id="taCoords" value="" onFocus="this.select();" style=" width:90%" rows="5"></textarea></div>';
            tsalkaponecell += '<font color=darkred><b>Aldeias Extraídas:</b></font> <span id="count"></span><br><br>';
            tsalkaponecell += '<input type="checkbox" id="tsalorder" onchange="tsal_align();">&nbsp;<font color=black><b>Ordem Vertical/Horizontal</b></font><br><br>';
            tsalkaponecell += '<table id=tsalmenu class="vis" style="width: 100%"><tbody>';
            tsalkaponecell += '<tr><th colspan="2"><font color="darkred"><b><center>## STRIKE OPÇÕES ##</center></b></font></th>';
            tsalkaponecell += '<tr><td><font color="maroon"><b>⚡ Clique para Mostrar/Ocultar as Estatísticas e/ou Gráficos</b></font></td>';
            tsalkaponecell += '<td><span id="open1"><input type="button" value="Mostrar Gráficos e/ou Estatísticas" id="openf1" class="btn tsalbutton"></span><span id="close1" style="display:none">';
            tsalkaponecell += '<input class="btn tsalbutton" type="button" value="Ocultar Gráficos e/ou Estatísticas" id="closef1"></span></td></tr>';
            tsalkaponecell += '<tr><td><font color="maroon"><b>⚡ Abre um Planejador de Ataque Costumizável (Fórum)</b></font></td><td><span id="tsalplano1"><a class="btn tsalbutton" id="tsalplanbut1">Abrir Plano de Ataque</a></span><span style="display:none" id="tsalplano2"><a class="btn tsalbutton" id="tsalplanbut2">Fechar Plano de Ataque</a></span>'; /* + thePlayer + */
            tsalkaponecell += '<tr><td><font color="maroon"><b>⚡ Clique para Adicionar/Remover Coluna de Reservas</b></font></td>';
            tsalkaponecell += '<td><span id="open4" ><input type="button" value="Adicionar Colunas" id="openf4" class="btn tsalbutton"></span><span id="close4" style="display:none">';
            tsalkaponecell += '<input class="btn tsalbutton" type="button" value="Remover Colunas" id="closef4"></span></td></tr>';
            tsalkaponecell += '<tr><td><font color="maroon"><b>⚡ Clique para Mostrar/Ocultar o Designer de Tabela</b></font></td>';
            tsalkaponecell += '<td><span id="open2"><input type="button" value="Abrir Designer" id="openf2" class="btn tsalbutton"></span><span id="close2" style="display:none">';
            tsalkaponecell += '<input class="btn tsalbutton" type="button" value="Fechar Designer" id="closef2"></span></td></tr>';
            tsalkaponecell += '<tr><td><font color="maroon"><b>⚡ Clique para Mostrar/Ocultar a Lista de Aldeias</b></font></td>';
            tsalkaponecell += '<td><span id="open3" style="display:none"><input type="button" value="Mostrar Lista" id="openf3" class="btn tsalbutton"></span><span id="close3" >';
            tsalkaponecell += '<input class="btn tsalbutton" type="button" value="Ocultar Lista" id="closef3"></span></td></tr>';
            tsalkaponecell += '<tr><td><font color="maroon"><b>⚡ Abre um Pop Up com Scripts Essenciais</b></font></td><td><a class="btn tsalbutton" onclick="Tsalipeiros();">Scripts</a></td></tr>';
            tsalkaponecell += '</tbody></table><span id="tsalplan" style="display:none"><hr>' + tsalcell + '<hr></span><span id="tsaldiag" style="display:none"><hr>' + graphs + '<hr></span><span id="tsaltab" style="display:none"><hr>' + tsalin + '<hr></span></div>';

            if (!document.getElementById('selectedone')) {

                document.getElementById("villages_list").outerHTML = tsalkaponecell + document.getElementById("villages_list").outerHTML;
            } else {
                UI.SuccessMessage('<font color=gold><b><center><u>## NOTIFICAÇÃO ##</u></center></b></font> <br><br> O Script Tribe & Player Stats está em Excecução', 5000);
            }

            $("#openf4").click(function() {
                document.getElementById('close4').style.display = "";
                document.getElementById('open4').style.display = "none";
                var tsal_th = '<th><center>Reserva</center></th>';
                var tsal_th2 = '<th><center>Cancelar</center></th>';
                table = $('table[class*="vis"]:has(td a[href*="info_village"])');
                var hdr = table.find('tr:eq(0)');
                hdr.html(hdr.html() + tsal_th);
                hdr.html(hdr.html() + tsal_th2);

                var tsalvils = C.split(' ');
                var tsalcoords;
                $('#villages_list tr').append($("<td>"));
                $('#villages_list tr').append($("<td>"));
                $('#villages_list tbody tr').each(function() {
                    $(this).children('td:last').append($('<td></td>'));
                });
                $('#villages_list tbody tr').each(function() {
                    $(this).children('td:last').append($('<td></td>'));
                });

                var tsalvils = C.split(' ');
                var tsalcoords;
                for (var i = 0; i < tsalvils.length; i++) {
                    var y = vals3[i].split('=');
                    var z = 'reservation_' + y[3];

                    /* CÉLULA DE RESERVA */
                    document.getElementById("villages_list").rows[1 + i].cells[3].innerHTML = '<center><a href="' + game_data.link_base_pure + 'info_village&' + vals3[i] + '&action=reserve_village&h=' + game_data.csrf + '" target="blank"><img src="' + image_base + 'map/reserved_player.png"></a></center>';
                    /* CÉLULA DE CANCELAR */
                    document.getElementById("villages_list").rows[1 + i].cells[4].innerHTML = '<center><a href="' + game_data.link_base_pure + 'info_village&action=cancel_reservation&' + vals3[i] + '&h=' + game_data.csrf + '" target="blank"><img src="' + image_base + 'delete.png"></a></center>';

                }
            });
            $("#closef4").click(function() {
                document.getElementById('close4').style.display = "none";
                document.getElementById('open4').style.display = "";
                location.reload();
            });


            $("#button_generate").click(function() {


                var plithos1 = document.getElementById('tsalk_pontoi').value;
                var plithos2 = document.getElementById('tsalk_pontoi1').value;

                function select_villages() {
                    var tsalvillages = [];
                    $('#villages_list').each(function() {
                        $('tr>td:nth-child(3)', $(this)).each(function() {
                            var x = Number($(this).text().replace(/\./g, ''));
                            if (x >= plithos1 && x < plithos2) {
                                tsalvillages.push($(this).closest('tr').index());
                            }
                        });
                    });
                    return tsalvillages;
                }
                var tsalvillages = select_villages();


                var getIpoints = document.getElementById("check_points");
                var getIreserv = document.getElementById("check_reserve_par");
                var tsalres = document.getElementById("tsal_claim");
                var tsalnum = document.getElementById("tsal_num");
                var tsalcol = document.getElementById("tsal_newcol");
                var tsalact1 = document.getElementById("tsal_act1");
                var tsalact2 = document.getElementById("tsal_act2");
                var text_area = document.getElementById('text_area');
                var color1 = document.getElementById('color1').value;
                var color2 = document.getElementById('color2').value;
                var color3 = document.getElementById('color3').value;
                var color4 = document.getElementById('color4').value;
                var color5 = document.getElementById('color5').value;
                var col_title = document.getElementById('col_title').value;
                text_area.textContent = "";

                var tag_tbody = document.getElementById("villages_list").getElementsByTagName("tbody")[0];
                var tag_td = tag_tbody.getElementsByTagName('td');
                var tableau = [],
                    s = "[|]",
                    d = "[*]",
                    format = [],
                    name_villages = [],
                    points = [];
                var noms_colonnes = [];
                var tsal_close_tab = [];
                tsal_close_tab[0] = "[/*]\n[/table]";
                var tsal_number1;
                var tsal_coord1;
                var tsal_pontoi1;
                var tsal_res1;
                var tsal_claim1;
                var tsal_newcol;
                if (tsalcol.checked) {
                    tsal_newcol = '[||]' + col_title + '';
                } else {
                    tsal_newcol = '';
                }
                if (getIpoints.checked) {
                    tsal_pontoi1 = '[||]Pontos';
                } else {
                    tsal_pontoi1 = '';
                }
                if (getIreserv.checked) {
                    tsal_res1 = '[||]Plano';
                } else {
                    tsal_res1 = '';
                }

                tsal_coords1 = 'Aldeias';

                if (tsalnum.checked) {
                    tsal_number1 = '[color=' + color1 + ']Nº[/color][||]';
                } else {
                    tsal_number1 = '';
                }
                noms_colonnes[0] = "[table]\n[**]" + tsal_number1 + tsal_coords1 + tsal_pontoi1 + tsal_res1 + tsal_newcol + "[/**] \n";
                format[0] = "";

                var addText = function(texte) {
                    text_area.appendChild(document.createTextNode(texte));
                };

                var tsalplithos;
                var plithos = document.getElementById('plithos').value;
                var tsal_plithos = document.getElementById('tsal_plithos');


                if (tsal_plithos.value == "1") {
                    tsalplithos = plithos;
                    for (var i = 1, k = 0; i < tsalplithos, k < tsalplithos; i++, k++) {
                        var tsal_number;
                        var tsal_coord;
                        var tsal_pontoi;
                        var tsal_res;
                        var tsal_claim;
                        var tsal_col;
                        if (tsalcol.checked) {
                            if (tsalact1.checked) {
                                tsal_col = s + '[player]PLAYER[/player]';
                            } else if (tsalact2.checked) {
                                tsal_col = s + '[ally][/ally]';
                            } else {
                                tsal_col = s;
                            }
                        } else {
                            tsal_col = '';
                        }
                        if (getIpoints.checked) {
                            tsal_pontoi = s + tsal_cols2[k];
                        } else {
                            tsal_pontoi = '';
                        }
                        if (getIreserv.checked) {
                            tsal_res = s + ' [url=' + game_data.link_base_pure + 'info_village&' + vals3[i] + '&action=reserve_village&h=' + game_data.csrf + '][img]' + image_base + 'map/reserved_player.png[/img][/url]' + ' / ' + '[url=' + game_data.link_base_pure + 'info_village&action=cancel_reservation&' + vals3[i] + '&h=' + game_data.csrf + '][img]' + image_base + 'delete.png[/img][/url]';
                        } else {
                            tsal_res = '';
                        }
                        if (tsalres.checked) {
                            tsal_coord = '[claim]' + tsal_cols[k] + '[/claim]';
                        } else {
                            tsal_coord = ' ' + tsal_cols[k] + ' ';
                        }
                        if (tsalnum.checked) {
                            tsal_number = '⚡' + i + s;
                        } else {
                            tsal_number = '';
                        }
                        format[0] += d + tsal_number + tsal_coord + tsal_pontoi + tsal_res + tsal_col + '\n';
                    }
                    addText(noms_colonnes[0]);
                    addText(format[0]);
                    addText(tsal_close_tab[0]);
                } else if (tsal_plithos.value == "2") {
                    tsalplithos = plithos1;
                    for (var i = 1, k = 0; i < tsalvillages.length, k < tsalvillages.length; i++, k++) {
                        var tsal_number;
                        var tsal_coord;
                        var tsal_pontoi;
                        var tsal_res;
                        var tsal_claim;
                        var tsal_col;
                        if (tsalcol.checked) {
                            if (tsalact1.checked) {
                                tsal_col = s + '[player]PLAYER[/player]';
                            } else if (tsalact2.checked) {
                                tsal_col = s + '[ally][/ally]';
                            } else {
                                tsal_col = s;
                            }
                        } else {
                            tsal_col = '';
                        }
                        if (getIpoints.checked) {
                            tsal_pontoi = s + tsal_cols2[tsalvillages[k]];
                        } else {
                            tsal_pontoi = '';
                        }
                        if (getIreserv.checked) {
                            tsal_res = s + ' [url=' + game_data.link_base_pure + 'info_village&' + vals3[i] + '&action=reserve_village&h=' + game_data.csrf + '][img]' + image_base + 'map/reserved_player.png[/img][/url]' + ' / ' + '[url=' + game_data.link_base_pure + 'info_village&action=cancel_reservation&' + vals3[i] + '&h=' + game_data.csrf + '][img]' + image_base + 'delete.png[/img][/url]';
                        } else {
                            tsal_res = '';
                        }
                        if (tsalres.checked) {
                            tsal_coord = '[claim]' + tsal_cols[tsalvillages[k]] + '[/claim]';
                        } else {
                            tsal_coord = ' ' + tsal_cols[tsalvillages[k]] + ' ';
                        }
                        if (tsalnum.checked) {
                            tsal_number = '⚡' + i + s;
                        } else {
                            tsal_number = '';
                        }
                        format[0] += d + tsal_number + tsal_coord + tsal_pontoi + tsal_res + tsal_col + '\n';
                    }
                    addText(noms_colonnes[0]);
                    addText(format[0]);
                    addText(tsal_close_tab[0]);
                } else {
                    tsalplithos = tsal_cols.length;
                    for (var i = 1, k = 0; i < tsalplithos, k < tsalplithos; i++, k++) {
                        var tsal_number;
                        var tsal_coord;
                        var tsal_pontoi;
                        var tsal_res;
                        var tsal_claim;
                        var tsal_col;
                        if (tsalcol.checked) {
                            if (tsalact1.checked) {
                                tsal_col = s + '[player]PLAYER[/player]';
                            } else if (tsalact2.checked) {
                                tsal_col = s + '[ally][/ally]';
                            } else {
                                tsal_col = s;
                            }
                        } else {
                            tsal_col = '';
                        }
                        if (getIpoints.checked) {
                            tsal_pontoi = s + tsal_cols2[k];
                        } else {
                            tsal_pontoi = '';
                        }
                        if (getIreserv.checked) {
                            tsal_res = s + ' [url=' + game_data.link_base_pure + 'info_village&' + vals3[i] + '&action=reserve_village&h=' + game_data.csrf + '][img]' + image_base + 'map/reserved_player.png[/img][/url]' + '/' + '[url=' + game_data.link_base_pure + 'info_village&action=cancel_reservation&' + vals3[i] + '&h=' + game_data.csrf + '][img]' + image_base + 'delete.png[/img][/url]';
                        } else {
                            tsal_res = '';
                        }
                        if (tsalres.checked) {
                            tsal_coord = '[claim]' + tsal_cols[k] + '[/claim]';
                        } else {
                            tsal_coord = ' ' + tsal_cols[k] + ' ';
                        }
                        if (tsalnum.checked) {
                            tsal_number = '⚡' + i + s;
                        } else {
                            tsal_number = '';
                        }
                        format[0] += d + tsal_number + tsal_coord + tsal_pontoi + tsal_res + tsal_col + '\n';
                    }
                    addText(noms_colonnes[0]);
                    addText(format[0]);
                    addText(tsal_close_tab[0]);
                }


            });



            /*==== register ====*/
            var script = {
                scriptname: 'Tribe & Player Stats',
                version: '1.0',
                author: 'Tsalkapone',
                email: 'tsalkapone@hotmail.com',
                broken: false
            };
            $.post(ScriptAPI.url, script);


            $("#openf3").click(function() {
                document.getElementById('close3').style.display = "";
                document.getElementById('open3').style.display = "none";
                document.getElementById('villages_list').style.display = "";
            });
            $("#closef3").click(function() {
                document.getElementById('close3').style.display = "none";
                document.getElementById('open3').style.display = "";
                document.getElementById('villages_list').style.display = "none";
            });

            $("#openf2").click(function() {
                document.getElementById('close2').style.display = "";
                document.getElementById('open2').style.display = "none";
                document.getElementById('tsaltab').style.display = "";
            });
            $("#closef2").click(function() {
                document.getElementById('close2').style.display = "none";
                document.getElementById('open2').style.display = "";
                document.getElementById('tsaltab').style.display = "none";
            });

            $("#openf1").click(function() {
                document.getElementById('close1').style.display = "";
                document.getElementById('open1').style.display = "none";
                document.getElementById('tsaldiag').style.display = "";
            });
            $("#closef1").click(function() {
                document.getElementById('close1').style.display = "none";
                document.getElementById('open1').style.display = "";
                document.getElementById('tsaldiag').style.display = "none";
            });

            $("#tsalplanbut1").click(function() {
                document.getElementById('tsalplano2').style.display = "";
                document.getElementById('tsalplano1').style.display = "none";
                document.getElementById('tsalplan').style.display = "";
            });
            $("#tsalplanbut2").click(function() {
                document.getElementById('tsalplano2').style.display = "none";
                document.getElementById('tsalplano1').style.display = "";
                document.getElementById('tsalplan').style.display = "none";
            });

            if ($('a:contains("' + lexpand + '")').length > 0) {
                $('a:contains("' + lexpand + '")')[0].click();
            }
            setCoords(kont[0]);
        }

        function sortByKont() {
            kont[0] = new Array();
            for (i = 0; i < coords.length; i++) {
                temp = coords[i].split("|");
                namekont = Math.floor(parseInt(temp[0]) / 100) + Math.floor(parseInt(temp[1]) / 100) * 10;
                if (!kont[namekont]) {
                    kont[namekont] = new Array();
                }
                kont[namekont].push(coords[i]);
                kont[0].push(coords[i]);
            }

            setTimeout(function tsal_initiate() {
                gui();
            }, 1000);
        }

        function tsalplano() {
            var tds = document.getElementsByTagName("TD");
            var K = new Array();
            for (var idx = 0; idx < 100; idx++) K[idx] = new Array();
            var C = new Array();
            var C1 = new Array();
            for (var idx = 0; idx < tds.length; idx++) {
                var xy = tds[idx].innerHTML;
                if (/^\d+\|\d+$/.test(xy)) {
                    C.push(xy);
                    C1.push(xy);
                    var xys = xy.split('|');
                    K[Math.floor(parseInt(xys[0]) / 100) + Math.floor(parseInt(xys[1]) / 100) * 10].push(xy);
                }
            }
            C = C.join(' ');
            C1 = C1.join('\n');


            var prefix = '<textarea cols=100 rows=4>javascript: var coords=\'';
            var postfix = '\';var Tsalkapone_ανιχνευτές=1; var Tsalkapone_πολιορκητικοί_κριοί=1; var Tsalkapone_καταπέλτες=1;$.getScript(\'https://media.innogamescdn.com/com_DS_GR/Scripts/Scripts_vol2/Tsalkapone. Fake με κριό ή καταπέλτη_εκ.js\');void 0;</textarea><br>';
            var S = '<b><a target=\'_blank\' title="Tsalkapone profile" href=\'https://forum.tribalwars.net/index.php?members/tsalkapone.114063/\'>Tsalkapone, GR Game Operator-Script Editor</a> <br><br><u> Fake scripts με κριό ή καταπέλτη για όλα τα χωριά και για χωριά ανά ήπειρο</u></b><hr><font color=black><b>Όλα τα χωριά του λογαριασμού:</b></font><br>' + prefix + C + postfix;
            for (var idx = 0; idx < 100; idx++)
                if (K[idx].length > 0) {
                    var Ks = K[idx].join(' ');
                    S += '<br><br><font color=black><b>Χωριά στη Κ' + idx + '</b></font>:<br>' + prefix + Ks + postfix;
                }


            function getTableColumnValues(col) {
                var columnValues = [];
                $('#villages_list').each(function() {
                    $('tr>td:nth-child(' + col + ')', $(this)).each(function() {
                        columnValues.push($(this).text());
                    });
                });
                return columnValues;
            }

            function getTableColumnValues1() {
                var columnValues = [];
                var allSpans = document.getElementsByClassName('village_anchor');
                for (var i = 0; i < allSpans.length; i++) {
                    columnValues.push(allSpans[i].getElementsByTagName('a')[0].href);
                }
                return columnValues;
            }

            var vals = getTableColumnValues(2);
            var vals2 = getTableColumnValues(3);
            var vals3 = getTableColumnValues1();
            var tsal_cols = [];
            var tsal_cols2 = [];


            for (var i = 0; i < vals.length; ++i) {
                if (vals[i].indexOf("|") > 0) {
                    tsal_cols.push(vals[i]);
                }
            }
            for (var i = 0; i < vals2.length; ++i) {
                tsal_cols2.push(vals2[i]);
            }

            var pl_1 = document.getElementById('tsalk_p').value;
            var pl_2 = document.getElementById('tsalk_p1').value;
            var tsal_pl = document.getElementById('tsal_plithos1');
            var c1 = document.getElementById('col1').value;
            var c2 = document.getElementById('col2').value;
            var c3 = document.getElementById('col3').value;
            var c4 = document.getElementById('col4').value;
            var c5 = document.getElementById('col5').value;
            var c6 = document.getElementById('col6').value;
            var c7 = document.getElementById('col7').value;
            var c8 = document.getElementById('col8').value;
            var c9 = document.getElementById('col9').value;
            var c10 = document.getElementById('col10').value;
            var c11 = document.getElementById('col11').value;
            var t1 = document.getElementById('t1').value;
            var k1 = document.getElementById('k1').value;
            var t2 = document.getElementById('t2').value;
            var k2 = document.getElementById('k2').value;
            var t3 = document.getElementById('t3').value;
            var k3 = document.getElementById('k3').value;
            var t4 = document.getElementById('t4').value;
            var k4 = document.getElementById('k4').value;
            var k5 = document.getElementById('k5').value;
            var tsal_text = document.getElementById('text_area').value;

            function select_villages1() {
                var tsalk_vils = [];
                $('#villages_list').each(function() {
                    $('tr>td:nth-child(3)', $(this)).each(function() {
                        var x = Number($(this).text().replace(/\./g, '')); /* OCULTAR LISTA*/
                        if (x >= pl_1 && x < pl_2) {
                            var y = ($(this).closest('tr').index());
                            tsalk_vils.push(tsal_cols[y]);
                        }
                    });
                });
                return tsalk_vils;
            }
            var tsal_ch = document.getElementById('tsalorder');
            tsal_ch.checked = false;
            var tsalk_vils = select_villages1();
            var tsalk_vils1 = C;
            var tsalk_vils2 = document.getElementById('taCoords').value;

            var t_vils1 = tsalk_vils1.split(' ');
            var t_vils2 = tsalk_vils2.split(' ');


            var tsalk;
            var tsalk2;
            var tsalk3;
            if (tsal_pl.value == "1") {
                tsalk = tsalk_vils2;
            } else if (tsal_pl.value == "2") {
                tsalk = tsalk_vils;
            } else {
                tsalk = tsalk_vils1;
            }
            if (tsal_pl.value == "1") {
                tsalk2 = t_vils2.join('\n');
            } else if (tsal_pl.value == "2") {
                tsalk2 = tsalk_vils.join('\n');
            } else {
                tsalk2 = t_vils1.join('\n');
            }
            if (tsal_pl.value == "1") {
                tsalk3 = t_vils2;
            } else if (tsal_pl.value == "2") {
                tsalk3 = tsalk_vils;
            } else {
                tsalk3 = t_vils1;
            }
            var tsal3in = "[spoiler=⚡ Script de Fakes Nº1 - Coordenada Aleatória]\nAperte [b]T[/b] no seu Teclado (Após ativar o script) para saber mais sobre as Variáveis e Configurações\n\n[spoiler=⚫ Código do Script][code]javascript:var Tsalkapone_coords='" + tsalk + "';var Tsalkapone_scouts=5;var Tsalkapone_units_order={ram:1,catapult:1,sword:1,spear:1,axe:1,archer:1,light:1,marcher:1,heavy:1};$.getScript('https://dl.dropboxusercontent.com/s/n0945rwkzzqa4pl/Tsalkapone.Fake_Script_No1_ek.js');void 0;[/code][/spoiler][/spoiler]";
            tsal3in += "\n[spoiler=⚡ Script de Fakes Nº2 - Coordenada Consecutiva (Contínua)]\nAperte [b]T[/b] no seu Teclado (Após ativar o script) para saber mais sobre as Variáveis e Configurações\n\n[spoiler=⚫ Código do Script][code]javascript:var Tsalkapone_scouts=5;var Tsalkapone_units_order={ram:1,catapult:1,sword:1,spear:1,axe:1,archer:1,light:1,marcher:1,heavy:1};var Tsalkapone_coords='" + tsalk + "';var config={Tsalkapone_target:'Tsalkapone',Tsalkapone_repeat:1,Tsalkapone_cookieID:'fake'};$.getScript('https://dl.dropboxusercontent.com/s/jyufjpwbdo8h0id/Tsalkapone.Fake_Script_No2_ek.js');void 0;[/code][/spoiler][/spoiler]";
            tsal3in += "\n[spoiler=⚡ Script de Fakes Nº3 - Coordenada Aleatória, Aríete e Catapulta Apenas]\nAperte [b]T[/b] no seu Teclado (Após ativar o script) para saber mais sobre as Variáveis e Configurações\n\n[spoiler=⚫ Código do Script][code]javascript:var Tsalkapone_coords='" + tsalk + "';var Tsalkapone_scouts=5;var Tsalkapone_units_order={ram:1,catapult:1,sword:0,spear:0,axe:0,archer:0,light:0,marcher:0,heavy:0};$.getScript('https://dl.dropboxusercontent.com/s/n0945rwkzzqa4pl/Tsalkapone.Fake_Script_No1_ek.js');void 0;[/code][/spoiler][/spoiler]";
            var tsal3 = "";
            tsal3 += tsal3in;
            var plan1 = document.getElementById('plan1');
            var plan2 = document.getElementById('plan2');
            var plan3 = document.getElementById('plan3');
            var plan4 = document.getElementById('plan4');
            var plan5 = document.getElementById('plan5');
            var plan6 = document.getElementById('plan6');
            var plan7 = document.getElementById('plan7');
            var plan8 = document.getElementById('plan8');
            var plan9 = document.getElementById('plan9');
            var plan10 = document.getElementById('plan10');

            var serverTime = "[table][*][size=12][b]" + $("#serverDate").html() + "[/b] às [i]" + $("#serverTime").html() + "[/i][/size][/table][code][/code]";
            var docSource = "";
            docSource += "\n";
            if (plan8.checked) {
                docSource += "[table][*][size=16][player]" + thePlayer + "[/player][/size][/table]";
                docSource += "" + serverTime + "";
                docSource += "" + k5 + "\n";
                docSource += "[color=#FFF8E6]_____________________________________[/color] [b][size=16][color=#700505]## OPERAÇÃO ##[/color][/size][/b]\n\n";
                docSource += "[color=#FFF8E6]______________[/color] [b][size=12][color=#700505]Reivindique sua Reserva por Número ou Coordenada da Aldeia[/color][/size][/b]\n\n";
                docSource += "_______________________________________________________________________________________________________\n";
            }
            if (plan7.checked) {
                docSource += "[b][color=" + c7 + "]" + t1 + "[/color][/b]\n\n[b]" + k1 + "[/b]\n";
                docSource += "[spoiler=" + t1 + "]\n[color=" + c8 + "][i][b]" + t2 + ":[/b][/i][/color]\n";
                docSource += "" + k2 + "\n\n";
                docSource += "[color=" + c9 + "][i][b]" + t3 + ":[/b][/i][/color]\n";
                docSource += "" + k3 + "\n\n";
                docSource += "[color=" + c10 + "][i][b]" + t4 + ":[/b][/i][/color]\n";
                docSource += "" + k4 + "\n[/spoiler]\n\n";
            }
            var urlPrefix = "";
            if (game_data.market == "en") {
                urlPrefix = "";
            } else {
                urlPrefix = '.' + game_data.market;
            }


            if (plan6.checked) {
                docSource += "\n[spoiler=⭐ Player Stats]\n";
                docSource += "[table][**]⚫ [b]Nick:[/b][|][b][player]" + thePlayer + "[/player][/b]\n";
                docSource += "[**]⚫ [b]Pontos:[/b][|][b]" + thePoints + "[/b]\n";
                docSource += "[**]⚫ [b]OD Geral:[/b][|][b]" + OD + "[/b][color=#F4E4BC][LULU<3][/color][/table]\n";
                docSource += '[spoiler=⚡ Gráficos]\n[spoiler=⚫ Gráfico Geral][img]http://' + pageurltsal3[0] + '.tribalwarsmap.com/' + game_data.market + '/graph/player/' + pageid + '[/img][/spoiler]\n';
                docSource += '[spoiler=⚫ Gráfico de ODA][img]http://' + pageurltsal3[0] + '.tribalwarsmap.com/' + game_data.market + '/graph/oda_player/' + pageid + '[/img][/spoiler]\n';
                docSource += '[spoiler=⚫ Gráfico de ODD][img]http://' + pageurltsal3[0] + '.tribalwarsmap.com/' + game_data.market + '/graph/odd_player/' + pageid + '[/img][/spoiler]\n';
                docSource += '[spoiler=⚫ Gráfico de ODS][img]http://' + pageurltsal3[0] + '.tribalwarsmap.com/' + game_data.market + '/graph/ods_player/' + pageid + '[/img][/spoiler][/spoiler]\n';
//                docSource += "[spoiler=Gráfico de Pontuação][img]http://www" + urlPrefix + ".twstats.com/image.php?type=playerssgraph&graph=points&id=" + playerId + "&s=" + server + "[/img][/spoiler]\n";
//                docSource += "[spoiler=Gráfico de Aldeias][img]http://www" + urlPrefix + ".twstats.com/image.php?type=playerssgraph&graph=villages&id=" + playerId + "&s=" + server + "[/img][/spoiler][/spoiler]\n\n";
                docSource += "[spoiler=⚡ Estatísticas]\n";
                docSource += '[table][**]Tipo de Estatística[||]Link[/**]';
                docSource += '[*]Perfil do TW~Stats[|][url=http://www' + urlPrefix + '.twstats.com/' + server + '/index.php?page=player&fi=1&id=' + playerId + '][img]https://dl.dropboxusercontent.com/s/pjv3zlroqyd84rj/Tsalkapone_openlink.png[/img][/url]';
                docSource += '[*]Períodos de Conquistas[|][url=http://www' + urlPrefix + '.twstats.com/' + pageurltsal3[0] + '/index.php?page=player&id=' + pageid + '&mode=conquer_periods][img]https://dl.dropboxusercontent.com/s/pjv3zlroqyd84rj/Tsalkapone_openlink.png[/img][/url]';
                docSource += '[*]Histórico de Atividade[|][url=http://www' + urlPrefix + '.twstats.com/' + pageurltsal3[0] + '/index.php?page=player&id=' + pageid + '&mode=history][img]https://dl.dropboxusercontent.com/s/pjv3zlroqyd84rj/Tsalkapone_openlink.png[/img][/url]';
                docSource += '[*]Histórico de Conquistas[|][url=http://www' + urlPrefix + '.twstats.com/' + pageurltsal3[0] + '/index.php?page=player&mode=conquers&id=' + pageid + '][img]https://dl.dropboxusercontent.com/s/pjv3zlroqyd84rj/Tsalkapone_openlink.png[/img][/url]';
                docSource += '[/table]';
                docSource += "[/spoiler][/spoiler]";
            }
            if (plan5.checked) {
                docSource += "\n[spoiler=⭐ Tribe Stats]\n";
                docSource += "[table][**][b]Tribo:[/b][|]" + ((tribeId > 0) ? ("[ally]" + theTribe + "[/ally]") : "[b]Sem Tribo[/b]") + "[/table]\n";
                if (tribeId > 0) {
                    docSource += '[table][**]Tipo de Estatística[||]Link[/**]';
                    docSource += "[*]Perfil do TW~Stats[|][url=http://www" + urlPrefix + ".twstats.com/" + server + "/index.php?page=tribe&id=" + tribeId + "][img]https://dl.dropboxusercontent.com/s/pjv3zlroqyd84rj/Tsalkapone_openlink.png[/img][/url]";
                    docSource += "[*]Mapa[|][url=http://www" + urlPrefix + ".twstats.com/" + server + "/index.php?page=map&tribe_0_id=" + tribeId + "&tribe_0_colour=ff00ff&player_0_id=" + playerId + "&player_0_colour=00aeff&zoom=100&centrex=500&centrey=500&nocache=1&fill=000000&grid=1][img]https://dl.dropboxusercontent.com/s/pjv3zlroqyd84rj/Tsalkapone_openlink.png[/img][/url]";
                }
                docSource += "[/spoiler]";
            }

//            docSource += "\n\n";

            if (plan4.checked) {
                docSource += "\n[spoiler=⭐ Aldeias]\n";
                docSource += '[table][*]';
                var tsalk5;
                if (plan10.checked) {
                    tsalk5 = '<---> [player]RESERVA[/player]';
                } else {
                    tsalk5 = '';
                }
                for (var i = 1, k = 0; i < tsalk3.length, k < tsalk3.length; i++, k++) {
                    if (plan1.checked) {
                        docSource += '';
                        docSource += '⚡' + i + ' ~ ' + (plan9.checked ? "[claim]" + tsalk3[k] + "[/claim]" : "" + tsalk3[k] + "") + tsalk5 + '\n';
                        docSource += '';
                    } else {
                        docSource += '' + i + '' + (plan9.checked ? "[claim]" + tsalk3[k] + "[/claim]" : "" + tsalk3[k] + "") + tsalk5 + '\n';
                    }
                }
                docSource += "[/*][/table]\n[/spoiler]";
//                docSource += "\n\n";
            }
            if (plan3.checked) {
                docSource += "\n[spoiler=⭐ Tabela]\n";
                docSource += tsal_text;
                docSource += '[/spoiler]';
            }
            if (!server.match(/uk/i) && plan2.checked) {
                docSource += "\n";
                docSource += "[spoiler=⭐ Scripts]\n";
                docSource += tsal3;
                docSource += "[/spoiler]";
            }

            docSource += '____________[b][code]HURRA!![/code][/b] [url=https://forum.tribalwars.com.br/index.php?threads/br-88-strike-team.335215/page-5#post-3658161][color=#700505][code]STRIKE Team[/code][/color][/url]';

            document.getElementById('plano_per').value = docSource;

        }


        function tsalkapone() {
            var tsalorder = document.getElementById('tsalorder').checked;
            var tsalres = document.getElementById('taCoords').value;
            if (tsalorder === true) {
                var tsalyo = tsalres.split(" ");
                var tsalex;
                tsalex = tsalyo.join('\n');
                document.getElementById('taCoords').value = tsalex;
            } else {
                var tsalyo = tsalres.split("\n");
                var tsalex;
                tsalex = tsalyo.join(' ');
                document.getElementById('taCoords').value = tsalex;
            }

        }

        function setCoords(xy) {
            count = xy.length;
            xy = xy.join(' ');
            document.getElementById("taCoords").value = xy;
            tsalkapone();
            document.getElementById("count").innerHTML = "<font color=maroon><b>" + count + "</b></font>";
        }

        function Tsalipeiros() {
            tsalscripts();
        }


        function main() {
            if ($('a:contains("' + lexpand + '")').length > 0) {
                $('a:contains("' + lexpand + '")')[0].click();
            }

            setTimeout(function getCoords() {
                var allTd = document.getElementsByTagName("TD");

                for (var i = 0; i < allTd.length; i++) {
                    if (/^\d+\|\d+$/.test(allTd[i].innerHTML)) {
                        coords.push(allTd[i].innerHTML);
                    }
                }
                sortByKont();
            }, 1100);
        }
        main();

    }


    if (Tsalactive) {
        var pageurltsal = window.location.href;
        var pageurl1 = pageurltsal.split("=");
        var pageid;
        if (pageurl1[3] !== undefined) {
            pageid = pageurl1[3];
        } else {
            pageid = game_data.player.ally;
        }
        var pageurltsal1 = pageurltsal.split("//");
        var pageurltsal2 = pageurltsal1[1].split("/");
        var pageurltsal3 = pageurltsal1[1].split(".");
        var pageurltsal5 = pageurltsal3[2].split("/");
        var pageurltsal4 = pageurltsal3[1] + "." + pageurltsal5[0];
        var tsal_market = game_data.market;
        var main_url = pageurltsal1[0] + "//" + pageurltsal2[0] + game_data.link_base_pure;
        var urlPrefix = "";
        if (game_data.market == "en") {
            urlPrefix = "";
        } else {
            urlPrefix = '.' + game_data.market;
        }


        var graphs = '<table id="tsalkaponemagic" width="100%" class="vis"><tbody><tr><th colspan="2"><center><font color="black"><b>Gráficos Disponíveis</b></font></center></th></tr>';
        graphs += '<tr><td><center><div id="spoiler"><input type="button" class="btn tsalbutton" value="TribalWarsMap.com" onclick="toggle_spoiler(this)"><div><span style="display:none">';
        graphs += '<img src="http://' + pageurltsal3[0] + '.tribalwarsmap.com/' + game_data.market + '/graph/tribe/' + pageid + '" title="TribalWarsMap.com"></span></div></div></center></td></tr><tr><td><center><div id="spoiler">';
        graphs += '<input type="button" class="btn tsalbutton" value="Gráfico de ODA" onclick="toggle_spoiler(this)"><div>';
        graphs += '<span style="display:none"><img src="http://' + pageurltsal3[0] + '.tribalwarsmap.com/' + game_data.market + '/graph/oda_tribe/' + pageid + '" title="TribalWarsMap.com"></span></div></div></center></td></tr><tr><td><center><div id="spoiler">';
        graphs += '<input type="button" class="btn tsalbutton" value="Gráfico de ODD" onclick="toggle_spoiler(this)"><div><span style="display:none">';
        graphs += '<img src="http://' + pageurltsal3[0] + '.tribalwarsmap.com/' + game_data.market + '/graph/odd_tribe/' + pageid + '" title="TribalWarsMap.com"></span></div></div></td></tr><tr><td><center><div id="spoiler">';
        graphs += '<input type="button" class="btn tsalbutton" value="Gráfico de Membros" onclick="toggle_spoiler(this)"><div><span style="display:none">';
        graphs += '<img src="http://www' + urlPrefix + '.twstats.com/image.php?type=tribessgraph&id=' + pageid + '&s=' + pageurltsal3[0] + '&graph=members" title="TWStats.com"></span></div></div></td></tr>';
        graphs += '<tr><th><center><font color="black"><b>Estatísticas Disponíveis</b></font></center></th></tr>';
        graphs += '<tr><td><a href="http://www' + urlPrefix + '.twstats.com/' + pageurltsal3[0] + '/index.php?page=tribe&id=' + pageid + '" target="_blank"><img src="graphic/welcome/ext.png"> Ir para o Perfil do TW~Stats</a></td></tr>';
        graphs += '<tr><td><a href="http://www' + urlPrefix + '.twstats.com/' + pageurltsal3[0] + '/index.php?page=tribe&id=' + pageid + '&mode=conquer_periods" target="_blank"><img src="graphic/welcome/ext.png"> Períodos de Conquistas</a></td></tr>';
        graphs += '<tr><td><a href="http://www' + urlPrefix + '.twstats.com/' + pageurltsal3[0] + '/index.php?page=tribe&mode=conquers&id=' + pageid + '" target="_blank"><img src="graphic/welcome/ext.png"> Histórico de Pontuação e OD</a></td></tr>';
        graphs += '<tr><td><a href="http://www' + urlPrefix + '.twstats.com/' + pageurltsal3[0] + '/index.php?page=tribe&id=' + pageid + '&mode=history" target="_blank"><img src="graphic/welcome/ext.png"> Conquistas</a></td></tr>';
        graphs += '<tr><td><a href="http://www' + urlPrefix + '.twstats.com/' + pageurltsal3[0] + '/index.php?page=tribe&id=' + pageid + '&mode=conquer_stats" target="_blank"><img src="graphic/welcome/ext.png"> Estatísticas de Conqusitas</a></td></tr>';
        graphs += '<tr><td><a href="http://www' + urlPrefix + '.twstats.com/' + pageurltsal3[0] + '/index.php?page=tribe&mode=tribe_changes&id=' + pageid + '" target="_blank"><img src="graphic/welcome/ext.png"> Trocas de Membros</a></td></tr>';
        graphs += '</tbody></table>';


        var tsalkaponecell = '';
        tsalkaponecell += '<div style="min-width: 800px;" class="target-select clearfix vis float_left"><h4><font color=darkred><center>## STRIKE OPÇÕES ##</center></font></h4>';
        tsalkaponecell += '<table id=tsalmenu class="vis" style="width: 100%"><tbody>';
        tsalkaponecell += '<tr><td><font color="maroon"><b>Clique para Mostrar/Ocultar as Estatísticas e/ou Gráficos de TRIBOS</b></font></td>';
        tsalkaponecell += '<td><span id="open1"><input type="button" value="Mostrar Gráficos e/ou Estatísticas" id="openf1" class="btn tsalbutton"></span><span id="close1" style="display:none">';
        tsalkaponecell += '<input class="btn tsalbutton" type="button" value="Ocultar Gráficos e/ou Estatísticas" id="closef1"></span></td></tr>';
        tsalkaponecell += '</tbody></table><span id="tsaldiag" style="display:none"><hr>' + graphs + '<hr></span></div>';

        if (!document.getElementById('selectedone')) {

            $('#content_value').append(tsalkaponecell);
        } else {
            UI.SuccessMessage('<font color=gold><b><center><u>## NOTIFICAÇÃO ##</u></center></b></font> <br><br> O Script Tribe & Player Stats está em Excecução', 5000);
        }
        /*==== register ====*/
        var script = {
            scriptname: 'Tribe & Player Stats',
            version: '1.0',
            author: 'Tsalkapone',
            email: 'tsalkapone@hotmail.com',
            broken: false
        };
        $.post(ScriptAPI.url, script);

        $("#openf1").click(function() {
            document.getElementById('close1').style.display = "";
            document.getElementById('open1').style.display = "none";
            document.getElementById('tsaldiag').style.display = "";
        });
        $("#closef1").click(function() {
            document.getElementById('close1').style.display = "none";
            document.getElementById('open1').style.display = "";
            document.getElementById('tsaldiag').style.display = "none";
        });

    }

    if (Tsalactive) {
        var pageurltsal = window.location.href;
        var pageurl1 = pageurltsal.split("=");
        var pageid;
        if (pageurl1[3] !== undefined) {
            pageid = pageurl1[3];
        } else {
            pageid = game_data.player.ally;
        }
        var pageurltsal1 = pageurltsal.split("//");
        var pageurltsal2 = pageurltsal1[1].split("/");
        var pageurltsal3 = pageurltsal1[1].split(".");
        var pageurltsal5 = pageurltsal3[2].split("/");
        var pageurltsal4 = pageurltsal3[1] + "." + pageurltsal5[0];
        var tsal_market = game_data.market;
        var main_url = pageurltsal1[0] + "//" + pageurltsal2[0] + game_data.link_base_pure;
        var urlPrefix = "";
        if (game_data.market == "en") {
            urlPrefix = "";
        } else {
            urlPrefix = '.' + game_data.market;
        }


        var graphs = '<table id="tsalkaponemagic" width="100%" class="vis"><tbody><tr><th colspan="2"><center><font color="black"><b>Gráficos Disponíveis</b></font></center></th></tr>';
        graphs += '<tr><td><center><div id="spoiler"><input type="button" class="btn tsalbutton" value="TribalWarsMap.com" onclick="toggle_spoiler(this)"><div><span style="display:none">';
        graphs += '<img src="http://' + pageurltsal3[0] + '.tribalwarsmap.com/' + game_data.market + '/graph/tribe/' + pageid + '" title="TribalWarsMap.com"></span></div></div></center></td></tr><tr><td><center><div id="spoiler">';
        graphs += '<input type="button" class="btn tsalbutton" value="Gráfico de ODA" onclick="toggle_spoiler(this)"><div>';
        graphs += '<span style="display:none"><img src="http://' + pageurltsal3[0] + '.tribalwarsmap.com/' + game_data.market + '/graph/oda_tribe/' + pageid + '" title="TribalWarsMap.com"></span></div></div></center></td></tr><tr><td><center><div id="spoiler">';
        graphs += '<input type="button" class="btn tsalbutton" value="Gráfico de ODD" onclick="toggle_spoiler(this)"><div><span style="display:none">';
        graphs += '<img src="http://' + pageurltsal3[0] + '.tribalwarsmap.com/' + game_data.market + '/graph/odd_tribe/' + pageid + '" title="TribalWarsMap.com"></span></div></div></td></tr><tr><td><center><div id="spoiler">';
        graphs += '<input type="button" class="btn tsalbutton" value="Gráfico de Membros" onclick="toggle_spoiler(this)"><div><span style="display:none">';
        graphs += '<img src="http://www' + urlPrefix + '.twstats.com/image.php?type=tribessgraph&id=' + pageid + '&s=' + pageurltsal3[0] + '&graph=members" title="TWStats.com"></span></div></div></td></tr>';
        graphs += '<tr><th><center><font color="black"><b>Estatísticas Disponíveis</b></font></center></th></tr>';
        graphs += '<tr><td><a href="http://www' + urlPrefix + '.twstats.com/' + pageurltsal3[0] + '/index.php?page=tribe&id=' + pageid + '" target="_blank"><img src="graphic/welcome/ext.png"> Ir para o Perfil do TW~Stats</a></td></tr>';
        graphs += '<tr><td><a href="http://www' + urlPrefix + '.twstats.com/' + pageurltsal3[0] + '/index.php?page=tribe&id=' + pageid + '&mode=conquer_periods" target="_blank"><img src="graphic/welcome/ext.png"> Períodos de Conquistas</a></td></tr>';
        graphs += '<tr><td><a href="http://www' + urlPrefix + '.twstats.com/' + pageurltsal3[0] + '/index.php?page=tribe&mode=conquers&id=' + pageid + '" target="_blank"><img src="graphic/welcome/ext.png"> Histórico de Pontuação e OD</a></td></tr>';
        graphs += '<tr><td><a href="http://www' + urlPrefix + '.twstats.com/' + pageurltsal3[0] + '/index.php?page=tribe&id=' + pageid + '&mode=history" target="_blank"><img src="graphic/welcome/ext.png"> Conquistas</a></td></tr>';
        graphs += '<tr><td><a href="http://www' + urlPrefix + '.twstats.com/' + pageurltsal3[0] + '/index.php?page=tribe&id=' + pageid + '&mode=conquer_stats" target="_blank"><img src="graphic/welcome/ext.png"> Estatísticas de Conqusitas</a></td></tr>';
        graphs += '<tr><td><a href="http://www' + urlPrefix + '.twstats.com/' + pageurltsal3[0] + '/index.php?page=tribe&mode=tribe_changes&id=' + pageid + '" target="_blank"><img src="graphic/welcome/ext.png"> Trocas de Membros</a></td></tr>';
        graphs += '</tbody></table>';


        var tsalkaponecell = '';
        tsalkaponecell += '<div id="tsal_magic" style="min-width: 800px;" class="target-select clearfix vis float_left"><h4><font color=darkred><center>## OPÇÕES ##</center></font></h4>';
        tsalkaponecell += "<center><img style='width:237px;height:227px; position:relative' src='https://i.imgur.com/j3jpjYV.png'></center>\n";
        tsalkaponecell += '<table id=tsalmenu class="vis" style="width: 100%"><tbody>';
        tsalkaponecell += '<tr><td><font color="maroon"><b>Clique para Mostrar/Ocultar as Estatísticas e/ou Gráficos de TRIBOS</b></font></td>';
        tsalkaponecell += '<td><span id="open1"><input type="button" value="Mostrar Gráficos e/ou Estatísticas" id="openf1" class="btn tsalbutton"></span><span id="close1" style="display:none">';
        tsalkaponecell += '<input class="btn tsalbutton" type="button" value="Ocultar Gráficos e/ou Estatísticas" id="closef1"></span></td></tr>';
        tsalkaponecell += '<tr><td><font color="maroon"><b>Clique para Mostrar/Ocultar o Designer de Tabela</b></font></td>';
        tsalkaponecell += '<td><span id="open2"><input type="button" value="Abrir Designer" id="openf2" class="btn tsalbutton"></span><span id="close2" style="display:none">';
        tsalkaponecell += '<input class="btn tsalbutton" type="button" value="Fechar Designer" id="closef2"></span></td></tr>';
        tsalkaponecell += '</tbody></table><span id="tsaldiag" style="display:none"><hr>' + graphs + '<hr></span></div>';

        if (!document.getElementById('selectedone')) {

            $('#content_value table:first').after(tsalkaponecell);
        } else {
            UI.SuccessMessage('<font color=gold><b><center><u>## NOTIFICAÇÃO ##</u></center></b></font> <br><br> O Script Tribe & Player Stats está em Excecução', 5000);
        }
        /*==== register ====*/
        var script = {
            scriptname: 'Tribe & Player Stats',
            /* COMEÇA O SCRIPT DE TRIBO */
            version: '1.0',
            author: 'Tsalkapone',
            email: 'tsalkapone@hotmail.com',
            broken: false
        };
        $.post(ScriptAPI.url, script);

        var tsalscript2 = "<script type='text/javascript'>var n1='Gráfico de Pontuação';var n2='Gráfico de Aldeias';var n3='Gráfico de ODA';var n4='Gráfico de ODD';";
        tsalscript2 += "var n5='Definir Gráficos';var config={showPoints:true,showVillages:true,showODA:true,showODD:true,width:'180px',height:'96px'};";
            /* SCRIPT QUE PUXA OS GRÁFICOS */
        tsalscript2 += "(window.main||self).$.getScript('https://dl.dropboxusercontent.com/s/ym0j4zqccailn1e/Tsalkapone.Tribe_stats.js',function(){var script=new RankingStats();script.execute(config);});void(0);</script>";
        $("head").append(tsalscript2);

        $("#openf1").click(function() {
            document.getElementById('close1').style.display = "";
            document.getElementById('open1').style.display = "none";
            document.getElementById('tsaldiag').style.display = "";
        });
        $("#closef1").click(function() {
            document.getElementById('close1').style.display = "none";
            document.getElementById('open1').style.display = "";
            document.getElementById('tsaldiag').style.display = "none";
        });
        $("#openf2").click(function() {
            document.getElementById('close2').style.display = "";
            document.getElementById('open2').style.display = "none";
            document.getElementById('tsaltab').style.display = "";
        });
        $("#closef2").click(function() {
            document.getElementById('close2').style.display = "none";
            document.getElementById('open2').style.display = "";
            document.getElementById('tsaltab').style.display = "none";
        });



        var l = [];
        var l1 = [];
        var l2 = [];
        var l3 = [];
        var l4 = [];

        var tsalinput = '';
        tsalinput += '<span style="display:none" id="tsaltab"><table class="vis" id="tsalpinakasmelwn" width="100%"><tr><th><font color="maroon" size="3" ><b><i><center>Projetar Tabela para Membros da Tribo</center></i></b></font></th></tr></table>';
        tsalinput += "<center><img style='width:237px;height:227px; position:relative' src='https://i.imgur.com/HFDXavN.png'></center>\n";

        tsalinput += '<table class="vis" width="100%"><tr><th><font color="darkred" width="30%" ><b>Inserir dados do Membro na Tabela</b></font></th><th><font color="darkred" width="70%"><b>Opções Costumizáveis</b></font></th></tr>';
        tsalinput += '<tr><td><input  type="checkbox" id=tsalkapone1  style="cursor:pointer" >&emsp;<b><font color="maroon">Nick do Jogador</font></b></td>';
        tsalinput += '<td><b><font color="maroon">Cor do Título:</font></b>&emsp;<input id="tsal_xrwma_paiktwn" type="color" value="#b22222"><br><b><font color="maroon">Título:</font></b>&emsp;<input id="tsal_keimeno_paiktwn" type="text" value="MEMBRO"></td></tr>';
        tsalinput += '<tr><td><input  type="checkbox" id=tsalkapone2  style="cursor:pointer" >&emsp;<b><font color="maroon">Posição na Tribo</font></b></td>';
        tsalinput += '<td><b><font color="maroon">Cor do Título:</font></b>&emsp;<input id="tsal_xrwma_thesis" type="color" value="#228b22"><br><b><font color="maroon">Título:</font></b>&emsp;<input id="tsal_keimeno_thesis" type="text" value="Nº"><br><b><font color="maroon">Cor de Texto das Linhas:</font></b>&emsp;<input id="tsal_xrwma_thesis2" type="color" value="#b22222"></td></tr>';
        tsalinput += '<tr><td><input  type="checkbox" id=tsalkapone3  style="cursor:pointer" >&emsp;<b><font color="maroon">Pontuação</font></b></td>';
        tsalinput += '<td><b><font color="maroon">Cor do Título:</font></b>&emsp;<input id="tsal_xrwma_pontwn" type="color" value="#ff0000"><br><b><font color="maroon">Título:</font></b>&emsp;<input id="tsal_keimeno_pontwn" type="text" value="PONTOS"><br><b><font color="maroon">Cor de Texto das Linhas:</font></b>&emsp;<input id="tsal_xrwma_pontwn2" type="color" value="#b22222"></td></tr>';

        tsalinput += '<tr><td><input  type="checkbox" id=tsalkapone4  style="cursor:pointer" >&emsp;<b><font color="maroon">Posição Mundial</font></b></td>';
        tsalinput += '<td><b><font color="maroon">Cor do Título:</font></b>&emsp;<input id="tsal_xrwma_kat" type="color" value="#8b008b"><br><b><font color="maroon">Título:</font></b>&emsp;<input id="tsal_keimeno_kat" type="text" value="POSIÇÃO"><br><b><font color="maroon">Cor de Texto das Linhas:</font></b>&emsp;<input id="tsal_xrwma_kat2" type="color" value="#b22222"></td></tr>';

        tsalinput += '<tr><td><input  type="checkbox" id=tsalkapone5  style="cursor:pointer" >&emsp;<b><font color="maroon">Aldeias do Jogador</font></b></td>';
        tsalinput += '<td><b><font color="maroon">Cor do Título:</font></b>&emsp;<input id="tsal_xrwma_xwriwn" type="color" value="#008000"><br><b><font color="maroon">Título:</font></b>&emsp;<input id="tsal_keimeno_xwriwn" type="text" value="ALDEIAS"><br><b><font color="maroon">Cor de Texto das Linhas:</font></b>&emsp;<input id="tsal_xrwma_xwriwn2" type="color" value="#b22222"></td></tr>';

        tsalinput += '</table>';

        tsalinput += '<table class="vis" id="tsalpinakasmelwn2" width="100%"><tr><th><font color="darkred" width="30%"><b>Inserir Colunas Adicionais</b></font></th><th width="70%"><font color="darkred" ><b>Opções Costumizáveis</b></font></th></tr>';

        tsalinput += '<tr><td><input  type="checkbox" id=tsalka1  style="cursor:pointer" >&emsp;<b><font color="maroon">Inserir uma Coluna para a Fortaleza em cada Linha</font></b>&emsp;</td>';
        tsalinput += '<td><b><font color="maroon">Cor do Título:</font></b>&emsp;<input id="tsal_xrwma_filis" type="color" value="#0000ff"><br><b><font color="maroon">Título:</font></b>&emsp;<input size="10" type="text" id="tsal_keimeno_filis" value="⚡DOAR"><br><b><font color="maroon">Inserir Recursos para Doação em cada Linha desta Coluna:</font></b>&emsp;<input size="10" type="text" id="tsalfili" placeholder="Deixe em Branco"></td></tr>';
        tsalinput += '<tr><td><input  type="checkbox" id=tsalka3  style="cursor:pointer" >&emsp;<b><font color="maroon">Inserir uma Coluna com o código [player] em cada Linha</font></b></td>';
        tsalinput += '<td><b><font color="maroon">Cor do Título:</font></b>&emsp;<input id="tsal_xrwma_paikti" type="color" value="#0000ff"><br><b><font color="maroon">Título:</font></b>&emsp;<input size="10" type="text" id="tsal_keimeno_paikti" value="JOGADOR"><br><b><font color="maroon">Inserir o NICK do jogador em cada Linha desta Coluna:</font></b>&emsp;<input size="10" type="text" id="tsalpaiktis" placeholder="NOME DOS JOGADORES"></td></tr>';
        tsalinput += '<tr><td><input  type="checkbox" id=tsalka2  style="cursor:pointer" >&emsp;<b><font color="maroon">Adicionar Mais Colunas</font></b></td>';
        tsalinput += '<td><b><font color="maroon">Cor do Título:</font></b>&emsp;<input id="tsal_xrwma_ep" type="color" value="#0000ff"><br><b><font color="maroon">Título:</font></b>&emsp;<input size="10" type="text" id="tsal_keimeno_ep" value="OK?"><br><b><font color="maroon">Quantidade:</font></b>&emsp;<input size="3" type="number" id=tsalstiles min="0"  placeholder="0">';
        tsalinput += '<br><b><font color="maroon">Cor de Texto das Linhas:</font></b>&emsp;<input id="tsal_xrwma_gr" type="color" value="#000000"><br><b><font color="maroon">Inserir Texto em cada Linha:</font></b>&emsp;<input size="50" type="text" id=tsalgrammes placeholder="Inserir Texto em cada Linha"></td></tr>';
        tsalinput += '<tr><td colspan="2"><center><input type="button" class="btn tsalbutton" value="Design de Tabela" id="Tsalyo"></center></td></tr>';
        tsalinput += '<tr><td colspan="2"><center><textarea cols="100" rows="10" id="result"></textarea></center></td></tr>';
        tsalinput += '<tr><td colspan="2"><center><span class="tsalkembed1"><img width="20px;" src="https://dl.dropboxusercontent.com/s/s9swak86tirwdpd/Tsalkapone.%20Warning.gif">&emsp;ATENÇÃO: Você não pode postar Textos/Tableas que contenham 1.000 ou mais <b>]</b> (Colchetes)</span></center></td></tr></table>';
        tsalinput += '</table></span>';

        $('#content_value table:first').after(tsalinput);
        /* Checkboxes */
        var tsalkapone1 = document.getElementById('tsalkapone1');
        var tsalkapone2 = document.getElementById('tsalkapone2');
        var tsalkapone3 = document.getElementById('tsalkapone3');
        var tsalkapone4 = document.getElementById('tsalkapone4');
        var tsalkapone5 = document.getElementById('tsalkapone5');

        /* Επιπλέον δεδομένα */
        var tsalka1 = document.getElementById('tsalka1');
        var tsalka2 = document.getElementById('tsalka2');
        var tsalka3 = document.getElementById('tsalka3');
        var Tsalkapone_φυλή = document.getElementById('tsalfili');
        var Tsalkapone_στήλη = document.getElementById('tsalstiles');
        var Tsalkapone_παίκτης = document.getElementById('tsalpaiktis');

        /* Χρώματα και κείμενα */
        var tsalxrwma1 = document.getElementById('tsal_xrwma_paiktwn');
        var tsalkeimeno1 = document.getElementById('tsal_keimeno_paiktwn');
        var tsalxrwma2 = document.getElementById('tsal_xrwma_thesis');
        var tsalkeimeno2 = document.getElementById('tsal_keimeno_thesis');
        var tsalxrwma3 = document.getElementById('tsal_xrwma_pontwn');
        var tsalkeimeno3 = document.getElementById('tsal_keimeno_pontwn');

        var tsalxrwm1 = document.getElementById('tsal_xrwma_thesis2');

        var tsalxrwm2 = document.getElementById('tsal_xrwma_pontwn2');

        var tsalxrwm3 = document.getElementById('tsal_xrwma_kat2');

        var tsalxrwm4 = document.getElementById('tsal_xrwma_xwriwn2');


        var tsalxrwma4 = document.getElementById('tsal_xrwma_kat');
        var tsalkeimeno4 = document.getElementById('tsal_keimeno_kat');
        var tsalxrwma5 = document.getElementById('tsal_xrwma_xwriwn');
        var tsalkeimeno5 = document.getElementById('tsal_keimeno_xwriwn');
        var tsalxrwma6 = document.getElementById('tsal_xrwma_filis');
        var tsalkeimeno6 = document.getElementById('tsal_keimeno_filis');
        var tsalxrwma7 = document.getElementById('tsal_xrwma_paikti');
        var tsalkeimeno7 = document.getElementById('tsal_keimeno_paikti');
        var tsalxrwma8 = document.getElementById('tsal_xrwma_ep');
        var tsalkeimeno8 = document.getElementById('tsal_keimeno_ep');
        var tsalxrwma9 = document.getElementById('tsal_xrwma_gr');
        var tsalkeimeno9 = document.getElementById('tsalgrammes');




        $('table tr').each(function(index) {
            var p = $(this).children('td.lit-item:first').children('a').text();
            if (p && p.length > 0) {
                l.push(p);
            }
        });


        function tsal() {
            $('table tr').each(function(index) {
                var p1 = $(this).children('td.lit-item:nth-of-type(2)').text();
                if (p1 && p1.length > 0) {
                    l1.push(p1);
                }
            });
        };
        tsal();


        function tsal2() {
            $('table tr').each(function(index) {
                var p2 = $(this).children('td.lit-item:nth-of-type(3)').text();
                if (p2 && p2.length > 0) {
                    l2.push(p2);
                }
            });
        };
        tsal2();



        function tsal3() {
            $('table tr').each(function(index) {
                var p3 = $(this).children('td.lit-item:nth-of-type(4)').text();
                if (p3 && p3.length > 0) {
                    l3.push(p3);
                }
            });
        };
        tsal3();


        function tsal4() {
            $('table tr').each(function(index) {
                var p4 = $(this).children('td.lit-item:nth-of-type(5)').text();
                if (p4 && p4.length > 0) {
                    l4.push(p4);
                }
            });
        };
        tsal4();


        $("#Tsalyo").click(function() {
            var t = "[table]\n";
            t += "[**]" + (tsalkapone2.checked ? "[b][color=" + tsalxrwma2.value + "]" + tsalkeimeno2.value + "[/color][/b][||]" : "");
            t += (tsalkapone1.checked ? "[b][color=" + tsalxrwma1.value + "]" + tsalkeimeno1.value + "[/color][/b]" : "") + (tsalkapone3.checked ? "[||][b][color=" + tsalxrwma3.value + "]" + tsalkeimeno3.value + "[/color][/b]" : "");
            t += (tsalkapone4.checked ? "[||][b][color=" + tsalxrwma4.value + "]" + tsalkeimeno4.value + "[/color][/b]" : "") + (tsalkapone5.checked ? "[||][b][color=" + tsalxrwma5.value + "]" + tsalkeimeno5.value + "[/color][/b]" : "") + (tsalka1.checked ? "[||][b][color=" + tsalxrwma6.value + "]" + tsalkeimeno6.value + "[/color][/b]" : "");
            t += (tsalka3.checked ? "[||][b][color=" + tsalxrwma7.value + "]" + tsalkeimeno7.value + "[/color][/b]" : "");



            for (var i = 0; i < Tsalkapone_στήλη.value; i++) {
                t += "[||][b][color=" + tsalxrwma8.value + "]" + tsalkeimeno8.value + "[/color][/b]";
            }
            t += "[/**]\n";
            for (var j = 0, j1 = 0, j2 = 0, j3 = 0, j4 = 0; j < l.length, j1 < l1.length, j2 < l2.length, j3 < l3.length, j4 < l4.length; j++, j1++, j2++, j3++, j4++) {
                t += "[*]" + (tsalkapone2.checked ? "" + l1[j1] + "[|]" : "");
                t += (tsalkapone1.checked ? "[player]" + l[j] + "[/player]" : "") + (tsalkapone3.checked ? "[|]" + l2[j2] +"" : "") + (tsalkapone4.checked ? "[|]" + l3[j3] + "" : "") + (tsalkapone5.checked ? "[|][b]" + l4[j4] + "[/b]" : "")+ (tsalka1.checked ? "[|][size=12]" + l4[j4]*5*7 +"K [/size][img]https://dsbr.innogamescdn.com/asset/e9e1997c/graphic//buildings/storage.png[/img]" : "");
                t += (tsalka3.checked ? "[|][player]" + Tsalkapone_παίκτης.value + "[/player]" : "");
                for (var i = 0; i < Tsalkapone_στήλη.value; i++) {
                    t += (tsalka2.checked ? "[|]" + tsalkeimeno9.value + "" : "");
                }
                t += "\n";
            }
            t += "[/table]\n";
            document.getElementById("result").value = t;
            $("#result").focus(function() {
                this.select();
            });
        });
    }
}
