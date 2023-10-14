var wms_layers = [];

var format_Bank_0 = new ol.format.GeoJSON();
var features_Bank_0 = format_Bank_0.readFeatures(json_Bank_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bank_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bank_0.addFeatures(features_Bank_0);
var lyr_Bank_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bank_0, 
                style: style_Bank_0,
                interactive: true,
                title: '<img src="styles/legend/Bank_0.png" /> Bank'
            });
var format_Fillingstation_1 = new ol.format.GeoJSON();
var features_Fillingstation_1 = format_Fillingstation_1.readFeatures(json_Fillingstation_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fillingstation_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fillingstation_1.addFeatures(features_Fillingstation_1);
var lyr_Fillingstation_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fillingstation_1, 
                style: style_Fillingstation_1,
                interactive: true,
                title: '<img src="styles/legend/Fillingstation_1.png" /> Filling station'
            });
var format_Healthfaciloties_2 = new ol.format.GeoJSON();
var features_Healthfaciloties_2 = format_Healthfaciloties_2.readFeatures(json_Healthfaciloties_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Healthfaciloties_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Healthfaciloties_2.addFeatures(features_Healthfaciloties_2);
var lyr_Healthfaciloties_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Healthfaciloties_2, 
                style: style_Healthfaciloties_2,
                interactive: true,
                title: '<img src="styles/legend/Healthfaciloties_2.png" /> Health faciloties'
            });
var format_hotels_3 = new ol.format.GeoJSON();
var features_hotels_3 = format_hotels_3.readFeatures(json_hotels_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hotels_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hotels_3.addFeatures(features_hotels_3);
var lyr_hotels_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hotels_3, 
                style: style_hotels_3,
                interactive: true,
                title: '<img src="styles/legend/hotels_3.png" /> hotels'
            });
var format_Majorroads_4 = new ol.format.GeoJSON();
var features_Majorroads_4 = format_Majorroads_4.readFeatures(json_Majorroads_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Majorroads_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Majorroads_4.addFeatures(features_Majorroads_4);
var lyr_Majorroads_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Majorroads_4, 
                style: style_Majorroads_4,
                interactive: true,
                title: '<img src="styles/legend/Majorroads_4.png" /> Major roads'
            });
var format_Minorroads_5 = new ol.format.GeoJSON();
var features_Minorroads_5 = format_Minorroads_5.readFeatures(json_Minorroads_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Minorroads_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Minorroads_5.addFeatures(features_Minorroads_5);
var lyr_Minorroads_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Minorroads_5, 
                style: style_Minorroads_5,
                interactive: true,
                title: '<img src="styles/legend/Minorroads_5.png" /> Minor roads'
            });
var format_OTHERS_6 = new ol.format.GeoJSON();
var features_OTHERS_6 = format_OTHERS_6.readFeatures(json_OTHERS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OTHERS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OTHERS_6.addFeatures(features_OTHERS_6);
var lyr_OTHERS_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OTHERS_6, 
                style: style_OTHERS_6,
                interactive: true,
                title: '<img src="styles/legend/OTHERS_6.png" /> OTHERS'
            });
var format_Recreationalcenter_7 = new ol.format.GeoJSON();
var features_Recreationalcenter_7 = format_Recreationalcenter_7.readFeatures(json_Recreationalcenter_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Recreationalcenter_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Recreationalcenter_7.addFeatures(features_Recreationalcenter_7);
var lyr_Recreationalcenter_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Recreationalcenter_7, 
                style: style_Recreationalcenter_7,
                interactive: true,
                title: '<img src="styles/legend/Recreationalcenter_7.png" /> Recreational center'
            });
var format_Restuarant_8 = new ol.format.GeoJSON();
var features_Restuarant_8 = format_Restuarant_8.readFeatures(json_Restuarant_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Restuarant_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Restuarant_8.addFeatures(features_Restuarant_8);
var lyr_Restuarant_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Restuarant_8, 
                style: style_Restuarant_8,
                interactive: true,
                title: '<img src="styles/legend/Restuarant_8.png" /> Restuarant'
            });
var format_River_9 = new ol.format.GeoJSON();
var features_River_9 = format_River_9.readFeatures(json_River_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_River_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_River_9.addFeatures(features_River_9);
var lyr_River_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_River_9, 
                style: style_River_9,
                interactive: true,
                title: '<img src="styles/legend/River_9.png" /> River'
            });
var format_Roundabouts_10 = new ol.format.GeoJSON();
var features_Roundabouts_10 = format_Roundabouts_10.readFeatures(json_Roundabouts_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roundabouts_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roundabouts_10.addFeatures(features_Roundabouts_10);
var lyr_Roundabouts_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roundabouts_10, 
                style: style_Roundabouts_10,
                interactive: true,
                title: '<img src="styles/legend/Roundabouts_10.png" /> Roundabouts'
            });
var format_SCHOOL_11 = new ol.format.GeoJSON();
var features_SCHOOL_11 = format_SCHOOL_11.readFeatures(json_SCHOOL_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCHOOL_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCHOOL_11.addFeatures(features_SCHOOL_11);
var lyr_SCHOOL_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCHOOL_11, 
                style: style_SCHOOL_11,
                interactive: true,
                title: '<img src="styles/legend/SCHOOL_11.png" /> SCHOOL'
            });
