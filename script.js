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
    newListItem.setAttribute('onclick','crossed(this)');
    
    let ulItem=document.querySelector('ul');

    setTimeout( ()=>{
        ulItem.appendChild(newListItem);
        document.getElementById('inputId').value="";
    },300);
}

function crossed(element)
{
    if(element.classList.contains('checked'))
    {
        if(confirm('Remove the item from the list?'))
        {
            element.remove();
        }
        else
        {
            element.classList.remove('checked');
        }
        return;
    }
    element.classList.add('checked');
}