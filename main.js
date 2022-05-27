require('dotenv').config();
const express = require('express');
const app = express();
const { engine } = require('express-handlebars');

app.use(express.static('static'));
app.disable('x-powered-by');
app.use((req, res, next) => {
    res.set('server', 'fraudb');
    next();
});
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => res.render('home', {title: 'Homepage', route: ''}));

app.get('/what-it-is', (req, res) => res.render('what-it-is', {title: 'What it is', route: 'what-it-is'}));

app.get('/how-it-works', (req, res) => res.render('how-it-works', {title: 'How it works', route: 'how-it-works'}));

app.get('/membership', (req, res) => res.render('membership', {title: 'Membership', route: 'membership'}));

app.get('/contact-us', (req, res) => res.render('contact-us', {title: 'Contact us', route: 'contact-us'}));

app.listen(process.env.HTTP_PORT || 8080, () => {
    console.log('FrauDB | Listening on HTTP port ' + (process.env.HTTP_PORT || 8080));
});