const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_37_10_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA5OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0LFxuICAgICAgICA5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMixcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAwLFxuICAgICAgICA0NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDM3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTksXG4gICAgICAgIDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NixcbiAgICAgICAgMzksXG4gICAgICAgIDQxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNixcbiAgICAgICAgMjI2LFxuICAgICAgICA5LFxuICAgICAgICAzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgODIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTksXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgNixcbiAgICAgICAgOTgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDcyLFxuICAgICAgICA5NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDkzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MSxcbiAgICAgICAgOSxcbiAgICAgICAgMjE5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDMyLFxuICAgICAgICAwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjI2LFxuICAgICAgICA5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTMsXG4gICAgICAgIDY5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMixcbiAgICAgICAgMjAsXG4gICAgICAgIDY5LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MixcbiAgICAgICAgMTM3LFxuICAgICAgICA0NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDg2LFxuICAgICAgICA0NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDMxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTksXG4gICAgICAgIDcwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvRVJkM0xHVzIwbFNlRHFmN2piU3JiZ2crZ3Z3MmZxN2hKak1DUVNrYVE4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcyNDAzNjc3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkE4NkI4NkYwQkU4OUJENDJERDU5M0RCRjgzOUYwQ0NcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwMzUzMDQ1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImMzV1BUSHNiUURpTDdyTjc0T1RSMEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODRiYzVlZjQtMGU3Ny00MDYxLWE0NzYtZjMwNWMyMjIwZmVhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOSxcbiAgICAgIDE0OSxcbiAgICAgIDIyMyxcbiAgICAgIDIwNixcbiAgICAgIDEzMCxcbiAgICAgIDg4LFxuICAgICAgNjgsXG4gICAgICAyNTUsXG4gICAgICAxNDcsXG4gICAgICA1NyxcbiAgICAgIDM3LFxuICAgICAgMTQwLFxuICAgICAgMyxcbiAgICAgIDksXG4gICAgICA1MyxcbiAgICAgIDc0LFxuICAgICAgMTEwLFxuICAgICAgOTQsXG4gICAgICA4NSxcbiAgICAgIDIxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTksXG4gICAgICA5NSxcbiAgICAgIDMxLFxuICAgICAgNTQsXG4gICAgICA5MSxcbiAgICAgIDE5OCxcbiAgICAgIDIyMSxcbiAgICAgIDIxOCxcbiAgICAgIDIwNixcbiAgICAgIDIzNyxcbiAgICAgIDI2LFxuICAgICAgMTc5LFxuICAgICAgMjQ2LFxuICAgICAgMzEsXG4gICAgICAyNTAsXG4gICAgICA4OSxcbiAgICAgIDEzMyxcbiAgICAgIDkyLFxuICAgICAgNjIsXG4gICAgICAzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWUUM0MkJYTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzI0MDM2Nzc5OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDY4NTM5MDc2NzMxMzI6MzBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTXdhbmNoYVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lpMTA4RUhFSXl2akxrR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTFNpWmJzQWkvbko4YTJsbjNXalNyNUNRVlVVSkc5cXR5ZlU2WVdSNHd3WT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5SFM0bG93NmhiNHhaeE5PeGxvaDM2OEJMQUhicnd6cFVsUUZNLzZDN3d0d1dpU2kwQk9CUnFYeFY5Y0FTT1BvWXZYcFUzaVYybTZhRVhDNkY3VEtBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJkSHkwYUZTZ3NWTzBpdmVKTVZROXFQRG9ETFJHd1RPVVprdzNPK2xFR1FjKytYTEZEbUVBKzRqSThxTTMrVnM1cGh5VnlsV2ZWZVFwRTI3UzU3TGFDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MjQwMzY3Nzk6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzAzNTMwNDAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCVDZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJUNi5qc29uIjogIntcImtleURhdGFcIjpcIi9FYmM2d1FnZ0VoQkt3WGNpRHRRYms1R0dYT05yNW5tQi9HTTVmUU9WbWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAxNjcyOTczNixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI5OTQyMjE5MzU0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
