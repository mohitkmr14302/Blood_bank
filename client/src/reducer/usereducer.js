import Cookies from 'js-cookie';
let initialstate = false;
const token = Cookies.get('jwt')
if (token !== undefined) initialstate = true;
console.log(initialstate);

export { initialstate };
export const reducer = (state, action) => {
    if (action.type === "USER") {
        return action.payload;
    }
    return state;
}