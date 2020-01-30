// $("h1").css("background", "green");
// $("div").css("background", "purple");
// $("body").css("background", "yellow");
// $(".sq").css("width", "500px");
// $(".pic").css("border", "orange 110px solid");
// $("div[0]").css("background", "pink");

// $('img').attr("src", "https://i.pinimg.com/236x/ab/5f/a0/ab5fa0c9d58f73deba446656e5852cc5--children-books-christian.jpg");
// $('img').last().attr("src", "https://www.nwpro.ru/files/images/rgb-cmyk.png");
// $('img:first').attr("src", "https://www.nwpro.ru/files/images/rgb-cmyk.png");
// $(".courses").val();
// $('h1').removeClass("meow");
// $('.sq').addClass("gav");
// $('img').click(function(){alert("meow");
// }); 



$('ul').on("click", "li", function(){
	$(this).toggleClass("completed");
});   
    $('ul').on("click", "span", function(event){
    $(this).parent().fadeOut(1000, function(){
		$(this).remove()
	});
	event.stopPropagation();
})

$("input").keypress(function(event){
if (event.which === 13) {
	var to = $(this).val();
	$(this).val("");
	$('ul').append("<li><span><i class='fa fa-window-close-o'></i></span> " + to + "</li>" ) 

}
});






// $('input').on("click", function(){
// 	$('div').slideUp(3000, function(){
// 		$('div').slideDown(3000, function(){
// 		});
// 	});
// });




$('button').on("click", function(){
	$('#video').slideDown(3000, function(){
		
	});
}

	);
// $('h1').on("mouseenter",function(){
//     $(this).css("font-size", "100px");
// }
// 	);
// $('h1').click(function()
// 	{
// 		$(this).css("backgroundColor", "red");
// }); 
// $('input').keypress(function(event){
// 	if (event.which===13) {
// 		alert("crew");
// 	}

// }

// 	);



var Nums =3;
var color = Generate(Nums);
var sc = document.querySelectorAll(".sq");
var pickedColor = colors();
var rgb = document.getElementById("rgb");

var won = document.getElementById("won");
var h1 = document.querySelector("h1");
var but1 = document.querySelector(".bu");
var modal = document.querySelectorAll(".modal");


for( var i = 0; i < modal.length; i ++ ){
modal[i].addEventListener("click", function()  {
	modal[0].classList.remove("selected");
	modal[1].classList.remove("selected"); 
    this.classList.add ("selected");
    this.textContent === "Not" ? Nums = 6: Nums = 3; 


   // if (this.textContent === "Not") {
   // 	Nums = 3;
   // }
   // else{Nums = 6;}   
   // I am not sure the code is perfectly written, 
   // but this is the same as above qlthough its much longer
  

    reset(); 
});
}
for (var i = 0; i < sc.length; i++){
sc[i].addEventListener("click", function(){
	var clicked = this.style.backgroundColor;

	if (clicked === pickedColor) {
		won.textContent = "congrats!";
		change(pickedColor);
		h1.style.backgroundColor = pickedColor;
		but1.textContent = "Play again";
	}else {
		this.style.backgroundColor = "#a16d7f";
		won.textContent = "try adain!";
	}

});
}



function reset(){
	 color= Generate(Nums);
	pickedColor = colors();
	rgb.textContent = pickedColor;
	but1.textContent = "New Game"
    won.textContent = ""; 
   
	for (var i = 0; i < sc.length; i ++ ){
		if (color[i]) {
					sc[i].style.display = "block";
		sc[i].style.backgroundColor = color[i]; 
}       else{
		sc[i].style.display = "none"; 
	}
	}
		       	h1.style.backgroundColor = "pink";
}
		
	but1.addEventListener("click", function(){
	reset();
		
});	
	
function change(color){
	for (var i = 0; i < sc.length; i ++ ){
	sc[i].style.backgroundColor = color;
} }
 function colors(){
 	var random = Math.floor(Math.random () * color.length);
 		return color[random];	
 }

 function Generate (num){
 	var arr = []
 	for (var i = 0; i < num; i ++ ){
    
   arr.push(Random()) 

 	}

 	return arr;
 }
 function Random (){
  	 	var r = Math.floor(Math.random() * 256);
  	 	var g = Math.floor(Math.random() * 256);
  	 	var b = Math.floor(Math.random() * 256);
  	 	return  "rgb(" + r  + ", " +  g + ", " + b + ")";
  }

      

 
// not.addEventListener("click", function(){
// 	won.textContent = null;
//       not.classList.add("selected");
//       Nums



//      Nums = 6;
//      color= Generate(Nums);
//      pickedColor = colors();
//      	rgb.textContent = pickedColor;
//      	for (var i = 0; i < sc.length; i ++ ){
// 			sc[i].style.backgroundColor = color[i];
//             sc[i].style.display ="block";}
     
      
// });


// easy.addEventListener("click", function(){
//      won.textContent = null;
//      easy.classList.add("selected");

//           Nums = 3;
//      color= Generate(Nums);
//      pickedColor = colors();

//      	rgb.textContent = pickedColor;
//      	for (var i = 0; i < sc.length; i ++ ){
// 		if (color[i]) { 
// 			sc[i].style.backgroundColor = color[i];
// 		}
// 		else{ sc[i].style.display ="none";}
//      }
     
