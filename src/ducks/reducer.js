const initialState = {
  username: '',
  id: '',
  profilePic: ''
}

const UPDATE_USER = 'UPDATE_USER';

export function updateUser(userInfo) {
  console.log('hit function')
  return {
    type: UPDATE_USER,
    payload: userInfo
  }
}


export default function reducer(state = initialState, action) {
  console.log(action)
  switch(action.type) {
    case UPDATE_USER:
    console.log(action.payload)
      let {username, id, profile_pic} = action.payload
      return Object.assign({}, state, {username, id, profilePic: profile_pic})
    default: 
    return state
  }
}

// export function updateUsername(username) {
//   return {
//     type: UPDATE_USERNAME,
//     payload: username
//   }
// }
// export function updateProfilePic(pic) {
//   return {
//     type: UPDATE_PROFILE_PIC,
//     payload: pic
//   }
// }