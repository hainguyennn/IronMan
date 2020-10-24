import React, { Component } from 'react'
import NhanVat from './NhanVat'
import './BaiTapOanTuXi.css'
import { connect } from 'react-redux'

class BaiTapOanTuXi extends Component {
    render() {
        return (
            <div className="gameOanTuXi fontGameOanTuXi">
                <h3 className="text-center mt-4 display-4 s-text">Battle, no mercy</h3>
                <NhanVat />
                <div className="text-center text-white" style={{ position: 'absolute', left: '0', bottom: '50px', width: '100%' }}>
                    <h3 className="display-4">{this.props.ketQua}</h3>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ketQua: state.OanTuXiReducer.ketQua
    }
}

export default connect(mapStateToProps)(BaiTapOanTuXi)
