const Koa = require('koa')
const koaBody = require('koa-body')
const send = require('koa-send')
const path = require('path')

const root = path.resolve(__dirname, 'public')

const app = new Koa()

app.use(async (ctx, next) => {
    console.log(`${ctx.method} ${ctx.path}`)
    return next()
})

app.use(koaBody())

app.use(async (ctx) => {
    return send(ctx, ctx.path, { root, index: 'index.html' })
})

app.listen(8040)
console.log('Server started')
