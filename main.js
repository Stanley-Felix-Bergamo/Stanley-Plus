$('document').ready(function () {
    botaoAssitir();

});



function botaoAssitir() {
    $('.btn').click(function (e) {
        e.preventDefault();

        const toastLiveExample = $('#liveToast');

        const toast = new bootstrap.Toast(toastLiveExample)
        toast.show();
    });
}



