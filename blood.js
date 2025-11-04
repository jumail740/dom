let tbody=document.getElementById("body");

function display(){
  let data=JSON.parse(localStorage.getItem("data"));
  let html="";
  data.forEach((element,index) => {
    html+=`<tr>
    <td>${element.name}</td>
    <td>${element.Phone}</td>
    <td>${element.gender}</td>
    <td>${element.group}</td>
    <td><button onClick='handleEdit(${index})'>Edit</button><button onClick='handleDelete(${index})'>Delete</button></td>
    </tr>`
  });
  tbody.innerHTML=html;
}
display();


function handleEdit(index){
  let data=JSON.parse(localStorage.getItem("data"));

  let input1=prompt("enter your name",data[index].name);
  let input2=prompt("enter your number",data[index].Phone);
  let input3=prompt("enter your gender",data[index].gender);
  let input4=prompt("enter your blood group",data[index].group);

  let input={
    name:input1,
    Phone:input2,
    gender:input3,
    group:input4
  }

data.splice(index,1,input);
localStorage.setItem("data",JSON.stringify(data));
display();

}

function handleDelete(index){
  let data=JSON.parse(localStorage.getItem("data"));
  let bool=confirm("do you want to delete?")
  if(bool==true){
    data.splice(index,1);
  }
  localStorage.setItem("data",JSON.stringify(data));
  display();
}

