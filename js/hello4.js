// function userBlur(qualifiedName, value) {
//     console.log("hello");
//     var username = document.getElementsByName("username");
//     console.log(username[0].value.length);
//     console.log("username长度为:"+username[0].getAttribute("size"));
//     if(username[0].value.length<10)
//     {
//         document.getElementById("span1").innerText="<h1>您的用户名不符合规则</h1>";
//         document.getElementById("span1").setAttribute("style", "color:red");
//     }else
//     {
//         document.getElementById("span1").innerHTML="可以注册";
//     }
// }


window.onload = function () {
   var div1 =  document.getElementById("div1");
   var span1 =  document.createElement("span");
   span1.innerText = "最千年";
   div1.appendChild(span1);
}