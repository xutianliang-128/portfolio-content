iziToast.settings({
    timeout: 10000,
    progressBar: false,
    close: false,
    closeOnEscape: true,
    position: 'topCenter',
    transitionIn: 'bounceInDown',
    transitionOut: 'flipOutX',
    displayMode: 'replace',
    layout: '1',
    backgroundColor: '#00000040',
    titleColor: '#efefef',
    messageColor: '#efefef',
    icon: 'Fontawesome',
    iconColor: '#efefef',
});


window.addEventListener('load', function () {


    setTimeout(function () {
        iziToast.show({
            timeout: 2500,
            icon: false,
            message: 'Welcome to my site'
        });
    }, 800);

}, false)