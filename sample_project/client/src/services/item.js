const items = [
    {
        id: 1,
        title: 'Do not buy Steam games on sale',
        description: "Please don't do it. You know your wallet will thank you later. Or will it..."
    },
    {
        id: 2,
        title: 'Do not cry when watching Click',
        description: 'Not today, Adam Sandler!'
    },
    {
        id: 3,
        title: "Do not eat an entire Ben & Jerry's pint",
        description: "You and I both know it's not for one sitting"
    }
]

function getItems() {
    return items;
}

function getItem(id) {
    return items.filter(x => x === id);
}

export { getItems, getItem};