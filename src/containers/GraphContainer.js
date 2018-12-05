import React, {Component} from 'react'

import PageSection from "../components/shared/PageSection";
// Step 2 - Including the react-fusioncharts component
import ReactFC from 'react-fusioncharts';
// Step 3 - Including the fusioncharts library
import FusionCharts from 'fusioncharts';
// Step 4 - Including the chart type
import Column2D from 'fusioncharts/fusioncharts.charts';
// Step 5 - Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import * as ReactDOM from "react-dom";

// Step 6 - Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

export default class GraphContainer extends Component {

    constructor(props) {
        super(props)

        this.barGraph = GraphContainer.prepareBarGraphConfig();
        this.pieGraph = GraphContainer.preparePieGraphConfig();
    }

    static prepareBarGraphConfig() {
        return {
            type: 'column2d', // The chart type
            width: '700', // Width of the chart
            height: '400', // Height of the chart
            dataFormat: 'json', // Data type
            dataSource: {
                // Chart Configuration
                "chart": {
                    "caption": "Countries With Most Oil Reserves [2017-18]",
                    "subCaption": "In MMbbl = One Million barrels",
                    "xAxisName": "Country",
                    "yAxisName": "Reserves (MMbbl)",
                    "numberSuffix": "K",
                    "theme": "fusion",
                },
                // Chart Data
                "data": []
            }
        }
    }

    static preparePieGraphConfig() {
        return {
            type: 'pie2d', // The chart type
            width: '700', // Width of the chart
            height: '400', // Height of the chart
            dataFormat: 'json', // Data type
            dataSource: {
                "chart": {
                    "caption": "Market Share of Web Servers",
                    "plottooltext": "<b>$percentValue</b> of web servers run on $label servers",
                    "showlegend": "1",
                    "showpercentvalues": "1",
                    "legendposition": "bottom",
                    "usedataplotcolorforlabels": "1",
                    "theme": "fusion"
                },
                "data": []
            }
        }
    }

    static generateGraph(elementId, data) {
        ReactDOM.unmountComponentAtNode(document.getElementById(elementId));
        ReactDOM.render(<ReactFC {...data} />, document.getElementById(elementId));
    }

    componentDidMount() {
        // obtain data from calling some rest service
        this.barGraph.dataSource.data = [
            {
                "label": "Venezuela",
                "value": "290"
            }, {
                "label": "Saudi",
                "value": "260"
            }, {
                "label": "Canada",
                "value": "180"
            }, {
                "label": "Iran",
                "value": "140"
            }, {
                "label": "Russia",
                "value": "115"
            }, {
                "label": "UAE",
                "value": "100"
            }, {
                "label": "US",
                "value": "30"
            }, {
                "label": "China",
                "value": "30"
            }]

        GraphContainer.generateGraph('barGraph', this.barGraph)

        // obtain data from calling some rest service
        this.pieGraph.dataSource.data = [
            {
                "label": "Apache",
                "value": "32647479"
            },
            {
                "label": "Microsoft",
                "value": "22100932"
            },
            {
                "label": "Zeus",
                "value": "14376"
            },
            {
                "label": "Other",
                "value": "18674221"
            }
        ]

        GraphContainer.generateGraph('pieGraph', this.pieGraph)
    }

    render() {
        return (
            <div className="page-container">
                <PageSection background={'blue'}>
                    <div className="graph float-left" id="barGraph"/>
                    <div className="graph" id="pieGraph"/>
                </PageSection>
            </div>
        )
    }
}
