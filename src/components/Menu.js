import React, { Component } from 'react';
class Menu extends Component {
    render() {
        const menulist = this.props.menus.map(menu => {

            return (

                <div className={menu.active ? "is-menu is-active" : "is-menu"} key={menu.id} onClick={() => { this.props.handleClick(menu.value) }}>{menu.value}</div>
            );
        });
        return (
            <div className="navbar-end">
                <div className="navbar-brand" >
                    {menulist}
                </div >
            </div>
        );
    }
}
export default Menu;