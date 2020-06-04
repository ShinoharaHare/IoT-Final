const { exec } = require("child_process");

exec("python3 servoGo.py", (err, stdout, stderr) => {
	if(err){
		console.log("error");
		return ;
	}
	if(stderr){
		console.log("stderr");
		return ;
	}
	console.log(stdout);
});
