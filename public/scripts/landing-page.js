// Javascript master

$(document).ready(() => {

    // Function to reveal each card on the homepage
    let revealCards = () => {
        setTimeout(() => {
            $("#homePageCard1").slideToggle(750, "swing", () => {
                $("#homePageCard2").slideToggle(750, "swing", () => {
                    $("#homePageCard3").slideToggle(750, "swing")
                })
            })
        }, 750)

    }

    // Function to reveal the homepage welcome
    $(".landing-page-welcome").slideToggle("slow", "linear", () => {
        revealCards()
    })

});