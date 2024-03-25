const alltodo =[]

function addtodo(){
    if(userInput.value =="" && userInput2.value ==""){
        alert("enter your input pls")
    }else{
        var names ={
            firsttodo : userInput.value,
            secondtodo: userInput2.value,
            newdate : `${new Date().getDate()} / ${new Date().getMonth()+1} / ${new Date().getFullYear()}`,
            newtime : `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`

        }
        console.log(names)
        alltodo.push(names)
        console.log(alltodo)

    }

    userInput.value=""
    userInput2.value=""
    displaytodo()


}

function displaytodo(){
    display.innerHTML =""
    display.innerHTML = `
    <tr>
        <td>S/N</td>
        <td>first todo</td>
        <td>second todo</td>
        <td>date</td>
        <td>time</td>
        
        </tr>`

    for (let i = 0; i < alltodo.length; i++) {
        display.innerHTML += `
        <tr>

        <th>${alltodo[i].firsttodo} </th>
        <th>${alltodo[i].secondtodo}</th>
        <th> ${alltodo[i].newdate}</th>
        <th> ${alltodo[i].newtime}</th>

        </tr>
        `
        
    }
}

function deletetodo(){
    displaytodo()
    alltodo.pop()
}

function deleteall(){
    displaytodo()
    alltodo.splice(0,alltodo.length)
}


