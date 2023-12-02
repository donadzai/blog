const displaySortIcon = (req, res, next) => {
    res.locals.sort = {
        isSort: false,
        action: 'default',
        column: req.query.column,
    };

    if (req.query.sort) {
        Object.assign(res.locals.sort, {
            isSort: true,
            action: req.query.action,
            column: req.query.column,
        });
    }

    next();
};

module.exports = displaySortIcon;
