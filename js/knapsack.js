
// Knapsack algorithm
// https://gist.github.com/danwoods/7496329
// **params**:
//    `capacity`  : Number,
//    `items`     : [{w:Number, b:Number}]
// **returns**:
//    An object containing `maxValue` and `set`

function knapsack(items, capacity){
    var indexItem = 0,
        indexWeight = 0,
        itemsLength = items.length,
        weightMatrix = new Array(itemsLength + 1), // for the 0 row
        keepMatrix = new Array(itemsLength + 1),
        solutionSet = []

    // setup matrices
    for (indexItem = 0; indexItem < itemsLength + 1; indexItem++){
        weightMatrix[indexItem] = new Array(capacity + 1);
        keepMatrix[indexItem] = new Array(capacity + 1);
    }

    // build lookup table
    for (indexItem = 0; indexItem < itemsLength+1; indexItem++)
    {
        for (indexWeight = 0; indexWeight < capacity+1; indexWeight++)
        {
            // set up zero  rows
            if (indexItem == 0 || indexWeight == 0)
            {
                weightMatrix[indexItem][indexWeight] = 0;
            }
            // if item fits inside current weight
            else if (items[indexItem-1].w <= indexWeight)
            {
                // newmax === deciding to take the item
                newMax = items[indexItem-1].b + weightMatrix[indexItem-1][indexWeight-items[indexItem-1].w];
                // oldMax === deciding to not take the item
                oldMax = weightMatrix[indexItem-1][indexWeight];

                // save the better one
                if (newMax > oldMax)
                {
                    weightMatrix[indexItem][indexWeight] = newMax;
                    keepMatrix[indexItem][indexWeight] = 1;
                }
                else
                {
                    weightMatrix[indexItem][indexWeight] = oldMax;
                    keepMatrix[indexItem][indexWeight] = 0;
                }

            }
            // if item does not fit inside current weight
            else
            {
                weightMatrix[indexItem][indexWeight] = weightMatrix[indexItem-1][indexWeight]
            }


        }
    }

    indexWeight = capacity;
    indexItem = itemsLength;

    for(indexItem; indexItem>0; indexItem--)
    {
        if(keepMatrix[indexItem][indexWeight] == 1)
        {
            solutionSet.push(items[indexItem-1]);
            indexWeight = indexWeight - items[indexItem -1].w;
        }
    }

    return {
            "maxVal": weightMatrix[itemsLength][capacity],
            "solutionSet": solutionSet
    };
}

exports = knapsack;
