import registry from 'app-registry';

function downloadIntents(action) {
    // const request = registry.get('request');   
    // request.getMethod(`http://192.168.69.39:9000/downloadTranscript/downloadTranscript?start=seven&end=xxx`);
    const response = { file: 'http://192.168.69.39:9000/downloadTranscript/downloadTranscript?start=seven&end=xxx'};
    window.open(response.file);
}

export default downloadIntents;