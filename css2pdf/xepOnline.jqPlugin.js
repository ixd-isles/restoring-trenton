<html>
<head>
<title>RESTORING TRENTON - INTERACTIVE MAP</title>
<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css"/>
<link rel="stylesheet" href="http://libs.cartocdn.com/cartodb.js/v3/3.15/themes/css/cartodb.css" />
<script src="http://libs.cartocdn.com/cartodb.js/v3/3.15/cartodb.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
<script src='https://api.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/leaflet.markercluster.js'></script>
<link href='https://api.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/MarkerCluster.css' rel='stylesheet' />
<link href='https://api.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/MarkerCluster.Default.css' rel='stylesheet' />

<script src="jquery/jquery-1.6.4.min.js"></script>
<script src="spin-js/spin.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/2.4.0/math.min.js"></script>
<script src="spin-js/jquery.spin.js"></script>
<script src="d3-table/d3.min.js"></script>
<script src="http://dimplejs.org/dist/dimple.v2.1.6.min.js"></script>
<script src="leaflet-heat/leaflet-heat.js"></script>
<script src="highcharts/highcharts.js"></script>
<script src="leaflet-label/leaflet.label-src.js"></script>
<link rel="stylesheet" href="leaflet-label/leaflet.label.css" />

<script src="css2pdf/xepOnline.jqPlugin.js"></script>

<script src="leaflet-fullscreen/Control.FullScreen.js"></script>
<link rel="stylesheet" href="leaflet-fullscreen/Control.FullScreen.css"></script>

<link rel="stylesheet" href="GeoSearch/css/l.geosearch.css" />
    <script src="GeoSearch/js/l.control.geosearch.js"></script>
    <script src="GeoSearch/js/l.geosearch.provider.google.js"></script>

<link rel="stylesheet" href="leaflet-sidebar/L.Control.Sidebar.css" />
    <script src="leaflet-sidebar/L.Control.Sidebar.js"></script>
	<script src="button/leaflet-button.js"></script>

<button id="searchbutton" role="button" class="btn-primary" title="ADVANCED SEARCH"><img src="button/eye_444444_18.png"></button>
<button id="quicksearchbutton" role="button" class="btn-primary" title = "QUICK SEARCH"><img src="button/search_444444_18.png"></button>
<button id="deselectbutton" role="button" class="btn-primary" title = "CLEAR SELECTION"><img src="button/reply_ff9900_18.png"></button>
<button id="data_list" role = "button" class="btn-switcher" style="z-index:10"><i class="fa fa-dashboard fa-2x" style="float:left; padding-right:3px; padding-left:2px;"></i><p style="float:left; color:#888888; margin-top:5px;margin-bottom:3px;padding-left:3px;padding-right:3px;font-family:'Open Sans'">DASHBOARDS</P>
	<form id="modeList" style="display:none; padding-right:3px;"><br><BR>
	<HR>
	<input type="radio" name="mode" id="crime_mode" value="crime_mode" onchange="displaySelectedMode()">CRIME</input><BR>
	<input type="radio" name="mode" id="ngbhd_mode" value="ngbhd_mode" onchange="displaySelectedMode()">NEIGHBORHOODS</input><BR>
	<hr>
	<input type="radio" name="mode" id="property_mode" value="property_mode" onchange="displaySelectedMode()" checked>PROPERTIES</input>
	</form></button>
<button id="crimeFilters" role = "button" class="btn-switcher" style="color:#888888; margin-top:5px;margin-bottom:3px;padding-left:8px;padding-right:8px;font-family:'Open Sans'">VIOLENT CRIME</button>
<button id="ngbhdFilters" role = "button" class="btn-switcher" style="color:#888888; margin-top:5px;margin-bottom:3px;padding-left:8px;padding-right:8px;font-family:'Open Sans'">NEIGHBORHOODS</button>

</head>
<body>

<style>


.leaflet-control-layers-toggle:after{ 
}

.leaflet-control-layers-toggle{ 
    width:32px;
	height:32px;
    background-position:3px 50% ;
	text-decoration:none;
	z-index:2;
	icon: 'button/fa-list_24_0_444444_none.png';
} 

.circle {
    background-image: url('button/fa-circle_32_0_444444_none.png');
	width:32px;
	height:32px;
	line-height:32px;
    text-align: center;
	color: #fff;
}

		.info {
			padding: 6px 8px;
			font: 90% Open Sans;
			background: white;
			background: rgba(255,255,255,0.9);
			box-shadow: 0 0 15px rgba(0,0,0,0.2);
			border-radius: 5px;
		}

		.legend {
			text-align: left;
			line-height: 18px;
			color: #555;
		}
		.legend i {
			width: 18px;
			height: 18px;
			float: left;
			margin-right: 8px;
			opacity: 0.9;
		}

#sidebar{
	font-family:"Courier New";
	padding:10px;
}

#dashboardSidebar{
	font-family:"Courier New";
	padding:10px;
}

#option{
	font-family:"Courier New";
}

.btn-switcher{
	background: none repeat scroll 0 0 rgba(0, 0, 0, 0.25);
	background-color:#ffffff;
	font-family:"Courier New";
	font-size:12px;
	color:#777777;
	border-radius: 4px;
	margin: 0 0 0 10px;
	padding: 3px;
	height: auto;
	float:right;
	text-align:left;
}

.dashboards {
	border: 1px solid #aaaaaa;
	box-shadow: 1px 1px 2px #999999;
	background: none repeat scroll 0 0 rgba(0, 0, 0, 0.25);
	background-color:#ffffff;
	font-family:"Courier New";
	font-size:12px;
	color:#777777;
	border-radius: 4px;
	margin: 0 0 0 10px;
	padding: 8px;
	height: auto;
}

.btn-primary{
	background: none repeat scroll 0 0 rgba(0, 0, 0, 0.25);
	background-color:#ffffff;
	font-family:"Courier New";
	font-size:12px;
	color:#777777;
	border-radius: 4px;
	margin: 0 0 0 10px;
	padding: 3px;
	height: auto;
}

table, td {
	border-collapse: collapse;
	border: solid 1px #cccccc;
	font-family: "Open Sans";
	font-size:12px;
}

td {
    padding: 8px;
	text-align:'right';
}

a:link { color:#006666; text-decoration:none;}
a:hover { color: #ff9900; }

#spinBox {
    z-index:999;
    opacity:0.5;
    display:none;
    border-radius:0.25em;
    width:5em;
    height:5em;
    margin: -2.5em 0 0 -2.5em;
    background-color:#f0f3f6;
    border:1px solid #fff;
    position:fixed;
    top:50%;
    left:50%
}

#queryTable {
	font-family:"Courier New";
	font-size:12px;
}

#tierBand {
	font-weight:bold;
	font-size:120%;
	color:#ffffff;
	width:95%;
	margin-bottom:8px;
	padding-left:10px;
}

.leaflet-label-other {
  background-color: #fff;
  border: 1px solid #444;
  border-radius: 3;
  color: #444;
  font-weight: normal;
  opacity: 0.7;
  padding: 3px;
}

</style>


<div id = "queryTable" style="margin: 20px auto; width: 100%; display:none"></div>

<div id="map" style="width: 100%; height: 100%;"></div>
<div id="spinBox" claVss='spinner'></div>

<script type="text/javascript">

