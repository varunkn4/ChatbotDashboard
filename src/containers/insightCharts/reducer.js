
const defaultState = {
    fetchError: '',
    miss_rate: {},
    chat_intents: {},
    unidentified_statements:{},
    statement_list:{}
};
  

export default (state = {}, action) => {
    switch (action.type) {

      case 'DASHBOARD:INSIGHT:INSIGHT_DATA:FETCH':
        return {...state, defaultState }
      
      case 'DASHBOARD:INSIGHT:MISS_RATE:FETCH:SUCCESS':
        return {...state,miss_rate: action.data, fetchError: null }
      
      case 'DASHBOARD:INSIGHT:TOP_INTENTS:FETCH:SUCCESS':
        return {...state,chat_intents: action.data, fetchError: null }

      case 'DASHBOARD:INSIGHT:UNIDENTIFIED_STATEMENTS:FETCH:SUCCESS':
        return {...state,unidentified_statements: action.data, fetchError: null }

      case 'DASHBOARD:INSIGHT:UNIDENTIFIED_DATA:FETCH:SUCCESS':
        return {...state,statement_list: action.data, fetchError: null }

      default:
        return state;
    }
};