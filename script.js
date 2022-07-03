function addListItem()
{
    let listText=document.getElementById('inputId').value;

    if(listText.length===0)
    {
        alert('Fill out the input box first!');
        return;
    }

    let newListItem=document.createElement('li');
    newListItem.classList='list-item';
    newListItem.innerText=listText;

    let ulItem=document.querySelector('ul');

    setTimeout( ()=>{
        ulItem.appendChild(newListItem);
    },300);
}