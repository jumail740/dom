let button=document.getElementById("frm");
let input1=document.getElementById("name");
let input2=document.getElementById("phn-no");
let input3=document.getElementsByClassName("gender");
let input4=document.getElementsByClassName("group");


button.addEventListener("submit",(e)=>{
    e.preventDefault();
    let data={
        name:input1.value,
        PhoneNumber:input2.value,
        gender:input3.value,
        group:input4.value
    }
     let parsedarr=JSON.parse(localStorage.getItem("name"))||[];
  parsedarr.push(data);

localStorage.setItem("name",JSON.stringify(parsedarr));

});




  // console.log(data);
  



}
display();
