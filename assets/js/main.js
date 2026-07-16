//
// Place any custom JS here
//

$(function () {
  var includes = $('[data-include]')
  $.each(includes, function () {
    var file = 'assets/components/' + $(this).data('include') + '.html'
    $(this).load(file)
  })
})