function initSearchByTitleFormHandler() {
    $('#search-by-title-form').on('submit', evt => {
        evt.preventDefault();

        const formData = {
            title: $('#title-field').val()
        };

        $.get('/search-by-title.json', formData, (results) => {
            // pointers from https://stackoverflow.com/questions/26691776/dynamically-create-checkboxes-from-ajax-response
            $.each(results, function (key, value) {
                let li = $('<li><input type="checkbox" name="'+ value.book_id + '"/>' + '<label for="' + value.book_id + '"></label></li>');
                li.find('label').text(value.title);
                $('#bklist').append(li);
            });
        });
    });
}
// how to collect clicks/submit form
// sidebar with all currently top rated books?
// then collect all and route into recommendation process
initSearchByTitleFormHandler();