var size = 0;
var ranges_EasyAHPLayer = [[25.000000, 43.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(215,25,28,1.0)"})
    })]],
[43.000000, 56.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(253,174,97,1.0)"})
    })]],
[56.000000, 70.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(255,255,191,1.0)"})
    })]],
[70.000000, 82.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(171,221,164,1.0)"})
    })]],
[82.000000, 96.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(43,131,186,1.0)"})
    })]]];
var styleCache_EasyAHPLayer={}
var style_EasyAHPLayer = function(feature, resolution){
    var value = feature.get("WalkScore");
    var style = ranges_EasyAHPLayer[0][2];
    for (i = 0; i < ranges_EasyAHPLayer.length; i++){
        var range = ranges_EasyAHPLayer[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_EasyAHPLayer[key]){
        var text = new ol.style.Text({
              font: '10.725px Calibri,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_EasyAHPLayer[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_EasyAHPLayer[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};