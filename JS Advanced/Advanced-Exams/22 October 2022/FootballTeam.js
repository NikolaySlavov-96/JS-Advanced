class footballTeam {
    constructor(name, count) {
        this.clubName = name;
        this.country = count;
        this.invitedPlayers = {};
    }

    newAdditions(arr) {

        const addedPlayer = [];

        for(const line of arr) {

            const [name, age, payVal] = line.split(`/`);

            if(!this.invitedPlayers.hasOwnProperty(name)) {
                this.invitedPlayers[name] = {age: Number(age), payValue: Number(payVal)};
                addedPlayer.push(name);
            } else {
                let currentPay = this.invitedPlayers[name].payValue;

                if(currentPay < payVal) {
                    this.invitedPlayers[name].payValue = payVal;
                }
            }
        }
        return `You successfully invite ${addedPlayer.join(', ')}.`;
    }

    signContract(allInf) {
        const [name, price] = allInf.split('/');

        if(!this.invitedPlayers.hasOwnProperty(name)){
            throw new Error(`${name} is not invited to the selection list!`)
        }
        const currentPrice = this.invitedPlayers[name].payValue;
        if(currentPrice > price) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference - price} million more are needed to sign the contract!`)
        }

        this.invitedPlayers[name].payValue = 'Bought';

        return `Congratulations! You sign a contract with ${name} for ${price} million dollars.`
    }

    ageLimit(name, years) {
        
        if(!this.invitedPlayers[name]) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        const currentYear = years - this.invitedPlayers[name].age;

        if(currentYear > 5) {
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
        } else if(currentYear < 5 && currentYear > 0) {
            return `${name} will sign a contract for ${currentYear} years with ${this.clubName} in ${this.country}!`
        }else {
            return `${name} is above age limit!`
        }
    }

    transferWindowResult() {
        
        const result = [];
        const sort = Object.entries(this.invitedPlayers).sort((a, b) => a[0].localeCompare(b[0]));

        for (const key of sort) {
            result.push(`Player ${key[0]}-${key[1].payValue}`);
        }
        
        return `Players list:\n${result.join(`\n`)};`
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());