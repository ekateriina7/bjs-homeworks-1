"use strict"
//task1
class StudentLog {
	constructor(name) {
		this.name = name;
		this.subjects = {};
  }

  getName() {
    return this.name
    }
  
	addGrade( grade, subject ) {
		if(grade > 5 || grade < 0 || typeof grade !== 'number') {
			return `Вы пытались поставить оценку ${grade} по предмету ${subject}. Доступный диапазон 0-5`;
		} else {
       if(this.subjects[subject] !== undefined) {
                this.subjects[subject].push(grade);
            }else {
                this.subjects[subject] = [grade];
            }
			return this.subjects[subject].length;
		}
	};

  getAverageBySubject(subject) {
    let gradeSum = 0;
    let average = 0;
    if (this.subjects[subject] !== undefined) {
        for(let i = 0; i<this.subjects[subject].length;i++) {
                gradeSum += this.subjects[subject][i];
            }
            average = gradeSum/this.subjects[subject].length;
        }
    return average;        
    }
  getTotalAverage() {
  if(this.subjects.length === 0) {
			return 0;
		}

		let summ = 0, length = 0;

		for(let subj in this.subjects) {
			for(let i in this.subjects[subj]) {
				summ += this.subjects[subj][i];
				length++;
			}
		}
		
		return summ/length;
    return average
	};
  getGradesBySubject( subject ) {
   
    return this.subjects[subject] || []
  }
  getGrades() {
      return this.subjects
  }
}
let log = new StudentLog('katya');
console.log(log.getName());
console.log(log.addGrade(4,'algebra'));
console.log(log.addGrade(3,'geometry'));
console.log(log.addGrade(5,'algebra'));
console.log(log.getAverageBySubject('algebra'));
console.log(log.getAverageBySubject('geometry'));
console.log(log.getTotalAverage())
console.log(log.getGradesBySubject('algebra'))
console.log(log.getGrades())


//task2, 3
class Weapon {
  constructor(weaponObj = {
      name: 'undefined',
      attack: 0,
      durability: 0,
      range: 0
  }) {
      this.name = weaponObj.name;
      this.attack = weaponObj.attack;
      this.durability = weaponObj.durability;
      this.range = weaponObj.range;
      this.startDurability = weaponObj.durability;
  }
  takeDamage(damage) {
      this.durability = this.durability - damage;
      if (this.durability < 0) {
          this.durability = 0;
      }
  }

  getDamage() {
  if (this.durability >= this.startDurability * 0.3) {
    return this.attack;
  } else if (this.durability == 0) {
      return 0;
  } else {
      return this.attack / 2;
    
  }
}

  isBroken() {
      return this.durability == 0;
    
  }
}

class Arm extends Weapon {
  constructor() {
      super();
      this.name = 'Рука';
      this.attack = 1;
      this.durability = Infinity;
      this.range = 1;
      this.startDurability = this.durability

  }
}

class Bow extends Weapon {
  constructor() {
      super();
      this.name = 'Лук';
      this.attack = 10;
      this.durability = 200;
      this.range = 3;
      this.startDurability = this.durability
  }
}

class Sword extends Weapon {
  constructor() {
      super();
      this.name = 'Меч';
      this.attack = 25;
      this.durability = 500;
      this.range = 1;
      this.startDurability = this.durability
  }
}

class Knife extends Weapon {
  constructor() {
      super();
      this.name = 'Нож';
      this.attack = 5;
      this.durability = 300;
      this.range = 1;
      this.startDurability = this.durability
  }
}

class Staff extends Weapon {
  constructor() {
      super();
      this.name = 'Посох';
      this.attack = 8;
      this.durability = 300;
      this.range = 2;
      this.startDurability = this.durability
  }
}

class LongBow extends Bow {
  constructor() {
      super();
      this.name = 'Длинный лук';
      this.attack = 15;
      this.range = 4;
  }
}

class Axe extends Sword {
  constructor() {
      super();
      this.name = 'Секира';
      this.attack = 27;
      this.durability = 800;
      this.startDurability = this.durability
  }
}

class StormStaff extends Staff {
  constructor() {
      super();
      this.name = 'Посох Бури';
      this.attack = 10;
      this.range = 3;
  }
}

