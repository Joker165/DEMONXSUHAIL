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
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/68ab85fe183de156be48a.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "BLUE DEMON !" 


global.devs = "2347041039367" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347041039367,22892439409";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_07_10_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA2NixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI2LFxuICAgICAgICAzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDU1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTksXG4gICAgICAgIDIsXG4gICAgICAgIDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNyxcbiAgICAgICAgODUsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxODksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE2LFxuICAgICAgICAzMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDcwLFxuICAgICAgICAzMCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICA1LFxuICAgICAgICA2NyxcbiAgICAgICAgODcsXG4gICAgICAgIDU0LFxuICAgICAgICAxODEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDc0LFxuICAgICAgICA1NixcbiAgICAgICAgMzcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2MixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAxLFxuICAgICAgICA4NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjYsXG4gICAgICAgIDMyLFxuICAgICAgICA2MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDk2LFxuICAgICAgICAxODksXG4gICAgICAgIDYzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjksXG4gICAgICAgIDk1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDU5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDkzLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAxODEsXG4gICAgICAgIDc5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjA3LFxuICAgICAgICA2NCxcbiAgICAgICAgODYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxODksXG4gICAgICAgIDY0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjksXG4gICAgICAgIDExMixcbiAgICAgICAgMzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUwLFxuICAgICAgICA2OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMCxcbiAgICAgICAgODUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicHpyZmp4bjdPakdGRk9hZ1RCTnQ3VVY2a1U1THFCd2s3ZTVPT051cytFQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOG14RjlwRFNTYnlkTkRsamFYRDBDUVwiLFxuICBcInBob25lSWRcIjogXCJkZTU3ODBjOS1iMDhiLTQyZDMtYTIyYi05NmJmZjMwZTMwMDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIzLFxuICAgICAgMTA2LFxuICAgICAgMjYsXG4gICAgICAxOTQsXG4gICAgICAyMjEsXG4gICAgICAyMjIsXG4gICAgICAxMDAsXG4gICAgICAxNzksXG4gICAgICAxODIsXG4gICAgICAxNDksXG4gICAgICAyNTUsXG4gICAgICAyMjgsXG4gICAgICAyMjgsXG4gICAgICA3NCxcbiAgICAgIDE0NCxcbiAgICAgIDM0LFxuICAgICAgMTM0LFxuICAgICAgMjUzLFxuICAgICAgMjM3LFxuICAgICAgMTc5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MSxcbiAgICAgIDEyMyxcbiAgICAgIDIxOSxcbiAgICAgIDc3LFxuICAgICAgMjIsXG4gICAgICAxMDksXG4gICAgICA3NyxcbiAgICAgIDUxLFxuICAgICAgMjAxLFxuICAgICAgMTgsXG4gICAgICAxNTEsXG4gICAgICA1NixcbiAgICAgIDEwOCxcbiAgICAgIDI0OSxcbiAgICAgIDEyLFxuICAgICAgMTUyLFxuICAgICAgMTE0LFxuICAgICAgMTg1LFxuICAgICAgMTMzLFxuICAgICAgMTEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkMxTE5UOE1CXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQxMDM5MzY3OjgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiYm9sYWppb2xhYm9kZTIwMDdcIixcbiAgICBcImxpZFwiOiBcIjIxNDYxNTU3MzE0MzcxMjo4MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQYVFqOEVDRU8vM2k3Z0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInAwZVpJcXUyNFFJVjZjaWwwTjBNZ2pFUjc1eGhvL3N1Q3AzdmhvdU56SDQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiajNqNmgvNlpuS011UHY4ODB0UGkrNUs4bGRVR2hpTk1OT1Bvc3RHTktwcXIrZmFMc0pRcHZmUGlnNDlvTlBnWTYrdko1TFBlL0ttbVFTcXQ2cHM0Q3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYUVGMTNnOWEyL244TTRmSlNyeUlCV2V3SHdWcGJ1bmNaRHhPcHJoM3FISGJzWGJBRkhmZ1NGRCtPbFhGUWF5VDN2U0FhNldOZUlQcWNzVm1ReGNwQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0MTAzOTM2Nzo4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjgyNDg4MThcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
