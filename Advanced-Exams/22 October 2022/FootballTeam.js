class footballTeam {
    constructor(name, count) {
        this.clubName = name;
        this.country = count;
        this.invitedPlayers = [];
    }

    newAdditions(arr) {

        arr.map(p => {
            let [name, age, playerValue] = p.split('/');
            age = Number(age);
            playerValue = Number(playerValue);

            let player = this.invitedPlayers.find(p => p.name === name);

            if(player) {
                if(player.playerValue < playerValue) {
                    player.playerValue = playerValue;
                }
            } else {
                this.invitedPlayers.push({name, age, playerValue});
            }
        });
        const result = [];

        this.invitedPlayers.map(p => { 
            result.push(p.name);
        })
        return `You successfully invite ${result.join(', ')}.`;
    }

    signContract(allInf) {
        let [name, price] = allInf.split('/');
        price = Number(price);
        let player = this.invitedPlayers.find(p => p.name === name);

        if(player) {

            if(player.playerValue > price) {
                throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${player.playerValue - price} million more are needed to sign the contract!`)
            } else {
                player.playerValue = 'Bought';
            }
        } else {
            throw new Error(`${name} is not invited to the selection list!`)
        }

        return `Congratulations! You sign a contract with ${name} for ${price} million dollars.`
    }

    ageLimit(name, years) {
        
        let player = this.invitedPlayers.find(p => p.name === name);
        
        if(player) {
            if(player.age > years) {
                return `${name} is above age limit!`
            } else if(player.age < (years + 5)){
                const differenceAge = years - player.age;
                if(differenceAge < 5 && differenceAge > 0) {
                    return `${name} will sign a contract for ${differenceAge} years with ${this.clubName} in ${this.country}!`
                } else {
                    return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
                }
            }
        } else {
            throw new Error(`${name} is not invited to the selection list!`);
        }
    }

    transferWindowResult() {
        
        const result = [];
        
        result.push(`Players list:`);
        this.invitedPlayers.sort((a, b) => a.name - b.name).map(p => result.push(`Player ${p.name}-${p.playerValue}`))
        return result.join(`\n`);
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());