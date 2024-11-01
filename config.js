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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_51_11_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxLFxuICAgICAgICAzNixcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3LFxuICAgICAgICA3MixcbiAgICAgICAgMTIxLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0LFxuICAgICAgICA4NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDcxLFxuICAgICAgICAzMixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDMwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgODAsXG4gICAgICAgIDgxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTU2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE0LFxuICAgICAgICA3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxODAsXG4gICAgICAgIDczLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjEwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDksXG4gICAgICAgIDgwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MixcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImJYZ1NOZ21LYTBXeFk5ejgrOFRuaWtCTW1BWDRCWjdBb2pid3RleDJ6VFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0MTAyMzczODU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGNTk4N0UyMTYwRDM5OEFFODc0MzUxRjg1MTBDOTQ0OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA0NzYzMTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNWVMUkV0bFFTUlNEcGpJamd6SkFNd1wiLFxuICBcInBob25lSWRcIjogXCI3NzA0MmU1Mi01NWExLTQ0OWUtYjE2Zi0wZGUwNmZhM2ExMmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM5LFxuICAgICAgMjMyLFxuICAgICAgMTg2LFxuICAgICAgMjMwLFxuICAgICAgMjI5LFxuICAgICAgMjI3LFxuICAgICAgMTMsXG4gICAgICAxMjMsXG4gICAgICAxODIsXG4gICAgICAxNzYsXG4gICAgICA4LFxuICAgICAgMjAyLFxuICAgICAgMjM5LFxuICAgICAgMTE0LFxuICAgICAgMjEwLFxuICAgICAgOSxcbiAgICAgIDE0LFxuICAgICAgMTQxLFxuICAgICAgNTYsXG4gICAgICA3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NSxcbiAgICAgIDc3LFxuICAgICAgNCxcbiAgICAgIDEyNCxcbiAgICAgIDEwMixcbiAgICAgIDE0MSxcbiAgICAgIDE2LFxuICAgICAgMjUwLFxuICAgICAgMzgsXG4gICAgICA5NCxcbiAgICAgIDEsXG4gICAgICAzNCxcbiAgICAgIDg2LFxuICAgICAgMjMyLFxuICAgICAgNDYsXG4gICAgICA1MixcbiAgICAgIDEzNixcbiAgICAgIDE3MyxcbiAgICAgIDE0NyxcbiAgICAgIDIyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCRUUxOE5SNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0MTAyMzczODU4Ojk0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwibXdhbmNoYVwiLFxuICAgIFwibGlkXCI6IFwiMTY3NzgzMjY2NTI1MzMzOjk0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lPUHJXd1FrUEtUdVFZWUF5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicTU4MkUwdDlZK29YY0FGTXFGa1gxZy9MT2JGbHl4RXRFZHRLVEx2QlIyTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4eHVhYVlCZm5vL2UzYkpKUVAyN0lMK2hoRXJ0eXptMDZFZ0ZLQ0pNNkdaaTZIOVloSDgzditFM0ZaZ0pJejN1SDAzb2wwM1FCSytYUGpmUFlabXRBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxR2hpMkRKaWdJNWFKbFo3RkY0ckxRR05ybEhZazlMSW5kK0hhTmpxZGtMTzFVMmQrampYenhzM1BiTkNydGdTRXpqbWJnOHZtK0xlRkJVaSs1VmhCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQxMDIzNzM4NTg6OTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDQ3NjMwOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdhR1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2FHLmpzb24iOiAie1wia2V5RGF0YVwiOlwidk44VDdLazFML2txUkV5b2pTQTFKSkVuUysyb3psSzdEUDRwZU9aMUFrRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMjcyMzE2MTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDEyMDA2ODI4MVwifSIKfQ=="  // PUT your SESSION_ID 


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
