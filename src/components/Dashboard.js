import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import Caption from './Caption';
import KpiData from '../utils/kpiData';
import Kpi from './Kpi';
import Subscribers from './Subscribers';
import Revenue from './Revenue';
import AwardRating from './AwardRating';
import DataSource from '../utils/config';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.sub = React.createRef();
        this.rev = React.createRef();
        this.award = React.createRef();
        this.state = {
            menus: [
                { id: "netflix", value: "Netflix", active: true },
                { id: "amazon", value: "Amazon", active: false },
                { id: "hulu", value: "Hulu", active: false },
                { id: "hbo", value: "HBO", active: false }
            ],
            caption: "Netflix",
            kpiData: KpiData.Netflix,
            dataSource: DataSource.Netflix
        }
    }
    menuClick = (id) => {
       
        this.setState({ "caption": id });
        this.setState({ "kpiData": KpiData[id] });
        this.setState({ "dataSource": DataSource[id] })
        this.state.menus.forEach(menu => {

            id === menu.value ? menu.active = true : menu.active = false;
        });
        this.setState({ "menus": this.state.menus });
       
    }
    kpiClick = (id) => {
        if (id === "Subscribers")
            ReactDOM.findDOMNode(this.sub.current).scrollIntoView({ block: 'center',  behavior: 'smooth' });
        else if (id === "Revenue")
            ReactDOM.findDOMNode(this.rev.current).scrollIntoView({ block: 'center', behavior: 'smooth', inline: "nearest" });
        else if (id === "Emmy Awards" || "IMDb Rating")
            ReactDOM.findDOMNode(this.award.current).scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
    render() {
        return (
            <div className="dashboard">
                <nav className="navbar is-primary is-fixed-top" >
                    <div className="navbar-brand">
                        <div className="is-logo">
                            <h2 className="logo-wrapper">W</h2>
                        </div>
                        <div className="navbar-item">
                            <span className="has-space">
                                <h2 className="caption">Web Series Dashboard</h2>
                            </span>
                        </div>
                    </div>
                    <Menu menus={this.state.menus} handleClick={this.menuClick} />
                </nav >
                <div className="container">
                    <Caption caption={this.state.caption} />
                    <section className="section is-kpi">
                        <span className="has-image">
                            <h3 className="snapshot"> Snapshot 2018</h3>
                        </span>
                        <Kpi cards={this.state.kpiData} handleClick={this.kpiClick} />
                        <hr className="path" />
                    </section>
                    <Subscribers value={this.state.kpiData[0].value} icon={this.state.kpiData[0].icon} datasource={this.state.dataSource} ref={this.sub} />
                    <Revenue value={this.state.kpiData[1].value} icon={this.state.kpiData[1].icon} datasource={this.state.dataSource} ref={this.rev} />
                    <AwardRating awardValue={this.state.kpiData[2].value} awardIcon={this.state.kpiData[2].icon} ratingValue={this.state.kpiData[3].value} ratingIcon={this.state.kpiData[3].icon} datasource={this.state.dataSource} ref={this.award} />
                    <section className="section has-footer">www.fusioncharts.com</section>
                </div>
            </div>
        );
    }
}
export default Dashboard;