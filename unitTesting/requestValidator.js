function requestValidator(obj) {

    function validateUri(obj) {
        let prop = 'uri';
        let uriRegex = /^\*$|^[a-zA-Z0-9\.]+$/

        if (obj[prop] == undefined || !uriRegex.test(obj[prop])) {
            throw new Error('Invalid request header: Invalid URI')
        }

        return obj;
    }

    function validateMethod(obj) {
        let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
        let prop = 'method';

        if (obj[prop] == undefined || !validMethods.includes(obj[prop])) {
            throw new Error('Invalid request header: Invalid Method')
        }

        return obj;

    }

    function validateVersion(obj) {
        let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
        let prop = 'version'

        if (obj[prop] == undefined || !validVersions.includes(obj[prop])) {
            throw new Error('Invalid request header: Invalid Version')
        }
        
        return obj;
    }

    function validateMessage(obj) {
        let prop = 'message';
        let messageRegex = /^[^<>\\&'"]*$/

        if (obj[prop] == undefined || !messageRegex.test(obj[prop])) {
            throw new Error('Invalid request header: Invalid Message')
        }

        return obj;

    }



    try {
        validateMethod(obj);
        validateUri(obj);
        validateVersion(obj);
        validateMessage(obj);
        return obj
    } catch(e) {
        throw Error(e.message)
    }

    
}
let obj = {
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}

console.log(requestValidator(
    obj
      
))
console.log('-----------------')

console.log(requestValidator(
    {
        method: 'OPTIONS',
        uri: 'git.master',
        version: 'HTTP/1.1',
        message: '-recursive'
      }      
))

