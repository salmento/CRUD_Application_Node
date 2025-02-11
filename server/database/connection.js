const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        // eslint-disable-next-line no-undef
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        // eslint-disable-next-line no-undef
        process.exit(1);
    }
}

module.exports = connectDB