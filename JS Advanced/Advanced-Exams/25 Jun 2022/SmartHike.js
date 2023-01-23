class SmartHike {
    constructor(user) {
        this.username = user;
        this.goasls = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(goal, altitude) {

        if(this.goasls.hasOwnProperty(goal)) {
            return `${goal} has already been added to your goals`
        }
        this.goasls[goal] = altitude;
        return `You have successfully added a new goal - ${goal}`;
    }

    hike(peak, time, difficultyLevel) {

        if(!this.goasls.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`)
        }

        if(this.goasls.hasOwnProperty(peak) && this.resources === 0) {
            //check equal or less and equal
            throw new Error("You don't have enough resources to start the hike");
        }

        let different = this.resources - (time * 10);
        
        if(different < 0) {
            return "You don't have enough resources to complete the hike"
        }
        
        this.resources -= time * 10;

        this.listOfHikes.push({peak, time, difficultyLevel});

        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
    }

    rest(time) {

        this.resources += time * 10;

        if(this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }

        return `You have rested for ${time} hours and gained ${time * 10}% resources`
    }

    showRecord(criteria) {

        if(criteria === 'easy' || criteria === 'hard' || criteria === 'all') {

            let listOfHikeLenght = this.listOfHikes.length;

            if(listOfHikeLenght === 0) {
                throw new Error(`${this.username} has not done any hiking yet`)
            }
            
            if(criteria === 'easy' || criteria === 'hard') {
                let user = this.listOfHikes.find(u => u.difficultyLevel === criteria);
                if(!user) {
                    return `${this.username} has not done any ${criteria} hiking yet`
                }
                return `${this.username}'s best ${criteria} hike is ${user.peak} peak, for ${user.time} hours`
            }

            //return all of criteria

            const result = [];
            result.push("All hiking records:");

            this.listOfHikes.map(u => result.push(`${this.username} hiked ${u.peak} for ${u.time} hours`));

            return result.join(`\n`);

        }
    }
}

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.addGoal('Musala', 2925));

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.hike('Rui', 3, 'easy'));
// console.log(user.hike('Everest', 12, 'hard'));

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.rest(4));
// console.log(user.rest(5));

// const user = new SmartHike('Vili');
// console.log(user.showRecord('all'));

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));