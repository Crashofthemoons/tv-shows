const $ = require("jquery")

const ajaxCalls = Object.create({}, {
    "getShows": {
        value: function() {
            return $.ajax("http://localhost:3000/shows?watched=false")
        }
    },
    "getShow": {
        value: function(id) {
            return $.ajax(`http://localhost:3000/shows/${id}`)
        }
    },
    "postShow": {
        value: function(name, plot, seasons) {
            return $.ajax({
                url: "http://localhost:3000/shows",
                method: "POST",
                data: {
                    "show": name,
                    "plotSummary": plot,
                    "numberOfSeasons": seasons,
                    "watched": false
                }
            })
        }
    },
    "putShow": {
        value: function(name, plot, seasons, id) {
            return $.ajax({
                url: `http://localhost:3000/shows/${id}`,
                method: "PUT",
                data: {
                    "show": name,
                    "plotSummary": plot,
                    "numberOfSeasons": seasons,
                    "watched": false
                }
            })
        }
    },
    "watchedThisShow": {
        value: function(name, plot, seasons, id) {
            return $.ajax({
                url: `http://localhost:3000/shows/${id}`,
                method: "PUT",
                data: {
                    "show": name,
                    "plotSummary": plot,
                    "numberOfSeasons": seasons,
                    "watched": true
                }
            })
        }
    },
    "deleteShow": {
        value: function(id) {
            return $.ajax({
                url: `http://localhost:3000/shows/${id}`,
                method: "DELETE"
            })
        }
    }
})

module.exports = ajaxCalls