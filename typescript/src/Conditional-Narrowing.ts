type Item = {productName:string};

function itemOrItems(item:Item | Item[]){
    //This is a type gard
    if(Array.isArray(item)){
       return item.length
    }else{
        return item.productName
    }
}

console.log(itemOrItems({productName: "TS"}))
console.log(itemOrItems([{productName: "TS"}, {productName: "JS"}]))