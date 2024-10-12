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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_30_10_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM1LFxuICAgICAgICA3NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTEsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgODksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICAxODMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAzLFxuICAgICAgICA5OSxcbiAgICAgICAgMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDQzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDczLFxuICAgICAgICAxNzgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE5LFxuICAgICAgICAyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NixcbiAgICAgICAgMjI1LFxuICAgICAgICA3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMzLFxuICAgICAgICA4NSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUyLFxuICAgICAgICA2MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM3LFxuICAgICAgICA1MixcbiAgICAgICAgNDksXG4gICAgICAgIDY0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc4LFxuICAgICAgICA1NixcbiAgICAgICAgOTcsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE2LFxuICAgICAgICA3MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDYyLFxuICAgICAgICA2MixcbiAgICAgICAgMjEsXG4gICAgICAgIDI4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY4LFxuICAgICAgICA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzcsXG4gICAgICAgIDQwLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjU0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkx5Y2c1c3VVOUlRVitxQnJKa3d6RWFkcnFmNnlOdDVJaE5JUEtpaHNpSkk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInBtSmFzUG1JUWtpVEhfRXBHdFhlVWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmQ0M2EyOWItOTRmOC00Y2FhLWI1NDktYzU2ZTI3NDA0ZTUyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MyxcbiAgICAgIDkwLFxuICAgICAgMTExLFxuICAgICAgMTMzLFxuICAgICAgMTkxLFxuICAgICAgMTAsXG4gICAgICAyMzUsXG4gICAgICAyMDksXG4gICAgICAxMDEsXG4gICAgICAxODcsXG4gICAgICAyNDAsXG4gICAgICA3NyxcbiAgICAgIDk0LFxuICAgICAgNjUsXG4gICAgICAyMDUsXG4gICAgICAyMzYsXG4gICAgICAxMTQsXG4gICAgICA4MyxcbiAgICAgIDEzLFxuICAgICAgODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIzLFxuICAgICAgMjQ1LFxuICAgICAgNTIsXG4gICAgICAxNyxcbiAgICAgIDIzOCxcbiAgICAgIDI0NCxcbiAgICAgIDI1LFxuICAgICAgNDgsXG4gICAgICAxNDcsXG4gICAgICA3MCxcbiAgICAgIDI1NCxcbiAgICAgIDEsXG4gICAgICAyNTMsXG4gICAgICAyMzYsXG4gICAgICAyMjUsXG4gICAgICAyNDUsXG4gICAgICAyNDYsXG4gICAgICA1NixcbiAgICAgIDIzMixcbiAgICAgIDQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRON0tBOTNZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTMxMDg0ODMzOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiMmJ1c3l0b2dpdmVhZnVja1wiLFxuICAgIFwibGlkXCI6IFwiMTIwMDE4ODUxMzgxMzc4OjExQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xER3k0RUlFTTI3cWJnR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN05GMGpiME5VdEliTGN4cVAvWTYzd1dCVlgxRyttcWQ4MHVOMHUveGtXST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZdmNQdHMwY3JGVzViV25OcEFxZmFSeTJyMno1NDYxQ3JvZ1VpTGdZVGttSHhONitvd3lNdW5pRXhYY21ZVENyZ1k2ellYT0ROK1FJTzRmcHl5M0dDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIzQUNFRGM2eEZQU0hTVlRYdXBnRnhpbEQvQ0VCOW51T3hSRWN2WkJlUk9mK1Q0OXh0QlhIbXlZUzdZVWoxUTJsSE1FYVRMUUNES3QwSXJGeHgvN3hCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTMxMDg0ODMzOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4NzMyNjI2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQXRGXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBdEYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvUEN4MzVKc215THkzampkcVFVd0EvcWw1WjlqMFY1Z2NoYWU0dlNyc1RnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxNTA4MTg2MDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyODA3ODQwMzA1M1wifSIKfQ=="  // PUT your SESSION_ID 


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
