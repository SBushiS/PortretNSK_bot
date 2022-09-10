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
    await ctx.reply('Ели Вы еще ничего у нас не заказывали, то у нас для вас подарок 🤩 - 10 % скидка на формат А3 (30х40 см) \r\nНапишите нам нажав на кнопку ниже.', Markup.inlineKeyboard(
      [Markup.button.url('Написать', 'https://t.me/Suseng')]))
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
            Markup.button.url('Вконтакте', 'https://vk.com/portrety_nsk'),
            Markup.button.url('Telegram', 'https://t.me/Suseng')
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
    await ctx.replyWithPhoto({ source: './img/review/1.jpg' })
    await ctx.replyWithHTML('Хочу выразить огромное спасибо Евгении за Ваш талант!!! Работа выполнена очень быстро!!!  Мы в полном восторге!!', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Следующий отзыв', 'btn_1')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})

bot.action('btn_1', async (ctx) => {
  try {
    await ctx.replyWithPhoto({ source: './img/review/2.jpg' })
    await ctx.replyWithHTML('В очередной раз, нас восхитила Ваши интересная идея, в каждом шарже присутствует неповторимая глубина и сказочность😊ОГРОМНОЕ СПАСИБО за профессионализм😊', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Следующий отзыв', 'btn_2')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }

})
bot.action('btn_2', async (ctx) => {
  try {
    await ctx.replyWithPhoto({ source: './img/review/3.jpg' })
    await ctx.replyWithHTML('Портрет был выйгран в конкурсе!Работа выполнена на отлично 👍ВСпасибо большое!', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Следующий отзыв', 'btn_3')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }

})
bot.action('btn_3', async (ctx) => {
  try {
    await ctx.replyWithPhoto({ source: './img/review/4.jpg' })
    await ctx.replyWithHTML('Спасибо огромное!! Все в восторге!😊', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Следующий отзыв', 'btn_4')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }

})
bot.action('btn_4', async (ctx) => {
  try {
    await ctx.replyWithPhoto({ source: './img/review/5.jpg' })
    await ctx.replyWithHTML('Подарок понравился!!👍👍👍', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Следующий отзыв', 'btn_5')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }

})

bot.action('btn_5', async (ctx) => {
  try {
    await ctx.replyWithPhoto({ source: './img/review/6.jpg' })
    await ctx.replyWithHTML('Отлично выполненная работа! Очень быстро, утром заказала, на следующее утро шарж был готов. И за срочность, без всяких наценок отдельное спасибо! Сходство на 100%. Абсолютно точно передано настроение и учтены пожелания! Рекомендую!👍🙂', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Следующий отзыв', 'btn_6')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }

})
bot.action('btn_6', async (ctx) => {
  try {
    await ctx.replyWithPhoto({ source: './img/review/7.jpg' })
    await ctx.replyWithHTML('Это шедевр! 😍 я много видела шаржей, но чтоб так точно передать-это талант! Не первый раз обращаемся к Евгении, и обратимся ещё! Спасибо огромное, за тонкое чувство стиля, за максимальную «похожесть» на героя! 🤗 мы очень довольны 🙏', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Следующий отзыв', 'btn_7')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }

})

bot.action('btn_7', async (ctx) => {
  try {
    await ctx.replyWithPhoto({ source: './img/review/8.jpg' })
    await ctx.replyWithHTML('Спасибо большое, порадовало, что быстро и очень красиво!) Буду обращаться ещё не раз☺', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Следующий отзыв', 'btn_8')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }

})

bot.action('btn_8', async (ctx) => {
  try {
    await ctx.replyWithPhoto({ source: './img/review/9.jpg' })
    await ctx.replyWithHTML('Просто нечто прекрасное. Картина тронула не только именинницу, но и всех гостей. Огромное спасибо Евгении за искренние эмоции любимого человека!', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Следующий отзыв', 'btn_9')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }

})

bot.action('btn_9', async (ctx) => {
  try {
    await ctx.replyWithPhoto({ source: './img/review/10.jpg' })
    await ctx.replyWithHTML('Вот они, наши портреты! 🤗 Спасибо Евгении!🌺', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Следующий отзыв', 'btn_10')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }

})

bot.action('btn_10', async (ctx) => {
  try {
    await ctx.replyWithPhoto({ source: './img/review/11.jpg' })
    await ctx.replyWithHTML('Спасибо большое замечательному мастеру! Заказывала подруге на день рождения...учли все пожелания..получилось ещё лучше ,чем ожидала. Такие подарки поднимают настроение и гостям и имениннику! Самая лучшая идея,какая только может быть. Спасибо.', Markup.inlineKeyboard(
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
    await ctx.replyWithHTML('<b>ЦЕНЫ АКТУАЛЬНЫ!</b>\r\n\r\n<b>~~~ 《 ЧЁРНО-БЕЛЫЕ 》~~~</b>\r\n● <u>ПОРТРЕТЫ Ч/Б КАРАНДАШОМ/УГЛЕМ А3 (30×40см)</u> - 2500 руб. (1 человек)\r\nВторой человек +1000 руб.\r\n\r\n\r\n<b>~~~《 ЦВЕТНЫЕ》~~~</b>\r\n❗☝Работы выполняются сухой пастелью. Обязательно оформление работы в рамку со стеклом!\r\n● <u>ШАРЖИ/ПОРТРЕТЫ А4 (20×30см)</u> - <b>3000 руб.</b> (1 человек)\r\nВторой человек <b>+800 руб.</b>\r\n\r\n● <u>ШАРЖИ/ПОРТРЕТЫ А3 (30×40см)</u> - <b>4000 руб.</b> (1человек)\r\nСледующий человек <b>+1000 руб.</b>\r\n\r\n● <u>ШАРЖИ/ПОРТРЕТЫ А2 (40×50см)</u> - <b>5000 руб.</b> (1человек)\r\nСледующий человек <b>+1000 руб.</b>\r\n\r\n● <u>ШАРЖИ/ПОРТРЕТЫ А1 (50×60см)</u> - <b>6000 руб.</b> (1человек)\r\nСледующий человек <b>+1000 руб.</b>\r\n\r\n<b>~~~ 《 ПОРТРЕТЫ МАСЛОМ 》 ~~~</b>\r\nСрок исполнения - от 1 недели. Желательно иметь в запасе не менее 3х недель.\r\n\r\n☝Обратите внимание: цены соответствуют качеству написания портретов маслом и НЕ завышены. Если вы хотите дешевле, то, пожалуйста, идите к другим художникам, сейчас их огромный выбор.\r\n\r\n● 30х40 - <b>7000 руб.</b>\r\n\● 35х50 - <b>8500 руб.</b>\r\n● 40х60 - <b>9500 руб.</b>\r\n● 50х70 - <b>11000 руб.</b>\r\n\● 60×80 - <b>13500 руб.</b>\r\n● 80×100 - <b>16000 руб.</b>\r\n\r\n- Следующий человек <b>+2000 руб.</b>\r\n- Портрет в образе <b>+5000 руб.</b>\r\n\r\n💳 Обязательна предоплата 50% на карту Сбербанка.', Markup.inlineKeyboard(
      [
        [Markup.button.url('Закажите прямо сейчас!', 'https://t.me/Suseng')]
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
    await ctx.replyWithPhoto({ source: './img/portfolio/1.jpg' }, Markup.inlineKeyboard(
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
    await ctx.replyWithPhoto({ source: './img/portfolio/2.jpg' }, Markup.inlineKeyboard(
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
    await ctx.replyWithPhoto({ source: './img/portfolio/3.jpg' }, Markup.inlineKeyboard(
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
    await ctx.replyWithPhoto({ source: './img/portfolio/4.jpg' }, Markup.inlineKeyboard(
      [
        [Markup.button.callback('Следующее фото', 'btnp_4')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }

})
bot.action('btnp_4', async (ctx) => {
  try {
    await ctx.replyWithPhoto({ source: './img/portfolio/5.jpg' }, Markup.inlineKeyboard(
      [
        [Markup.button.callback('Следующее фото', 'btnp_5')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }

})
bot.action('btnp_5', async (ctx) => {
  try {
    await ctx.replyWithPhoto({ source: './img/portfolio/6.jpg' }, Markup.inlineKeyboard(
      [
        [Markup.button.callback('Следующее фото', 'btnp_6')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }

})
bot.action('btnp_6', async (ctx) => {
  try {
    await ctx.replyWithPhoto({ source: './img/portfolio/7.jpg' }, Markup.inlineKeyboard(
      [
        [Markup.button.callback('Следующее фото', 'btnp_7')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }

})
bot.action('btnp_7', async (ctx) => {
  try {
    await ctx.replyWithPhoto({ source: './img/portfolio/8.jpg' }, Markup.inlineKeyboard(
      [
        [Markup.button.callback('Следующее фото', 'btnp_8')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }

})
bot.action('btnp_8', async (ctx) => {
  try {
    await ctx.replyWithPhoto({ source: './img/portfolio/9.jpg' }, Markup.inlineKeyboard(
      [
        [Markup.button.callback('Следующее фото', 'btnp_9')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }

})
bot.action('btnp_9', async (ctx) => {
  try {
    await ctx.replyWithPhoto({ source: './img/portfolio/10.jpg' }, Markup.inlineKeyboard(
      [
        [Markup.button.callback('Следующее фото', 'btnp_10')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }

})
bot.action('btnp_10', async (ctx) => {
  try {
    await ctx.replyWithPhoto({ source: './img/portfolio/11.jpg' }, Markup.inlineKeyboard(
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