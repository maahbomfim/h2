// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Framework7.$;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Event listener to run specific code for specific pages
$$(document).on('pageInit', function (e) {


});

// Generate dynamic page
function createPageBar(idBar) {
    var barRef = new Firebase('https://happyhourh2.firebaseio.com/bares/'+idBar+'/');
    barRef.on('value', function(snapshot) {
      if(snapshot.val() === null) {
        mainView.loadContent(
            '<!-- Top Navbar-->'+
            '<div class="navbar top-navbar">'+
              '<div class="navbar-inner">'+
                '<div class="left">'+
                  '<a href="#" class="link icon-only open-panel"><i class="icon icon-bars-white"></i></a>'+
                '</div>'+
                '<div class="center sliding">Não encontrado!</div>'+
              '</div>'+
            '</div>'+
            '<div class="pages">'+
              '<!-- Page, data-page contains page name-->'+
              '<div data-page="bar" class="page">'+
                '<!-- Scrollable page content-->'+
                '<div class="page-content">'+
                  '<div class="content-block">'+
                    '<p>Ops!<br>Bar não encontrado =(</p>'+
                    '<p><a href="#" class="back link"><i class="icon icon-back-blue"></i><span> Back</span></a></p>'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'
        );
      } else {
        mainView.loadContent(
            '<!-- Top Navbar-->'+
            '<div class="navbar top-navbar">'+
              '<div class="navbar-inner">'+
                '<div class="left">'+
                  '<a href="#" class="link icon-only open-panel"><i class="icon icon-bars-white"></i></a>'+
                '</div>'+
                '<div class="center sliding">'+snapshot.val().nome+'</div>'+
              '</div>'+
            '</div>'+
            '<div class="pages">'+
              '<!-- Page, data-page contains page name-->'+
              '<div data-page="bar" class="page">'+
                '<!-- Scrollable page content-->'+
                '<div class="page-content">'+
                  '<div class="topo-bar">'+
                    '<img src="'+snapshot.val().imgtopo+'" class="banner-topo-bar">'+
                  '</div>'+
                  '<div class="content-block">'+
                    '<div class="row">'+
                      '<div class="col-33">'+
                        '<img src="'+snapshot.val().imglogo+'" class="logo-bar">'+
                      '</div>'+
                      '<div class="col-66">'+
                        '<div class="desc-topo">'+
                          '<div class="row">'+
                            '<div class="col-66">'+
                              '<p>'+
                                '<i class="fa fa-dollar on"></i> <i class="fa fa-dollar on"></i> <i class="fa fa-dollar off"></i> <i class="fa fa-dollar off"></i> <i class="fa fa-dollar off"></i>'+
                                (snapshot.val().openbar==1?'<br><i class="fa fa-beer"></i> Openbar ':'')+
                                (snapshot.val().estac==1?'<br><i class="fa fa-car"></i> Estac. ':'')+
                                (snapshot.val().show==1?'<br><i class="fa fa-music"></i> Show ':'')+
                              '</p>'+
                            '</div>'+
                            '<div class="col-33">'+
                              '<p class="qtd-mesa">'+snapshot.val().mesasvagas+'/'+snapshot.val().totalmesas+'</p>'+
                              '<i class="mesa"></i>'+
                            '</div>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                    '<div class="row">'+
                      '<div class="content-block-inner">'+
                        '<div class="row">'+
                          '<div class="col-50">'+
                            '<a href="cardapio.html" class="button"><i class="fa fa-cutlery"></i> Cardápio</a>'+
                          '</div>'+
                          '<div class="col-50">'+
                            '<a href="agenda.html" class="button"><i class="fa fa-calendar"></i> Agenda</a>'+
                          '</div>'+
                        '</div>'+
                        snapshot.val().descricao+
                        '<p><i class="fa fa-map-marker"></i> <strong>Endereço</strong>'+
                          '<br>'+snapshot.val().endereco+'</p>'+
                        '<p><i class="fa fa-phone"></i> <strong>Telefone</strong>'+
                          '<br>'+snapshot.val().telefone+'</p>'+
                      '</div>'+
                      '<p><a href="#" class="back link"><i class="icon icon-back-blue"></i><span> Back</span></a></p>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'
        );
      }
    });
	return;
}