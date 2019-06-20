const itemModels = [
    {
        id: 1,
        title: 'Do not buy Steam games on sale',
        description: "Please don't do it. You know your wallet will thank you later. Or will it... This will keep going until I really break it"
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
    return itemModels;
}

function getItem(id) {
    return itemModels.filter(x => x === id);
}

function postItem(item) {
    const itemId = Math.max.apply(Math, itemModels.map(x => x.id)) + 1;
    item.id = itemId;
    itemModels.push(item);
    console.log('Items: ', itemModels);
    console.log('Item Id : ', itemId);
    return itemId;
}

export { postItem, getItems, getItem};