var config =
{
	city: "Trenton",
	southwest: L.latLng(40.18000, -74.85000),
    northeast: L.latLng(40.26000, -74.67000),
    rev_geocoding_apikey: 'AIzaSyAKf5AB_5QngOuThxqDCo8A8U17qpCBu00',
    database_name: 'trenton_master',
    additional_attrib : 'created by iana dikidjieva for <a href="http://www.restoringtrenton.org">restoring trenton</a>.<br>',
   	sql_url : 'http://restoringtrenton.cartodb.com/api/v2/sql?q=',
	propertySearch_sidebar : "<fieldset><b>ADVANCED PROPERTY SEARCH</b><br>" +
	"<span style='font-size:85%'><a style = 'text-decoration:none; color: #FF3300' href='http://www.restoringtrenton.org/#!using-the-interactive-map/c10s2'>Instructions on constructing your queries can be found here</a>.</span>" + 
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
    "<b>OWNER LOCATION</b><br><span style='font-size:85%'>address, city, and/or zip</span><br> <input type = 'text' id='SR_owner_add' value = ''>" + "<br>" +
    "<b>PARCEL TYPE</b><br>" +
		"<select id='SR_parc_type' name='SR_parc_type'>" + "<br>" +
  			"<option value='ANY' selected='selected'>ANY</option>" +
  			"<option value='VACANT BLDG'>VACANT BLDG</option>" +
  			"<option value='VACANT LOT'>VACANT LOT</option>" +
		"</select> " + 
		"<br><br>" +
		"<div class='checkbox'><label><input type = 'checkbox' id='SR_class'><b>PROPERTY CLASS 2</B><br>1-4 family residential</option></label></div>" +
		"<br>" +
		"<b>CONDITIONS</b><br>"+
		"<span style='font-size:85%'>Selecting more conditions will find properties with ANY of these conditions ('OR' search):</span>" +
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
		
		crimeSidebar_content : "<fieldset><b>VIOLENT CRIME</b><br>" +
		"Disclaimers and suchlike." + 
		"<hr>" +
			"<button class='btn-primary' id='crimeQuery' style='float: right; padding-left:7px; padding-right:7px;font-family:Open Sans;font-weight:bold' onclick='javascript:drawCrime();'><i class='fa fa-search'></i>  SHOW</button>" +
		"<form id='crime_query_form'>"+
		"<b>DISPLAY</b>" +
		"<br><input type='checkbox' class='crimemaptype' id='incidents'>Incidents</input>" +
		"<br><input type='checkbox' class='crimemaptype' id='heatmap' checked>Heatmap</input>" +
		"<br><span style='font-size:85%'>Note: Heatmap colors do not correspond to incident colors. Zoom in to see individual points in Incident mode.</span>" +
		"<hr>"+
		"<p id='crimeQueryResult'></p>" +
		"<hr>" +
		"<b>YEARS</b>" +
		"<br><input type='checkbox' class='year' id='2013' checked>2013</input>" +	
		"<br><input type='checkbox' class='year' id='2012'>2012</input>" +	
		"<br><input type='checkbox' class='year' id='2011'>2011</input>" +
		"<br><input type='checkbox' class='year' id='2010'>2010</input>" +	
		"<br><input type='checkbox' class='year' id='2009'>2009</input>" +	
		"<hr>"+
		"<b>CATEGORIES</b>"+
		"<br><input type='checkbox' class='crimecat' id='larceny'><i class='fa fa-circle' style='color:#FFFF00'></i> Larceny Theft</input>" +
		"<br><input type='checkbox' class='crimecat' id='agg'><i class='fa fa-circle' style='color:#FF0000'></i> Aggravated Assault</input>" +	
		"<br><input type='checkbox' class='crimecat' id='robbery'><i class='fa fa-circle' style='color:#FF66FF'></i> Robbery</input>" +
		"<br><input type='checkbox' class='crimecat' id='vehicle'><i class='fa fa-circle' style='color:#FF9966'></i> Motor Vehicle Theft</input>" +	
		"<br><input type='checkbox' class='crimecat' id='burglary'><i class='fa fa-circle' style='color:#660033'></i> Burglary</input>" +
		"<br><input type='checkbox' class='crimecat' id='rape'><i class='fa fa-circle' style='color:#CC0066'></i> Rape</input>" +
		"<br><input type='checkbox' class='crimecat' id='arson'><i class='fa fa-circle' style='color:#FF9900'></i> Arson</input>" +
		"<br><input type='checkbox' class='crimecat' id='homicide'><i class='fa fa-circle' style='color:#FF3300'></i> Homicide</input>" +
			"</form></fieldset>",
		
		ngbhdSidebar_content : 	
					"<fieldset><b>NEIGHBORHOOD CONDITIONS</b><br>" +
					"<hr>" +
					"<div id='ngbhd_query_form' style='font-family:Open Sans'>"+
					"</div></fieldset>",
		
		table_base : "<h3>SEARCH RESULTS</h3>" + 
			"<button role='button' class='btn-primary' onclick='javascript:hideTable();'><img src='button/map_444444_16.png'></button> back to map "+
			"<button role='button' class='btn-primary' onclick='javascript:downloadSelection();'><img src='button/download_444444_16.png'></button> save as .csv " +
			"<hr>"
	  
}	

var sql = new cartodb.SQL({ user: 'restoringtrenton', format: 'geojson' });
var polygon;
var searchPolygons = [];
var searchResults = [];
var searchModule;
var quickSearchOn = 0;
var sidebar;
var cartoURL = '';
var query_string='';
var queryHighlightOn = 0;
var deselectButton = new L.Control.Button(L.DomUtil.get('deselectbutton'), { toggleButton: 'active' });
var crimeSidebarButton = new L.Control.Button(L.DomUtil.get('crimeFilters'), {position:'topright', toggleButton: 'active' }).on('click', function () {
			dashboardSidebar.toggle();
		});
var ngbhdSidebarButton = new L.Control.Button(L.DomUtil.get('ngbhdFilters'), {position:'topright', toggleButton: 'active' }).on('click', function () {
			dashboardSidebar.toggle();
		});
var modeSwitcher = new L.Control.Button(L.DomUtil.get('data_list'), {position:'topright'});
var crimeData = new L.geoJson();
var crimeSQL = "";
var crimeCluster = new L.markerClusterGroup();
var crimeCoords = [];
var crimeHeat = L.heatLayer();
var ngbhdSQL = "";
var ngbhdLayer = new L.geoJson();
var crimeButtonOn = 0;
var ngbhdButtonOn = 0;
var crimeCounter = 0;


var relsize;

var popup = L.popup();

var map = L.map('map').setView([40.224, -74.76], 15);


var stamen = L.tileLayer('http://a.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {attribution: config.additional_attrib + ' uses a <a href="http://stamen.com">stamen</a> basemap'});
stamen.addTo(map);

googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
	attribution: config.additional_attrib + ' uses google satellite'
});

 
var bases = { "streets (stamen toner lite)": stamen, "google satellite": googleSat};

<!-- BE SURE THIS IS THE LATEST UPDATE OF THE MASTER PARCEL FILE, AND THAT IT IS ACTUALLY CALLED 'trenton_master' OR EVERYTHING WILL BREAK!!! -->
var parcelMasterURL = 'https://restoringtrenton.cartodb.com/api/v2/viz/aebbd47a-5690-11e5-beed-0e853d047bba/viz.json';

<!-- reference auxiliary data -->

<!-- colors on redev areas layer are styled in cartodb bc i am lazy -->
var redev_areasURL = 'https://restoringtrenton.cartodb.com/api/v2/viz/c0afc7fc-5692-11e5-ac65-0e0c41326911/viz.json';

<!-- colors and label on neighborhood layer are styled in cartodb -->
var ngbhd_masterURL = 'https://restoringtrenton.cartodb.com/api/v2/viz/cb60f754-72a1-11e5-88a3-0e3ff518bd15/viz.json'; 

var infoLayer = new L.geoJson();
var formURL = '';

