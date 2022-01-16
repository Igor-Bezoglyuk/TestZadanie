var HeaderSearch = document.getElementsByClassName('HeaderSearch')[0];
var OpenMenu = document.getElementById("OpenMenu");

OpenMenu.onclick = function(){
	HeaderSearch.style.display = "block";
	OpenMenu.style.display = "none";
}

Window.onclick = function(event){
	if(event.target == HeaderSearch){
    HeaderSearch.style.display = "none";
	}
}