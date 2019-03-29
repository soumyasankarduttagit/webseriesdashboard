import React, { Component } from 'react';
import Chart from './Chart';
class AwardRating extends Component {
    render() {
        this.props.datasource.imdbRatingConfig.dataSource.data.sort((a,b)=>{return a.value-b.value}).reverse();
        return (
            <section id="awardsRating" className="section">
                <div className="columns is-multiline is-paddingless">
                    <div className="column  is-half-desktop is-half-fullhd">
                        <span className="has-image">
                            <span className="badge is-trophy">
                                <img src={this.props.awardIcon} alt="" /></span>  <h3 className="snapshot image-has-text">Awards</h3>
                            <span className="rect is-status">
                                {this.props.awardValue}
                            </span>
                        </span>
                        <div className="card">
                            <div className="card-content">
                                <p className="sub-caption">Emmy Awards</p>
                                <p className="is-smaller">Nominations vs Wins</p>
                                <Chart datasource={this.props.datasource.awardConfigs} />
                            </div>

                        </div>
                    </div>
                    <div className="column is-half-desktop is-half-fullhd">
                        <span className="has-image">
                            <span className="badge is-star">
                                <img src={this.props.ratingIcon} alt="" /></span>  <h3 className="snapshot image-has-text">Ratings</h3>
                            <span className="rect is-status">
                                {this.props.ratingValue}
                            </span>
                        </span>
                        <div className="card">
                            <div className="card-content">
                                <p className="sub-caption">IMDb Ratings</p>
                                <p className="is-smaller">Genre Wise</p>
                                <Chart datasource={this.props.datasource.imdbRatingConfig} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default AwardRating