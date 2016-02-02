/*
 * Javascript related to the OpenLayers 3 map.
 */

(function() {

  /*
   * Create groups for overlays. Add the groups to the map when it's created
   * but add the overlay layers later
   */
  // Basemap Overlay Group
  var BaseMapsOverlayGroup = new ol.layer.Group({
    title: 'Base maps',
    layers: []
  });

  // Administrations Overlay Group
  var AdministrationsOverlayGroup = new ol.layer.Group({
    title: 'Administrations',
    layers: []
  });

	// Historical forest change Overlay Group
	var HistoricalForestOverlayGroup = new ol.layer.Group({
    title: 'Historical forest change',
    layers: []
  });

	// Near real-time Forest Change Overlay Group
	var NearRealTimeOverlayGroup = new ol.layer.Group({
    title: 'Near real-time forest change',
    layers: []
  });

  // Biodiversity Overlay group
  var BiodiversityOverlayGroup = new ol.layer.Group({
    title: 'Biodiversity',
    layers: []
  });

	// Create the map object
  var map = new ol.Map({
    target: 'map',
    layers: [
      BaseMapsOverlayGroup,
      AdministrationsOverlayGroup,
	    HistoricalForestOverlayGroup,
	    NearRealTimeOverlayGroup,
      BiodiversityOverlayGroup
    ],
    view: new ol.View({
      center: ol.proj.transform([36.12, 7.35], 'EPSG:4326', 'EPSG:3857'),
      zoom: 10
    })
  });

	// Create a LayerSwitcher instance and add it to the map
  var layerSwitcher = new ol.control.LayerSwitcher();
  map.addControl(layerSwitcher);

  /* Add layers to the pre-existing ol.layer.Group after the LayerSwitcher has
   * been added to the map. The layer will appear in the list the next time
   * the LayerSwitcher is shown or LayerSwitcher#render is called.
   *
   * Note: The legend item HTML id (in index.html) is identical to 'ĺegend__' + id property of the layer
   */
   // Add layers to the Base maps Overlay Group
 	BaseMapsOverlayGroup.getLayers().push(
    new ol.layer.Tile({
      title: 'Bing Maps (satellite)',
      type: 'base',
      source: new ol.source.BingMaps({
        key: 'xxxxxxxxxxx',
        imagerySet: 'AerialWithLabels'
      }),
      visible: false
    })
 	);

  BaseMapsOverlayGroup.getLayers().push(
    new ol.layer.Tile({
      title: 'OpenStreetMap',
      type: 'base',
      source: new ol.source.OSM(),
      visible: true
    })
 	);

  // Add layers to the Administrations Overlay Group
	AdministrationsOverlayGroup.getLayers().push(
	  new ol.layer.Tile({
      id: 'adm-kafa-reserve',
      title: 'Kafa Biosphere Reserve',
      source: new ol.source.TileWMS({
        url: 'http://scomp5062.wur.nl:8080/geoserver/Kafa/wms',
        params: {'LAYERS': 'Kafa:br_outline'},
			  serverType: 'geoserver'
      }),
		  visible: true
    })
	);

	AdministrationsOverlayGroup.getLayers().push(
	  new ol.layer.Tile({
      id: 'adm-woredas',
      title: 'Woredas',
      source: new ol.source.TileWMS({
        url: 'http://scomp5062.wur.nl:8080/geoserver/Kafa/wms',
        params: {'LAYERS': 'Kafa:Woredas'},
        serverType: 'geoserver',
      }),
		  visible: true
    })
	);

	AdministrationsOverlayGroup.getLayers().push(
    new ol.layer.Tile({
      id: 'adm-kebeles',
      title: 'Kebeles',
      source: new ol.source.TileWMS({
        url: 'http://scomp5062.wur.nl:8080/geoserver/Kafa/wms',
        params: {'LAYERS': 'Kafa:Kebeles'},
        serverType: 'geoserver',
      }),
	    visible: false
    })
	);

	// add layers to Historical forest change Overlay Group
  HistoricalForestOverlayGroup.getLayers().push(
	  new ol.layer.Tile({
      id: 'hfc-sat-2005',
      title: 'Based on Satellite (2005)',
      source: new ol.source.TileWMS({
        url: 'http://scomp5062.wur.nl:8080/geoserver/Kafa/wms',
        params: {'LAYERS': 'Kafa:forest_change_2005'},
        serverType: 'geoserver',
      }),
		  visible: false
    })
	);

	HistoricalForestOverlayGroup.getLayers().push(
	  new ol.layer.Tile({
      id: 'hfc-sat-2006',
      title: 'Based on Satellite (2006)',
      source: new ol.source.TileWMS({
        url: 'http://scomp5062.wur.nl:8080/geoserver/Kafa/wms',
        params: {'LAYERS': 'Kafa:forest_change_2006'},
        serverType: 'geoserver',
      }),
		  visible: false
    })
	);

	HistoricalForestOverlayGroup.getLayers().push(
	  new ol.layer.Tile({
      id: 'hfc-sat-2007',
      title: 'Based on Satellite (2007)',
      source: new ol.source.TileWMS({
        url: 'http://scomp5062.wur.nl:8080/geoserver/Kafa/wms',
        params: {'LAYERS': 'Kafa:forest_change_2007'},
        serverType: 'geoserver',
      }),
		  visible: false
    })
	);

	HistoricalForestOverlayGroup.getLayers().push(
	  new ol.layer.Tile({
      id: 'hfc-sat-2008',
      title: 'Based on Satellite (2008)',
      source: new ol.source.TileWMS({
        url: 'http://scomp5062.wur.nl:8080/geoserver/Kafa/wms',
        params: {'LAYERS': 'Kafa:forest_change_2008'},
        serverType: 'geoserver',
      }),
		  visible: false
    })
	);

	HistoricalForestOverlayGroup.getLayers().push(
	  new ol.layer.Tile({
      id: 'hfc-sat-2009',
      title: 'Based on Satellite (2009)',
      source: new ol.source.TileWMS({
        url: 'http://scomp5062.wur.nl:8080/geoserver/Kafa/wms',
        params: {'LAYERS': 'Kafa:forest_change_2009'},
        serverType: 'geoserver',
      }),
		  visible: false
    })
	);

	HistoricalForestOverlayGroup.getLayers().push(
	  new ol.layer.Tile({
      id: 'hfc-sat-2010',
      title: 'Based on Satellite (2010)',
      source: new ol.source.TileWMS({
        url: 'http://scomp5062.wur.nl:8080/geoserver/Kafa/wms',
        params: {'LAYERS': 'Kafa:forest_change_2010'},
        serverType: 'geoserver',
      }),
		  visible: false
    })
	);

	HistoricalForestOverlayGroup.getLayers().push(
	  new ol.layer.Tile({
      id: 'hfc-sat-2011',
      title: 'Based on Satellite (2011)',
      source: new ol.source.TileWMS({
        url: 'http://scomp5062.wur.nl:8080/geoserver/Kafa/wms',
        params: {'LAYERS': 'Kafa:forest_change_2011'},
        serverType: 'geoserver',
      }),
		  visible: false
    })
	);

	HistoricalForestOverlayGroup.getLayers().push(
	  new ol.layer.Tile({
      id: 'hfc-sat-2012',
      title: 'Based on Satellite (2012)',
      source: new ol.source.TileWMS({
        url: 'http://scomp5062.wur.nl:8080/geoserver/Kafa/wms',
        params: {'LAYERS': 'Kafa:forest_change_2012'},
        serverType: 'geoserver',
      }),
		  visible: false
    })
	);

	HistoricalForestOverlayGroup.getLayers().push(
	  new ol.layer.Tile({
      id: 'hfc-sat-2013',
      title: 'Based on Satellite (2013)',
      source: new ol.source.TileWMS({
        url: 'http://scomp5062.wur.nl:8080/geoserver/Kafa/wms',
        params: {'LAYERS': 'Kafa:forest_change_2013'},
        serverType: 'geoserver',
      }),
		  visible: false
    })
	);

	HistoricalForestOverlayGroup.getLayers().push(
	  new ol.layer.Tile({
      id: 'hfc-ground-obs-2012',
      title: 'Ground observations(2012)',
      source: new ol.source.TileWMS({
        url: 'http://scomp5062.wur.nl:8080/geoserver/Kafa/wms',
        params: {'LAYERS': 'Kafa:Paper_based_groundPoints2013'},
        serverType: 'geoserver',
      }),
		  visible: false
    })
	);

	HistoricalForestOverlayGroup.getLayers().push(
	  new ol.layer.Tile({
      id: 'hfc-ground-obs-2013',
      title: 'Ground observations(2013)',
      source: new ol.source.TileWMS({
        url: 'http://scomp5062.wur.nl:8080/geoserver/Kafa/wms',
        params: {'LAYERS': 'Kafa:Mobile_based_groundPoints2013'},
        serverType: 'geoserver',
      }),
		  visible: false
    })
	);

	// Add layers to the Near real-time Forest change overlay group
	NearRealTimeOverlayGroup.getLayers().push(
	  new ol.layer.Tile({
      id: 'nrt-ground-obs-oct2014-mar2015',
      title: 'Ground observations (Oct 2014- Mar 2015)',
      source: new ol.source.TileWMS({
        url: 'http://scomp5062.wur.nl:8080/geoserver/Kafa/wms',
        params: {'LAYERS': 'Kafa:nrt_local_30_03_2015'},
        serverType: 'geoserver',
      }),
		  visible: true
    })
	);

	NearRealTimeOverlayGroup.getLayers().push(
	  new ol.layer.Tile({
      id: 'nrt-sat-2014',
      title: 'Based on Satellite (2014)',
      source: new ol.source.TileWMS({
        url: 'http://scomp5062.wur.nl:8080/geoserver/Kafa/wms',
        params: {'LAYERS': 'Kafa:nrt_forestchange2014'},
        serverType: 'geoserver',
      }),
		  visible: true
    })
	);

  NearRealTimeOverlayGroup.getLayers().push(
	  new ol.layer.Tile({
      id: 'nrt-sat-2015-january',
      title: 'Based on Satellite (Jan 2015)',
      source: new ol.source.TileWMS({
        url: 'http://scomp5062.wur.nl:8080/geoserver/Kafa/wms',
        params: {'LAYERS': 'Kafa:bfm_nrt_jan2015'},
        serverType: 'geoserver',
      }),
		  visible: true
    })
	);

	NearRealTimeOverlayGroup.getLayers().push(
	  new ol.layer.Tile({
      id: 'nrt-sat-2015-february',
      title: 'Based on Satellite (Feb 2015)',
      source: new ol.source.TileWMS({
        url: 'http://scomp5062.wur.nl:8080/geoserver/Kafa/wms',
        params: {'LAYERS': 'Kafa:bfm_nrt_feb2015'},
        serverType: 'geoserver',
      }),
		  visible: true
    })
	);

	NearRealTimeOverlayGroup.getLayers().push(
	  new ol.layer.Tile({
      id: 'nrt-sat-2015-march',
      title: 'Based on Satellite (Mar 2015)',
      source: new ol.source.TileWMS({
        url: 'http://scomp5062.wur.nl:8080/geoserver/Kafa/wms',
        params: {'LAYERS': 'Kafa:bfm_nrt_mar2015'},
        serverType: 'geoserver',
      }),
		  visible: true
    })
	);

  /*
   * Biodiversity Data
   */
  // Javascript object for storing Biodiversity icons
  // the key corresponds with the 'type' feature property from the GeoJSON
  // loaded in the BiodiversityDataSource variable
  var BiodiversityIcons = {
    'Bats': 'images/icons/bat-icon.png',
    'Bees': 'images/icons/bee-icon.png',
    'Beetles': 'images/icons/beetle-icon.png',
    'Birds': 'images/icons/bird-icon.png',
    'Dragonflies': 'images/icons/dragonfly-icon.png',
    'Fungi': 'images/icons/fungi-icon.png',
    'Herpetofauna': 'images/icons/herpetofauna-icon.png',
    'Large Mammels': 'images/icons/large-mammal-icon.png',
    'Molluscs': 'images/icons/mollusc-icon.png',
    'Plants': 'images/icons/plant-icon.png',
    'Primates': 'images/icons/primate-icon.png',
    'SmallMammels': 'images/icons/small-mammal-icon.png'
  };

  // default style
  var BiodiversityDefaultStyle = new ol.style.Style({
    image: new ol.style.Icon(({
      src: 'images/legends/forest_change_2010.jpg'
    })),
  });

  // Cache previously created styles. Important for performance.
  var BiodiversityStyleCache = {};

  // the style function returns an array of styles
  // for the given feature and resolution.
  // Return null to hide the feature.
  // Per this guide: http://openlayersbook.github.io/ch06-styling-vector-layers/example-07.html
  function BiodiversityStyleFunction(feature, resolution) {
    // get the SpeciesType from the feature properties
    var SpeciesType = feature.get('type');
    // if there is no SpeciesType or its one we don't recognize,
    // return the default style (in an array!)
    if (!SpeciesType || !BiodiversityIcons[SpeciesType]) {
      return [BiodiversityDefaultStyle];
    }
    // check the cache and create a new style for the income
    // level if its not been created before.
    if (!BiodiversityStyleCache[SpeciesType]) {
      BiodiversityStyleCache[SpeciesType] = new ol.style.Style({
        image: new ol.style.Icon(({
          src: BiodiversityIcons[SpeciesType]
        })),
      });
    }
    // at this point, the style for the current SpeciesType is in the cache
    // so return it (as an array!)
    return [BiodiversityStyleCache[SpeciesType]];
  }

  var BiodiversityDataSource = new ol.source.Vector({
    // If in test environment, look for local file, otherwise load request JSON file at local GeoServer instance
    url: window.location.hostname == 'test.cbm.local' ? './data.json' : 'http://scomp5062.wur.nl:8080/geoserver/Kafa/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Kafa:nabu_biodiversityassessmdata&outputFormat=json',
    format: new ol.format.GeoJSON()
  });

  // Create a vector layer to display the features within the GeoJSON source and
  // applies a simple icon style to all features
  var BiodiversityDataLayer = new ol.layer.Vector({
    title: 'Biodiversity data (Dec 2014)',
    id: 'biodiversity-data',
    source: BiodiversityDataSource,
    style : BiodiversityStyleFunction,
    visible: false
  });

  BiodiversityOverlayGroup.getLayers().push(BiodiversityDataLayer);

  /*
   * Popup for show Biodiversity data and downloading points and GPX file.
   */
	// Elements that make up the popup.
	var PopUpContainer = document.getElementById('popup');
	var PopUpContent = document.getElementById('popup-content');
	var PopUpCloser = document.getElementById('popup-closer');

	// Add a click handler to hide the popup.
	PopUpCloser.onclick = function() {
	  PopUpContainer.style.display = 'none';
	  PopUpCloser.blur();
	  return false;
	};

  //  To anchor the popup to the map, an ol.Overlay is created with the popup container.
	var PopUpOverlay = new ol.Overlay({
	  element: PopUpContainer
	});

	map.addOverlay(PopUpOverlay);

  var displayFeatureInfo = function(pixel, coordinate) {
	  var wgs84 = ol.proj.transform(coordinate, 'EPSG:3857', 'EPSG:4326');
    var features = [];

    // Get every item at the clicked position
    map.forEachFeatureAtPixel(pixel, function(feature, layer) {
      features.push(feature);
    });

    // Build the popup
    if (features.length > 0) {
      var info = [];
      // Get properties for every (Biodiversity data) item
      for (var i = 0, ii = features.length; i < ii; ++i) {
        info.push('<li class="feature-info__item">' + features[i].get('type') + ' (record ID: ' + features[i].get('id') + ') ' + '<br>' + 'description: ' + features[i].get('short_desc') + '</li>');
      }
      // Build HTML structure - combine any found items and the download position option
      // <ul> for item, <p> container for download position
      PopUpContent.innerHTML = '<ul class="feature-info__list">' + info.join('') || '(unknown)' + '</ul>';
      PopUpContent.innerHTML += '<p class="popup__download-position">Download the position:<br><code>' + ol.coordinate.toStringXY(wgs84, 5) + '</code><br><a href="forest_change_kebele_map.php?point=' + wgs84[0] + ' ' + wgs84[1] +  '" target=_blank>All in Kebele (gpx)</a><br> <a href="map_location_as_gpx.php?point=' + wgs84[0] + ' ' + wgs84[1] +  '" target=_blank>Change location (gpx)</a></p>'
      PopUpOverlay.setPosition(coordinate);
      PopUpContainer.style.display = 'block';
    } else {
      // Build HTML structure - show only the download position option
      PopUpOverlay.setPosition(coordinate);
      PopUpContent.innerHTML = '<p class="popup__download-position">Download the position:<br><code>' + ol.coordinate.toStringXY(wgs84, 5) + '</code><br><a href="forest_change_kebele_map.php?point=' + wgs84[0] + ' ' + wgs84[1] +  '" target=_blank>All in Kebele (gpx)</a><br> <a href="map_location_as_gpx.php?point=' + wgs84[0] + ' ' + wgs84[1] +  '" target=_blank>Change location (gpx)</a></p>'
      PopUpContainer.style.display = 'block';
    }
  };

  // Add a click handler to the map to render the popup.
	map.on('click', function(evt) {
    var pixel = evt.pixel;
    var coordinate = evt.coordinate;
    displayFeatureInfo(pixel, coordinate);
  });

  /*
   * Dynamic legend
   * Retrieve all map layers and listen for visibility change event
   * Unfortunately OL3 doesnt have a method for retrieving layers by id: https://github.com/openlayers/ol3/issues/2907
   * Inspiration: http://gis.stackexchange.com/a/165673
   */
  var layergroups = map.getLayers();
  var layergroup;
  // Loop through layergroups
  for (var i = 0; i < layergroups.getLength(); i++) {
    layergroup = layergroups.item(i);
    // check for layers within layergroup
    if (layergroup.getLayers) {
      var layers = layergroup.getLayers().getArray();
      // get id and check visibility
      layers.forEach(function (layer) {
        // on page load update legend
        updateLegend(layer);
        // Listen for visibility change events
        layer.on('change:visible', function(e) {
          updateLegend(layer);
        });
      });
    }
  }

  /*
   * Update legend
   * @param layer: a map layer
   */
  function updateLegend(layer){
    var id = layer.get('id');
    var visible = layer.get('visible');

    // Visibility change event also fires on showing the layerSwitcher, but
    // doesnt have a id property, only layers have those.
    if ( id != undefined ){
      // find legend layer group where the layer belongs to.
      var legend_layer_group = $('#legend__' + id).closest('.legend__layer-group');

      if ( visible === true ){
        // layer is visible -> show legend (if legend is hidden)
        if ($('#legend__' + id).is(':hidden')){
          $('#legend__' + id).show();
        }
        // show legend layer group title (if hidden)
        if ($(legend_layer_group).find('.legend__layer-group-title').is(':hidden')){
          $(legend_layer_group).find('.legend__layer-group-title').show();
        }
      }
      else {
        // layer is not visible, hide legend (if legend is visible)
        if ($('#legend__' + id).is(':visible')){
          $('#legend__' + id).hide();

          // check if legend layer group is empty, if so remove group title
          var items_in_legend_layer_group = $(legend_layer_group).children('.legend__layer:visible').length;

          if (items_in_legend_layer_group === 0){
            $(legend_layer_group).find('.legend__layer-group-title').hide();
          }
        }
      }
    }
  }

})(); // end document ready
