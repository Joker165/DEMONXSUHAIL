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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347041039367,2348131084833";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_41_10_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDU1LFxuICAgICAgICAzNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDgzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDk0LFxuICAgICAgICA2NixcbiAgICAgICAgMTcsXG4gICAgICAgIDY1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNixcbiAgICAgICAgNzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTExLFxuICAgICAgICA0MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODUsXG4gICAgICAgIDE2MixcbiAgICAgICAgODksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDMxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk4LFxuICAgICAgICA2MixcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA0NixcbiAgICAgICAgODcsXG4gICAgICAgIDgsXG4gICAgICAgIDcsXG4gICAgICAgIDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDg0LFxuICAgICAgICA1MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDg1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgODIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA1LFxuICAgICAgICA4NixcbiAgICAgICAgMjI2LFxuICAgICAgICA5MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDMxLFxuICAgICAgICAyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMixcbiAgICAgICAgMjUyLFxuICAgICAgICA2NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExLFxuICAgICAgICA5LFxuICAgICAgICA4MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDksXG4gICAgICAgIDUyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICA0NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDM1LFxuICAgICAgICA0NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDAsXG4gICAgICAgIDYxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6dFFMcHFPMlhLYUw4VHhsQ2Y0RkQxbVRLN3BadHhINGxMa0gyZW42bVo4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPTW1VQnFTalFVT3E4NGI0NkpFYjJ3XCIsXG4gIFwicGhvbmVJZFwiOiBcImU2Y2NmZjQ0LTVhN2QtNDIxOS1hMzgxLWY2ZWZhYjg5MTcxN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NSxcbiAgICAgIDQ2LFxuICAgICAgMTcwLFxuICAgICAgMTc2LFxuICAgICAgNzYsXG4gICAgICAyMTQsXG4gICAgICAxMzIsXG4gICAgICAyMTgsXG4gICAgICA2OSxcbiAgICAgIDEyMSxcbiAgICAgIDE1LFxuICAgICAgMzEsXG4gICAgICAyMTksXG4gICAgICAxNDgsXG4gICAgICAxNzksXG4gICAgICAxNzAsXG4gICAgICAzNyxcbiAgICAgIDEyNyxcbiAgICAgIDI0MixcbiAgICAgIDE1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjQsXG4gICAgICAxOTksXG4gICAgICAyOSxcbiAgICAgIDg3LFxuICAgICAgMjQ3LFxuICAgICAgNzksXG4gICAgICAxMTQsXG4gICAgICA0NyxcbiAgICAgIDI2LFxuICAgICAgMTcsXG4gICAgICAxLFxuICAgICAgMTE1LFxuICAgICAgMjE2LFxuICAgICAgMTAsXG4gICAgICAzLFxuICAgICAgODYsXG4gICAgICAzMSxcbiAgICAgIDEwMSxcbiAgICAgIDIzLFxuICAgICAgMjI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVBRjhSUktSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDMxOTQ1MzM2OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCb2Jtb3NcIixcbiAgICBcImxpZFwiOiBcIjg1MjEyMzE5MDUwMDA6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQQ0Jpcm9FRU9uWnE3Z0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkhCQTdjZk5GYzAzUEhkdE1rTUpGcFFmM1hobDF2ekdydUttYkVBYzNMWFk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRWJ3UVFFazRmdDNxU2w1UGRRdWw5Q3BjT2NOVFJUYkdxVVJVRWxta3NVYzJydFppVlU4eDI5MU9vcmRKNklJU1E5ekg1Q2xMbUNYR1FMa1hHaTA5QUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRE9TcndBdjlqeDhFdGRuZEVPQUtrU3lYRWlsZFd2R2lNb0s4TFpQRzhPYXZUVE9PdTdMQndScjRQVU5nTEt3ZzkxWC9XZXl4QkhRRnB4SVBya0syQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODAzMTk0NTMzNjo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4NzY5MjYwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRkJlXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGQmUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVK1NqVDl4cXlTYmpSVUp5ODNmeVA0S1BVQy9jeTlKR0FBRGtyVzNQc2g0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExOTU1NDA3MTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjg1OTk1NjUyOTVcIn0iCn0="  // PUT your SESSION_ID 


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
