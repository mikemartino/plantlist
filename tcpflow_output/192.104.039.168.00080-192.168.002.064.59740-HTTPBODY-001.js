// Table sorting
var genusSpecies = function(node) {
	if (node == null) return '';
	
	var string = '';

	is = node.getElementsByTagName('a');
	if (is.length == 0) {
		is = node.getElementsByTagName('img');
		if (is.length == 0) return node.innerHTML;
		switch (node.getAttributeNode("class").value) {
			case "C-H": return "1";
			case "C-M": return "2";
			case "C-L": return "3";
			default: return "4";
		}
	}
	
	is = is[0].getElementsByTagName('i');
	if (is.length < 2) { return node.innerHTML;	}	

	for (i=0; i<is.length; i++) {
		if (is[i].getAttribute("class") != 'genushybrid' && is[i].getAttribute("class") != 'specieshybrid') {
			string += is[i].innerHTML + ' ';
		}
	}
	
	return string;
}

var tplOneTableAlready = false;
var tplTableInit = function(id) {
	$(document).ready(function() {
		$("#"+id).tablesorter( { textExtraction: genusSpecies, sortInitialOrder: "desc" } )
			.bind("sortStart",function() { $("#tableSortPleaseWait").show(); })
			.bind("sortEnd",function() { $("#tableSortPleaseWait").hide(); });
		if (!tplOneTableAlready) {
			$("#"+id).parent().append("<div id='tableSortPleaseWait'>Please wait, sorting table...</div>");
			$("#tablehelp").after("<p>Sort the name records using the <img src='/1.1/img/updown-h.png' alt='clickable table header' /> buttons.</p>");
			tplOneTableAlready = true;
		}
	});
}

// Pie chart
var tplPieInit = function(elem) {
	$(document).ready(function() {
		if (document.getElementById(elem) && document.getElementById(elem).contentDocument) {
			$("#"+elem+"acc").bind('mouseover', function() {
				document.getElementById(elem).contentDocument.method(elem+'acc', true);
			});
			$("#"+elem+"acc").bind('mouseout', function() {
				document.getElementById(elem).contentDocument.method(elem+'acc', false);
			});
			$("#"+elem+"syn").bind('mouseover', function() {
				document.getElementById(elem).contentDocument.method(elem+'syn', true);
			});
			$("#"+elem+"syn").bind('mouseout', function() {
				document.getElementById(elem).contentDocument.method(elem+'syn', false);
			});
			$("#"+elem+"unp").bind('mouseover', function() {
				document.getElementById(elem).contentDocument.method(elem+'unp', true);
			});
			$("#"+elem+"unp").bind('mouseout', function() {
				document.getElementById(elem).contentDocument.method(elem+'unp', false);
			});
			$("#"+elem+"una").bind('mouseover', function() {
				document.getElementById(elem).contentDocument.method(elem+'una', true);
			});
			$("#"+elem+"una").bind('mouseout', function() {
				document.getElementById(elem).contentDocument.method(elem+'una', false);
			});
			$("#"+elem+"unr").bind('mouseover', function() {
				document.getElementById(elem).contentDocument.method(elem+'unr', true);
			});
			$("#"+elem+"unr").bind('mouseout', function() {
				document.getElementById(elem).contentDocument.method(elem+'unr', false);
			});
		}
	});
}

var pie = function(elem, state) {
	$("#"+elem).toggleClass('target', state);
}

