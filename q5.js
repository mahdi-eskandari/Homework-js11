// ? 5. Modify the array of object below with (for of ) like this:
// todo : If the  gamer_id is 1002 change the gamer_name as you like

let c = [
  {
    gamer_id: 1001,
    gamer_name: 'Jason',
  },
  {
    gamer_id: 1002,
    gamer_name: 'Ali',
  },
  {
    gamer_id: 1003,
    gamer_name: 'Mathew',
  },
];
for(const el of c) {
if(el.gamer_id === 1002) {
  el.gamer_name = "Mahdi"
}
}
console.log(c);

// ! Answer
