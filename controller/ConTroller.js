const print = {
    roll:(req, res) => {
        res.render('index');
    },
    about:(req, res) => {
        res.render('about');
    },
    cycle:(req, res) => {
        res.render('cycle');
    },
    news:(req, res) => {
        res.render('news');
    },
    contact:(req, res) => {
        res.render('contact');
    }


};

module.exports = print;