class Player {
constructor({name, position}){
  this.life = 100;
  this.magic = 20;
  this.speed = 1;
  this.attack = 10;
  this.agility = 5;
  this.luck = 10;
  this.description = 'Игрок';
  this.weapon = new Arm;
  this.name = name;
  this.position = position;
}



getLuck(){
  let randomNumber = Math.random()*100;
  return (randomNumber + this.luck)/100;
}

getDamage(distance ) {
  if (distance <= this.weapon.range) {
    return (this.attack + this.weapon.getDamage())* this.getLuck() / distance;
  } else {
    return 0;
  }
}

takeDamage( damage ) {
  if(this.life < damage) {
    this.life = 0
  } else {
    return this.life = this.life - damage 
  }

}

isDead() {
  return (this.life == 0);
}


moveLeft(distance) {
  if(distance > this.speed) {
    distance = this.speed;
  }
  this.position = this.position - distance
}

moveRight(distance) {
  if(distance > this.speed) {
    distance = this.speed;
  }
  this.position = this.position + distance
}

move( distance ) {
  if (distance < 0) {
    this.moveLeft(distance)
  } else {
    this.moveRight(distance)
  }
}

isAttackBlocked() {
  return (this.getLuck() > (100 - this.luck)/100)
}

dodged() {
  return (this.getLuck() > (100 - this.agility - this.speed * 3) / 100)
}

takeAttack( damage ) {
  if(this.isAttackBlocked()) {
    this.weapon.takeDamage(damage);
  } else if(this.dodged()) {
    console.log('Урон не защитывается');
  } else {
    this.life = this.life - damage;
  }
}

checkWeapon() {
  if(this.weapon.isBroken()) {
    if(this.weapon.name === 'Нож') this.weapon = new Arm();
    else {
      this.weapon = new Knife();
    }
  }     
}

tryAttack( enemy ) {
  let distanceToEnemy = Math.abs(this.position - enemy.position);
  if (this.weapon.range < distanceToEnemy) {
    return 0;
  } else if( distanceToEnemy == 0) {
    enemy.moveRight(1);
    enemy.takeAttack(attack * 2)

  } else {
    this.weapon.takeDamage(10 * this.getLuck());
    enemy.takeAttack(this.getDamage(distanceToEnemy))
  }
}

chooseEnemy( players = [] ){
  let lowestHealthPlayer = "undefined" ; 
  let lowestHealth = Infinity ;
  for( let i = 0; i < players.length; i++ ){
      let player = players[i]
    if(player.name !== this.name) {
      if(player.life < lowestHealth ){
          lowestHealth = player.life
          lowestHealthPlayer = player
      }
    }
  }
  return lowestHealthPlayer
  }

moveToEnemy( enemy ) {
  let distance = Math.abs(enemy.position - this.position);
  if (enemy.posistion > this.position) {
    this.moveRight(distance);
  } 
  if (enemy.posistion < this.position) {
    this.moveLeft(distance);
  } 
}

turn( players ) {
  let enemy = this.chooseEnemy(players);
  this.moveToEnemy(enemy);
  this.tryAttack(enemy); 
}

}  

class Warrior extends Player {
constructor ({name, position}) {
  super({name, position});
  this.life = 120;
  this.speed = 2;
  this.attack = 10;
  this.description = 'Воин';
  this.weapon = new Sword;
  this.lifeStart = this.life;

}

takeDamage (damage) {
  if ( this.life < this.lifeStart * 0.5 && this.getLuck() > 0.8) {
    if (this.magic == 0) {
      this.life = this.life - damage;
    } else {
      this.magic = this.magic - damage;
    }
  }
  if (damage > this.life) {
    this.life = 0
  } else {
    this.life = this.life - damage
  }	

}
}

class Archer extends Player {
constructor ({name, position}) {
  super({name, position});
  this.life = 80;
  this.magic = 35;
  this.attack = 5;
  this.agility = 10;
  this.description = 'Лучник';
  this.weapon = new Bow();

}

getDamage(distance) {
  return (this.attack + this.weapon.getDamage()) * this.getLuck() * distance / this.weapon.range;
}

}

