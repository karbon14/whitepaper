import Koa from 'koa'
import Router from 'koa-router'
import serve from 'koa-static'
import React from 'react'
import bodyParser from 'koa-bodyparser'
import { renderToString } from 'react-dom/server'
import { Karbon14Whitepaper } from '../whitepaper/whitepaper'
import template from './template'

const PORT = process.env.PORT || 3000
const app = new Koa()
const router = new Router()

const renderWhitepaper = (lang = 'EN') => {
  const langUpper = lang.toUpperCase()
  return renderToString(<Karbon14Whitepaper lang={langUpper} />)
}

router.get('/', (ctx) => {
  const appString = renderWhitepaper()

  ctx.body = template({
    body: appString,
    title: 'Karbon14 - Whitepaper',
  })
})

router.get('/:lang', (ctx) => {
  const { lang } = ctx.params
  const appString = renderWhitepaper(lang)

  ctx.body = template({
    body: appString,
    title: 'Karbon14 - Whitepaper',
  })
})

app
  .use(serve(__dirname + '/public'))
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(PORT, () => console.log(`Koa app listening on http://localhost:${PORT}`))
