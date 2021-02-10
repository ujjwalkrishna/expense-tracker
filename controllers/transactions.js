const Transaction = require('../models/transaction');

//@DESC Get all Transactions
//@route GET api/v1/transactions
//@access PUBLIC

exports.getTransaction = async (req, res, next) => {
    try {
        const transactions = await Transaction.find({});
        return res.status(200).json({                                  // 200 Everthing OK
            success: true,
                    count: transactions.length,
            data: transactions
})
    } catch (error) {
        return res.status(500).json({                                  // 500 Server error
            success: false,
            message: 'Server Error'
        })
    }
}

//@DESC Add Transactions
//@route GET api/v1/transactions
//@access PUBLIC

exports.addTransaction = async (req, res, next) => {
    try {
        const transaction = await Transaction.create(req.body);

        return res.status(201).json({                                         // 201 When we create anything and thats successful
            status: true,
            data: transaction
        })

    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({                              // 400 When client error
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({                                  // 500 Server error
                success: false,
                message: 'Server Error'
            })
        }
    }
}

//@DESC Delete Transactions
//@route delete api/v1/transactions
//@access PUBLIC

exports.deleteTransaction = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        if(!transaction){
            return res.status(404).json({                            // 404 Not found
                success: false,
                error: 'No transaction'
            })
        }

        await transaction.remove();
        return res.status(200).json({
            success: true,
            data: {}
        })
    } catch (error) {
        return res.status(500).json({                                  // 500 Server error
            success: false,
            message: 'Server Error'
        })
    }
}