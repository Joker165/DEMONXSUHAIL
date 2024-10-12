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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_56_10_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDcyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDc0LFxuICAgICAgICAzMixcbiAgICAgICAgMTU5LFxuICAgICAgICA0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDkxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxLFxuICAgICAgICAyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDUzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTksXG4gICAgICAgIDIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDU4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI2LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgODcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjU1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTcsXG4gICAgICAgIDExNixcbiAgICAgICAgNjEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNixcbiAgICAgICAgMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTksXG4gICAgICAgIDU5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDk0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzLFxuICAgICAgICAxODEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMixcbiAgICAgICAgMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDc4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDU0LFxuICAgICAgICA4MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0LFxuICAgICAgICA4NSxcbiAgICAgICAgODMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzAsXG4gICAgICAgIDc0LFxuICAgICAgICA5NSxcbiAgICAgICAgODQsXG4gICAgICAgIDY4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODEsXG4gICAgICAgIDg5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDgxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDY0LFxuICAgICAgICA2NCxcbiAgICAgICAgNzksXG4gICAgICAgIDY2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDg5LFxuICAgICAgICA3NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTksXG4gICAgICAgIDc0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIktXSGs3MVB1cXJtclVnb0w4cFZZc0VPTlYxVXl6c0RFQzdPQkRPck1nMnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkxoMl9LY2RpUVJlN1Iwa1hYeFVXN1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGJhYjg5YjEtMmI2MS00YjkyLTg0ZmQtMDMyNjY5YWFjMTdlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk1LFxuICAgICAgMzAsXG4gICAgICA2NixcbiAgICAgIDY2LFxuICAgICAgMTc1LFxuICAgICAgMTg1LFxuICAgICAgMTU0LFxuICAgICAgMTQ0LFxuICAgICAgMjU0LFxuICAgICAgMjE1LFxuICAgICAgNzMsXG4gICAgICA5MCxcbiAgICAgIDE4NyxcbiAgICAgIDcwLFxuICAgICAgMixcbiAgICAgIDIxMSxcbiAgICAgIDE1NCxcbiAgICAgIDU1LFxuICAgICAgNDUsXG4gICAgICAxOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzgsXG4gICAgICAxMjYsXG4gICAgICAyMjksXG4gICAgICAxMTMsXG4gICAgICAxNzYsXG4gICAgICAyMjUsXG4gICAgICA2MyxcbiAgICAgIDc0LFxuICAgICAgMjMsXG4gICAgICAxMDQsXG4gICAgICAxOTIsXG4gICAgICAxODQsXG4gICAgICAxNzcsXG4gICAgICAxMjUsXG4gICAgICAyMDYsXG4gICAgICAxNzksXG4gICAgICAxMTMsXG4gICAgICA0NixcbiAgICAgIDI1MCxcbiAgICAgIDY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhUNDM4UFlNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTE0NTM4NDU5OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxMTkzMTA4NDQxMDk1OTozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lQcTd3UVFrUGFtdUFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNVlnUHpGTjZaYWdtVkw1T1JCbVhValRWeE1PaGpFMktpeFp2Z2ZHYzh6ST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVL3c0WGl2aXdyYUZEQi9KWWdPall6eVBHQm9JTVFxUm5XZXZqR2FBQmdUVi96OE9aM25tS2N0RjZiY1AraVhLVC93ejlYSUtRSU50NTdCMGpEM2FCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsZ2lWMHg3SGhxR3JtM2pJYmtBVVpNL3lqU0dUK0VEblRaVXRSR3lTWFYyclF1TFp1R2tGd0V6cEtFNTJPdUtOVGsrNmkxS0E3ZlB1TW54cUFON1hoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTE0NTM4NDU5OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODY5MDk2M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
