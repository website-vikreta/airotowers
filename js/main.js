$(document).ready(function () {
    $('.products .slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: $('.products #left'),
        nextArrow: $('.products #right'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
})



function sendmail() {
    // e.preventDefault();

    var name = $("#contact-name").val();
    var email = $("#contact-email").val();
    var number = $("#contact-number").val();
    var message = $("#contact-message").val();
    var body = "<b>Name</b> : " + name + "<br> <b>Email</b> : " + email + "<br> <b>Contact</b>: " + number + "<br> <b>Message</b>: " + message;



    Email.send({
        Host: "smtp.gmail.com",
        Username: "airotowers@gmail.com",
        Password: "Influencers",
        To: 'airotowers@gmail.com',
        From: email,
        Subject: name + " wants to send you a message",
        Body: body
    }).then(
        message => {
            if (message == "OK") {
                alert("We got your message. We will reach out to you very soon.");
                $("#contact-form").trigger("reset");
            } else {
                alert(message);
            }
        }
    );

}