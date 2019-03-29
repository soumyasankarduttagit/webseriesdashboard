import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from "fusioncharts"
import Charts from "fusioncharts/fusioncharts.charts";
import widgets from "fusioncharts/fusioncharts.widgets";
import power from "fusioncharts/fusioncharts.powercharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import map from "fusioncharts/fusioncharts.maps";
import world from "fusioncharts/maps/fusioncharts.world";
import overlapp from "fusioncharts/fusioncharts.overlappedcolumn2d";
import ReactFC from 'react-fusioncharts';

ReactFC.fcRoot(FusionCharts, Charts, overlapp, widgets, power, map, world, FusionTheme);
class Chart extends Component {
    constructor(props) {
        super(props);
        this.chart = React.createRef();
        this.state = {
            datasource: {}
        }
        this.initialized = this.initialized.bind(this);
    }

    initialized(chart) {
        FusionCharts.options.creditLabel = false;
       

    }
    componentDidMount(){
        ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.chart.current));
    }
    componentWillUnmount() {
      
       ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.chart.current));
    }

    render() {
        return (
           
            <ReactFC
                {...this.props.datasource}
                fcEvent-initialized={this.initialized} 
                ref={this.chart}
            />

        );
    }
}
export default Chart
