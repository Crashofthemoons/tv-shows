const $ = require("jquery")
const ajaxCalls = require("./ajax")

const buildTheDom = Object.create({}, {
    "createInputField": {
        value: function() {
            $("#input-field").append(`
                <form id="show-form">
                    <input type="text" id="show-name">
                    <input type="text" id="plot-summary">
                    <input type="text" id="seasons">
                    <button id="save-show">Save TV Show</button>
                </form>
            `)
        }
    },
    "createDashboard": {
        value: function() {
            $("#list-of-shows").empty()
            ajaxCalls.getShows().then((shows) => {
                shows.forEach(show =>{
                    console.log(show.id)
                    $("#list-of-shows").append(`
                        <div id="${show.id}" class="oneShow">
                            <div class="showName">${show.show}</div>
                            <div class="showPlot">${show.plotSummary}</div>
                            <div class="showSeasons">${show.numberOfSeasons}</div>
                            <input id="${show.id}" type="checkbox" name="watch" value="watched"> Watched
                            <button id="${show.id}">Delete</button>
                        </div>
                    `)
                })
            })
        }
    }
})

buildTheDom.createInputField()
buildTheDom.createDashboard()