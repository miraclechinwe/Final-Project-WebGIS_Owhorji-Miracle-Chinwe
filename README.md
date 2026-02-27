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

I created a dynamic time-series layer using the Image Mosaic plugin rather than importing images by hand.

Automation Logic: In the raster folder, I produced two essential files:

The regular expression timeregex.properties instructs GeoServer on how to locate the date in my filenames.

indexer.properties: A schema instructing GeoServer to create a searchable "Time" index using those dates.

Layer Setup: To enable the map to react to time-based queries, I made a new Image Mosaic Store in GeoServer and turned on the Time Dimension in the layer settings.

Styling: I made the visualisation using GeoServer CSS:

Raster: A ramp of green to red that contrasts high and low vegetation.

Vector: The Punjab state boundary is clearly defined by a broad red edge.
