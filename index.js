const {TOKENS} = require(`./tokens.js`);
const fs = require("fs");
const {fetchAsync} = require(`./utils.js`);
const rootUrl="https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token="

start();
 async function start(){
 var log="Yenelenen tokenler";   
 log+="\n" + new Date().toLocaleString('tr-TR', { day:'numeric', month:'long', year:"numeric",hour:"numeric",minute:"numeric",hour12: false ,timeZone: 'Asia/Istanbul' })

    for(const i in TOKENS){

     var {token,username}= TOKENS[i];

     var result = await fetchAsync(rootUrl+token);
       console.log(username + "\n" + result + "\n\n");
       log+="\n"+username;
    }

    writeFile(log,"log",`./`,"txt");
}



function writeFile(data,name,dir,ext){
    var data = (ext == "json") ? JSON.stringify(data) : data;
    fs.writeFile(dir+name+"."+ext, data , () => {
		console.log(dir+name+"."+ext," yazıldı")
    });
}

