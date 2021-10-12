function listProcessor(commands) {
    let result = [];

    for (let tokens of commands) {
        let actions = {
            add,
            remove,
            print
        }

        const [command, str] = tokens.split(' ');
        actions[command]();

        function add() {
            result.push(str);
        }
    
        function remove() {
            result = result.filter(x => x !== str);
        }
        
        function print(){
            console.log(result.join(','));
        }
    }

 

}

listProcessor(
    ['add hello', 'add again', 'remove hello', 'add again', 'print']
)