export const SET_USER = 'SET_USER';

export function setUser(user){
    const action = {
        type : 'SET_USER',
        payload : user
    }
    return action;
}
