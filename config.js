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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347041039367";
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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_12_09_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDczLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDg1LFxuICAgICAgICA2NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA4LFxuICAgICAgICA4NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1LFxuICAgICAgICA3MixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDMxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4LFxuICAgICAgICA2NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDk2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDk4LFxuICAgICAgICA4OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkyLFxuICAgICAgICAwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU4LFxuICAgICAgICAxODksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDQ0LFxuICAgICAgICAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDk5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExMixcbiAgICAgICAgNDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA2OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDMwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpWWZoTTE2OTluL2NwT3QzUjhwa0h0YWFSZEhFQkppYWNvN05HTWRkT3VZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3TF95RUpxWFRUdV9ncnJhdXpJN3FRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQwMTM0YWFmLWQ5ZDMtNDBkYi04OGJiLTFjNWE5ZjkwZjM5MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NCxcbiAgICAgIDIxNSxcbiAgICAgIDE4MixcbiAgICAgIDQ0LFxuICAgICAgNjEsXG4gICAgICAzMCxcbiAgICAgIDE3MCxcbiAgICAgIDk4LFxuICAgICAgMTQ3LFxuICAgICAgMixcbiAgICAgIDQ0LFxuICAgICAgMTEsXG4gICAgICA3NyxcbiAgICAgIDYxLFxuICAgICAgMTgsXG4gICAgICAxNDEsXG4gICAgICAyNTEsXG4gICAgICAxNCxcbiAgICAgIDIxLFxuICAgICAgMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNSxcbiAgICAgIDUsXG4gICAgICA1LFxuICAgICAgNDgsXG4gICAgICAxMDAsXG4gICAgICA1MixcbiAgICAgIDQ2LFxuICAgICAgMTYzLFxuICAgICAgNDgsXG4gICAgICA0LFxuICAgICAgNzEsXG4gICAgICAxOTIsXG4gICAgICAxMzIsXG4gICAgICA0NCxcbiAgICAgIDU0LFxuICAgICAgODIsXG4gICAgICAxOTIsXG4gICAgICAxNTMsXG4gICAgICA3MSxcbiAgICAgIDQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkYxOTRONlhBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQxMDM5MzY3OjY2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiYm9sYWppb2xhYm9kZTIwMDdcIixcbiAgICBcImxpZFwiOiBcIjIxNDYxNTU3MzE0MzcxMjo2NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNdmxnK1FERVBhYjY3Y0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInREU2J5WmMxK1BoM1Iyb2R5WnFDNWlrUHdzWldmVGRVYTdrSmgvT0RpQnc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYlUzNHlERjg0N1RNRzhsM1Z3OGhnYTdCWXBIMlZFaDhDM2NpTW9OWmppVmJ4MExTUEdwSDE0ZjVVMmRXVlpqcFYwN2c0YmZSd3cwbmIrMFp1QTVyRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieGpWWkNGK3hwRHVhUytlWFcvYzh6ekYrcnQwRXZYZE9jRktDVDBKaFRWb2JOcjFmQVFYSGo5WXlMRUNMVkNSUld4TVcwYSt1Y0hLTjdHNlBUWmVoZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0MTAzOTM2Nzo2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzcxMjc2MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtFTVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS0VNLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVE1QWGhCQk42dEZEZ2VvL0ozRm1Iam45MzJhRXZBOUorWmppclpqZ3Y2cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDE1MDgzNzIyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzI3NzEyNjUyMDQyXCJ9Igp9"  // PUT your SESSION_ID 


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
