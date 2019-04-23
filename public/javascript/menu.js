
function openSideNav() {
  document.getElementById("mySidenav").style.width = "200px";
  document.getElementById("main").style.marginLeft = "200px";
  document.getElementById("main").style.opacity = "0.7";
  document.getElementById("menu-icon").style.display = "none";
}

function closeSideNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("main").style.opacity = "1.0";
  document.getElementById("menu-icon").style.display = "block";
}
var menuside = document.getElementById("mySidenav");
var spanmenu = document.getElementById("menu-icon");
var modal = document.getElementById('myModal');
var loginmodal = document.getElementsByClassName("modal-menu")[0];
var span = document.getElementsByClassName("close")[0];
loginmodal.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if(document.getElementById('myModal').style.display == "none"){
    if (event.target != menuside && document.getElementById("mySidenav").offsetWidth == 200 && event.target != spanmenu ) {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
      document.getElementById("main").style.opacity = "1.0";
      document.getElementById("menu-icon").style.display = "block";
    }
  } else {

      if (event.target == modal) {
        console.log(document.getElementById('myModal').style.display);
        modal.style.display = "none";
    }
  }
}
