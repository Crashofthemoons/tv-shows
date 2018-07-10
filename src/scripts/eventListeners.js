const dom = require("./dom")
const $ = require("jquery")
const ajax = require("./ajax")

const eventListeners = Object.create({}, {
    "saveTvShow": {
        value: function() {
            console.log("clicked")
            let show = $("#show-name").val()
            let plot = $("#plot-summary").val()
            let seasons = $("#seasons").val()
            ajax.postShow(show, plot, seasons).then((newShow)=> {
                dom.createDashboard()
            })
        }
    }
})

module.exports = eventListeners