var v = false;
function isSick() {
  if(v==false){
    v=true;
    document.getElementById("sick").innerText = "Not Sick";
    document.getElementById("sick").className = "btn btn-success";
  }
  else{
    v = false;
    document.getElementById("sick").innerText = "Sick";
    document.getElementById("sick").className = " btn btn-danger";
  }
  onMyBirthday(v).then((res)=>{
    alert("I have "+ res + " cakes");
  }).catch((err)=>{
    alert("Kayo is sick, so no cakes available");
  }).finally(()=>{
    alert("Party");
  })
}
const onMyBirthday = (isKayoSick) => {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(!isKayoSick){
        resolve(2);
      }else{
        reject();
      }
    },200);
  });
};



