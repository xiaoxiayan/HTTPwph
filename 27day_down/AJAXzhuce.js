function sendAjax (url,prams){
	var xhr = new XMLHttpRequest;
//	console.log(1)
	 var f = url.indexOf('?') > -1 ? '&' : '?';
     url += f + '_=' + Date.now();
     url += '&' + 'username' + '=' + prams;
	xhr.open('GET',url,true);
	xhr.send(null);
	xhr.onreadstatechange =function(){
		if(xhr.readyState == 4 && xhr.status ==200){
			console.log(xhr.responseText);
		}
	}
	
}
