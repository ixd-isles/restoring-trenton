var config =
{
	city: "Trenton",
	southwest: L.latLng(40.18000, -74.85000),
    northeast: L.latLng(40.26000, -74.67000),
    rev_geocoding_apikey: 'AIzaSyAKf5AB_5QngOuThxqDCo8A8U17qpCBu00',
    database_name: 'trenton_master',
    additional_attrib : 'created by iana dikidjieva for <a href="http://www.restoringtrenton.org">restoring trenton</a>.<br>',
   	sql_url : 'http://restoringtrenton.cartodb.com/api/v2/sql?q=',
	sidebar_content : "<fieldset><b>ADVANCED SEARCH</b><br>" +
	"Instructions on constructing your queries can be found here." + 
	"<table style='border:none'><tr><td style='border:none'>" +
		"<p style='float:left; padding-left:7px; padding-right:7px;'><a id='btnQuery' class='btnQuery' href='javascript:mapSelection();'><img src='button/map_000000_32.png'></a><br>MAP</p>" +
		"<p style='float:left; padding-left:7px; padding-right:7px; '><a id='btnTable' class='btnTable' href='javascript:makeTable();'><img src='button/table_444444_32.png'></a><br>TABLE</p>" +
		"<p style='float:left; padding-left:7px; padding-right:7px'><a id='btnDownload' class='btnDownload' href='javascript:downloadSelection();'><img src='button/download_000000_32.png'></a><br>SAVE</p>" +
		"<p style='float:left; padding-left:7px; padding-right:7px'><a id='btnClear' class='btnClear' href='javascript:clearSelection();'><img src='button/reply_000000_32.png'></a><br>CLEAR</p>" +		
	"</tr></td></table>" +
	"<hr>" +
	"<form id='advanced_search'>"+
	"<b>ADDRESS</b><br>" + "<input type='text' id = 'SR_address' value = ''>" + "<br>"  +
    "<b>OWNER</b><br> <input type = 'text' id='SR_owner' value = ''>" + "<br>" +
    "<b>PARCEL TYPE</b><br>" +
		"<select id='SR_parc_type' name='SR_parc_type'>" + "<br>" +
  			"<option value='ANY' selected='selected'>ANY</option>" +
  			"<option value='VACANT BLDG'>VACANT BLDG</option>" +
  			"<option value='VACANT LOT'>VACANT LOT</option>" +
		"</select> " + 
		"<br><br>" +
		"<div class='checkbox'><label><input type = 'checkbox' id='SR_class'><b>PROPERTY CLASS 2</B><br>(1-4 FAMILY RESIDENTIAL)</option></label></div>" +
		"<br>" +
		"<b>CONDITIONS</b><br>"+
		"Selecting more conditions will find properties with ANY of these conditions ('OR' search):" +
		"<div class='checkbox'><label><input type = 'checkbox' id='dumping'>DUMPING</option></label></div>" +
	    "<div class='checkbox'><label><input type = 'checkbox' id='trash'>TRASH</option></label></div>" + 
	    "<div class='checkbox'><label><input type = 'checkbox' id='xs'>Xs</option></label></div>" +
	    "<div class='checkbox'><label><input type = 'checkbox' id='dilapidated'>DILAPIDATED</option></label></div>" +
	    "<div class='checkbox'><label><input type = 'checkbox' id='unsecured'>UNSECURED</option></label></div>" +
	    "<div class='checkbox'><label><input type = 'checkbox' id='animals'>ANIMALS</option></label></div>" + 
		"<div class='checkbox'><label><input type = 'checkbox' id='unmaintained'>UNMAINTAINED</option></label></div>" +
	    "<div class='checkbox'><label><input type = 'checkbox' id='weeds'>WEEDS</option></label></div>" +
		"<br><b>ZONING</b> <select id='SR_zoning' name='SR_zoning'>" + "<br>" +
  			"<option value='ANY' selected='selected'>ANY</option>" +
  			"<option value='RESIDENCE'>RESIDENTIAL</option>" +
  			"<option value='BUSINESS'>COMMERCIAL</option>" +
			"<option value='INDUSTRIAL'>INDUSTRIAL</option>" +
			"<option value='MIXED USE'>MIXED USE</option>" +
		"</select> " + "<br>" +
	    "</form></fieldset>",
		
		table_base : "<h3>SEARCH RESULTS</h3>" + 
			"<button role='button' class='btn-primary' onclick='javascript:hideTable();'><img src='button/map_444444_16.png'></button> back to map "+
			"<button role='button' class='btn-primary' onclick='javascript:downloadSelection();'><img src='button/download_444444_16.png'></button> save as .csv " +
			"<hr>"
	
		
	
	  
}
