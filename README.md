**The Punjab NDVI Time Series WebGIS Project**

This application is an interactive WebGIS platform that shows changes in Punjab, India's vegetation health (NDVI) during a one-year period (2021–2022). In addition to viewing particular crop health patterns throughout the state, users can toggle base maps and play a time series animation.

**Phase 1: Gathering and Preparing Data**

I obtained a vector shapefile of the Punjab state boundaries as well as twenty-two multi-temporal raster satellite photos, and I renamed all NDVI rasters to NDVI_YYYYMMDD.tif, a machine-readable date format, in order to automate the timeline.
In order to preserve a polished process, I divided the project into three separate GitHub directories:

1. GeoTIFF pictures and configuration settings are contained in the data-raster.
2. Punjab boundary shapefiles are stored in the data-vector.
3. Web-frontend: Contains the source code for JavaScript, HTML, and CSS.

**Phase 2: Configuring the GeoServer Backend For My Raster Layer**

First, I login into Geoserver and created a workspace with url, as shown in the image below

<img width="1380" height="680" alt="image" src="https://github.com/user-attachments/assets/5bef148d-5b75-405f-bbd8-7295f71021a9" />

Automation Logic: In the raster folder, I produced two essential files (timeregex.properties and indexer.properties) using this link: https://docs.geoserver.org/latest/en/user/tutorials/imagemosaic_timeseries/imagemosaic_timeseries.html

1. The regular expression timeregex.properties instructs GeoServer on how to locate the date in my filenames.

2. indexer.properties: A schema instructing GeoServer to create a searchable "Time" index using those dates.

<img width="1775" height="457" alt="image" src="https://github.com/user-attachments/assets/bc0d69d8-283b-40bb-95da-89cab4ae4512" />

Next, I added a new raster store using the Image Mosaic plugin and turned on the Time Dimension in the layer settings, and eight other files including shpfiles were added to my raster layer. These files also contains the list of files names with two fields(date and elevation).

<img width="1780" height="423" alt="image" src="https://github.com/user-attachments/assets/0635975a-52fa-49db-97eb-27d34e6ccb2a" />

Styling: I made the visualisation using GeoServer CSS:

<img width="1753" height="814" alt="image" src="https://github.com/user-attachments/assets/c761daf0-e2db-4c3a-9746-cdba4814c485" />

Also, i added a colour scheme,and save, as shown in the image below: 

<img width="1379" height="988" alt="image" src="https://github.com/user-attachments/assets/2f3b1ca5-378a-419c-bbb8-95e89cc0478d" />

Raster: A ramp of green to red that contrasts high and low vegetation.

**Phase 3: Configuring the GeoServer Backend For My Vector Layer**

I downloaded the indian shapefile with administrative boundaries, and I separated the particular "Punjab" border from the broader dataset using the Select Layer By Attribute tool, and exported this selection as a brand-new, thin shapefile.

Next, I transferred the components of the shapefile (.shp,.shx,.dbf, and.prj) to the server's data-vector folder, and created a new GeoServer store called "Directory of Shapefiles", as shown in the image below
<img width="1708" height="885" alt="image" src="https://github.com/user-attachments/assets/c9150885-d496-4ecc-bbbd-3fcd3fec1bbb" />

To match the NDVI rasters, I published the layer using the appropriate coordinate reference system (CRS).
Lastly, I made the visualisation using GeoServer CSS by producing a red outline and to allow people to view the NDVI satellite data beneath the state boundary, the fill opacity was set to zero.

**Phase 4: Web Stack Frontend Development**

Using Visual Studio Code, I created the user interface with an emphasis on clear code and interactive elements.

1. HTML5: Developed the layout, which included the map container and the sidebar that explains "Why NDVI Matters", as shown in the image below.
<img width="1919" height="1030" alt="image" src="https://github.com/user-attachments/assets/3d66c335-9e85-481b-ab74-98829d2d8ffa" />

2. CSS: Created the custom legend, buttons, and responsive dashboard.
<img width="1919" height="846" alt="image" src="https://github.com/user-attachments/assets/291b67fd-c44c-4341-b736-cb4181d5e603" />

3. JavaScript-based OpenLayers: OSM and satellite base layers were used to initialise the map and the local endpoint was used to establish a connection to the GeoServer WMS.
<img width="1919" height="1015" alt="image" src="https://github.com/user-attachments/assets/9d59428c-85a1-4e88-9fba-ec93e0d9fd2b" />
NOTE: I downloaded the 3rd party plugin of the Osm Layer to get the OL-Layerswitcher using the two link below:
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol-layerswitcher@4.1.2/dist/ol-layerswitcher.css" /> 
<script src="https://cdn.jsdelivr.net/npm/ol-layerswitcher@4.1.2/dist/ol-layerswitcher.js"></script>

I also Wrote the Time Logic: I wrote the slider and play/pause buttons to update the TIME parameter in the WMS request string, causing GeoServer to quickly flip between photos.

**In conclusion**
An interactive monitoring tool for Punjab's agricultural landscape was successfully created. The program offers a fluid, data-driven visualisation of seasonal vegetation changes by combining GeoServer with OpenLayers. The finished result, which is displayed below, shows a scalable and useful WebGIS solution for environmental study.
<img width="1023" height="524" alt="image" src="https://github.com/user-attachments/assets/ba165a32-0eaa-486b-9888-a375e15bc6cb" />

