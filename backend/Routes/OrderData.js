// const express = require('express')
// const router = express.Router()
// const Order = require('../models/Orders')

// router.post('/orderData',async (req,res) => {
//     let data = req.body.order_data
//     await data.splice(0,0,{Order_date: req.body.order_date})

//     let eId = await Order.findOne({'email': req.body.email})
//     console.log(eId);
//     if (eId === null){
//         try{
//             await Order.create({
//                 email: req.body.email,
//                 order_data:[data]
//             }).then(() => {
//                 res.json({success: true})
//             })
//         } catch (error) {
//             console.log(error.message);
//             res.send("Server Error", error.message)
            
//         }
//     }
//     else{
//         try{
//             await Order.findOneAndUpdate({email:req.body.email},
//                 {$push: {order_data: data}}) .then (() => {
//                     res.json({success: true})
//                 })
//         } catch(error){
//             res.send("Server Error", error.message)
//         }
//     }
    

// })
// module.exports = router;

const express = require('express');
const router = express.Router();
const Order = require('../models/Orders');

router.post('/orderData', async (req, res) => {
    // Validate that the email is present
    if (!req.body.email) {
        return res.status(400).send("Email is required");
    }

    let data = req.body.order_data;
    await data.splice(0, 0, { Order_date: req.body.order_date });

    let eId = await Order.findOne({ 'email': req.body.email });
    console.log(eId);

    if (eId === null) {
        try {
            await Order.create({
                email: req.body.email,
                order_data: [data]
            }).then(() => {
                res.json({ success: true });
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Server Error"); // Changed to use status and send method
        }
    } else {
        try {
            await Order.findOneAndUpdate(
                { email: req.body.email },
                { $push: { order_data: data } }
            ).then(() => {
                res.json({ success: true });
            });
        } catch (error) {
            res.status(500).send("Server Error"); // Changed to use status and send method
        }
    }
});

router.post('/myorderData', async (req, res) => {
try {
    let myData = await Order.findOne({'email': req.body.email})
    res.json({orderData:myData})
} catch (error) {
    res.send("Server Error", error.message)
}
}
)

module.exports = router;
// // const express = require('express');
// // const router = express.Router();
// // const Order = require('../models/Orders');

// // router.post('/orderData', async (req, res) => {
// //     // Validate that email and order_data are present
// //     const { email, order_data, order_date } = req.body;

// //     if (!email) {
// //         return res.status(400).send("Email is required");
// //     }

// //     if (!order_data || !Array.isArray(order_data) || order_data.length === 0) {
// //         return res.status(400).send("Order data is required and must be a non-empty array");
// //     }

// //     // Prepend order_date to the data
// //     let data = order_data;
// //     data.splice(0, 0, { Order_date: order_date });

// //     try {
// //         let existingOrder = await Order.findOne({ email: email });
// //         console.log(existingOrder);

// //         if (!existingOrder) {
// //             await Order.create({
// //                 email: email,
// //                 order_data: [data]
// //             });
// //         } else {
// //             await Order.findOneAndUpdate(
// //                 { email: email },
// //                 { $push: { order_data: data } }
// //             );
// //         }

// //         res.json({ success: true });
// //     } catch (error) {
// //         console.error(error.message);
// //         res.status(500).send("Server Error");
// //     }
// // });

// // module.exports = router;

