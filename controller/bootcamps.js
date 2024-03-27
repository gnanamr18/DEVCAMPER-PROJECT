const asyncHandler = require("../middleware/async");
const Bootcamp = require("../models/Bootcamp");
const ErrorResponse = require("../utils/errorResponse");

//@ desc   Get all bootcamps
//@ route  Get /api/v1/bootcamps
//@ access Public

exports.getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.find();
  res
    .status(200)
    .json({ success: true, count: bootcamp.length, data: bootcamp });
});

//@ desc   Get single bootcamps
//@ route  Get /api/v1/bootcamp
//@ access Public

exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);

  //The id is in correct and resource is not found
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: bootcamp });

  // res.status(400).json({ success: false, error: error.message });
});

//@ desc   Get all bootcamps
//@ route  Get /api/v1/bootcamps
//@ access Public

exports.createBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);
  console.log(bootcamp);
  res.status(201).json({ success: true, data: bootcamp });
});

//@ desc   Get all bootcamps
//@ route  Get /api/v1/bootcamps
//@ access Public

exports.updateBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: bootcamp });
});

//@ desc   Get all bootcamps
//@ route  Get /api/v1/bootcamps
//@ access Public

exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: {} });
});
