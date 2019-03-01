module.exports = {
    new: function(req, res) {
        res.render("guest/new");
    },
    create: function(req, res) {
        res.redirect("/");
    },
    show: function (req,res){
        res.render("guest/show");
    },
    edit: function(req, res) {
        res.render("guest/edit");
    },
    update: function(req, res) {
        res.redirect("/");
    },
    delete: function(req, res) {
    res.redirect("/");
}
};

