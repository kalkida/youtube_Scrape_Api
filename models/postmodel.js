const mongoose = require ('mongoose')

const postSchema  = mongoose.Schema({
    url:{
        url :String
    },
    post :[
        {
            title:String,
            numberoflikes :String,
            numberofViews:String,
            channel :[
                {
                    name: String,
                    url: String,
                    subscribers :String
                    
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

const CommentSchema = mongoose.Schema({


})

module.exports = mongoose.model('Posts' , postSchema)