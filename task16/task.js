// JavaScript Document

window.onload=function(){
	
		var cityinputt=document.getElementById("aqi-city-input").value;
		var valueinputt=document.getElementById("aqi-value-input").value;
		var addbtn=document.getElementById("add-btn");
		addbtn.onclick=function(){
		var aqitable=document.getElementById("aqi-table");
		var len=aqitable.rows.length;
		var newA=aqitable.insertRow(len);
		var col1=newA.insertCell(0);
		var col2=newA.insertCell(1);
		col1=cityinputt;
		col2=valueinputt;
		
		
	}
}