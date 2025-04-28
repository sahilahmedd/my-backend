import { asyncHandler } from '../utils/asyncHandler.js'

const registerUser = asyncHandler( async(req, res)=> {
   res.status(200).json({
        message: "I'm a pro web developer"
    })
} )

export { registerUser }