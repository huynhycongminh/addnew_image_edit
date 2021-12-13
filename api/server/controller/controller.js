var CarModel = require("../model/CarModel");
var Car = require("../model/Car");
var async = require("async");
var CustomerCarModel = require("../model/CustomerCarModel");
var CustomerCar = require("../model/CustomerCar");
var Customer = require("../model/Customer");
var AdminLogin = require("../model/AdminLogin");
var GFS = require("../model/GFS");
var gfs = require("fs");
const ObjectId = require('mongodb').ObjectId;
// Retrieve all [car, car model] and render form register test driver
exports.new_test_drive = (reg, res) => {
  async.parallel(
    [
      //Read car_models data
      function (callback) {
        var car_models = CarModel.find();
        car_models.exec(function (err, car_models) {
          if (err) {
            callback(err);
          }
          callback(null, car_models);
        });
      },

      //Read cars data
      function (callback) {
        var cars = Car.find();
        cars.exec(function (err, cars) {
          if (err) {
            callback(err);
          }
          callback(null, cars);
        });
      },
    ],

    //Compute all results
    function (err, results) {
      if (err) {
        console.log(err);
        res.send(400);
      }

      if (results == null || results[0] == null) {
        res.send(400);
      }

      var data = { car_models: results[0], cars: results[1] };
      // check data
      // console.log(data);
      res.send(data);
    }
  );
};

// create and save customer into form register test driver
exports.register_test_drive = async function (req, res) {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  try {
    const customer = new Customer({
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      address: req.body.address,
      note: req.body.note,
    });
    await customer.save().then((data) => {
      res.write("Create customer successfully !!!\n");
    });

    const customer_car_model = new CustomerCarModel({
      customer: customer._id,
      car_model: req.body.car_model_id,
    });
    await customer_car_model.save().then((data) => {
      res.write("Create customer car model successfully !!!\n");
    });

    const customer_car = new CustomerCar({
      customer: customer._id,
      car: req.body.car_id,
      status: 1,
    });
    await customer_car.save().then((data) => {
      res.end("Create customer car successfully !!!\n");
    });
  } catch (err) {
    console.log(err);
  }
};

// Retrieve all car or a single car
exports.find_car = (req, res) => {
  if (req.params.id) {
    const id = req.params.id;

    Car.findById(id)
      .populate({
        path: "car_detail",
        model: "CarDetail",
        populate: [
          {
            path: "furniture",
            model: "Furniture",
          },
          {
            path: "exterior",
            model: "Exterior",
          },
        ],
      })
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Not found car with id " + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: "Error retrieving car with id " + id });
      });
  } else {
    Car.find()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Error Occurred while retrieving user information",
        });
      });
  }
};

// Search car
exports.search_car = (req, res) => {
  var query = {};

  if (req.query.name) {
    query.name = { $regex: req.query.name, $options: "i" };
  }
  Car.find(query)
    .populate({
      path: "car_detail",
      model: "CarDetail",
      populate: [
        {
          path: "furniture",
          model: "Furniture",
        },
        {
          path: "exterior",
          model: "Exterior",
        },
      ],
    })
    .then((data) => {
      res.send(data);
    });
};

// login
exports.login = (req, res) => {
  AdminLogin.findOne()
    .lean()
    .exec(function (err, data) {
      if (!req.body.username || !req.body.password) {
        res.send("Missing User Or Password");
      } else if (
        req.body.username === data.username &&
        req.body.password === data.password
      ) {
        req.session.admin = true;
        res.send(req.session.admin);
      } else {
        res.send("Wrong User Name OR Wrong Password");
      }
    });
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.send("logout success!");
};

exports.get_data = (req, res) => {
  CustomerCar.find()
    .populate({
      path: "customer",
      model: "Customer",
    })
    .populate({
      path: "car",
      model: "Car",
      populate: [
        {
          path: "car_model",
          model: "CarModel",
        },
      ],
    })
    .then((data) => {
      res.send(data);
    });
};

