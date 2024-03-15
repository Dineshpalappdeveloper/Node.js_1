const productModel = require("../models/product")
getAllProduct = async (req, res) => {
    try {
        // const productData = await productModel.find()
        // const productData = await productModel.find({ "company": "Apple" })
        // const productData = await productModel.find(req.query)
        const { name, company, sort, select, page, limit } = req.query
        const queryObject = {}

        if (name) {
            // queryObject.name = name for simple
            // for insensetive of at least one match
            queryObject.name = { $regex: name, $options: "i" } // for avoing the case sensetive


        }
        if (company) {
            queryObject.company = company

        }
        let apiData = productModel.find(queryObject)

        if (sort) {
            let shortFix = sort.split(",").join(" ")

            apiData = productModel.find(queryObject).sort(shortFix)

        }
        // select use for how many key and pair you wants to display for user
        if (select) {
            let selectFix = select.split(",").join(" ")

            apiData = productModel.find(queryObject).select(selectFix)

        }

        // paginatision
        // if (page) {
        let pageNumber = Number(page) || 1
        let limits = Number(limit) || 5
        let skip = (pageNumber - 1) * limits
        apiData = apiData.skip(skip).limit(limits)
        // }

        // const productData = await productModel.find(queryObject).sort("-price") // for shorting positive for acd and negative for decending
        // const productData = await productModel.find(req.query)
        const productData = await apiData; // for shorting positive for acd and negative for decending

        res.status(200).json({ "msg": "Data fetched ", "data": productData, "total_item_count": productData.length })

    } catch (error) {
        res.status(400).json({ "error": error })
    }
}

getSingleProduct = async (req, res) => {
    res.status(200).json({ msg: " Single Data fetched " })
}
module.exports = { getAllProduct, getSingleProduct }