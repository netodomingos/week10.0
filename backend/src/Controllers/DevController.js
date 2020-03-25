const axios = require('axios')
const Dev = require('../Models/Dev')
const parseStringAsArray = require('../utils/ParseStringAsArray')

module.exports = {
    async index(_, response){
        const devs = await Dev.find()

        return response.json(devs)
    },

    async create (request, response) {
        const { 
            github_username, 
            techs, 
            latitude, 
            longitude 
        } = request.body

        // Achando Usuários iguais!
        let dev = await Dev.findOne({ github_username })

        if(!dev){
            const res = await axios.get(`https://api.github.com/users/${github_username}`)
        
            const { name = login, avatar_url, bio } = res.data
        
            const techsArray = parseStringAsArray(techs)
        
            const location = {
                type: 'Point',
                coordinates: [ longitude, latitude ]
            }
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })
        }
        
        return response.json(dev)
    }
}