var Observable = require('FuseJS/Observable');

function gotoHome(){
	router.goto("home");
}
function pushHome(){
	router.push("home");
}
function pushDetail(){
	router.push("detail");
}
function gotoDetail(){
	router.goto("detail");
}
function pushCart(){
	router.push("cart");
}
function gotoCart(){
	router.goto("cart");
}
function goBack(){
	router.goBack();;
}


module.exports = {
 gotoHome : gotoHome,
 pushHome : pushHome,
 gotoDetail : gotoDetail,
 pushDetail : pushDetail,
 gotoCart : gotoCart,
 pushCart : pushCart,
 goBack : goBack
};