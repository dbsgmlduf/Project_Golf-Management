//reducer 정의
import { LOGIN ,REGISTER} from '../_actions/types';

export default function (state = {}, action){
  switch(action.type){
    case LOGIN:
        return {...state, loginSucess: action.payload}
        break;
    
    case REGISTER:
        return {...state, register: action.payload}
        break;
    default:
      return state;
  }
}