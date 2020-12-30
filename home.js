var task,database;

function setup(){
input = select(".op")
div = select(".iam")
pre = select(".non");
  var firebaseConfig = {
  apiKey: "AIzaSyAZ12rHKVyfreB5oONojasLM2QXs9Szl2U",
    authDomain: "todo-ec98e.firebaseapp.com",
    databaseURL: "https://todo-ec98e-default-rtdb.firebaseio.com",
    projectId: "todo-ec98e",
    storageBucket: "todo-ec98e.appspot.com",
    messagingSenderId: "693543253844",
    appId: "1:693543253844:web:657d09490cd18cfcb2fac1"
  };
        //Initialising Firebase here
  firebase.initializeApp(firebaseConfig);
//    Console Logging firebase
  console.log(firebase);
//  Initialising the firebase database
 database = firebase.database();

console.log(firebase);
    var ref = database.ref("Pratyush");
    ref.on("value", gotData, errData);
    
    var objDiv = document.getElementById("cpt");
objDiv.scrollTop = objDiv.scrollHeight;
}
function draw(){
    
}

function addTask(){
    task = input.value();
    console.log(task);
     var data ={
          tsk : task
}
database.ref("Pratyush").push(data,finished);
  console.log("send called");
    
    var ref = database.ref("Pratyush");
    ref.on("value", gotData, errData);
    
    window.location.reload();
}

function finished(error) {
  if (error) {
    console.log('ooops');
  } else {
    console.log('data saved!');
  }
}

function gotData(data) {
    var listings = selectAll(".task");
    for(var i =0; i<listings.length; i++){
        listing[i].remove();
    }
  var fruits = data.val();
  // Grab the keys to iterate over the object
  var keys = Object.keys(fruits);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    // Look at each fruit object!
    var fruit = fruits[key];
      console.log(fruit.tsk)
     pre.style("display","none") 
 createDiv(fruit.tsk).addClass("task").parent(div)
  }
}

function errData(error) {
  if (error) {
    console.log('ooops');
  } else {
    console.log('Wow');
  }
}


