const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorhandler");
const Doctor = require("../models/Doctors");

exports.newBooking = catchAsyncErrors(async (req, res, next) => {
  const user = req.user._id;
  const slot = req.body.slot;

  const doctor = await Doctor.findById(req.body.doctor);
  const booking = {
    user: user,
    slot: slot,
  };
  const isBooked = Doctor.booking.find(
    (book) => book.slot.toString() === req.body.slot.toString()
  );
  if (isBooked) {
    return next(new ErrorHandler("Slot Already Booked", 404));
  } else {
    doctor.booking.push(booking);
  }

  await doctor.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});
