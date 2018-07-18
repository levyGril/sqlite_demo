/* Load modules */
let sqlite3 = require('sqlite3').verbose();

/*
 * Database configuration
 */

/* Load database file (Creates file if not exists) */
let db = new sqlite3.Database('./sqlite.db');

/* Init car and driver tables if they don't exist */
let init = function () {
    db.run("CREATE TABLE if not exists car (" +
        "id INTEGER PRIMARY KEY AUTOINCREMENT," +
        " maker TEXT," +
        " model TEXT," +
        " year INT," +
        " driver INT" +
        ")");

    db.run("CREATE TABLE if not exists driver (" +
        "id INTEGER PRIMARY KEY AUTOINCREMENT," +
        " firstName TEXT," +
        " lastName TEXT," +
        " car INT" +
        ")");

    db.run("CREATE TABLE IF NOT EXISTS stuff (" +
        "id          INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "name        varchar(100) , " +
        "tel         varchar(11) , " +
        "birth       varchar(50), " +
        "gift_title  varchar(200), " +
        "gift_id     int(5), " +
        "gift_year   varchar(50), " +
        "create_time  datetime default (datetime('now', 'localtime')) " +
        //"unique（name,birth,create_time) " +
        ") ");

    db.run("CREATE TABLE IF NOT EXISTS gift_info (" +
        "id           INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "title        varchar(255) ," +
        "notes        varchar(255) ," +
        "count        int(5)  ," +
        "category     int(5)  ," +
        "status       int(2) ," +
        "create_time  datetime default (datetime('now', 'localtime'))" +
        ") ");

};

module.exports = {
    init: init,
    db: db
};

