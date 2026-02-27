var view = new ol.View({
    projection: 'EPSG:4326',
    center: [75.86, 30.90],
    zoom: 8
});

var satellite = new ol.layer.Tile({
    title: 'Satellite',
    type: 'base',
    visible: true,
    source: new ol.source.XYZ({
        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
    })
});

var OSM = new ol.layer.Tile({
    title: 'OSM',
    type: 'base',
    visible: false,
    source: new ol.source.OSM()
});

var ndviSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/wms',
    params: {
        'LAYERS': 'NDVI_data:timeseries_data_punjab',
        'TIME': '2021-06-10'
    },
    serverType: 'geoserver'
});

var ndviLayer = new ol.layer.Image({
    title: 'NDVI',
    source: ndviSource
});

var boundaryLayer = new ol.layer.Image({
    title: 'State Boundaries',
    source: new ol.source.ImageWMS({
        url: 'http://localhost:8080/geoserver/wms',
        params: {
            'LAYERS': 'NDVI_data:punjab_haryana_boundary_data'
        },
        serverType: 'geoserver'
    })
});

var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Group({ title: 'Base Maps', layers: [satellite, OSM] }),
        new ol.layer.Group({ title: 'Overlays', layers: [ndviLayer, boundaryLayer] })
    ],
    view: view
});

// Cursor Styling: Suggest interaction by showing a crosshair over the map
map.getTargetElement().style.cursor = 'crosshair';

// Layer Switcher
var layerSwitcher = new ol.control.LayerSwitcher({
    activationMode: 'click',
    startActive: true,
    tipLabel: 'Layers'
});
map.addControl(layerSwitcher);

// Animation Logic
var dates = ['2021-06-10','2021-06-26','2021-07-12','2021-07-28','2021-08-13','2021-08-29','2021-09-14','2021-09-30','2021-10-16','2021-11-01','2021-11-17','2021-12-03','2021-12-19','2022-01-01','2022-01-17','2022-02-02','2022-02-18','2022-03-06','2022-03-22','2022-04-07','2022-04-23','2022-05-09'];
var i = 0, timer;
var dateLabel = document.getElementById('date_value');
var slider = document.getElementById('myRange');

slider.max = dates.length - 1;
dateLabel.innerHTML = dates[0];

function update(index) {
    ndviSource.updateParams({ 'TIME': dates[index] });
    dateLabel.innerHTML = dates[index];
    slider.value = index;
}

slider.oninput = function() { i = parseInt(this.value); update(i); };

document.getElementById('play').onclick = function() {
    clearInterval(timer);
    timer = setInterval(function() {
        i = (i + 1) % dates.length;
        update(i);
    }, 1000);
};

document.getElementById('pause').onclick = function() { clearInterval(timer); };

document.getElementById('reset').onclick = function() { 
    clearInterval(timer);
    i = 0; 
    update(i); 
};

// Geoprocessing Tool: GetFeatureInfo
// Activated by clicking the map area
map.on('singleclick', function (evt) {
    var viewResolution = view.getResolution();
    var url = ndviSource.getFeatureInfoUrl(
        evt.coordinate, 
        viewResolution, 
        'EPSG:4326',
        { 'INFO_FORMAT': 'text/html' }
    );

    if (url) {
        window.open(url, 'NDVI Info', 'width=400,height=300,status=no,toolbar=no,menubar=no,location=no');
    }
});