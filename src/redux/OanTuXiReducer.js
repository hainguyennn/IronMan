const stateDefault = {
    soBanThang: 0,
    soBanChoi: 0,
    buaKeoBao: [
        { ma: 'bao', hinhAnh: './img/bao.png', datCuoc: true },
        { ma: 'bua', hinhAnh: './img/bua.png', datCuoc: false },
        { ma: 'keo', hinhAnh: './img/keo.png', datCuoc: false }
    ],
    computer: { ma: 'keo', hinhAnh: './img/keo.png' },
    ketQua: 'Go !'
}

const OanTuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC': {
            let buaKeoBaoUpdate = [...state.buaKeoBao];
            buaKeoBaoUpdate = buaKeoBaoUpdate.map((item, index) => {
                if (item.ma === action.luaChon) {
                    return { ...item, datCuoc: true };
                }
                return { ...item, datCuoc: false }
            })
            state.buaKeoBao = buaKeoBaoUpdate;
            return { ...state }
        }
        case 'RANDOM_BUA_KEO_BAO': {
            let random = Math.floor(Math.random() * 3);
            let randomOanTuXi = state.buaKeoBao[random];
            state.computer = randomOanTuXi;
            return { ...state }
        }
        case 'END_GAME': {
            let player = state.buaKeoBao.find(item => item.datCuoc);
            let computer = state.computer;
            switch (player.ma) {
                case 'bua': {
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Bạn thắng'
                        state.soBanThang += 1;
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'Bạn hoà'
                    } else {
                        state.ketQua = 'Bạn thua'
                    }
                } break;
                case 'keo': {
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Bạn hoà';
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'Bạn thua'
                    } else {
                        state.ketQua = 'Bạn thắng'
                        state.soBanThang += 1;
                    }
                } break;
                case 'bao': {
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Bạn thua';
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'Bạn thắng'
                        state.soBanThang += 1;
                    } else {
                        state.ketQua = 'Bạn hoà'
                    }
                } break;
            }
            state.soBanChoi += 1;
            return { ...state }
        }
    }
    return { ...state };
}

export default OanTuXiReducer