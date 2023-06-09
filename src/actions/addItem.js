import abbreviator from "../abbreviator";

const addItem = (item, quantity) => ({
    type: 'ADD_ITEM',
    item: {...item, quantity: quantity, name: abbreviator(item.name)}
})

export default addItem;