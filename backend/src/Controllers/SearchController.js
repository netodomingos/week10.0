const Dev = require('../Models/Dev')
const parseStringAsArray = require('../utils/ParseStringAsArray')

module.exports = {
    async index(request, response){
        const { latitude, longitude, techs } = request.query

        const techsArray = parseStringAsArray(techs)

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },

            location: {
                $near:{
                    $maxDistance: 10000,
                    $geometry: {
                        type: "Point",
                        coordinates: [longitude, latitude]
                    }
                },
            },
        })
        
        return response.json({ devs })
    }
}