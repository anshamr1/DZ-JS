const hasLicence = true;
const age = 25;
const isDrink = false;

const canDrive = hasLicence && age >= 18 && !isDrink;
console.log(`Может водить: ${canDrive ? 'Может' : 'Не может'}`);
