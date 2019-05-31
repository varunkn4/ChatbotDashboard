import registry from 'app-registry';
import { store } from '../../store';

function fetchInsightData(action) {
    fetchMessageMissRate(action);
    fetchTopChatIntents(action);
    fetchUnidentifiedStatements(action);
    fetchUnidentifiedStatements(action);
}

function fetchUnidentifiedList(action) {
    const request = registry.get('request');    
    request.getMethod(`http://192.168.69.39:9000/unidentifiedStatements/unidentifiedStatements/${action.data.ConversationId}`) 
        .then(function(response){
            if(response === null){
                //store.dispatch({ type: "DASHBOARD:CHART:NUMBER_OF_USERS:FETCH:FAIL", fetchError: 'Chart data not available' });
            }
            else{             
                store.dispatch({ type: "DASHBOARD:INSIGHT:UNIDENTIFIED_DATA:FETCH:SUCCESS", data: response.UnidentifiedStatements});
           }
        });
}

function fetchMessageMissRate(action){
    const request = registry.get('request');    
    request.getMethod(`http://192.168.69.39:9000/messageMissRate/messageMissRate?start=${action.data.data}&end=xxx`) 
        .then(function(response){
            if(response === null){
                //store.dispatch({ type: "DASHBOARD:CHART:NUMBER_OF_USERS:FETCH:FAIL", fetchError: 'Chart data not available' });
            }
            else{             
                store.dispatch({ type: "DASHBOARD:INSIGHT:MISS_RATE:FETCH:SUCCESS", data: response.MessageMissRate});                
           }
       });
}

function fetchTopChatIntents(action){
    const request = registry.get('request');
    request.getMethod(`http://192.168.69.39:9000/topIntents/topIntents?start=${action.data.data}&end=xxx`) 
        .then(function(response){
            if(response === null){
                //store.dispatch({ type: "DASHBOARD:CHART:NUMBER_OF_USERS:FETCH:FAIL", fetchError: 'Chart data not available' });
            }
            else{                
                store.dispatch({ type: "DASHBOARD:INSIGHT:TOP_INTENTS:FETCH:SUCCESS", data: response.TopIntents});                
           }
       });
}

function fetchUnidentifiedStatements(action){
    const request = registry.get('request');
    request.getMethod(`http://192.168.69.39:9000/unidentifiedStatements/unidentifiedStatements?start=${action.data.data}&end=xxx`) 
        .then(function(response){
            if(response === null){                
                //store.dispatch({ type: "DASHBOARD:CHART:NUMBER_OF_USERS:FETCH:FAIL", fetchError: 'Chart data not available' });
                store.dispatch({ type: "DASHBOARD:INSIGHT:UNIDENTIFIED_STATEMENTS:FETCH:SUCCESS", data: []}); 
                
            }
            else{          
                store.dispatch({ type: "DASHBOARD:INSIGHT:UNIDENTIFIED_STATEMENTS:FETCH:SUCCESS", data: response.UnidentifiedStatements});   
            }
       });
       
}

export {fetchInsightData, fetchUnidentifiedList};