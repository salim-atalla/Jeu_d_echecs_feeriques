"use strict";
/**
 * NE PAS MODIFIER CE FICHIER
 */
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var PORT = 8080;
var PUBLIC_DIR = 'client';
var app = express();
var chessboard_1 = require("./chessboard");
var movements_1 = require("./movements");
var HttpServer = /** @class */ (function () {
    function HttpServer(port) {
        this.port = port;
    }
    HttpServer.prototype.onStart = function () {
        var _this = this;
        var chessboard = chessboard_1.createInitialChessboard();
        var app = express();
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(express.static(PUBLIC_DIR));
        app.set('view engine', 'ejs');
        app.listen(this.port, function () {
            console.log("Application lancée à l'adresse http://localhost:" + _this.port);
        });
        app.get('/', function (req, res) {
            res.render('index', { error: null });
        });
        app.get("/status.js", function (req, res) {
            res.end("var boardJSON= " + JSON.stringify(chessboard));
        });
        app.post("/", function (req, res) {
            var unparsedMove = req.body.move;
            var didPerfom = movements_1.processMove(chessboard, unparsedMove);
            var message = didPerfom ? "" : "Invalid movement!";
            res.render('index', { error: message });
        });
    };
    return HttpServer;
}());
var server = new HttpServer(PORT);
server.onStart();