// Image gallery (homepage)
var myImages = new Array(
	"a-01",
	"a-02",
	"a-03",
	"a-04",
	"a-05",
	"a-06",
	"a-07",
	"a-08",
	"a-09",
	"a-10",
	"a-11",
	"a-12",
	"a-13",
	"a-14",
	"a-15",
	"a-16",
	"a-17",
	"a-18",
	"a-19",
	"a-20",
	"a-21",
	"a-22",
	"a-23",
	"a-24",
	"a-25",
	"a-26",
	"a-27",
	"a-28",
	"a-29",

	"b-01",
	"b-02",
	"b-03",
	"b-04",
	"b-05",
	"b-06",
	"b-07",
	"b-08",

	"g-01",
	"g-02",
	"g-03",
	"g-04",
	"g-05",
	"g-06",
	"g-07",
	"g-08",
	"g-09",
	"g-10",
	"g-11",
	"g-12",
	"g-13",
	"g-14",
	"g-15",
	"g-16",
	"g-17",
	"g-18",
	"g-19",

	"h-01",
	"h-02",

	"p-01",
	"p-02",
	"p-03",
	"p-04",
	"p-05",
	"p-06",
	"p-07",
	"p-08",
	"p-09",
	"p-10",
	"p-11",
	"p-12"
);

var myCredits = new Array(
	"Andrew McRobb",
	"Paul Little",
	"Andrew McRobb",
	"Andrew McRobb",
	"Andrew McRobb",
	"Andrew McRobb",
	"Andrew McRobb",
	"Andrew McRobb",
	"Andrew McRobb",
	"Andrew McRobb",
	"Andrew McRobb",
	"Andrew McRobb",
	"Andrew McRobb",
	"RBG Kew",
	"Gwil Lewis",
	"Gwil Lewis",
	"Gwil Lewis",
	"Gwil Lewis",
	"Gwil Lewis",
	"Gwil Lewis",
	"Gwil Lewis",
	"Gwil Lewis",
	"Gwil Lewis",
	"Gwil Lewis",
	"Gwil Lewis",
	"RBG Kew",
	"Gwil Lewis",
	"Gwil Lewis",
	"Gwil Lewis",

	"Eliana Calzadilla",
	"Eliana Calzadilla",
	"Alfredo Fuentes",
	"Eliana Calzadilla",
	"Eliana Calzadilla",
	"Eliana Calzadilla",
	"Eliana Calzadilla",
	"Eliana Calzadilla",
	
	"Andrew McRobb",
	"Andrew McRobb",
	"Andrew McRobb",
	"Andrew McRobb",
	"Aljos Farjon",
	"Aljos Farjon",
	"Aljos Farjon",
	"Aljos Farjon",
	"Aljos Farjon",
	"Aljos Farjon",
	"Aljos Farjon",
	"Aljos Farjon",
	"Aljos Farjon",
	"Aljos Farjon",
	"Andrew McRobb",
	"Andrew McRobb",
	"Andrew McRobb",
	"Andrew McRobb",
	"Andrew McRobb",

	"Andrew McRobb",
	"Andrew McRobb",

	"Andrew McRobb",
	"Andrew McRobb",
	"Andrew McRobb",
	"Andrew McRobb",
	"Andrew McRobb",
	"Andrew McRobb",
	"Andrew McRobb",
	"Andrew McRobb",
	"Andrew McRobb",
	"Andrew McRobb",
	"Andrew McRobb",
	"Andrew McRobb"
);

