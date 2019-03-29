import chartCosmatics from './chartConfig';
export default {

  Netflix: {
    revenueChartConfigs: {
      type: "mscombi2d",
      width: "100%",
      height: "300",
      containerBackgroundOpacity: '0',
      dataFormat: "json",
      dataSource: {
        chart: {
          bgcolor: "##282A2E",
          canvasBgColor: "##282A2E",
          animation: "0",
          theme: "fusion",
          plotfillalpha: "15",
          plotFillAngle: "90",
          showCanvasBorder: "0",
          showLabels: "1",
          divLineAlpha: "50",
          divlineColor: "#434456",
          showYAxisValues: "1",
          showdivline: "1",
          yaxisminvalue: "1000000000",
          yaxismaxvalue:"14500000000",
          placeValuesInside: "0",
          showLegend: "0",
          showShadow: "0",
          paletteColors: "#62B58F",
          drawAnchors: "0",
          showAlternateHGridColor: "0",
          drawCrossLine: "0",
          plotColorinTooltip: "0",
          baseFontColor: "#ffffff",
          valueFontColor: "#b4b4b6",
          valueFontSize: "14",
          baseFontSize: "12",
          baseFont: "Roboto",
          toolTipBgColor: "#525357",
          toolTipColor: "#F8F8F8",
          toolTipBorderColor: "#525357",
          tooltipBorderAlpha: "20",
          showToolTipShadow: "1",
          toolTipPadding: "10",
          numberPrefix: "$",
          formatNumberScale: "1",
          numberScaleUnit: "B",
          numberScaleValue: "1000000000",
          plotToolText: "<b>Global Revenue</b></br><b>Year : </b>$label</br><b>Revenue : </b> $dataValue"
  
      },
        categories: [{
          category: [{
            label: "2013"
          },
          {
            label: "2014"
          },
          {
            label: "2015"
          },
          {
            label: "2016"
          },
          {
            label: "2017"
          },
          {
            label: "2018"
          }
          ]
        }],
        dataset: [{
          renderAs: "splinearea",
          showValues: "0",
          data: [

            {
              value: "4374560000"
            },
            {
              value: "5504660000"
            },
            {
              value: "6779510000"
            },
            {
              value: "8830670000"
            },
            {
              value: "11692710000"
            },
            {
              value: "12862520000"
            }
          ]
        },
        {
          renderAs: "spline",
          showValues: "1",
          data: [

            {
              value: "4374560000"
            },
            {
              value: "5504660000"
            },
            {
              value: "6779510000"
            },
            {
              value: "8830670000"
            },
            {
              value: "11692710000"
            },
            {
              value: "12862520000"
            }
          ]
        }
        ]
      }
    },
    demogrphyconfig: {
      type: "doughnut2d",
      width: "100%",
      height: "160",
      containerBackgroundOpacity: '0',
      dataFormat: "json",
      dataSource: {
        "chart": chartCosmatics.demographyChartCosmatics,
        "data": [{
          "label": "50-64 Years",
          "value": "32"
        }, {
          "label": "30-49 Years",
          "value": "36"
        },{
          "label": "18-29 Years",
          "value": "32"
        } ]
      }
    },
    subscriptionConfig: {

      type: "column2d",
      width: "100%",
      height: "204",
      containerBackgroundOpacity: '0',
      dataFormat: "json",
      dataSource: {
        chart: {
          theme: "fusion",
          bgcolor: "#282A2E",
          canvasBgColor: "#282A2E",
          paletteColors: "#6957DA",
          numbersuffix: "M",
          plotSpacePercent: "60",
          formatNumberScale: "1",
          showdivlineValues: "0",
          drawCrossLine: "1",
          yaxisMaxValue:"650",
          crossLineColor: "#575961",
          crossLineAlpha: "15",
          showLimits: "0",
          showValues: "1",
          divlineAlpha: "0",
          baseFontSize: "12",
          baseFont: "Roboto",
          toolTipBgColor: "#525357",
          toolTipColor: "#F8F8F8",
          toolTipBorderColor: "#525357",
          tooltipBorderAlpha: "20",
          showToolTipShadow: "1",
          toolTipPadding: "10",
          plotToolText: "<b>Year : </b>$label </br><b>Subscribers :</b> $datavalue",
          labelFontColor: "#ffffff",
          valueFontColor: "#81809C"
  
      },
        data: [

          {
            label: "2013",
            value: "158.5"
          },
          {
            label: "2014",
            value: "208.86"
          },
          {
            label: "2015",
            value: "271.75"
          },
          {
            label: "2016",
            value: "345.22"
          },
          {
            label: "2017",
            value: "429.53"
          },
          {
            label: "2018",
            value: "539.82"
          }
        ]
      }
    },
    awardConfigs: {
      type: "overlappedColumn2d",
      width: "100%",
      height: "330",
      containerBackgroundOpacity: '0',
      dataFormat: "json",
      dataSource: {
        chart:  {
          bgcolor: "#282A2E",
          canvasBgColor: "#282A2E",
          showLabels: "1",
          drawCrossLine: "0",
          divLineAlpha: "0",
          showYAxisValues: "0",
          showValues: "1",
          placeValuesInside: "0",
          shadow: "0",
          legendPadding: "0",
          yAxisMaxValue: 130,
          showShadow: "0",
          paletteColors: "#942F1C,#DD614A",
          drawAnchors: "0",
          showAlternateHGridColor: "0",
          legenditemfontcolor: "#ffffff",
          plotColorinTooltip: "0",
          valueFontColor: "#b4b4b6",
          labelFontColor: "#ffffff",
          baseFontSize: "12",
          baseFont: "Roboto",
          toolTipBgColor: "#525357",
          toolTipColor: "#F8F8F8",
          toolTipBorderColor: "#525357",
          tooltipBorderAlpha: "20",
          showToolTipShadow: "1",
          toolTipPadding: "10",
          plotToolText: "<b>Year :</b> $label</br><b>$seriesname :</b> $datavalue",
          theme: "fusion"
  
      },
        categories: [{
          category: [{
            label: "2013"
          }, {
            label: "2014"
          }, {
            label: "2015"
          }, {
            label: "2016"
          }, {
            label: "2017"
          }, {
            label: "2018"
          }]
        }],
        dataset: [{
          seriesname: "Nominations",
          data: [{
            value: "13"
          }, {
            value: "31"
          }, {
            value: "34"
          }, {
            value: "54"
          }, {
            value: "91"
          }, {
            value: "112"
          }]
        }, {
          seriesname: "Wins",
          data: [{
            value: "3"
          }, {
            value: "7"
          }, {
            value: "2"
          }, {
            value: "9"
          }, {
            value: "20"
          }, {
            value: "23"
          }]
        }]
      }
    },
    subRegion: {
      type: "world",
      width: "100%",
      height: "430",
      containerBackgroundOpacity: '0',
      dataFormat: "json",
      dataSource: {
        "chart": chartCosmatics.subregionChartCosmatics,
        colorrange: {
          minvalue: "0",
          startlabel: "Low",
          endlabel: "High",
          code: "#4A4C4F",
          gradient: "1",
          alpha: 0,
          color: [{
            minvalue: "0",
            maxvalue: "1",
            code: "#DEDAF1",

          },
          {
            minvalue: "2",
            maxvalue: "5",
            code: "#BEB3E2",

          },
          {
            minvalue: "5",
            maxvalue: "10",
            code: "#ADA1DB",

          },
          {
            minvalue: "11",
            maxvalue: "20",
            code: "#786BC3",

          },
          {
            minvalue: "21",
            maxvalue: "70",
            code: "#524CB5",

          }

          ]
        },
        "data": [{
          "id": "NA",
          "value": "66",
          useHoverColor: "0"
        },
        {
          "id": "SA",
          "value": "32",
          useHoverColor: "0"
        },
        {
          "id": "AS",
          "value": "17",
          useHoverColor: "0"
        },
        {
          "id": "EU",
          "value": "5",
          useHoverColor: "0"
        },
        {
          "id": "AF",
          "value": "3",
          useHoverColor: "0"
        },
        {
          "id": "AU",
          "value": "1",
          useHoverColor: "0"
        }
        ]

      },

    },
    imdbRatingConfig: {
      type: "bar2d",
      width: "100%",
      height: "330",
      containerBackgroundOpacity: '0',
      dataFormat: "json",
      dataSource: {
        chart: chartCosmatics.imdbRatingChartCosmatics,

        data: [{
          label: "Action",
          value: "8.4"
        },
        {
          label: "Animation",
          value: "8.5"
        },
        {
          label: "Biography",
          value: "8.8"
        },
        {
          label: "Comedy",
          value: "7"
        },
        {
          label: "Documentary",
          value: "8.6"
        },
        {
          label: "Drama",
          value: "8.5"
        },
        {
          label: "Reality-TV",
          value: "8.4"
        },
        {
          label: "Thriller",
          value: "8.2"
        }
        ]

      }

    }
  },
  Amazon: {
    revenueChartConfigs: {
      type: "mscombi2d",
      width: "100%",
      height: "300",
      containerBackgroundOpacity: '0',
      dataFormat: "json",
      dataSource: {
        chart:  {
          bgcolor: "#282A2E",
          canvasBgColor: "#282A2E",
          animation: "0",
          theme: "fusion",
          plotfillalpha: "15",
          plotFillAngle: "90",
          showCanvasBorder: "0",
          showLabels: "1",
          divLineAlpha: "50",
          divlineColor: "#434456",
          showYAxisValues: "1",
          showdivline: "1",
          yaxisminvalue: "1000000000",
          yaxismaxvalue:"24000000000",
          placeValuesInside: "0",
          showLegend: "0",
          showShadow: "0",
          paletteColors: "#62B58F",
          drawAnchors: "0",
          showAlternateHGridColor: "0",
          drawCrossLine: "0",
          plotColorinTooltip: "0",
          baseFontColor: "#ffffff",
          valueFontColor: "#b4b4b6",
          valueFontSize: "14",
          baseFontSize: "12",
          baseFont: "Roboto",
          toolTipBgColor: "#525357",
          toolTipColor: "#F8F8F8",
          toolTipBorderColor: "#525357",
          tooltipBorderAlpha: "20",
          showToolTipShadow: "1",
          toolTipPadding: "10",
          numberPrefix: "$",
          formatNumberScale: "1",
          numberScaleUnit: "B",
          numberScaleValue: "1000000000",
          plotToolText: "<b>Global Revenue</b></br><b>Year : </b>$label</br><b>Revenue :</b> $dataValue"
  
      },
        categories: [{
          category: [{
            label: "2015"
          },
          {
            label: "2016"
          },
          {
            label: "2017"
          },
          {
            label: "2018"
          }
          ]
        }],
        dataset: [{
          renderAs: "splinearea",
          showValues: "0",
          data: [
            {
              value: "13655000000"
            },
            {
              value: "15555800000"
            },
            {
              value: "17665800000"
            },
            {

              value: "20501000000"
            }
          ]

        },
        {
          renderAs: "spline",
          showValues: "1",
          data: [
            {
              value: "13655000000"
            },
            {
              value: "15555800000"
            },
            {
              value: "17665800000"
            },
            {

              value: "20501000000"
            }
          ]
        }
        ]
      }
    },
    demogrphyconfig: {

      type: "doughnut2d",
      width: "100%",
      height: "160",
      containerBackgroundOpacity: '0',
      dataFormat: "json",
      dataSource: {
        "chart": chartCosmatics.demographyChartCosmatics,
        "data": [ {
          "label": "50-64 Years",
          "value": "10"
        }, {
          "label": "30-49 Years",
          "value": "50"
        },{
          "label": "18-29 Years",
          "value": "40"
        }]
      }
    },
    subscriptionConfig: {

      type: "column2d",
      width: "100%",
      height: "204",
      containerBackgroundOpacity: '0',
      dataFormat: "json",
      dataSource: {
        chart: chartCosmatics.subscriptionChartCosmatics,
        data: [

          {
            label: "2015",
            value: "370"
          },
          {
            label: "2016",
            value: "590"
          },
          {
            label: "2017",
            value: "700"
          },
          {
            label: "2018",
            value: "815"
          }
        ]
      }
    },
    awardConfigs: {
      type: "overlappedColumn2d",
      width: "100%",
      height: "330",
      containerBackgroundOpacity: '0',
      dataFormat: "json",
      dataSource: {
        chart: chartCosmatics.awardChartCosmatics,
        categories: [{
          category: [{
            label: "2015"
          }, {
            label: "2016"
          }, {
            label: "2017"
          }, {
            label: "2018"
          }]
        }],
        dataset: [{
          seriesname: "Nominations",
          data: [{
            value: "5"
          }, {
            value: "16"
          }, {
            value: "16"
          }, {
            value: "22"
          }]
        }, {
          seriesname: "Wins",
          data: [{
            value: "2"
          }, {
            value: "2"
          }, {
            value: "0"
          }, {
            value: "5"
          }]
        }]
      }
    },

    subRegion: {
      type: "world",
      width: "100%",
      height: "430",
      containerBackgroundOpacity: '0',
      dataFormat: "json",
      dataSource: {
        "chart": chartCosmatics.subregionChartCosmatics,
        colorrange: {
          minvalue: "0",
          startlabel: "Low",
          endlabel: "High",
          code: "#4A4C4F",
          gradient: "1",
          alpha: 0,
          color: [{
            minvalue: "0",
            maxvalue: "1",
            code: "#DEDAF1",

          },
          {
            minvalue: "2",
            maxvalue: "5",
            code: "#BEB3E2",

          },
          {
            minvalue: "5",
            maxvalue: "10",
            code: "#ADA1DB",

          },
          {
            minvalue: "11",
            maxvalue: "20",
            code: "#786BC3",

          },
          {
            minvalue: "21",
            maxvalue: "70",
            code: "#524CB5",

          }

          ]
        },
        "data": [{
          "id": "NA",
          "value": "40.2",
          useHoverColor: "0"
        },
        {
          "id": "SA",
          "value": "1.28",
          useHoverColor: "0"
        },
        {
          "id": "AS",
          "value": "20",
          useHoverColor: "0"
        },
        {
          "id": "EU",
          "value": "11.4",
          useHoverColor: "0"
        },
        {
          "id": "AF",
          "value": "1",
          useHoverColor: "0"
        },
        {
          "id": "AU",
          "value": "2",
          useHoverColor: "0"
        }
        ]

      },

    },
    imdbRatingConfig: {
      type: "bar2d",
      width: "100%",
      height: "330",
      containerBackgroundOpacity: '0',
      dataFormat: "json",
      dataSource: {
        chart: chartCosmatics.imdbRatingChartCosmatics,
        data: [{
          label: "Adventure",
          value: "8.4"
        },
        {
          label: "Animation",
          value: "6.5"
        },
        {
          label: "Biography",
          value: "7.2"
        },
        {
          label: "Comedy",
          value: "7.6"
        },
        {
          label: "Documentary",
          value: "7.3"
        },
        {
          label: "Drama",
          value: "8.2"
        },
        {
          label: "Reality-TV",
          value: "8.7"
        },
        {
          label: "Thriller",
          value: "8"
        }
        ]
      }

    }

  },
  Hulu: {
    kpiData: {
      revenue: "2.85B",
      subscribers: "25M",
      emmy: "1",
      rating: "7.07"
    },
    revenueChartConfigs: {
      type: "mscombi2d",
      width: "100%",
      height: "300",
      containerBackgroundOpacity: '0',
      dataFormat: "json",
      dataSource: {
        chart: chartCosmatics.revenueChartCosmatics,
        categories: [{
          category: [{
            label: "2015"
          },
          {
            label: "2016"
          },
          {
            label: "2017"
          },
          {
            label: "2018"
          }
          ]
        }],
        "dataset": [{
          renderAs: "splinearea",
          showValues: "0",
          data: [
            {

              value: "1500000000"
            },
            {

              value: "2000000000"
            },
            {

              value: "2400000000"
            },
            {

              value: "2800000000"
            }
          ]

        },
        {
          renderAs: "spline",
          showValues: "1",
          data: [
            {

              value: "1500000000"
            },
            {

              value: "2000000000"
            },
            {

              value: "2400000000"
            },
            {

              value: "2800000000"
            }
          ]
        }

        ]

      }
    },
    demogrphyconfig: {

      type: "doughnut2d",
      width: "100%",
      height: "160",
      containerBackgroundOpacity: '0',
      dataFormat: "json",
      dataSource: {
        "chart": chartCosmatics.demographyChartCosmatics,
        "data": [ {
          "label": "50-64 Years",
          "value": "16"
        }, {
          "label": "30-49 Years",
          "value": "36"
        },{
          "label": "18-29 Years",
          "value": "48"
        }]
      }
    },
    subscriptionConfig: {

      type: "column2d",
      width: "100%",
      height: "204",
      containerBackgroundOpacity: '0',
      dataFormat: "json",
      dataSource: {
        chart: chartCosmatics.subscriptionChartCosmatics,
        data: [

          {
            label: "2015",
            value: "10"
          },
          {
            label: "2016",
            value: "12"
          },
          {
            label: "2017",
            value: "17"
          },
          {
            label: "2018",
            value: "25"
          }
        ]
      }
    },
    awardConfigs: {
      type: "overlappedColumn2d",
      width: "100%",
      height: "330",
      containerBackgroundOpacity: '0',
      dataFormat: "json",
      dataSource: {
        chart: chartCosmatics.awardChartCosmatics,
        categories: [{
          category: [{
            label: "2017"
          }, {
            label: "2018"
          }]
        }],
        dataset: [{
          seriesname: "Nominations",
          data: [{
            value: "7"
          }, {
            value: "12"
          }]
        }, {
          seriesname: "Wins",
          data: [{
            value: "5"
          }, {
            value: "1"
          }]
        }]
      }
    },

    subRegion: {
      type: "world",
      width: "100%",
      height: "430",
      containerBackgroundOpacity: '0',
      dataFormat: "json",
      dataSource: {
        "chart": chartCosmatics.subregionChartCosmatics,
        colorrange: {
          minvalue: "0",
          startlabel: "Low",
          endlabel: "High",
          code: "#4A4C4F",
          gradient: "1",
          alpha: 0,
          color: [{
            minvalue: "0",
            maxvalue: "1",
            code: "#DEDAF1",

          },
          {
            minvalue: "2",
            maxvalue: "5",
            code: "#BEB3E2",

          },
          {
            minvalue: "5",
            maxvalue: "10",
            code: "#ADA1DB",

          },
          {
            minvalue: "11",
            maxvalue: "20",
            code: "#786BC3",

          },
          {
            minvalue: "21",
            maxvalue: "70",
            code: "#524CB5",

          }
          ]
        },
        "data": [{
          "id": "NA",
          "value": "25",
          useHoverColor: "0"
        },
        {
          "id": "SA",
          "value": "0",
          useHoverColor: "0"
        },
        {
          "id": "AS",
          "value": "0",
          useHoverColor: "0"
        },
        {
          "id": "EU",
          "value": "0",
          useHoverColor: "0"
        },
        {
          "id": "AF",
          "value": "0",
          useHoverColor: "0"
        },
        {
          "id": "AU",
          "value": "0",
          useHoverColor: "0"
        }
        ]

      },

    },
    imdbRatingConfig: {
      type: "bar2d",
      width: "100%",
      height: "330",
      containerBackgroundOpacity: '0',
      dataFormat: "json",
      dataSource: {
        chart: chartCosmatics.imdbRatingChartCosmatics,
        data: [{
          label: "Action",
          value: "7.3"
        },
        {
          label: "Animation",
          value: "5.8"
        },
        {
          label: "Adventure",
          value: "7.3"
        },
        {
          label: "Comedy",
          value: "7.1"
        },
        {
          label: "Documentary",
          value: "6.5"
        },
        {
          label: "Drama",
          value: "7"
        },
        {
          label: "Reality-TV",
          value: "6.3"
        },
        {
          label: "Talk-show",
          value: "7"
        }
        ]
      }

    }

  },
  HBO: {
    kpiData: {
      revenue: "6B",
      subscribers: "150M",
      emmy: "6",
      rating: "8.04"
    },
    revenueChartConfigs: {
      type: "mscombi2d",
      width: "100%",
      height: "300",
      containerBackgroundOpacity: '0',
      dataFormat: "json",
      dataSource: {
        chart: chartCosmatics.revenueChartCosmatics,
        categories: [{
          category: [{
            label: "2013"
          },
          {
            label: "2014"
          },
          {
            label: "2015"
          },
          {
            label: "2016"
          },
          {
            label: "2017"
          },
          {
            label: "2018"
          }

          ]
        }],
        dataset: [{
          renderAs: "splinearea",
          showValues: "0",
          data: [
            {
              value: "4230000000"
            },
            {
              value: "4580000000"
            },
            {
              value: "4750000000"
            },
            {
              value: "5000000000"
            },
            {
              value: "5540000000"
            },
            {
              value: "6000000000"
            }
          ]

        },
        {
          renderAs: "spline",
          showValues: "1",
          data: [
            {
              value: "4230000000"
            },
            {
              value: "4580000000"
            },
            {
              value: "4750000000"
            },
            {
              value: "5000000000"
            },
            {
              value: "5540000000"
            },
            {
              value: "6000000000"
            }
          ]
        }
        ]
      }
    },
    demogrphyconfig: {

      type: "doughnut2d",
      width: "100%",
      height: "160",
      containerBackgroundOpacity: '0',
      dataFormat: "json",
      dataSource: {
        "chart": chartCosmatics.demographyChartCosmatics,
        "data": [{
          "label": "50-64 Years",
          "value": "15"
        }, {
          "label": "30-49 Years",
          "value": "44"
        },{
          "label": "18-29 Years",
          "value": "41"
        } ]
      }
    },
    subscriptionConfig: {

      type: "column2d",
      width: "100%",
      height: "204",
      containerBackgroundOpacity: '0',
      dataFormat: "json",
      dataSource: {
        chart: chartCosmatics.subscriptionChartCosmatics,
        data: [

          {
            label: "2013",
            value: "127"
          },
          {
            label: "2014",
            value: "138"
          },
          {
            label: "2015",
            value: "131"
          },
          {
            label: "2016",
            value: "134"
          },
          {
            label: "2017",
            value: "142"
          },
          {
            label: "2018",
            value: "150"
          }
        ]
      }
    },
    awardConfigs: {
      type: "overlappedColumn2d",
      width: "100%",
      height: "330",
      containerBackgroundOpacity: '0',
      dataFormat: "json",
      dataSource: {
        chart: chartCosmatics.awardChartCosmatics,
        categories: [{
          category: [{
            label: "2013"
          }, {
            label: "2014"
          }, {
            label: "2015"
          }, {
            label: "2016"
          }, {
            label: "2017"
          }, {
            label: "2018"
          }]
        }],
        dataset: [{
          seriesname: "Nominations",
          data: [{
            value: "34"
          }, {
            value: "39"
          }, {
            value: "37"
          }, {
            value: "40"
          }, {
            value: "46"
          }, {
            value: "29"
          }]
        }, {
          seriesname: "Wins",
          data: [{
            value: "7"
          }, {
            value: "4"
          }, {
            value: "14"
          }, {
            value: "6"
          }, {
            value: "10"
          }, {
            value: "6"
          }]
        }]
      }
    },

    subRegion: {
      type: "world",
      width: "100%",
      height: "430",
      containerBackgroundOpacity: '0',
      dataFormat: "json",
      dataSource: {
        "chart": chartCosmatics.subregionChartCosmatics,
        colorrange: {
          minvalue: "0",
          startlabel: "Low",
          endlabel: "High",
          code: "#4A4C4F",
          gradient: "1",
          alpha: 0,
          color: [{
            minvalue: "0",
            maxvalue: "1",
            code: "#DEDAF1",

          },
          {
            minvalue: "2",
            maxvalue: "5",
            code: "#BEB3E2",

          },
          {
            minvalue: "5",
            maxvalue: "10",
            code: "#ADA1DB",

          },
          {
            minvalue: "11",
            maxvalue: "20",
            code: "#786BC3",

          },
          {
            minvalue: "21",
            maxvalue: "150",
            code: "#524CB5",

          }
          ]
        },
        "data": [{
          "id": "NA",
          "value": "150"
        },
        {
          "id": "SA",
          "value": "0"
        },
        {
          "id": "AS",
          "value": "0"
        },
        {
          "id": "EU",
          "value": "0"
        },
        {
          "id": "AF",
          "value": "0"
        },
        {
          "id": "AU",
          "value": "0"
        }
        ]

      },

    },
    imdbRatingConfig: {
      type: "bar2d",
      width: "100%",
      height: "330",
      containerBackgroundOpacity: '0',
      dataFormat: "json",
      dataSource: {
        chart: chartCosmatics.imdbRatingChartCosmatics,
        data: [{
          label: "Action",
          value: "8.1"
        },
        {
          label: "Animation",
          value: "7.2"
        },
        {
          label: "Biography",
          value: "8.6"
        },
        {
          label: "Comedy",
          value: "8"
        },
        {
          label: "Documentary",
          value: "8.7"
        },
        {
          label: "Drama",
          value: "8"
        },
        {
          label: "Reality-TV",
          value: "8.2"
        },
        {
          label: "Thriller",
          value: "7.8"
        }
        ]
      }

    }

  }
}
