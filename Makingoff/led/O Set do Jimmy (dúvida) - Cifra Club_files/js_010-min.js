function urlMakerParser(e){if(void 0==e.lastChild.src){var t=document.createElement("br"),a=document.createElement("img");return a.src=e,e.appendChild(t),e.appendChild(a),a.width>650&&(a.width=650),!1}return!0}function repEls(){}function opn(){}function posEls(){}function expandeBanner(){if(0==banner){var e,t=document.getElementById("fb").childNodes;for(e in t){var a=t[e];if(a&&/google_ads/.test(a.id)){banner=a.firstChild;break}}}banner.style.height="300px"}function retraiBanner(){if(0==banner){var e,t=document.getElementById("fb").childNodes;for(e in t){var a=t[e];if(a&&/google_ads/.test(a.id)){banner=a.firstChild;break}}}banner.style.height="60px"}function getQueryParams(e){e=e.split("+").join(" ");for(var t,a={},o=/[?&]?([^=]+)=([^&]*)/g;t=o.exec(e);)a[decodeURIComponent(t[1])]=decodeURIComponent(t[2]);return a}function getCookie(e){for(var t=e+"=",a=document.cookie.split(";"),o=0;o<a.length;o++){for(var r=a[o];" "==r.charAt(0);)r=r.substring(1);if(-1!=r.indexOf(t))return r.substring(t.length,r.length)}return""}function pban(e,t){{var a=window.location.pathname,o=parseInt(a.replace(/([^0-9])|([0-9]{3,})/g,"")),r="forum",i=(Math.floor(2*Math.random()+1),new Date);100*Math.random()}try{{getQueryParams(document.location.search)}}catch(n){}if(1==parseInt(e))document.write('<script type="text/javascript" src="http://ad.br.doubleclick.net/adj/br.terra.cifraclub/subs;sz=138x238;ord=" + Num + "?"></script><script src="http://adserver.terra.com.br/checkm8scripts/checkm8_init_1.js"></script>');else if(4==e){if(i>=new Date("09/02/2015")&&i<=new Date("09/11/2015")&&-1!==a.indexOf("/forum/3/"))return document.getElementById("fb").innerHTML='<img width="1" height="1" src="/conta_cliques.php?id=oc_habro_forum_06_15_super_v" /><a href="/conta_cliques.php?id=oc_habro_forum_06_15_super_c" target="_blank"><img src="/img/ads/oc_habro_forum_06_15/super.jpg" /></a>',document.getElementById("fb").style.left=parseInt(152+(document.body.clientWidth-800)/2)+"px",document.getElementById("fb").style.display="block",t&&(document.getElementById("fb").style.left="50%",document.getElementById("fb").style.marginLeft="-364px",$("#topo, #dropdown").addClass("patrocinio")),void($(".banner_form").length&&$(".banner_form").html('<img width="1" height="1" src="/conta_cliques.php?id=oc_habro_forum_06_15_square_v" /><a href="/conta_cliques.php?id=oc_habro_forum_06_15_square_c" target="_blank"><img src="/img/ads/oc_habro_forum_06_15/square.jpg" /></a>'));if(i>=new Date("08/10/2015")&&i<=new Date("09/08/2015")&&(-1!=a.indexOf("/forum/4/")||-1!=a.indexOf("/forum/8/")||-1!=a.indexOf("/forum/9/")||-1!=a.indexOf("/forum/16/"))){var c;return i>=new Date("08/10/2015")&&i<=new Date("08/16/2015")?c="ur":i>=new Date("08/17/2015")&&i<=new Date("08/23/2015")?c="tf":i>=new Date("08/24/2015")&&i<=new Date("09/08/2015")&&(c="ag"),document.getElementById("fb").innerHTML='<img width="1" height="1" src="/conta_cliques.php?id=oc_forum_yamaha_08_2015_super_'+c+'_v" /><a href="/conta_cliques.php?id=oc_forum_yamaha_08_2015_super_'+c+'_c" target="_blank"><img src="/img/ads/oc_yamaha_08_2015/'+c+'_super.jpg?v=3" /></a>',document.getElementById("fb").style.left=parseInt(152+(document.body.clientWidth-800)/2)+"px",document.getElementById("fb").style.display="block",t&&(document.getElementById("fb").style.left="50%",document.getElementById("fb").style.marginLeft="-364px",$("#topo, #dropdown").addClass("patrocinio")),void($(".banner_form").length&&$(".banner_form").html('<img width="1" height="1" src="/conta_cliques.php?id=oc_forum_yamaha_08_2015_square_'+c+'_v" /><a href="/conta_cliques.php?id=oc_forum_yamaha_08_2015_square_'+c+'_c" target="_blank"><img src="/img/ads/oc_yamaha_08_2015/'+c+'_square.jpg?v=3" /></a>'))}}isNaN(o)?r+="/"==a?"_home":"_gral":r="articles",t||document.write('<script src="http://ad.doubleclick.net/adj/br.terra.cifraclub/'+r+";sz="+(t?"468x60":"728x90")+";kw=top;dcopt=ist;ord="+Num+'?"></script><img src="http://uv.terra.com.br/UV?c='+uv_c+"&ord="+uv_num+'" width="1" height="1" border="0" alt="">');var l=parseInt(300+(document.body.clientWidth-800)/2);t||(l-=148,document.getElementById("fb").style.top="46px"),document.getElementById("fb").style.left=l+"px",document.getElementById("fb").style.display="block",$(window).resize(function(){var e=parseInt(300+(document.body.clientWidth-800)/2);t||(e-=148),document.getElementById("fb").style.left=e+"px"})}function vaiad(e,t){google_ad_client="pub-7284698113143250",1==e?(google_ad_width=728,google_ad_height=90,google_ad_format="728x90_as",google_ad_type="text",google_ad_channel="",google_color_border="FBF9F9",google_color_bg="FBF9F9",google_color_link="666666",google_color_url="666666",google_color_text="666666",google_alternate_ad_url="http://smartad.mercadolivre.com.br/jm/SmartAd?tool=1632433&creativity=36801&new=Y&ovr=N&bgcol=FBF9F9&brdcol=FBF9F9&txtcol=666666&lnkcol=666666&hvrcol=3366FF&prccol=666666&word=guitarra&word=ibanez&word=fender&site=MLB"):(google_ad_width=468,google_ad_height=60,google_ad_format="468x60_as",google_ad_type="text",google_ad_channel="",google_color_border=void 0==t?"E9EFF4":"FFFFFF",google_color_bg=void 0==t?"E9EFF4":"FFFFFF",google_color_link="006699",google_color_text="000000",google_color_url="006699",google_alternate_ad_url="http://smartad.mercadolivre.com.br/jm/SmartAd?tool=1632433&creativity=36801&new=Y&ovr=N&bgcol=FBF9F9&brdcol=FBF9F9&txtcol=666666&lnkcol=666666&hvrcol=3366FF&prccol=666666&word=guitarra&word=ibanez&word=fender&site=MLB")}function getXmlHttpRequestObject(){return window.XMLHttpRequest?new XMLHttpRequest:window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):void 0}function searchSuggest(){if(4==searchReq.readyState||0==searchReq.readyState){var e=escape(document.getElementById("txtSearch").value);if(e.length<3)return!1;var t=escape(document.getElementById("forum_id").value);searchReq.open("GET","/searchSuggest.php?forum="+t+"&search="+e,!0),searchReq.onreadystatechange=handleSearchSuggest,searchReq.send(null)}}function handleSearchSuggest(){if(document.getElementById("ajax").style.visibility="visible",document.getElementById("ajax").style.zIndex=9,4==searchReq.readyState){var e=document.getElementById("ajax");e.innerHTML="";var t=searchReq.responseText.split("\n");if(e.innerHTML+="<h3>Tópicos relacionados</h3>",t[0]>0){var a="";for(i=1;i<t.length-1;i++)a+='<li><a target="_blank"href="/forum/'+t[i]+"</a></li>";e.innerHTML+="<small>"+t[0]+" resultados"+(10==t[0]?' (<a href="/?action=busca&boolean=2&forum'+escape(document.getElementById("forum_id").value)+"=1&q="+escape(document.getElementById("txtSearch").value)+'">veja mais</a>)':"")+"</small><ul>"+a+"</ul>"}else e.innerHTML+="<small>Nenhum tópico encontrado. Digite mais palavras para realizarmos uma nova busca</small><br/>";e.innerHTML+="<div id='info'>Contribua para a organização do fórum.<br/>Não crie tópicos duplicados.</div>"}}function youtube(e){var t=e.indexOf("v=");if(t>=0&&(e=e.substring(t+2)),11!=e.length){var t=e.indexOf("&");t>=0&&(e=e.substring(0,11))}return 11==e.length?paste_strinL("[utube]"+e+"[/utube]",0,"","",""):void alert("Desculpe, verifique o link ou ID digitado e tente novamente.")}function utube(e){document.write('<iframe width="620" height="380" src="https://www.youtube.com/embed/'+e+'" frameborder="0" allowfullscreen></iframe>')}function cria_denuncia(e,t,a){x=document.getElementById(e);var o="";o="<div style='visibility: visible; z-index: 1;'id='ajax'><a class='fechar' href='#' onclick='fechar_denuncia(\""+e+"\");return false;'/></a><h3>Justificar denúncia</h3><textarea class='frm' id='justificativa'></textarea><br clear='all'/>",o+=1!=t?"<input type='checkbox'class='check'id='c1'value='1'><label for='c1' name='op1'>Brigas, termos ofensivos, intolerância, pirataria, etc.</label><br clear='all'/><input type='checkbox'class='check'id='c2'value='2'><label for='c2' name='op2'>Propaganda ou comercialização</label><br clear='all'/><input type='checkbox'class='check'id='c3'value='3'><label for='c3' name='op3'>Contém flood, spam ou não se relaciona ao assunto do tópico</label><br clear='all'/>":"<input type='checkbox'class='check'id='c1'value='1'><label for='c1' name='op1'>Propaganda ou comercialização</label><br clear='all'/><input type='checkbox'class='check'id='c2'value='2'><label for='c2' name='op2'>Ofensas, brigas, intolerância, etc.</label><br clear='all'/><input type='checkbox'class='check'id='c3'value='3'><label for='c3' name='op3'>Tópico repetido (assunto já debatido exaustivamente)</label><br clear='all'/><input type='checkbox'class='check'id='c4'value='3'><label for='c4' name='op4'>Tópico em branco, sem objetivo, com spam ou flood</label><br clear='all'/>",o+="<input class='inputButton2' type='button' value='Continuar >>' onclick='denunciar("+e+","+t+","+a+");return false;'/><div id='info'>Antes de efetuar uma denúncia verifique sua legitimidade nas <a href='http://forum.cifraclub.com.br/?action=regras'target='_blank'>regras de uso do site</a>.</div></div>",x.innerHTML=o,""!=ultimo_id&&ultimo_id!=e&&(document.getElementById(ultimo_id).innerHTML=""),ultimo_id=e}function denunciar(e,t,a){if(4==searchReq.readyState||0==searchReq.readyState){var o=document.getElementById("justificativa").value;if(o.length<20)return alert("É necessário enviar uma justificativa concreta sobre a denúncia."),!1;var r="",n=3;for(1==t&&(n=4),i=1;i<=n;i++){var c=document.getElementById("c"+i);1==c.checked&&(r+=i+",")}searchReq.open("GET","/denunciar.php?justificativa="+o+"&tipo="+t+"&motivos="+r+"&user_id="+a+"&post_id="+e,!0),searchReq.onreadystatechange=mostra_resultado,searchReq.send(null)}}function cria_balao(e,t,a,o){var r="balao"+e,i=document.getElementById("votar"+e).parentNode.parentNode,n=document.createElement("span");n.setAttribute("id",r),i.insertBefore(n,i.childNodes[0]);var c=document.getElementById(r),l="";l='<div class="bal" style="margin: 15px 31px;"><span>Votar</span><a title="Boa resposta! =)" href="#" onclick="votar('+e+","+t+",1,"+a+",'"+o+'\');return false;">Positivo</a><a title="Resposta fraca! =(" style="background-image: url(/voto_no.gif);" href="#"  onclick="votar('+e+","+t+",-1,"+a+",'"+o+"');return false;\">Negativo</a></div>",c.innerHTML=l,""!=ultimo_id_balao&&ultimo_id_balao!=r&&(document.getElementById(ultimo_id_balao).innerHTML=""),ultimo_id_balao=r}function votar(e,t,a,o,r){if(4==votando.readyState||0==votando.readyState){votando.open("GET","/votar.php?tipo="+a+"&user_id="+t+"&post_id="+e+"&topic_id="+o+"&checkup="+r,!0),document.getElementById("balao"+e).innerHTML="";var n=document.createElement("span");n.innerHTML="Votar",n.setAttribute("id","votar"+e);var c=document.getElementById("votar"+e).parentNode,l=0,s="votar"+e;for(i=0;i<=c.childNodes.length;i++)if(c.childNodes[i].id==s){l=i;break}c.insertBefore(n,c.childNodes[l]),document.getElementById(s).parentNode.removeChild(document.getElementById(s)),votando.onreadystatechange=mensagem_voto,votando.send(null)}}function mostra_resultado(){if(4==searchReq.readyState){var e=document.getElementById("ajax");e.innerHTML="",e.innerHTML=searchReq.responseText}}function mensagem_voto(){if(4==votando.readyState){var e=votando.responseText.split("|");if(""==e[1])alert(e[0]);else{var t=-1;if(e[2]>=1){for(i=0;i<posts_pagina.length;i++)posts_pagina[i]==e[3]&&(t=i);0>t&&(posts_pagina.push(e[3]),posts_pagina.sort(function(e,t){return e-t}))}else{for(i=0;i<posts_pagina.length;i++)if(posts_pagina[i]==e[3]){posts_pagina.splice(i,1);break}var a=document.getElementById("pontuacao"+e[3]);void 0!=a&&a.parentNode.removeChild(a)}for(i=0;i<posts_pagina.length;i++)e[3]==posts_pagina[i]&&(posts_pontos[posts_pagina[i]]=e[2]);cria_quadrinhos(),e[2]<1&&alert(e[0]+e[1])}}}function gera_pontuacao(e,t,a,o){var r=document.getElementById("pontuacao"+t);if(void 0==r){var i=document.getElementById("votar"+t).parentNode,n=document.createElement("span");n.setAttribute("id","pontuacao"+t),i.insertBefore(n,i.childNodes[0]),r=document.getElementById("pontuacao"+t)}if(e>=1){if(r.innerHTML="<div id='quadrinho"+t+"' class='voto"+(1==e?"":"s")+"'><b title='Esta mensagem foi marcada como útil "+e+" vez' id='textovoto"+t+"'>"+e+"</b></div>",a==t){var c=getXmlHttpRequestObject();c.open("GET","/busca_post.php?tipo=2&post_id="+t+"&topic_id="+id_topico,!0),c.onreadystatechange=function(){4==c.readyState&&(document.getElementById("quadrinho"+t).innerHTML+="<a class='prev' title='Anterior com votos' onclick='"+(0==c.responseText?'alert("Não existe tópicos com votos antes deste.");return false;':'self.location="/?action=search&loc=1&topic='+id_topico+"&forum="+id_forum+"&page="+c.responseText+'"')+"' href='#"+a+"'/></a>")},c.send(null)}else a>0&&(document.getElementById("quadrinho"+t).innerHTML+="<a class='prev' title='Anterior com votos' href='#"+a+"'/></a>");if(o==t){var l=getXmlHttpRequestObject();l.open("GET","/busca_post.php?tipo=1&post_id="+t+"&topic_id="+id_topico,!0),l.onreadystatechange=function(){4==l.readyState&&(document.getElementById("quadrinho"+t).innerHTML+="<a class='next' title='Próxima com votos' onclick='"+(0==l.responseText?'alert("Não existem tópicos com votos depois deste.");return false;':'self.location="/?action=search&loc=1&topic='+id_topico+"&forum="+id_forum+"&page="+l.responseText+'"')+"' href='#"+o+"'/></a>")},l.send(null)}else o>0&&(document.getElementById("quadrinho"+t).innerHTML+="<a class='next' title='Próxima com votos' href='#"+o+"'/></a>")}else r.innerHTML=""}function cria_quadrinhos(){var e=0,t=0;for(i=0;i<posts_pagina.length;i++)e=0==i&&0==pagina?0:void 0==posts_pagina[i-1]?posts_pagina[i]:posts_pagina[i-1],t=0==pagina&&i==posts_pagina.length-1&&total_pontos_pag>=total_pontos?0:void 0==posts_pagina[i+1]?posts_pagina[i]:posts_pagina[i+1],gera_pontuacao(posts_pontos[posts_pagina[i]],posts_pagina[i],e,t)}function fechar_denuncia(e){document.getElementById(e).innerHTML=""}function mostra_foruns(e){"link"==e&&(mostra=3);var t=document.getElementById("dropdown");gC("fcc")?t.style.left="50%":t.style.left="50%",t.style.display="link"==e?"block":"none"}function mostra_banner(e){document.getElementById("fb").style.display=e?"block":"none"}function contador_regressivo(){0==mostra?(mostra_foruns(),clearTimeout(contador),contador=0):mostra>0&&3!=mostra&&5!=mostra?mostra--:3==mostra?mostra_foruns("link"):5==mostra&&(document.getElementById("dropdown").style.display="block",gC("fcc")?menu.style.left="55%":menu.style.left="50%"),contador=setTimeout("contador_regressivo()",500)}function rand(e,t){var a=arguments.length;if(0==a)e=0,t=2147483647;else if(1==a)throw new Error("Warning: rand() expects exactly 2 parameters, 1 given");return Math.floor(Math.random()*(t-e+1))+e}function gC(e){var t=document.cookie,a=e+"=",o=t.indexOf("; "+a);if(-1==o){if(o=t.indexOf(a),0!=o)return null}else o+=2;var r=t.indexOf(";",o);return-1==r&&(r=t.length),unescape(t.substring(o+a.length,r))}function toggle_bt(){jQuery("ul.lst-bcr").hasClass("on2")||jQuery("ul.lst-bcr").addClass("on2"),jQuery("#bt").toggleClass("ativo")}function anima_menu(e){$("#menu_abas").animate({left:e+"px"},"fast")}function versao_classica(){var e=new Date;return e.setTime(e.getTime()+864e5),e=";expires="+e.toUTCString(),document.cookie="mob=1"+e+"; path=/;domain=.forum.cifraclub.com.br",window.location.reload(),!1}Num=Math.floor(1e6*Math.random());var abc=Math.random()+"",num=abc.substring(2,abc.length),uv_num=Math.floor(1e6*Math.random()),uv_c="cifraclub",posts_pagina=[],posts_pontos=[],total_pontos_pag=0,total_pontos=0,pagina=0,orion=!1,orionbat=!1,orionamp=!1,randomico=Math.random(),swf="/topodepg.swf",banner=!1,searchReq=getXmlHttpRequestObject(),votando=getXmlHttpRequestObject(),ultimo_id="",ultimo_id_balao="",mostra=box_login=0,contador=0;$(document).ready(function(){var e=$("#menu_abas");$("#busca_cnt .tabs > a").on("click",function(){if("tab_prev"==$(this).attr("class"))anima_menu(0);else if("0"==e.position().left)anima_menu(-834);else{if("-834"!=e.position().left)return!1;anima_menu(-1105)}}),$(document).keydown(function(e){try{if(/textarea|select/i.test(e.target.nodeName)||/text|password/i.test(e.target.type))return;37==e.keyCode&&1==e.shiftKey&&$(".pag_prev").length?window.location.href=$(".pag_prev").attr("href"):39==e.keyCode&&1==e.shiftKey&&$(".pag_next").length&&(window.location.href=$(".pag_next").attr("href"))}catch(e){}}),$(".busca_especifico").click(function(){var e=$(this);if(e.parent().hasClass("on"))return!1;var t=$("#q").val(),a=e.find("i").attr("class");return-1!=a.indexOf("musica")&&(t+=escape(' site:forum.cifraclub.com.br inurl:/forum/9/ -intitle:"Fórum Música em Geral - Cifra Club"')),-1!=a.indexOf("guitarra")&&(t+=escape(' site:forum.cifraclub.com.br inurl:/forum/3/ -intitle:"Fórum Guitarra - Cifra Club"')),-1!=a.indexOf("violao")&&(t+=escape(' site:forum.cifraclub.com.br inurl:/forum/4/ -intitle:"Fórum Violão - Cifra Club"')),-1!=a.indexOf("pedais")&&(t+=escape(' site:forum.cifraclub.com.br inurl:/forum/7/ -intitle:"Fórum Pedais & Pedaleiras - Cifra Club"')),-1!=a.indexOf("ampli")&&(t+=escape(' site:forum.cifraclub.com.br inurl:/forum/10/ -intitle:"Fórum Amplificadores - Cifra Club"')),-1!=a.indexOf("cbaixo")&&(t+=escape(' site:forum.cifraclub.com.br inurl:/forum/2/ -intitle:"Fórum Contra-Baixo - Cifra Club"')),-1!=a.indexOf("teclado")&&(t+=escape(' site:forum.cifraclub.com.br inurl:/forum/8/ -intitle:"Fórum Teclado - Cifra Club"')),-1!=a.indexOf("bateria")&&(t+=escape(' site:forum.cifraclub.com.br inurl:/forum/6/ -intitle:"Fórum Bateria - Cifra Club"')),-1!=a.indexOf("canto")&&(t+=escape(' site:forum.cifraclub.com.br inurl:/forum/1/ -intitle:"Fórum Canto - Cifra Club"')),-1!=a.indexOf("gaita")&&(t+=escape(' site:forum.cifraclub.com.br inurl:/forum/5/ -intitle:"Fórum Gaita - Cifra Club"')),-1!=a.indexOf("sax")&&(t+=escape(' site:forum.cifraclub.com.br inurl:/forum/15/ -intitle:"Fórum Sax - Cifra Club"')),-1!=a.indexOf("gravacao")&&(t+=escape(' site:forum.cifraclub.com.br inurl:/forum/16/ -intitle:"Fórum Gravação e Home Studio - Cifra Club"')),-1!=a.indexOf("merudita")&&(t+=escape(' site:forum.cifraclub.com.br inurl:/forum/13/ -intitle:"Fórum Música Erudita - Cifra Club"')),-1!=a.indexOf("divulgue")&&(t+=escape(' site:forum.cifraclub.com.br inurl:/forum/14/ -intitle:"Fórum Divulgue suas músicas - Cifra Club"')),-1!=a.indexOf("guitarbattle")&&(t+=escape(' site:forum.cifraclub.com.br inurl:/forum/12/ -intitle:"Fórum Guitar Battle - Cifra Club"')),-1!=a.indexOf("offtopic")&&(t+=escape(' site:forum.cifraclub.com.br inurl:/forum/11 -intitle:"Fórum OFF TOPIC - Cifra Club"')),$("iframe[name=googleSearchFrame]").attr("src","http://www.google.com.br/cse?q="+t+"&sa=Buscar&domains=forum.cifraclub.com.br&sitesearch=forum.cifraclub.com.br&cx=partner-pub-7284698113143250%3A7103296851&forid=1&action=buscagoogle&ie=UTF-8&oe=UTF-8&cof=FORID%3A11&hl=pt&ad=n9&num=10"),$("#menu_abas li.on").removeClass("on"),e.parent().addClass("on"),!1}),SS.ccidbar.onLogin=function(){document.location.reload()}});