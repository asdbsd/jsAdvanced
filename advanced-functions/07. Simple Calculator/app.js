function calculator() {
    const items = {}
    const functions = {
        init,
        add,
        subtract
    }

    function init(selector1, selector2, result){
        items['selector1'] = document.querySelector(selector1);
        items['selector2'] = document.querySelector(selector2);
        items['result'] = document.querySelector(result);
    }

    function add() {
        items['result'].value = Number(items['selector1'].value) + Number(items['selector2'].value);
    }

    function subtract() {
        items['result'].value =  Number(items['selector1'].value) - Number(items['selector2'].value);
    }

    return functions;
}




