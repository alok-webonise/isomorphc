/**
 * Created by webonise on 30/7/15.
 */
var express = require('express');
var browserify = require('browserify');
var React = require('react');
var jsx = require('node-jsx');
var app = express();
jsx.install();
//var view = require('./views/index.jsx');


app.use('/',function(req,res){
    res.setHeader('Content-Type', 'text/html');
    res.end(
        React.renderToStaticMarkup(
            React.createElement("html", null,
                React.createElement("head", null,
                    React.createElement("title", null, "Hello World")
                ),
                React.createElement("body", null,
                    "saale kamine ye react hai")
            ))
    )
})


app.listen(9000);

