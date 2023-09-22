"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
// import handlebars from 'express-handlebars'
const handlebars = require('express-handlebars');
const body_parser_1 = __importDefault(require("body-parser"));
const method_override_1 = __importDefault(require("method-override"));
const connect_flash_1 = __importDefault(require("connect-flash"));
const routes_1 = __importDefault(require("./routes"));
const db_1 = __importDefault(require("./config/db"));
const express_session_1 = __importDefault(require("express-session"));
//Connect to DB
db_1.default.connect();
const app = (0, express_1.default)();
const port = 3000;
// Use Session 
app.use((0, express_session_1.default)({
    cookie: { maxAge: 60000 },
    secret: 'woot',
    resave: false,
    saveUninitialized: false
}));
//BodyParse to use req.body in controller
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Connect-flash
app.use((0, connect_flash_1.default)());
//Import method override to override GET in hbs and use PUT PATCH or DELETE
app.use((0, method_override_1.default)('_method'));
//Path file to public-> .../
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
//Http logger
app.use((0, morgan_1.default)('combined'));
// Template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    //Helpers custom funtion to @index + sum in handlebars 
    helpers: {
        sum: (a, b) => a + b,
    }
}));
app.set('view engine', 'hbs');
app.set('views', path_1.default.join(__dirname, 'resources', 'views'));
//Routes init
(0, routes_1.default)(app);
//App listening port 3000
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
