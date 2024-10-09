const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/68ab85fe183de156be48a.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "BLUE DEMON !" 


global.devs = "2347041039367" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347041039367,2349114538459";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347041039367";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 10
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/9dcef2b49909742db8dbd.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347041039367";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_17_10_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDUwLFxuICAgICAgICA4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODcsXG4gICAgICAgIDg2LFxuICAgICAgICA3NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM5LFxuICAgICAgICA3MixcbiAgICAgICAgMTgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA5NixcbiAgICAgICAgNjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgODcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMSxcbiAgICAgICAgNzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDc1LFxuICAgICAgICA0MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3LFxuICAgICAgICA2MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTUzLFxuICAgICAgICA0NyxcbiAgICAgICAgODAsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU1LFxuICAgICAgICA0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM4LFxuICAgICAgICA1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MixcbiAgICAgICAgMjUzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICAxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDY3LFxuICAgICAgICA2MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA4MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDczLFxuICAgICAgICA0MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDgsXG4gICAgICAgIDU3LFxuICAgICAgICA3OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NixcbiAgICAgICAgOTcsXG4gICAgICAgIDU2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMzcsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDk4LFxuICAgICAgICA5MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNCxcbiAgICAgICAgMixcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNSxcbiAgICAgICAgMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDgwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiLzR5SmJmV2NsOWkzSzBSb0dWVWJlMGlCcDFNMXhpMVI1WEJNNXZvOFdZWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieG1Kb2VKTVRRVy1zaEkyTHpwTHFRd1wiLFxuICBcInBob25lSWRcIjogXCI1MzkxZmQ1Ny1lNjVlLTRlOWMtYTFhZS0wMDg5ZGJhYTU4MDFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzUsXG4gICAgICAyNTIsXG4gICAgICAzNixcbiAgICAgIDEwMSxcbiAgICAgIDE4OCxcbiAgICAgIDQ0LFxuICAgICAgMTUxLFxuICAgICAgMTQxLFxuICAgICAgMjE1LFxuICAgICAgNixcbiAgICAgIDE2NixcbiAgICAgIDEyMyxcbiAgICAgIDIwNyxcbiAgICAgIDEwNyxcbiAgICAgIDQxLFxuICAgICAgOTUsXG4gICAgICAxMDgsXG4gICAgICAzMyxcbiAgICAgIDIyMixcbiAgICAgIDIyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjMsXG4gICAgICAzLFxuICAgICAgMTYsXG4gICAgICAxMTksXG4gICAgICAxNzYsXG4gICAgICA3NCxcbiAgICAgIDIzNixcbiAgICAgIDE0NixcbiAgICAgIDEzNixcbiAgICAgIDE0MCxcbiAgICAgIDE2MSxcbiAgICAgIDUxLFxuICAgICAgMjA1LFxuICAgICAgMTEyLFxuICAgICAgMTk5LFxuICAgICAgMTc5LFxuICAgICAgMTEyLFxuICAgICAgMjE0LFxuICAgICAgMTYsXG4gICAgICAxMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTUJUNTJTRVNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMTQ1Mzg0NTk6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjExOTMxMDg0NDEwOTU5OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSSs3K05NTUVLWFptcmdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1WWdQekZONlphZ21WTDVPUkJtWFVqVFZ4TU9oakUyS2l4WnZnZkdjOHpJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIndkWnByWStBanB3K3REWlJxc2lBTWN3RUM1NjQ1U1pabzdLWDRxTlJvQzNKakxLL3o4V1Q5Y21FMlJkbE5LaXpTbjNhTjVQdFpuSXhaSEdDMUJDQ0NnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlVLRFNEdHhHb3I1cCtMQ05ka2twRW1YblhJaWgxU0J4LzVVVDB3OFV5RHBtd1JFUVdLblFJd0JkNjh2VUFlYlVSaDk3S0YxOFpqbEFPb3RBZEdvOUFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMTQ1Mzg0NTk6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4NDkwNjY0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "BLUE DEMON",
  ownername:process.env.OWNER_NAME|| "BLUE DEMON",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "BLUE DEMON"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
