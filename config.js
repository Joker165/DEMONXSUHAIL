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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347041039367,2348147673250";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_03_10_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDc2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NixcbiAgICAgICAgMjU1LFxuICAgICAgICA0MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY5LFxuICAgICAgICA4MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDMxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA0LFxuICAgICAgICA3OSxcbiAgICAgICAgMixcbiAgICAgICAgMTQsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MixcbiAgICAgICAgODksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjExLFxuICAgICAgICA5MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDk2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgwLFxuICAgICAgICA2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTg3LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDE5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDk3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDksXG4gICAgICAgIDYwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA3LFxuICAgICAgICA2MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDU5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjksXG4gICAgICAgIDE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDAsXG4gICAgICAgIDQwLFxuICAgICAgICA4NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDczLFxuICAgICAgICAzOSxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI3LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiM0ttUFllYUErS3FqMWtLL3NXZ0JPVnZXL2g0RkFHNzZnUFk5NEh3T090bz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSUNBWE1VTmhSZDZRTUhIaVpiN3BWUVwiLFxuICBcInBob25lSWRcIjogXCIzMTc1OGU0ZS1hNDEzLTRhY2YtYjQ5OS1hYTA1MDMzNzZiNzNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzEsXG4gICAgICAzNixcbiAgICAgIDEwMSxcbiAgICAgIDIyMCxcbiAgICAgIDEyOSxcbiAgICAgIDE0NyxcbiAgICAgIDAsXG4gICAgICAxMjcsXG4gICAgICA4NSxcbiAgICAgIDExNyxcbiAgICAgIDEyOSxcbiAgICAgIDM3LFxuICAgICAgNjcsXG4gICAgICA5MyxcbiAgICAgIDEyOSxcbiAgICAgIDIwNixcbiAgICAgIDUwLFxuICAgICAgMjI2LFxuICAgICAgMzYsXG4gICAgICA3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMCxcbiAgICAgIDM2LFxuICAgICAgMTA5LFxuICAgICAgMTczLFxuICAgICAgMTkxLFxuICAgICAgMTQyLFxuICAgICAgMjMyLFxuICAgICAgMzAsXG4gICAgICA3OSxcbiAgICAgIDExLFxuICAgICAgMTAwLFxuICAgICAgNzIsXG4gICAgICAzMCxcbiAgICAgIDk2LFxuICAgICAgMSxcbiAgICAgIDYwLFxuICAgICAgMTgwLFxuICAgICAgMjI2LFxuICAgICAgMTQ4LFxuICAgICAgMTcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJNSkdOTllUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQ3NjczMjUwOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiR2V3ZXhlXCIsXG4gICAgXCJsaWRcIjogXCIzMDc2MDY3MzI3NTkwNToxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQZk1oYk1DRUlER21iZ0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk9FSml3MWc2TDhqNm1HT21LSnlSVHlJd3VGU0w5R3dVbTI1YUhtM05mSE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicGhMMmdvdTN5Y3BoL1YzM1RmQUlaakdPTHF3MmNlTDF3QjlVSmpoVlNUcWtuZnlNTjljV2l3QVZYMThmeEdacjF3Wm1tOFM2aTU0b05OSmh3bGRFZ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYWZmcGZIaVVVZHAyelNSblBWbWJTN0pqQ2FRUDF6TEdic2ZRWGRaWG1sSzNGNkI4VmNHKzJTb0dEd1ZzWHZPSC9wVU1ET2U1ZWwzTFhTYjV0Qlo0QXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE0NzY3MzI1MDoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODQ3MTgxMlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
