import{createAction, handleActions} from 'redux-actions'
//type 생성
const CHANGFIVE="font/CHANGEFIVE"
const CHANGETWO="font/CHANGETWO"
const INPUT_BIGGER="font/INPUT_BIGGER"
//action 생성
export const changefive=createAction(CHANGFIVE)
export const changetwo=createAction(CHANGETWO)
export const input_bigger=createAction(INPUT_BIGGER)
// initialState 초기값 생성
const initialState={
  fontSize : "1rem",
  inputFontSize :"1rem"
}
//reducer 생성
const font=handleActions({
  [CHANGFIVE] : (state,action)=>({...state,fontSize : "5rem"}),
  [CHANGETWO] : (state,action)=>({...state,fontSize : "2rem"}),
  [INPUT_BIGGER] : (state,action)=>({...state,inputFontSize : action.payload})
},initialState)
//reducer내보내기
export default font

// #1 : ButtonComponent
// "재미있는 리덕스 수업!"
// 폰트 기본 크기 1rem
// 버튼 1. 2rem으로 변경하기
// 버튼 2. 5rem으로 변경하기

// #2 : InputComponent
// 사용자에게 입력 받은 폰트 사이즈로 폰트크기 변경하기
