function requestValidator(obj) {
    
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const patternUrl = /^[\w.]+$/;
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const patternMessage = /^[^<>\\&\'\"]+$/;

    if(!(obj.method && methods.includes(obj.method))){
        throw new Error('Invalid request header: Invalid Method');
    }

    if(!(obj.uri && (obj.uri == '*' || patternUrl.test(obj.uri)))){
        throw new Error('Invalid request header: Invalid URI');
    }

    if(!(obj.version && versions.includes(obj.version))){
        throw new Error('Invalid request header: Invalid Version');
    }

    if(!(obj.hasOwnProperty('message') && (obj.message == '' || patternMessage.test(obj.message)))){
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;
}

console.log(requestValidator({
    method: 'POST',
    uri: 'svn.public.catalog',
    version: 'HTTP/2.1',
    message: ''
  }))