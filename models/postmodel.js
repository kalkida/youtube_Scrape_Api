const mongoose = require ('mongoose')

const postSchema  = mongoose.Schema({
    url:{
        type :String
    },
    post :[
        {
            title:String,
            numberoflikes :String,
            numberofViews:String,
            channel :[
                {
                    channel_url: String,
                    channel_name: String,
                    channel_subscribe :String
                    
                }
            ],
            comment:[
                {
                    commenter_name : String ,
                    comment : String
                }
            ], 
        }
    ],
})

module.exports = mongoose.model('Posts' , postSchema)