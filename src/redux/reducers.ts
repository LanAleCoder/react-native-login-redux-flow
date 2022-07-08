const initialState = {
    userToken: null,
}

const actions = {
    PERSIST_TOKEN: 'PERSIST_TOKEN',
    SIGN_IN: 'SIGN_IN',
    LOGOUT: 'LOGOUT',
}

const AuthReducer = (prevState: any, action: { type?: any; payload?: any; }) => {
    const {payload} = action;
    switch(action.type) {
        case actions.PERSIST_TOKEN: return{...prevState, userToken: payload.token};
        case actions.SIGN_IN: return{...prevState, userToken: payload.token};
        case actions.LOGOUT: return{...prevState, userToken: null};
        default: return
    }
}

export default AuthReducer;
export {actions, initialState}