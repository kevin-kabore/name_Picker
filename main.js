var wdi_24_names = ["Adrianna", "Andrew", "Christian", "Daniel", "David",
                    "Desi", "Emily", "Jenny", "Kate", "Kevin", "Matt",
                    "Michael", "Ramin", "Taylor"];


alreadyCalled = [];
function eachName() {

  var randomName = wdi_24_names[Math.floor(Math.random() * wdi_24_names.length)];
  var index = alreadyCalled.indexOf(randomName);
  if (index === -1){
    console.log(randomName);
    alreadyCalled.push(randomName);
  } else {
    eachName();
  }

  if (alreadyCalled.length === wdi_24_names.length) {
    alreadyCalled = [];
    console.log("Called on every student! Resetting. Try again!");
  }
}