var spinner = new Spinner().spin(spinBox);
$('#spinBox').show();
cartoURL_infolayer = encodeURI("https://restoringtrenton.cartodb.com/api/v2/sql?format=GeoJSON&q=SELECT * FROM trenton_master WHERE parc_type ilike '%vacant%'");

		$.getJSON(cartoURL_infolayer,
            function(data) {
			
	        infoLayer = L.geoJson(data, {
				style: 	{color: "#ffffff", fillColor:"#ffffff", weight: 0, opacity:0, fillOpacity:0},
				
				onEachFeature: function (feature, layer) {
				var bounds = layer.getBounds();
				var center = bounds.getCenter();

				//sigh, we resort to creepy google again to make the form to report the issues. 
				
				var propAdd = feature.properties.address;
				var cartodbID = feature.properties.cartodb_id;
				var formURL="https://docs.google.com/forms/d/11QPK0sF29VREQR3ke-Td3EUd1LoCh9UbHR8um8xSOrY/viewform?entry.1233008467="+propAdd+"&entry.492807532="+cartodbID+"&entry.935525454="+center+"&entry.1771840456&entry.1915372513&entry.2060863861&entry.1480924992&entry.1569579456";
				
				//but check out our sexy popup 
				
				var popupContent = "<b>"+ feature.properties.address + 
									"</b><br>"+ feature.properties.parc_type +
									"<hr><b><a target = 'blank' href='"+ formURL + "'>REPORT AN ISSUE</a></b>" +
									"<hr><b>OWNER</B><BR>"+feature.properties.owner +
									"<br>"+feature.properties.ownstreet + 
									"<br>"+feature.properties.owncity +
									"<br><br><B>CONDITIONS</B>: " + feature.properties.conditions + 
									"<br><B>FIELD NOTES</B>: " + feature.properties.notes + 
									"<hr><B>TAX INFO</B><BR>LEADLOT: " + feature.properties.leadlot +
									"<BR>TAXES: $" + feature.properties.taxes +									
									"<br>ASSESSED: $"+feature.properties.totalassmt +
									"<br>LIENS (CITY): $" + feature.properties.city_liens + 
									"<br>LIENS (PRIVATE): $" + feature.properties.priv_liens + 
									"<hr><b>LAND USE INFO</B><BR>REDEV'T AREA: " + feature.properties.redev_area + 
									"<br>ZONING: "+feature.properties.zone_abrv+"&nbsp"+feature.properties.descriptio + 
									"<hr><b>ACTIONS</B><BR>TAX FORECLOSURE: " + feature.properties.foreclosed + 
									"<br>CITY AUCTION: " + feature.properties.auction;
				layer.bindPopup(popupContent);
				}
			});
				$('#spinBox').hide();
				infoLayer.addTo(map);
				
		});

<!-- array to hold the different overlay layers we're creating from different queries of the property database -->
  overlayLayers = {}; 
		<!-- don't forget to add any new layers to the menu! -->
  var sublayers = [allPropsGet, vacantPropsGet, lienPropsGet, cityOwnedVacGet, redevAreaGet];



<!-- basic parcel outlines - for some reason the layer selector breaks if this isn't loaded early. one day i'll learn why. -->
  
  cartodb.createLayer(map, parcelMasterURL)
    .addTo(map)
    .on('done', function(layer) { 
      layer.setZIndex(1);
      var sublayer = layer.getSubLayer(0);
      sublayer.set(allPropsGet);
      sublayers.push(sublayer);
      overlayLayers["BASE PARCELS"] = layer;

      layer.setInteraction(true);
	  

     }).on('error', function() { 
      //log the error
    });

 	
  var allPropsGet = {
    sql: "SELECT * FROM trenton_master",
    cartocss: "#trenton_properties{polygon-fill: #fff; polygon-opacity:0;line-color:#999; line-opacity:0.2;} #trenton_properties[parc_type='OPEN SPACE OR CEMETERY'] {polygon-fill:#259073; polygon-opacity:.3;}",
  }
  
  var vacantPropsGet = {
    sql: "SELECT * FROM trenton_master where parc_type like '%VACANT%'",
    cartocss: "#trenton_master[parc_type='VACANT LOT']{polygon-fill: #B9D132; polygon-opacity:0.5;line-color:#fff; line-opacity:0.4;} #trenton_master[parc_type = 'VACANT BLDG'] {polygon-fill: #FF0000; polygon-opacity:0.5;line-color: #fff; line-opacity:0.4;} #trenton_master[parc_type = 'VACANT LOWER'] {polygon-fill: #FF9900; polygon-opacity:0.6;line-color: #fff; line-opacity:0.4;}",
	  }

 

  var lienPropsGet = {
    sql: "SELECT * FROM trenton_master where (city_liens > 0 or priv_liens > 0)",
    cartocss: "#trenton_properties{polygon-fill: #000; polygon-opacity:0.2;line-color:#00FFFF ; line-width: 2; line-opacity:0.7;}"
  }
  
    var cityOwnedVacGet = {
    sql: "SELECT * FROM trenton_master where (owner like '%CITY OF TRENTON%' and parc_type like '%VACANT%')",
    cartocss: "#trenton_properties{polygon-opacity:0;line-color:#FFFF00; line-width: 2; line-opacity:0.6;}"
  }

 var redevAreaGet = {
	 sql: "SELECT * FROM redev_areas"}
	 
 var ngbhd_basicGet = {
	 sql: "SELECT * FROM ngbhd_master"
	 }
  
