var wms_layers = [];

var format_BOUNDARY_0 = new ol.format.GeoJSON();
var features_BOUNDARY_0 = format_BOUNDARY_0.readFeatures(json_BOUNDARY_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOUNDARY_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOUNDARY_0.addFeatures(features_BOUNDARY_0);
var lyr_BOUNDARY_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BOUNDARY_0, 
                style: style_BOUNDARY_0,
                interactive: true,
                title: '<img src="styles/legend/BOUNDARY_0.png" /> BOUNDARY'
            });
var format_MAJORROADS_1 = new ol.format.GeoJSON();
var features_MAJORROADS_1 = format_MAJORROADS_1.readFeatures(json_MAJORROADS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAJORROADS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAJORROADS_1.addFeatures(features_MAJORROADS_1);
var lyr_MAJORROADS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MAJORROADS_1, 
                style: style_MAJORROADS_1,
                interactive: true,
                title: '<img src="styles/legend/MAJORROADS_1.png" /> MAJOR ROADS'
            });
var format_MAJOR_RDmajor_roads_2 = new ol.format.GeoJSON();
var features_MAJOR_RDmajor_roads_2 = format_MAJOR_RDmajor_roads_2.readFeatures(json_MAJOR_RDmajor_roads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAJOR_RDmajor_roads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAJOR_RDmajor_roads_2.addFeatures(features_MAJOR_RDmajor_roads_2);
var lyr_MAJOR_RDmajor_roads_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MAJOR_RDmajor_roads_2, 
                style: style_MAJOR_RDmajor_roads_2,
                interactive: true,
                title: '<img src="styles/legend/MAJOR_RDmajor_roads_2.png" /> MAJOR_RD — major_roads'
            });
var format_MINORROADS_3 = new ol.format.GeoJSON();
var features_MINORROADS_3 = format_MINORROADS_3.readFeatures(json_MINORROADS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MINORROADS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINORROADS_3.addFeatures(features_MINORROADS_3);
var lyr_MINORROADS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MINORROADS_3, 
                style: style_MINORROADS_3,
                interactive: true,
                title: '<img src="styles/legend/MINORROADS_3.png" /> MINOR ROADS'
            });
var format_MINOR_RDminor_roads_4 = new ol.format.GeoJSON();
var features_MINOR_RDminor_roads_4 = format_MINOR_RDminor_roads_4.readFeatures(json_MINOR_RDminor_roads_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MINOR_RDminor_roads_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINOR_RDminor_roads_4.addFeatures(features_MINOR_RDminor_roads_4);
var lyr_MINOR_RDminor_roads_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MINOR_RDminor_roads_4, 
                style: style_MINOR_RDminor_roads_4,
                interactive: true,
                title: '<img src="styles/legend/MINOR_RDminor_roads_4.png" /> MINOR_RD — minor_roads'
            });
var format_FILLINGSTATIONS_5 = new ol.format.GeoJSON();
var features_FILLINGSTATIONS_5 = format_FILLINGSTATIONS_5.readFeatures(json_FILLINGSTATIONS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FILLINGSTATIONS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FILLINGSTATIONS_5.addFeatures(features_FILLINGSTATIONS_5);
var lyr_FILLINGSTATIONS_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FILLINGSTATIONS_5, 
                style: style_FILLINGSTATIONS_5,
                interactive: true,
                title: '<img src="styles/legend/FILLINGSTATIONS_5.png" /> FILLING STATIONS'
            });
var format_FUELSTATIONfilling_stations_6 = new ol.format.GeoJSON();
var features_FUELSTATIONfilling_stations_6 = format_FUELSTATIONfilling_stations_6.readFeatures(json_FUELSTATIONfilling_stations_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FUELSTATIONfilling_stations_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FUELSTATIONfilling_stations_6.addFeatures(features_FUELSTATIONfilling_stations_6);
var lyr_FUELSTATIONfilling_stations_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FUELSTATIONfilling_stations_6, 
                style: style_FUELSTATIONfilling_stations_6,
                interactive: true,
                title: '<img src="styles/legend/FUELSTATIONfilling_stations_6.png" /> FUELSTATION — filling_stations'
            });

