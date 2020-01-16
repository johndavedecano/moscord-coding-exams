'use strict'

const axios = require('axios')

class NewsController {
  async getSources({ response }) {
    try {
      const newsResponse = await axios.get('https://newsapi.org/v2/sources', {
        params: { apiKey: process.env.NEWS_API_KEY, limit: 10 },
      })
      response.json(newsResponse.data)
    } catch (err) {
      response.json(err.message)
    }
  }

  async getNews({ request: { request: req }, response: { response: res } }) {
    
  }
}

module.exports = new NewsController()