<!-- var homesteadGet = {
 //   sql: "SELECT * FROM trenton_master where owner = 'CITY OF TRENTON' and class = '2' and parc_type = 'VACANT BLDG' and redev_area is not NULL",
 //   cartocss: "#trenton_properties{polygon-fill: #00FBFF; polygon-opacity:0.2;line-color:#00FBFF ; line-width: 3; line-opacity:0.8;}"
 // }

 
  var auctionsGet = {
	 sql: "SELECT * FROM auctionURL",
	 cartocss: "#auctions{polygon-fill:...; ...}"
 }
 
 
-->

<!-- here are the vacants -->  
  cartodb.createLayer(map, parcelMasterURL)
    .addTo(map)
    .on('done', function(layer) { 
      layer.setZIndex(2);
      var sublayer = layer.getSubLayer(0);
	  sublayer.set(vacantPropsGet);
      sublayers.push(sublayer);
      overlayLayers["VACANT PROPERTIES"] = layer;

      layer.setInteraction(false);
	  
     }).on('error', function() { 
      //log the error
    });

	
<!-- taking out the homestead layer since we don't KNOW YET, argh	-->
//  cartodb.createLayer(map, parcelMasterURL)
//    .addTo(map)
//    .on('done', function(layer) { 
//      layer.setZIndex(4);
//      var sublayer = layer.getSubLayer(0);
//      sublayer.set(homesteadGet);
//      sublayers.push(sublayer);
//      overlayLayers["POSSIBLE HOMESTEADS"] = layer;
//        layer.setInteraction(false);
	  
//     }).on('error', function() { 
      //log the error
//    });


<!-- enable the auction layer when there's an upcoming auction -->	
/*  cartodb.createLayer(map, parcelMasterURL)
    .addTo(map)
    .on('done', function(layer) { 
      layer.setZIndex(5);
      var sublayer = layer.getSubLayer(0);
      sublayer.set(auctionGet);
      sublayers.push(sublayer);
      overlayLayers["AUCTIONS"] = layer;
      layer.setInteraction(false);
	  
     }).on('error', function() { 
      //log the error
    });
*/

<!-- city-owned vacants -->
 cartodb.createLayer(map, parcelMasterURL)
    .on('done', function(layer) { 
      layer.setZIndex(10);
      var sublayer = layer.getSubLayer(0);
      sublayer.set(cityOwnedVacGet);
      sublayers.push(sublayer);
      overlayLayers["CITY-OWNED VACANTS"] = layer;
      layer.setInteraction(false);

     }).on('error', function() { 
      //log the error
    });	


	
<!-- liens, whoo -->
  cartodb.createLayer(map, parcelMasterURL)
    .on('done', function(layer) { 
      layer.setZIndex(5);
      var sublayer = layer.getSubLayer(0);
      sublayer.set(lienPropsGet);
      sublayers.push(sublayer);
      overlayLayers["TAX LIENS"] = layer;
	        layer.setInteraction(false);
	  	  
     }).on('error', function() { 
      //log the error
    });

<!-- neighborhood boundaries -->
cartodb.createLayer(map, ngbhd_masterURL)
    .on('done', function(layer) { 
      layer.setZIndex(13);
      var sublayer = layer.getSubLayer(0);

      sublayer.set(ngbhd_basicGet);
      sublayers.push(sublayer);
	  layer.setInteraction(false);
      overlayLayers["NEIGHBORHOOD BOUNDARIES"] = layer;
	 
     }).on('error', function() { 
      //log the error
    });
	
<!-- redevelopment areas -->
cartodb.createLayer(map, redev_areasURL)
    .on('done', function(layer) { 
      layer.setZIndex(15);
      var sublayer = layer.getSubLayer(0);

      sublayer.set(redevAreaGet);
      sublayers.push(sublayer);
	  layer.setInteraction(false);
      overlayLayers["REDEVELOPMENT AREAS"] = layer;
	  
	  <!-- YOU HAVE TO PUT THE LAYER SELECTOR IN THE LAST LAYER. DON'T $@^! ASK. -->
	  L.control.layers(bases, overlayLayers, {position:'topleft'}).addTo(map);



     }).on('error', function() { 
      //log the error
    });

<!-- data mode switcher -->	

var listOn = 0;
	
	modeSwitcher.addTo(map);
	
	modeSwitcher.on('click', function() {

	if (listOn !=1) {
		modeList.style.display='block';
		listOn = 1;
		}
	
	else {
		modeList.style.display='none';
		listOn = 0;
		}
	});

	function displaySelectedMode(){
		var whichMode = $( "input:radio[name=mode]:checked" ).val();
		console.log(whichMode);

			if (whichMode == "crime_mode") {
					loadCrimeInterface();
				}
			
			else if (whichMode =="ngbhd_mode") {
					loadNgbhdInterface();
			}
			else if (whichMode =="property_mode") {
				map.removeLayer(crimeCluster);
				map.removeLayer(crimeHeat);
	
				if (crimeButtonOn != 0){
					crimeSidebarButton.removeFrom(map);
					crimeButtonOn = 0;
					};
					
				map.removeLayer(ngbhdLayer);
				if (ngbhdButtonOn !=0){
					ngbhdSidebarButton.removeFrom(map);
					ngbhdButtonOn = 0;
				};
				
			}
	}


 <!-- property query sidebar -->
 
  var div_sidebar = document.createElement('div');
  div_sidebar.id = "sidebar";
  div_sidebar.class = "sidebar";
  $('body')[0].appendChild(div_sidebar);
  
  sidebar = L.control.sidebar('sidebar', {
      position: 'left'
  });
	map.addControl(sidebar);
	sidebar.setContent(config.propertySearch_sidebar);
  
  	searchButton = new L.Control.Button(L.DomUtil.get('searchbutton'), { toggleButton: 'active' });
	searchButton.addTo(map);
	searchButton.on('click', function () {
		sidebar.toggle()
	});

 <!-- dashboard sidebar -->
 
  var dashboard_sidebar = document.createElement('div');
  dashboard_sidebar.id = "dashboardSidebar";
  dashboard_sidebar.class = "sidebar";
  $('body')[0].appendChild(dashboard_sidebar);
  
  dashboardSidebar = new L.control.sidebar('dashboardSidebar',{
      position: 'right'
  });
	map.addControl(dashboardSidebar);
	
 <!-- stupid Google search addresses (THIS DOES NOT QUERY THE ACTUAL dB) -->
	searchModule = new L.Control.GeoSearch({
				provider: new L.GeoSearch.Provider.Google(), showMarker: false,
			})
	quicksearchButton = new L.Control.Button(L.DomUtil.get('quicksearchbutton'), { toggleButton: 'active' });
	quicksearchButton.addTo(map);
	quicksearchButton.on('click', function () {
		if (quickSearchOn != 0) {
			searchModule.removeFrom(map);
			quickSearchOn = 0;
			console.log('quick search is now off');
		}
		else {
			searchModule.addTo(map); 
			quickSearchOn = 1;
				console.log('quick search is now on');
		}

	});	
  

 
//searchie searchie!
  

		var parcelPolygon = new L.geoJson();
  
  	function runQuery(){

		map.removeLayer(parcelPolygon);
		cartoURL = 'https://restoringtrenton.cartodb.com/api/v2/sql?format=GeoJSON&q=';
		query_string = "SELECT address, parc_type, owner, ownstreet, owncity, conditions, notes, waiv_type, leadlot, class, taxes, bldgassmt, totalassmt, lastsold, saleprice, city_liens, priv_liens, zone_abrv, descriptio, redev_area, histdist, foreclosed, auction, cartodb_id, the_geom from trenton_master";
		var input_parc_type = $('#SR_parc_type').val();
		var input_zoning = $('#SR_zoning').val();
		var input_owner = $('#SR_owner').val();
		var input_owner_add = $('#SR_owner_add').val();
	    var input_address = $('#SR_address').val();
		var input_count = 0;
		var whereClause = "";
		var selections = [];
		var optionClause = '';
		var checkedOptions = [];
		var option_count = 0;
	
		
		if (input_parc_type == 'ANY'){
			whereClause = " WHERE ";
			input_parc_type = "parc_type is not null";
			input_count = input_count+1;
			selections[input_count] = input_parc_type;
			console.log (whereClause, input_parc_type, input_count, selections[input_count]);
		}
		else{
			whereClause = " WHERE ";
			input_parc_type = "parc_type = '" + input_parc_type + "'";
			input_count = input_count+1;
			selections[input_count] = input_parc_type;
			console.log (whereClause, input_parc_type, input_count, selections[input_count]);
		}
		
		if (input_zoning != 'ANY'){
			input_zoning = "descriptio = '" + input_zoning + "'";
			input_count = input_count+1;
			selections[input_count] = input_zoning;
			console.log (whereClause, input_zoning, input_count, selections[input_count]);
			}
		
		if (input_owner != "") {
			whereClause = " WHERE ";
			input_owner = input_owner.toUpperCase();
			input_owner = "owner ilike '%"+ input_owner + "%'";
			input_count = input_count+1;
			selections[input_count] = input_owner;
			console.log (whereClause, input_owner, input_count, selections[input_count]);
		}

		if (input_owner_add != "") {
			whereClause = " WHERE ";
			input_owner_add = input_owner_add.toUpperCase();
			var parse_ownadd_array = input_owner_add.split(" ");
			
			if (parse_ownadd_array.length > 0) {
				input_owner_add = "ownstreet like '%"+ parse_ownadd_array[0] +"%' or owncity like '%"+ parse_ownadd_array[0] + "%'";
				if (parse_ownadd_array.length > 1) {
						for (i in parse_ownadd_array.length, i=1, i++) {
				input_owner_add = input_owner_add + " OR ownstreet like '%"+ parse_ownadd_array[i] +"%' or owncity like '%"+ parse_ownadd_array[i] + "%')";
				}
				}
				}
			input_owner_add = "(" + input_owner_add + ")";
			input_count = input_count+1;
			selections[input_count] = input_owner_add;
			console.log (whereClause, input_owner_add, input_count, selections[input_count]);
		}

		
		if (input_address != "") {
			//add scrubber for North, South, etc. and street type
			whereClause = " WHERE ";
			input_address = input_address.toUpperCase();
			input_address = "address ilike '%" + input_address + "%'";
			input_count = input_count+1;
			selections[input_count] = input_address;
			console.log (whereClause, input_address, input_count, selections[input_count]);
		}
		
		if (document.getElementById("SR_class").checked) {
			whereClause = " WHERE ";
			input_count = input_count+1;
			selections[input_count] = "class = '2'";
		}
		
		if ((document.getElementById("dumping").checked) || (document.getElementById("trash").checked) || (document.getElementById("xs").checked) || (document.getElementById("dilapidated").checked) || (document.getElementById("unsecured").checked) || (document.getElementById("animals").checked) || (document.getElementById("unmaintained").checked) || (document.getElementById("weeds").checked)) {
			whereClause = " WHERE ";
			//add dropdown AND/OR operator!
			input_count = input_count+1;
			
			if (document.getElementById("dumping").checked) {
			checkedOptions[option_count] = "DUMPING";
			option_count = option_count + 1;
			}
			
			if (document.getElementById("trash").checked) {
			checkedOptions[option_count] = "TRASH";
			option_count = option_count + 1;
			}
			
			if (document.getElementById("xs").checked) {
			checkedOptions[option_count] = "XS";
			option_count = option_count + 1;
			}
			
			if (document.getElementById("dilapidated").checked) {
			checkedOptions[option_count] = "DILAPIDATED";
			option_count = option_count + 1;
			}
			
			if (document.getElementById("unsecured").checked) {
			checkedOptions[option_count] = "UNSECURED";
			option_count = option_count + 1;
			}
			
			if (document.getElementById("animals").checked) {
			checkedOptions[option_count] = "ANIMALS";
			option_count = option_count + 1;
			}
			
			if (document.getElementById("unmaintained").checked) {
			checkedOptions[option_count] = "UNMAINTAINED";
			option_count = option_count + 1;
			}
			
			if (document.getElementById("weeds").checked) {
			checkedOptions[option_count] = "WEEDS";
			option_count = option_count + 1;
			}
			
			if (option_count > 0) {
			optionClause = "CONDITIONS ilike '%" + checkedOptions[0] + "%'";
			for (i=1; i<option_count; i++) {
				optionClause = optionClause + " OR CONDITIONS ilike '%" + checkedOptions[i] + "%'";
			}
			}
				
			selections[input_count] = optionClause;
			console.log (whereClause, optionClause, input_count, selections[input_count]);
		}
		
		query_string = query_string + whereClause + selections[1];
		console.log(query_string);
		
		if (input_count > 1) {
		for (i=2; i <= input_count; i++) {
		query_string = query_string + " AND " + selections[i];
		}
		
		}
				cartoURL = cartoURL + encodeURI(query_string);
                console.log('calling url = '+ cartoURL);

	  }

	function mapSelection()
	{
		hideTable();
		var spinner = new Spinner().spin(spinBox);
		$('#spinBox').show();
	
		runQuery();
		

			$.getJSON(cartoURL, function(data) {
			
				parcelPolygon = L.geoJson(data, {
					onEachFeature: function (feature, layer) {
				 				var bounds = layer.getBounds();
								var center = bounds.getCenter();
				 				var propAdd = feature.properties.address;
								var cartodbID = feature.properties.cartodb_id;
								var formURL="https://docs.google.com/forms/d/11QPK0sF29VREQR3ke-Td3EUd1LoCh9UbHR8um8xSOrY/viewform?entry.1233008467="+propAdd+"&entry.492807532="+cartodbID+"&entry.935525454="+center+"&entry.1771840456&entry.1915372513&entry.2060863861&entry.1480924992&entry.1569579456";
				
				 
					var popupContent = "<b>"+ feature.properties.address + "</b><br>"+ feature.properties.parc_type+"<hr><b><a target = 'blank' href='"+ formURL + "'>REPORT AN ISSUE</a></b>" +"<hr><b>OWNER</B><BR>"+feature.properties.owner+"<br>"+feature.properties.ownstreet+"<br>"+feature.properties.owncity+"<br><br><B>CONDITIONS</B>: "+feature.properties.conditions+"<br><B>FIELD NOTES</B>: "+feature.properties.notes+"<hr><B>TAX INFO</B><BR>TAXES: $"+feature.properties.taxes+"<br>ASSESSED: $"+feature.properties.totalassmt +"<br>LIENS (CITY): $"+feature.properties.city_liens+"<br>LIENS (PRIVATE): $"+feature.properties.priv_liens+"<hr><b>LAND USE INFO</B><BR>REDEV'T AREA: "+feature.properties.redev_area+"<br>ZONING: "+feature.properties.zone_abrv+"&nbsp"+feature.properties.descriptio+"<hr><b>ACTIONS</B><BR>TAX FORECLOSURE: "+feature.properties.foreclosed + "<br>CITY AUCTION: "+feature.properties.auction;
					layer.bindPopup(popupContent);
					}
				});
				map.fitBounds(parcelPolygon.getBounds());
				parcelPolygon.addTo(map);
				$('#spinBox').hide();
	 
			});
			queryHighlightOn=1;
			deselectButton.addTo(map);
			deselectButton.on('click', function () {
				clearSelection();
			});
	}
    	
	
	
	function clearSelection()
	{
		hideTable();
		query_string = '';
		cartoURL = '';
		map.removeLayer(parcelPolygon);
		advanced_search.reset();
		queryHighlightOn=0;
		deselectButton.removeFrom(map);
		map.setView([40.224, -74.76], 15);
		
     }

	function downloadSelection()
	{
		runQuery();
		cartoURL = 'https://restoringtrenton.cartodb.com/api/v2/sql?format=CSV&filename=restoring_trenton_query.csv&q=';
		cartoURL = cartoURL + encodeURI(query_string);
		window.open(cartoURL);
     
		}
		
	function makeTable()
	{
		runQuery();
		cartoURL = 'https://restoringtrenton.cartodb.com/api/v2/sql?format=CSV&filename=restoring_trenton_query.csv&q=';
		cartoURL = cartoURL + encodeURI(query_string);

		document.getElementById('queryTable').innerHTML = config.table_base;
		var spinner = new Spinner().spin(spinBox);
		$('#spinBox').show();
		
		d3.text(cartoURL, function(data) {
                var parsedCSV = d3.csv.parseRows(data);

                var container = d3.select("#queryTable")
                    .append("table")

                    .selectAll("tr")
                        .data(parsedCSV).enter()
                        .append("tr")

                    .selectAll("td")
                        .data(function(d) { return d; }).enter()
                        .append("td")
                        .text(function(d) { return d; });
				
				$('#spinBox').hide();
            	
			});
		document.getElementById('map').style.display = 'none';	
		document.getElementById('queryTable').style.display = 'block';

	}
	function hideTable()
	{
		document.getElementById('queryTable').style.display = 'none';
		document.getElementById('map').style.display = 'block';
	}

function crimeQuery() {

	crimeSQL = '';
	var crimeYearVariables = $('input:checkbox:checked.year').map(function () {
	  return this.id;
	}).get();

	var crimeTypeVariables = $('input:checkbox:checked.crimecat').map(function () {
	  return this.id;
	}).get();

	var typeSQL = '';
	var yearSQL = '';
	var andClause = '';
	
	if ((crimeTypeVariables.length > 0) || (crimeYearVariables.length > 0)) {
				crimeSQL = crimeSQL + ' WHERE';
	}

	if (crimeYearVariables.length > 0) {
		yearSQL = " (year = '"+crimeYearVariables[0]+"'";
		if (crimeYearVariables.length > 1) {
			for (i=1; i<=crimeYearVariables.length-1; i++) {
				yearSQL = yearSQL + " OR year ='"+crimeYearVariables[i]+"'";
				}
			}
		yearSQL = yearSQL+")";
	}

	if (crimeTypeVariables.length > 0) {
	
		if (crimeYearVariables.length > 0){
			andClause = " AND";
		}
		typeSQL = typeSQL + " (crime_cat ilike '%"+crimeTypeVariables[0]+"%'";
			for (i=1; i<=crimeTypeVariables.length-1; i++) {
				typeSQL = typeSQL + " OR crime_cat ilike'%"+crimeTypeVariables[i]+"%'";
				}
		 typeSQL = typeSQL + ")";
			
	}

	crimeSQL = crimeSQL + yearSQL + andClause + typeSQL;
}	

function drawCrime() {

	map.removeLayer(crimeCluster);
	map.removeLayer(crimeHeat);
	map.removeLayer(ngbhdLayer);
	crimeCoords = [];
	crimeCounter = 0;

	
crimeQuery();	

console.log(crimeSQL);

var spinner = new Spinner().spin(spinBox);
$('#spinBox').show();
cartoURL_crimeData = encodeURI("https://restoringtrenton.cartodb.com/api/v2/sql?format=GeoJSON&q=SELECT * FROM crime_master" + crimeSQL);
console.log(cartoURL_crimeData);

	crimeCluster = new L.markerClusterGroup(
	{
			disableClusteringAtZoom: 16 ,
			showCoverageOnHover: false,
			iconCreateFunction: function (cluster) {
				var markers = cluster.getAllChildMarkers();
				var html = '<div class="circle">' + markers.length + '</div>';
				return L.divIcon({ html: html, className: 'mycluster', iconSize: L.point(32,32) });
			}
		});
		$.getJSON(cartoURL_crimeData,
            function(data) {
			
	        crimeData = L.geoJson(data, {				
				style: function(feature) {
					switch (feature.properties.crime_cat) {
						case 'Larceny Theft': return {fillColor: "#FFFF00"};
						case 'Aggravated Assualt': return {fillColor: "#ff0000"};
						case 'Robbery': return {fillColor: "#FF66FF"};
						case 'Motor Vehicle Theft': return {fillColor: "#FF9966"};
						case 'Burglary': return {fillColor: "#660033"};
						case 'Rape': return {fillColor: "#CC0066"};
						case 'Arson': return {fillColor: "#FF9900"};
						case 'Homicide': return {fillColor: "#FF3300"};
					}
				},
				pointToLayer: function(feature, latlng) {
					return new L.CircleMarker(latlng, {radius: 10, fillOpacity: 0.9, color:"#fff"});
				},

				onEachFeature: function (feature, layer) {
							
				var crimePopup = "<b>"+ feature.properties.crime_cat.toUpperCase() +"</b>" +
				"<br><b>Location:</b> "+feature.properties.location+
				"<br><B>Month/Year</b>: "+feature.properties.month + " " + feature.properties.year + 
				"<hr>"+
				"<b>Charge:</b> " + feature.properties.charge + 
				"<hr>"+
				"<b>Neighborhood: </b>" + feature.properties.ngbhd + 
				"<br><b>Block: </b>" + feature.properties.block	;
				layer.bindPopup(crimePopup);
				crimeCoords.push([feature.geometry.coordinates[1],feature.geometry.coordinates[0]]);
				crimeCounter++;
				}
			});
				$('#spinBox').hide();
				crimeCluster.addLayer(crimeData);
				document.getElementById('crimeQueryResult').innerHTML = "<b># OF INCIDENTS FOUND: <span style='background-color:red;color:white'> &nbsp" +crimeCounter+ "&nbsp</span>";	
		});
		
		if (document.getElementById("incidents").checked) {
			crimeCluster.addTo(map);
		}
		
		if (document.getElementById("heatmap").checked) {
			crimeHeatmap();
		}
		
		if (!document.getElementById("incidents").checked) {
			map.removeLayer(crimeCluster);
		}

	document.getElementById('crimeQueryResult').style.display = 'block';
}


function loadCrimeInterface() {
	dashboardSidebar.setContent(config.crimeSidebar_content);
	if (!dashboardSidebar.isVisible()) {
		dashboardSidebar.toggle();
		}
	if ($.contains( document.crimeSidebarButton, document.map )!=='true'){
		crimeSidebarButton.addTo(map);
		crimeButtonOn = 1;
	};
	
	if (ngbhdButtonOn !=0){
		ngbhdSidebarButton.removeFrom(map);
		ngbhdButtonOn = 0;
	};
	
	map.setZoom(13);
	drawCrime();

}

function crimeHeatmap() {

			dynamiczoomspecs();

			$.getJSON(cartoURL_crimeData,
				function(data) {
				   
				var heatIntensity = 1;
				if (crimeCounter < 1000) {
					heatIntensity = 1/(2000*crimeCounter);
				}
				
				else if (crimeCounter >= 1000 && crimeCounter < 3000){
					heatIntensity= 3*(1/crimeCounter);
					}
				
				else if (crimeCounter >= 3000 && crimeCounter < 5000){
					heatIntensity= 10*(1/crimeCounter);
					}
					
				else if (crimeCounter >= 5000 && crimeCounter < 10000){
					heatIntensity= .005;
					}
				
				else {
				    heatIntensity = .02;
				}
				
				console.log("crimeCounter = " + crimeCounter + " and heatIntensity = "+ heatIntensity);
					crimeHeat = L.heatLayer(crimeCoords, {radius: relsize, blur: relsize, max:heatIntensity}).addTo(map);
					
				});
			}

 			function dynamiczoomspecs()
			{	
				var currzoom = map.getZoom();
				if (currzoom < 12) { relsize = 2; }
				if (currzoom >= 12) {
					relsize = (currzoom - 10)*2.2;
				}
				crimeHeat.setOptions({radius:relsize, blur:relsize});
				console.log('currzoom = '+currzoom+' and relsize = '+relsize);
			}
	
map.on('zoomend', function(e){
	console.log('map zoomed');
	if ($.contains( document.crimeHeat, document.map )!=='false'){
		dynamiczoomspecs();
		crimeHeat.redraw();
	}
	});	

var ngbhdSidebar_content ='';	
var selectedIndicator = 'COMPOSITE';

function loadNgbhdInterface() {
	dashboardSidebar.setContent(config.ngbhdSidebar_content);
	if (!dashboardSidebar.isVisible()) {
		dashboardSidebar.toggle();
		}
	if ($.contains( document.ngbhdSidebarButton, document.map )!=='true'){
		ngbhdSidebarButton.addTo(map);
		ngbhdButtonOn = 1;
	};
	map.removeLayer(ngbhdLayer);
	
	map.removeLayer(crimeCluster);
	map.removeLayer(crimeHeat);
	
	if (crimeButtonOn != 0){
		crimeSidebarButton.removeFrom(map);
		crimeButtonOn = 0;
		};
	
	map.setZoom(13);

	ngbhdSidebar_content = "<br>This is the interactive data portal for the <a style = 'text-decoration: none; font-weight:bold; color:#FF6600' 'href = 'http://www.restoringtrenton.org/#!neighborhood-conditions-study/zqams'>Neighborhood Conditions Study</a>. More details and the full report are <a style = 'text-decoration: none; font-weight:bold; color:#FF6600' href = 'http://www.restoringtrenton.org/#!neighborhood-conditions-study/zqams'>here</a>. <br><br><b>HOW THIS WORKS</B><br><br><li>You're currently seeing the <b>overall market conditions</b> -- a composite score we calculated for each neighborhood based on a bunch of indicators.</li><br><li>Click on a <b>neighborhood</b> to see its overall profile and a table of those indicators.</li><br><li>Click on an <b>indicator</b> to see a map of how different neighborhoods compare on that particular indicator. Scrolling over the map will show you the details for that indicator in each neighborhood.</li><br><li>Some indicators will also display a <b>chart</b> where you can see the trends for that indicator in the neighborhood over time.</li><br><li><b>Export</b> your dashboard by clicking the handy dandy .pdf button near the neighborhood's name.</li>"; 
	document.getElementById("ngbhd_query_form").innerHTML = ngbhdSidebar_content;
	
	drawNgbhds();
}


function refreshNgbhds() {
	map.removeLayer(ngbhdLayer);
	drawNgbhds();
}

//setting up the functions that call the chart
var chartYears = [];
var chartValues = [];
var chartTitle = '';
var yAxisTitle = '';
var chartType = '';
var seriesName = '';
var chartSeries = [];


function callVac() {
	selectedIndicator = 'VACANCY';
	chartValues=[];
	document.getElementById('chartbox').innerHTML = '';
	refreshNgbhds();
}

function callHo() {
	selectedIndicator = 'HOMEOWNERSHIP';
	chartValues=[];
	document.getElementById('chartbox').innerHTML = '';
	refreshNgbhds();
}

function callMSP() {
	chartValues=[];
	selectedIndicator = 'SALE PRICE';
	chartYears=['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013'];
		for (i = 0; i<=arguments.length-1; i++) {
			chartValues[i]=arguments[i];
		}
		console.log(chartYears);
		console.log(chartValues);
	chartTitle='median sales price';
	chartType='line';
	yAxisTitle='$ 000s';
	seriesName = 'median sales price'
	chartSeries = [{name: seriesName, data: chartValues, lineWidth:4, marker:{radius:2}, color:'#FF9933'}];
	makeChart();
	refreshNgbhds();
}

function callDOM() {
	chartValues=[];
	selectedIndicator = 'SALE PRICE';
	chartYears=['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'];
		for (i = 0; i<=arguments.length-1; i++) {
			chartValues[i]=arguments[i];
		}
	chartTitle='median sales price';
	chartType='line';
	yAxisTitle='$ 000s';
	seriesName = 'median days on market'
	chartSeries = [{name: seriesName, data: chartValues, lineWidth:4, marker:{radius:2}, color:'#FF9933'}];
	makeChart();
	refreshNgbhds();
}

function callIP() {
	chartValues=[];
	selectedIndicator = 'INVESTORS';
	chartYears=['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013'];
		for (i = 0; i<=arguments.length-1; i++) {
			chartValues[i]=parseInt(100*arguments[i]);
		}
		chartType='line';
	seriesName = '% of home sales to absentee investors'
	chartSeries = [{name: seriesName, data: chartValues, lineWidth:4, marker:{radius:2}, color:'#FF9933'}];
	makeChart();
	refreshNgbhds();
}

function callForc() {
	chartValues =[];
	selectedIndicator = 'FORECLOSURE';
	chartYears=['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'];
		for (i = 0; i<=arguments.length-1; i++) {
			chartValues[i]=parseInt(arguments[i]*100);
		}	
	chartType='line';
	chartTitle='home foreclosures';
	seriesName = '% of all homes foreclosed';
	chartSeries = [{name: seriesName, data: chartValues, lineWidth:4, marker:{radius:2}, color:'#FF9933'}];
	makeChart();
	refreshNgbhds();
}

function callTaxDel() {
	selectedIndicator = 'TAX DELINQUENCY';
	chartValues=[];
	document.getElementById('chartbox').innerHTML = '';
	refreshNgbhds();
}

function callTaxLien() {
	selectedIndicator = 'TAX LIENS BOUGHT';
	chartValues=[];
	document.getElementById('chartbox').innerHTML = '';
	refreshNgbhds();
}

function callCrime() {
	selectedIndicator = 'VIOLENT CRIME';
	chartValues=[];
	document.getElementById('chartbox').innerHTML = '';
	refreshNgbhds();
}

function callComp() {
	selectedIndicator = 'COMPOSITE';
	chartValues=[];
	document.getElementById('chartbox').innerHTML = '';
	chartValues=[1,2,4,5];
	refreshNgbhds();
}

		
			dashboardSidebar.update = function(props) {
				selNgbhd = props.nsa;
				ngbhdSidebar_content = 
					"<button class='btn-primary' id='export_as_pdf' style='float: right; padding-left:7px; padding-right:7px;font-family:Open Sans;font-weight:bold' onclick='javascript:exportPDF();'><i class='fa fa-file-pdf-o fa-2x'></i></button>" +
					"<h2>" + props.nsa.toUpperCase() + "</h2>" +
					"<hr>" +
					"<div id='tierband' style='background-color:#85CECE'><a style='color:#ffffff' href='javascript:callComp()'>HOUSING MARKET</a>: "+ props.comp_class.toUpperCase() + "</div>" + 
					"<div id='chartbox'></div>" +
					"<div id='tableContainer'>" +
					"<table style='width:100%; border:none;text-align:right'>" +
					"<tr><td style='text-align:left'><b>INDICATOR</b><br><span style='font-size:85%'>Click an indicator for maps & charts.</spa</td><td style='text-align:left'><b>CHART?</b></td><td style='text-align:left'><b>VALUE</b></td><td style='text-align:left'><b>TIER</b></td></tr>" +
					"<tr><td style='text-align:left'><a href='javascript:callVac()'>HOME VACANCY RATE</a><br><span style='font-size:85%'>one-time data for 2014</span></td><td></td><td>" + parseInt(100*props.perc_vac) + "%</td><td>" + props.vac + "</td></tr>" +
					"<tr><td style='text-align:left'><a href='javascript:callHo()'>HOMEOWNERSHIP RATE</a><br><span style='font-size:85%'>one-time data for 2014</span></td><td></td><td>" + parseInt(100*props.percent_oo) + "%</td><td>" + props.ho_rate + "</td></tr>" +
					"<tr><td style='text-align:left'><a href='javascript:callMSP(" + props.msp_2006 +","+ props.msp_2007 +"," + props.msp_2008+"," + props.msp_2009+"," + props.msp_2010+"," +props.msp_2011+"," +props.msp_2012+"," +props.msp_2013 + ")'>HOME SALE PRICE</a><br><span style='font-size:85%'>median, 2011-13</span></td><td>X</td><td>" + "$" + parseInt(props.msp_1113) + "</td><td>" + props.sale_pri + "</td></tr>" +
					"<tr><td style='text-align:left'><a href='javascript:callDOM(" + props.mdom_2006 +","+ props.mdom_2007 +"," + props.mdom_2008+"," + props.mdom_2009+"," + props.mdom_2010+"," +props.mdom_2011+"," +props.mdom_2012+"," +props.mdom_2013 + "," +props.mdom_2014 + ")'>DAYS ON MARKET</a><br><span style='font-size:85%'>median, 2011-13</span></td><td>X</td><td>" + parseInt(props.mdom_1113) + "</td><td>" + "N/A" + "</td></tr>" +
					"<tr><td style='text-align:left'><a href='javascript:callIP(" + props.ip_2006/props.sales_2006 +","+ props.ip_2007/props.sales_2007 +"," + props.ip_2008/props.sales_2008+"," + props.ip_2009/props.sales_2009 +"," + props.ip_2010/props.sales_2010+"," +props.ip_2011/props.sales_2011+"," +props.ip_2012/props.sales_2012+"," +props.ip_2013/props.sales_2013+ ")'>INVESTOR PURCHASES</a><br><span style='font-size:85%'>% of all home sales where the buyer was not an owner-occupant, 2000-2013</span></td><td>X</td><td>" + parseInt(100*props.perc_invst) + "%</td><td>" + props.inv_pur + "</td></tr>" +
					"<tr><td style='text-align:left'><a href='javascript:callForc(" + props.frc_2004 +"," + props.frc_2005 +"," + props.frc_2006 +","+ props.frc_2007 +"," + props.frc_2008+"," + props.frc_2009+"," + props.frc_2010+"," +props.frc_2011+"," +props.frc_2012+"," + props.frc_2013 + "," + props.frc_2014 +")'>FORECLOSURE RATE</a><br><span style='font-size:85%'>composite for 2006-14</span></td><td>X</td><td>" + parseInt(100*props.perc_forc) + "%</td><td>" + props.forc + "</td></tr>" +
					"<tr><td style='text-align:left'><a href='javascript:callTaxDel()'>TAX DELINQUENCY</a><br><span style='font-size:85%'>total class 2 tax delinquencies from 2006-2014, as a % of all class 2 properties in the neighborhood</span></td><td>X</td><td> " + parseInt(100*props.perc_tax_l) + "%</td><td>" + props.tax_del + "</td></tr>" +
					"<tr><td style='text-align:left'><a href='javascript:callTaxLien()'>TAX LIEN PURCHASES</a><br><span style='font-size:85%'>% of all tax liens that were bought by investors, 2006-2014 (this shows that investors are still interested)</span></td><td>X</td><td>" + parseInt(100*(props.tls_0614/(props.tls_0614 + props.tlso_0614))) + "%</td><td>" + props.tax_lien_i + "</div>" +
					"<tr><td style='text-align:left'><a href='javascript:callCrime()'>VIOLENT CRIME RATE</a><br><span style='font-size:85%'>incidents per 1000 residents, three-year average for 2011-13</span></td><td></td><td> " + parseInt(props.vc_rate/100) + "</td><td>" + props.vc_score + "</div>";
						"</table>" +
					"</div>";
					document.getElementById("ngbhd_query_form").innerHTML = ngbhdSidebar_content;					
				}

var featureColor = 0;
var selNgbhd = '';

				function getColor(d) {
					if (d==5) { return '#CCFFCC'; }
					else if (d==4) {return '#99FFCC';}
					else if (d==3) {return '#66FFCC';}
					else if (d==2) {return '#00CC99';}
					else if (d==1) {return '#009999';}
					else return '#555555';
				}					

var legendPresent = 0;
var legendContent = '';
var legend = L.control({position: 'topright'});
var div = L.DomUtil.create('div', 'info legend');
				
function drawNgbhds() {
	
	featureColor=0;
	var spinner = new Spinner().spin(spinBox);
	$('#spinBox').show();
	
	cartoURL_ngbhdData = encodeURI("https://restoringtrenton.cartodb.com/api/v2/sql?format=GeoJSON&q=SELECT *, ST_Centroid(the_geom) FROM ngbhd_master" + ngbhdSQL);
	var labelText="";
	
			$.getJSON(cartoURL_ngbhdData,
            function(data) {
				
				ngbhdLayer = L.geoJson(data, {
				
				style: style,
				onEachFeature: function(feature, layer) {
						if (selectedIndicator == 'VACANCY') {labelText = "Vacancy rate: " + parseInt(100*feature.properties.perc_vac) + "%<br>" + "Vacancy tier: " + feature.properties.vac;}
						else if (selectedIndicator == 'HOMEOWNERSHIP') {labelText = "Homeownership: " + parseInt(100*feature.properties.per_ho) + "%<br>" + "Homeownership tier: " + feature.properties.ho_score;}
						else if (selectedIndicator == 'SALE PRICE') {labelText = "Median sale price: $" + feature.properties.msp_1113 + "<br>" + "Sale price tier: " + feature.properties.sale_pri;}
						else if (selectedIndicator == 'INVESTORS') {labelText = "Investor purchases: " + parseInt(100*feature.properties.perc_invst) + "%<br>" + "Investor tier: " + feature.properties.inv_pur;}
						else if (selectedIndicator == 'FORECLOSURE') {labelText = "Foreclosure rate: " + parseInt(100*feature.properties.perc_forc) + "%<br>" + "Foreclosure tier: " + feature.properties.forc;}
						else if (selectedIndicator == 'TAX DELINQUENCY') {labelText = "Tax delinquency: " + parseInt(100*feature.properties.perc_tax_l) + "%<br>" + "Tax delinquency tier: " + feature.properties.tax_del;}				
						else if (selectedIndicator == 'TAX LIENS BOUGHT') {labelText = "Tax liens bought: " + parseInt(100*(feature.properties.tls_0614/(feature.properties.tls_0614 + feature.properties.tlso_0614))) + "%<br>" + "Liens bought tier: " + feature.properties.tax_lien_i;}						
						else if (selectedIndicator == 'VIOLENT CRIME') {labelText = "Violent crimes per 1000 residents: " + parseInt(feature.properties.vc_rate/100) + "<br>" + "Violent crime tier: " + feature.properties.vc_score;}	
						else if (selectedIndicator == 'COMPOSITE') {labelText = "Housing market: " + feature.properties.comp_class;}	
						labelText = "<b>" + feature.properties.nsa.toUpperCase() + "</b><hr><span style='font-weight:normal'>" + labelText + "</span>";
					layer.bindLabel(labelText)						
					layer.on({click: clickNgbhd, mouseover: highlight, mouseout:dehighlight});
						}						
					}).addTo(map)

			
				$('#spinBox').hide();

			function clickNgbhd(e) {
				var layer = e.target;
				selNgbhd = layer.feature.properties.nsa;
				dashboardSidebar.update(layer.feature.properties);
			}
			
			function highlight(e) {
				var layer = e.target;
				layer.bringToFront();
				layer.setStyle({color: '#FF9900', weight:4});
			}
			
			function dehighlight(e) {
				var layer = e.target;
				layer.setStyle({color: '#ffffff', weight:2});
			}
			
			});

			function style(feature) {
			
			if (selectedIndicator == 'VACANCY') {featureColor = feature.properties.vac;}
			else if (selectedIndicator == 'HOMEOWNERSHIP') {featureColor = feature.properties.ho_rate;}
			else if (selectedIndicator == 'SALE PRICE') { featureColor = feature.properties.sale_pri;}
			else if (selectedIndicator == 'INVESTORS') { featureColor = feature.properties.inv_pur; }	
			else if (selectedIndicator == 'FORECLOSURE') {featureColor = feature.properties.forc;}	
			else if (selectedIndicator == 'TAX DELINQUENCY') {featureColor = feature.properties.tax_del;}				
			else if (selectedIndicator == 'TAX LIENS BOUGHT') {featureColor = feature.properties.tax_lien_i;}				
			else if (selectedIndicator == 'VIOLENT CRIME') {featureColor = feature.properties.vc_score;}	
			else if (selectedIndicator == 'COMPOSITE') {
					if (feature.properties.comp_class == 'Very Weak') { featureColor = 5;}
					else if (feature.properties.comp_class == 'Weak') { featureColor = 4;}
					else if (feature.properties.comp_class == 'Moderately Strong') { featureColor = 2;}
					else if (feature.properties.comp_class == 'Strong') { featureColor = 1;}
			}		
			else { 	featureColor = 0; }
			
			return {
					weight: 2,
					opacity: .7,
					color: 'white',
					fillOpacity: 0.7,
					fillColor: getColor(featureColor)
				};
			}
			
			legend.onAdd = function (map) {
				legend.update();
				return div;
			}
			
			legend.update = function() {
				getLegend();
				div.innerHTML = legendContent;
			}

			if (legendPresent == 0) {
				legend.addTo(map);
				legendPresent = 1;
			}
			
			else {
				legend.update();
			}
			
			
}

function getLegend() {
				if (selectedIndicator == 'COMPOSITE') {
				
				categories = ['STRONG','MODERATE','WEAK', 'VERY WEAK'];
				legendContent = '<b>OVERALL CONDITIONS</b><br>';
				for (var i = 0; i < categories.length; i++) {
					legendContent +=
					'<i style="background:' + getColor(i+1) + '"></i> ' +
					(categories[i] ? categories[i] + '<br>' : '+');
				}
				}
				
				else {
				
				categories = ['1: VERY STRONG', '2: STRONG','3: MODERATE','4: WEAK', '5: VERY WEAK'];
				legendContent = '<b>' + selectedIndicator + '</b><br>';
				for (var i = 0; i < categories.length; i++) {
					legendContent +=
					'<i style="background:' + getColor(i+1) + '"></i> ' +
					(categories[i] ? categories[i] + '<br>' : '+');
				}
				}
}

function makeChart() {
	chart = new Highcharts.Chart({
        chart: { renderTo: 'chartbox', type: chartType},
        title: { text:null},
		xAxis: { labels: { step: 2 }, categories: chartYears },
		yAxis: { min: 0, title: { text: null }},
		series: chartSeries,
		plotOptions: {column:{color:'#FF9933'}}
	});

}

function exportPDF() {
	return xepOnline.Formatter.Format('ngbhd_query_form');
}
  
  
</script>
</body>
</html>
