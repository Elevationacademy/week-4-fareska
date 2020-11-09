
$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate)
    renderApts(relevantApts)
})

const source = $("#apartments-template").html()
const template = Handlebars.compile(source)
let newHtml

const renderApts = function (apartments) {
    $("#results").empty()
    if (apartments.length === 0 || apartments === undefined) {
        //alert("There are no matching results, please try in different time")
        newHtml = template({noMatch:"There are no matching results, please try in different time"} )
        $("#results").append(newHtml)
    }
    else{    
    newHtml = template({apartment:apartments} )
    $("#results").append(newHtml)
   }
}

renderApts(apartments) //renders apartments when page 
