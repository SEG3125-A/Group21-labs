$('[data-toggle= "tooltip"]').tooltip();

$('input').hover(function() {
    $(this).css('border-color', '#007bff');
}, function(){
    $(this).css('border-color', '');
});

$('input').focus(function () {
    $(this).css('border-color', '#007bff').css('box-shadow', '0 0 0 0.2rem rgba(0, 123, 255, 0.25)');
});

$('input').blur(function () {
    $(this).css('border-color', '').css('box-shadow', '');
});

// Regular expressions for input validation
$('#phone').on('input', function () {
    $(this).val($(this).val().replace(/\D/g, ''));
});

$('#cardNumber').on('input', function () {
    $(this).val($(this).val().replace(/\D/g, ''));
});

// Hide unavailable days in the calendar
function hideUnavailableDays() {
    const selectedProfessional = 'Hikaru Nakamura'; // Assuming this is the selected professional
    const currentDate = new Date(); // Get the current date

    //hide weekends and professionals off-days
    const days = document.querySelectorAll('.calendar-day');
    days.forEach(day => {
        const date = new Date(day.dataset.date);
        if (date.getDay() === 0 || date.getDay() === 6) {
            day.style.display = 'none'; // Weekend day, hide it
        } else if (selectedProfessional === 'Hikaru Nakamura' && date.getDay() === 1) {
            day.style.display = 'none'; // Hikaru Nakamura's off-day (assuming Monday is off), hide it
        } else {
            day.style.display = 'block';
        }
    });
}

// Call the function initially and whenever the professional or date changes
hideUnavailableDays();