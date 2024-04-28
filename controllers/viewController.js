exports.getloginForm = (req, res) => {
    res.status(200).render('login', {
      title: 'Log into the account',
    });
};
exports.ForgotPassword = (req, res) => {
    res.status(200).render('forgotPassword', {
      title: 'ForgotPassword',
    });
};