**The Punjab NDVI Time Series WebGIS Project**

This application is an interactive WebGIS platform that shows changes in Punjab, India's vegetation health (NDVI) during a one-year period (2021–2022). In addition to viewing particular crop health patterns throughout the state, users can toggle base maps and play a time series animation.

**Phase 1: Gathering and Preparing Data**

I obtained a vector shapefile of the Punjab state boundaries as well as twenty-two multi-temporal raster satellite photos, and I renamed all NDVI rasters to NDVI_YYYYMMDD.tif, a machine-readable date format, in order to automate the timeline.
In order to preserve a polished process, I divided the project into three separate GitHub directories:

1. GeoTIFF pictures and configuration settings are contained in the data-raster.
2. Punjab boundary shapefiles are stored in the data-vector.
3. Web-frontend: Contains the source code for JavaScript, HTML, and CSS.
