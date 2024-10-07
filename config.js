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
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_20_10_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDUxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA4MixcbiAgICAgICAgMTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDMzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NixcbiAgICAgICAgMjA4LFxuICAgICAgICA4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDMxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTksXG4gICAgICAgIDQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDU5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDkyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMCxcbiAgICAgICAgMzksXG4gICAgICAgIDQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDc1LFxuICAgICAgICAxLFxuICAgICAgICAxNTksXG4gICAgICAgIDUwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMTMxLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDc2LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDYzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3LFxuICAgICAgICA1NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzMsXG4gICAgICAgIDk3LFxuICAgICAgICA0MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAzOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDksXG4gICAgICAgIDI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTksXG4gICAgICAgIDgsXG4gICAgICAgIDk5LFxuICAgICAgICA5NixcbiAgICAgICAgMTQsXG4gICAgICAgIDYzLFxuICAgICAgICAzLFxuICAgICAgICAwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTc2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjNkWGlSZ3Y5Y3ZOY3h0Tk8zNnNUK3hOc1dNeFdGK3Y4c3UwK1ZDTjhsdWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA0MTAzOTM2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMEI2RDU1QzlBMTFEMUY1NDRGNERFNjEyRjlDNjE3RUZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4MzQzMjA5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJ1Uy1uYzJ5VEhPcm9mMFRpM2l1VmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWY2YTQzMzMtNDA0OC00MGMyLTllOTEtOTc5Mzk2YmJiYzhkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkzLFxuICAgICAgMTYyLFxuICAgICAgMjI4LFxuICAgICAgMTE3LFxuICAgICAgMTQ4LFxuICAgICAgMTE5LFxuICAgICAgNTEsXG4gICAgICA5MCxcbiAgICAgIDU4LFxuICAgICAgMTE1LFxuICAgICAgNixcbiAgICAgIDIwMCxcbiAgICAgIDg3LFxuICAgICAgNCxcbiAgICAgIDEzMixcbiAgICAgIDE4MSxcbiAgICAgIDE4NSxcbiAgICAgIDEyNSxcbiAgICAgIDEwOCxcbiAgICAgIDc0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcxLFxuICAgICAgMzIsXG4gICAgICAyMzQsXG4gICAgICAxMTIsXG4gICAgICA3MyxcbiAgICAgIDM2LFxuICAgICAgMTc2LFxuICAgICAgMjMxLFxuICAgICAgMTkyLFxuICAgICAgMjQsXG4gICAgICAyMDIsXG4gICAgICAyNTUsXG4gICAgICAyMzYsXG4gICAgICA1NCxcbiAgICAgIDIzNSxcbiAgICAgIDE2MyxcbiAgICAgIDE3NSxcbiAgICAgIDIwMyxcbiAgICAgIDE0OCxcbiAgICAgIDc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdNMjQ1Skc0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQxMDM5MzY3Ojg0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQkxVRSBERU1PTlwiLFxuICAgIFwibGlkXCI6IFwiMjE0NjE1NTczMTQzNzEyOjg0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BhUWo4RUNFSjNaa2JnR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicDBlWklxdTI0UUlWNmNpbDBOME1nakVSNzV4aG8vc3VDcDN2aG91TnpIND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFYVpnRDZxZDFteU10enBHejJzbkFraXc2U3ZTcnNjQ0hlcnJwS1NHbllVeGM0dGo4NmhwaXRNSVZaZjEySUdMaVpDeFRvUVJ4SDdqOC9SbDhwSWdBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjZHFRQ2M5bFUvVkpBOXJ1RVFCVTZKWGp2TTJyajdSdjFURnlxZzlKdmV3bnZYYi9vRTdTOWlMZnQwTlFEV0Z5VWQwc20xZWtPV2R0UENMRURSVC9pdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDQxMDM5MzY3Ojg0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODM0MzIwMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxiWlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGJaLmpzb24iOiAie1wia2V5RGF0YVwiOlwiclFnUEZhNWlOZVdaVGxlU0ZjU1ZRUThjYWt5QmZLRTdLQlpVK2xWc0thWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NzM0MzM3MTgsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcyODM0MzEzODQwMFwifSIKfQ=="  // PUT your SESSION_ID 


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
