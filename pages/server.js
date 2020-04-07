// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const axios = require('axios')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const instance = axios.create({
  baseURL: 'https://api.test.ca/v1/',
})
app.prepare().then(() => {
  createServer(async (req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl
    if (
      pathname === '/' ||
      pathname === '/favicon.ico' ||
      pathname.match('_next')
    ) {
      app.render(req, res, pathname, query)
    } else {
      let result
      // // if no url path matches fetch lookups here
      // try {
      //   result = await instance.get('/urllookups', {
      //     params: {
      //       url: pathname.slice(1),
      //     },
      //   })
      // } catch(e) {
      //   console.log('error', e)
      // }
      res.lookups = {
        component: 'Search'
      }
      app.render(req, res, '/lookups', query)
    }
  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
