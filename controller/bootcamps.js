const Bootcamp = require("../models/Bootcamp");

//@ desc   Get all bootcamps
//@ route  Get /api/v1/bootcamps
//@ access Public

exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.find();
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, error: error.message });
  }
};

//@ desc   Get single bootcamps
//@ route  Get /api/v1/bootcamp
//@ access Public

exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({ success: false, error: error.message });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, error: error.message });
  }
};

//@ desc   Get all bootcamps
//@ route  Get /api/v1/bootcamps
//@ access Public

exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    console.log(bootcamp);
    res.status(201).json({ success: true, data: bootcamp });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, error: error.message });
  }
};

//@ desc   Get all bootcamps
//@ route  Get /api/v1/bootcamps
//@ access Public

exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    console.err(err);
    res.status(400).json({ success: false, err: err.message });
  }
};

//@ desc   Get all bootcamps
//@ route  Get /api/v1/bootcamps
//@ access Public

exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "create new bootcamp" });
};
