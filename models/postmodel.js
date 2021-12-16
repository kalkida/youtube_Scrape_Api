const mongoose = require ('mongoose')

const postSchema  = mongoose.Schema({
post: [
            {   url:String,
                title: String,
                numberoflikes: String,
                numberofdislikes: String,
                numberofViews: String,
                channel:
                    {
                        channel_url: String,
                        channel_name: String,
                        channel_subscribe: String,
                    },
                comment: [
                    {
                        commenter_name: String,
                        comment: String
                    }
                ]
            }
        ]
})

module.exports = mongoose.model('Posts' , postSchema)