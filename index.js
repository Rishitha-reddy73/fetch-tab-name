document.getElementById("btn").addEventListener("click",getCurrentTab);
async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    console.log(tab.title)
    document.getElementById("tabName").textContent=tab.title
  }

  
  