/**
 * Created by levy on 2018/7/18.
 */
/**
 * Created by levy on 2018/7/18.
 */
/* Load Car entity */
const Gift = require('../model/gift');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Car Data Access Object
 */
class GiftDao {

    constructor() {
        this.common = new daoCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findById(id) {
        let sqlRequest = "SELECT id, title, notes, count, category, status,createTime FROM gift_info WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Gift(row.id, row.title, row.notes, row.count, row.category, row.status,row.createTime));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        let sqlRequest = "SELECT * FROM gift_info";
        return this.common.findAll(sqlRequest).then(rows => {
            let gifts = [];
            for (const row of rows) {
                gifts.push(new Gift(row.id, row.title, row.notes, row.count, row.category, row.status,row.createTime));
            }
            return gifts;
        });
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll() {
        let sqlRequest = "SELECT COUNT(*) AS count FROM gift_info";
        return this.common.findOne(sqlRequest);
    };

    /**
     * Updates the given entity in the database
     * @params Stuff
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(Gift) {
        let sqlRequest = "UPDATE gift_info SET " +
            "count=count-1, " +
            "WHERE id=$id";
        let sqlParams = {
            $id: Gift.id
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Creates the given entity in the database
     * @params Car
     * returns database insertion status
     */
    create(Gift) {
        let sqlRequest = "INSERT into gift_info (title, notes, count, category, status) " +
            "VALUES ($title, $notes, $count, $category, $status)";
        let sqlParams = {
            $title: Gift.title,
            $notes: Gift.notes,
            $count: Gift.count,
            $category: Gift.category,
            $status: Gift.status
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Creates the given entity with a provided id in the database
     * @params Car
     * returns database insertion status
     */
    createWithId(Gift) {
        let sqlRequest = "INSERT into gift_info (id, title, notes, count, category, status) " +
            "VALUES ($id, $title, $notes, $count, $category, $status)";
        let sqlParams = {
            $id: Gift.id,
            $title: Gift.title,
            $notes: Gift.notes,
            $count: Gift.count,
            $category: Gift.category,
            $status: Gift.status
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Deletes an entity using its Id / Primary Key
     * @params id
     * returns database deletion status
     */
    deleteById(id) {
        let sqlRequest = "DELETE FROM gift_info WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @params id
     * returns database entry existence status (true/false)
     */
    exists(id) {
        let sqlRequest = "SELECT (count(*) > 0) as found FROM gift_info WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.run(sqlRequest, sqlParams);
    };
}

module.exports = GiftDao;