let button=document.getElementById("frm");



button.addEventListener("submit",(e)=>{
    e.preventDefault();
    let input1=document.getElementById("name");
let input2=document.getElementById("Phone");
let input4=document.getElementById("group");
  let input3=document.querySelector('input[type=radio]:checked');
let data=JSON.parse(localStorage.getItem("data"))||[];
    let input={
        name:input1.value,
        Phone:input2.value,
        gender:input3.value,
        group:input4.value
    }
  data.push(input);

localStorage.setItem("data",JSON.stringify(data));

});


