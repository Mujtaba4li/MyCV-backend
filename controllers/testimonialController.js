const TESTIMONIAL_MODEL = require("../models/TestimonialModel");

// get request
const getTestimonial = async (req, res) => {
  try {
    //    res.send("I am get post");
    

    const getTestimonial = await TESTIMONIAL_MODEL.find();
    res.status(200).json(getTestimonial);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// post request
const creatTestimonial = (req, res) => {
  const testimonial = req.body;
  const newTestimonial = new TESTIMONIAL_MODEL(testimonial);
  try {
    newTestimonial.save();
    res.status(200).json(newTestimonial);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// export
module.exports = {
    getTestimonial: getTestimonial,
    creatTestimonial: creatTestimonial,
};
