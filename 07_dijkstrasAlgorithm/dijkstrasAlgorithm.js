const graph = {
    start: {
        a: 6,
        b: 2,
    },
    a: {
        fin: 1,
    },
    b: {
        a: 3,
        fin: 5,
    },
    fin: {},
};

const costs = {
    a: 6,
    b: 2,
    fin: Infinity,
};

const parents = {
    a: 'start',
    b: 'start',
    fin: null,
};

const processed = [];

const findLowestCostNode = costs => {
    let lowestCost = Infinity;
    let lowestCostNode = null;

    for (const node in costs) {
        cost = costs[node];

        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost;
            lowestCostNode = node;
        }
    }

    return lowestCostNode;
};

const dijkstrasAlgorithm = () => {
    let node = findLowestCostNode(costs);

    while (node !== null) {
        const cost = costs[node];
        const neighbors = graph[node];

        for (const n of Object.keys(neighbors)) {
            const newCost = cost + neighbors[n];

            if (costs[n] > newCost) {
                costs[n] = newCost;
                parents[n] = node;
            }
        }

        processed.push(node);
        node = findLowestCostNode(costs);
    }
};

dijkstrasAlgorithm();
console.log(costs, parents); //{ a: 5, b: 2, fin: 6 } { a: 'b', b: 'start', fin: 'a' }
