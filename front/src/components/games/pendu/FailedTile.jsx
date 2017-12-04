import React from 'react'

import './Pendu.scss'

export default class FailedTile extends React.Component {

    constructor(props) {
        super(props)
    }

    render() { 
        return (
            <div className='failedTile'>
                {this.props.value}
            </div>
        )
    }
}
