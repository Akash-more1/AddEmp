let Empname=document.querySelector('#name');
let profession=document.querySelector('#profession');
let Age=document.querySelector('#profession');

let er1=document.querySelector('#er1');
let er2=document.querySelector('#er2');

let oep=document.querySelector('#oep');

let error=document.querySelector('#error');

let empCointainer=document.querySelector('#emp');

let addEmp= document.querySelector('#add');

addEmp.addEventListener('click', signIn);

let ct=1;
function signIn(eventDtails){

    
        console.log(empCointainer.length);
    
    
    if(Empname.value=="" || profession.value==""  || Age.value==""){
       
        er2.style.display='none';
        er1.style.display='inline';
        
        
        return;
    }

    if(Empname.valuelength>0 || profession.value.length>0  || Age.value>0){
        er1.style.display='none';
        er2.style.display='inline';
        
    }
   

    let temp=document.createElement('div');
    temp.className='added_employee';
    temp.style.display='flex';
    temp.id=`temp${ct}`

    let emp=document.createElement('div');
        emp.className='emp';
        
        emp.append(`${ct} -  Name: ${Empname.value} Profession: ${profession.value}  Age: ${Age.value}`);

    let deletebtn=document.createElement('button');
        deletebtn.className='deletebtn';
        deletebtn.style.marginLeft='10px';
        deletebtn.innerText='Delete User';
        deletebtn.id=`btn${ct}`
        deletebtn.addEventListener('click', deleteEmp);

           temp.append(emp);
            temp.append(deletebtn);
            empCointainer.append(temp);
            
            ct++;
}

function deleteEmp(eventDtails){
     let str=eventDtails.target.id.slice(3);
    
     let tt=document.getElementById(`temp${str}`);
     tt.remove();
}