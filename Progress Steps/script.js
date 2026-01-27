let numberOfSteps = $('.circles').length;
let currentStep = 1;

$('#next').click(function () {
    if (currentStep >= numberOfSteps) return;

    $('.circles').eq(currentStep).addClass('active');
    $('.bar').eq(currentStep - 1).addClass('active');
    currentStep++;
});

$('#previous').click(function () {
    if (currentStep <= 1) return;

    currentStep--;
    $('.circles').eq(currentStep).removeClass('active');
    $('.bar').eq(currentStep - 1).removeClass('active');
});
