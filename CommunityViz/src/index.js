//const dscc = require('@google/dscc');
//const viz = require('@google/dscc-scripts/viz/initialViz.js');
//const local = require('./localMessage.js');

const dscc = require('@google/dscc');
//const chartjs = require('chart.js');
const local = require('./localMessage.js');
import Highcharts from 'highcharts';
import more from 'highcharts/highcharts-more';
more(Highcharts);
require('highcharts/modules/debugger')(Highcharts);
require('highcharts/modules/accessibility')(Highcharts);
window.Highcharts = Highcharts;


//import * as Exporting from 'highcharts/modules/exporting';
//Exporting(Highcharts);

//import { Chart, registerables } from 'chart.js';
//Chart.register(...registerables);


export const LOCAL = false;


var margin = { top: 10, bottom: 10, right: 10, left: 10 };

var height = dscc.getHeight() - margin.top - margin.bottom;
var width = dscc.getWidth() - margin.left - margin.right;

var canvasElement = document.createElement('canvas');
var ctx = canvasElement.getContext('2d');
canvasElement.id = 'myViz';
canvasElement.height = height;
canvasElement.width = width;

var chartElement = document.createElement('div');
chartElement.id = 'Viz';
document.body.appendChild(chartElement);
document.body.appendChild(canvasElement);



// write viz code here
const drawViz = (data) => {
 // viz.readmeViz();
 // viz.firstViz(data);

 var ctx = canvasElement.getContext('2d');
 ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);

 console.log(JSON.stringify(data))

// Map the data response to create the required labels and data sets for the Chart JS radar chart

 // var dataLabels = data.fields.metricID.map(function (dataLabel) {
 //   return dataLabel.name
  //});

  var dataLabels = data.fields.metric.map(function (dataLabel) {
      return dataLabel.name
       });
  
 //var dataSets = data.tables.DEFAULT.map(function (dataSet) {
 //     return {'name':dataSet.dimID,'data':dataSet.metricID}});
var met = [];

 var dataSets = data.tables.DEFAULT.map(function (dataSet) {
       met = []; 
       dataSet.metric.map(function (val) {met.push(val)})
       met.push({isSum: true})
       console.log(met)
       return {'name':dataSet.dimension[0],'data': met}});

 
 console.log(JSON.stringify(dataSets))    
  
  // The Chart JS radar visualisation is created and written onto the "ctx" canvas. Additional style options are configured
  
  var myRadarChart =   new  window.Highcharts.chart('Viz', {
    chart: {
        type: 'waterfall'
    },
    title: {
        text: 'Highcharts stacked waterfall'
    },
	xAxis: {
        type: 'category',
		categories: dataLabels
    
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: dataSets
});



};

// renders locally
//if (DSCC_IS_LOCAL) {
//  drawViz(local.message);
//} else {
//  dscc.subscribeToData(drawViz, {transform: dscc.objectTransform});
//}

if (LOCAL) {
  drawViz(local.message);
 } else {
  dscc.subscribeToData(drawViz, {transform: dscc.objectTransform});
 }