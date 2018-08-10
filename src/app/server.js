import Koa from 'koa'
import Router from 'koa-router'
import serve from 'koa-static'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Karbon14Whitepaper } from '../whitepaper/whitepaper'
import template from './template'

const PORT = process.env.PORT || 3000
const app = new Koa()
const router = new Router()

router.get('/', (ctx) => {
  const appString = renderToString(<Karbon14Whitepaper />)

  ctx.body = template({
    body: appString,
    title: 'Karbon14 - Whitepaper',
  })
})

app
  .use(serve(__dirname + '/public'))
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(PORT, () => console.log(`Koa app listening on http://localhost:${PORT}`))
