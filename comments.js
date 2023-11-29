// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = [
    { username: 'Todd', comment: 'lol that is so funny!' },
    { username: 'Sk8erBoi', comment: 'Plz delete your account, Todd' },
    { username: 'exit123', comment: 'omg plzzzzz DELETEEEE!!!!' },
    { username: 'soccerGal', comment: 'can I kick him?' }
]
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/comments', (req, res) => {
    res.send(comments);
});
app.post('/comments', (req, res) => {
    const newComment = req.body;
    comments.push(newComment);
    res.send(newComment);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// Path: index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ajax Exercise</title>
</head>
<body>
<h1>Comments</h1>
<ul id="comments">
</ul>
<form id="comment-form">
    <input type="text" name="username" placeholder="username">
    <input type="text" name="comment" placeholder="comment">
    <input type="submit" value="Add Comment">
</form>
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script>
    $.getJSON('/comments', (comments) => {
        $.each(comments, (i, comment) => {
            $('#comments').append('<li>' + comment.username + ' - ' + comment.comment + '</li>');
        });
    });
    $('#comment-form').submit((e) => {
        e.preventDefault();
        $.post('/comments', {
            username: $('#comment-form input[name="username"]').val(),
            comment: $('#comment-form input[name="comment"]').val()
        }, (comment) => {
            $('#comments').append('<li>' + comment.username + ' - ' + comment.comment + '</li>');
        });
    });
</script>
</body>
</html>
```

## 6. jQuery AJAX

- jQuery AJAX
    - jQuery makes AJAX easy
    - jQuery's AJAX methods return a jqXHR object,