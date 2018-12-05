const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs')
const moment = require('moment')
const data = require('data')
const ms = require('ms')
const prefix = '-';
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Randy`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Randy ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Pànorama Server.. `,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});

client.on('message', function(msg) {
    
    if(msg.content.startsWith (prefix  +'سيرفر','server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:**نوع السرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ اعضاء السرفر__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ الأونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__رومات الكتابه__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ الرومات الصوتيه__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ اونر السيرفر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ اى دى السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تريخ انشاء السرفر__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
         message.channel.send('**The Message Was Sent On Private**');
            
    
         


 message.author.sendMessage(`
 **
كيك ، -kick --> طرد عضو 
باند ، -ban --> حظر عضو 
مسح ، -clear --> مسح الشات
اسكت ، -mute --> اعطاء شخص ميوت
تكلم -unmute --> فك من شخص ميوت
-obc --> لنشر برودكاست لكل اعضاء السيرفر 
سيرفر ، -server --> معلومات السيرفر 
**
`);

    }
});

   client.on("message", message => {
     if (message.author.bot) return;
     
     let command = message.content.split(" ")[0];
     
     if (command === "اسكت","mute") {
           if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
     let user = message.mentions.users.first();
     let modlog = client.channels.find('name', 'mute-log');
     let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
     if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
     if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
     
     const embed = new Discord.RichEmbed()
       .setColor(0x00AE86)
       .setTimestamp()
       .addField('الأستعمال:', 'اسكت/احكي')
       .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
       .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
      
      if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
    
     if (message.guild.member(user).roles.has(muteRole.id)) {
   return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
   } else {
       message.guild.member(user).addRole(muteRole).then(() => {
   return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
   });
     }
   
   };
   
   });
   
      client.on("message", message => {
     if (message.author.bot) return;
     
     let command = message.content.split(" ")[0];
     
     if (command === "تكلم","unmute") {
           if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
     let user = message.mentions.users.first();
     let modlog = client.channels.find('name', 'mute-log');
     let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
     if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
     if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
     const embed = new Discord.RichEmbed()
       .setColor(0x00AE86)
       .setTimestamp()
       .addField('الأستعمال:', 'اسكت/احكي')
       .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
       .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
   
     if (message.guild.member(user).removeRole(muteRole.id)) {
   return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
   } else {
       message.guild.member(user).removeRole(muteRole).then(() => {
   return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
   });
     }
   
   };
   
   });
   
     
   client.on('message', message => {
     if (message.author.x5bz) return;
     if (!message.content.startsWith(prefix)) return;
   
     let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
   
     let args = message.content.split(" ").slice(1);
   
     if (command == "كيك,'kick") {
                  if(!message.channel.guild) return message.reply('** This command only for servers**');
            
     if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
     if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
     let user = message.mentions.users.first();
     let reason = message.content.split(" ").slice(2).join(" ");
     
   
     if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");
     if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
     if(!reason) return message.reply ("**اكتب سبب الطرد**");
     if (!message.guild.member(user)
     .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
   
     message.guild.member(user).kick();
   
     const kickembed = new Discord.RichEmbed()
     .setAuthor(`KICKED!`, user.displayAvatarURL)
     .setColor("RANDOM")
     .setTimestamp()
     .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
     .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
     .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
     message.channel.send({
       embed : kickembed
     })
   }
   });
   
     client.on('message', async message => {
  
    let date = moment().format('Do MMMM YYYY , hh:mm');
    let User = message.mentions.users.first();
    let Reason = message.content.split(" ").slice(3).join(" ");
    let messageArray = message.content.split(" ");
    let time = messageArray[2];
    if(message.content.startsWith(prefix + "باند'،ban")) {
      if (!message.channel.guild) return;
       if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("**ماعندك برمشن :X:**");
       if(!User) message.channel.send("Mention Someone");
       if(User.id === client.user.id) return message.channel.send("** :X: ماتقدر تبند البوت**");
       if(User.id === message.guild.owner.id) return message.channel.send("** :X:لااستطيع تبنيد الاونر **");
       if(!time) return message.channel.send("**- اكتب الوقت**");
       if(!time.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('** :X: البوت لايدعم هذا الوقت**');
      if(!Reason) Reason = "Null";
       let banEmbed = new Discord.RichEmbed()
       .setAuthor(`New Banned User !`)
       .setThumbnail(message.guild.iconURL || message.guild.avatarURL)
       .addField('- Banned By: ',message.author.tag,true)
       .addField('- Banned User:', `${User}`)
       .addField('- Reason:',Reason,true)
       .addField('- Time & Date:', `${message.createdAt}`)
       .addField('- Duration:',time,true)
       .setFooter(message.author.tag,message.author.avatarURL);
       let logchannel = message.guild.channels.find(`name`, "log");
  if(!logchannel) return message.channel.send("Can't find log channel.");
  incidentchannel.send(banEmbed);
  message.channel.send(`**:white_check_mark: ${User} has been banned :airplane: **`).then(() => message.guild.member(User).ban({reason: Reason}))
  User.send(`**:airplane: You are has been banned in ${message.guild.name} reason: ${Reason} by: ${message.author.tag} :airplane:**`)
       .then(() => { setTimeout(() => {
           message.guild.unban(User);
       }, mmss(time));
    });
   }
  });
  
client.on("message", message => {
    
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "obc")) {
                         if (!message.member.hasPermission("CONNECT"))  return;
                            let embed4 = new Discord.RichEmbed()
             .setDescription("**:white_check_mark: | جاري ارسال البرودكاست**")
           .addField("مرسل البرودكاست" , message.author)
          .addField("نص البرودكاست" ,args.join("  "))
                            .addField("عدد الاعضاء المرسل لهم :busts_in_silhouette:" ,` **[${message.guild.memberCount}]**`,true)
                                                            .setColor("#008000")
                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            
                          }
});

	 client.on("message", message => {
    
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('? | **ليس لديك الصلاحيه حتى تمسح الشات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
       
        color: 0x06DF00,
        description: "تم مسح الروم بنجآح„ ",
       

        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
}); 

client.login(process.env.BOT_TOKEN);
