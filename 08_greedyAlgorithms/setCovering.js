let statesNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);

const stations = {
    kone: new Set(['id', 'nv', 'ut']),
    ktwo: new Set(['wa', 'id', 'mt']),
    kthree: new Set(['or', 'nv', 'ca']),
    kfour: new Set(['nv', 'ut']),
    kfive: new Set(['ca', 'az']),
};

const finalStations = new Set();

const setCovering = () => {
    while (statesNeeded.size) {
        let bestStation = null;
        let statesCovered = new Set();

        for (const station in stations) {
            const states = stations[station];
            const covered = new Set([...statesNeeded].filter(state => states.has(state)));

            if (covered.size > statesCovered.size) {
                bestStation = station;
                statesCovered = covered;
            }
        }

        statesNeeded = new Set([...statesNeeded].filter(state => !statesCovered.has(state)));
        finalStations.add(bestStation);
    }
};

setCovering();
console.log(finalStations); // Set { 'kone', 'ktwo', 'kthree', 'kfive' }
