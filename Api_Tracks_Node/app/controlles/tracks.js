const { httpError } = require('../helpers/handleError')
const userModel = require('../models/users')
const PORT = process.env.PORT || 3000
const URL_PUBLIC = process.env.URL_PUBLIC || '/'
const getItems = async (req, res) => {
    try {
        const listAll = [{
            "_id": 1,
            "name": "Stand By Me",
            "album": "Don't Play That Song!",
            "cover": "https://i1.sndcdn.com/artworks-000115290974-4bmucf-t500x500.jpg",
            "artist": {
                "name": "Ben E. King",
                "nickname": "Ben E. King",
                "nationality": "US"
            },
            "duration": {
                "start": 0,
                "end": 176
            },
            "url": `${URL_PUBLIC}/Stand_By_Me.mp3`
        },
        {
            "_id": 2,
            "name": "Can't Help Falling In Love",
            "album": "Blue Hawaii",
            "cover": "https://upload.wikimedia.org/wikipedia/en/3/3c/Can%27t_Help_Falling_in_Love_by_Elvis_Presley_US_picture_sleeve.png",
            "artist": {
                "name": "Elvis Presley",
                "nickname": "Elvis",
                "nationality": "US"
            },
            "duration": {
                "start": 0,
                "end": 182
            },
            "url": `${URL_PUBLIC}/Can't_Help_Falling_In_Love.mp3`
        },
        {
            "_id": 3,
            "name": "Giant",
            "album": "40 tubes été 2019",
            "cover": "https://upload.wikimedia.org/wikipedia/en/3/36/Calvin_Harris_-_Giant.png",
            "artist": {
                "name": "Calvin Harris",
                "nickname": "Calvin Harris",
                "nationality": "UK"
            },
            "duration": {
                "start": 0,
                "end": 234
            },
            "url": `${URL_PUBLIC}/Giant.mp3`
        },
        {
            "_id": 4,
            "name": "Waiting For Love",
            "album": "Stories",
            "cover": "https://i1.sndcdn.com/artworks-000126123011-5xfdvg-t500x500.jpg",
            "artist": {
                "name": "Tim Bergling",
                "nickname": "Avicii",
                "nationality": "SW"
            },
            "duration": {
                "start": 0,
                "end": 230
            },
            "url": `${URL_PUBLIC}/Waiting_For_Love.mp3`
        },
        {
            "_id": 5,
            "name": "La Player",
            "album": "La player (Bandolera)",
            "cover": "https://i1.sndcdn.com/artworks-000355017918-7kg5v1-t500x500.jpg",
            "artist": {
                "name": "Zion & Lennox",
                "nickname": "Zion & Lennox",
                "nationality": "PR"
            },
            "duration": {
                "start": 0,
                "end": 254
            },
            "url": `${URL_PUBLIC}/La_Player.mp3`
        },
        {
            "_id": 6,
            "name": "We Don't Talk Anymore",
            "album": "Nine Track Mind",
            "cover": "https://f4.bcbits.com/img/a3600849399_10.jpg",
            "artist": {
                "name": "Charlie Puth",
                "nickname": "Charlie Puth",
                "nationality": "US"
            },
            "duration": {
                "start": 0,
                "end": 230
            },
            "url": `${URL_PUBLIC}/We_Don't_Talk_Anymore.mp3`
        },
        {
            "_id": 7,
            "name": "Bailame Despacio",
            "album": "Revolucionario",
            "cover": "https://images.genius.com/d2862f20138611c23dc58511a64abde5.500x500x1.jpg",
            "artist": {
                "name": "Xantos",
                "nickname": "Xantos",
                "nationality": "RD"
            },
            "duration": {
                "start": 0,
                "end": 254
            },
            "url": `${URL_PUBLIC}/Bailame_Despacio.mp3`
        },
        {
            "_id": 8,
            "name": "Te Quiero Pa' Mi",
            "album": "King of Kings",
            "cover": "https://i1.sndcdn.com/artworks-000193113530-8x6r3d-t500x500.jpg",
            "artist": {
                "name": "Don Omar",
                "nickname": "Don Omar",
                "nationality": "PR"
            },
            "duration": {
                "start": 0,
                "end": 236
            },
            "url": `${URL_PUBLIC}/Te_Quiero_Pa_Mi.mp3`
        },
        {
            "_id": 9,
            "name": "Elastic Heart",
            "album": "Los juegos del hambre: en llamas",
            "cover": "https://i1.sndcdn.com/artworks-000161965039-ldsxxt-t500x500.jpg",
            "artist": {
                "name": "Sia Kate Isobelle Furler",
                "nickname": "Sia",
                "nationality": "AU"
            },
            "duration": {
                "start": 0,
                "end": 307
            },
            "url": `${URL_PUBLIC}/Elastic_Heart.mp3`
        },
        {
            "_id": 10,
            "name": "I Feel It Coming",
            "album": "Starboy",
            "cover": "https://m.media-amazon.com/images/M/MV5BM2RkOTZkYzktZmY4Ni00YjNmLWJiNzUtMDZlNDRjNTllMjVhXkEyXkFqcGdeQXVyNzk2NzU3MTM@._V1_.jpg",
            "artist": {
                "name": "Abel Makkonen Tesfaye",
                "nickname": "The Weeknd",
                "nationality": "CA"
            },
            "duration": {
                "start": 0,
                "end": 269
            },
            "url": `${URL_PUBLIC}/I_Feel_It_Coming.mp3`
        }
        ]
        res.send({ data: listAll })
    } catch (e) {
        httpError(res, e)
    }
}

const getItem = (req, res) => {

}

const createItem = async (req, res) => {
    try {
        const { name, age, email } = req.body
        const resDetail = await userModel.create({
            name,
            age,
            email
        })
        res.send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}


const updateItem = (req, res) => {

}

const deleteItem = (req, res) => {

}

module.exports = { getItem, getItems, deleteItem, createItem, updateItem }