var IE = document.all?true:false;
function isLetter(c)
{
  return ( ((c >= "a") && (c <= "z")) || ((c >= "A") && (c <= "Z")) )
}
function checa_caixaALTA(texto)
{
	var tam=texto.value.length;
	var alta=0;var letras=0;
	var porc=0.3;
	for(i=0;i<tam;i++)
	{
		if(isLetter(texto.value.substring(i,i+1))&&i!=0)
		{
			letras++;
			if(texto.value.substring(i,i+1).toUpperCase()==texto.value.substring(i,i+1))
				alta++;
		}
	}
	if((alta/letras)>porc)
		return true
	else
		return false;
}
function checa_proibidas(param)
{
	var proibidas=new Array('urgente','ajudem','socorro','help','leiam');
	var texto=param.value;
	texto=texto.toLowerCase();
	for(i=0;i<proibidas.length;i++)
	{
		if(texto.indexOf(proibidas[i])>-1)
			return true;
	}
	return false;
}
function trim(s)
{
	return s.replace(/^\s*|\s*$/g,"");
}
function valida(s)
{
	s = s.replace(/\*+/g,"*");
	s = s.replace(/\?+/g,"?");
	s = s.replace(/!+/g,"!");
	s = s.replace(/\.{2,}/g," ");
	s = s.replace(/ +/g," ");
	return s;
}
function checktopic(isso)
{
	isso.topicTitle.value=trim(isso.topicTitle.value);
	isso.topicTitle.value=valida(isso.topicTitle.value);
	if(checa_proibidas(isso.topicTitle)&&document.getElementById('forum_id').value!=11){alert("Você está tentando criar um título de tópico com palavras proibidas.\nAo invés de escrever, por exemplo 'Iniciante, socorro! Ibanez', prefira usar títulos mais intuitivos, como: 'Como trocar captadores da Ibanez RG-350?.'");isso.topicTitle.value='';isso.topicTitle.focus();return false;}
	else if(isso.topicTitle.value.split(' ').length<3){alert('O título do seu tópico deve possuir no mínimo 3 palavras.');isso.topicTitle.focus();return false;	}
	else if(isso.topicTitle.value.length<15){alert('O título do seu tópico deve conter no mínimo 15 caracteres.');isso.topicTitle.focus();return false;}

	else if(checa_caixaALTA(isso.topicTitle)){alert('Não permitimos títulos de tópicos com todas as letras maiúsculas. Favor verificar.');isso.topicTitle.focus();return false;}
	else{return confirm("Por favor, confirme:\n\n-Você já fez uma busca para o assunto que está publicando?\n-Seu tópico está claro e de acordo com as regras do site?");isso.submittopic.disabled=true;}
}
function insertAtCursor(myField, myValue, bbCode1, bbCode2, endOfLine)
{
	var bbb;
	if(bbCode1=='[url=null]') { bbCode1=''; bbCode2=''; }
	if(bbCode1=='[imgs]' && myValue==null) { bbCode1=''; bbCode2=''; myValue=''; }
	if (document.selection)
	{
	//IE support
		var str = document.selection.createRange().text;
		myField.focus();
		sel = document.selection.createRange();
		sel.text = bbCode1 + myValue + bbCode2 + endOfLine;
		if(myValue=='')
		{
			bbb=bbCode2.length;
			sel.moveStart('character',-bbb);
			sel.moveEnd('character',-bbb); }
sel.select();
return;
}
//MOZILLA/NETSCAPE support
else if (myField.selectionStart || myField.selectionStart == '0') {
var startPos = myField.selectionStart;
var endPos = myField.selectionEnd;
var bbb2, bbV;
if(myValue=='') myValue = myField.value.substring(startPos, endPos);
myField.value = myField.value.substring(0, startPos) + bbCode1 + myValue + bbCode2 + endOfLine + myField.value.substring(endPos, myField.value.length);
if(myValue=='') { bbb=bbCode1.length; myField.selectionStart=startPos+bbb; myField.selectionEnd=endPos+bbb; }
else { bbb=bbCode1.length; bbb2=bbCode2.length; bbV=myValue.length; myField.selectionStart=startPos+bbV+bbb+bbb2; myField.selectionEnd=startPos+bbV+bbb+bbb2; }
//myField.focus();
return;
} else {
myField.value += myValue;
return;
}
}
/* RC5
function paste_strinL(strinL, isQuote, bbCode1, bbCode2, endOfLine){
if((isQuote==1 || isQuote==2) && strinL=='') alert(l_quoteMsgAlert);
else{
if (isQuote==1) {
bbCode1='[i]'; bbCode2='[/i]'; endOfLine='\n';
}
if (isQuote==2) {
bbCode1='[b]'; bbCode2='[/b]'; endOfLine='\n';
}
var isForm=document.forms["postMsg"];
if (isForm) {
var input=document.forms["postMsg"].elements["postText"];
insertAtCursor(input, strinL, bbCode1, bbCode2, endOfLine);
}
else alert(l_accessDenied);
}
}
*/
/*
function paste_strinL(strinL,isQuote){
if(strinL=='') alert('Por favor, selecione algum texto primeiro.');
else{
if (isQuote==1) {
strinL='[i]'+strinL+'[/i]'+'\n';
}
if (isQuote==2) {
strinL='[b]'+strinL+'[/b]'+'\n';
}
else if (isQuote==9) {
strinL=strinL+'[/url]'+'\n';
}
var isForm=document.forms["postMsg"];
if (isForm) {
var input=document.forms["postMsg"].elements["postText"];
input.value=input.value+strinL;
}
else alert('{$l_accessDenied}');
}
}
*/
function paste_strinL(strinL,isQuote){
if(strinL=='') alert('Por favor, selecione algum texto primeiro.');
else{
if (isQuote==1) {
strinL='[i]'+strinL+'[/i]'+'\n';
}
if (isQuote==2) {
strinL='[b]'+strinL+'[/b]'+'\n';
}
if (isQuote==9) {
strinL=strinL+'[/url]'+'\n';
}
if (isQuote==10) {
coloca_tag('[i]','[/i]');
}
if (isQuote==20) {
coloca_tag('[b]','[/b]');
}
if (isQuote==30) {
coloca_tag('[u]','[/u]');
}
if (isQuote==40) {
coloca_tag('strinL','[/utube]');
}
else if (isQuote==90) {
coloca_tag(strinL,'[/url]');
}
var isForm=document.forms["postMsg"];
if(isQuote!=10 && isQuote!=20 && isQuote!=30 && isQuote!=40 && isQuote!=90){
if (isForm) {
var input=document.forms["postMsg"].elements["postText"];
input.value=input.value+strinL;
}
//else alert('{$l_accessDenied}');
else alert('Acesso Negado\n\nEste tópico provavelmente está fechado.');
}
}
}

