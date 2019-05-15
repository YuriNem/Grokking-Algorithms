const graph = {
    you: ['alice', 'bob', 'claire'],
    bob: ['anuj', 'peggy'],
    alice: ['peggy'],
    claire: ['thom', 'jonny'],
    anuj: [],
    peggy: [],
    thom: [],
    jonny: [],
};

const isSeller = name => name[name.length - 1] === 'm';

const breadthFirstSearch = name => {
    const searchQueue = [];
    searchQueue.push(...graph[name]);
    const searched = [];

    while (searchQueue.length) {
        const person = searchQueue.shift();

        if (!searched.includes(person)) {
            if (isSeller(person)) {
                console.log(`${person} is а mango seller`);
                return true;
            } else {
                searchQueue.push(...graph[person]);
                searched.push(person);
            }
        }
    }
    return false;
};

console.log(breadthFirstSearch('you')); // true
