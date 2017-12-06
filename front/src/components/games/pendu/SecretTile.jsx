import React from 'react'
import './Pendu.scss'

import PenduData from 'game-data/pendu/PenduData'

export default class SecretTile extends React.Component {

    constructor(props) {
        super(props)
    }

    render() { 
        let clazz = PenduData.REGEX.test(this.props.secret) ? 'secretTile' : 'secretTile nonAlpha'
        return (
            <div className={clazz} >
                {this.props.value}
            </div>
        )
    }
}