// });  !!!!!!!!!the same as above






  




// var but = document.querySelector("#bu");
// var t = document.querySelector("#score");
// var match = 0;
// var tt = document.querySelector("#score2")
// var match2 = 0;
// var button = document.querySelector("button");
// var over = false;
// var game = 5 ;
// var eset = document.querySelector("#reset");
// var p = document.querySelector("p span");
// var n = document.querySelector("input[type='number']");


// but.addEventListener("click", function(){
// 	if (!over) { 
// 	match ++ ;
// 	if (match === game) {
// t.classList.add("w");
// 		over = true;
// 		console.log("meowwwwww!!!!");

		
// 	}
// 	console.log(match);}
// 	t.textContent = match;
// });
// button.addEventListener("click", function(){
// 	if (!over) { 
// 	match2 ++ ;
// 	if (match2 === game) {
// 		tt.classList.add("w")
// 		over = true;
// 		console.log("meowwwwww!!!!")
// 	}
// 	console.log(match2);}
// 	tt.textContent = match2;
// });
// eset.addEventListener("click", function(){
// 	reset();
// });

// 	function reset(){

// 	t.textContent = 0 ;
//     tt.textContent = 0;
//    match2 = 0;
//    match = 0;
//    t.classList.remove("w");
//       tt.classList.remove("w");
//    over= false;

// };
// n.addEventListener("change", function(){
// p.textContent = n.value;
// game = Number(n.value);
// reset();
// });



// var button = document.querySelector("button");
// var isPurple = false;

// button.addEventListener("click", function(){
// if (isPurple) {
//  document.body.style.background= "white";}
//  else{
//  	document.body.style.background= "yellow";
//  }
//  isPurple= !isPurple
//  });

// button.addEventListener("click",function(){

// 	document.body.classlist.toggle("Purple");
// });

function changeText(){
h.textContect = "qqqqqqqq";
}


var first = document.querySelector("a");
first.addEventListener("click", function(){
	console.log("hello , MareK!");
});

var h1 = document.querySelector("h1"); 
var isBrown = false;  
setInterval(function(){
if (isBrown) {
	h1.style.color = "white";
}else {
	h1.style.color = "#ba9267";
}
isBrown = !isBrown;
},1000 );
//function weCanIt (ran){
//for(i=ran.length-1; i>=0; i--) 
//	{ console.log(ran[i]);}    
//}
//weCanIt([18,20,100])

//function isT(ar) {
//	var first = ar[0];
//	for (var i = 1; i<ar.length ; i++){
//		if (ar[1] !== first) {
//			return false;
///		}
	//}
	//return true;
//}


//var food = ['bread','sushi', 'cat'];
//var eat = prompt('what you want to eat');

//while (eat !== "q"){
//	food.forEach(function(m , i){
//		console.log("i will eat");
//	console.log(i +": "  + m);});
//if (eat==="check") {
//	console.log(food);
//}
//else if (eat ==="add") {
//	addTo();
	
//}
//else if (eat==="delet") {
//	toDelet();
///}
//var eat = prompt('what you want to eat');

//}
//console.log('bye:(')

//function addTo(){
///	var newEat = prompt('something else');
	//food.push(newEat);
//	console.log("added food")
//}
//function toDelet(){
//	var index = prompt("What do you want to delete?");
//	food.splice(index, 1);
//	console.log("deleted food");
//}

//var guess = prompt('lets guess it');
//while (guess.indexOf("5") ===-1 )
//{
//	var guess = prompt('no, try again looser');
//}
//alert('meow')
	

//alert('Hello, Learner ')
//function greeting 	(){
//	function ageInDays() {
//		var ageInDays = prompt('lets count days you have lived');}
//var name = prompt('tell me a name');//

//if (ageInDays<18) {
//	alert('you cant be here')
//}

//else if (ageInDays>18 && ageInDays<21 ) {
//	alert('ok , but without drinks')
//}
//if(ageInDays == 21) {
 //console.log("Happy 21st Birthday!");
//}
//if(ageInDays > 21) {
 //console.log("come n in");
//}

//alert(name +  ', you are ' + ageInDays +' days old'  ) 
//


//var result = 'hello ' + ' ' +name ;
//document.getElementById('j').innerHTML = age;//
//console.log(result);
//}
//greeting();

var img  = document.querySelectorAll('.pic');
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');

function openModal (event) {
	console.log(event.target.dataset.target);
	backdrop.style.display = 'block'; 
    modal.style.display = 'block';
}
function closeModal () {
	backdrop.style.display = 'none'; 
    modal.style.display = 'none';
}

backdrop.addEventListener('click', closeModal); 

 for (i = 0; i < img.length;  i++) {
 	img[i].addEventListener('click', openModal);
 }

var name = document.getElementById('name');
var mail = document.getElementById('mail');
var msg = document.getElementById('msg');
var button = document.querySelector('.submit');
var regEx = /.+@.+\..+/i;	
var form = document.querySelector('.form')


function checkInput(){
 if (regEx.test(mail.value) && msg.value.trim() !==""&& name.value !==""){
	button.style.backgroundColor = '#f59d05';
	button.disabled = false;
	
 } 
 else{
 	button.style.backgroundColor = '#8db9eb';
 	button.disabled = true;
 	
 }}