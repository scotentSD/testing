var sec = 1000; // 1sec
var min = sec * 60 // 1min

setTimeout(function(){
   window.location.reload(3);
}, min);

var highchartsOptions = Highcharts.setOptions(Highcharts.theme = {
   colors: ['#058DC7', '#eaab1d']
});

//Make it to Market
Highcharts.setOptions({
  chart: {
    defaultSeriesType: 'column',
    backgroundColor: '#fff',
    shadow: true
  }
});

//By Design

$('#container5').highcharts({
    data: {
        googleSpreadsheetKey: '1MgXE7bjr6PDDRubxmizGOl-PfYA6clbYsEGcEjoS0r8',
        googleSpreadsheetWorksheet: 3
    },
    title: {
      text: 'By Design - Daily'
    },
   chart: {
    defaultSeriesType: 'column',
    backgroundColor: '#fff',
    borderColor: '#990000',  
     borderWidth: 5,
    shadow: true
  },
    yAxis: {
      min: 0.0,
      title: {
        text: 'Visits & Completions'
      }
    }
});


$('#container6').highcharts({
    data: {
        googleSpreadsheetKey: '1MgXE7bjr6PDDRubxmizGOl-PfYA6clbYsEGcEjoS0r8',
        googleSpreadsheetWorksheet: 4
    },
    title: {
      text: 'By Design - Total'
    },
  chart: {
    defaultSeriesType: 'column',
    backgroundColor: '#fff',
    borderColor: '#990000',  
     borderWidth: 5,
    shadow: true
  },
    yAxis: {
      min: 0.0,
      title: {
        text: 'Visits & Completions'
      }
    }
}); 


$("#container5").click(function() {
    window.location = "index.html";
});

$("#container6").click(function() {
    window.location = "index.html";
});
//1MgXE7bjr6PDDRubxmizGOl-PfYA6clbYsEGcEjoS0r8
//1pVgUoNfuj__EL2HfNOAPFTm0UM9_wbzuGaE2PvUUMTw