var ec_right1 = echarts.init(document.getElementById('r1'),"dark");


        var ec_right1_option = {
    "baseOption": {
        "series": [
            {
                "type": "radar",
                "name": "\u767d\u5929\u603b\u4eba\u6d41\u91cf\u6307\u6570(8:00-20:00)",
                "data": [
                    [
                        95.44,
                        28.51,
                        91.97,
                        67.92,
                        73.24,
                        8.39
                    ]
                ],
                "label": {
                    "show": false,
                    "position": "top",
                    "margin": 8
                },
                "itemStyle": {
                    "normal": {
                        "color": "#f38181"
                    }
                },
                "lineStyle": {
                    "show": true,
                    "width": 6,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                },
                "areaStyle": {
                    "opacity": 0
                },
                "rippleEffect": {
                    "show": true,
                    "brushType": "stroke",
                    "scale": 2.5,
                    "period": 4
                }
            },
            {
                "type": "radar",
                "name": "\u591c\u95f4\u603b\u4eba\u6d41\u91cf\u6307\u6570(20:00-23:00,0:00-8:00)",
                "data": [
                    [
                        18.69,
                        10.85,
                        39.51,
                        22.65,
                        25.37,
                        3.06
                    ]
                ],
                "label": {
                    "show": false,
                    "position": "top",
                    "margin": 8
                },
                "itemStyle": {
                    "normal": {
                        "color": "#95e1d3"
                    }
                },
                "lineStyle": {
                    "show": true,
                    "width": 6,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                },
                "areaStyle": {
                    "opacity": 0
                },
                "rippleEffect": {
                    "show": true,
                    "brushType": "stroke",
                    "scale": 2.5,
                    "period": 4
                }
            }
        ],
        "timeline": {
            "axisType": "category",
            "orient": "vertical",
            "autoPlay": true,
            "controlPosition": "left",
            "loop": true,
            "rewind": false,
            "show": true,
            "inverse": true,
            "playInterval": 5000,
            "left": "null",
            "right": "5",
            "top": "20",
            "bottom": "20",
            "width": "60",
            "data": [
                "0216",
                "0217",
                "0218",
                "0219",
                "0220",
                "0221",
                "0222",
                "0223",
                "0224"
            ]
        },
        "radar": {
            "indicator": [
                {
                    "name": "\u4ea4\u901a",
                    "max": 100
                },
                {
                    "name": "\u533b\u7597",
                    "max": 100
                },
                {
                    "name": "\u8fd0\u52a8\u5065\u8eab",
                    "max": 100
                },
                {
                    "name": "\u65c5\u6e38\u666f\u70b9",
                    "max": 100
                },
                {
                    "name": "\u8d2d\u7269",
                    "max": 100
                },
                {
                    "name": "\u6559\u80b2\u57f9\u8bad",
                    "max": 100
                }
            ],
            "name": {
                "textStyle": {
                    "color": "#fff"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "splitArea": {
                "show": true,
                "areaStyle": {
                    "opacity": 1
                }
            },
            "axisLine": {
                "show": true,
                "onZero": true,
                "onZeroAxisIndex": 0
            }
        }
    },
    "options": [
        {
            "legend": [
                {
                    "data": [
                        "\u767d\u5929\u603b\u4eba\u6d41\u91cf\u6307\u6570(8:00-20:00)",
                        "\u591c\u95f4\u603b\u4eba\u6d41\u91cf\u6307\u6570(20:00-23:00,0:00-8:00)"
                    ],
                    "selected": {
                        "\u767d\u5929\u603b\u4eba\u6d41\u91cf\u6307\u6570(8:00-20:00)": true,
                        "\u591c\u95f4\u603b\u4eba\u6d41\u91cf\u6307\u6570(20:00-23:00,0:00-8:00)": true
                    },
                    "show": true,
                    "left": 10,
                    "top": 30,
                    "orient": "vertical",
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "radar",
                    "name": "\u767d\u5929\u603b\u4eba\u6d41\u91cf\u6307\u6570(8:00-20:00)",
                    "data": [
                        [
                            95.28,
                            28.31,
                            92.17,
                            68.24,
                            69.95,
                            8.45
                        ]
                    ],
                    "label": {
                        "show": false,
                        "position": "top",
                        "margin": 8
                    },
                    "itemStyle": {
                        "normal": {
                            "color": "#f38181"
                        }
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 6,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    },
                    "areaStyle": {
                        "opacity": 0
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                },
                {
                    "type": "radar",
                    "name": "\u591c\u95f4\u603b\u4eba\u6d41\u91cf\u6307\u6570(20:00-23:00,0:00-8:00)",
                    "data": [
                        [
                            18.98,
                            10.97,
                            39.51,
                            22.69,
                            25.03,
                            3.08
                        ]
                    ],
                    "label": {
                        "show": false,
                        "position": "top",
                        "margin": 8
                    },
                    "itemStyle": {
                        "normal": {
                            "color": "#95e1d3"
                        }
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 6,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    },
                    "areaStyle": {
                        "opacity": 0
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5355\u65e5\u603b\u4eba\u6d41\u91cf\u96f7\u8fbe\u56fe",
                    "padding": 5,
                    "itemGap": 10
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5
            }
        },
        {
            "legend": [
                {
                    "data": [
                        "\u767d\u5929\u603b\u4eba\u6d41\u91cf\u6307\u6570(8:00-20:00)",
                        "\u591c\u95f4\u603b\u4eba\u6d41\u91cf\u6307\u6570(20:00-23:00,0:00-8:00)"
                    ],
                    "selected": {
                        "\u767d\u5929\u603b\u4eba\u6d41\u91cf\u6307\u6570(8:00-20:00)": true,
                        "\u591c\u95f4\u603b\u4eba\u6d41\u91cf\u6307\u6570(20:00-23:00,0:00-8:00)": true
                    },
                    "show": true,
                    "left": 10,
                    "top": 30,
                    "orient": "vertical",
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "radar",
                    "name": "\u767d\u5929\u603b\u4eba\u6d41\u91cf\u6307\u6570(8:00-20:00)",
                    "data": [
                        [
                            91.28,
                            28.25,
                            90.31,
                            65.12,
                            70.5,
                            8.04
                        ]
                    ],
                    "label": {
                        "show": false,
                        "position": "top",
                        "margin": 8
                    },
                    "itemStyle": {
                        "normal": {
                            "color": "#f38181"
                        }
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 6,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    },
                    "areaStyle": {
                        "opacity": 0
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                },
                {
                    "type": "radar",
                    "name": "\u591c\u95f4\u603b\u4eba\u6d41\u91cf\u6307\u6570(20:00-23:00,0:00-8:00)",
                    "data": [
                        [
                            18.21,
                            10.98,
                            39.31,
                            22.42,
                            25.14,
                            3.04
                        ]
                    ],
                    "label": {
                        "show": false,
                        "position": "top",
                        "margin": 8
                    },
                    "itemStyle": {
                        "normal": {
                            "color": "#95e1d3"
                        }
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 6,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    },
                    "areaStyle": {
                        "opacity": 0
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5355\u65e5\u603b\u4eba\u6d41\u91cf\u96f7\u8fbe\u56fe",
                    "padding": 5,
                    "itemGap": 10
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5
            }
        },
        {
            "legend": [
                {
                    "data": [
                        "\u767d\u5929\u603b\u4eba\u6d41\u91cf\u6307\u6570(8:00-20:00)",
                        "\u591c\u95f4\u603b\u4eba\u6d41\u91cf\u6307\u6570(20:00-23:00,0:00-8:00)"
                    ],
                    "selected": {
                        "\u767d\u5929\u603b\u4eba\u6d41\u91cf\u6307\u6570(8:00-20:00)": true,
                        "\u591c\u95f4\u603b\u4eba\u6d41\u91cf\u6307\u6570(20:00-23:00,0:00-8:00)": true
                    },
                    "show": true,
                    "left": 10,
                    "top": 30,
                    "orient": "vertical",
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "radar",
                    "name": "\u767d\u5929\u603b\u4eba\u6d41\u91cf\u6307\u6570(8:00-20:00)",
                    "data": [
                        [
                            94.57,
                            27.76,
                            92.02,
                            68.04,
                            70.45,
                            8.44
                        ]
                    ],
                    "label": {
                        "show": false,
                        "position": "top",
                        "margin": 8
                    },
                    "itemStyle": {
                        "normal": {
                            "color": "#f38181"
                        }
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 6,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    },
                    "areaStyle": {
                        "opacity": 0
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                },
                {
                    "type": "radar",
                    "name": "\u591c\u95f4\u603b\u4eba\u6d41\u91cf\u6307\u6570(20:00-23:00,0:00-8:00)",
                    "data": [
                        [
                            18.86,
                            10.87,
                            39.5,
                            22.72,
                            25.3,
                            3.08
                        ]
                    ],
                    "label": {
                        "show": false,
                        "position": "top",
                        "margin": 8
                    },
                    "itemStyle": {
                        "normal": {
                            "color": "#95e1d3"
                        }
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 6,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    },
                    "areaStyle": {
                        "opacity": 0
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5355\u65e5\u603b\u4eba\u6d41\u91cf\u96f7\u8fbe\u56fe",
                    "padding": 5,
                    "itemGap": 10
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5
            }
        },
        {
            "legend": [
                {
                    "data": [
                        "\u767d\u5929\u603b\u4eba\u6d41\u91cf\u6307\u6570(8:00-20:00)",
                        "\u591c\u95f4\u603b\u4eba\u6d41\u91cf\u6307\u6570(20:00-23:00,0:00-8:00)"
                    ],
                    "selected": {
                        "\u767d\u5929\u603b\u4eba\u6d41\u91cf\u6307\u6570(8:00-20:00)": true,
                        "\u591c\u95f4\u603b\u4eba\u6d41\u91cf\u6307\u6570(20:00-23:00,0:00-8:00)": true
                    },
                    "show": true,
                    "left": 10,
                    "top": 30,
                    "orient": "vertical",
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "radar",
                    "name": "\u767d\u5929\u603b\u4eba\u6d41\u91cf\u6307\u6570(8:00-20:00)",
                    "data": [
                        [
                            93.81,
                            27.97,
                            91.87,
                            66.68,
                            71.32,
                            8.35
                        ]
                    ],
                    "label": {
                        "show": false,
                        "position": "top",
                        "margin": 8
                    },
                    "itemStyle": {
                        "normal": {
                            "color": "#f38181"
                        }
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 6,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    },
                    "areaStyle": {
                        "opacity": 0
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                },
                {
                    "type": "radar",
                    "name": "\u591c\u95f4\u603b\u4eba\u6d41\u91cf\u6307\u6570(20:00-23:00,0:00-8:00)",
                    "data": [
                        [
                            18.88,
                            10.92,
                            39.71,
                            22.94,
                            25.56,
                            3.14
                        ]
                    ],
                    "label": {
                        "show": false,
                        "position": "top",
                        "margin": 8
                    },
                    "itemStyle": {
                        "normal": {
                            "color": "#95e1d3"
                        }
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 6,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    },
                    "areaStyle": {
                        "opacity": 0
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5355\u65e5\u603b\u4eba\u6d41\u91cf\u96f7\u8fbe\u56fe",
                    "padding": 5,
                    "itemGap": 10
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5
            }
        },
        {
            "legend": [
                {
                    "data": [
                        "\u767d\u5929\u603b\u4eba\u6d41\u91cf\u6307\u6570(8:00-20:00)",
                        "\u591c\u95f4\u603b\u4eba\u6d41\u91cf\u6307\u6570(20:00-23:00,0:00-8:00)"
                    ],
                    "selected": {
                        "\u767d\u5929\u603b\u4eba\u6d41\u91cf\u6307\u6570(8:00-20:00)": true,
                        "\u591c\u95f4\u603b\u4eba\u6d41\u91cf\u6307\u6570(20:00-23:00,0:00-8:00)": true
                    },
                    "show": true,
                    "left": 10,
                    "top": 30,
                    "orient": "vertical",
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "radar",
                    "name": "\u767d\u5929\u603b\u4eba\u6d41\u91cf\u6307\u6570(8:00-20:00)",
                    "data": [
                        [
                            95.31,
                            28.61,
                            92.55,
                            68.2,
                            72.91,
                            8.45
                        ]
                    ],
                    "label": {
                        "show": false,
                        "position": "top",
                        "margin": 8
                    },
                    "itemStyle": {
                        "normal": {
                            "color": "#f38181"
                        }
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 6,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    },
                    "areaStyle": {
                        "opacity": 0
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                },
                {
                    "type": "radar",
                    "name": "\u591c\u95f4\u603b\u4eba\u6d41\u91cf\u6307\u6570(20:00-23:00,0:00-8:00)",
                    "data": [
                        [
                            18.68,
                            10.94,
                            39.55,
                            22.71,
                            25.41,
                            3.07
                        ]
                    ],
                    "label": {
                        "show": false,
                        "position": "top",
                        "margin": 8
                    },
                    "itemStyle": {
                        "normal": {
                            "color": "#95e1d3"
                        }
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 6,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    },
                    "areaStyle": {
                        "opacity": 0
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5355\u65e5\u603b\u4eba\u6d41\u91cf\u96f7\u8fbe\u56fe",
                    "padding": 5,
                    "itemGap": 10
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5
            }
        },
        {
            "legend": [
                {
                    "data": [
                        "\u767d\u5929\u603b\u4eba\u6d41\u91cf\u6307\u6570(8:00-20:00)",
                        "\u591c\u95f4\u603b\u4eba\u6d41\u91cf\u6307\u6570(20:00-23:00,0:00-8:00)"
                    ],
                    "selected": {
                        "\u767d\u5929\u603b\u4eba\u6d41\u91cf\u6307\u6570(8:00-20:00)": true,
                        "\u591c\u95f4\u603b\u4eba\u6d41\u91cf\u6307\u6570(20:00-23:00,0:00-8:00)": true
                    },
                    "show": true,
                    "left": 10,
                    "top": 30,
                    "orient": "vertical",
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "radar",
                    "name": "\u767d\u5929\u603b\u4eba\u6d41\u91cf\u6307\u6570(8:00-20:00)",
                    "data": [
                        [
                            93.66,
                            27.98,
                            91.29,
                            67.01,
                            72.24,
                            8.31
                        ]
                    ],
                    "label": {
                        "show": false,
                        "position": "top",
                        "margin": 8
                    },
                    "itemStyle": {
                        "normal": {
                            "color": "#f38181"
                        }
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 6,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    },
                    "areaStyle": {
                        "opacity": 0
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                },
                {
                    "type": "radar",
                    "name": "\u591c\u95f4\u603b\u4eba\u6d41\u91cf\u6307\u6570(20:00-23:00,0:00-8:00)",
                    "data": [
                        [
                            18.52,
                            10.8,
                            39.42,
                            22.5,
                            25.35,
                            3.04
                        ]
                    ],
                    "label": {
                        "show": false,
                        "position": "top",
                        "margin": 8
                    },
                    "itemStyle": {
                        "normal": {
                            "color": "#95e1d3"
                        }
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 6,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    },
                    "areaStyle": {
                        "opacity": 0
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5355\u65e5\u603b\u4eba\u6d41\u91cf\u96f7\u8fbe\u56fe",
                    "padding": 5,
                    "itemGap": 10
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5
            }
        },
        {
            "legend": [
                {
                    "data": [
                        "\u767d\u5929\u603b\u4eba\u6d41\u91cf\u6307\u6570(8:00-20:00)",
                        "\u591c\u95f4\u603b\u4eba\u6d41\u91cf\u6307\u6570(20:00-23:00,0:00-8:00)"
                    ],
                    "selected": {
                        "\u767d\u5929\u603b\u4eba\u6d41\u91cf\u6307\u6570(8:00-20:00)": true,
                        "\u591c\u95f4\u603b\u4eba\u6d41\u91cf\u6307\u6570(20:00-23:00,0:00-8:00)": true
                    },
                    "show": true,
                    "left": 10,
                    "top": 30,
                    "orient": "vertical",
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "radar",
                    "name": "\u767d\u5929\u603b\u4eba\u6d41\u91cf\u6307\u6570(8:00-20:00)",
                    "data": [
                        [
                            93.83,
                            27.6,
                            91.68,
                            66.71,
                            69.24,
                            8.35
                        ]
                    ],
                    "label": {
                        "show": false,
                        "position": "top",
                        "margin": 8
                    },
                    "itemStyle": {
                        "normal": {
                            "color": "#f38181"
                        }
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 6,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    },
                    "areaStyle": {
                        "opacity": 0
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                },
                {
                    "type": "radar",
                    "name": "\u591c\u95f4\u603b\u4eba\u6d41\u91cf\u6307\u6570(20:00-23:00,0:00-8:00)",
                    "data": [
                        [
                            19.24,
                            10.96,
                            39.83,
                            23.05,
                            25.39,
                            3.17
                        ]
                    ],
                    "label": {
                        "show": false,
                        "position": "top",
                        "margin": 8
                    },
                    "itemStyle": {
                        "normal": {
                            "color": "#95e1d3"
                        }
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 6,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    },
                    "areaStyle": {
                        "opacity": 0
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5355\u65e5\u603b\u4eba\u6d41\u91cf\u96f7\u8fbe\u56fe",
                    "padding": 5,
                    "itemGap": 10
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5
            }
        },
        {
            "legend": [
                {
                    "data": [
                        "\u767d\u5929\u603b\u4eba\u6d41\u91cf\u6307\u6570(8:00-20:00)",
                        "\u591c\u95f4\u603b\u4eba\u6d41\u91cf\u6307\u6570(20:00-23:00,0:00-8:00)"
                    ],
                    "selected": {
                        "\u767d\u5929\u603b\u4eba\u6d41\u91cf\u6307\u6570(8:00-20:00)": true,
                        "\u591c\u95f4\u603b\u4eba\u6d41\u91cf\u6307\u6570(20:00-23:00,0:00-8:00)": true
                    },
                    "show": true,
                    "left": 10,
                    "top": 30,
                    "orient": "vertical",
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "radar",
                    "name": "\u767d\u5929\u603b\u4eba\u6d41\u91cf\u6307\u6570(8:00-20:00)",
                    "data": [
                        [
                            95.28,
                            28.32,
                            92.14,
                            68.31,
                            69.94,
                            8.45
                        ]
                    ],
                    "label": {
                        "show": false,
                        "position": "top",
                        "margin": 8
                    },
                    "itemStyle": {
                        "normal": {
                            "color": "#f38181"
                        }
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 6,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    },
                    "areaStyle": {
                        "opacity": 0
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                },
                {
                    "type": "radar",
                    "name": "\u591c\u95f4\u603b\u4eba\u6d41\u91cf\u6307\u6570(20:00-23:00,0:00-8:00)",
                    "data": [
                        [
                            18.98,
                            10.94,
                            39.49,
                            22.64,
                            25.03,
                            3.07
                        ]
                    ],
                    "label": {
                        "show": false,
                        "position": "top",
                        "margin": 8
                    },
                    "itemStyle": {
                        "normal": {
                            "color": "#95e1d3"
                        }
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 6,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    },
                    "areaStyle": {
                        "opacity": 0
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5355\u65e5\u603b\u4eba\u6d41\u91cf\u96f7\u8fbe\u56fe",
                    "padding": 5,
                    "itemGap": 10
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5
            }
        },
        {
            "legend": [
                {
                    "data": [
                        "\u767d\u5929\u603b\u4eba\u6d41\u91cf\u6307\u6570(8:00-20:00)",
                        "\u591c\u95f4\u603b\u4eba\u6d41\u91cf\u6307\u6570(20:00-23:00,0:00-8:00)"
                    ],
                    "selected": {
                        "\u767d\u5929\u603b\u4eba\u6d41\u91cf\u6307\u6570(8:00-20:00)": true,
                        "\u591c\u95f4\u603b\u4eba\u6d41\u91cf\u6307\u6570(20:00-23:00,0:00-8:00)": true
                    },
                    "show": true,
                    "left": 10,
                    "top": 30,
                    "orient": "vertical",
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "radar",
                    "name": "\u767d\u5929\u603b\u4eba\u6d41\u91cf\u6307\u6570(8:00-20:00)",
                    "data": [
                        [
                            95.44,
                            28.51,
                            91.97,
                            67.92,
                            73.24,
                            8.39
                        ]
                    ],
                    "label": {
                        "show": false,
                        "position": "top",
                        "margin": 8
                    },
                    "itemStyle": {
                        "normal": {
                            "color": "#f38181"
                        }
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 6,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    },
                    "areaStyle": {
                        "opacity": 0
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                },
                {
                    "type": "radar",
                    "name": "\u591c\u95f4\u603b\u4eba\u6d41\u91cf\u6307\u6570(20:00-23:00,0:00-8:00)",
                    "data": [
                        [
                            18.69,
                            10.85,
                            39.51,
                            22.65,
                            25.37,
                            3.06
                        ]
                    ],
                    "label": {
                        "show": false,
                        "position": "top",
                        "margin": 8
                    },
                    "itemStyle": {
                        "normal": {
                            "color": "#95e1d3"
                        }
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 6,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    },
                    "areaStyle": {
                        "opacity": 0
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5355\u65e5\u603b\u4eba\u6d41\u91cf\u96f7\u8fbe\u56fe",
                    "padding": 5,
                    "itemGap": 10
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5
            }
        }
    ]
};


ec_right1.setOption(ec_right1_option);