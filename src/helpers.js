function choice (items) {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

function remove (items, item) {
    if (!Array.isArray(items)) {
        console.error('Input is not an array or is undefined.');
        return undefined; // or handle the error in an appropriate way
      }
      
   for(let i=0; i < items.length; i++){
    if(items[i] === item){
        return [...items.slice(0, i), ...items.slice(i+1)];
    }
   }
};



export {choice, remove}