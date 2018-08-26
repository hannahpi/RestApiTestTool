var form;
var selMethod;
var txtRequest;
var txtAction;
var txtCHeader;
var txtCHeaderData;
var selCHeaders;
var selRequestHeader;
var txtResponseHeader;
var btnSubmit;
var btnAddHeader;
var btnRemoveHeader;
var cHeaders=new Array();
var cDatas=new Array();

//Get Data
function sendRequest(resultObjID, resultCodeObjID, responseHeaderID, method, request, url, headers, datas, requestHeader)
{
	var XMLHTTP= XMLHttpRequest || ActiveXObject("Microsoft.XMLHTTP");
	if (typeof XMLHTTP!= "undefined" )
	{
		var xmlhttp = new XMLHTTP;
		xmlhttp.onreadystatechange= function() {
			if(xmlhttp.readyState== 4) //4 is recv'd all responses
			{
				var statusCode = xmlhttp.status;
				var statusText = xmlhttp.statusText;
				var resp = xmlhttp.responseText;
				document.getElementById(resultCodeObjID).value = statusCode + " : " + statusText;
				document.getElementById(responseHeaderID).innerHTML = xmlhttp.getAllResponseHeaders();
				document.getElementById(resultObjID).innerHTML= resp;
			}
		}
		xmlhttp.ontimeout= function() {
			document.getElementById(resultCodeObjID).value = "A timeout has occurred.";
		}
        xmlhttp.open(method, url , true);
		for (var i=0; i<headers.length; i++) {
			if (datas[i]=""){
				xmlhttp.setRequestHeader("Content-type", headers[i]);
			} else {
				xmlhttp.setRequestHeader(headers[i], datas[i]);
			}
		}
        if (method != "GET") {
		    xmlhttp.setRequestHeader("Content-type", requestHeader);
		    xmlhttp.send(request);
        } else {
            xmlhttp.send(null);
        }
	}
	else
		alert("Your browser doesn't seem to support ajax");
}

function sendIt() {
    var resultObjID = "results";
	var resultCodeObjID = "resultCode";
	var responseHeaderID = "resultHeader";
    var method = selMethod.value;
    var action = txtAction.value;
    var request = txtRequest.value;
	var requestHeader = selRequestHeader.value;
    sendRequest(resultObjID, resultCodeObjID, responseHeaderID, method, request, action, cHeaders, cDatas, requestHeader);
}

function addHeader() {
	if (txtCHeader.value=="") {
		return;
	} else {
		var optNew = document.createElement("option");
		optNew.text = txtCHeader.value;
		selCHeaders.add(optNew);
		cHeaders.push(txtCHeader.value);
		cDatas.push(txtCHeaderData.value);
	}
}

function removeHeader() {
	var id = selCHeaders.selectedIndex;
	cHeaders.splice(id, 1);
	cDatas.splice(id, 1);
	selCHeaders.remove(id);
}

window.onload = function() {
    form = document.getElementById("testForm");
    selMethod = document.getElementById("methodReq");
    txtRequest = document.getElementById("request");
	selRequestHeader = document.getElementById("requestHeaderType");
    txtAction = document.getElementById("actiontext");
	txtCHeader = document.getElementById("CHeaderName");
	txtCHeaderData = document.getElementById("CHeaderData");
	selCHeaders = document.getElementById("CHeaders");
	txtResponseHeader = document.getElementById("resultHeader");
    btnSubmit = document.getElementById("submit");
    btnAddHeader = document.getElementById("btnAddHeader");
	btnRemoveHeader = document.getElementById("btnRemoveHeader");
	document.getElementById("requestFormArea").style.display ="none";
	selMethod.addEventListener("change", function(){
		switch (selMethod.value) {
			case "GET":
			case "DELETE":
				document.getElementById("requestFormArea").style.display="none";
				break;
			default:
				document.getElementById("requestFormArea").style.display="block";
				break;
		}
	});
}
