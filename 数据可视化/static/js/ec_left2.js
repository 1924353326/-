var ec_left2 = echarts.init(document.getElementById('l2'), "dark");



        var ec_left2_Option = {
    "baseOption": {
        "series": [
            {
                "type": "line",
                "name": "\u4eba\u6d41\u91cf\u6307\u6570",
                "connectNulls": false,
                "symbol": "circle",
                "symbolSize": 6,
                "showSymbol": true,
                "smooth": true,
                "clip": true,
                "step": false,
                "data": [
                    [
                        "0117",
                        3.31
                    ],
                    [
                        "0118",
                        2.8
                    ],
                    [
                        "0119",
                        2.74
                    ],
                    [
                        "0120",
                        2.58
                    ],
                    [
                        "0121",
                        2.31
                    ],
                    [
                        "0122",
                        1.99
                    ],
                    [
                        "0123",
                        1.53
                    ],
                    [
                        "0124",
                        1.47
                    ],
                    [
                        "0125",
                        1.27
                    ],
                    [
                        "0126",
                        1.29
                    ],
                    [
                        "0127",
                        1.3
                    ],
                    [
                        "0128",
                        1.3
                    ],
                    [
                        "0129",
                        1.31
                    ],
                    [
                        "0130",
                        1.34
                    ],
                    [
                        "0131",
                        1.43
                    ],
                    [
                        "0201",
                        1.38
                    ],
                    [
                        "0202",
                        1.36
                    ],
                    [
                        "0203",
                        1.37
                    ],
                    [
                        "0204",
                        1.34
                    ],
                    [
                        "0205",
                        1.36
                    ],
                    [
                        "0206",
                        1.4
                    ],
                    [
                        "0207",
                        1.37
                    ],
                    [
                        "0208",
                        1.38
                    ],
                    [
                        "0209",
                        1.39
                    ],
                    [
                        "0210",
                        1.39
                    ],
                    [
                        "0211",
                        1.4
                    ],
                    [
                        "0212",
                        1.39
                    ],
                    [
                        "0213",
                        1.42
                    ],
                    [
                        "0214",
                        1.45
                    ],
                    [
                        "0215",
                        1.38
                    ],
                    [
                        "0216",
                        1.41
                    ],
                    [
                        "0217",
                        1.4
                    ],
                    [
                        "0218",
                        1.42
                    ],
                    [
                        "0219",
                        1.43
                    ],
                    [
                        "0220",
                        1.42
                    ],
                    [
                        "0221",
                        1.41
                    ],
                    [
                        "0222",
                        1.43
                    ],
                    [
                        "0223",
                        1.41
                    ],
                    [
                        "0224",
                        1.41
                    ]
                ],
                "hoverAnimation": true,
                "label": {
                    "show": true,
                    "position": "top",
                    "color": "white",
                    "margin": 8
                },
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid",
                    "color": "#fff"
                },
                "areaStyle": {
                    "opacity": 1,
                    "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#93edc7'}, {offset: 1, color: '#1cd8d2'}],false)
                },
                "tooltip": {
                    "show": false,
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
                },
                "zlevel": 0,
                "z": 0
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
            "left": "5",
            "top": "20",
            "bottom": "20",
            "width": "60",
            "data": [
                "00",
                "01",
                "02",
                "03",
                "04",
                "05",
                "06",
                "07",
                "08",
                "09",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23"
            ]
        },
        "xAxis": [
            {
                "type": "category",
                "show": true,
                "scale": false,
                "nameLocation": "end",
                "nameGap": 15,
                "gridIndex": 0,
                "axisLine": {
                    "show": false,
                    "onZero": true,
                    "onZeroAxisIndex": 0
                },
                "axisTick": {
                    "show": true,
                    "alignWithLabel": false,
                    "inside": false,
                    "length": 25,
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid",
                        "color": "#ffffff1f"
                    }
                },
                "axisLabel": {
                    "show": true,
                    "position": "top",
                    "color": "#ffffff63",
                    "margin": 30
                },
                "inverse": false,
                "offset": 0,
                "splitNumber": 5,
                "boundaryGap": false,
                "minInterval": 0,
                "splitLine": {
                    "show": true,
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid",
                        "color": "#ffffff1f"
                    }
                },
                "data": [
                    "0117",
                    "0118",
                    "0119",
                    "0120",
                    "0121",
                    "0122",
                    "0123",
                    "0124",
                    "0125",
                    "0126",
                    "0127",
                    "0128",
                    "0129",
                    "0130",
                    "0131",
                    "0201",
                    "0202",
                    "0203",
                    "0204",
                    "0205",
                    "0206",
                    "0207",
                    "0208",
                    "0209",
                    "0210",
                    "0211",
                    "0212",
                    "0213",
                    "0214",
                    "0215",
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
            }
        ],
        "yAxis": [
            {
                "type": "value",
                "show": true,
                "scale": false,
                "nameLocation": "end",
                "nameGap": 15,
                "gridIndex": 0,
                "axisLine": {
                    "show": true,
                    "onZero": true,
                    "onZeroAxisIndex": 0,
                    "lineStyle": {
                        "show": true,
                        "width": 2,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid",
                        "color": "#fff"
                    }
                },
                "axisTick": {
                    "show": true,
                    "alignWithLabel": false,
                    "inside": false,
                    "length": 15,
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid",
                        "color": "#ffffff1f"
                    }
                },
                "axisLabel": {
                    "show": true,
                    "position": "top",
                    "color": "#ffffff63",
                    "margin": 20
                },
                "inverse": false,
                "position": "right",
                "offset": 0,
                "splitNumber": 5,
                "minInterval": 0,
                "splitLine": {
                    "show": true,
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid",
                        "color": "#ffffff1f"
                    }
                }
            }
        ],
        "dataZoom": {
            "show": true,
            "type": "inside",
            "realtime": true,
            "start": 20,
            "end": 80,
            "orient": "horizontal",
            "zoomLock": false,
            "filterMode": "filter"
        }
    },
    "options": [
        {
            "legend": [
                {
                    "data": [
                        "\u4eba\u6d41\u91cf\u6307\u6570"
                    ],
                    "selected": {
                        "\u4eba\u6d41\u91cf\u6307\u6570": true
                    },
                    "show": false,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "line",
                    "name": "\u4eba\u6d41\u91cf\u6307\u6570",
                    "connectNulls": false,
                    "symbol": "circle",
                    "symbolSize": 6,
                    "showSymbol": true,
                    "smooth": true,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "0117",
                            2.47
                        ],
                        [
                            "0118",
                            2.39
                        ],
                        [
                            "0119",
                            1.97
                        ],
                        [
                            "0120",
                            1.91
                        ],
                        [
                            "0121",
                            1.81
                        ],
                        [
                            "0122",
                            1.63
                        ],
                        [
                            "0123",
                            1.42
                        ],
                        [
                            "0124",
                            1.09
                        ],
                        [
                            "0125",
                            1.3
                        ],
                        [
                            "0126",
                            0.92
                        ],
                        [
                            "0127",
                            0.94
                        ],
                        [
                            "0128",
                            0.95
                        ],
                        [
                            "0129",
                            0.97
                        ],
                        [
                            "0130",
                            0.97
                        ],
                        [
                            "0131",
                            1.0
                        ],
                        [
                            "0201",
                            1.06
                        ],
                        [
                            "0202",
                            1.05
                        ],
                        [
                            "0203",
                            1.04
                        ],
                        [
                            "0204",
                            1.01
                        ],
                        [
                            "0205",
                            1.0
                        ],
                        [
                            "0206",
                            1.03
                        ],
                        [
                            "0207",
                            1.04
                        ],
                        [
                            "0208",
                            1.04
                        ],
                        [
                            "0209",
                            1.05
                        ],
                        [
                            "0210",
                            1.04
                        ],
                        [
                            "0211",
                            1.03
                        ],
                        [
                            "0212",
                            1.04
                        ],
                        [
                            "0213",
                            1.05
                        ],
                        [
                            "0214",
                            1.07
                        ],
                        [
                            "0215",
                            1.1
                        ],
                        [
                            "0216",
                            1.08
                        ],
                        [
                            "0217",
                            1.07
                        ],
                        [
                            "0218",
                            1.08
                        ],
                        [
                            "0219",
                            1.09
                        ],
                        [
                            "0220",
                            1.07
                        ],
                        [
                            "0221",
                            1.07
                        ],
                        [
                            "0222",
                            1.1
                        ],
                        [
                            "0223",
                            1.08
                        ],
                        [
                            "0224",
                            1.08
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": true,
                        "position": "top",
                        "color": "white",
                        "margin": 8
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid",
                        "color": "#fff"
                    },
                    "areaStyle": {
                        "opacity": 1,
                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#93edc7'}, {offset: 1, color: '#1cd8d2'}],false)
                    },
                    "tooltip": {
                        "show": false,
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
                    },
                    "zlevel": 0,
                    "z": 0
                }
            ],
            "xAxis": [
                {
                    "type": "category",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": false,
                        "onZero": true,
                        "onZeroAxisIndex": 0
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 25,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 30
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "boundaryGap": false,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "data": [
                        "0117",
                        "0118",
                        "0119",
                        "0120",
                        "0121",
                        "0122",
                        "0123",
                        "0124",
                        "0125",
                        "0126",
                        "0127",
                        "0128",
                        "0129",
                        "0130",
                        "0131",
                        "0201",
                        "0202",
                        "0203",
                        "0204",
                        "0205",
                        "0206",
                        "0207",
                        "0208",
                        "0209",
                        "0210",
                        "0211",
                        "0212",
                        "0213",
                        "0214",
                        "0215",
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
                }
            ],
            "yAxis": [
                {
                    "type": "value",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": true,
                        "onZero": true,
                        "onZeroAxisIndex": 0,
                        "lineStyle": {
                            "show": true,
                            "width": 2,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#fff"
                        }
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 15,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 20
                    },
                    "inverse": false,
                    "position": "right",
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5404\u65f6\u6bb5\u603b\u4eba\u6d41\u91cf\u5bf9\u6bd4",
                    "left": "center",
                    "top": "5%",
                    "padding": 5,
                    "itemGap": 10,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 16
                    }
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
            },
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u4eba\u6d41\u91cf\u6307\u6570"
                    ],
                    "selected": {
                        "\u4eba\u6d41\u91cf\u6307\u6570": true
                    },
                    "show": false,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "line",
                    "name": "\u4eba\u6d41\u91cf\u6307\u6570",
                    "connectNulls": false,
                    "symbol": "circle",
                    "symbolSize": 6,
                    "showSymbol": true,
                    "smooth": true,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "0117",
                            1.66
                        ],
                        [
                            "0118",
                            1.65
                        ],
                        [
                            "0119",
                            1.36
                        ],
                        [
                            "0120",
                            1.33
                        ],
                        [
                            "0121",
                            1.26
                        ],
                        [
                            "0122",
                            1.13
                        ],
                        [
                            "0123",
                            1.01
                        ],
                        [
                            "0124",
                            0.75
                        ],
                        [
                            "0125",
                            0.87
                        ],
                        [
                            "0126",
                            0.64
                        ],
                        [
                            "0127",
                            0.66
                        ],
                        [
                            "0128",
                            0.66
                        ],
                        [
                            "0129",
                            0.68
                        ],
                        [
                            "0130",
                            0.67
                        ],
                        [
                            "0131",
                            0.69
                        ],
                        [
                            "0201",
                            0.72
                        ],
                        [
                            "0202",
                            0.72
                        ],
                        [
                            "0203",
                            0.7
                        ],
                        [
                            "0204",
                            0.68
                        ],
                        [
                            "0205",
                            0.7
                        ],
                        [
                            "0206",
                            0.71
                        ],
                        [
                            "0207",
                            0.72
                        ],
                        [
                            "0208",
                            0.72
                        ],
                        [
                            "0209",
                            0.71
                        ],
                        [
                            "0210",
                            0.71
                        ],
                        [
                            "0211",
                            0.71
                        ],
                        [
                            "0212",
                            0.72
                        ],
                        [
                            "0213",
                            0.71
                        ],
                        [
                            "0214",
                            0.75
                        ],
                        [
                            "0215",
                            0.76
                        ],
                        [
                            "0216",
                            0.75
                        ],
                        [
                            "0217",
                            0.74
                        ],
                        [
                            "0218",
                            0.75
                        ],
                        [
                            "0219",
                            0.76
                        ],
                        [
                            "0220",
                            0.74
                        ],
                        [
                            "0221",
                            0.74
                        ],
                        [
                            "0222",
                            0.77
                        ],
                        [
                            "0223",
                            0.74
                        ],
                        [
                            "0224",
                            0.74
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": true,
                        "position": "top",
                        "color": "white",
                        "margin": 8
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid",
                        "color": "#fff"
                    },
                    "areaStyle": {
                        "opacity": 1,
                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#93edc7'}, {offset: 1, color: '#1cd8d2'}],false)
                    },
                    "tooltip": {
                        "show": false,
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
                    },
                    "zlevel": 0,
                    "z": 0
                }
            ],
            "xAxis": [
                {
                    "type": "category",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": false,
                        "onZero": true,
                        "onZeroAxisIndex": 0
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 25,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 30
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "boundaryGap": false,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "data": [
                        "0117",
                        "0118",
                        "0119",
                        "0120",
                        "0121",
                        "0122",
                        "0123",
                        "0124",
                        "0125",
                        "0126",
                        "0127",
                        "0128",
                        "0129",
                        "0130",
                        "0131",
                        "0201",
                        "0202",
                        "0203",
                        "0204",
                        "0205",
                        "0206",
                        "0207",
                        "0208",
                        "0209",
                        "0210",
                        "0211",
                        "0212",
                        "0213",
                        "0214",
                        "0215",
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
                }
            ],
            "yAxis": [
                {
                    "type": "value",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": true,
                        "onZero": true,
                        "onZeroAxisIndex": 0,
                        "lineStyle": {
                            "show": true,
                            "width": 2,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#fff"
                        }
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 15,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 20
                    },
                    "inverse": false,
                    "position": "right",
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5404\u65f6\u6bb5\u603b\u4eba\u6d41\u91cf\u5bf9\u6bd4",
                    "left": "center",
                    "top": "5%",
                    "padding": 5,
                    "itemGap": 10,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 16
                    }
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
            },
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u4eba\u6d41\u91cf\u6307\u6570"
                    ],
                    "selected": {
                        "\u4eba\u6d41\u91cf\u6307\u6570": true
                    },
                    "show": false,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "line",
                    "name": "\u4eba\u6d41\u91cf\u6307\u6570",
                    "connectNulls": false,
                    "symbol": "circle",
                    "symbolSize": 6,
                    "showSymbol": true,
                    "smooth": true,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "0117",
                            1.32
                        ],
                        [
                            "0118",
                            1.32
                        ],
                        [
                            "0119",
                            1.1
                        ],
                        [
                            "0120",
                            1.12
                        ],
                        [
                            "0121",
                            1.03
                        ],
                        [
                            "0122",
                            0.95
                        ],
                        [
                            "0123",
                            0.86
                        ],
                        [
                            "0124",
                            0.64
                        ],
                        [
                            "0125",
                            0.64
                        ],
                        [
                            "0126",
                            0.55
                        ],
                        [
                            "0127",
                            0.56
                        ],
                        [
                            "0128",
                            0.58
                        ],
                        [
                            "0129",
                            0.6
                        ],
                        [
                            "0130",
                            0.59
                        ],
                        [
                            "0131",
                            0.62
                        ],
                        [
                            "0201",
                            0.62
                        ],
                        [
                            "0202",
                            0.63
                        ],
                        [
                            "0203",
                            0.63
                        ],
                        [
                            "0204",
                            0.61
                        ],
                        [
                            "0205",
                            0.61
                        ],
                        [
                            "0206",
                            0.62
                        ],
                        [
                            "0207",
                            0.63
                        ],
                        [
                            "0208",
                            0.62
                        ],
                        [
                            "0209",
                            0.61
                        ],
                        [
                            "0210",
                            0.61
                        ],
                        [
                            "0211",
                            0.61
                        ],
                        [
                            "0212",
                            0.58
                        ],
                        [
                            "0213",
                            0.58
                        ],
                        [
                            "0214",
                            0.63
                        ],
                        [
                            "0215",
                            0.61
                        ],
                        [
                            "0216",
                            0.6
                        ],
                        [
                            "0217",
                            0.6
                        ],
                        [
                            "0218",
                            0.6
                        ],
                        [
                            "0219",
                            0.61
                        ],
                        [
                            "0220",
                            0.6
                        ],
                        [
                            "0221",
                            0.6
                        ],
                        [
                            "0222",
                            0.62
                        ],
                        [
                            "0223",
                            0.6
                        ],
                        [
                            "0224",
                            0.6
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": true,
                        "position": "top",
                        "color": "white",
                        "margin": 8
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid",
                        "color": "#fff"
                    },
                    "areaStyle": {
                        "opacity": 1,
                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#93edc7'}, {offset: 1, color: '#1cd8d2'}],false)
                    },
                    "tooltip": {
                        "show": false,
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
                    },
                    "zlevel": 0,
                    "z": 0
                }
            ],
            "xAxis": [
                {
                    "type": "category",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": false,
                        "onZero": true,
                        "onZeroAxisIndex": 0
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 25,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 30
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "boundaryGap": false,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "data": [
                        "0117",
                        "0118",
                        "0119",
                        "0120",
                        "0121",
                        "0122",
                        "0123",
                        "0124",
                        "0125",
                        "0126",
                        "0127",
                        "0128",
                        "0129",
                        "0130",
                        "0131",
                        "0201",
                        "0202",
                        "0203",
                        "0204",
                        "0205",
                        "0206",
                        "0207",
                        "0208",
                        "0209",
                        "0210",
                        "0211",
                        "0212",
                        "0213",
                        "0214",
                        "0215",
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
                }
            ],
            "yAxis": [
                {
                    "type": "value",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": true,
                        "onZero": true,
                        "onZeroAxisIndex": 0,
                        "lineStyle": {
                            "show": true,
                            "width": 2,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#fff"
                        }
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 15,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 20
                    },
                    "inverse": false,
                    "position": "right",
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5404\u65f6\u6bb5\u603b\u4eba\u6d41\u91cf\u5bf9\u6bd4",
                    "left": "center",
                    "top": "5%",
                    "padding": 5,
                    "itemGap": 10,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 16
                    }
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
            },
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u4eba\u6d41\u91cf\u6307\u6570"
                    ],
                    "selected": {
                        "\u4eba\u6d41\u91cf\u6307\u6570": true
                    },
                    "show": false,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "line",
                    "name": "\u4eba\u6d41\u91cf\u6307\u6570",
                    "connectNulls": false,
                    "symbol": "circle",
                    "symbolSize": 6,
                    "showSymbol": true,
                    "smooth": true,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "0117",
                            1.16
                        ],
                        [
                            "0118",
                            1.13
                        ],
                        [
                            "0119",
                            1.0
                        ],
                        [
                            "0120",
                            1.02
                        ],
                        [
                            "0121",
                            0.93
                        ],
                        [
                            "0122",
                            0.88
                        ],
                        [
                            "0123",
                            0.79
                        ],
                        [
                            "0124",
                            0.63
                        ],
                        [
                            "0125",
                            0.58
                        ],
                        [
                            "0126",
                            0.53
                        ],
                        [
                            "0127",
                            0.51
                        ],
                        [
                            "0128",
                            0.52
                        ],
                        [
                            "0129",
                            0.52
                        ],
                        [
                            "0130",
                            0.52
                        ],
                        [
                            "0131",
                            0.54
                        ],
                        [
                            "0201",
                            0.53
                        ],
                        [
                            "0202",
                            0.55
                        ],
                        [
                            "0203",
                            0.53
                        ],
                        [
                            "0204",
                            0.52
                        ],
                        [
                            "0205",
                            0.52
                        ],
                        [
                            "0206",
                            0.52
                        ],
                        [
                            "0207",
                            0.52
                        ],
                        [
                            "0208",
                            0.52
                        ],
                        [
                            "0209",
                            0.51
                        ],
                        [
                            "0210",
                            0.51
                        ],
                        [
                            "0211",
                            0.51
                        ],
                        [
                            "0212",
                            0.51
                        ],
                        [
                            "0213",
                            0.51
                        ],
                        [
                            "0214",
                            0.53
                        ],
                        [
                            "0215",
                            0.52
                        ],
                        [
                            "0216",
                            0.51
                        ],
                        [
                            "0217",
                            0.51
                        ],
                        [
                            "0218",
                            0.51
                        ],
                        [
                            "0219",
                            0.52
                        ],
                        [
                            "0220",
                            0.5
                        ],
                        [
                            "0221",
                            0.51
                        ],
                        [
                            "0222",
                            0.52
                        ],
                        [
                            "0223",
                            0.51
                        ],
                        [
                            "0224",
                            0.5
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": true,
                        "position": "top",
                        "color": "white",
                        "margin": 8
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid",
                        "color": "#fff"
                    },
                    "areaStyle": {
                        "opacity": 1,
                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#93edc7'}, {offset: 1, color: '#1cd8d2'}],false)
                    },
                    "tooltip": {
                        "show": false,
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
                    },
                    "zlevel": 0,
                    "z": 0
                }
            ],
            "xAxis": [
                {
                    "type": "category",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": false,
                        "onZero": true,
                        "onZeroAxisIndex": 0
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 25,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 30
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "boundaryGap": false,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "data": [
                        "0117",
                        "0118",
                        "0119",
                        "0120",
                        "0121",
                        "0122",
                        "0123",
                        "0124",
                        "0125",
                        "0126",
                        "0127",
                        "0128",
                        "0129",
                        "0130",
                        "0131",
                        "0201",
                        "0202",
                        "0203",
                        "0204",
                        "0205",
                        "0206",
                        "0207",
                        "0208",
                        "0209",
                        "0210",
                        "0211",
                        "0212",
                        "0213",
                        "0214",
                        "0215",
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
                }
            ],
            "yAxis": [
                {
                    "type": "value",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": true,
                        "onZero": true,
                        "onZeroAxisIndex": 0,
                        "lineStyle": {
                            "show": true,
                            "width": 2,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#fff"
                        }
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 15,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 20
                    },
                    "inverse": false,
                    "position": "right",
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5404\u65f6\u6bb5\u603b\u4eba\u6d41\u91cf\u5bf9\u6bd4",
                    "left": "center",
                    "top": "5%",
                    "padding": 5,
                    "itemGap": 10,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 16
                    }
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
            },
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u4eba\u6d41\u91cf\u6307\u6570"
                    ],
                    "selected": {
                        "\u4eba\u6d41\u91cf\u6307\u6570": true
                    },
                    "show": false,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "line",
                    "name": "\u4eba\u6d41\u91cf\u6307\u6570",
                    "connectNulls": false,
                    "symbol": "circle",
                    "symbolSize": 6,
                    "showSymbol": true,
                    "smooth": true,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "0117",
                            1.15
                        ],
                        [
                            "0118",
                            1.11
                        ],
                        [
                            "0119",
                            1.02
                        ],
                        [
                            "0120",
                            1.03
                        ],
                        [
                            "0121",
                            0.97
                        ],
                        [
                            "0122",
                            0.91
                        ],
                        [
                            "0123",
                            0.82
                        ],
                        [
                            "0124",
                            0.67
                        ],
                        [
                            "0125",
                            0.57
                        ],
                        [
                            "0126",
                            0.49
                        ],
                        [
                            "0127",
                            0.49
                        ],
                        [
                            "0128",
                            0.47
                        ],
                        [
                            "0129",
                            0.47
                        ],
                        [
                            "0130",
                            0.48
                        ],
                        [
                            "0131",
                            0.5
                        ],
                        [
                            "0201",
                            0.49
                        ],
                        [
                            "0202",
                            0.51
                        ],
                        [
                            "0203",
                            0.49
                        ],
                        [
                            "0204",
                            0.49
                        ],
                        [
                            "0205",
                            0.48
                        ],
                        [
                            "0206",
                            0.49
                        ],
                        [
                            "0207",
                            0.49
                        ],
                        [
                            "0208",
                            0.49
                        ],
                        [
                            "0209",
                            0.49
                        ],
                        [
                            "0210",
                            0.49
                        ],
                        [
                            "0211",
                            0.49
                        ],
                        [
                            "0212",
                            0.49
                        ],
                        [
                            "0213",
                            0.49
                        ],
                        [
                            "0214",
                            0.53
                        ],
                        [
                            "0215",
                            0.49
                        ],
                        [
                            "0216",
                            0.49
                        ],
                        [
                            "0217",
                            0.5
                        ],
                        [
                            "0218",
                            0.49
                        ],
                        [
                            "0219",
                            0.5
                        ],
                        [
                            "0220",
                            0.49
                        ],
                        [
                            "0221",
                            0.49
                        ],
                        [
                            "0222",
                            0.51
                        ],
                        [
                            "0223",
                            0.49
                        ],
                        [
                            "0224",
                            0.49
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": true,
                        "position": "top",
                        "color": "white",
                        "margin": 8
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid",
                        "color": "#fff"
                    },
                    "areaStyle": {
                        "opacity": 1,
                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#93edc7'}, {offset: 1, color: '#1cd8d2'}],false)
                    },
                    "tooltip": {
                        "show": false,
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
                    },
                    "zlevel": 0,
                    "z": 0
                }
            ],
            "xAxis": [
                {
                    "type": "category",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": false,
                        "onZero": true,
                        "onZeroAxisIndex": 0
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 25,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 30
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "boundaryGap": false,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "data": [
                        "0117",
                        "0118",
                        "0119",
                        "0120",
                        "0121",
                        "0122",
                        "0123",
                        "0124",
                        "0125",
                        "0126",
                        "0127",
                        "0128",
                        "0129",
                        "0130",
                        "0131",
                        "0201",
                        "0202",
                        "0203",
                        "0204",
                        "0205",
                        "0206",
                        "0207",
                        "0208",
                        "0209",
                        "0210",
                        "0211",
                        "0212",
                        "0213",
                        "0214",
                        "0215",
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
                }
            ],
            "yAxis": [
                {
                    "type": "value",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": true,
                        "onZero": true,
                        "onZeroAxisIndex": 0,
                        "lineStyle": {
                            "show": true,
                            "width": 2,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#fff"
                        }
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 15,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 20
                    },
                    "inverse": false,
                    "position": "right",
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5404\u65f6\u6bb5\u603b\u4eba\u6d41\u91cf\u5bf9\u6bd4",
                    "left": "center",
                    "top": "5%",
                    "padding": 5,
                    "itemGap": 10,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 16
                    }
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
            },
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u4eba\u6d41\u91cf\u6307\u6570"
                    ],
                    "selected": {
                        "\u4eba\u6d41\u91cf\u6307\u6570": true
                    },
                    "show": false,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "line",
                    "name": "\u4eba\u6d41\u91cf\u6307\u6570",
                    "connectNulls": false,
                    "symbol": "circle",
                    "symbolSize": 6,
                    "showSymbol": true,
                    "smooth": true,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "0117",
                            1.52
                        ],
                        [
                            "0118",
                            1.41
                        ],
                        [
                            "0119",
                            1.36
                        ],
                        [
                            "0120",
                            1.38
                        ],
                        [
                            "0121",
                            1.3
                        ],
                        [
                            "0122",
                            1.24
                        ],
                        [
                            "0123",
                            1.11
                        ],
                        [
                            "0124",
                            0.89
                        ],
                        [
                            "0125",
                            0.66
                        ],
                        [
                            "0126",
                            0.58
                        ],
                        [
                            "0127",
                            0.61
                        ],
                        [
                            "0128",
                            0.58
                        ],
                        [
                            "0129",
                            0.58
                        ],
                        [
                            "0130",
                            0.59
                        ],
                        [
                            "0131",
                            0.61
                        ],
                        [
                            "0201",
                            0.6
                        ],
                        [
                            "0202",
                            0.61
                        ],
                        [
                            "0203",
                            0.6
                        ],
                        [
                            "0204",
                            0.59
                        ],
                        [
                            "0205",
                            0.59
                        ],
                        [
                            "0206",
                            0.59
                        ],
                        [
                            "0207",
                            0.59
                        ],
                        [
                            "0208",
                            0.57
                        ],
                        [
                            "0209",
                            0.58
                        ],
                        [
                            "0210",
                            0.59
                        ],
                        [
                            "0211",
                            0.59
                        ],
                        [
                            "0212",
                            0.59
                        ],
                        [
                            "0213",
                            0.59
                        ],
                        [
                            "0214",
                            0.62
                        ],
                        [
                            "0215",
                            0.57
                        ],
                        [
                            "0216",
                            0.6
                        ],
                        [
                            "0217",
                            0.6
                        ],
                        [
                            "0218",
                            0.6
                        ],
                        [
                            "0219",
                            0.61
                        ],
                        [
                            "0220",
                            0.59
                        ],
                        [
                            "0221",
                            0.59
                        ],
                        [
                            "0222",
                            0.61
                        ],
                        [
                            "0223",
                            0.59
                        ],
                        [
                            "0224",
                            0.59
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": true,
                        "position": "top",
                        "color": "white",
                        "margin": 8
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid",
                        "color": "#fff"
                    },
                    "areaStyle": {
                        "opacity": 1,
                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#93edc7'}, {offset: 1, color: '#1cd8d2'}],false)
                    },
                    "tooltip": {
                        "show": false,
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
                    },
                    "zlevel": 0,
                    "z": 0
                }
            ],
            "xAxis": [
                {
                    "type": "category",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": false,
                        "onZero": true,
                        "onZeroAxisIndex": 0
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 25,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 30
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "boundaryGap": false,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "data": [
                        "0117",
                        "0118",
                        "0119",
                        "0120",
                        "0121",
                        "0122",
                        "0123",
                        "0124",
                        "0125",
                        "0126",
                        "0127",
                        "0128",
                        "0129",
                        "0130",
                        "0131",
                        "0201",
                        "0202",
                        "0203",
                        "0204",
                        "0205",
                        "0206",
                        "0207",
                        "0208",
                        "0209",
                        "0210",
                        "0211",
                        "0212",
                        "0213",
                        "0214",
                        "0215",
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
                }
            ],
            "yAxis": [
                {
                    "type": "value",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": true,
                        "onZero": true,
                        "onZeroAxisIndex": 0,
                        "lineStyle": {
                            "show": true,
                            "width": 2,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#fff"
                        }
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 15,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 20
                    },
                    "inverse": false,
                    "position": "right",
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5404\u65f6\u6bb5\u603b\u4eba\u6d41\u91cf\u5bf9\u6bd4",
                    "left": "center",
                    "top": "5%",
                    "padding": 5,
                    "itemGap": 10,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 16
                    }
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
            },
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u4eba\u6d41\u91cf\u6307\u6570"
                    ],
                    "selected": {
                        "\u4eba\u6d41\u91cf\u6307\u6570": true
                    },
                    "show": false,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "line",
                    "name": "\u4eba\u6d41\u91cf\u6307\u6570",
                    "connectNulls": false,
                    "symbol": "circle",
                    "symbolSize": 6,
                    "showSymbol": true,
                    "smooth": true,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "0117",
                            2.94
                        ],
                        [
                            "0118",
                            2.44
                        ],
                        [
                            "0119",
                            2.53
                        ],
                        [
                            "0120",
                            2.57
                        ],
                        [
                            "0121",
                            2.41
                        ],
                        [
                            "0122",
                            2.24
                        ],
                        [
                            "0123",
                            1.95
                        ],
                        [
                            "0124",
                            1.47
                        ],
                        [
                            "0125",
                            0.99
                        ],
                        [
                            "0126",
                            0.99
                        ],
                        [
                            "0127",
                            1.02
                        ],
                        [
                            "0128",
                            0.98
                        ],
                        [
                            "0129",
                            0.99
                        ],
                        [
                            "0130",
                            0.99
                        ],
                        [
                            "0131",
                            1.05
                        ],
                        [
                            "0201",
                            1.03
                        ],
                        [
                            "0202",
                            1.03
                        ],
                        [
                            "0203",
                            1.1
                        ],
                        [
                            "0204",
                            1.07
                        ],
                        [
                            "0205",
                            1.06
                        ],
                        [
                            "0206",
                            1.05
                        ],
                        [
                            "0207",
                            1.05
                        ],
                        [
                            "0208",
                            0.99
                        ],
                        [
                            "0209",
                            0.98
                        ],
                        [
                            "0210",
                            1.12
                        ],
                        [
                            "0211",
                            1.1
                        ],
                        [
                            "0212",
                            1.1
                        ],
                        [
                            "0213",
                            1.08
                        ],
                        [
                            "0214",
                            1.1
                        ],
                        [
                            "0215",
                            0.98
                        ],
                        [
                            "0216",
                            1.09
                        ],
                        [
                            "0217",
                            1.07
                        ],
                        [
                            "0218",
                            1.09
                        ],
                        [
                            "0219",
                            1.1
                        ],
                        [
                            "0220",
                            1.08
                        ],
                        [
                            "0221",
                            1.08
                        ],
                        [
                            "0222",
                            1.1
                        ],
                        [
                            "0223",
                            1.08
                        ],
                        [
                            "0224",
                            1.08
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": true,
                        "position": "top",
                        "color": "white",
                        "margin": 8
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid",
                        "color": "#fff"
                    },
                    "areaStyle": {
                        "opacity": 1,
                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#93edc7'}, {offset: 1, color: '#1cd8d2'}],false)
                    },
                    "tooltip": {
                        "show": false,
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
                    },
                    "zlevel": 0,
                    "z": 0
                }
            ],
            "xAxis": [
                {
                    "type": "category",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": false,
                        "onZero": true,
                        "onZeroAxisIndex": 0
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 25,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 30
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "boundaryGap": false,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "data": [
                        "0117",
                        "0118",
                        "0119",
                        "0120",
                        "0121",
                        "0122",
                        "0123",
                        "0124",
                        "0125",
                        "0126",
                        "0127",
                        "0128",
                        "0129",
                        "0130",
                        "0131",
                        "0201",
                        "0202",
                        "0203",
                        "0204",
                        "0205",
                        "0206",
                        "0207",
                        "0208",
                        "0209",
                        "0210",
                        "0211",
                        "0212",
                        "0213",
                        "0214",
                        "0215",
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
                }
            ],
            "yAxis": [
                {
                    "type": "value",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": true,
                        "onZero": true,
                        "onZeroAxisIndex": 0,
                        "lineStyle": {
                            "show": true,
                            "width": 2,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#fff"
                        }
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 15,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 20
                    },
                    "inverse": false,
                    "position": "right",
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5404\u65f6\u6bb5\u603b\u4eba\u6d41\u91cf\u5bf9\u6bd4",
                    "left": "center",
                    "top": "5%",
                    "padding": 5,
                    "itemGap": 10,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 16
                    }
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
            },
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u4eba\u6d41\u91cf\u6307\u6570"
                    ],
                    "selected": {
                        "\u4eba\u6d41\u91cf\u6307\u6570": true
                    },
                    "show": false,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "line",
                    "name": "\u4eba\u6d41\u91cf\u6307\u6570",
                    "connectNulls": false,
                    "symbol": "circle",
                    "symbolSize": 6,
                    "showSymbol": true,
                    "smooth": true,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "0117",
                            5.31
                        ],
                        [
                            "0118",
                            3.78
                        ],
                        [
                            "0119",
                            4.47
                        ],
                        [
                            "0120",
                            4.58
                        ],
                        [
                            "0121",
                            4.16
                        ],
                        [
                            "0122",
                            3.75
                        ],
                        [
                            "0123",
                            3.1
                        ],
                        [
                            "0124",
                            1.95
                        ],
                        [
                            "0125",
                            1.47
                        ],
                        [
                            "0126",
                            1.47
                        ],
                        [
                            "0127",
                            1.52
                        ],
                        [
                            "0128",
                            1.49
                        ],
                        [
                            "0129",
                            1.54
                        ],
                        [
                            "0130",
                            1.52
                        ],
                        [
                            "0131",
                            1.64
                        ],
                        [
                            "0201",
                            1.64
                        ],
                        [
                            "0202",
                            1.54
                        ],
                        [
                            "0203",
                            1.91
                        ],
                        [
                            "0204",
                            1.83
                        ],
                        [
                            "0205",
                            1.79
                        ],
                        [
                            "0206",
                            1.72
                        ],
                        [
                            "0207",
                            1.73
                        ],
                        [
                            "0208",
                            1.56
                        ],
                        [
                            "0209",
                            1.5
                        ],
                        [
                            "0210",
                            2.06
                        ],
                        [
                            "0211",
                            1.93
                        ],
                        [
                            "0212",
                            1.93
                        ],
                        [
                            "0213",
                            1.98
                        ],
                        [
                            "0214",
                            1.86
                        ],
                        [
                            "0215",
                            1.58
                        ],
                        [
                            "0216",
                            1.84
                        ],
                        [
                            "0217",
                            1.81
                        ],
                        [
                            "0218",
                            1.84
                        ],
                        [
                            "0219",
                            1.83
                        ],
                        [
                            "0220",
                            1.86
                        ],
                        [
                            "0221",
                            1.83
                        ],
                        [
                            "0222",
                            1.82
                        ],
                        [
                            "0223",
                            1.84
                        ],
                        [
                            "0224",
                            1.85
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": true,
                        "position": "top",
                        "color": "white",
                        "margin": 8
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid",
                        "color": "#fff"
                    },
                    "areaStyle": {
                        "opacity": 1,
                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#93edc7'}, {offset: 1, color: '#1cd8d2'}],false)
                    },
                    "tooltip": {
                        "show": false,
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
                    },
                    "zlevel": 0,
                    "z": 0
                }
            ],
            "xAxis": [
                {
                    "type": "category",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": false,
                        "onZero": true,
                        "onZeroAxisIndex": 0
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 25,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 30
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "boundaryGap": false,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "data": [
                        "0117",
                        "0118",
                        "0119",
                        "0120",
                        "0121",
                        "0122",
                        "0123",
                        "0124",
                        "0125",
                        "0126",
                        "0127",
                        "0128",
                        "0129",
                        "0130",
                        "0131",
                        "0201",
                        "0202",
                        "0203",
                        "0204",
                        "0205",
                        "0206",
                        "0207",
                        "0208",
                        "0209",
                        "0210",
                        "0211",
                        "0212",
                        "0213",
                        "0214",
                        "0215",
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
                }
            ],
            "yAxis": [
                {
                    "type": "value",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": true,
                        "onZero": true,
                        "onZeroAxisIndex": 0,
                        "lineStyle": {
                            "show": true,
                            "width": 2,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#fff"
                        }
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 15,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 20
                    },
                    "inverse": false,
                    "position": "right",
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5404\u65f6\u6bb5\u603b\u4eba\u6d41\u91cf\u5bf9\u6bd4",
                    "left": "center",
                    "top": "5%",
                    "padding": 5,
                    "itemGap": 10,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 16
                    }
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
            },
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u4eba\u6d41\u91cf\u6307\u6570"
                    ],
                    "selected": {
                        "\u4eba\u6d41\u91cf\u6307\u6570": true
                    },
                    "show": false,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "line",
                    "name": "\u4eba\u6d41\u91cf\u6307\u6570",
                    "connectNulls": false,
                    "symbol": "circle",
                    "symbolSize": 6,
                    "showSymbol": true,
                    "smooth": true,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "0117",
                            7.56
                        ],
                        [
                            "0118",
                            5.33
                        ],
                        [
                            "0119",
                            6.37
                        ],
                        [
                            "0120",
                            6.49
                        ],
                        [
                            "0121",
                            5.77
                        ],
                        [
                            "0122",
                            5.1
                        ],
                        [
                            "0123",
                            4.02
                        ],
                        [
                            "0124",
                            2.5
                        ],
                        [
                            "0125",
                            1.91
                        ],
                        [
                            "0126",
                            1.99
                        ],
                        [
                            "0127",
                            2.04
                        ],
                        [
                            "0128",
                            2.01
                        ],
                        [
                            "0129",
                            2.06
                        ],
                        [
                            "0130",
                            2.02
                        ],
                        [
                            "0131",
                            2.19
                        ],
                        [
                            "0201",
                            2.19
                        ],
                        [
                            "0202",
                            2.08
                        ],
                        [
                            "0203",
                            2.54
                        ],
                        [
                            "0204",
                            2.45
                        ],
                        [
                            "0205",
                            2.39
                        ],
                        [
                            "0206",
                            2.36
                        ],
                        [
                            "0207",
                            2.35
                        ],
                        [
                            "0208",
                            2.06
                        ],
                        [
                            "0209",
                            2.01
                        ],
                        [
                            "0210",
                            2.77
                        ],
                        [
                            "0211",
                            2.66
                        ],
                        [
                            "0212",
                            2.66
                        ],
                        [
                            "0213",
                            2.69
                        ],
                        [
                            "0214",
                            2.55
                        ],
                        [
                            "0215",
                            2.08
                        ],
                        [
                            "0216",
                            2.47
                        ],
                        [
                            "0217",
                            2.41
                        ],
                        [
                            "0218",
                            2.47
                        ],
                        [
                            "0219",
                            2.46
                        ],
                        [
                            "0220",
                            2.5
                        ],
                        [
                            "0221",
                            2.48
                        ],
                        [
                            "0222",
                            2.44
                        ],
                        [
                            "0223",
                            2.47
                        ],
                        [
                            "0224",
                            2.5
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": true,
                        "position": "top",
                        "color": "white",
                        "margin": 8
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid",
                        "color": "#fff"
                    },
                    "areaStyle": {
                        "opacity": 1,
                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#93edc7'}, {offset: 1, color: '#1cd8d2'}],false)
                    },
                    "tooltip": {
                        "show": false,
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
                    },
                    "zlevel": 0,
                    "z": 0
                }
            ],
            "xAxis": [
                {
                    "type": "category",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": false,
                        "onZero": true,
                        "onZeroAxisIndex": 0
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 25,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 30
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "boundaryGap": false,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "data": [
                        "0117",
                        "0118",
                        "0119",
                        "0120",
                        "0121",
                        "0122",
                        "0123",
                        "0124",
                        "0125",
                        "0126",
                        "0127",
                        "0128",
                        "0129",
                        "0130",
                        "0131",
                        "0201",
                        "0202",
                        "0203",
                        "0204",
                        "0205",
                        "0206",
                        "0207",
                        "0208",
                        "0209",
                        "0210",
                        "0211",
                        "0212",
                        "0213",
                        "0214",
                        "0215",
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
                }
            ],
            "yAxis": [
                {
                    "type": "value",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": true,
                        "onZero": true,
                        "onZeroAxisIndex": 0,
                        "lineStyle": {
                            "show": true,
                            "width": 2,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#fff"
                        }
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 15,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 20
                    },
                    "inverse": false,
                    "position": "right",
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5404\u65f6\u6bb5\u603b\u4eba\u6d41\u91cf\u5bf9\u6bd4",
                    "left": "center",
                    "top": "5%",
                    "padding": 5,
                    "itemGap": 10,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 16
                    }
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
            },
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u4eba\u6d41\u91cf\u6307\u6570"
                    ],
                    "selected": {
                        "\u4eba\u6d41\u91cf\u6307\u6570": true
                    },
                    "show": false,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "line",
                    "name": "\u4eba\u6d41\u91cf\u6307\u6570",
                    "connectNulls": false,
                    "symbol": "circle",
                    "symbolSize": 6,
                    "showSymbol": true,
                    "smooth": true,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "0117",
                            8.49
                        ],
                        [
                            "0118",
                            6.61
                        ],
                        [
                            "0119",
                            7.27
                        ],
                        [
                            "0120",
                            7.23
                        ],
                        [
                            "0121",
                            6.58
                        ],
                        [
                            "0122",
                            5.74
                        ],
                        [
                            "0123",
                            4.76
                        ],
                        [
                            "0124",
                            3.04
                        ],
                        [
                            "0125",
                            2.38
                        ],
                        [
                            "0126",
                            2.45
                        ],
                        [
                            "0127",
                            2.45
                        ],
                        [
                            "0128",
                            2.44
                        ],
                        [
                            "0129",
                            2.42
                        ],
                        [
                            "0130",
                            2.4
                        ],
                        [
                            "0131",
                            2.58
                        ],
                        [
                            "0201",
                            2.52
                        ],
                        [
                            "0202",
                            2.45
                        ],
                        [
                            "0203",
                            2.88
                        ],
                        [
                            "0204",
                            2.74
                        ],
                        [
                            "0205",
                            2.67
                        ],
                        [
                            "0206",
                            2.62
                        ],
                        [
                            "0207",
                            2.63
                        ],
                        [
                            "0208",
                            2.37
                        ],
                        [
                            "0209",
                            2.31
                        ],
                        [
                            "0210",
                            3.01
                        ],
                        [
                            "0211",
                            2.9
                        ],
                        [
                            "0212",
                            2.89
                        ],
                        [
                            "0213",
                            2.98
                        ],
                        [
                            "0214",
                            2.78
                        ],
                        [
                            "0215",
                            2.38
                        ],
                        [
                            "0216",
                            2.75
                        ],
                        [
                            "0217",
                            2.7
                        ],
                        [
                            "0218",
                            2.74
                        ],
                        [
                            "0219",
                            2.74
                        ],
                        [
                            "0220",
                            2.8
                        ],
                        [
                            "0221",
                            2.75
                        ],
                        [
                            "0222",
                            2.7
                        ],
                        [
                            "0223",
                            2.75
                        ],
                        [
                            "0224",
                            2.79
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": true,
                        "position": "top",
                        "color": "white",
                        "margin": 8
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid",
                        "color": "#fff"
                    },
                    "areaStyle": {
                        "opacity": 1,
                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#93edc7'}, {offset: 1, color: '#1cd8d2'}],false)
                    },
                    "tooltip": {
                        "show": false,
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
                    },
                    "zlevel": 0,
                    "z": 0
                }
            ],
            "xAxis": [
                {
                    "type": "category",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": false,
                        "onZero": true,
                        "onZeroAxisIndex": 0
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 25,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 30
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "boundaryGap": false,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "data": [
                        "0117",
                        "0118",
                        "0119",
                        "0120",
                        "0121",
                        "0122",
                        "0123",
                        "0124",
                        "0125",
                        "0126",
                        "0127",
                        "0128",
                        "0129",
                        "0130",
                        "0131",
                        "0201",
                        "0202",
                        "0203",
                        "0204",
                        "0205",
                        "0206",
                        "0207",
                        "0208",
                        "0209",
                        "0210",
                        "0211",
                        "0212",
                        "0213",
                        "0214",
                        "0215",
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
                }
            ],
            "yAxis": [
                {
                    "type": "value",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": true,
                        "onZero": true,
                        "onZeroAxisIndex": 0,
                        "lineStyle": {
                            "show": true,
                            "width": 2,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#fff"
                        }
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 15,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 20
                    },
                    "inverse": false,
                    "position": "right",
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5404\u65f6\u6bb5\u603b\u4eba\u6d41\u91cf\u5bf9\u6bd4",
                    "left": "center",
                    "top": "5%",
                    "padding": 5,
                    "itemGap": 10,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 16
                    }
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
            },
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u4eba\u6d41\u91cf\u6307\u6570"
                    ],
                    "selected": {
                        "\u4eba\u6d41\u91cf\u6307\u6570": true
                    },
                    "show": false,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "line",
                    "name": "\u4eba\u6d41\u91cf\u6307\u6570",
                    "connectNulls": false,
                    "symbol": "circle",
                    "symbolSize": 6,
                    "showSymbol": true,
                    "smooth": true,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "0117",
                            8.7
                        ],
                        [
                            "0118",
                            7.59
                        ],
                        [
                            "0119",
                            7.63
                        ],
                        [
                            "0120",
                            7.72
                        ],
                        [
                            "0121",
                            7.02
                        ],
                        [
                            "0122",
                            6.27
                        ],
                        [
                            "0123",
                            5.22
                        ],
                        [
                            "0124",
                            3.42
                        ],
                        [
                            "0125",
                            2.73
                        ],
                        [
                            "0126",
                            2.78
                        ],
                        [
                            "0127",
                            2.79
                        ],
                        [
                            "0128",
                            2.74
                        ],
                        [
                            "0129",
                            2.75
                        ],
                        [
                            "0130",
                            2.72
                        ],
                        [
                            "0131",
                            2.85
                        ],
                        [
                            "0201",
                            2.78
                        ],
                        [
                            "0202",
                            2.73
                        ],
                        [
                            "0203",
                            3.04
                        ],
                        [
                            "0204",
                            2.9
                        ],
                        [
                            "0205",
                            2.85
                        ],
                        [
                            "0206",
                            2.77
                        ],
                        [
                            "0207",
                            2.82
                        ],
                        [
                            "0208",
                            2.61
                        ],
                        [
                            "0209",
                            2.55
                        ],
                        [
                            "0210",
                            3.15
                        ],
                        [
                            "0211",
                            3.07
                        ],
                        [
                            "0212",
                            3.06
                        ],
                        [
                            "0213",
                            3.09
                        ],
                        [
                            "0214",
                            2.91
                        ],
                        [
                            "0215",
                            2.6
                        ],
                        [
                            "0216",
                            2.94
                        ],
                        [
                            "0217",
                            2.88
                        ],
                        [
                            "0218",
                            2.94
                        ],
                        [
                            "0219",
                            2.94
                        ],
                        [
                            "0220",
                            2.99
                        ],
                        [
                            "0221",
                            2.95
                        ],
                        [
                            "0222",
                            2.89
                        ],
                        [
                            "0223",
                            2.94
                        ],
                        [
                            "0224",
                            2.98
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": true,
                        "position": "top",
                        "color": "white",
                        "margin": 8
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid",
                        "color": "#fff"
                    },
                    "areaStyle": {
                        "opacity": 1,
                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#93edc7'}, {offset: 1, color: '#1cd8d2'}],false)
                    },
                    "tooltip": {
                        "show": false,
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
                    },
                    "zlevel": 0,
                    "z": 0
                }
            ],
            "xAxis": [
                {
                    "type": "category",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": false,
                        "onZero": true,
                        "onZeroAxisIndex": 0
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 25,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 30
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "boundaryGap": false,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "data": [
                        "0117",
                        "0118",
                        "0119",
                        "0120",
                        "0121",
                        "0122",
                        "0123",
                        "0124",
                        "0125",
                        "0126",
                        "0127",
                        "0128",
                        "0129",
                        "0130",
                        "0131",
                        "0201",
                        "0202",
                        "0203",
                        "0204",
                        "0205",
                        "0206",
                        "0207",
                        "0208",
                        "0209",
                        "0210",
                        "0211",
                        "0212",
                        "0213",
                        "0214",
                        "0215",
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
                }
            ],
            "yAxis": [
                {
                    "type": "value",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": true,
                        "onZero": true,
                        "onZeroAxisIndex": 0,
                        "lineStyle": {
                            "show": true,
                            "width": 2,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#fff"
                        }
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 15,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 20
                    },
                    "inverse": false,
                    "position": "right",
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5404\u65f6\u6bb5\u603b\u4eba\u6d41\u91cf\u5bf9\u6bd4",
                    "left": "center",
                    "top": "5%",
                    "padding": 5,
                    "itemGap": 10,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 16
                    }
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
            },
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u4eba\u6d41\u91cf\u6307\u6570"
                    ],
                    "selected": {
                        "\u4eba\u6d41\u91cf\u6307\u6570": true
                    },
                    "show": false,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "line",
                    "name": "\u4eba\u6d41\u91cf\u6307\u6570",
                    "connectNulls": false,
                    "symbol": "circle",
                    "symbolSize": 6,
                    "showSymbol": true,
                    "smooth": true,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "0117",
                            9.03
                        ],
                        [
                            "0118",
                            8.28
                        ],
                        [
                            "0119",
                            8.07
                        ],
                        [
                            "0120",
                            7.97
                        ],
                        [
                            "0121",
                            7.26
                        ],
                        [
                            "0122",
                            6.47
                        ],
                        [
                            "0123",
                            5.36
                        ],
                        [
                            "0124",
                            3.44
                        ],
                        [
                            "0125",
                            2.91
                        ],
                        [
                            "0126",
                            2.86
                        ],
                        [
                            "0127",
                            2.87
                        ],
                        [
                            "0128",
                            2.81
                        ],
                        [
                            "0129",
                            2.83
                        ],
                        [
                            "0130",
                            2.8
                        ],
                        [
                            "0131",
                            2.86
                        ],
                        [
                            "0201",
                            2.82
                        ],
                        [
                            "0202",
                            2.78
                        ],
                        [
                            "0203",
                            3.02
                        ],
                        [
                            "0204",
                            2.89
                        ],
                        [
                            "0205",
                            2.84
                        ],
                        [
                            "0206",
                            2.77
                        ],
                        [
                            "0207",
                            2.84
                        ],
                        [
                            "0208",
                            2.67
                        ],
                        [
                            "0209",
                            2.62
                        ],
                        [
                            "0210",
                            3.13
                        ],
                        [
                            "0211",
                            3.03
                        ],
                        [
                            "0212",
                            3.02
                        ],
                        [
                            "0213",
                            3.1
                        ],
                        [
                            "0214",
                            2.89
                        ],
                        [
                            "0215",
                            2.67
                        ],
                        [
                            "0216",
                            2.96
                        ],
                        [
                            "0217",
                            2.89
                        ],
                        [
                            "0218",
                            2.95
                        ],
                        [
                            "0219",
                            2.94
                        ],
                        [
                            "0220",
                            2.99
                        ],
                        [
                            "0221",
                            2.94
                        ],
                        [
                            "0222",
                            2.91
                        ],
                        [
                            "0223",
                            2.96
                        ],
                        [
                            "0224",
                            2.99
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": true,
                        "position": "top",
                        "color": "white",
                        "margin": 8
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid",
                        "color": "#fff"
                    },
                    "areaStyle": {
                        "opacity": 1,
                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#93edc7'}, {offset: 1, color: '#1cd8d2'}],false)
                    },
                    "tooltip": {
                        "show": false,
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
                    },
                    "zlevel": 0,
                    "z": 0
                }
            ],
            "xAxis": [
                {
                    "type": "category",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": false,
                        "onZero": true,
                        "onZeroAxisIndex": 0
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 25,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 30
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "boundaryGap": false,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "data": [
                        "0117",
                        "0118",
                        "0119",
                        "0120",
                        "0121",
                        "0122",
                        "0123",
                        "0124",
                        "0125",
                        "0126",
                        "0127",
                        "0128",
                        "0129",
                        "0130",
                        "0131",
                        "0201",
                        "0202",
                        "0203",
                        "0204",
                        "0205",
                        "0206",
                        "0207",
                        "0208",
                        "0209",
                        "0210",
                        "0211",
                        "0212",
                        "0213",
                        "0214",
                        "0215",
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
                }
            ],
            "yAxis": [
                {
                    "type": "value",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": true,
                        "onZero": true,
                        "onZeroAxisIndex": 0,
                        "lineStyle": {
                            "show": true,
                            "width": 2,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#fff"
                        }
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 15,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 20
                    },
                    "inverse": false,
                    "position": "right",
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5404\u65f6\u6bb5\u603b\u4eba\u6d41\u91cf\u5bf9\u6bd4",
                    "left": "center",
                    "top": "5%",
                    "padding": 5,
                    "itemGap": 10,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 16
                    }
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
            },
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u4eba\u6d41\u91cf\u6307\u6570"
                    ],
                    "selected": {
                        "\u4eba\u6d41\u91cf\u6307\u6570": true
                    },
                    "show": false,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "line",
                    "name": "\u4eba\u6d41\u91cf\u6307\u6570",
                    "connectNulls": false,
                    "symbol": "circle",
                    "symbolSize": 6,
                    "showSymbol": true,
                    "smooth": true,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "0117",
                            9.38
                        ],
                        [
                            "0118",
                            8.62
                        ],
                        [
                            "0119",
                            8.43
                        ],
                        [
                            "0120",
                            8.28
                        ],
                        [
                            "0121",
                            7.46
                        ],
                        [
                            "0122",
                            6.57
                        ],
                        [
                            "0123",
                            5.38
                        ],
                        [
                            "0124",
                            3.36
                        ],
                        [
                            "0125",
                            2.93
                        ],
                        [
                            "0126",
                            2.84
                        ],
                        [
                            "0127",
                            2.85
                        ],
                        [
                            "0128",
                            2.78
                        ],
                        [
                            "0129",
                            2.8
                        ],
                        [
                            "0130",
                            2.77
                        ],
                        [
                            "0131",
                            2.82
                        ],
                        [
                            "0201",
                            2.77
                        ],
                        [
                            "0202",
                            2.75
                        ],
                        [
                            "0203",
                            2.97
                        ],
                        [
                            "0204",
                            2.87
                        ],
                        [
                            "0205",
                            2.79
                        ],
                        [
                            "0206",
                            2.72
                        ],
                        [
                            "0207",
                            2.77
                        ],
                        [
                            "0208",
                            2.6
                        ],
                        [
                            "0209",
                            2.62
                        ],
                        [
                            "0210",
                            3.12
                        ],
                        [
                            "0211",
                            2.98
                        ],
                        [
                            "0212",
                            2.96
                        ],
                        [
                            "0213",
                            3.07
                        ],
                        [
                            "0214",
                            2.83
                        ],
                        [
                            "0215",
                            2.64
                        ],
                        [
                            "0216",
                            2.94
                        ],
                        [
                            "0217",
                            2.87
                        ],
                        [
                            "0218",
                            2.92
                        ],
                        [
                            "0219",
                            2.91
                        ],
                        [
                            "0220",
                            2.97
                        ],
                        [
                            "0221",
                            2.91
                        ],
                        [
                            "0222",
                            2.88
                        ],
                        [
                            "0223",
                            2.94
                        ],
                        [
                            "0224",
                            2.97
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": true,
                        "position": "top",
                        "color": "white",
                        "margin": 8
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid",
                        "color": "#fff"
                    },
                    "areaStyle": {
                        "opacity": 1,
                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#93edc7'}, {offset: 1, color: '#1cd8d2'}],false)
                    },
                    "tooltip": {
                        "show": false,
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
                    },
                    "zlevel": 0,
                    "z": 0
                }
            ],
            "xAxis": [
                {
                    "type": "category",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": false,
                        "onZero": true,
                        "onZeroAxisIndex": 0
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 25,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 30
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "boundaryGap": false,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "data": [
                        "0117",
                        "0118",
                        "0119",
                        "0120",
                        "0121",
                        "0122",
                        "0123",
                        "0124",
                        "0125",
                        "0126",
                        "0127",
                        "0128",
                        "0129",
                        "0130",
                        "0131",
                        "0201",
                        "0202",
                        "0203",
                        "0204",
                        "0205",
                        "0206",
                        "0207",
                        "0208",
                        "0209",
                        "0210",
                        "0211",
                        "0212",
                        "0213",
                        "0214",
                        "0215",
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
                }
            ],
            "yAxis": [
                {
                    "type": "value",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": true,
                        "onZero": true,
                        "onZeroAxisIndex": 0,
                        "lineStyle": {
                            "show": true,
                            "width": 2,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#fff"
                        }
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 15,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 20
                    },
                    "inverse": false,
                    "position": "right",
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5404\u65f6\u6bb5\u603b\u4eba\u6d41\u91cf\u5bf9\u6bd4",
                    "left": "center",
                    "top": "5%",
                    "padding": 5,
                    "itemGap": 10,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 16
                    }
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
            },
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u4eba\u6d41\u91cf\u6307\u6570"
                    ],
                    "selected": {
                        "\u4eba\u6d41\u91cf\u6307\u6570": true
                    },
                    "show": false,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "line",
                    "name": "\u4eba\u6d41\u91cf\u6307\u6570",
                    "connectNulls": false,
                    "symbol": "circle",
                    "symbolSize": 6,
                    "showSymbol": true,
                    "smooth": true,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "0117",
                            9.6
                        ],
                        [
                            "0118",
                            8.92
                        ],
                        [
                            "0119",
                            8.67
                        ],
                        [
                            "0120",
                            8.49
                        ],
                        [
                            "0121",
                            7.68
                        ],
                        [
                            "0122",
                            6.74
                        ],
                        [
                            "0123",
                            5.55
                        ],
                        [
                            "0124",
                            3.34
                        ],
                        [
                            "0125",
                            3.01
                        ],
                        [
                            "0126",
                            2.9
                        ],
                        [
                            "0127",
                            2.89
                        ],
                        [
                            "0128",
                            2.81
                        ],
                        [
                            "0129",
                            2.88
                        ],
                        [
                            "0130",
                            2.79
                        ],
                        [
                            "0131",
                            2.86
                        ],
                        [
                            "0201",
                            2.85
                        ],
                        [
                            "0202",
                            2.75
                        ],
                        [
                            "0203",
                            3.02
                        ],
                        [
                            "0204",
                            2.91
                        ],
                        [
                            "0205",
                            2.85
                        ],
                        [
                            "0206",
                            2.75
                        ],
                        [
                            "0207",
                            2.86
                        ],
                        [
                            "0208",
                            2.65
                        ],
                        [
                            "0209",
                            2.65
                        ],
                        [
                            "0210",
                            3.2
                        ],
                        [
                            "0211",
                            3.08
                        ],
                        [
                            "0212",
                            3.02
                        ],
                        [
                            "0213",
                            3.09
                        ],
                        [
                            "0214",
                            2.88
                        ],
                        [
                            "0215",
                            2.68
                        ],
                        [
                            "0216",
                            2.98
                        ],
                        [
                            "0217",
                            2.91
                        ],
                        [
                            "0218",
                            2.97
                        ],
                        [
                            "0219",
                            2.96
                        ],
                        [
                            "0220",
                            3.02
                        ],
                        [
                            "0221",
                            2.96
                        ],
                        [
                            "0222",
                            2.93
                        ],
                        [
                            "0223",
                            2.98
                        ],
                        [
                            "0224",
                            3.01
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": true,
                        "position": "top",
                        "color": "white",
                        "margin": 8
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid",
                        "color": "#fff"
                    },
                    "areaStyle": {
                        "opacity": 1,
                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#93edc7'}, {offset: 1, color: '#1cd8d2'}],false)
                    },
                    "tooltip": {
                        "show": false,
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
                    },
                    "zlevel": 0,
                    "z": 0
                }
            ],
            "xAxis": [
                {
                    "type": "category",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": false,
                        "onZero": true,
                        "onZeroAxisIndex": 0
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 25,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 30
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "boundaryGap": false,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "data": [
                        "0117",
                        "0118",
                        "0119",
                        "0120",
                        "0121",
                        "0122",
                        "0123",
                        "0124",
                        "0125",
                        "0126",
                        "0127",
                        "0128",
                        "0129",
                        "0130",
                        "0131",
                        "0201",
                        "0202",
                        "0203",
                        "0204",
                        "0205",
                        "0206",
                        "0207",
                        "0208",
                        "0209",
                        "0210",
                        "0211",
                        "0212",
                        "0213",
                        "0214",
                        "0215",
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
                }
            ],
            "yAxis": [
                {
                    "type": "value",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": true,
                        "onZero": true,
                        "onZeroAxisIndex": 0,
                        "lineStyle": {
                            "show": true,
                            "width": 2,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#fff"
                        }
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 15,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 20
                    },
                    "inverse": false,
                    "position": "right",
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5404\u65f6\u6bb5\u603b\u4eba\u6d41\u91cf\u5bf9\u6bd4",
                    "left": "center",
                    "top": "5%",
                    "padding": 5,
                    "itemGap": 10,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 16
                    }
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
            },
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u4eba\u6d41\u91cf\u6307\u6570"
                    ],
                    "selected": {
                        "\u4eba\u6d41\u91cf\u6307\u6570": true
                    },
                    "show": false,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "line",
                    "name": "\u4eba\u6d41\u91cf\u6307\u6570",
                    "connectNulls": false,
                    "symbol": "circle",
                    "symbolSize": 6,
                    "showSymbol": true,
                    "smooth": true,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "0117",
                            9.64
                        ],
                        [
                            "0118",
                            9.28
                        ],
                        [
                            "0119",
                            8.83
                        ],
                        [
                            "0120",
                            8.64
                        ],
                        [
                            "0121",
                            7.81
                        ],
                        [
                            "0122",
                            6.81
                        ],
                        [
                            "0123",
                            5.62
                        ],
                        [
                            "0124",
                            3.43
                        ],
                        [
                            "0125",
                            3.17
                        ],
                        [
                            "0126",
                            3.01
                        ],
                        [
                            "0127",
                            2.99
                        ],
                        [
                            "0128",
                            2.9
                        ],
                        [
                            "0129",
                            2.98
                        ],
                        [
                            "0130",
                            2.93
                        ],
                        [
                            "0131",
                            2.97
                        ],
                        [
                            "0201",
                            2.98
                        ],
                        [
                            "0202",
                            2.8
                        ],
                        [
                            "0203",
                            3.14
                        ],
                        [
                            "0204",
                            3.01
                        ],
                        [
                            "0205",
                            2.92
                        ],
                        [
                            "0206",
                            2.82
                        ],
                        [
                            "0207",
                            2.96
                        ],
                        [
                            "0208",
                            2.75
                        ],
                        [
                            "0209",
                            2.75
                        ],
                        [
                            "0210",
                            3.26
                        ],
                        [
                            "0211",
                            3.18
                        ],
                        [
                            "0212",
                            3.14
                        ],
                        [
                            "0213",
                            3.17
                        ],
                        [
                            "0214",
                            3.0
                        ],
                        [
                            "0215",
                            2.77
                        ],
                        [
                            "0216",
                            3.09
                        ],
                        [
                            "0217",
                            3.02
                        ],
                        [
                            "0218",
                            3.08
                        ],
                        [
                            "0219",
                            3.06
                        ],
                        [
                            "0220",
                            3.12
                        ],
                        [
                            "0221",
                            3.07
                        ],
                        [
                            "0222",
                            3.04
                        ],
                        [
                            "0223",
                            3.09
                        ],
                        [
                            "0224",
                            3.12
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": true,
                        "position": "top",
                        "color": "white",
                        "margin": 8
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid",
                        "color": "#fff"
                    },
                    "areaStyle": {
                        "opacity": 1,
                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#93edc7'}, {offset: 1, color: '#1cd8d2'}],false)
                    },
                    "tooltip": {
                        "show": false,
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
                    },
                    "zlevel": 0,
                    "z": 0
                }
            ],
            "xAxis": [
                {
                    "type": "category",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": false,
                        "onZero": true,
                        "onZeroAxisIndex": 0
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 25,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 30
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "boundaryGap": false,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "data": [
                        "0117",
                        "0118",
                        "0119",
                        "0120",
                        "0121",
                        "0122",
                        "0123",
                        "0124",
                        "0125",
                        "0126",
                        "0127",
                        "0128",
                        "0129",
                        "0130",
                        "0131",
                        "0201",
                        "0202",
                        "0203",
                        "0204",
                        "0205",
                        "0206",
                        "0207",
                        "0208",
                        "0209",
                        "0210",
                        "0211",
                        "0212",
                        "0213",
                        "0214",
                        "0215",
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
                }
            ],
            "yAxis": [
                {
                    "type": "value",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": true,
                        "onZero": true,
                        "onZeroAxisIndex": 0,
                        "lineStyle": {
                            "show": true,
                            "width": 2,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#fff"
                        }
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 15,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 20
                    },
                    "inverse": false,
                    "position": "right",
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5404\u65f6\u6bb5\u603b\u4eba\u6d41\u91cf\u5bf9\u6bd4",
                    "left": "center",
                    "top": "5%",
                    "padding": 5,
                    "itemGap": 10,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 16
                    }
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
            },
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u4eba\u6d41\u91cf\u6307\u6570"
                    ],
                    "selected": {
                        "\u4eba\u6d41\u91cf\u6307\u6570": true
                    },
                    "show": false,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "line",
                    "name": "\u4eba\u6d41\u91cf\u6307\u6570",
                    "connectNulls": false,
                    "symbol": "circle",
                    "symbolSize": 6,
                    "showSymbol": true,
                    "smooth": true,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "0117",
                            9.45
                        ],
                        [
                            "0118",
                            9.3
                        ],
                        [
                            "0119",
                            8.68
                        ],
                        [
                            "0120",
                            8.61
                        ],
                        [
                            "0121",
                            7.65
                        ],
                        [
                            "0122",
                            6.7
                        ],
                        [
                            "0123",
                            5.41
                        ],
                        [
                            "0124",
                            3.36
                        ],
                        [
                            "0125",
                            3.2
                        ],
                        [
                            "0126",
                            3.1
                        ],
                        [
                            "0127",
                            3.08
                        ],
                        [
                            "0128",
                            2.96
                        ],
                        [
                            "0129",
                            3.14
                        ],
                        [
                            "0130",
                            3.0
                        ],
                        [
                            "0131",
                            3.05
                        ],
                        [
                            "0201",
                            3.03
                        ],
                        [
                            "0202",
                            2.87
                        ],
                        [
                            "0203",
                            3.11
                        ],
                        [
                            "0204",
                            3.04
                        ],
                        [
                            "0205",
                            2.89
                        ],
                        [
                            "0206",
                            2.85
                        ],
                        [
                            "0207",
                            2.98
                        ],
                        [
                            "0208",
                            2.8
                        ],
                        [
                            "0209",
                            2.84
                        ],
                        [
                            "0210",
                            3.28
                        ],
                        [
                            "0211",
                            3.19
                        ],
                        [
                            "0212",
                            3.22
                        ],
                        [
                            "0213",
                            3.23
                        ],
                        [
                            "0214",
                            3.02
                        ],
                        [
                            "0215",
                            2.86
                        ],
                        [
                            "0216",
                            3.13
                        ],
                        [
                            "0217",
                            3.04
                        ],
                        [
                            "0218",
                            3.12
                        ],
                        [
                            "0219",
                            3.1
                        ],
                        [
                            "0220",
                            3.15
                        ],
                        [
                            "0221",
                            3.1
                        ],
                        [
                            "0222",
                            3.08
                        ],
                        [
                            "0223",
                            3.13
                        ],
                        [
                            "0224",
                            3.15
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": true,
                        "position": "top",
                        "color": "white",
                        "margin": 8
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid",
                        "color": "#fff"
                    },
                    "areaStyle": {
                        "opacity": 1,
                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#93edc7'}, {offset: 1, color: '#1cd8d2'}],false)
                    },
                    "tooltip": {
                        "show": false,
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
                    },
                    "zlevel": 0,
                    "z": 0
                }
            ],
            "xAxis": [
                {
                    "type": "category",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": false,
                        "onZero": true,
                        "onZeroAxisIndex": 0
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 25,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 30
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "boundaryGap": false,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "data": [
                        "0117",
                        "0118",
                        "0119",
                        "0120",
                        "0121",
                        "0122",
                        "0123",
                        "0124",
                        "0125",
                        "0126",
                        "0127",
                        "0128",
                        "0129",
                        "0130",
                        "0131",
                        "0201",
                        "0202",
                        "0203",
                        "0204",
                        "0205",
                        "0206",
                        "0207",
                        "0208",
                        "0209",
                        "0210",
                        "0211",
                        "0212",
                        "0213",
                        "0214",
                        "0215",
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
                }
            ],
            "yAxis": [
                {
                    "type": "value",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": true,
                        "onZero": true,
                        "onZeroAxisIndex": 0,
                        "lineStyle": {
                            "show": true,
                            "width": 2,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#fff"
                        }
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 15,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 20
                    },
                    "inverse": false,
                    "position": "right",
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5404\u65f6\u6bb5\u603b\u4eba\u6d41\u91cf\u5bf9\u6bd4",
                    "left": "center",
                    "top": "5%",
                    "padding": 5,
                    "itemGap": 10,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 16
                    }
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
            },
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u4eba\u6d41\u91cf\u6307\u6570"
                    ],
                    "selected": {
                        "\u4eba\u6d41\u91cf\u6307\u6570": true
                    },
                    "show": false,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "line",
                    "name": "\u4eba\u6d41\u91cf\u6307\u6570",
                    "connectNulls": false,
                    "symbol": "circle",
                    "symbolSize": 6,
                    "showSymbol": true,
                    "smooth": true,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "0117",
                            9.35
                        ],
                        [
                            "0118",
                            9.08
                        ],
                        [
                            "0119",
                            8.48
                        ],
                        [
                            "0120",
                            8.11
                        ],
                        [
                            "0121",
                            7.37
                        ],
                        [
                            "0122",
                            6.5
                        ],
                        [
                            "0123",
                            5.16
                        ],
                        [
                            "0124",
                            3.12
                        ],
                        [
                            "0125",
                            3.09
                        ],
                        [
                            "0126",
                            3.08
                        ],
                        [
                            "0127",
                            2.99
                        ],
                        [
                            "0128",
                            2.93
                        ],
                        [
                            "0129",
                            3.08
                        ],
                        [
                            "0130",
                            2.95
                        ],
                        [
                            "0131",
                            3.03
                        ],
                        [
                            "0201",
                            2.96
                        ],
                        [
                            "0202",
                            2.85
                        ],
                        [
                            "0203",
                            3.09
                        ],
                        [
                            "0204",
                            3.0
                        ],
                        [
                            "0205",
                            2.86
                        ],
                        [
                            "0206",
                            2.89
                        ],
                        [
                            "0207",
                            2.99
                        ],
                        [
                            "0208",
                            2.81
                        ],
                        [
                            "0209",
                            2.83
                        ],
                        [
                            "0210",
                            3.3
                        ],
                        [
                            "0211",
                            3.16
                        ],
                        [
                            "0212",
                            3.2
                        ],
                        [
                            "0213",
                            3.21
                        ],
                        [
                            "0214",
                            3.09
                        ],
                        [
                            "0215",
                            2.88
                        ],
                        [
                            "0216",
                            3.12
                        ],
                        [
                            "0217",
                            3.04
                        ],
                        [
                            "0218",
                            3.11
                        ],
                        [
                            "0219",
                            3.09
                        ],
                        [
                            "0220",
                            3.14
                        ],
                        [
                            "0221",
                            3.1
                        ],
                        [
                            "0222",
                            3.08
                        ],
                        [
                            "0223",
                            3.12
                        ],
                        [
                            "0224",
                            3.15
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": true,
                        "position": "top",
                        "color": "white",
                        "margin": 8
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid",
                        "color": "#fff"
                    },
                    "areaStyle": {
                        "opacity": 1,
                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#93edc7'}, {offset: 1, color: '#1cd8d2'}],false)
                    },
                    "tooltip": {
                        "show": false,
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
                    },
                    "zlevel": 0,
                    "z": 0
                }
            ],
            "xAxis": [
                {
                    "type": "category",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": false,
                        "onZero": true,
                        "onZeroAxisIndex": 0
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 25,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 30
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "boundaryGap": false,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "data": [
                        "0117",
                        "0118",
                        "0119",
                        "0120",
                        "0121",
                        "0122",
                        "0123",
                        "0124",
                        "0125",
                        "0126",
                        "0127",
                        "0128",
                        "0129",
                        "0130",
                        "0131",
                        "0201",
                        "0202",
                        "0203",
                        "0204",
                        "0205",
                        "0206",
                        "0207",
                        "0208",
                        "0209",
                        "0210",
                        "0211",
                        "0212",
                        "0213",
                        "0214",
                        "0215",
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
                }
            ],
            "yAxis": [
                {
                    "type": "value",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": true,
                        "onZero": true,
                        "onZeroAxisIndex": 0,
                        "lineStyle": {
                            "show": true,
                            "width": 2,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#fff"
                        }
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 15,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 20
                    },
                    "inverse": false,
                    "position": "right",
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5404\u65f6\u6bb5\u603b\u4eba\u6d41\u91cf\u5bf9\u6bd4",
                    "left": "center",
                    "top": "5%",
                    "padding": 5,
                    "itemGap": 10,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 16
                    }
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
            },
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u4eba\u6d41\u91cf\u6307\u6570"
                    ],
                    "selected": {
                        "\u4eba\u6d41\u91cf\u6307\u6570": true
                    },
                    "show": false,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "line",
                    "name": "\u4eba\u6d41\u91cf\u6307\u6570",
                    "connectNulls": false,
                    "symbol": "circle",
                    "symbolSize": 6,
                    "showSymbol": true,
                    "smooth": true,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "0117",
                            9.14
                        ],
                        [
                            "0118",
                            8.77
                        ],
                        [
                            "0119",
                            8.27
                        ],
                        [
                            "0120",
                            7.88
                        ],
                        [
                            "0121",
                            7.13
                        ],
                        [
                            "0122",
                            6.08
                        ],
                        [
                            "0123",
                            4.65
                        ],
                        [
                            "0124",
                            2.77
                        ],
                        [
                            "0125",
                            2.83
                        ],
                        [
                            "0126",
                            2.82
                        ],
                        [
                            "0127",
                            2.74
                        ],
                        [
                            "0128",
                            2.72
                        ],
                        [
                            "0129",
                            2.77
                        ],
                        [
                            "0130",
                            2.74
                        ],
                        [
                            "0131",
                            2.78
                        ],
                        [
                            "0201",
                            2.79
                        ],
                        [
                            "0202",
                            2.69
                        ],
                        [
                            "0203",
                            2.89
                        ],
                        [
                            "0204",
                            2.77
                        ],
                        [
                            "0205",
                            2.62
                        ],
                        [
                            "0206",
                            2.65
                        ],
                        [
                            "0207",
                            2.73
                        ],
                        [
                            "0208",
                            2.55
                        ],
                        [
                            "0209",
                            2.63
                        ],
                        [
                            "0210",
                            3.08
                        ],
                        [
                            "0211",
                            2.96
                        ],
                        [
                            "0212",
                            2.97
                        ],
                        [
                            "0213",
                            2.95
                        ],
                        [
                            "0214",
                            2.91
                        ],
                        [
                            "0215",
                            2.66
                        ],
                        [
                            "0216",
                            2.89
                        ],
                        [
                            "0217",
                            2.83
                        ],
                        [
                            "0218",
                            2.89
                        ],
                        [
                            "0219",
                            2.88
                        ],
                        [
                            "0220",
                            2.92
                        ],
                        [
                            "0221",
                            2.89
                        ],
                        [
                            "0222",
                            2.85
                        ],
                        [
                            "0223",
                            2.9
                        ],
                        [
                            "0224",
                            2.92
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": true,
                        "position": "top",
                        "color": "white",
                        "margin": 8
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid",
                        "color": "#fff"
                    },
                    "areaStyle": {
                        "opacity": 1,
                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#93edc7'}, {offset: 1, color: '#1cd8d2'}],false)
                    },
                    "tooltip": {
                        "show": false,
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
                    },
                    "zlevel": 0,
                    "z": 0
                }
            ],
            "xAxis": [
                {
                    "type": "category",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": false,
                        "onZero": true,
                        "onZeroAxisIndex": 0
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 25,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 30
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "boundaryGap": false,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "data": [
                        "0117",
                        "0118",
                        "0119",
                        "0120",
                        "0121",
                        "0122",
                        "0123",
                        "0124",
                        "0125",
                        "0126",
                        "0127",
                        "0128",
                        "0129",
                        "0130",
                        "0131",
                        "0201",
                        "0202",
                        "0203",
                        "0204",
                        "0205",
                        "0206",
                        "0207",
                        "0208",
                        "0209",
                        "0210",
                        "0211",
                        "0212",
                        "0213",
                        "0214",
                        "0215",
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
                }
            ],
            "yAxis": [
                {
                    "type": "value",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": true,
                        "onZero": true,
                        "onZeroAxisIndex": 0,
                        "lineStyle": {
                            "show": true,
                            "width": 2,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#fff"
                        }
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 15,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 20
                    },
                    "inverse": false,
                    "position": "right",
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5404\u65f6\u6bb5\u603b\u4eba\u6d41\u91cf\u5bf9\u6bd4",
                    "left": "center",
                    "top": "5%",
                    "padding": 5,
                    "itemGap": 10,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 16
                    }
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
            },
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u4eba\u6d41\u91cf\u6307\u6570"
                    ],
                    "selected": {
                        "\u4eba\u6d41\u91cf\u6307\u6570": true
                    },
                    "show": false,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "line",
                    "name": "\u4eba\u6d41\u91cf\u6307\u6570",
                    "connectNulls": false,
                    "symbol": "circle",
                    "symbolSize": 6,
                    "showSymbol": true,
                    "smooth": true,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "0117",
                            8.96
                        ],
                        [
                            "0118",
                            8.12
                        ],
                        [
                            "0119",
                            8.08
                        ],
                        [
                            "0120",
                            7.47
                        ],
                        [
                            "0121",
                            6.75
                        ],
                        [
                            "0122",
                            5.58
                        ],
                        [
                            "0123",
                            4.11
                        ],
                        [
                            "0124",
                            2.26
                        ],
                        [
                            "0125",
                            2.52
                        ],
                        [
                            "0126",
                            2.49
                        ],
                        [
                            "0127",
                            2.4
                        ],
                        [
                            "0128",
                            2.38
                        ],
                        [
                            "0129",
                            2.41
                        ],
                        [
                            "0130",
                            2.36
                        ],
                        [
                            "0131",
                            2.42
                        ],
                        [
                            "0201",
                            2.44
                        ],
                        [
                            "0202",
                            2.37
                        ],
                        [
                            "0203",
                            2.51
                        ],
                        [
                            "0204",
                            2.39
                        ],
                        [
                            "0205",
                            2.33
                        ],
                        [
                            "0206",
                            2.35
                        ],
                        [
                            "0207",
                            2.39
                        ],
                        [
                            "0208",
                            2.28
                        ],
                        [
                            "0209",
                            2.35
                        ],
                        [
                            "0210",
                            2.65
                        ],
                        [
                            "0211",
                            2.6
                        ],
                        [
                            "0212",
                            2.58
                        ],
                        [
                            "0213",
                            2.61
                        ],
                        [
                            "0214",
                            2.55
                        ],
                        [
                            "0215",
                            2.37
                        ],
                        [
                            "0216",
                            2.57
                        ],
                        [
                            "0217",
                            2.48
                        ],
                        [
                            "0218",
                            2.56
                        ],
                        [
                            "0219",
                            2.54
                        ],
                        [
                            "0220",
                            2.57
                        ],
                        [
                            "0221",
                            2.55
                        ],
                        [
                            "0222",
                            2.54
                        ],
                        [
                            "0223",
                            2.56
                        ],
                        [
                            "0224",
                            2.57
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": true,
                        "position": "top",
                        "color": "white",
                        "margin": 8
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid",
                        "color": "#fff"
                    },
                    "areaStyle": {
                        "opacity": 1,
                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#93edc7'}, {offset: 1, color: '#1cd8d2'}],false)
                    },
                    "tooltip": {
                        "show": false,
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
                    },
                    "zlevel": 0,
                    "z": 0
                }
            ],
            "xAxis": [
                {
                    "type": "category",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": false,
                        "onZero": true,
                        "onZeroAxisIndex": 0
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 25,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 30
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "boundaryGap": false,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "data": [
                        "0117",
                        "0118",
                        "0119",
                        "0120",
                        "0121",
                        "0122",
                        "0123",
                        "0124",
                        "0125",
                        "0126",
                        "0127",
                        "0128",
                        "0129",
                        "0130",
                        "0131",
                        "0201",
                        "0202",
                        "0203",
                        "0204",
                        "0205",
                        "0206",
                        "0207",
                        "0208",
                        "0209",
                        "0210",
                        "0211",
                        "0212",
                        "0213",
                        "0214",
                        "0215",
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
                }
            ],
            "yAxis": [
                {
                    "type": "value",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": true,
                        "onZero": true,
                        "onZeroAxisIndex": 0,
                        "lineStyle": {
                            "show": true,
                            "width": 2,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#fff"
                        }
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 15,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 20
                    },
                    "inverse": false,
                    "position": "right",
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5404\u65f6\u6bb5\u603b\u4eba\u6d41\u91cf\u5bf9\u6bd4",
                    "left": "center",
                    "top": "5%",
                    "padding": 5,
                    "itemGap": 10,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 16
                    }
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
            },
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u4eba\u6d41\u91cf\u6307\u6570"
                    ],
                    "selected": {
                        "\u4eba\u6d41\u91cf\u6307\u6570": true
                    },
                    "show": false,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "line",
                    "name": "\u4eba\u6d41\u91cf\u6307\u6570",
                    "connectNulls": false,
                    "symbol": "circle",
                    "symbolSize": 6,
                    "showSymbol": true,
                    "smooth": true,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "0117",
                            8.26
                        ],
                        [
                            "0118",
                            7.42
                        ],
                        [
                            "0119",
                            7.32
                        ],
                        [
                            "0120",
                            6.83
                        ],
                        [
                            "0121",
                            6.04
                        ],
                        [
                            "0122",
                            5.02
                        ],
                        [
                            "0123",
                            3.75
                        ],
                        [
                            "0124",
                            2.04
                        ],
                        [
                            "0125",
                            2.39
                        ],
                        [
                            "0126",
                            2.31
                        ],
                        [
                            "0127",
                            2.17
                        ],
                        [
                            "0128",
                            2.15
                        ],
                        [
                            "0129",
                            2.14
                        ],
                        [
                            "0130",
                            2.13
                        ],
                        [
                            "0131",
                            2.16
                        ],
                        [
                            "0201",
                            2.22
                        ],
                        [
                            "0202",
                            2.15
                        ],
                        [
                            "0203",
                            2.21
                        ],
                        [
                            "0204",
                            2.19
                        ],
                        [
                            "0205",
                            2.12
                        ],
                        [
                            "0206",
                            2.16
                        ],
                        [
                            "0207",
                            2.19
                        ],
                        [
                            "0208",
                            2.12
                        ],
                        [
                            "0209",
                            2.2
                        ],
                        [
                            "0210",
                            2.33
                        ],
                        [
                            "0211",
                            2.3
                        ],
                        [
                            "0212",
                            2.3
                        ],
                        [
                            "0213",
                            2.33
                        ],
                        [
                            "0214",
                            2.3
                        ],
                        [
                            "0215",
                            2.17
                        ],
                        [
                            "0216",
                            2.32
                        ],
                        [
                            "0217",
                            2.24
                        ],
                        [
                            "0218",
                            2.32
                        ],
                        [
                            "0219",
                            2.31
                        ],
                        [
                            "0220",
                            2.33
                        ],
                        [
                            "0221",
                            2.3
                        ],
                        [
                            "0222",
                            2.31
                        ],
                        [
                            "0223",
                            2.32
                        ],
                        [
                            "0224",
                            2.32
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": true,
                        "position": "top",
                        "color": "white",
                        "margin": 8
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid",
                        "color": "#fff"
                    },
                    "areaStyle": {
                        "opacity": 1,
                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#93edc7'}, {offset: 1, color: '#1cd8d2'}],false)
                    },
                    "tooltip": {
                        "show": false,
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
                    },
                    "zlevel": 0,
                    "z": 0
                }
            ],
            "xAxis": [
                {
                    "type": "category",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": false,
                        "onZero": true,
                        "onZeroAxisIndex": 0
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 25,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 30
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "boundaryGap": false,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "data": [
                        "0117",
                        "0118",
                        "0119",
                        "0120",
                        "0121",
                        "0122",
                        "0123",
                        "0124",
                        "0125",
                        "0126",
                        "0127",
                        "0128",
                        "0129",
                        "0130",
                        "0131",
                        "0201",
                        "0202",
                        "0203",
                        "0204",
                        "0205",
                        "0206",
                        "0207",
                        "0208",
                        "0209",
                        "0210",
                        "0211",
                        "0212",
                        "0213",
                        "0214",
                        "0215",
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
                }
            ],
            "yAxis": [
                {
                    "type": "value",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": true,
                        "onZero": true,
                        "onZeroAxisIndex": 0,
                        "lineStyle": {
                            "show": true,
                            "width": 2,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#fff"
                        }
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 15,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 20
                    },
                    "inverse": false,
                    "position": "right",
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5404\u65f6\u6bb5\u603b\u4eba\u6d41\u91cf\u5bf9\u6bd4",
                    "left": "center",
                    "top": "5%",
                    "padding": 5,
                    "itemGap": 10,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 16
                    }
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
            },
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u4eba\u6d41\u91cf\u6307\u6570"
                    ],
                    "selected": {
                        "\u4eba\u6d41\u91cf\u6307\u6570": true
                    },
                    "show": false,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "line",
                    "name": "\u4eba\u6d41\u91cf\u6307\u6570",
                    "connectNulls": false,
                    "symbol": "circle",
                    "symbolSize": 6,
                    "showSymbol": true,
                    "smooth": true,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "0117",
                            7.43
                        ],
                        [
                            "0118",
                            6.63
                        ],
                        [
                            "0119",
                            6.43
                        ],
                        [
                            "0120",
                            6.01
                        ],
                        [
                            "0121",
                            5.29
                        ],
                        [
                            "0122",
                            4.42
                        ],
                        [
                            "0123",
                            3.42
                        ],
                        [
                            "0124",
                            1.9
                        ],
                        [
                            "0125",
                            2.19
                        ],
                        [
                            "0126",
                            2.07
                        ],
                        [
                            "0127",
                            1.99
                        ],
                        [
                            "0128",
                            1.96
                        ],
                        [
                            "0129",
                            1.97
                        ],
                        [
                            "0130",
                            1.96
                        ],
                        [
                            "0131",
                            2.05
                        ],
                        [
                            "0201",
                            2.05
                        ],
                        [
                            "0202",
                            2.04
                        ],
                        [
                            "0203",
                            2.03
                        ],
                        [
                            "0204",
                            2.02
                        ],
                        [
                            "0205",
                            1.96
                        ],
                        [
                            "0206",
                            1.97
                        ],
                        [
                            "0207",
                            1.99
                        ],
                        [
                            "0208",
                            1.97
                        ],
                        [
                            "0209",
                            1.99
                        ],
                        [
                            "0210",
                            2.08
                        ],
                        [
                            "0211",
                            2.06
                        ],
                        [
                            "0212",
                            2.06
                        ],
                        [
                            "0213",
                            2.1
                        ],
                        [
                            "0214",
                            2.04
                        ],
                        [
                            "0215",
                            2.01
                        ],
                        [
                            "0216",
                            2.09
                        ],
                        [
                            "0217",
                            2.04
                        ],
                        [
                            "0218",
                            2.08
                        ],
                        [
                            "0219",
                            2.08
                        ],
                        [
                            "0220",
                            2.1
                        ],
                        [
                            "0221",
                            2.06
                        ],
                        [
                            "0222",
                            2.08
                        ],
                        [
                            "0223",
                            2.08
                        ],
                        [
                            "0224",
                            2.08
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": true,
                        "position": "top",
                        "color": "white",
                        "margin": 8
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid",
                        "color": "#fff"
                    },
                    "areaStyle": {
                        "opacity": 1,
                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#93edc7'}, {offset: 1, color: '#1cd8d2'}],false)
                    },
                    "tooltip": {
                        "show": false,
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
                    },
                    "zlevel": 0,
                    "z": 0
                }
            ],
            "xAxis": [
                {
                    "type": "category",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": false,
                        "onZero": true,
                        "onZeroAxisIndex": 0
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 25,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 30
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "boundaryGap": false,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "data": [
                        "0117",
                        "0118",
                        "0119",
                        "0120",
                        "0121",
                        "0122",
                        "0123",
                        "0124",
                        "0125",
                        "0126",
                        "0127",
                        "0128",
                        "0129",
                        "0130",
                        "0131",
                        "0201",
                        "0202",
                        "0203",
                        "0204",
                        "0205",
                        "0206",
                        "0207",
                        "0208",
                        "0209",
                        "0210",
                        "0211",
                        "0212",
                        "0213",
                        "0214",
                        "0215",
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
                }
            ],
            "yAxis": [
                {
                    "type": "value",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": true,
                        "onZero": true,
                        "onZeroAxisIndex": 0,
                        "lineStyle": {
                            "show": true,
                            "width": 2,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#fff"
                        }
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 15,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 20
                    },
                    "inverse": false,
                    "position": "right",
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5404\u65f6\u6bb5\u603b\u4eba\u6d41\u91cf\u5bf9\u6bd4",
                    "left": "center",
                    "top": "5%",
                    "padding": 5,
                    "itemGap": 10,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 16
                    }
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
            },
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u4eba\u6d41\u91cf\u6307\u6570"
                    ],
                    "selected": {
                        "\u4eba\u6d41\u91cf\u6307\u6570": true
                    },
                    "show": false,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "line",
                    "name": "\u4eba\u6d41\u91cf\u6307\u6570",
                    "connectNulls": false,
                    "symbol": "circle",
                    "symbolSize": 6,
                    "showSymbol": true,
                    "smooth": true,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "0117",
                            6.23
                        ],
                        [
                            "0118",
                            5.5
                        ],
                        [
                            "0119",
                            5.38
                        ],
                        [
                            "0120",
                            4.92
                        ],
                        [
                            "0121",
                            4.38
                        ],
                        [
                            "0122",
                            3.65
                        ],
                        [
                            "0123",
                            2.88
                        ],
                        [
                            "0124",
                            1.79
                        ],
                        [
                            "0125",
                            1.93
                        ],
                        [
                            "0126",
                            1.86
                        ],
                        [
                            "0127",
                            1.81
                        ],
                        [
                            "0128",
                            1.77
                        ],
                        [
                            "0129",
                            1.81
                        ],
                        [
                            "0130",
                            1.82
                        ],
                        [
                            "0131",
                            1.87
                        ],
                        [
                            "0201",
                            1.89
                        ],
                        [
                            "0202",
                            1.86
                        ],
                        [
                            "0203",
                            1.89
                        ],
                        [
                            "0204",
                            1.85
                        ],
                        [
                            "0205",
                            1.86
                        ],
                        [
                            "0206",
                            1.87
                        ],
                        [
                            "0207",
                            1.87
                        ],
                        [
                            "0208",
                            1.84
                        ],
                        [
                            "0209",
                            1.91
                        ],
                        [
                            "0210",
                            1.94
                        ],
                        [
                            "0211",
                            1.9
                        ],
                        [
                            "0212",
                            1.89
                        ],
                        [
                            "0213",
                            1.97
                        ],
                        [
                            "0214",
                            1.89
                        ],
                        [
                            "0215",
                            1.88
                        ],
                        [
                            "0216",
                            1.94
                        ],
                        [
                            "0217",
                            1.9
                        ],
                        [
                            "0218",
                            1.93
                        ],
                        [
                            "0219",
                            1.94
                        ],
                        [
                            "0220",
                            1.95
                        ],
                        [
                            "0221",
                            1.92
                        ],
                        [
                            "0222",
                            1.94
                        ],
                        [
                            "0223",
                            1.94
                        ],
                        [
                            "0224",
                            1.93
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": true,
                        "position": "top",
                        "color": "white",
                        "margin": 8
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid",
                        "color": "#fff"
                    },
                    "areaStyle": {
                        "opacity": 1,
                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#93edc7'}, {offset: 1, color: '#1cd8d2'}],false)
                    },
                    "tooltip": {
                        "show": false,
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
                    },
                    "zlevel": 0,
                    "z": 0
                }
            ],
            "xAxis": [
                {
                    "type": "category",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": false,
                        "onZero": true,
                        "onZeroAxisIndex": 0
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 25,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 30
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "boundaryGap": false,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "data": [
                        "0117",
                        "0118",
                        "0119",
                        "0120",
                        "0121",
                        "0122",
                        "0123",
                        "0124",
                        "0125",
                        "0126",
                        "0127",
                        "0128",
                        "0129",
                        "0130",
                        "0131",
                        "0201",
                        "0202",
                        "0203",
                        "0204",
                        "0205",
                        "0206",
                        "0207",
                        "0208",
                        "0209",
                        "0210",
                        "0211",
                        "0212",
                        "0213",
                        "0214",
                        "0215",
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
                }
            ],
            "yAxis": [
                {
                    "type": "value",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": true,
                        "onZero": true,
                        "onZeroAxisIndex": 0,
                        "lineStyle": {
                            "show": true,
                            "width": 2,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#fff"
                        }
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 15,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 20
                    },
                    "inverse": false,
                    "position": "right",
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5404\u65f6\u6bb5\u603b\u4eba\u6d41\u91cf\u5bf9\u6bd4",
                    "left": "center",
                    "top": "5%",
                    "padding": 5,
                    "itemGap": 10,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 16
                    }
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
            },
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u4eba\u6d41\u91cf\u6307\u6570"
                    ],
                    "selected": {
                        "\u4eba\u6d41\u91cf\u6307\u6570": true
                    },
                    "show": false,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "line",
                    "name": "\u4eba\u6d41\u91cf\u6307\u6570",
                    "connectNulls": false,
                    "symbol": "circle",
                    "symbolSize": 6,
                    "showSymbol": true,
                    "smooth": true,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "0117",
                            4.7
                        ],
                        [
                            "0118",
                            4.03
                        ],
                        [
                            "0119",
                            3.97
                        ],
                        [
                            "0120",
                            3.66
                        ],
                        [
                            "0121",
                            3.28
                        ],
                        [
                            "0122",
                            2.77
                        ],
                        [
                            "0123",
                            2.16
                        ],
                        [
                            "0124",
                            1.66
                        ],
                        [
                            "0125",
                            1.58
                        ],
                        [
                            "0126",
                            1.61
                        ],
                        [
                            "0127",
                            1.58
                        ],
                        [
                            "0128",
                            1.6
                        ],
                        [
                            "0129",
                            1.59
                        ],
                        [
                            "0130",
                            1.62
                        ],
                        [
                            "0131",
                            1.68
                        ],
                        [
                            "0201",
                            1.69
                        ],
                        [
                            "0202",
                            1.67
                        ],
                        [
                            "0203",
                            1.68
                        ],
                        [
                            "0204",
                            1.68
                        ],
                        [
                            "0205",
                            1.71
                        ],
                        [
                            "0206",
                            1.69
                        ],
                        [
                            "0207",
                            1.68
                        ],
                        [
                            "0208",
                            1.68
                        ],
                        [
                            "0209",
                            1.7
                        ],
                        [
                            "0210",
                            1.75
                        ],
                        [
                            "0211",
                            1.71
                        ],
                        [
                            "0212",
                            1.74
                        ],
                        [
                            "0213",
                            1.75
                        ],
                        [
                            "0214",
                            1.77
                        ],
                        [
                            "0215",
                            1.67
                        ],
                        [
                            "0216",
                            1.73
                        ],
                        [
                            "0217",
                            1.72
                        ],
                        [
                            "0218",
                            1.73
                        ],
                        [
                            "0219",
                            1.74
                        ],
                        [
                            "0220",
                            1.74
                        ],
                        [
                            "0221",
                            1.72
                        ],
                        [
                            "0222",
                            1.74
                        ],
                        [
                            "0223",
                            1.73
                        ],
                        [
                            "0224",
                            1.73
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": true,
                        "position": "top",
                        "color": "white",
                        "margin": 8
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid",
                        "color": "#fff"
                    },
                    "areaStyle": {
                        "opacity": 1,
                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#93edc7'}, {offset: 1, color: '#1cd8d2'}],false)
                    },
                    "tooltip": {
                        "show": false,
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
                    },
                    "zlevel": 0,
                    "z": 0
                }
            ],
            "xAxis": [
                {
                    "type": "category",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": false,
                        "onZero": true,
                        "onZeroAxisIndex": 0
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 25,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 30
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "boundaryGap": false,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "data": [
                        "0117",
                        "0118",
                        "0119",
                        "0120",
                        "0121",
                        "0122",
                        "0123",
                        "0124",
                        "0125",
                        "0126",
                        "0127",
                        "0128",
                        "0129",
                        "0130",
                        "0131",
                        "0201",
                        "0202",
                        "0203",
                        "0204",
                        "0205",
                        "0206",
                        "0207",
                        "0208",
                        "0209",
                        "0210",
                        "0211",
                        "0212",
                        "0213",
                        "0214",
                        "0215",
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
                }
            ],
            "yAxis": [
                {
                    "type": "value",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": true,
                        "onZero": true,
                        "onZeroAxisIndex": 0,
                        "lineStyle": {
                            "show": true,
                            "width": 2,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#fff"
                        }
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 15,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 20
                    },
                    "inverse": false,
                    "position": "right",
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5404\u65f6\u6bb5\u603b\u4eba\u6d41\u91cf\u5bf9\u6bd4",
                    "left": "center",
                    "top": "5%",
                    "padding": 5,
                    "itemGap": 10,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 16
                    }
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
            },
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ]
        },
        {
            "legend": [
                {
                    "data": [
                        "\u4eba\u6d41\u91cf\u6307\u6570"
                    ],
                    "selected": {
                        "\u4eba\u6d41\u91cf\u6307\u6570": true
                    },
                    "show": false,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "series": [
                {
                    "type": "line",
                    "name": "\u4eba\u6d41\u91cf\u6307\u6570",
                    "connectNulls": false,
                    "symbol": "circle",
                    "symbolSize": 6,
                    "showSymbol": true,
                    "smooth": true,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "0117",
                            3.31
                        ],
                        [
                            "0118",
                            2.8
                        ],
                        [
                            "0119",
                            2.74
                        ],
                        [
                            "0120",
                            2.58
                        ],
                        [
                            "0121",
                            2.31
                        ],
                        [
                            "0122",
                            1.99
                        ],
                        [
                            "0123",
                            1.53
                        ],
                        [
                            "0124",
                            1.47
                        ],
                        [
                            "0125",
                            1.27
                        ],
                        [
                            "0126",
                            1.29
                        ],
                        [
                            "0127",
                            1.3
                        ],
                        [
                            "0128",
                            1.3
                        ],
                        [
                            "0129",
                            1.31
                        ],
                        [
                            "0130",
                            1.34
                        ],
                        [
                            "0131",
                            1.43
                        ],
                        [
                            "0201",
                            1.38
                        ],
                        [
                            "0202",
                            1.36
                        ],
                        [
                            "0203",
                            1.37
                        ],
                        [
                            "0204",
                            1.34
                        ],
                        [
                            "0205",
                            1.36
                        ],
                        [
                            "0206",
                            1.4
                        ],
                        [
                            "0207",
                            1.37
                        ],
                        [
                            "0208",
                            1.38
                        ],
                        [
                            "0209",
                            1.39
                        ],
                        [
                            "0210",
                            1.39
                        ],
                        [
                            "0211",
                            1.4
                        ],
                        [
                            "0212",
                            1.39
                        ],
                        [
                            "0213",
                            1.42
                        ],
                        [
                            "0214",
                            1.45
                        ],
                        [
                            "0215",
                            1.38
                        ],
                        [
                            "0216",
                            1.41
                        ],
                        [
                            "0217",
                            1.4
                        ],
                        [
                            "0218",
                            1.42
                        ],
                        [
                            "0219",
                            1.43
                        ],
                        [
                            "0220",
                            1.42
                        ],
                        [
                            "0221",
                            1.41
                        ],
                        [
                            "0222",
                            1.43
                        ],
                        [
                            "0223",
                            1.41
                        ],
                        [
                            "0224",
                            1.41
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": true,
                        "position": "top",
                        "color": "white",
                        "margin": 8
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid",
                        "color": "#fff"
                    },
                    "areaStyle": {
                        "opacity": 1,
                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#93edc7'}, {offset: 1, color: '#1cd8d2'}],false)
                    },
                    "tooltip": {
                        "show": false,
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
                    },
                    "zlevel": 0,
                    "z": 0
                }
            ],
            "xAxis": [
                {
                    "type": "category",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": false,
                        "onZero": true,
                        "onZeroAxisIndex": 0
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 25,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 30
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "boundaryGap": false,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "data": [
                        "0117",
                        "0118",
                        "0119",
                        "0120",
                        "0121",
                        "0122",
                        "0123",
                        "0124",
                        "0125",
                        "0126",
                        "0127",
                        "0128",
                        "0129",
                        "0130",
                        "0131",
                        "0201",
                        "0202",
                        "0203",
                        "0204",
                        "0205",
                        "0206",
                        "0207",
                        "0208",
                        "0209",
                        "0210",
                        "0211",
                        "0212",
                        "0213",
                        "0214",
                        "0215",
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
                }
            ],
            "yAxis": [
                {
                    "type": "value",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLine": {
                        "show": true,
                        "onZero": true,
                        "onZeroAxisIndex": 0,
                        "lineStyle": {
                            "show": true,
                            "width": 2,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#fff"
                        }
                    },
                    "axisTick": {
                        "show": true,
                        "alignWithLabel": false,
                        "inside": false,
                        "length": 15,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    },
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "color": "#ffffff63",
                        "margin": 20
                    },
                    "inverse": false,
                    "position": "right",
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid",
                            "color": "#ffffff1f"
                        }
                    }
                }
            ],
            "title": [
                {
                    "text": "\u5404\u65f6\u6bb5\u603b\u4eba\u6d41\u91cf\u5bf9\u6bd4",
                    "left": "center",
                    "top": "5%",
                    "padding": 5,
                    "itemGap": 10,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 16
                    }
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
            },
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ]
        }
    ]
};

ec_left2.setOption(ec_left2_Option);
