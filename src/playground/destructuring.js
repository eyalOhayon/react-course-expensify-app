const book = {
    title: 'Ego...',
    author: 'Ryan...',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher; 

console.log(publisherName);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , meduimPrice = '$3.00'] = item;
console.log(`A medium ${itemName} costs ${meduimPrice}`)