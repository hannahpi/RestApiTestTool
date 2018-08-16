//Get Data
function sendRequest(resultObjID, method, request, url)
{
	var XMLHTTP= XMLHttpRequest || ActiveXObject("Microsoft.XMLHTTP");
	if (typeof XMLHTTP!= "undefined" )
	{
		var xmlhttp = new XMLHTTP;
		xmlhttp.onreadystatechange= function() {
			if(xmlhttp.readyState== 4) //4 is recv'd all responses
			{
				var resp = xmlhttp.responseText;
				document.getElementById(resultObjID).innerHTML= resp;
			}
		}
        xmlhttp.open(method, url , true);
        if (method != "GET") {
		    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		    xmlhttp.send(request);
        } else {
            xmlhttp.send(null);
        }
	}
	else
		alert("Your browser doesn't seem to support ajax");
}

function sendIt() {
    var form = document.getElementById("testForm");
    var txtRequest = document.getElementById("request");
    var txtAction = document.getElementById("actiontext");
    var resultObjID = "results";
    var method = form.getAttribute("method");
    var action = txtAction.value;
    var request = txtRequest.value;
    sendRequest(resultObjID, method, request, action);
}

window.onload = function() {
    var form = document.getElementById("testForm");
    var dropReq = document.getElementById("methodReq");
    var txtRequest = document.getElementById("request");
    var txtAction = document.getElementById("actiontext");
    var btnSubmit = document.getElementById("submit");
    dropReq.addEventListener("change", function(){
        var form = document.getElementById("testForm");
        form.setAttribute("method", dropReq.value);
    }, true);
    txtAction.addEventListener("change", function(){
        var form = document.getElementById("testForm");
        form.setAttribute("action", txtAction.value);
    }, true);
}
