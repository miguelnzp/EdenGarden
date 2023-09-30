function done(){
    Swal.fire({
        title: 'Done!',
        text: 'We will contact you as soon as possible',
        icon: 'success',
        width: '30%',
        timer: 5000,
        iconColor: '#C5C558',
        confirmButtonColor: '#740C02',

        customClass: {
            popup: 'done-alert'
        }
    });
}