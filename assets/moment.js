   //Setting up the date and appending to the HTML page
    const today = moment().format('MMMM Do YYYY');
    console.log(today)
    $(".currentDay").append(today);

    const now = parseInt(moment().format('HH'));
    console.log(now)
//defining text-area contents
    const text9AM = $("#textarea9AM");
    const text10AM = $("#textarea10AM");
    const text11AM = $("#textarea11AM");
    const text12AM = $("#textarea12AM");
    const text1PM = $("#textarea1PM");
    const text2PM = $("#textarea2PM");
    const text3PM = $("#textarea3PM");
    const text4PM = $("#textarea4PM");
    const text5PM = $("#textarea5PM");

//parsing html contents and based on number it will change availability class
    $("textarea").each(function () {
        const name = parseInt($(this).attr("name"));
        if (name < now) {
            $(this).addClass("present");
        }


        if (name > now) {
            $(this).addClass("future")
        }

        if (name === now) {
            $(this).addClass("past")
        }



    })
// local storage on click
    $("button").on("click", function () {


        localStorage.setItem("9AM", (text9AM.val()))
        localStorage.setItem("10AM", (text10AM.val()))
        localStorage.setItem("11AM", (text11AM.val()))
        localStorage.setItem("12PM", (text12AM.val()))
        localStorage.setItem("1PM", (text1PM.val()))
        localStorage.setItem("2PM", (text2PM.val()))
        localStorage.setItem("3PM", (text3PM.val()))
        localStorage.setItem("4PM", (text4PM.val()))
        localStorage.setItem("5PM", (text5PM.val()))

    })

    $("#textarea9AM").append(localStorage.getItem("9AM"));
    $("#textarea10AM").append(localStorage.getItem("10AM"));
    $("#textarea11AM").append(localStorage.getItem("11AM"));
    $("#textarea12AM").append(localStorage.getItem("12PM"));
    $("#textarea1PM").append(localStorage.getItem("1PM"));
    $("#textarea2PM").append(localStorage.getItem("2PM"));
    $("#textarea3PM").append(localStorage.getItem("3PM"));
    $("#textarea4PM").append(localStorage.getItem("4PM"));
    $("#textarea5PM").append(localStorage.getItem("5PM"));