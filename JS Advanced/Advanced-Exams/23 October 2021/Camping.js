class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        money = Number(money);
        
        if(!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.')
        }

        const nameParticipant = this.listOfParticipants.find(p => p.name === name);
        if(nameParticipant) {
            return `The ${name} is already registered at the camp.`
        }

        const price = Number(this.priceForTheCamp[condition]);
        if(price > money) {
            return `The money is not enough to pay the stay at the camp.`
        }

        this.listOfParticipants.push({name, condition, power: 100, wins: 0});

        return `The ${name} was successfully registered.`
    }

    unregisterParticipant(name) {
        const participantName = this.listOfParticipants.find(p => p.name === name);
        
        if(!participantName) {
            throw new Error(`The ${name} is not registered in the camp.`)
        }
        
        const participant = this.listOfParticipants.findIndex(p => p.name === name);
        this.listOfParticipants.splice(participant, 1);
        return `The ${name} removed successfully.`
    }

    timeToPlay(typeOfGame, participant1, participant2) {

        const player1 = this.listOfParticipants.find(p => p.name === participant1);
        const player2 = this.listOfParticipants.find(p => p.name === participant2);

        
        if(typeOfGame === 'WaterBalloonFights') {
            if(!player1 || !player2) {
                throw new Error(`Invalid entered name/s.`)
            }
            
            if(player1.condition !== player2.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            let playWins = '';
            if(player1.power > player2.power) {
                player1.wins++;
                playWins = player1.name;
            }

            if(player1.power < player2.power) {
                player2.wins++;
                playWins = player2.name;
            }

            if(playWins !== '') {
                return `The ${playWins} is winner in the game ${typeOfGame}.`
            }

            return `There is no winner.`
        }

        if(typeOfGame === 'Battleship') {
            if(!player1) {
                throw new Error(`Invalid entered name/s.`)
            }
            
            const participand = this.listOfParticipants.find(p => p.name === participant1);

            participand.power += 20

            return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        }
    }

    toString() {
        const result = [];

        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`)

        const sortParticipant = this.listOfParticipants.sort((a, b) => b.wins - a.wins);

        for (const participant of sortParticipant) {
            result.push(`${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`)
        }

        return result.join(`\n`)
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());