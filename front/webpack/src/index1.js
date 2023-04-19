function component() {
    const element = document.createElement("div")

    const partOfTheDay=['twilight', 'afternoon', 'morning', `evening`]
    element.innerHTML = sortArray(partOfTheDay)
    return element;
}

document.getElementById(`div1`).append(component())

