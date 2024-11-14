import {handleActions} from 'redux-actions'

 const initalValue={
  jobs : {
    devloper : {
      name : "박성진",
      skills : ["React.js","Node.js"]
    },
    planner : {
      name : "홍길동",
      skills : ["Excel", "PowerPoint"]
    }
  },
}

const route = handleActions({

},initalValue)
export default route;