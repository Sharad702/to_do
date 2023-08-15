let task = document.getElementById("textadd");
let listitems = document.getElementById("listitems");

function addtask()
{
    if(task.value === '')
    {
        alert("Enter something");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML=task.value;
        listitems.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    task.value='';
}

listitems.addEventListener("click", function(event)
{
    if(event.target.tagName === "LI")
    {
        event.target.classList.toggle("checked");
    }
    else if(event.target.tagName === "SPAN")
    {
        event.target.parentElement.remove();
    }
})