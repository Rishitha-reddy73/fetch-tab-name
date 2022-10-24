document.getElementById("btn").addEventListener("click",getCurrentTab);
const links=["https://www.linkedin.com/in/stephaniechill/","https://www.linkedin.com/in/marillynhewson/","https://www.linkedin.com/in/chris-kubasik/","https://www.linkedin.com/in/bill-brown-904464160/"]
async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    for(let i=0;i<links.length;i++){  
    let creating = chrome.tabs.create({
      url:links[i]
      ,selected:false
})
// console.log(creating);
    }
    document.getElementById("tabName").textContent=tab.title;
  }


  
  