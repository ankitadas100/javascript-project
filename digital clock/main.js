let hrs=document.getElementById("hrs")
let min=document.getElementById("min")
let sec=document.getElementById("sec")
let am_pm=document.getElementById("am_pm")


setInterval(()=>{
let currentime=new Date();
hrs.innerHTML=(currentime.getHours()<10?"0":"")+currentime.getHours();
min.innerHTML=(currentime.getMinutes()<10?"0":"")+currentime.getMinutes();
sec.innerHTML=(currentime.getSeconds()<10?"0":"")+currentime.getSeconds();
},1000)
