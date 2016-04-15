function refresh(){
	var table = document.getElementById("table-cursos")
	//Regex to remove class hide
	table.className = table.className.replace( /(?:^|\s)hide(?!\S)/g , '')
}