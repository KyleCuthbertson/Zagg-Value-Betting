/* Code from W3C - http://www.w3schools.com/howto/howto_js_sidenav.asp */



/* Set the width of the side navigation to 200px */

/* Set the width of the side navigation to 0 */


function openNav() {
  if(document.documentElement.clientWidth >= 500) {
    document.getElementById("mySidenav").style.width = "200px";
  } else {
    document.getElementById("mySidenav").style.width = "145px";
  }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
