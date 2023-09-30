$(document).ready(function(){
    
});

$("h1").css("color","red");

document.querySelector("h1");
document.querySelectorAll("button");

$("h1").addClass("babar margine-50");
$("h1").text("by");

$("button").html("click me");         // html mess innerHTml

console.log($("img").attr("src"));

// Adding Event Listeners with jQuery

$("h1").click(function(){
    $("h1").css("color","red");
})

//.......

for (var i = 0; i < 5; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        document.querySelector("h1").style.color ="red"; 
    })
};


$("button").click(function(){
    $("h1").css("color","red");
})



//......

$("button").keypress(function(Event){
    $("h1").text(Event.key);
})


document.querySelector("button").keypress(function(Event){
    document.querySelector("h1").text(Event.key);
})