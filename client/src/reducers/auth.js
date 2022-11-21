const authReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case 'AUTH': {
      console.log("62522262",action.data);
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, data: action?.data };

      break;
    }

    default:
      return state;
  }
};
export default authReducer;
