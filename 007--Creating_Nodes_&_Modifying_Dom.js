let newDiV = document.createElement('div');
newDiV.setAttribute('className', 'classA');
newDiV.setAttribute('id', 'nursery');
newDiV.setAttribute('title', 'naughty');

let newDiVtexT = document.createTextNode('HEllo');
newDiV.appendChild(newDiVtexT);


let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

container.insertBefore(newDiV, h1);


let newLiTag = document.createElement('li');
newLiTag.setAttribute('className', 'list-group-item');

let newLiText = document.createTextNode('Hello World');
newLiTag.appendChild(newLiText);

console.log(newLiTag);


let ulTag = document.querySelector('#items');
console.log(ulTag.parentNode);
ulTag.innerHTML = ''
ulTag.appendChild(newLiTag);

