import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQuaTroChoi extends Component {
    render() {
        let { soBanThang, soBanChoi } = this.props;
        return (
            <div>
                <div style={{ fontSize: '50px' }}>
                    <span className="text-success">Số bàn thắng: <span className="text-warning">{soBanThang}</span></span>
                </div>
                <div style={{ fontSize: '50px' }}>
                    <span className="text-success">Số bàn chơi: <span className="text-warning">{soBanChoi}</span></span>
                </div>
                <button onClick={() => this.props.playGame()} className="btn btn-success mt-3">PLAY GAME</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        soBanThang: state.OanTuXiReducer.soBanThang,
        soBanChoi: state.OanTuXiReducer.soBanChoi
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            let n = 0;
            let randomBuaKeoBao = setInterval(() => {
                const action = {
                    type: 'RANDOM_BUA_KEO_BAO',
                };
                dispatch(action);
                n++;
                if (n === 11) {
                    clearInterval(randomBuaKeoBao);
                    const actionXLKQ = {
                        type: 'END_GAME',
                    }
                    dispatch(actionXLKQ);
                }
            }, 50)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTroChoi)
