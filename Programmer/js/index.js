/* Use chartData to acquire data from nPoint.io */
var chartData = [];

var url = "https://api.npoint.io/a153214f09490664e8ad";

// Register the datalabels plugin to all charts
Chart.register(ChartDataLabels);

$.getJSON(url, function (data) {
    $.each(data, function (infoIndex, info) {
        chartData[infoIndex] = info["data"];
    })
    drawChart();
})

/* drawChart function (chart.js) */
function drawChart() {
    /* Age */
    function chart1() {

        var root = am5.Root.new("chart1");

        root.setThemes([
            am5themes_Animated.new(root)
        ]);
        var stastic = chartData[0];
        var chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: true,
            panY: true,
            wheelX: "panX",
            wheelY: "zoomX",
        }));
        var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        cursor.lineY.set("visible", false);
        var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });

        var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
            maxDeviation: 0.3,
            categoryField: "age",
            renderer: xRenderer,
            tooltip: am5.Tooltip.new(root, {})
        }));

        var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            maxDeviation: 0.3,
            renderer: am5xy.AxisRendererY.new(root, {})
        }));
        yAxis.set("numberFormat", "#'%");

        var series = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: "Series 1",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            sequencedInterpolation: true,
            categoryXField: "age",
            tooltip: am5.Tooltip.new(root, {
                labelText: "{valueY}"
            })
        }));

        series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5 });
        series.columns.template.adapters.add("fill", (fill, target) => {
            return chart.get("colors").getIndex(series.columns.indexOf(target)*2);
        });

        series.columns.template.adapters.add("stroke", (stroke, target) => {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
        });


        chart.data = stastic;
        xAxis.data.setAll(stastic);
        series.data.setAll(stastic);
        series.appear(1000);
        chart.appear(1000, 100);

    }
    chart1();

    /* Education */
    async function chart2() {
        var response = await fetch("https://api.npoint.io/73dd966725fa61643b4d");
        if (response.ok) {
            var root = am5.Root.new("chart2");


            root.setThemes([
                am5themes_Animated.new(root)
            ]);


            var stastic = await response.json();
            var chart = root.container.children.push(am5percent.PieChart.new(root, {
                layout: root.verticalLayout,
                innerRadius: am5.percent(50)
            }));

            var series = chart.series.push(am5percent.PieSeries.new(root, {
                valueField: "value",
                categoryField: "Education",
                alignLabels: false
            }));

            series.data.setAll(stastic);

            var legend = chart.children.push(am5.Legend.new(root, {
                centerX: am5.percent(50),
                x: am5.percent(50),
                marginTop: 15,
                marginBottom: 15,
            }));

            legend.data.setAll(series.dataItems);

            series.appear(1000, 100);

        }
    }
    chart2();

    /* Income */
    async function chart3() {
        var response = await fetch("https://api.npoint.io/728bd33204ed8c656415");
        if (response.ok) {

            var root = am5.Root.new("chart3");

            root.setThemes([
                am5themes_Animated.new(root)
            ]);
            var stastic = await response.json();
            var chart = root.container.children.push(am5xy.XYChart.new(root, {
                panX: true,
                panY: true,
                wheelX: "panX",
                wheelY: "zoomX",

            }));
            var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
            cursor.lineY.set("visible", false);
            var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
            xRenderer.labels.template.setAll({
                paddingRight: 5
            });

            var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
                maxDeviation: 0.3,
                categoryField: "income",
                renderer: xRenderer,

                tooltip: am5.Tooltip.new(root, {})
            }));

            var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
                maxDeviation: 0.3,
                renderer: am5xy.AxisRendererY.new(root, {})
            }));
            yAxis.set("numberFormat", "#'%");
            var series = chart.series.push(am5xy.ColumnSeries.new(root, {
                name: "Series 1",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "Preference",
                sequencedInterpolation: true,
                categoryXField: "income",
                tooltip: am5.Tooltip.new(root, {
                    labelText: "{valueY}"
                })
            }));

            series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5 });
            series.columns.template.adapters.add("fill", (fill, target) => {
                return chart.get("colors").getIndex(series.columns.indexOf(target)*2);
            });

            series.columns.template.adapters.add("stroke", (stroke, target) => {
                return chart.get("colors").getIndex(series.columns.indexOf(target));
            });


            chart.data = stastic;
            xAxis.data.setAll(stastic);
            series.data.setAll(stastic);
            series.appear(1000);
            chart.appear(1000, 100);

        }
    }
    chart3();

    /* Car */
    async function chart41() {
        var response = await fetch("https://api.npoint.io/f3f0e1ee77b1ebfddbfc");

        if (response.ok) {

            var root = am5.Root.new("chart41");
            var stastic = await response.json();

            root.setThemes([
                am5themes_Animated.new(root)
            ]);

            var chart = root.container.children.push(am5percent.PieChart.new(root, {
                layout: root.verticalLayout,
                innerRadius: am5.percent(50)
            }));

            var series = chart.series.push(am5percent.PieSeries.new(root, {
                valueField: "value",
                categoryField: "category",
                alignLabels: false
            }));

            series.labels.template.setAll({
                textType: "circular",
                centerX: 0,
                centerY: 0
            });

            series.data.setAll(stastic);

            var legend = chart.children.push(am5.Legend.new(root, {
                centerX: am5.percent(50),
                x: am5.percent(50),
                marginTop: 15,
                marginBottom: 15,
            }));

            legend.data.setAll(series.dataItems);
        }
    }
    chart41();

    /* House */
    async function chart42() {
        var response = await fetch("https://api.npoint.io/f08b79e170f97ad816d8");
        if (response.ok) {

            var root = am5.Root.new("chart42");
            var stastic = await response.json();

            root.setThemes([
                am5themes_Animated.new(root)
            ]);

            var chart = root.container.children.push(am5percent.PieChart.new(root, {
                layout: root.verticalLayout,
                innerRadius: am5.percent(50)
            }));

            var series = chart.series.push(am5percent.PieSeries.new(root, {
                valueField: "value",
                categoryField: "category",
                alignLabels: false
            }));

            series.labels.template.setAll({
                textType: "circular",
                centerX: 0,
                centerY: 0
            });

            series.data.setAll(stastic);

            var legend = chart.children.push(am5.Legend.new(root, {
                centerX: am5.percent(50),
                x: am5.percent(50),
                marginTop: 15,
                marginBottom: 15,
            }));

            legend.data.setAll(series.dataItems);


        }
    };
    chart42();

    /* Sex Ratio */
    async function chart5() {
        var response = await fetch(" https://api.npoint.io/0aaef0f1733b54718f97");
        if (response.ok) {
            am4core.useTheme(am4themes_animated);

           
            var chart = am4core.create("chart5", am4charts.PieChart3D);
            var stastic = await response.json();
           
            chart.innerRadius = am4core.percent(40);

           
            chart.data = stastic
    
            var pieSeries = chart.series.push(new am4charts.PieSeries3D());
            pieSeries.dataFields.value = "value";
            pieSeries.dataFields.category = "category";
            pieSeries.slices.template.stroke = am4core.color("#fff");
            pieSeries.slices.template.strokeWidth = 2;
            pieSeries.slices.template.strokeOpacity = 1;

            chart.legend = new am4charts.Legend();
 
            pieSeries.labels.template.disabled = true;
            pieSeries.ticks.template.disabled = true;

            pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
            pieSeries.slices.template.states.getKey("hover").properties.scale = 1.1;

        }
    }
    chart5();

    /* Stable */
    am5.ready(function () {
        var root = am5.Root.new("chart6");

        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        var chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: false,
            panY: false,
            wheelX: "none",
            wheelY: "none"
        }));

        var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        cursor.lineY.set("visible", false);

        var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });

        var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
            maxDeviation: 0,
            categoryField: "name",
            renderer: xRenderer,
            tooltip: am5.Tooltip.new(root, {})
        }));

        xRenderer.grid.template.set("visible", false);

        var yRenderer = am5xy.AxisRendererY.new(root, {});
        var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            maxDeviation: 0,
            min: 0,
            extraMax: 0.1,
            renderer: yRenderer
        }));
        yAxis.set("numberFormat", "#'%");
        yRenderer.grid.template.setAll({
            strokeDasharray: [2, 2]
        });

        var series = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: "Series 1",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            sequencedInterpolation: true,
            categoryXField: "name",
            tooltip: am5.Tooltip.new(root, { dy: -25, labelText: "{valueY}" })
        }));


        series.columns.template.setAll({
            cornerRadiusTL: 5,
            cornerRadiusTR: 5
        });

        series.columns.template.adapters.add("fill", (fill, target) => {
            return chart.get("colors").getIndex(series.columns.indexOf(target)*2);
        });

        series.columns.template.adapters.add("stroke", (stroke, target) => {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
        });

        var data = [
            {
                name: "Compressive \nAbility",
                value: 36.9,
                bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/A04.png" }
            },
            {
                name: "Independent \nThinking",
                value: 35.8,
                bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/C02.png" }
            },
            
            {
                name: "Team \nCooperation",
                value: 29.5,
                bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/E01.png" }
            }
        ];

        series.bullets.push(function () {
            return am5.Bullet.new(root, {
                locationY: 1,
                sprite: am5.Picture.new(root, {
                    templateField: "bulletSettings",
                    width: 50,
                    height: 50,
                    centerX: am5.p50,
                    centerY: am5.p50,
                    shadowColor: am5.color(0x000000),
                    shadowBlur: 4,
                    shadowOffsetX: 4,
                    shadowOffsetY: 4,
                    shadowOpacity: 0.6
                })
            });
        });

        xAxis.data.setAll(data);
        series.data.setAll(data);

        series.appear(1000);
        chart.appear(1000, 100);

    });

    /* Choose a Spouse */
    async function chart7() {
        var response = await fetch("https://api.npoint.io/9341c86e0bb62c1dfdf9");
        if (response.ok) {

            var root = am5.Root.new("chart7");
            var stastic = await response.json();


            root.setThemes([
                am5themes_Animated.new(root)
            ]);

            var chart = root.container.children.push(am5xy.XYChart.new(root, {
                panX: false,
                panY: false,
                wheelX: "panX",
                wheelY: "zoomX",
                layout: root.verticalLayout
            }));

            var legend = chart.children.push(am5.Legend.new(root, {
                centerX: am5.p50,
                x: am5.p50
            }))

            var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
                categoryField: "standard",
                renderer: am5xy.AxisRendererY.new(root, {
                    inversed: true,
                    cellStartLocation: 0.1,
                    cellEndLocation: 0.9
                })
            }));

            yAxis.data.setAll(stastic);

            var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
                renderer: am5xy.AxisRendererX.new(root, {}),
                min: 0
            }));
            xAxis.set("numberFormat", "#'%");

            function createSeries(field, name) {
                var series = chart.series.push(am5xy.ColumnSeries.new(root, {
                    name: name,
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueXField: field,
                    categoryYField: "standard",
                    sequencedInterpolation: true,
                    tooltip: am5.Tooltip.new(root, {
                        pointerOrientation: "horizontal",
                        labelText: "[bold]{name}[/]\n{categoryY}: {valueX}"
                    })
                }));

                series.columns.template.setAll({
                    height: am5.p100
                });


                series.bullets.push(function () {
                    return am5.Bullet.new(root, {
                        locationX: 1,
                        sprite: am5.Label.new(root, {
                            centerY: am5.p50,
                            text: "{valueX}",
                            populateText: true
                        })
                    });
                });

                series.data.setAll(stastic);
                series.appear();

                series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5 });
                series.columns.template.adapters.add("fill", (fill, target) => {
                    return chart.get("colors").getIndex(series.columns.indexOf(target)*2);
                });

                series.columns.template.adapters.add("stroke", (stroke, target) => {
                    return chart.get("colors").getIndex(series.columns.indexOf(target));
                });

                return series;
            }

            createSeries("Proportion", "Proportion");

            var legend = chart.children.push(am5.Legend.new(root, {
                centerX: am5.p50,
                x: am5.p50
            }));

            legend.data.setAll(chart.series.values);

            var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
                behavior: "zoomY"
            }));
            cursor.lineY.set("forceHidden", true);
            cursor.lineX.set("forceHidden", true);

            chart.appear(1000, 100);
        }
    }
    chart7();

    /* Relationship View */
    async function chart8() {

        var response = await fetch("https://api.npoint.io/e4333289605aba8f0cb5");

        if (response.ok) {
            
            var stastic = await response.json();
            // ---------------------------表数据分界线----------------------------------------------------------------------------------
            var chart = am4core.create("chart8", am4charts.PieChart);

            chart.data = stastic;
            
            var pieSeries = chart.series.push(new am4charts.PieSeries());
            pieSeries.dataFields.value = "value";
            pieSeries.dataFields.category = "category";
            
            chart.innerRadius = am4core.percent(40);
            
            
            pieSeries.slices.template.stroke = am4core.color("#4a2abb");
            pieSeries.slices.template.strokeWidth = 2;
            pieSeries.slices.template.strokeOpacity = 1;
            pieSeries.labels.template.disabled = true;
            
      
            chart.legend = new am4charts.Legend();

            // ---------------------------表数据分界线----------------------------------------------------------------------------------
        }
    }
    chart8();

    /* Consumption Channels */
    // async function chart9() {
    //     var response = await fetch("https://api.npoint.io/83c1be5c8a4d63c3f2ad");
    //     if (response.ok) {

    //         var root = am5.Root.new("chart9");

    //         root.setThemes([
    //             am5themes_Animated.new(root)
    //         ]);
    //         var stastic = await response.json();
    //         var chart = root.container.children.push(am5xy.XYChart.new(root, {
    //             panX: true,
    //             panY: true,
    //             wheelX: "panX",
    //             wheelY: "zoomX",

    //         }));
    //         var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    //         cursor.lineY.set("visible", false);
    //         var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
    //         xRenderer.labels.template.setAll({
    //             rotation: -90,
    //             centerY: am5.p50,
    //             centerX: am5.p100,
    //             paddingRight: 15
    //         });

    //         var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
    //             maxDeviation: 0.3,
    //             categoryField: "company",
    //             renderer: xRenderer,

    //             tooltip: am5.Tooltip.new(root, {})
    //         }));

    //         var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    //             maxDeviation: 0.3,
    //             renderer: am5xy.AxisRendererY.new(root, {})
    //         }));
    //         var series = chart.series.push(am5xy.ColumnSeries.new(root, {
    //             name: "Series 1",
    //             xAxis: xAxis,
    //             yAxis: yAxis,
    //             valueYField: "value",
    //             sequencedInterpolation: true,
    //             categoryXField: "company",
    //             tooltip: am5.Tooltip.new(root, {
    //                 labelText: "{valueY}"
    //             })
    //         }));

    //         series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5 });
    //         series.columns.template.adapters.add("fill", (fill, target) => {
    //             return chart.get("colors").getIndex(series.columns.indexOf(target));
    //         });

    //         series.columns.template.adapters.add("stroke", (stroke, target) => {
    //             return chart.get("colors").getIndex(series.columns.indexOf(target));
    //         });


    //         chart.data = stastic;
    //         xAxis.data.setAll(stastic);
    //         series.data.setAll(stastic);
    //         series.appear(1000);
    //         chart.appear(1000, 100);

    //     }
    // }
    // chart9();

    /* Consumption Type */
    async function chart10() {
        var response = await fetch("https://api.npoint.io/a646dc9e739ad8483aed");
        if (response.ok) {
            var root = am5.Root.new("chart10");

            var stastic = await response.json();
            root.setThemes([
                am5themes_Animated.new(root)
            ]);
            var chart = root.container.children.push(am5xy.XYChart.new(root, {
                panX: false,
                panY: false,
                wheelX: "panX",
                wheelY: "zoomX",
                layout: root.verticalLayout
            }));
            var legend = chart.children.push(am5.Legend.new(root, {
                centerX: am5.p50,
                x: am5.p50
            }))
            var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
                categoryField: "Consumption",
                renderer: am5xy.AxisRendererY.new(root, {
                    inversed: true,
                    cellStartLocation: 0.1,
                    cellEndLocation: 0.9
                })
            }));

            yAxis.data.setAll(stastic);

            var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
                renderer: am5xy.AxisRendererX.new(root, {}),
                min: 0
            }));
            xAxis.set("numberFormat", "#'%");

            function createSeries(field, name) {
                var series = chart.series.push(am5xy.ColumnSeries.new(root, {
                    name: name,
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueXField: field,
                    categoryYField: "Consumption",
                    sequencedInterpolation: true,
                    tooltip: am5.Tooltip.new(root, {
                        pointerOrientation: "horizontal",
                        labelText: "[bold]{name}[/]\n{categoryY}: {valueX}"
                    })
                }));

                series.columns.template.setAll({
                    height: am5.p100
                });
                series.columns.template.adapters.add("fill", (fill, target) => {
                    return chart.get("colors").getIndex(series.columns.indexOf(target));
                });

                series.columns.template.adapters.add("stroke", (stroke, target) => {
                    return chart.get("colors").getIndex(series.columns.indexOf(target));
                });

                series.bullets.push(function () {
                    return am5.Bullet.new(root, {
                        locationX: 1,
                        sprite: am5.Label.new(root, {
                            centerY: am5.p50,
                            text: "{valueX}",
                            populateText: true
                        })
                    });
                });

                series.data.setAll(stastic);
                series.appear();

                return series;
            }

                createSeries("Proportion", "Proportion");

                var legend = chart.children.push(am5.Legend.new(root, {
                    centerX: am5.p50,
                    x: am5.p50
                }));

            legend.data.setAll(chart.series.values);

            var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
                behavior: "zoomY"
            }));
            cursor.lineY.set("forceHidden", true);
            cursor.lineX.set("forceHidden", true);

            chart.appear(1000, 100);
        }
    }
    chart10();

    // /* Entertainment Preferences */
    // async function chart11() {
    //     var response = await fetch("https://api.npoint.io/0d93b796a581f8b97274");
    //     if (response.ok) {
    //         var root = am5.Root.new("chart11");

    //         root.setThemes([am5themes_Animated.new(root)]);
    //         var stastic = await response.json();
    //         var chart = root.container.children.push(
    //             am5xy.XYChart.new(root, {
    //                 panX: false,
    //                 panY: false,
    //                 wheelX: "panX",
    //                 wheelY: "zoomX",
    //                 layout: root.verticalLayout
    //             })
    //         );

    //         var xAxis = chart.xAxes.push(
    //             am5xy.CategoryAxis.new(root, {
    //                 categoryField: "entertainment",
    //                 renderer: am5xy.AxisRendererX.new(root, {}),
    //                 tooltip: am5.Tooltip.new(root, {})
    //             })
    //         );

    //         xAxis.data.setAll(stastic);

    //         var valueAxis = chart.yAxes.push(
    //             am5xy.ValueAxis.new(root, {
    //                 min: 0,
    //                 Max: 100,

    //                 renderer: am5xy.AxisRendererY.new(root, {})

    //             })

    //         );
    //         valueAxis.set("numberFormat", "#'%");
    //         var paretoAxisRenderer = am5xy.AxisRendererY.new(root, { opposite: true });
    //         var paretoAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    //             renderer: paretoAxisRenderer,
    //             min: 0,
    //             max: 500,
    //             strictMinMax: true
    //         }));

    //         var series1 = chart.series.push(
    //             am5xy.ColumnSeries.new(root, {
    //                 name: "rate",
    //                 xAxis: xAxis,
    //                 yAxis: valueAxis,
    //                 valueYField: "rate",
    //                 categoryXField: "entertainment",
    //                 tooltip: am5.Tooltip.new(root, {
    //                     pointerOrientation: "horizontal",
    //                     labelText: "{name} in {categoryX}: {valueY} {info}"
    //                 })
    //             })
    //         );

    //         series1.columns.template.setAll({
    //             tooltipY: am5.percent(10),
    //             templateField: "columnSettings"
    //         });

    //         series1.data.setAll(stastic);

    //         chart.set("cursor", am5xy.XYCursor.new(root, {}));
    //         var legend = chart.children.push(
    //             am5.Legend.new(root, {
    //                 centerX: am5.p50,
    //                 x: am5.p50
    //             })
    //         );
    //         legend.data.setAll(chart.series.values);
    //         chart.appear(1000, 100);
    //         series1.appear();
    //     }
    // }
    // chart11();

    // /* Video App Preferences */
    // async function chart12() {
    //     var response = await fetch("https://api.npoint.io/fea3a1a0c60dca5f497c");
    //     if (response.ok) {

    //         var root = am5.Root.new("chart12");
    //         var stastic = await response.json();


    //         root.setThemes([
    //             am5themes_Animated.new(root)
    //         ]);

    //         var chart = root.container.children.push(am5xy.XYChart.new(root, {
    //             panX: false,
    //             panY: false,
    //             wheelX: "panX",
    //             wheelY: "zoomX",
    //             layout: root.verticalLayout
    //         }));

    //         var legend = chart.children.push(am5.Legend.new(root, {
    //             centerX: am5.p50,
    //             x: am5.p50
    //         }))

    //         var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
    //             categoryField: "app",
    //             renderer: am5xy.AxisRendererY.new(root, {
    //                 inversed: true,
    //                 cellStartLocation: 0.1,
    //                 cellEndLocation: 0.9
    //             })
    //         }));

    //         yAxis.data.setAll(stastic);

    //         var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
    //             renderer: am5xy.AxisRendererX.new(root, {}),
    //             min: 0
    //         }));
    //         xAxis.set("numberFormat", "#'%");

    //         function createSeries(field, name) {
    //             var series = chart.series.push(am5xy.ColumnSeries.new(root, {
    //                 name: name,
    //                 xAxis: xAxis,
    //                 yAxis: yAxis,
    //                 valueXField: field,
    //                 categoryYField: "app",
    //                 sequencedInterpolation: true,
    //                 tooltip: am5.Tooltip.new(root, {
    //                     pointerOrientation: "horizontal",
    //                     labelText: "[bold]{name}[/]\n{categoryY}: {valueX}"
    //                 })
    //             }));

    //             series.columns.template.setAll({
    //                 height: am5.p100
    //             });


    //             series.bullets.push(function () {
    //                 return am5.Bullet.new(root, {
    //                     locationX: 1,
    //                     sprite: am5.Label.new(root, {
    //                         centerY: am5.p50,
    //                         text: "{valueX}",
    //                         populateText: true
    //                     })
    //                 });
    //             });

    //             series.data.setAll(stastic);
    //             series.appear();

    //             series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5 });
    //             series.columns.template.adapters.add("fill", (fill, target) => {
    //                 return chart.get("colors").getIndex(series.columns.indexOf(target));
    //             });

    //             series.columns.template.adapters.add("stroke", (stroke, target) => {
    //                 return chart.get("colors").getIndex(series.columns.indexOf(target));
    //             });

    //             return series;
    //         }

    //         createSeries("Preference", "Preference");

    //         var legend = chart.children.push(am5.Legend.new(root, {
    //             centerX: am5.p50,
    //             x: am5.p50
    //         }));

    //         legend.data.setAll(chart.series.values);

    //         var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
    //             behavior: "zoomY"
    //         }));
    //         cursor.lineY.set("forceHidden", true);
    //         cursor.lineX.set("forceHidden", true);

    //         chart.appear(1000, 100);
    //     }
    // }
    // chart12();

    /* Quantity */
    function chart13() {

        var root = am5.Root.new("chart13");

        root.setThemes([
            am5themes_Animated.new(root)
        ]);
        var stastic = chartData[6];
        var chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: true,
            panY: true,
            wheelX: "panX",
            wheelY: "zoomX",

        }));
        var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        cursor.lineY.set("visible", false);
        var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });

        var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
            maxDeviation: 1.0,
            categoryField: "Year",
            renderer: xRenderer,

            tooltip: am5.Tooltip.new(root, {})
        }));

        var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            maxDeviation: 0.3,
            renderer: am5xy.AxisRendererY.new(root, {})
        }));
        var series = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: "Series 1",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "Number",
            sequencedInterpolation: true,
            categoryXField: "Year",
            tooltip: am5.Tooltip.new(root, {
                labelText: "{valueY}"
            })
        }));

        chart.data = stastic;
        xAxis.data.setAll(stastic);
        series.data.setAll(stastic);
        series.appear(1000);
        chart.appear(1000, 100);

    }
    chart13();

    /* City Grade Distribution */
    function chart14() {

        var root = am5.Root.new("chart14");

        root.setThemes([
            am5themes_Animated.new(root)
        ]);
        var stastic = chartData[7];
        var chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: true,
            panY: true,
            wheelX: "panX",
            wheelY: "zoomX",

        }));
        var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        cursor.lineY.set("visible", false);
        var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });

        var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
            maxDeviation: 0.3,
            categoryField: "Rank",
            renderer: xRenderer,

            tooltip: am5.Tooltip.new(root, {})
        }));

        var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            maxDeviation: 0.3,
            renderer: am5xy.AxisRendererY.new(root, {})
        }));
        yAxis.set("numberFormat", "#'%");

        var series = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: "Series 1",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "Rate",
            sequencedInterpolation: true,
            categoryXField: "Rank",
            tooltip: am5.Tooltip.new(root, {
                labelText: "{valueY}"
            })
        }));

        series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5 });
        series.columns.template.adapters.add("fill", (fill, target) => {
            return chart.get("colors").getIndex(series.columns.indexOf(target)*2);
        });

        series.columns.template.adapters.add("stroke", (stroke, target) => {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
        });


        chart.data = stastic;
        xAxis.data.setAll(stastic);
        series.data.setAll(stastic);
        series.appear(1000);
        chart.appear(1000, 100);

    }
    chart14();

    // /* City Distribution */
    // function chart15() {
    //     var root = am5.Root.new("chart15");

    //     var stastic = chartData[8];
    //     root.setThemes([
    //         am5themes_Animated.new(root)
    //     ]);
    //     var chart = root.container.children.push(am5xy.XYChart.new(root, {
    //         panX: false,
    //         panY: false,
    //         wheelX: "panX",
    //         wheelY: "zoomX",
    //         layout: root.verticalLayout
    //     }));
    //     var legend = chart.children.push(am5.Legend.new(root, {
    //         centerX: am5.p50,
    //         x: am5.p50
    //     }))
    //     var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
    //         categoryField: "City",
    //         renderer: am5xy.AxisRendererY.new(root, {
    //             inversed: true,
    //             cellStartLocation: 0.1,
    //             cellEndLocation: 0.9
    //         })
    //     }));

    //     yAxis.data.setAll(stastic);

    //     var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
    //         renderer: am5xy.AxisRendererX.new(root, {}),
    //         min: 0
    //     }));
    //     xAxis.set("numberFormat", "#'%");

    //     function createSeries(field, name) {
    //         var series = chart.series.push(am5xy.ColumnSeries.new(root, {
    //             name: name,
    //             xAxis: xAxis,
    //             yAxis: yAxis,
    //             valueXField: field,
    //             categoryYField: "City",
    //             sequencedInterpolation: true,
    //             tooltip: am5.Tooltip.new(root, {
    //                 pointerOrientation: "horizontal",
    //                 labelText: "[bold]{name}[/]\n{categoryY}: {valueX}"
    //             })
    //         }));

    //         series.columns.template.setAll({
    //             height: am5.p100
    //         });
    //         series.columns.template.adapters.add("fill", (fill, target) => {
    //             return chart.get("colors").getIndex(series.columns.indexOf(target));
    //         });

    //         series.columns.template.adapters.add("stroke", (stroke, target) => {
    //             return chart.get("colors").getIndex(series.columns.indexOf(target));
    //         });

    //         series.bullets.push(function () {
    //             return am5.Bullet.new(root, {
    //                 locationX: 1,
    //                 sprite: am5.Label.new(root, {
    //                     centerY: am5.p50,
    //                     text: "{valueX}",
    //                     populateText: true
    //                 })
    //             });
    //         });

    //         series.data.setAll(stastic);
    //         series.appear();

    //         return series;
    //     }

    //     createSeries("Proportion", "Proportion");

    //     var legend = chart.children.push(am5.Legend.new(root, {
    //         centerX: am5.p50,
    //         x: am5.p50
    //     }));

    //     legend.data.setAll(chart.series.values);

    //     var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
    //         behavior: "zoomY"
    //     }));
    //     cursor.lineY.set("forceHidden", true);
    //     cursor.lineX.set("forceHidden", true);

    //     chart.appear(1000, 100);
    // }
    // chart15();

    /* Unmarried Rate */
    async function chart16() {

        var response = await fetch("https://api.npoint.io/f3642d832fc9ea46533d");

        if (response.ok) {
            var dataChart = await response.json();

            // ---------------------------表数据分界线----------------------------------------------------------------------------------
            am5.ready(function () {

               
                var root = am5.Root.new("chart16");


                root.setThemes([
                    am5themes_Animated.new(root)
                ]);


                var chart = root.container.children.push(am5percent.PieChart.new(root, {
                    layout: root.verticalLayout,
                    innerRadius: am5.percent(50)
                }));

                var series = chart.series.push(am5percent.PieSeries.new(root, {
                    valueField: "value",
                    categoryField: "category",
                    alignLabels: false
                }));

                series.labels.template.setAll({
                    textType: "circular",
                    centerX: 0,
                    centerY: 0
                });

                series.data.setAll(dataChart);

                var label = chart.seriesContainer.children.push(
                    am5.Label.new(root, {
                        textAlign: "center",
                        centerY: am5.p50,
                        centerX: am5.p50,
                        text: "[fontSize:18px]Unmarried:[/]\n[bold fontSize:30px]61.9%[/]"
                    })
                );

                var legend = chart.children.push(am5.Legend.new(root, {
                    centerX: am5.percent(50),
                    x: am5.percent(50),
                    marginTop: 15,
                    marginBottom: 15,
                }));

                legend.data.setAll(series.dataItems);

                series.appear(1000, 100);

            }); 

            // ---------------------------表数据分界线----------------------------------------------------------------------------------
        }
    }
    chart16();

    /* Matchmaking App Users */
    async function chart17() {

        var response = await fetch("https://api.npoint.io/ab4237a3da91071b22f3");

        if (response.ok) {
           

            var stastic = await response.json();
            // ---------------------------表数据分界线----------------------------------------------------------------------------------
            var chart = am4core.create("chart17", am4charts.PieChart);

            chart.data = stastic;
            
            var pieSeries = chart.series.push(new am4charts.PieSeries());
            pieSeries.dataFields.value = "value";
            pieSeries.dataFields.category = "category";
            
            chart.innerRadius = am4core.percent(40);
            
            
            pieSeries.slices.template.stroke = am4core.color("#4a2abb");
            pieSeries.slices.template.strokeWidth = 2;
            pieSeries.slices.template.strokeOpacity = 1;
            pieSeries.labels.template.disabled = true;
            
      
            chart.legend = new am4charts.Legend();


            // ---------------------------表数据分界线----------------------------------------------------------------------------------
        }
    }
    chart17();

    /* Overtime */
    async function chart18() {

        var response = await fetch("https://api.npoint.io/19bdcd7bb304e05c6278");

        if (response.ok) {

            var root = am5.Root.new("chart18");

            root.setThemes([
                am5themes_Animated.new(root)
            ]);
            var stastic = await response.json();
            var chart = root.container.children.push(am5xy.XYChart.new(root, {
                panX: true,
                panY: true,
                wheelX: "panX",
                wheelY: "zoomX",

            }));
            var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
            cursor.lineY.set("visible", false);
            var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
            xRenderer.labels.template.setAll({
                rotation: -90,
                centerY: am5.p50,
                centerX: am5.p100,
                paddingRight: 15
            });

            var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
                maxDeviation: 0.3,
                categoryField: "country",
                renderer: xRenderer,

                tooltip: am5.Tooltip.new(root, {})
            }));

            var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
                maxDeviation: 0.3,
                renderer: am5xy.AxisRendererY.new(root, {})
            }));
            yAxis.set("numberFormat", "#'%");
            var series = chart.series.push(am5xy.ColumnSeries.new(root, {
                name: "proportion",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value",
                sequencedInterpolation: true,
                categoryXField: "country",
                tooltip: am5.Tooltip.new(root, {
                    labelText: "{valueY}"
                })
            }));


            var legend = chart.children.push(am5.Legend.new(root, {
                centerX: am5.p50,
                x: am5.p50
            }));

            legend.data.setAll(chart.series.values);
          
            series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5 });
            series.columns.template.adapters.add("fill", (fill, target) => {
                return chart.get("colors").getIndex(series.columns.indexOf(target)*2);
            });

            series.columns.template.adapters.add("stroke", (stroke, target) => {
                return chart.get("colors").getIndex(series.columns.indexOf(target));
            });


            chart.data = stastic;
            xAxis.data.setAll(stastic);
            series.data.setAll(stastic);
            series.appear(1000);
            chart.appear(1000, 100);


        }
    }
    chart18();

    /* Worktime */
    async function chart19() {

        var response = await fetch("https://api.npoint.io/0364e49df752eb69be4f");

        if (response.ok) {
            var dataChart = await response.json();

            am5.ready(function () {

                // Create root element
                // https://www.amcharts.com/docs/v5/getting-started/#Root_element
                var root = am5.Root.new("chart19");

                // Set themes
                // https://www.amcharts.com/docs/v5/concepts/themes/
                root.setThemes([
                    am5themes_Animated.new(root)
                ]);

                // Create chart
                // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
                var chart = root.container.children.push(
                    am5percent.PieChart.new(root, {
                        startAngle: 160, endAngle: 380
                    })
                );

                // Create series
                // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series

                var series0 = chart.series.push(
                    am5percent.PieSeries.new(root, {
                        valueField: "litres",
                        categoryField: "country",
                        startAngle: 160,
                        endAngle: 380,
                        radius: am5.percent(70),
                        innerRadius: am5.percent(65)
                    })
                );

                var colorSet = am5.ColorSet.new(root, {
                    colors: [series0.get("colors").getIndex(0)],
                    passOptions: {
                        lightness: -0.05,
                        hue: 0
                    }
                });

                series0.set("colors", colorSet);

                series0.ticks.template.set("forceHidden", true);
                series0.labels.template.set("forceHidden", true);

                var series1 = chart.series.push(
                    am5percent.PieSeries.new(root, {
                        startAngle: 160,
                        endAngle: 380,
                        valueField: "bottles",
                        innerRadius: am5.percent(80),
                        categoryField: "country"
                    })
                );

                series1.ticks.template.set("forceHidden", true);
                series1.labels.template.set("forceHidden", true);

                var label = chart.seriesContainer.children.push(
                    am5.Label.new(root, {
                        textAlign: "center",
                        centerY: am5.p100,
                        centerX: am5.p50,
                        text: "[fontSize:18px]one week[/]:\n[bold fontSize:30px]Work Time[/]"
                    })
                );

                var data = dataChart;

                // Set data
                // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
                series0.data.setAll(data);
                series1.data.setAll(data);

            }); // end am5.ready()

        }
    }
    chart19();
}