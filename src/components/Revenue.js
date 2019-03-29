import React, { Component } from 'react';
import Chart from './Chart';
class Revenue extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }

    render() {
        return (
            <section id="revenue" className="section">
                <span className="has-image">
                    <span className="badge is-dollar">
                        <img src={this.props.icon} alt="" /></span>  <h3 className="snapshot image-has-text">Revenue</h3>
                    <span className="rect is-status">
                        {this.props.value}
                    </span>
                </span>
                <div className="columns is-multiline is-paddingless">
                    <div className="column is-full-tablet is-full-desktop is-fullhd ">
                        <div className="card">
                            <div className="card-content">
                                <p className="sub-caption">Global Revenue</p>
                                <p className="is-smaller"></p>
                                <Chart datasource={this.props.datasource.revenueChartConfigs} />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Revenue