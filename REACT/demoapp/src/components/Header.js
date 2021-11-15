import React from 'react';

class Header extends React.Component{
    render() {
        const {tool} = this.props;
        return (
            <div>
                <h1> Backend Tool: {tool} </h1>
                {this.props.children}
            </div>
        )
    }
}

export default Header;