function checkUsername(){
  var username = el.value;
  if (username.length<5 ){
    elMsg.className ='warning';
    elMsg.textContent ='Not log enough,yet...';
  }else {
    elMsg ='';
  }
}
function tipUsername (){
  elMsg = 'tip';
  elMsg.innerHTML='username must be at least 5 character';
}
var el = document.getElementById('username');
var elMsg = document.getElementById('feedback');
el.addEventListener('focus',tipUsername,false);
el.addEventListener('Blur',checkUsername,false);

