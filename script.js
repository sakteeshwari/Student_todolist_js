var nameinput=document.getElementById('name-input-box')
var ageinput=document.getElementById('age-input')

var male=document.getElementById('gender1')
var female=document.getElementById('gender2')
var courseinput=document.getElementById('myselectoption')
var savebutton=document.getElementById('button-save')

var emailinput=document.getElementById('email')
// form 2
var table2=document.getElementById('table-two')
var tablerow=document.getElementById('row2-box')



savebutton.addEventListener('click',function(){
    var boxrowtable2=document.createElement('tr')
    // boxrowtable2.classList.add(".container")
    var nameboxcolumn=document.createElement('td')
    nameboxcolumn.innerHTML=nameinput.value
    boxrowtable2.appendChild(nameboxcolumn)
    table2.appendChild(boxrowtable2)
       // tablerow.append()
    //    console.log(courseinput.);
   
    var ageboxcolumn=document.createElement('td')
    ageboxcolumn.textContent=ageinput.value
    boxrowtable2.appendChild(ageboxcolumn)
    table2.appendChild(boxrowtable2)

    var gendercolumn=document.createElement("td")
    //adding ternary operator
    gendercolumn.textContent= male.checked ? "Male" : "Female";
    // console.log(gendercolumn)
    boxrowtable2.appendChild(gendercolumn)
    table2.appendChild(boxrowtable2)

    var courseboxcolumn=document.createElement('td')
    courseboxcolumn.textContent=courseinput.value
    // console.log(courseboxcolumn)
    boxrowtable2.appendChild(courseboxcolumn)
    table2.appendChild(boxrowtable2)

    var emailboxcolumn=document.createElement('td')
    emailboxcolumn.textContent=emailinput.value
    // console.log(emailboxcolumn)
    boxrowtable2.appendChild(emailboxcolumn)
    table2.appendChild(boxrowtable2)
    
    var actiondeletebutton=document.createElement('td')
    actiondeletebutton.innerHTML="<button class='deleted-button'>Delete</button>"
    boxrowtable2.appendChild(actiondeletebutton)
    table2.appendChild(boxrowtable2)

})



function deleted(event)
{
    event.target.parentElement.parentElement.remove()
    // actiondeletebutton.closest('.container').remove()

}