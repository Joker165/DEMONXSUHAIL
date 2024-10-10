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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_17_10_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzLFxuICAgICAgICA2MCxcbiAgICAgICAgNixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTc2LFxuICAgICAgICA5NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDkxLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTcsXG4gICAgICAgIDk3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDksXG4gICAgICAgIDU0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDc3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA3NixcbiAgICAgICAgOSxcbiAgICAgICAgMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM2LFxuICAgICAgICA3NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIyLFxuICAgICAgICA1MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDU5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjksXG4gICAgICAgIDI5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDAsXG4gICAgICAgIDc5LFxuICAgICAgICA1NixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ4Y2hxdE50TVhwTEpuSlZoUFRJZ0xzbnFFWThpVzQ5YitPYXRnaWhjWWNZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNDEwMzkzNjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY0NEM2OTEyOThGMkZCMUU4MTI2MUQzQkU5MTlDNkZEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODYwMjIyM1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJsUGYxNWhET1NraVh6QUhsX3RSX2JRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIzYzljNzk3LWEyZjYtNDU3Ni05ODgwLWRkYTZhM2RiZmYzMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDAsXG4gICAgICAyMDgsXG4gICAgICAxODYsXG4gICAgICAxNTYsXG4gICAgICAxODAsXG4gICAgICAxMjEsXG4gICAgICAyMDMsXG4gICAgICAxNCxcbiAgICAgIDE0NSxcbiAgICAgIDI1NCxcbiAgICAgIDE4LFxuICAgICAgNTksXG4gICAgICAxMjQsXG4gICAgICAzNyxcbiAgICAgIDE4NCxcbiAgICAgIDM2LFxuICAgICAgMjM2LFxuICAgICAgNDEsXG4gICAgICAyMTMsXG4gICAgICAyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNixcbiAgICAgIDcxLFxuICAgICAgMjI0LFxuICAgICAgODksXG4gICAgICAxNDcsXG4gICAgICAzOCxcbiAgICAgIDEsXG4gICAgICAxNjYsXG4gICAgICAxNSxcbiAgICAgIDMxLFxuICAgICAgMjYsXG4gICAgICAxNTMsXG4gICAgICAxNjEsXG4gICAgICA5MyxcbiAgICAgIDI2LFxuICAgICAgMTI0LFxuICAgICAgMjUyLFxuICAgICAgMjQwLFxuICAgICAgMTcxLFxuICAgICAgMjE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjI4SjJXSk04XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQxMDM5MzY3Ojg3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQmx1ZVwiLFxuICAgIFwibGlkXCI6IFwiMjE0NjE1NTczMTQzNzEyOjg3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09hQnE5OEdFT1hBb2JnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaFloeVpUN3p4dFdlbXVOcitOV2ZRa1IrR1lsSkNxUEQ1NGc4NTJleHhTUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvRWlqamFvTkpzMVkzTEQ4VVN3aHEzTmJ1VWlyVGFZRXROdU9jSCtnWWlEQ1A5QTFLTWJWWk9UZkVTd2dDc0hoRGc5VFQ1MFVUKzlrVjBOd0dZSWJEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJEUUlzU3RJZlllVFI0bWsrckgvMnMyOWpBNjc3cW1Hc3IrQ0duZXNZTEQ2Qk9BZENQOHdLMGp2bDVBTnNjcy9URWcxb2NrbU4yZ2p4Z1JabU1ZQWdCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDQxMDM5MzY3Ojg3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODYwMjIxN1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
