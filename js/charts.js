google.charts.load('current', {'packages': ['imageareachart', 'corechart']});
google.charts.setOnLoadCallback(drawChart);
// google.charts.setOnLoadCallback(drawDonut);
google.charts.setOnLoadCallback(drawBar);

// density graph
function drawChart() {
  var data_convo = google.visualization.arrayToDataTable([
    ['Days', ''],
    ['Mon', 240],
    ['', 230],
    ['Tue', 270],
    ['', 340],
    ['Wed', 390],
    ['', 290],
    ['Thurs', 200],
    ['', 240],
    ['Fri', 270],
    ['', 400],
    ['Sat', 470],
    ['', 410],
    ['Sun', 375],
  ]);

  var chart = new google.visualization.ImageAreaChart(document.getElementById('chart_div'));
  chart.draw(data_convo, {
    min: 100,
    max: 500,
    color: '#7c4fcd',
    backgroundColor:'#232f3e',  
  });
}


//bar
function drawBar() {
  var data = google.visualization.arrayToDataTable([
    ['Days', ''],
    ['Mon', 53,],            
    ['Tues', 42],            
    ['Wed', 64],  
    ['Thurs',56],
    ['Fri', 75], 
    ['Sat', 42], 
    ['Sun', 63],  
  ]);

  var chart = new google.visualization.ColumnChart(document.getElementById('barGraph'));
  chart.draw(data, {
    min: 40,
    max: 75,
    color: '#7c4fcd',
    backgroundColor:'#232f3e',
    legend: 'none',
    hAxis: {
      textStyle:{color: '#c7c7c7'}
    },
    vAxis: {
      textStyle:{color: '#c7c7c7'}
    }
  });
}

// donut chart
      new Morris.Donut({  
      element: 'donutchart',
      resize: true, 
      data: [
        { label: 'Campaign 01', value: 55 },
        { label: 'Campaign 02', value: 15 },    
        { label: 'Campaign 03', value: 30 }
      ],
      labelColor:"#c7c7c7",
      colors: ['#1753fc', '#fdb901', '#9258f1'],        
      formatter: function (y, data) { return y + '%' }  
    });