<?php
	/***
	 * Handles request from the link 'Change location' in a map popup.
	 * Returns the clicked map location as GPX file.
	 */
	// Get location from URL
	$location = explode(" ", $_GET['point']);

	// Check for malicious input
	if ( is_numeric($location[0]) && is_numeric($location[1]) ){
		$lon = $location[0];
		$lat = $location[1];
	}
	else {
		exit('<script type="text/javascript">alert("Please provide a valid location.");</script>');
	}

	// Location is valid. Return GPX file with the map location
	header("Content-type: application/octet-stream");
	header("Content-Disposition: attachment; filename=\"map_location.gpx\"");

	// Printing results in GPX
	echo "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\" ?>\n" .
	"<gpx xmlns=\"http://www.topografix.com/GPX/1/1\" xmlns:gpxx=\"http://www.garmin.com/xmlschemas/GpxExtensions/v3\" xmlns:gpxtpx=\"http://www.garmin.com/xmlschemas/TrackPointExtension/v1\" creator=\"Oregon 400t\" version=\"1.1\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd http://www.garmin.com/xmlschemas/GpxExtensions/v3 http://www.garmin.com/xmlschemas/GpxExtensionsv3.xsd http://www.garmin.com/xmlschemas/TrackPointExtension/v1 http://www.garmin.com/xmlschemas/TrackPointExtensionv1.xsd\">\n" .
	  "<metadata>\n" .
	    "<link href=\"http://www.cbm.wur.nl\">\n" .
	      "<text>Kafa Biospere Reserve</text>\n" .
	    "</link>\n" .
	    "<time>" . gmdate("Y-m-d\Th:i:s\Z") . "</time>\n" .
	  "</metadata>\n";

		echo "<wpt lat=\"" . $lat . "\" lon=\"" . $lon . "\"></wpt>\n";

	echo "</gpx>";

?>
