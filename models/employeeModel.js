const mongoose = require("mongoose");

// first method

// const employeeSchema = new mongoose.Schema({
//   name: {
//     type: String,
//   },
//   position: {
//     type: String,
//   },
//   location: {
//     type: String,
//   },
//   salary: {
//     type: Number,
//   },
// });
// module.exports = mongoose.model("employee", employeeSchema);

const employeeModel = mongoose.model("employee", {
  name: {
    type: String,
  },
  position: {
    type: String,
  },
  location: {
    type: String,
  },
  salary: {
    type: Number,
  },
});
module.exports = { employeeModel };
