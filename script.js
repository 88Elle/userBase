let user = {

}

for(let i = 1; i <= 10; i++) {
let name = prompt('Введите имя');
let age = +prompt('Введите возраст');
user[i] = {
    name: name ,
    age: age
  }
}
for(let key in user){
    console.log(`Пользователь ${key}`);
    for(let newKey in user[key]){
       console.log(newKey == 'name' ? `Имя ${user[key][newKey]}` : `Возраст ${user[key][newKey]}`);

    }
}

console.log(user);
    
