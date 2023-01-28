function createSortedList () {
    
    const result = [];

    return {
        add: (number) => {
            result.push(number)    
            result.sort((a, b) => a - b); 
        },
        remove: (index) => {
            if(result[index]){
                result.splice(index, 1);
            }
        },
        get: (index) => {
            if(result[index]){
                return result[index]
            }
        },
        size: () => {
            return result.length
        },
    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));