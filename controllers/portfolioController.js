const PORTFOLIO_MODEL = require("../models/PortfolioModel");

// get request
const getPortfolio = async (req, res) => {
  try {
    //    res.send("I am get post");
    

    const getPortfolio = await PORTFOLIO_MODEL.find();
    res.status(200).json(getPortfolio);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// post request
const createPortfolio = (req, res) => {
  const portfolio = req.body;
  const newPortfolio = new PORTFOLIO_MODEL(portfolio);
  try {
    newPortfolio.save();
    res.status(200).json(newPortfolio);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// export
module.exports = {
    getPortfolio: getPortfolio,
    createPortfolio: createPortfolio,
};
