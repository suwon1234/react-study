// Type, Action, reducer, store ---> 하나로 합치자 (dux패턴) 각각의 4개로 분리하는 것을 하나로 합치자
import{createAction, handleActions} from 'redux-actions'


// type 생성
const INCREASE = "count/INCREASE"; //파일 이름을 앞에 적어야함
const DECREASE="count/DECREASE";

// action 생성
export const increase = createAction(INCREASE)
export const decrease = createAction(DECREASE)

// state 초기화 생성
const initialState={
  number : 0
}

// reducer 생성
// const reducer =(state,action)=>{
//   switch(action.type){
//     case INCREASE:
//       break;
//     case DECREASE:
//       break;
//     default:
//       break;
//   }
// }
const count=handleActions({
  [INCREASE] : (state,action)=>({number : state.number+1 + parseInt(action.payload) }),
  [DECREASE] : (state,action)=>({number : state.number-1 + Number(action.payload)})
},initialState)

export default count;