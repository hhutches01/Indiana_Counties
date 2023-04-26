document.addEventListener('DOMContentLoaded', function() {
  var ctx = document.getElementById('populationChart').getContext('2d');

  var data = {
    labels: ['State 1', 'State 2', 'State 3', 'State 4', 'State 5'], // Replace these with actual state names and add more as needed.
    datasets: [{
      label: 'Population',
      data: [10000, 20000, 30000, 40000, 50000], // Replace these with actual population numbers for the states.
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1
    }]
  };

  var options = {
    title: {
      display: true,
      text: 'United States Population by State',
      fontSize: 24
    },
    legend: {
      display: true,
      position: 'bottom'
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  var populationChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });
});