lyr_BOUNDARY_0.setVisible(true);lyr_MAJORROADS_1.setVisible(true);lyr_MAJOR_RDmajor_roads_2.setVisible(true);lyr_MINORROADS_3.setVisible(true);lyr_MINOR_RDminor_roads_4.setVisible(true);lyr_FILLINGSTATIONS_5.setVisible(true);lyr_FUELSTATIONfilling_stations_6.setVisible(true);
var layersList = [lyr_BOUNDARY_0,lyr_MAJORROADS_1,lyr_MAJOR_RDmajor_roads_2,lyr_MINORROADS_3,lyr_MINOR_RDminor_roads_4,lyr_FILLINGSTATIONS_5,lyr_FUELSTATIONfilling_stations_6];
lyr_BOUNDARY_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_MAJORROADS_1.set('fieldAliases', {'horse': 'horse', 'bicycle': 'bicycle', 'waterway': 'waterway', 'alt_name': 'alt_name', 'motor_vehi': 'motor_vehi', 'embankment': 'embankment', 'tracktype': 'tracktype', 'man_made': 'man_made', 'maxspeed': 'maxspeed', 'ford': 'ford', 'ref_ar': 'ref_ar', 'service': 'service', 'motorroad': 'motorroad', 'layer': 'layer', 'bridge': 'bridge', 'width': 'width', 'name_ar': 'name_ar', 'junction': 'junction', 'surface': 'surface', 'ref': 'ref', 'oneway': 'oneway', 'name': 'name', 'lanes': 'lanes', });
lyr_MAJOR_RDmajor_roads_2.set('fieldAliases', {'fid': 'fid', 'horse': 'horse', 'bicycle': 'bicycle', 'waterway': 'waterway', 'alt_name': 'alt_name', 'motor_vehi': 'motor_vehi', 'embankment': 'embankment', 'tracktype': 'tracktype', 'man_made': 'man_made', 'maxspeed': 'maxspeed', 'ford': 'ford', 'ref_ar': 'ref_ar', 'service': 'service', 'motorroad': 'motorroad', 'layer': 'layer', 'bridge': 'bridge', 'width': 'width', 'name_ar': 'name_ar', 'junction': 'junction', 'surface': 'surface', 'ref': 'ref', 'oneway': 'oneway', 'name': 'name', 'lanes': 'lanes', });
lyr_MINORROADS_3.set('fieldAliases', {'name': 'name', });
lyr_MINOR_RDminor_roads_4.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_FILLINGSTATIONS_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_FUELSTATIONfilling_stations_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_BOUNDARY_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MAJORROADS_1.set('fieldImages', {'horse': 'TextEdit', 'bicycle': 'TextEdit', 'waterway': 'TextEdit', 'alt_name': 'TextEdit', 'motor_vehi': 'TextEdit', 'embankment': 'TextEdit', 'tracktype': 'TextEdit', 'man_made': 'TextEdit', 'maxspeed': 'TextEdit', 'ford': 'TextEdit', 'ref_ar': 'TextEdit', 'service': 'TextEdit', 'motorroad': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'width': 'TextEdit', 'name_ar': 'TextEdit', 'junction': 'TextEdit', 'surface': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'lanes': 'TextEdit', });
lyr_MAJOR_RDmajor_roads_2.set('fieldImages', {'fid': '', 'horse': '', 'bicycle': '', 'waterway': '', 'alt_name': '', 'motor_vehi': '', 'embankment': '', 'tracktype': '', 'man_made': '', 'maxspeed': '', 'ford': '', 'ref_ar': '', 'service': '', 'motorroad': '', 'layer': '', 'bridge': '', 'width': '', 'name_ar': '', 'junction': '', 'surface': '', 'ref': '', 'oneway': '', 'name': '', 'lanes': '', });
lyr_MINORROADS_3.set('fieldImages', {'name': '', });
lyr_MINOR_RDminor_roads_4.set('fieldImages', {'fid': '', 'name': '', });
lyr_FILLINGSTATIONS_5.set('fieldImages', {'OBJECTID': '', 'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Snippet': '', 'PopupInfo': '', 'HasLabel': '', 'LabelID': '', });
lyr_FUELSTATIONfilling_stations_6.set('fieldImages', {'fid': '', 'OBJECTID': '', 'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Snippet': '', 'PopupInfo': '', 'HasLabel': '', 'LabelID': '', });
lyr_BOUNDARY_0.set('fieldLabels', {'OBJECTID': 'no label', 'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_MAJORROADS_1.set('fieldLabels', {'horse': 'no label', 'bicycle': 'no label', 'waterway': 'no label', 'alt_name': 'no label', 'motor_vehi': 'no label', 'embankment': 'no label', 'tracktype': 'no label', 'man_made': 'no label', 'maxspeed': 'no label', 'ford': 'no label', 'ref_ar': 'no label', 'service': 'no label', 'motorroad': 'no label', 'layer': 'no label', 'bridge': 'no label', 'width': 'no label', 'name_ar': 'no label', 'junction': 'no label', 'surface': 'no label', 'ref': 'no label', 'oneway': 'no label', 'name': 'no label', 'lanes': 'no label', });
lyr_MAJOR_RDmajor_roads_2.set('fieldLabels', {'fid': 'no label', 'horse': 'no label', 'bicycle': 'no label', 'waterway': 'no label', 'alt_name': 'no label', 'motor_vehi': 'no label', 'embankment': 'no label', 'tracktype': 'no label', 'man_made': 'no label', 'maxspeed': 'no label', 'ford': 'no label', 'ref_ar': 'no label', 'service': 'no label', 'motorroad': 'no label', 'layer': 'no label', 'bridge': 'no label', 'width': 'no label', 'name_ar': 'no label', 'junction': 'no label', 'surface': 'no label', 'ref': 'no label', 'oneway': 'no label', 'name': 'no label', 'lanes': 'no label', });
lyr_MINORROADS_3.set('fieldLabels', {'name': 'no label', });
lyr_MINOR_RDminor_roads_4.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_FILLINGSTATIONS_5.set('fieldLabels', {'OBJECTID': 'no label', 'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', });
lyr_FUELSTATIONfilling_stations_6.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', });
lyr_FUELSTATIONfilling_stations_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});