**The Punjab NDVI Time Series WebGIS Project**

This application is an interactive WebGIS platform that shows changes in Punjab, India's vegetation health (NDVI) during a one-year period (2021–2022). In addition to viewing particular crop health patterns throughout the state, users can toggle base maps and play a time series animation.

**Phase 1: Gathering and Preparing Data**

I obtained a vector shapefile of the Punjab state boundaries as well as twenty-two multi-temporal raster satellite photos, and I renamed all NDVI rasters to NDVI_YYYYMMDD.tif, a machine-readable date format, in order to automate the timeline.
In order to preserve a polished process, I divided the project into three separate GitHub directories:

1. GeoTIFF pictures and configuration settings are contained in the data-raster.
2. Punjab boundary shapefiles are stored in the data-vector.
3. Web-frontend: Contains the source code for JavaScript, HTML, and CSS.

**Phase 2: Configuring the GeoServer Backend**

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

Vector: The Punjab state boundary is clearly defined by a broad red edge.
