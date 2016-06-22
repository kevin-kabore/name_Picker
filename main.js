var wdi_24_names = ["Adrianna", "Andrew", "Christian", "Daniel", "David",
                    "Desi", "Emily", "Jenny", "Kate", "Kevin", "Matt",
                    "Michael", "Ramin", "Taylor"];



function eachName() {
  var randomName = wdi_24_names[Math.floor(Math.random() * wdi_24_names.length)];
  console.log(randomName);
}
