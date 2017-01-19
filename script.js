//I implemented some extra features here.  If you take out the

body = document.querySelector('body');
for (var i = 0; i < 64; i++) {
  let tile = document.createElement('div');
  tile.style.width = '12.5%',
  tile.style.float = 'left',
  tile.style.paddingBottom = '12.5%',
  tile.addEventListener('click', () => tile.style.backgroundColor = getRandomColor());
  tile.addEventListener('dblclick', randomlyColorBoard)
  if (i%2===0) {
    tile.style.backgroundColor = getRandomColor();
  }
  else {
    tile.style.backgroundColor = getRandomColor();
  }
    body.appendChild(tile);
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function randomlyColorBoard(){
  for (var i = 0; i < document.getElementsByTagName('div').length; i++) {
    document.getElementsByTagName('div')[i].style.backgroundColor = getRandomColor();
  }
}
