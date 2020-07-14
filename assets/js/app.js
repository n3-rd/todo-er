$('document').ready(function () {

    
    var todoStore = localStorage.getItem('history')
    $('#todo-section').html(todoStore)


    $('#todo-submit').click(function () {

        if ($('#todo-input').val() !== '') {
            $('#todo-section').prepend("<li class='todo-list-item table-view-cell'>" + $('#todo-input').val() + "<span class='del pull-right icon icon-close'></span></li>")

            localStorage.setItem('history', $('#todo-section').html())
            $('#todo-input').val('')
            Website2APK.showToast("Item Added");
        }
        else {
            alert('Please Type In Something')
        }
    })

    $('#clear-local').click(function () {
        localStorage.clear('history')

    })

    $('.del').click(function () {
        $(this).parent().remove();
        localStorage.setItem('history', $('#todo-section').html())
    })


// $('.icon-more-vertical').mouseenter(function(){

// $('.options').fadeIn()

// });

// $('.icon-more-vertical').mouseleave(function(){

//     $('.options').hide()
    
//     });

});