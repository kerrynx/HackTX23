
// quickchart-js https://github.com/typpo/quickchart-js

const QuickChart = require('quickchart-js');

const chart = new QuickChart();

chart.setWidth(500)
chart.setHeight(300);
chart.setVersion('2');

chart.setConfig({
  type: 'doughnut',
  data: {
    datasets: [{
      data: [50, 60],
      backgroundColor: [
            'rgb(255, 216, 123)',
            'rgb(255, 237, 195)'
        ]
    }]
  }
});

// Print the chart URL
console.log(chart.getUrl());

// Get the image...

// Or write it to a file
chart.toFile('../assets/Money_Chart.png');


// MAKE SECOND CHART
chart = new QuickChart();

chart.setWidth(500)
chart.setHeight(300);
chart.setVersion('2');

chart.setConfig({
  type: 'doughnut',
  data: {
    datasets: [{
      data: [30, 80],
      backgroundColor: [
            'rgb(255, 216, 123)',
            'rgb(255, 237, 195)'
        ]
    }]
  }
});

// Print the chart URL
console.log(chart.getUrl());

// Get the image...
const image = await chart.toBinary();

// Or write it to a file
chart.toFile('../assets/Time_Chart.png');