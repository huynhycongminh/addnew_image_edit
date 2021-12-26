var CarModel = require("../model/CarModel");
var Car = require("../model/Car");
var async = require("async");

var CustomerCarModel = require("../model/CustomerCarModel");
var CustomerCar = require("../model/CustomerCar");
var Customer = require("../model/Customer");
var AdminLogin = require("../model/AdminLogin");
var Chunk = require("../model/Chunk");
var gfs = require("fs");
var path = require("path");
var grid = require("gridfs-stream");
var mongoose = require("mongoose");
var connectDB = require("../database/connection");
const SizeVolume = require("../model/SizeVolume");
const EngineTransmission = require("../model/EngineTransmission");
const Furniture = require("../model/Furniture");
const Exterior = require("../model/Exterior");
const CarDetail = require("../model/CarDetail");
var ObjectID = require("mongodb").ObjectID;
const { Console } = require("console");
const GFS = require("../model/GFS");

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
          console.log(data);
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
    .populate([
      {
        path: "image",
        model: "GFS",
      },
      {
        path: "car_detail",
        model: "CarDetail",
        populate: [
          {
            path: "size_volume",
            model: "SizeVolume",
          },
          {
            path: "engine_transmission",
            model: "EngineTransmission",
          },
          {
            path: "furniture",
            model: "Furniture",
          },
          {
            path: "exterior",
            model: "Exterior",
          },
        ],
      },
    ])
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
  Chunk.find()
    .populate({
      path: "files_id",
      model: "GFS",
      populate: {
        path: "metadata",
        model: "Car",
      },
    })
    .then((data) => {
      const convert_data = data.map((file) => {
        const base64 = file.data.toString("base64");
        return { ...file, base64 };
      });
      res.send(convert_data);
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
  var id = req.query._id;
  var StringId = new ObjectId(id);
  CustomerCar.findOne({ _id: StringId })
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

// update car
exports.update_customer = (req, res) => {
  var id = req.params._id;
  var good_id = new ObjectId(id);

  CustomerCar.findById(good_id, function (err, cc) {
    if (!cc) res.status(404).send("data is not found");
    else {
      cc.status = req.body.status;
      cc.save()
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

// get car model
exports.get_car_model = (req, res) => {
  CarModel.find()
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
};

// create and save customer into form register test driver
exports.add_post = async (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  try {
    const size_volume_id = new ObjectID();
    const size_volume = new SizeVolume({
      _id: size_volume_id.toString(),
      length: req.body.length,
      width: req.body.width,
      height: req.body.height,
      standard_long: req.body.standard_long,
      weight: req.body.weight,
    });
    await size_volume.save().then((data) => {
      res.write("Create Size Volume successfully !!!\n");
    });

    const engine_transmission_id = new ObjectID();
    const engine_transmission = new EngineTransmission({
      _id: engine_transmission_id.toString(),
      engine: req.body.engine,
      transmission: req.body.transmission,
      cylinder_capacity: req.body.cylinder_capacity,
      maximum_power: req.body.maximum_power,
      maximum_speed: req.body.maximum_speed,
    });
    await engine_transmission.save().then((data) => {
      res.write("Create engine transmission model successfully !!!\n");
    });

    const furniture_id = new ObjectID();
    const furniture = new Furniture({
      _id: furniture_id.toString(),
      steering_wheel: req.body.steering_wheel,
      display: req.body.display,
      technology: req.body.technology,
      sound_connect: req.body.sound_connect,
      equipment: req.body.equipment,
    });
    await furniture.save().then((data) => {
      res.write("Create furniture successfully !!!\n");
    });

    const exterior_id = new ObjectID();
    const exterior = new Exterior({
      _id: exterior_id.toString(),
      headlight: req.body.headlight,
      parking_light: req.body.parking_light,
      daylight: req.body.daylight,
    });
    await exterior.save().then((data) => {
      res.write("Create furniture successfully !!!\n");
    });

    const car_detail_id = new ObjectID();
    const car_detail = new CarDetail({
      _id: car_detail_id.toString(),
      size_volume: size_volume._id,
      engine_transmission: engine_transmission._id,
      furniture: furniture._id,
      exterior: exterior._id,
    });

    await car_detail.save().then((data) => {
      res.write("Create car detail successfully !!!\n");
    });

    const car_id = new ObjectID();
    const car = new Car({
      _id: car_id.toString(),
      name: req.body.name,
      year: Date.now(),
      prices: req.body.prices,
      number: req.body.quantity,
      node: req.body.note,
      car_models: req.body.model,
      car_detail: car_detail._id,
    });

    await car.save().then((data) => {
      res.write("Create car successfully !!!\n");
    });
  } catch (err) {
    console.log(err);
  }
};

exports.edit_post = (req, res) => {
  Car.find({ _id: req.params.id })
    .populate([
      {
        path: "car_models",
        model: "CarModel",
      },
      {
        path: "car_detail",
        model: "CarDetail",
        populate: [
          {
            path: "size_volume",
            model: "SizeVolume",
          },
          {
            path: "engine_transmission",
            model: "EngineTransmission",
          },
          {
            path: "furniture",
            model: "Furniture",
          },
          {
            path: "exterior",
            model: "Exterior",
          },
        ],
      },
    ])

    .then((data) => {
      const result = {
        data: data[0],
        image: "",
      };
      res.send(result);
    });
};

// update car
exports.update_post = (req, res) => {
  try {
    Car.findById(req.params.id, async function (err, c) {
      c.name = req.body.data.name;
      (c.prices = req.body.data.prices),
        (c.number = parseInt(req.body.data.quantity)),
        (c.node = req.body.data.note),
        (c.car_models = req.body.ids.model_id);
      c.car_detail = req.body.ids.detail_id;
      await c.save().then(() => {
        res.write("Update car\n");
      });
    });

    Furniture.findById(req.body.ids.furniture_id, async function (err, f) {
      (f.steering_wheel = req.body.data.steering_wheel),
        (f.display = req.body.data.display),
        (f.technology = req.body.data.technology),
        (f.sound_connect = req.body.data.sound_connect),
        (f.equipment = req.body.data.equipment);
      await f.save().then(() => {
        res.write("Update furniture\n");
      });
    });

    Exterior.findById(req.body.ids.exterior_id, async function (err, e) {
      (e.headlight = req.body.data.headlight),
        (e.parking_light = req.body.data.parking_light),
        (e.daylight = req.body.data.daylight),
        await e.save().then(() => {
          res.write("Update exterior\n");
        });
    });

    EngineTransmission.findById(
      req.body.ids.engine_id,
      async function (err, es) {
        console.log(req.body.data);
        (es.engine = req.body.data.engine),
          (es.transmission = req.body.data.transmission),
          (es.cylinder_capacity = req.body.data.cylinder_capacity),
          (es.maximum_power = req.body.data.maximum_power),
          (es.maximum_speed = req.body.data.maximum_speed);
        await es.save().then(() => {
          res.write("Update engine transmission\n");
        });
      }
    );

    SizeVolume.findById(req.body.ids.size_volume_id, async function (err, s) {
      (s.length = req.body.data.length),
        (s.width = req.body.data.width),
        (s.height = req.body.data.height),
        (s.standard_long = req.body.data.standard_long),
        (s.weight = req.body.data.weight),
        s.save().then(() => {
          res.write("Update size volume\n");
        });
    });
  } catch (err) {
    console.log(err);
  }
};
