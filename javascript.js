console.log('Start JS File'); /* Start */

function cmds(){
console.log('------------------------------------------');
console.log('-CMDS:                                   -');
console.log('------------------------------------------');
console.log('-dateandtime(); : Give The Date And Time.-');
console.log('-cmds(); : Print This List.              -');
console.log('------------------------------------------');
}

console.log('Hello, World!'); /* Hello! */

function dateandtime(){
	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	var dateTime = date+' '+time;
	console.log(dateTime);
}
dateandtime();

console.log('End JS File'); /* End */
