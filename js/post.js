let btnCmnt=document.getElementById('btnComment')
let cmntPost=document.getElementById('list')

let bodydes=document.getElementsByClassName('bodydes')
let editId=document.getElementById('editId')
let PostEditbtn=document.getElementsByClassName('PostEditbtn')



function clickCounter() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = localStorage.clickcount + " Person likes this!";
    } 
  }
btnCmnt.onclick=function(){
  let textValue=document.getElementById('cmtbox').value;
  let p = document.createElement('p');
  p.textContent = textValue;
  p.classList.add('commentPost')
  cmntPost.appendChild(p)
  document.getElementById('cmtbox').value='';



  
}
editId.onclick=function()
{

  if(editId.classList.contains("editId"))
  {
    let editText=document.getElementsByClassName('bodydes')
    var blog=editText[0].textContent;
  bodydes[0].innerHTML="";
  // console.log(elem)
  let inputELement = '<textarea name="textarea" id="Editable" cols=150% rows=30%>'+blog+'</textarea>'
  bodydes[0].innerHTML=inputELement
  bodydes[0].classList.add('textarea')

  editId.innerHTML='Save <i class="far fa-save" aria-hidden="true"></i>'
  editId.classList.add('saveBtn')
  editId.classList.remove('editId')
}
else{
  let editable= document.getElementById('Editable')
  let valueofContent=editable.value;
  bodydes[0].innerHTML='<div>'+valueofContent+'</div>'
  editId.innerHTML='Edit <i class="fa fa-edit" aria-hidden="true"></i>'
  editId.classList.add('editId')
  editId.classList.remove('saveBtn')
}
}

