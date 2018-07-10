const $ = require("jquery")
const ajaxCalls = require("./ajax")


const buildTheDom = Object.create({}, {
    "createInputField": {
        value: function() {
            $("#input-field").append(`
                <div id="show-form">
                    <input type="text" id="show-name">
                    <input type="text" id="plot-summary">
                    <input type="text" id="seasons">
                    <button id="save-show">Save TV Show</button>
                </div>
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
                            <div class="showName${show.id}" id="${show.id}">${show.show}</div>
                            <input type="text" class="edit-field${show.id} edit-fields" id="show-name-edit${show.id}">
                            <div class="showPlot${show.id}">${show.plotSummary}</div>
                            <input type="text" class="edit-field${show.id} edit-fields" id="plot-summary-edit${show.id}">
                            <div class="showSeasons${show.id}">${show.numberOfSeasons}</div>
                            <input type="text" class="edit-field${show.id} edit-fields" id="seasons-edit${show.id}">
                            <input id="watched${show.id}" showId="${show.id}" type="checkbox" name="watch" value="watched${show.id}">Watched
                            <button class="delete" id="${show.id}">Delete</button>
                        </div>
                    `)
                    $(".edit-fields").hide()
                    $(`#${show.id}`).on("click", buildTheDom.editTvShow)
                    $(`#watched${show.id}`).change(buildTheDom.watchedShow)
                })
            })
        }
    },
    "editTvShow": {
        value: function() {
            $(`.edit-field${event.target.id}`).toggle()
            ajaxCalls.getShow(event.target.id).then((showToEdit)=>{
                $(`#show-name-edit${showToEdit.id}`).val(showToEdit.show)
                $(`#plot-summary-edit${showToEdit.id}`).val(showToEdit.plotSummary)
                $(`#seasons-edit${showToEdit.id}`).val(showToEdit.numberOfSeasons)
            })
        }
    },
    "watchedShow": {
        value: function() {
            let show = $(`.showName${event.target.parentNode.id}`).text()
            let plot = $(`.showPlot${event.target.parentNode.id}`).text()
            let seasons = $(`.showSeasons${event.target.parentNode.id}`).text()
            if ($(this).is(":checked")) {
                console.log("checked");
                ajaxCalls.watchedThisShow(name, plot, seasons, event.target.attributes.showId.value).then((newList)=> {
                    buildTheDom.createDashboard()
                })
            }
        }
    }
})

module.exports = buildTheDom
