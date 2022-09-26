function changefont(font) {
   document.getElementById('content').style.fontFamily = font.value;
}

function changesize(n) {
   document.getElementById('content').style.fontSize = n.value / 2 + "rem"
}



function boldtext () {
   document.execCommand("bold", false, null);

}




function italic() {

   document.execCommand("italic", false, null);

}



function underline() {
   document.execCommand("underline", false, null);

}




function reset() {

   document.getElementById("content").innerHTML = "";
   document.getElementById('underline').style.backgroundColor = 'rgb(190, 219, 244)'
   document.getElementById('italicbtn').style.backgroundColor ='rgb(190, 219, 244)'
   document.getElementById('boldbtn').style.backgroundColor = 'rgb(190, 219, 244)'
}

function copy() {
   document.getElementById('content').select()
   document.execCommand('copy');
}






function saveTextAsFile() {
   var textToWrite = document.getElementById('content').innerHTML;
   var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
   var fileNameToSaveAs = "file.txt";

   var downloadLink = document.createElement("a");
   downloadLink.download = fileNameToSaveAs;
   downloadLink.innerHTML = "Download File";
   if (window.webkitURL != null) {
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
   } else {
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
   }

   downloadLink.click();
}


const save=[];
// save.push
var index=0;
var active=0;
var prev=0;
function createfile(){
   var ele=document.createElement("button");
   save.push("")
   document.getElementById("list").appendChild(ele);
   ele.classList.add("newnote")     
   index++;
   // active=index;
   ele.innerHTML='File-'+index;
   ele.id="id-"+index;
   var note=document.getElementById("id-"+index)
   console.log(note)
  

  document.getElementById("id-"+1).style.backgroundColor='white' 

  console.log(prev);
   note.addEventListener("click",function(){ 
      document.getElementById("content").innerHTML=save[ele.id.split('-')[1]-1];
      console.log(ele.id.split('-')[1])
      prev=active
      active=ele.id.split('-')[1]-1;
      console.log("prev="+prev);
      console.log("active="+active);
      setactive(prev,active);
   
      console.log(save)
   })
   
}

function setactive(prev,active)
{
   prev=prev+1;
   active=active+1;
   console.log("prev="+prev);
   console.log("active="+active);
   document.getElementById("id-"+1).style.backgroundColor='rgb(190, 219, 244)' 
    document.getElementById("id-"+prev).style.backgroundColor='rgb(190, 219, 244)'
    document.getElementById("id-"+active).style.backgroundColor='white'
}

function savefile(){
   var content=document.getElementById("content").innerHTML;
   save[active]=content
   console.log(save)
}





