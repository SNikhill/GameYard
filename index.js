/* GAME TITLES */
$(document).ready(function () {
  $('#form').hide();

  $('.btn1').mouseover(function () {
    $(this).css({ 'background-color': 'rgb(136,0,27)' });
  });
  $('.btn1').mouseout(function () {
    $(this).css({ background: 'none' });
  });
  $('.caption').mouseenter(function () {
    $(this).css({ border: '1px solid white', background: 'none' });
  });
  $('.caption').mouseleave(function () {
    $(this).css({ border: 'none', background: 'rgba(18,18,18,0.8)' });
  });
});

/* VIDEO CONTROLS */
let c = false;
let d = true;
function playvid1() {
  var b = document.getElementById('banner');
  b.play();
}

function playvid2() {
  var a = document.getElementById('vid2');
  a.play();
  $('#svg2').css({ visibility: 'visible' });
  $('#svg').css({ visibility: 'hidden' });
  return (c = true);
}

function pausevid() {
  var a = document.getElementById('vid2');
  a.pause();
  $('#svg2').css({ visibility: 'hidden' });
  $('#svg').css({ visibility: 'visible' });
  return (c = false);
}

$('#vid2').mouseenter(function () {
  if (c == true) {
    $('#svg').css({ visibility: 'hidden' });
    $('#svg2').css({ visibility: 'visible' });
  } else {
    $('#svg').css({ visibility: 'visible' });
  }
});
$('#svg2').mouseenter(function () {
  $('#svg2').css({ visibility: 'visible' });
});
$('#svg').mouseenter(function () {
  if (c == true) {
    $('#svg').css({ visibility: 'hidden' });
  } else {
    $('#svg').css({ visibility: 'visible' });
  }
});
$('#vid2').mouseleave(function () {
  $('#svg').css({ visibility: 'hidden' });
  if (c == true) {
    $('#svg2').css({ visibility: 'hidden' });
  }
});

/* VIDEO CHANGER*/
var count = 0;
function nxtvideo() {
  count++;
  var h = document.getElementById('img-background');
  var i = document.getElementById('fname');
  var j = document.getElementById('vid2');

  if (count == 1) {
    h.style.backgroundImage = "url('media/images/Creed.jpg')";
    i.innerHTML = "Assassin's<br>Creed";
    j.src = 'media/videos/Creed.mp4';
  }

  if (count == 2) {
    h.style.backgroundImage = "url('media/images/BlackOps.jpg')";
    i.innerHTML = 'Black Ops';
    j.src = 'media/videos/BlackOps.mp4';
  }
  /*
  if(count==3){
    h.style.backgroundImage= "url('Images/Creed.jpg')";
    i.innerHTML="Assassin's<br>Creed";
    j.src= "Videos/";
  }

  if(count==4){
    h.style.backgroundImage= "url('Images/Creed.jpg')";
    i.innerHTML="Assassin's<br>Creed";
    j.src= "Videos/";
    count=0;
  }*/

  if (count == 3) {
    h.style.backgroundImage = "url('media/images/Hitman.jpg')";
    i.innerHTML = 'Hitman 2';
    j.src = 'media/videos/Hitman2.mp4';
    count = 0;
  }
}
/*form checker*/
function chk() {
  var deci = document.getElementById('op1');
  var deci2 = document.getElementById('op2');

  if (deci.checked) {
    $('#form').slideDown(1200);
  }
  if (deci2.checked) {
    $('#form').slideUp(2000);
  }
}

function inptchk() {
  let eml = document.getElementById('field1').value;
  var f;
  var g = false;
  var h;
  var i = false;

  for (f = 0; f < eml.length; f++) {
    if (eml[f] == '@') {
      g = true;
      break;
    }
  }
  for (h = 0; h < eml.length; h++) {
    if (eml[h] == '.' && h > f + 1) {
      i = true;
      break;
    }
  }
  if (g == true && i == true) {
    return true;
  } else {
    $('#field1').css({ border: '2px solid red' });
    return false;
  }
}
/* IMAGE CHANGER */

let mousecount = 0;
function changeimg() {
  mousecount++;
  var a = document.getElementById('imgchange');
  var b = document.getElementById('name');
  if (mousecount == 0 || mousecount == 1) {
    setTimeout(function () {
      a.style.backgroundImage = "url('media/images/img-slides/Halo5.jpg')";
      b.innerHTML = 'Halo 5';
    }, 3000);
    setTimeout(function () {
      a.style.backgroundImage =
        "url('media/images/img-slides/BattleField4.jpg')";
      b.innerHTML = 'BattleField 4';
      b.style.color = 'black';
    }, 6000);
    setTimeout(function () {
      a.style.backgroundImage =
        "url('media/images/img-slides/DevilMayCry.jpg')";
      b.innerHTML = 'Devil May Cry';
      b.style.color = 'black';
    }, 9000);
    setTimeout(function () {
      a.style.backgroundImage = "url('media/images/img-slides/TheWitcher.jpg')";
      b.innerHTML = 'The Witcher';
    }, 12000);
    setTimeout(function () {
      a.style.backgroundImage = "url('media/images/img-slides/Dota2.jpg')";
      b.innerHTML = 'Dota 2';
      b.style.color = 'white';
      mousecount = 0;
      changeimg();
    }, 15000);
  }
}

