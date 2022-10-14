let count = 0;

function newElement(){

  let note = document.getElementById('user-input').value;
  //Checks if user entered an empty input or not
  if(note.length == 0){
    alert("Input cannot be empty");
  }
  else{
    //Set up item parent element
    let item = document.createElement('div');
    item.className = 'item'
    //Add count element head
    let noteHead = document.createElement('h4');
    count++;
    let text = document.createTextNode('Note ' + count);
    noteHead.append(text);
    item.append(noteHead);
    let shortenMessage = document.createElement('p');
    text = document.createTextNode(note.substring(0,15));
    shortenMessage.append(text);
    item.append(shortenMessage);
    //Created button to see description
    let button = document.createElement('button');
    button.className = 'detail'
    //Sets button onclick
    button.onclick = function(){
      alert(note);
    }
    text = document.createTextNode('View Detail');
    button.append(text);
    item.append(button);
    //append pop up to div
    document.getElementById('content').append(item);
  }
}