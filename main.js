let age = 55;
if (age > 0 && age < 100) {
  if (age > 0 && age < 18) console.log("Учеба");
  else if (age >= 18 && age < 65) console.log("Работа");
  else console.log("Пенсия");
}

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < list.length; i++) {
  switch (list[i]) {
    case 1: {
      console.log(list[i] + " разработчик");
      break;
    }
    case 2:
    case 3:
    case 4: {
      console.log(list[i] + " разработчика");

      break;
    }
    default:
      console.log(list[i] + " разработчиков");
  }
}
