var wms_layers = [];


        var lyr_SatelliteBasemap_0 = new ol.layer.Tile({
            'title': 'Satellite Basemap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_All_Squares_2 = new ol.format.GeoJSON();
var features_All_Squares_2 = format_All_Squares_2.readFeatures(json_All_Squares_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_All_Squares_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_All_Squares_2.addFeatures(features_All_Squares_2);
var lyr_All_Squares_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_All_Squares_2, 
                style: style_All_Squares_2,
                popuplayertitle: 'All_Squares',
                interactive: true,
                title: '<img src="styles/legend/All_Squares_2.png" /> All_Squares'
            });
var format_Buildings_3 = new ol.format.GeoJSON();
var features_Buildings_3 = format_Buildings_3.readFeatures(json_Buildings_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_3.addFeatures(features_Buildings_3);
var lyr_Buildings_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_3, 
                style: style_Buildings_3,
                popuplayertitle: 'Buildings',
                interactive: true,
                title: '<img src="styles/legend/Buildings_3.png" /> Buildings'
            });
var format_C_Outline_4 = new ol.format.GeoJSON();
var features_C_Outline_4 = format_C_Outline_4.readFeatures(json_C_Outline_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C_Outline_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C_Outline_4.addFeatures(features_C_Outline_4);
var lyr_C_Outline_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C_Outline_4, 
                style: style_C_Outline_4,
                popuplayertitle: 'C_Outline',
                interactive: true,
                title: '<img src="styles/legend/C_Outline_4.png" /> C_Outline'
            });
var format_nroads_line_5 = new ol.format.GeoJSON();
var features_nroads_line_5 = format_nroads_line_5.readFeatures(json_nroads_line_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nroads_line_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nroads_line_5.addFeatures(features_nroads_line_5);
var lyr_nroads_line_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nroads_line_5, 
                style: style_nroads_line_5,
                popuplayertitle: 'nroads_line',
                interactive: true,
                title: '<img src="styles/legend/nroads_line_5.png" /> nroads_line'
            });
var format_Schools_6 = new ol.format.GeoJSON();
var features_Schools_6 = format_Schools_6.readFeatures(json_Schools_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schools_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schools_6.addFeatures(features_Schools_6);
var lyr_Schools_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schools_6, 
                style: style_Schools_6,
                popuplayertitle: 'Schools',
                interactive: true,
                title: '<img src="styles/legend/Schools_6.png" /> Schools'
            });

lyr_SatelliteBasemap_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_All_Squares_2.setVisible(true);lyr_Buildings_3.setVisible(true);lyr_C_Outline_4.setVisible(true);lyr_nroads_line_5.setVisible(true);lyr_Schools_6.setVisible(true);
var layersList = [lyr_SatelliteBasemap_0,lyr_OpenStreetMap_1,lyr_All_Squares_2,lyr_Buildings_3,lyr_C_Outline_4,lyr_nroads_line_5,lyr_Schools_6];
lyr_All_Squares_2.set('fieldAliases', {'id': 'id', 'Layer': 'Layer', 'Name': 'Name', });
lyr_Buildings_3.set('fieldAliases', {'id': 'id', 'Id': 'Id', 'Area': 'Area', });
lyr_C_Outline_4.set('fieldAliases', {'id': 'id', 'Layer': 'Layer', 'City Name': 'City Name', 'Area': 'Area', });
lyr_nroads_line_5.set('fieldAliases', {'FID_nroads': 'FID_nroads', 'Layer': 'Layer', 'Width': 'Width', });
lyr_Schools_6.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'SchoolType': 'SchoolType', });
lyr_All_Squares_2.set('fieldImages', {'id': 'TextEdit', 'Layer': 'TextEdit', 'Name': '', });
lyr_Buildings_3.set('fieldImages', {'id': 'TextEdit', 'Id': 'Range', 'Area': 'TextEdit', });
lyr_C_Outline_4.set('fieldImages', {'id': '', 'Layer': '', 'City Name': '', 'Area': '', });
lyr_nroads_line_5.set('fieldImages', {'FID_nroads': 'TextEdit', 'Layer': 'TextEdit', 'Width': 'TextEdit', });
lyr_Schools_6.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'SchoolType': 'TextEdit', });
lyr_All_Squares_2.set('fieldLabels', {'id': 'inline label - always visible', 'Layer': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Buildings_3.set('fieldLabels', {'id': 'inline label - always visible', 'Id': 'no label', 'Area': 'inline label - always visible', });
lyr_C_Outline_4.set('fieldLabels', {'id': 'inline label - always visible', 'Layer': 'hidden field', 'City Name': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_nroads_line_5.set('fieldLabels', {'FID_nroads': 'inline label - always visible', 'Layer': 'hidden field', 'Width': 'inline label - always visible', });
lyr_Schools_6.set('fieldLabels', {'id': 'inline label - always visible', 'Area': 'inline label - always visible', 'SchoolType': 'inline label - always visible', });
lyr_Schools_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});