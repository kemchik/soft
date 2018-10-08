'use strict'

button.addEventListener('click', snowdenDecrypt);

function snowdenDecrypt(){
  let text = Array.from(textarea.value.toLowerCase());
  if(text.lenght > 100000){
    alert('Error')
    return
  }

  let i = 0;
  while(i < text.length){
    if(text[i] === text[i + 1]){
      text.splice(i, 2);
      i = 0;
      continue;
    }
    i++;
  }

  text = text.join('')
  answer.innerHTML = text;
}
