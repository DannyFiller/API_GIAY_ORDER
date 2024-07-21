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

    getAllAccount: async(req,res)=>{
        try {
            const account = await Account.find();
            res.status(200).json(account);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    editAcount: async (req, res) => {
        try {
          const accountUpdate = await Account.findById(req.params.id);
          await accountUpdate.updateOne({ $set: req.body });
          res.status(200).json(accountUpdate);
        } catch (error) {
          res.status(200).json(error);
        }
      },
}

module.exports=AccountController;