function editElement(html, oldStr, newStr) {
    let match = new RegExp(oldStr,'g')
    html.textContent = html.textContent.replace(match, newStr)
}