function pasteSel() {
if(document.getSelection) selection=document.getSelection();
else if(document.selection) selection=document.selection.createRange().text;
else if(window.getSelection) selection=window.getSelection();
else selection='';
}


function coloca_tag(tag1,tag2) {

  var x=document.forms["postMsg"].elements["postText"];
  if(IE)
  {
  	var range = document.selection.createRange();
  	if(range.text.length>=1)
  	{
     if (range.parentElement() == x)
     { range.text = tag1 + range.text + tag2; range.select();}
  	}
  	else
  	{
      x.value+=tag1+tag2;	
  	}   
  }
  else
  {
  	//if(x.selectionStart==x.selectionEnd)
  	//{
  	// x.value+=tag1+tag2;
  	//}
  	//else
  //	{
  	var offset = tag1.length + tag2.length;
    x.value=x.value.substring(0,x.selectionStart)+tag1+x.value.substring(x.selectionStart,x.selectionEnd)+tag2+x.value.substring(x.selectionEnd,x.value.length);
    x.selectionEnd = x.selectionEnd + offset;
    x.selectionStart = x.selectionEnd; 
  	//}
  }
  x.focus();
}
function submitForm(){
var pf=document.forms['postMsg'];
var ftitle=false, ftext=false, flogin=false, fpass=false, user_usr='', user_pwd='', topicTitle='', postText='', fsubmit=true;
if(pf.elements['user_usr']) { flogin=true; user_usr=trimTxt(pf.elements['user_usr'].value); }
if(pf.elements['user_pwd']) { fpass=true; user_pwd=trimTxt(pf.elements['user_pwd'].value); }
if(pf.elements['postText']) { ftext=true; postText=trimTxt(pf.elements['postText'].value); }
if(pf.elements['topicTitle']) { ftitle=true; topicTitle=trimTxt(pf.elements['topicTitle'].value); }
if(pf.elements['CheckSendMail'] && pf.elements['CheckSendMail'].checked) { tlength=0; }

if(flogin && fpass && user_usr!='' && user_pwd!='') fsubmit=true;
else if(flogin && fpass && anonPost==0 && user_pwd=='') fsubmit=false;
else if(ftext && postText.length<tlength) fsubmit=false;
else if(ftitle && topicTitle.length<tlength) fsubmit=false;

if(fsubmit) { pf.elements['subbut'].disabled=true; document.forms['postMsg'].submit(); } else { alert(l_accessDenied); return; }
}

function trimTxt(s) {
while (s.substring(0,1) == ' ') {
s = s.substring(1,s.length);
}
while (s.substring(s.length-1,s.length) == ' ') {
s = s.substring(0,s.length-1);
}
return s;
}
