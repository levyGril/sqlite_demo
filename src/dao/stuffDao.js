/**
 * Created by levy on 2018/7/18.
 */
/* Load Car entity */
const Stuff = require('../model/stuff');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Car Data Access Object
 */
class StuffDao {

    constructor() {
        this.common = new daoCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findById(id) {
        let sqlRequest = "SELECT id, name, tel, birth, giftTitle, giftId,giftYear,createTime FROM stuff WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Stuff(row.id, row.name, row.tel, row.birth, row.giftTitle, row.giftId,row.giftYear,row.createTime));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        let sqlRequest = "SELECT * FROM stuff";
        return this.common.findAll(sqlRequest).then(rows => {
            let stuffs = [];
            for (const row of rows) {
                stuffs.push(new Stuff(row.id, row.name, row.tel, row.birth, row.giftTitle, row.giftId,row.giftYear,row.createTime));
            }
            return stuffs;
        });
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll() {
        let sqlRequest = "SELECT COUNT(*) AS count FROM stuff";
        return this.common.findOne(sqlRequest);
    };

    /**
     * Updates the given entity in the database
     * @params Stuff
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(Stuff) {
        let sqlRequest = "UPDATE stuff SET " +
            "name=name, " +
            "tel=tel, " +
            "birth=birth, " +
            "giftTitle=giftTitle " +
            "giftId=giftId " +
            "WHERE id=$id";

        let sqlParams = {
            $name: Stuff.name,
            $tel: Stuff.tel,
            $birth: Stuff.birth,
            $giftTitle: Stuff.giftTitle,
            $giftId: Stuff.giftId,
            $id: Stuff.id
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Creates the given entity in the database
     * @params Car
     * returns database insertion status
     */
    create(Stuff) {
        let sqlRequest = "INSERT into stuff (name, tel, birth, giftTitle, giftId,giftYear) " +
            "VALUES ($name, $tel, $birth, $giftTitle, $giftId,$giftYear)";
        let sqlParams = {
            $name: Stuff.name,
            $tel: Stuff.tel,
            $birth: Stuff.birth,
            $giftTitle: Stuff.giftTitle,
            $giftId: Stuff.giftId,
            $giftYear: Stuff.giftYear
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Creates the given entity with a provided id in the database
     * @params Car
     * returns database insertion status
     */
    createWithId(Stuff) {
        let sqlRequest = "INSERT into stuff (id, name, tel, birth, giftTitle, giftId,giftYear) " +
            "VALUES ($id, $name, $tel, $birth, $giftTitle, $giftId,$giftYear)";
        let sqlParams = {
            $id: Stuff.id,
            $name: Stuff.name,
            $tel: Stuff.tel,
            $birth: Stuff.birth,
            $giftTitle: Stuff.giftTitle,
            $giftId: Stuff.giftId,
            $giftYear: Stuff.giftYear
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Deletes an entity using its Id / Primary Key
     * @params id
     * returns database deletion status
     */
    deleteById(id) {
        let sqlRequest = "DELETE FROM stuff WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @params id
     * returns database entry existence status (true/false)
     */
    exists(id) {
        let sqlRequest = "SELECT (count(*) > 0) as found FROM stuff WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.run(sqlRequest, sqlParams);
    };
}

module.exports = StuffDao;