const {Account} = require("../model/account");

const AccountController ={

    postAccount: async(req,res) =>{
        try {
            const newAcc = new Account(req.body);
            const saveAcc = await newAcc.save();
            res.status(200).json(saveAcc);
        } catch {
            res.status(500).json(err);
        }
    },

    postAccount: async(req,res) =>{
        try {
            const newAcc = new Account(req.body);
            const saveAcc = await newAcc.save();
            res.status(200).json(saveAcc);
        } catch {
            res.status(500).json(err);
        }
    },

    editAccount: async (req, res) => {
        try {
          const accUpdate = await Account.findById(req.params.id);
          await accUpdate.updateOne({ $set: req.body });
          res.status(200).json(accUpdate);
        } catch (error) {
          res.status(200).json(error);
        }
      },
}

module.exports=AccountController;