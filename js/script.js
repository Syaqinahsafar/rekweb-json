function displayAllMenu() {
    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu;
        $.each(menu, function(i, data) {
            $('#register-menu').append('<div class="col-md-4"><div class="card mb-3"><img src="img/menu/' + data.picture +'" class="card-img-top" ><div class="card-body"><h5 class="card-title">' + data.name +'r</h5><p class="card-text">' + data.description +'</p><h5 class="card-title">' + data.price +'</h5><a href="#" class="btn btn-primary">Order Now</a></div></div></div>')
        });
    });
}


displayAllMenu();


$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let category = $(this).html();
    $('h1').html(category);

    if (category == 'All Menu') {
        displayAllMenu();
        return;
    }

   
    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu;
        let content = '';

        $.each(menu, function (i, data) {
            if (data.category == category.toLowerCase()) {
                content += ' <div class="col-md-4"><div class="card mb-3"><img src="img/menu/' + data.picture +'" class="card-img-top" ><div class="card-body"><h5 class="card-title">' + data.name +'r</h5><p class="card-text">' + data.description +'</p><h5 class="card-title">' + data.price +'</h5><a href="#" class="btn btn-primary">Order Now</a></div></div></div> ';
            }
        }); 

        $('#register-menu').html(content);
    });
});