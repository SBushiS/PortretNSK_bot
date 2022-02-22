const { Telegraf, Markup } = require('telegraf')
require('dotenv').config()
const text = require('./const')

const bot = new Telegraf(process.env.BOT_TOKEN)


bot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : "незнакомец"}` + text.start, Markup.keyboard([
  ["👩 Обо мне", "✍️ Заказать"]
]).resize()))


//Кнопка ЗАКАЗТЬ
bot.hears('✍️ Заказать', async (ctx) => {
  try {
    await ctx.reply('Если Вы еще ничего у нас не заказывали, то у нас для вас подарок 🤩 - 10 % скидка на формат А3 (30х40 см) \r\nНапишите нам нажав на кнопку ниже.', Markup.inlineKeyboard(
      [Markup.button.url('Написать', 'telegram.com')]))
  } catch (e) {
    console.error(e)
  }
})

//кнопка ОБО МНЕ
bot.hears('👩 Обо мне', async (ctx) => {
  try {
    await ctx.replyWithPhoto({
      source: 'img/portrait.jpg'
    }, {
      caption: text.author,
      parse_mode: "HTML",
      reply_markup: JSON.stringify({
        "inline_keyboard": [
          [
            Markup.button.url('Вконтакте', 'vk.com'),
            Markup.button.url('Instagram', 'instagram.com'),
            Markup.button.url('Telegram', 'telegram.com')
          ]
        ]
      })
    }, {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }
})


//ОТЗЫВЫ
bot.command('review', async (ctx) => {
  try {
    await ctx.replyWithPhoto({ source: './img/review/portrait.jpg' })
    await ctx.replyWithHTML('<b>Цены</b>', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Следующее фото', 'btn_1')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})

bot.action('btn_1', async (ctx) => {
  try {
    await ctx.replyWithPhoto({ source: './img/review/1.jpg' })
    await ctx.replyWithHTML('<b>Цены</b>', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Следующее фото', 'btn_2')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }

})
bot.action('btn_2', async (ctx) => {
  try {
    await ctx.replyWithPhoto({ source: './img/review/2.jpg' })
    await ctx.replyWithHTML('<b>Цены</b>', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Следующее фото', 'btn_3')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }

})
bot.action('btn_3', async (ctx) => {
  try {
    await ctx.replyWithPhoto({ source: './img/review/3.jpg' })
    await ctx.replyWithHTML('<b>Цены</b>', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Следующее фото', 'btn_4')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }

})
bot.action('btn_4', async (ctx) => {
  try {
    await ctx.replyWithPhoto({ source: './img/review/4.jpg' })
    await ctx.replyWithHTML('<b>Цены</b>', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Следующее фото', 'btn_5')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }

})
bot.action('btn_5', async (ctx) => {
  try {
    await ctx.replyWithPhoto({ source: './img/review/5.jpg' })
    await ctx.replyWithHTML('<b>Цены</b>', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Вначало', 'btn_1')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }

})


//ЦЕНЫ

bot.command('price', async (ctx) => {
  try {
    await ctx.replyWithHTML('<b>Цены - средние по городу, а качество одно из лучших!</b>\r\n\r\nФорматы:А4 (20х30 см )- 3000 руб.\r\nА3 (30х40 см) - 4000 руб,\r\nА2 (40х50) - 5000 руб,\r\nА1 (50х60 ) - 6000 руб\r\n\r\n<b>Для больших семейных портретов возможен формат больше:</b>\r\nА0 (60х80) - 7000 руб)\r\n\r\nА также настоящий портрет маслом.\r\n<b>От 1го дня, даже в праздники и выходные!</b>', Markup.inlineKeyboard(
      [
        [Markup.button.url('Закажите прямо сейчас!', 'telegram.com')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})

bot.action('zakaz', async (ctx) => {
  try {
    await ctx.replyWithHTML('Отправляемый текст', {
      disable_web_page_preview: true
    })
  } catch (e) {
    console.error(e)
  }

})

//ПОРТФОЛИО
bot.command('portfolio', async (ctx) => {
  try {
    await ctx.replyWithPhoto({ source: './img/portfolio/1.jpg' })
    await ctx.replyWithHTML('<b>Цены</b>', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Следующее фото', 'btnp_1')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})

bot.action('btnp_1', async (ctx) => {
  try {
    await ctx.replyWithPhoto({ source: './img/portfolio/2.jpg' })
    await ctx.replyWithHTML('<b>Цены</b>', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Следующее фото', 'btnp_2')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }

})
bot.action('btnp_2', async (ctx) => {
  try {
    await ctx.replyWithPhoto({ source: './img/portfolio/3.jpg' })
    await ctx.replyWithHTML('<b>Цены</b>', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Следующее фото', 'btnp_3')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }

})
bot.action('btnp_3', async (ctx) => {
  try {
    await ctx.replyWithPhoto({ source: './img/portfolio/4.jpg' })
    await ctx.replyWithHTML('<b>Цены</b>', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Вначало', 'btnp_1')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }

})




bot.help((ctx) => ctx.reply(text.commands))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))