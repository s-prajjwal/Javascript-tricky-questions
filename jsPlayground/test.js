const lists = [
    {
        id: 1,
        text: "a",
        children: [
            {
                id: 4,
                text: "e",
                children: [
                    { id: 5, text: "f", children: [] },
                    { id: 6, text: "g", children: [] }
                ]
            }
        ]
    },
    {
        id: 2,
        text: "b",
        children: [
            { id: 7, text: "h", children: [] },
            { id: 8, text: "i", children: [] }
        ]
    },
    { id: 3, text: "c", children: [] }
];


function flattenData(lists) {
    const flattenObj = [];
    for (let i = 0; i < lists.length; i++) {
        const item = lists[i];
        // console.log(item)
        // if( item  !== undefined && typeof item !== "object"){
        if (item.children.length === 0) {
            flattenObj.push(item);

        } else {
            flattenObj.push(item);
            flattenObj.push(...flattenData(item.children));

        }
    }
    return flattenObj;
}

console.log(flattenData(lists));