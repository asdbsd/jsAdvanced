function extractText() {
    const listItems = document.querySelectorAll("#items li");
    const result = [];
    for (let item of listItems) {
        result.push(item.textContent + '\n')
    }

    document.getElementById("result").textContent = result.join('');
}