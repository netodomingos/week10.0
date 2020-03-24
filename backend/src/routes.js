const { Router } = require('express')
const axios = require('axios')
const Dev = require('./Models/Dev')

const routes = Router()

routes.post('/devs', async (request, response) => {
    const { github_username, techs } = request.body

    const res = await axios.get(`https://api.github.com/users/${github_username}`)
    
    const { name = login, avatar_url, bio } = res.data

    const techsArray = techs.split(',').map(tech => tech.trim())

   const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray
    })
    
    return response.json(dev)
})

module.exports = routes