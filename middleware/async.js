const asyncWrapper = (fn)=>{
    return async (req,res,next) => {
        try{
            await fn(req,res,next)
        }catch(err){
            console.log(err)
            res.status(400).send('Error') 
            return     
        }
    }
}

module.exports = asyncWrapper