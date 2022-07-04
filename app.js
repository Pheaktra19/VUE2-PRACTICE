// new Vue({
//   el: '#vue-app',
//   data : {
//     name: 'Pheaktra',
//     job: 'Web Developer',
//     age: ' 20',
//     website: 'https://www.booking.com/',
//     x: 0,
//     y: 0
//   },
//   methods: {
//     greet: function(time){
//       return 'Good ' + time + ' ' + this.name;
//     },
//     Add and Sunstract Number of Age
//     add: function(inc){ //inc = increase
//       this.age += inc;
//     },
//     Substract: function(dec){ // dec = decrease
//       this.age -= dec;
//     },
//     // Movemouse
//     updateXY: function(event){
//       this.x = event.offsetX;
//       this.y = event.offsetY;
//     },
//     //Keybard Event
//     logName:function() {
//       console.log('you entered your name.');
//     },
//     logAge:function() {
//       console.log('you entered your age.');
//     }
//   }
// });

new Vue({
  el: '#vue-app',
  data:{
    characters: ['Pheaktra', 'Phanath', 'Bank', 'Man'],
    admins: [
      { name: 'Pheaktra', age: 20},
      { name: 'Phanath', age: 21},
      { name: 'Bank', age: 22},
      { name: 'Man', age: 23}
    ]
  },
  methods: {

  },
  computed: {

  }
});
