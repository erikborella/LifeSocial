$(document).on('click', '.modal1', function (event) {
    event.preventDefault();
    $('#modal1').iziModal('open');
});
$('#modal1').iziModal({
    headerColor: '#009688',
    width: '50%',
    overlayColor: 'rgba(0, 0, 0, 0.5)',
    fullscreen: true,
    transitionIn: 'fadeInUp',
    transitionOut: 'fadeOutDown'
});
$('#modal2').iziModal({
    headerColor: '#009688',
    width: '50%',
    overlayColor: 'rgba(0, 0, 0, 0.5)',
    fullscreen: true,
    transitionIn: 'fadeInUp',
    transitionOut: 'fadeOutDown'
  });
