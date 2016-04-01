# Design and implementation of an interactive web-based near real-time forest monitoring system
Data and code accompanying the paper "Design and implementation of an interactive web-based near real-time forest monitoring system" 
Published: March 31, 2016 
http://dx.doi.org/10.1371/journal.pone.0150935 

# Introduction
This paper describes an interactive web-based near real-time (NRT) forest monitoring system using four levels of geographic information services: 1) the acquisition of continuous data streams from satellite and community-based monitoring using mobile devices, 2) NRT forest disturbance detection based on satellite time-series, 3) presentation of forest disturbance data through a web-based
application.

# Community-based forest monioting 
Data entry form was designed using open data kit (ODK).The form rendered on an Android platform through ODK Collect, which allows multiple data records to be entered (text variables, GPS position, photo etc.) and stored on a mobile device. After data collection, users transfered the collected data to the database server

1) ODK Form used for forest disturbance monioting in Ethiopia is stored in CBM/Form 
2) Saple data collected through ODK form is stiored in Data/sampleODKdata 
3) Subset of 300 Community-based observation data are stiored in Data/Community-based observation.csv 

Full community-based observation data can be downlaoded from www.cbm.wur.nl  


# Landsat image time-series analysis

Following process chain was developed to download, store and process Landsat image time-series. 

1) Download the data: All the historic as well as continuously acquired Landsat TM, ETM+ and OLI surface reflectance images with WRS-2 coordinates path 170 and row 55 at processing level LT1 were obtained from the United States Geological Survey (USGS) Earth Resources Observation and Science (EROS) Center Science Processing Architecture (ESPA, http://espa.cr.usgs.gov).
Scene ID of all data used is stored in Data/Landsat time-series.csv. 

2) Pre-processing : After downloading the Landsat data, multiple pre-processing steps were applied: application of the FMASK algorithm for cloud masking, computation of NDVI and application of a forest mask. 

3) Change detection : We used the BFAST Monitor method for breakpoint detection in Landsat NDVI time-series images for NRT forest change detection. 

code for this analysis is stored in Code/Landsat time-series analysis/BFAST_forestchangedetection.R   


# Spatial database structure
PostGre SQL database was used to store Community-based monioting and Sattelite based forest change alert data data. 


# Web mapping 

Apache, GeoServer, OpenLayers, jQuery, PhP and HTML was used for web-mapping. 
All relevant codes used for web mapping are stored in Webgis folder Code/Webgis. 

PhP files allow  dynamic spatiotemporal query and allow users to generate forest change locations on-demand, to download forest change locations in usable GPS exchange format (GPX) format. 

#References

Pratihast AK, DeVries B, Avitabile V, de Bruin S, Herold M, Bergsma A (2016) Design and Implementation of an Interactive Web-Based Near Real-Time Forest Monitoring System. PLoS ONE 11(3): e0150935. doi:10.1371/journal.pone.0150935 


