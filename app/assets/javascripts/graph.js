$(document).ready(function(){
$(function () {
    var date = new Date();
    function taskPerDay(timeOfDay){
      var morning = [];
      var afternoon = [];
      for(var i = date.getDate() - 6; i <= date.getDate(); i++) {
        var mrnCntr = 0;
        var aftrCntr = 0;
        for(var x = 0; x < complete.length; x++) {
          console.log(i);
          if(~~complete[x].substring(8,10) == i){
            if(~~complete[x].substring(11,13) < 17){
                mrnCntr ++;
            }else{
              aftrCntr ++;
            }
          }
          
          }
        morning.push(mrnCntr);
        afternoon.push(aftrCntr);
        }
      console.log(morning);
      if(timeOfDay === "morning"){
        return morning;
      }else{
        return afternoon;
      }
    }
    function average(){
      mornArray = taskPerDay("morning");
      aftrArray = taskPerDay("afternoon");
      avgArray = [];
      for(var i = 0; i <= 6; i++){
        avgArray.push((mornArray[i] + aftrArray[i])/2);
      }
      return avgArray;
    }
    var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    function lastSevenDays(){
      weekArray = [];
      for (var i = 6; i >= 0; i--) {
        var num = date.getDay() - i;
        if(num >=0){
          weekArray.push(dayNames[num]);
        }else{
          weekArray.push(dayNames[7 - Math.abs(num)]);
        }
      }
      return weekArray;
    }
    $('#container').highcharts({
        title: {
            text: 'Week of ' + monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()
        },
        xAxis: {
            categories: lastSevenDays()
        },
        labels: {
            // items: [{
            //     html: 'Total Pomodoros Completed',
            //     style: {
            //         left: '50px',
            //         top: '18px',
            //         color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
            //     }
            // }]
        },
        series: [{
            type: 'column',
            name: 'Morning',
            data: taskPerDay("morning")
        }, {
            type: 'column',
            name: 'Afternoon',
            data: taskPerDay("afternoon")
        }, {
            type: 'spline',
            name: 'Average',
            data: average(),
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3],
                fillColor: 'white'
            }
        // }, {
        //     type: 'pie',
        //     name: 'Total Pomodoros',
        //     data: [{
        //         name: 'Admin',
        //         y: 13,
        //         color: Highcharts.getOptions().colors[0] // Jane's color
        //     }, {
        //         name: 'Back-end',
        //         y: 23,
        //         color: Highcharts.getOptions().colors[1] // John's color
        //     }, {
        //         name: 'Front-end',
        //         y: 19,
        //         color: Highcharts.getOptions().colors[2] // Joe's color
        //     }],
        //     center: [100, 80],
        //     size: 100,
        //     showInLegend: false,
        //     dataLabels: {
        //         enabled: false
            // }
        }]
    });
});

/**
 * Dark theme for Highcharts JS
 * @author Torstein Honsi
 */

// Load the fonts
Highcharts.createElement('link', {
   href: 'http://fonts.googleapis.com/css?family=Unica+One',
   rel: 'stylesheet',
   type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

Highcharts.theme = {
   colors: ["#2b908f", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
   chart: {
      backgroundColor: {
         linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
         stops: [
            [0, '#2a2a2b'],
            [1, '#3e3e40']
         ]
      },
      style: {
         fontFamily: "'Unica One', sans-serif"
      },
      plotBorderColor: '#606063'
   },
   title: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase',
         fontSize: '20px'
      }
   },
   subtitle: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase'
      }
   },
   xAxis: {
      gridLineColor: '#707073',
      labels: {
         style: {
            color: '#E0E0E3'
         }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      title: {
         style: {
            color: '#A0A0A3'

         }
      }
   },
   yAxis: {
      gridLineColor: '#707073',
      labels: {
         style: {
            color: '#E0E0E3'
         }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      tickWidth: 1,
      title: {
         style: {
            color: '#A0A0A3'
         }
      }
   },
   tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      style: {
         color: '#F0F0F0'
      }
   },
   plotOptions: {
      series: {
         dataLabels: {
            color: '#B0B0B3'
         },
         marker: {
            lineColor: '#333'
         }
      },
      boxplot: {
         fillColor: '#505053'
      },
      candlestick: {
         lineColor: 'white'
      },
      errorbar: {
         color: 'white'
      }
   },
   legend: {
      itemStyle: {
         color: '#E0E0E3'
      },
      itemHoverStyle: {
         color: '#FFF'
      },
      itemHiddenStyle: {
         color: '#606063'
      }
   },
   credits: {
      style: {
         color: '#666'
      }
   },
   labels: {
      style: {
         color: '#707073'
      }
   },

   drilldown: {
      activeAxisLabelStyle: {
         color: '#F0F0F3'
      },
      activeDataLabelStyle: {
         color: '#F0F0F3'
      }
   },

   navigation: {
      buttonOptions: {
         symbolStroke: '#DDDDDD',
         theme: {
            fill: '#505053'
         }
      }
   },

   // scroll charts
   rangeSelector: {
      buttonTheme: {
         fill: '#505053',
         stroke: '#000000',
         style: {
            color: '#CCC'
         },
         states: {
            hover: {
               fill: '#707073',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            },
            select: {
               fill: '#000003',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            }
         }
      },
      inputBoxBorderColor: '#505053',
      inputStyle: {
         backgroundColor: '#333',
         color: 'silver'
      },
      labelStyle: {
         color: 'silver'
      }
   },

   navigator: {
      handles: {
         backgroundColor: '#666',
         borderColor: '#AAA'
      },
      outlineColor: '#CCC',
      maskFill: 'rgba(255,255,255,0.1)',
      series: {
         color: '#7798BF',
         lineColor: '#A6C7ED'
      },
      xAxis: {
         gridLineColor: '#505053'
      }
   },

   scrollbar: {
      barBackgroundColor: '#808083',
      barBorderColor: '#808083',
      buttonArrowColor: '#CCC',
      buttonBackgroundColor: '#606063',
      buttonBorderColor: '#606063',
      rifleColor: '#FFF',
      trackBackgroundColor: '#404043',
      trackBorderColor: '#404043'
   },

   // special colors for some of the
   legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
   background2: '#505053',
   dataLabelsColor: '#B0B0B3',
   textColor: '#C0C0C0',
   contrastTextColor: '#F0F0F3',
   maskColor: 'rgba(255,255,255,0.3)'
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);

});
