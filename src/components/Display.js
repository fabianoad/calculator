import React from 'react'

class Display extends React.Component {
    render() {
        return <div className="display-div">
            {this.props.show}
        </div>
    }
}

export default Display