const router= require('express').Router()
const authRouter = require('../modules/auth/auth.routes')
const userRouter = require('../modules/users/user.routes')
const productRouter = require('../modules/products/product.routes')
const categoryRouter = require('../modules/categories/category.routes')

router.get('/', (req,res,next)=>{
    res.json({data:"", mssg :("api router is working")})
});

router.use('/auth',authRouter );
router.use('/users',userRouter );
router.use('/product',productRouter);
router.use('/category',categoryRouter);

router.all('*',(req,res,next)=>{
    res.json({data:"", mssg:"Route not found"} )
})


module.exports= router;