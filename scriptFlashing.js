body = document.querySelector('body');
for (var i = 0; i < 63; i++) {
  let tile = document.createElement('div');
  tile.style.width = '11.1%',
  tile.style.float = 'left',
  tile.style.paddingBottom = '11.1%'
  if (i%2===0) {
    tile.style.backgroundColor = 'red'
  }
  else {
    tile.style.backgroundColor = 'black'
  }
  body.appendChild(tile);
}
setInterval(switchColors, 1000);
  //Inifinite loop to flash colors!
  function switchColors(){
    let evenColor = document.getElementsByTagName('div')[0].style.backgroundColor;
    let oddColor = document.getElementsByTagName('div')[1].style.backgroundColor;

    for (var i = 0; document.getElementsByTagName('div').length; i++) {
      if (i%2 === 0) {
        document.getElementsByTagName('div')[i].style.backgroundColor = oddColor;
      }
      else {
        document.getElementsByTagName('div')[i].style.backgroundColor = evenColor;
      }
    }
  }
