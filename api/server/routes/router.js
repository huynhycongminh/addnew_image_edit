const express = require("express");
const route = express.Router();

const controller = require("../controller/controller");

route.get("/new_test_driver", controller.new_test_drive);

// API
route.post("/api/register_test_drive", controller.register_test_drive);

route.get("/api/cars/:id", controller.find_car);

route.get("/api/cars", controller.find_car);

route.get("/api/search", controller.search_car);

route.get("/get_data", controller.get_data);

route.post("/api/login", controller.login);

route.get("/api/get_list_car", controller.get_list_car);

route.get("/api/select_car", controller.select_car);

route.get("/api/edit_car", controller.edit_car);

route.put("/api/update_car/:_id", controller.update_car)

route.delete("/api/delete_car/:_id", controller.delete_car)

route.delete("/api/multi_delete_car", controller.multi_delete_car)

route.get("/api/get_image",controller.get_image)

module.exports = route;