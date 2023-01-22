class Triathlon{ 
    constructor(nameCoupe) {
        this.competitionName = nameCoupe;
        this.addParticipants = {};
        this.listOfFinalists = [];
    }

    addParticipant(name, gender) {
        
        if(!this.addParticipants.hasOwnProperty(name)) {
            this.addParticipants[name] = gender;
            return `A new participant has been added - ${name}`;
        }

        return `${name} has already been added to the list`
    }

    completeness(name, condition) {

        if(!this.addParticipants.hasOwnProperty(name)) {
            throw new Error(`${name} is not in the current participants list`);
        }

        if(condition < 30) {
            throw new Error(`${name} is not well prepared and cannot finish any discipline`)
        }

        let disciplinesAfterDivde = condition / 30;

        if(disciplinesAfterDivde < 3){ 
            return `${name} could only complete ${Math.floor(disciplinesAfterDivde)} of the disciplines`;
        }

        const allInfo = this.addParticipants[name];

        this.listOfFinalists.push({name, gende: allInfo});

        return `Congratulations, ${name} finished the whole competition`;
    }

    rewarding(name) {

        const player = this.listOfFinalists.find(p => p.name === name);
        
        if(player) {
            return `${name} was rewarded with a trophy for his performance`;
        } else {
            return `${name} is not in the current finalists list`;
        }
    }

    showRecord(gendeIn) {

        if(gendeIn == 'male' || gendeIn == 'female' || gendeIn == 'all') {
            
            const player = this.listOfFinalists.length;
            if(!player) {
                return `There are no finalists in this competition`
            }
            
            
            if(gendeIn == 'male' || gendeIn == 'female') {
                const finalGende = this.listOfFinalists.find(p => p.gende === gendeIn);
                
                if(finalGende) {
                    return `${finalGende.name} is the first ${gendeIn} that finished the ${this.competitionName} triathlon`
                }
                return `There are no ${gendeIn}'s that finished the competition`

            }

        }
        const sort = this.listOfFinalists.sort((a, b) => a.name - b.name).map(pla => pla.name);
        return `List of all ${this.competitionName} finalists:\n${sort.join(`\n`)}`;
    }
}

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("Peter", "male"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.completeness("George", 20));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.showRecord("all"));

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.showRecord("all"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.completeness("George", 95));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.rewarding("George"));
// console.log(contest.showRecord("female"));