let students=[];

function getGrade(avg){

if(avg>=90) return "A+";
if(avg>=75) return "A";
if(avg>=60) return "B";
if(avg>=40) return "C";

return "Fail";

}

function gradeClass(g){

if(g=="A+"||g=="A") return "gradeA";
if(g=="B") return "gradeB";

return "gradeC";

}

function addStudent(){

let name=document.getElementById("name").value;
let roll=document.getElementById("roll").value;

let math=Number(document.getElementById("math").value);
let science=Number(document.getElementById("science").value);
let english=Number(document.getElementById("english").value);

if(name==""||roll==""){

alert("Fill all details");
return;

}

let total=math+science+english;
let avg=(total/3).toFixed(2);

students.push({

name,
roll,
math,
science,
english,
total,
avg,
grade:getGrade(avg)

});

display();

document.querySelectorAll(".form input").forEach(x=>x.value="");

}

function display(data=students){

let table=document.getElementById("table");

table.innerHTML="";

let highest=0;
let sum=0;

data.forEach((s,index)=>{

highest=Math.max(highest,s.total);

sum+=Number(s.avg);

table.innerHTML+=`

<tr>

<td>${s.name}</td>

<td>${s.roll}</td>

<td>${s.math}</td>

<td>${s.science}</td>

<td>${s.english}</td>

<td>${s.total}</td>

<td>${s.avg}</td>

<td class="${gradeClass(s.grade)}">${s.grade}</td>

<td>

<button class="delete" onclick="removeStudent(${index})">

Delete

</button>

</td>

</tr>

`;

});

document.getElementById("students").innerHTML=data.length;

document.getElementById("highest").innerHTML=highest;

document.getElementById("average").innerHTML=data.length?(sum/data.length).toFixed(2):0;

}

function removeStudent(index){

students.splice(index,1);

display();

}

function searchStudent(value){

value=value.toLowerCase();

let filtered=students.filter(s=>

s.name.toLowerCase().includes(value)||

s.roll.toLowerCase().includes(value)

);

display(filtered);

}

display();