exports.get_list_car = (req, res) => {
  Car.find()
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
};

// db chia làm 2 phần fs.chuck and fs.file

exports.select_car = (req, res) => {
  Car.find({ _id: req.query._id })
    .populate({
      path: "image",
      model: "GFS",
    })
    .populate({
      path: "car_detail",
      model: "CarDetail",
      populate: [
        {
          path: "furniture",
          model: "Furniture",
        },
        {
          path: "exterior",
          model: "Exterior",
        },
        {
          path: "engine_transmission",
          model: "EngineTransmission",
        },
        {
          path: "size_volume",
          model: "SizeVolume",
        },
      ],
    })
    .then((data) => {
      const readStream = gfs.createReadStream(
        `../api/assets/img/${data[0].image.filename}`
      );
      readStream.on("data", (chunk) => {
        const result = { data: data, image: chunk.toString("base64") };
        res.send(result);
      });
    })
    .catch((err) => console.log(err));
};

// get image
exports.get_image = (req, res) => {
  Car.find({})
    .populate({
      path: "image",
      model: "GFS",
    })
    .then((data) => {
      var images = data.forEach((car) => {
        const readStream = gfs.createReadStream(
          `../api/assets/img/${car.image.filename}`
        );
        readStream.on("data", (chunk) => {
          {
            image: chunk.toString("base64");
          }
        });
       
      });
      res.send(images);
      console.log(images);
    });
};

// edit car
exports.edit_car = (req, res) => {
  console.log(req.params);
  Car.findOne({ _id: req.query._id }).then((data) => {
    res.send(data);
  });
};

// update car
exports.update_car = (req, res) => {
  Car.findById(req.params._id, function (err, car) {
    if (!car) res.status(404).send("data is not found");
    else {
      car.name = req.body.name;
      car.prices = req.body.prices;
      car.number = req.body.number;
      car
        .save()
        .then(() => {
          res.json("Update complete");
        })
        .catch((err) => {
          res.status(400).send("unable to update the database");
        });
    }
  });
};

// delete car
exports.delete_car = (req, res) => {
  Car.deleteOne({ _id: req.params._id }, function (err) {
    if (err) return handleError(err);
  }).then((data) => res.json("Delete success"));
};

// multi delete car

exports.multi_delete_car = (req, res) => {
  Car.remove({ _id: { $in: req.query.ids } }, function (err) {
    if (err) return handleError(err);
  }).then((data) => res.json("Delete success"));
};

exports.edit_customer = (req, res) => {
  console.log(req.params);
  var id = req.query._id;
  var StringId = new ObjectId(id);
  CustomerCar.findOne({ _id: StringId})   
   .populate({
    path: "customer",
    model: "Customer",
  })
  .populate({
    path: "car",
    model: "Car",
    populate: [
      {
        path: "car_model",
        model: "CarModel",
      },
    ],
  }).then((data) => {
    res.send(data);
  });
};

// update car
exports.update_customer = (req, res) => {

  var id = req.params._id;
  var good_id = new ObjectId(id);

  CustomerCar.findById(good_id, function (err, cc) {
    if (!cc) res.status(404).send("data is not found");
    else {
      cc.status = req.body.status;
      cc
        .save()
        .then(() => {
          res.json("Update complete");
        })
        .catch((err) => {
          res.status(400).send("unable to update the database");
        });
    }
  });
};

// delete car
// exports.delete_car = (req, res) => {
//   Car.deleteOne({ _id: req.params._id }, function (err) {
//     if (err) return handleError(err);
//   }).then((data) => res.json("Delete success"));
// };

// // multi delete car

// exports.multi_delete_car = (req, res) => {
//   Car.remove({ _id: { $in: req.query.ids } }, function (err) {
//     if (err) return handleError(err);
//   }).then((data) => res.json("Delete success"));
// };
