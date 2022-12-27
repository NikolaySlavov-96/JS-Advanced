function townsToJSON (array) {

    const result = [];

    class Town {
        constructor(town , latitude , longitude) {
            this.Town = town;
            this.Latitude = Number(latitude);
            this.Longitude = Number(longitude);
        }
    }

    for(let n = 1; n < array.length; n++) {

        let afterSplit = array[n].split(`|`).map(word => word.trim()).filter(x => x.length !== 0);
        let [town , latitude , longitude] = afterSplit;
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let buil = new Town(town , latitude , longitude);

        result.push(buil)
    }

    return JSON.stringify(result)
}

townsToJSON (['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'])