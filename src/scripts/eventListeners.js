const buildTheDom = require("./dom")
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
                buildTheDom.createDashboard()
            })
        }
    },
    "deleteShow": {
        value: function() {
            ajax.deleteShow(event.target.id).then((deletedShow)=> {
                console.log(deletedShow)
                buildTheDom.createDashboard()
            })
        }
    },
    "saveEditedShow": {
        value: function() {
            if(event.keyCode === 13) {
                let show = $(`#show-name-edit${event.target.parentNode.id}`).val()
                let plot = $(`#plot-summary-edit${event.target.parentNode.id}`).val()
                let seasons = $(`#seasons-edit${event.target.parentNode.id}`).val()
                console.log(show, plot, seasons)
                ajax.putShow(show, plot, seasons, event.target.parentNode.id).then((editedShow)=> {
                    buildTheDom.createDashboard()
                })
            }
        }
    }
})

module.exports = eventListeners