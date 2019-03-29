import React, { Component } from 'react';
import Chart from './Chart';
class Subscribers extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }
    
    render() {
        return (
            <section id="subscribers" className="section is-top-padded">
                <span className="has-image">
                    <span className="badge is-feed">
                        <img src={this.props.icon} alt="" /></span>
                    <h3 className="snapshot image-has-text"> Subscribers</h3>
                    <span className="rect is-status">
                        {this.props.value}
                    </span>
                </span>
                <div className="tile is-ancestor">
                    <div className="tile is-6 is-parent">
                        <div className="tile is-12 is-child box">
                            <p className="sub-caption"> Subscription by Region</p>
                            <Chart datasource={this.props.datasource.subRegion} />
                        </div>
                    </div>
                    <div className="tile is-6 is-vertical is-parent">
                        <div className="tile is-child box">
                            <p className="sub-caption">Global Subscribers</p>
                            <p className="is-smaller">Year Wise(In Million)</p>
                            <Chart datasource={this.props.datasource.subscriptionConfig} />
                        </div>
                        <div className="tile is-child box">
                            <p className="sub-caption">Demographic Subscription</p>
                            <Chart datasource={this.props.datasource.demogrphyconfig} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Subscribers