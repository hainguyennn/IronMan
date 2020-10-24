import React, { Component } from 'react'
import './BaiTapOanTuXi.css'
import KetQuaTroChoi from './KetQuaTroChoi';
import { connect } from 'react-redux'

class NhanVat extends Component {

    renderBuaKeoBao = () => {
        return this.props.buaKeoBao.map((item, index) => {
            let styleBorder = {}
            if (item.datCuoc) {
                styleBorder = { border: '3px solid orange' }
            } else {
                styleBorder = { border: '3px solid transparent' }
            }
            return (
                <div className="col-md-4" key={index}>
                    <button onClick={() => this.props.datCuoc(item.ma)} style={styleBorder}><img src={item.hinhAnh} alt="Hinh" width={40} /></button>
                </div>
            );
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="character text-center">
                            <img src="./img/player.png" alt="hinh" width={200} />
                            <div className="row">
                                {this.renderBuaKeoBao()}
                            </div>
                            <div className="bubble">
                                <img src={this.props.buaKeoBao.find(item => item.datCuoc).hinhAnh} width={40} alt="hinh" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 text-center mt-4">
                        <KetQuaTroChoi />
                    </div>
                    <div className="col-3">
                        <div className="character">
                            <img src="./img/playerComputer.png" alt="hinh" width={200} />
                            <div className="bubble">
                                <img src={this.props.computer.hinhAnh} width={40} alt="hinh" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        buaKeoBao: state.OanTuXiReducer.buaKeoBao,
        computer: state.OanTuXiReducer.computer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (luaChon) => {
            const action = {
                type: 'DAT_CUOC',
                luaChon
            }
            console.log(luaChon)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NhanVat)



