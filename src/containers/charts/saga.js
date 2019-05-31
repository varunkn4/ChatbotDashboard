import registry from 'app-registry';
import { store } from '../../store';
import { myConfig } from '../../config';


function fetchChartData(action) {
    switch(action.data.type){
        case 'numberOfUsers':
            fetchNumberOfUsers(action);
            break;

        case 'userEngagement':
            fetchUserEngagement(action); 
            break;

        case 'conversationDuration':
            fetchConversationByDuration(action);  
            break;

        case 'usageTime':
            fetchUsageByTime(action);
            break;

        default:
            fetchNumberOfUsers(action);
            fetchUserEngagement(action);
            fetchConversationByDuration(action);
            fetchUsageByTime(action);
            break;
        }
    }

function fetchNumberOfUsers(action){
    const request = registry.get('request');
    request.getMethod(`http://192.168.69.39:9000/numberOfUsers/numberOfUsers?start=${action.data.data.value}&end=xxx`) 
        .then(function(response){
            if(response === null){
                //store.dispatch({ type: "DASHBOARD:CHART:NUMBER_OF_USERS:FETCH:FAIL", fetchError: 'Chart data not available' });
            }
            else{                
                store.dispatch({ type: "DASHBOARD:CHART:NUMBER_OF_USERS:FETCH:SUCCESS", data: response.numberofUsers});
           }
       });
}

function fetchUserEngagement(action){
    const request = registry.get('request');
    request.getMethod(`http://192.168.69.39:9000/userEngagement/userEngagement?start=${action.data.data.value}&end=xxx`)
        .then(function(response){
            if(response === null){
                 
            }
            else{
                store.dispatch({ type: "DASHBOARD:CHART:USER_ENGAGEMENT:FETCH:SUCCESS", data: response.userEngagement});
            }
        });
 }

 function fetchConversationByDuration(action){
    const request = registry.get('request');    
    request.getMethod(`http://192.168.69.39:9000/conversationbyDuration/conversationbyDuration?start=${action.data.data.value}&end=xxx`)
        .then(function(response){
            if(response === null){
                
            }
            else{             
                store.dispatch({ type: "DASHBOARD:CHART:CONVERSATION_BY_DURATION:FETCH:SUCCESS", data: response.ConversationbyDuration});
            }
        });
 }

 function fetchUsageByTime(action){
    const request = registry.get('request');
    request.getMethod(`http://192.168.69.39:9000/usagebyTime/usagebyTime?start=${action.data.data.value}&end=xxx`) 
         .then(function(response){
             if(response === null){
        
             }
             else{
                store.dispatch({ type: "DASHBOARD:CHART:USAGE_BY_TIME:FETCH:SUCCESS", data: response.usageByTime});
              }
          });
 }

export  default fetchChartData ;











