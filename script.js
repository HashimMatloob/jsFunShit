const btn=document.getElementById("holdbtn");
const bar=document.getElementById("progress-bar");
btn.onmousedown =()=> bar.style.width="100%";
btn.onmouseup =()=> bar.style.width="0%";
btn.onmouseleave =()=> bar.style.width="0%";
btn.onclick=()=> console.log("hi");