class Mage extends Player {
constructor ({name, position}) {
  super({name, position});
  this.life = 70;
  this.magic = 100;
  this.attack = 5;
  this.agility = 8;
  this.description = 'Маг';
  this.weapon = new Staff();
  this.magicStart = this.magic;

}

takeDamage(damage) {
  if(this.magic > 0.5 * this.magicStart) {
    damage =damage / 1.5;
    this.magic = this.magic - 12
  }
  if (damage > this.life) {
    this.life = 0
  } else {
    this.life = this.life - damage
  }
}
}

class Dwarf extends Warrior {
constructor ({name, position}) {
  super({name, position});
  this.life = 130;
  this.attack = 15;
  this.luck = 20;
  this.description = 'Гном';
  this.weapon = new Axe();
  this.damageCounter = 0;

}

takeDamage(damage) {
  this.damageCounter++
  if(this.damageCounter == 6 && getLuck() > 0.5) {
    damage = damage / 2
  }
  if (damage > this.life) {
    this.life = 0
  } else {
    this.life = this.life - damage
  }
}
}

class Crossbowman extends Archer {
constructor ({name, position}) {
  super({name, position});
  this.life = 85;
  this.attack = 8;
  this.agility = 20;
  this.luck = 15;
  this.description = 'Арбалетчик';
  this.weapon = new LongBow();

}
}

class Demiurge extends Mage {
constructor ({name, position}) {
  super({name, position});
  this.life = 80;
  this.magic = 120;
  this.attack = 6;
  this.luck = 12;
  this.description = 'Демиург';
  this.weapon = new StormStaff();

}

getDamage(distance) {
  if (distance <= this.weapon.range) {
    if (this.magic > 0 && this.getLuck() > 0.6) {
      return 1.5 * (this.attack + this.weapon.getDamage())*this.getLuck() / distance;
    } else {
      return  (this.attack + this.weapon.getDamage())*this.getLuck() / distance;
    }
  } else {
    return 0;
  }
}
}

function play(players) {
for (let i = 0; i < length; i++) {
  players[i].turn(players);
  }
for (let i = 0; i < length; i++) {
  if (players[i].isDead()) {
    players[i] = null;
  }
}  
if (players.length == 1) {
  console.log('Winner:' + players[i])
  return players[i];
}
}


let weapon = new Weapon({
  name: 'weapon',
  attack: 20,
  durability: 10,
  range: 1
});

weapon.takeDamage(5);
console.log(weapon.durability);
weapon.takeDamage(50);
console.log(weapon.durability);

let arm = new Arm;
arm.takeDamage(20);
console.log("arm durability:" + arm.durability)
console.log("arm range:" + arm.range)

let bow = new Bow;
console.log(bow.getDamage(), bow.durability);
bow.takeDamage(100)
console.log(bow.getDamage(), bow.durability);
bow.takeDamage(50)
console.log(bow.getDamage(), bow.durability);
bow.takeDamage(150)
console.log(bow.getDamage(), bow.durability);

let player = new Player({
name: 'ivan demidov'
})
console.log(player.getLuck());

console.log(player.getDamage(1));
console.log(player.getDamage(2));
console.log(player.getDamage(4));
player.takeDamage(10);
console.log(player.life);
player.takeDamage(80);
console.log(player.life);
player.takeDamage(900);
console.log(player.life);

let warrior = new Warrior({});
console.log(warrior.life, warrior.magic);
warrior.takeDamage(50)
console.log(warrior.life, warrior.magic);
warrior.takeDamage(5)
console.log(warrior.life, warrior.magic)

let mage = new Mage({});
console.log(mage.life, mage.magic)
mage.takeDamage(50);
console.log(mage.life, mage.magic)
let gh = new Warrior({position: 0})
gh.moveLeft(9)
console.log(gh.position)
gh.moveRight(1)
console.log(gh.position)
gh.moveRight(2)
console.log(gh.position)

let player1 = new Player({
  name: 'игрок 1'
})
let player2 = new Player({
  name: 'игрок 2'
})
let player3 = new Player({
  name: 'игрок 3'
})
player1.takeDamage(10)


let livePlayers = [player1, player2, player3]

console.log(player2.chooseEnemy(livePlayers))
console.log(player2.life)
player1.tryAttack(player2)
console.log(player2.life)