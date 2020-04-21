function tugas9(){
  var motor = {
    merk : "Honda",
    type : {
      type1 : "matic",
      type2 : "manual",
    },
    kapasitas : 250,
    maxkecepatan : 100,
  }
  for(var x in motor){
    console.log(motor[x]);
  }
}
tugas9();
