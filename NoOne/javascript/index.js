/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-25 10:54:53
 * @version $Id$
 */
$(document).ready(function(){
  $("#buttonImgOn").click(function(){
    $("#header-img").fadeIn(1500);
    $("header h1:first").slideDown();
  });
});

$(document).ready(function(){
	$("#buttonImgOff").dblclick(function(){
		$("#header-img").fadeOut("slow",function(){
			// alert("hahaha");

		});
		$("header h1:first").fadeOut();
	});
});

// $(document).ready(function(){
// 	$("#aaa").click(function(){
// 		$("#header-img").animate({
// 			top:'+=100px',
// 		});
// 		$("#header-img li img").animate({
// 			width:'+=50px',
// 			height:'+=50px'
// 		});
// 	});
// });


function aaa(){
	// alert("aaa!");
// var one =
// 	{
// 		name : "jack",
// 		age : 12,
// 		getValue : function(){
// 			return this.name;
// 		}
// 	}
// console.log(one.name);
// console.log(one.age);
// console.log(one["name"]);
// console.log(one.getValue());

	// var f = true;
	// if (f === true) {
	//   var a = 10;
	// }

	// function fn() {
	//   var b = 20;
	//   c = 30;
	// }

	// fn();
	// console.log(a);
	// console.log(b);
	// console.log(c);


// function fn(a) {
//   console.log(a);
//   var a = 2;
//   function a() {}
//   console.log(a);
// }
// fn(1);

// var a = new function() {return "圆心"}; 
// alert(a); 

// function example1() {
// 	var f = function() {return 1;};
// 	return f;
// 	console.log(f);
// 	var f = function() {return 2;};
// 	console.log(f);
// }
// var a1 = example1();
// console.log(a1());


// function example2() {
// 	function f() {return 1;};
// 	return f;
// 	function f() {return 2;};
// }
// var a2 = example2();
// console.log(a2());



// function example7() {
// 	function f() {return 1;};
// 	var f = function() {return 2;};
// 	var f;
// 	return f;
// }
// var a7 = example7();
// console.log(a7());


// function example5() {
// 	// var f = function() {return 1;};
// 	var f;//function声明
// 	var f;
// 	f = function f(){return 2;};
// 	f = function(){return 1;};

// 	// function f() {return 2;};
// 	return f;
// }
// var a5 = example5();
// console.log(a5());


// function example() {
// 	f = 1;
// 	return f;
// 	function f(){return 1;};
// }
// var a = example();
// console.log(f);

var dom = function(){
	console.log("null");
};

dom.show = function(){
	console.log("show message");

};
dom.prototype.display = function(){
	console.log("display");
};
dom();
dom.show();
var dd = new dom();
dd.display();

}
