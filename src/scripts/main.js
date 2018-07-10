const $ = require("jquery")
const dom = require("./dom")
const eventListeners = require("./eventListeners")

$("#input-field").hide()
$("#new-show").on("click", function(){$("#input-field").toggle()})
$("#save-show").on("click", eventListeners.saveTvShow)