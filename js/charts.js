
      
        //Chart 1 - Fears
        
        var options = {
          series: [
          {
            name: "Concern",
            data: [1, 2, 3, 4, ],
          },
        ],
          chart: {
          type: 'bar',
          height: 200,
          
          width: 200,
        },
        plotOptions: {
          bar: {
            borderRadius: 0,
            horizontal: true,
            distributed: true,
            barHeight: '70%',
            isFunnel: true,
          },
        },
        colors: [
          '#F44F5E',
          '#E55A89',
          '#D863B1',
          '#CA6CD8',
        ],
        dataLabels: {
          enabled: true,
          formatter: function (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] 
          },
          dropShadow: {
            enabled: true,
          },
        },
        title: {
          text: 'Pyramid Chart',
          align: 'middle',
        },
        xaxis: {
          categories: ['River erosion', 'Heat waves', 'Cyclones', 'Floods'],
        },
        legend: {
          show: false,
        },
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
      