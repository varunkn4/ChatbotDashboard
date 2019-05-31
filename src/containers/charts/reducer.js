
const defaultState = {
    fetchError: '',
    number_of_users:{},
    user_engagement:{},
    conversation_by_duration:{},
    usage_by_time:{}
  };
  
  
  export default (state = {}, action) => {

    switch (action.type) {

      case 'DASHBOARD:CHART:CHART_DATA:FETCH':
        return {...state, defaultState }
      
      case 'DASHBOARD:CHART:NUMBER_OF_USERS:FETCH:SUCCESS':
        return {...state,number_of_users: action.data, fetchError: null }
      
      case 'DASHBOARD:CHART:USER_ENGAGEMENT:FETCH:SUCCESS':
        return {...state,user_engagement: action.data, fetchError: null }

      case 'DASHBOARD:CHART:CONVERSATION_BY_DURATION:FETCH:SUCCESS':
        return {...state,conversation_by_duration: action.data, fetchError: null }

      case 'DASHBOARD:CHART:USAGE_BY_TIME:FETCH:SUCCESS':
        return {...state,usage_by_time: action.data, fetchError: null }


      default:
        return state;
    }
  };