var myScientificNames = new Array(
	"",
	"",
	"Aphelandra flava Nees",
	"Cocos nucifera L.",
	"",
	"Kniphofia sp.",
	"",
	"Galanthus sp.",
	"Artocarpus altilis (Parkinson ex F.A.Zorn) Fosberg",
	"",
	"Agave attenuata Salm-Dyck",
	"",
	"",
	"Harpullia rhachiptera Radlk.",
	"Caesalpinia cacalaco Humb. & Bonpl.",
	"Caesalpinia madagascariensis (R.Vig.) Senesse",
	"Caesalpinia bonduc (L.) Roxb.",
	"Adenanthera pavonina L.",
	"Abrus precatorius L.",
	"Poincianella exostemma (DC.) Britton & Rose",
	"Calliandra coccinea Renvoize",
	"Calliandra lanata Benth.",
	"Entada polystachya (L.) DC.",
	"Inga flagelliformis (Vell.) Mart.",
	"Colutea arborescens L.",
	"Clianthus puniceus (G.Don) Lindl. ",
	"Lotus maculatus Breitf.",
	"Moldenhawera nutans L.P.Queiroz, G.P.Lewis & Allkin",
	"Pterogyne nitens Tul.",

	"Eulacophyllum cultelliforme (Sull.) W.R. Buck & Ireland",
	"Symphyogyna brongniartii Mont.",
	"Splachnum weberbaueri Reimers",
	"Sphagnum magellanicum Brid.",
	"Prionodon fuscolutescens Hampe",
	"Porella sp.",
	"Monoclea gottschei Lindb.",
	"Mittenothamnium reptans (Hedw.) Cardot",

	"",
	"",
	"Welwitschia mirabilis Hook.f.",
	"Welwitschia mirabilis Hook.f.",
	"Abies delavayi Franch.",
	"Araucaria bidwillii Hook.",
	"Callitris muelleri (Parl.) Benth. & Hook.f. ex F.Muell.",
	"Cephalotaxus harringtonii (Knight ex J.Forbes) K.Koch",
	"Juniperus occidentalis Hook.",
	"Picea likiangensis (Franch.) E.Pritz.",
	"Pinus attenuata Lemmon",
	"Pinus ponderosa Douglas ex C.Lawson",
	"Sequoiadendron giganteum (Lindl.) J.Buchholz",
	"Podocarpus rumphii Blume",
	"Cycas rumphii Miq.",
	"Encephalartos woodii Sander",
	"Encephalartos ferox G.Bertol.",
	"Ginkgo biloba L.",
	"Ginkgo biloba L.",

	"",
	"",

	"Matteuccia struthiopteris (L.) Tod.",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"Hymenophyllum sibthorpioides (Willd.) Kuhn",
	""
);

var tplSlideshowInit = function(group) {
	$('#slideshow').empty();

	if (group != null && group.length == 1) {
		var num = 0;
		var images = [];
		while (num < myImages.length) {
			if (myImages[num].charAt(0) == group) {
				images.push('<img src="/1.1/img/photo/' + myImages[num] + '.jpg" alt="' + myScientificNames[num] +'" title="' + myCredits[num] + '" />');
			}
			num++;
		}
		
		for(
			var j, x, i = images.length; i;
			j = parseInt(Math.random() * i),
			x = images[--i], images[i] = images[j], images[j] = x
		);

		for (num = 0; num < images.length; num++) {
			$('#slideshow').append(images[num]);
		}
	}
	else {
		var tmp = "0";
		var added = 0;
		while (added < 5) {
			var num = Math.round(Math.random() * (myImages.length - 1));
			if (tmp.indexOf(num) == -1) {
				$('#slideshow').append('<img src="/1.1/img/photo/' + myImages[num] + '.jpg" alt="' + myScientificNames[num] +'" title="' + myCredits[num] + '" />');
				added++;
				tmp = tmp + ":" + num;
			}
		}
	}

	$(function() {
		$('#slideshow').cycle({
			delay: 1000,
			speed: 1000,
			before: onBefore,
			pause: 1
		});

		function onBefore() {
			if (this.alt.length > 0) {
				var nameEnd = this.alt.indexOf(" ", this.alt.indexOf(" ") + 1);
				$('#slideshowname').html("<i>" + this.alt.substring(0, nameEnd) + "</i> " + this.alt.substring(nameEnd));
			}
			else {
				$('#slideshowname').html("&nbsp;");
			}
			$('#slideshowcredit').html(this.title);
		}
	});
}

// Autocompleter
try {
	$("#q").ready(function() {
		var options = {
			script: "/tpl1.1/sc?",
			varname: "q",
			timeout: 15000,
			minchars: 3,
			cache: true,
			shownoresults: false
		};
		var as = new bsn.AutoSuggest('q', options);
	});
}
catch(err) {}

// Google analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-1321334-15']);
_gaq.push(['_trackPageview']);

try {
	(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
}
catch(err) {}