var format_STREETS_12 = new ol.format.GeoJSON();
var features_STREETS_12 = format_STREETS_12.readFeatures(json_STREETS_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STREETS_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STREETS_12.addFeatures(features_STREETS_12);
var lyr_STREETS_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_STREETS_12, 
                style: style_STREETS_12,
                interactive: true,
                title: '<img src="styles/legend/STREETS_12.png" /> STREETS'
            });

lyr_Bank_0.setVisible(true);lyr_Fillingstation_1.setVisible(true);lyr_Healthfaciloties_2.setVisible(true);lyr_hotels_3.setVisible(true);lyr_Majorroads_4.setVisible(true);lyr_Minorroads_5.setVisible(true);lyr_OTHERS_6.setVisible(true);lyr_Recreationalcenter_7.setVisible(true);lyr_Restuarant_8.setVisible(true);lyr_River_9.setVisible(true);lyr_Roundabouts_10.setVisible(true);lyr_SCHOOL_11.setVisible(true);lyr_STREETS_12.setVisible(true);
var layersList = [lyr_Bank_0,lyr_Fillingstation_1,lyr_Healthfaciloties_2,lyr_hotels_3,lyr_Majorroads_4,lyr_Minorroads_5,lyr_OTHERS_6,lyr_Recreationalcenter_7,lyr_Restuarant_8,lyr_River_9,lyr_Roundabouts_10,lyr_SCHOOL_11,lyr_STREETS_12];
lyr_Bank_0.set('fieldAliases', {'BANK_NAME': 'BANK_NAME', });
lyr_Fillingstation_1.set('fieldAliases', {'FILLINGSTA': 'FILLINGSTA', });
lyr_Healthfaciloties_2.set('fieldAliases', {'FACILITY_N': 'FACILITY_N', });
lyr_hotels_3.set('fieldAliases', {'hotel_name': 'hotel_name', });
lyr_Majorroads_4.set('fieldAliases', {'SHAPE_Leng': 'SHAPE_Leng', 'STREET_NAM': 'STREET_NAM', });
lyr_Minorroads_5.set('fieldAliases', {'SHAPE_Leng': 'SHAPE_Leng', 'Street_nam': 'Street_nam', });
lyr_OTHERS_6.set('fieldAliases', {'NAME': 'NAME', });
lyr_Recreationalcenter_7.set('fieldAliases', {'NAME': 'NAME', });
lyr_Restuarant_8.set('fieldAliases', {'RESTUARANT': 'RESTUARANT', });
lyr_River_9.set('fieldAliases', {'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Roundabouts_10.set('fieldAliases', {'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SCHOOL_11.set('fieldAliases', {'SCHOOL_NAM': 'SCHOOL_NAM', });
lyr_STREETS_12.set('fieldAliases', {'SHAPE_Leng': 'SHAPE_Leng', 'STREET_NAM': 'STREET_NAM', });
lyr_Bank_0.set('fieldImages', {'BANK_NAME': 'TextEdit', });
lyr_Fillingstation_1.set('fieldImages', {'FILLINGSTA': 'TextEdit', });
lyr_Healthfaciloties_2.set('fieldImages', {'FACILITY_N': 'TextEdit', });
lyr_hotels_3.set('fieldImages', {'hotel_name': 'TextEdit', });
lyr_Majorroads_4.set('fieldImages', {'SHAPE_Leng': 'TextEdit', 'STREET_NAM': 'TextEdit', });
lyr_Minorroads_5.set('fieldImages', {'SHAPE_Leng': 'TextEdit', 'Street_nam': 'TextEdit', });
lyr_OTHERS_6.set('fieldImages', {'NAME': '', });
lyr_Recreationalcenter_7.set('fieldImages', {'NAME': 'TextEdit', });
lyr_Restuarant_8.set('fieldImages', {'RESTUARANT': 'TextEdit', });
lyr_River_9.set('fieldImages', {'SHAPE_Leng': 'TextEdit', });
lyr_Roundabouts_10.set('fieldImages', {'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SCHOOL_11.set('fieldImages', {'SCHOOL_NAM': 'TextEdit', });
lyr_STREETS_12.set('fieldImages', {'SHAPE_Leng': 'TextEdit', 'STREET_NAM': 'TextEdit', });
lyr_Bank_0.set('fieldLabels', {'BANK_NAME': 'header label', });
lyr_Fillingstation_1.set('fieldLabels', {'FILLINGSTA': 'header label', });
lyr_Healthfaciloties_2.set('fieldLabels', {'FACILITY_N': 'header label', });
lyr_hotels_3.set('fieldLabels', {'hotel_name': 'header label', });
lyr_Majorroads_4.set('fieldLabels', {'SHAPE_Leng': 'no label', 'STREET_NAM': 'header label', });
lyr_Minorroads_5.set('fieldLabels', {'SHAPE_Leng': 'no label', 'Street_nam': 'header label', });
lyr_OTHERS_6.set('fieldLabels', {'NAME': 'header label', });
lyr_Recreationalcenter_7.set('fieldLabels', {'NAME': 'header label', });
lyr_Restuarant_8.set('fieldLabels', {'RESTUARANT': 'header label', });
lyr_River_9.set('fieldLabels', {'SHAPE_Leng': 'no label', });
lyr_Roundabouts_10.set('fieldLabels', {'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SCHOOL_11.set('fieldLabels', {'SCHOOL_NAM': 'header label', });
lyr_STREETS_12.set('fieldLabels', {'SHAPE_Leng': 'no label', 'STREET_NAM': 'header label', });
lyr_STREETS_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});