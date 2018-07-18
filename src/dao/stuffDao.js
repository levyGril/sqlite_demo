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
        let sqlRequest = "SELECT id, name, tel, birth, gift_title, gift_id,gift_year,create_time FROM stuff WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Stuff(row.id, row.name, row.tel, row.birth, row.gift_title, row.gift_id,row.gift_year,row.create_time));
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
                stuffs.push(new Stuff(row.id, row.name, row.tel, row.birth, row.gift_title, row.gift_id,row.gift_year,row.create_time));
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
           /** "name=$name, " +
            "tel=$tel, " +
            "birth=$birth, " +*/
            "gift_title=$giftTitle, " +
            "gift_id=$giftId " +
            "WHERE id=$id";

        let sqlParams = {
            //$name: Stuff.name,
            //$tel: Stuff.tel,
           // $birth: Stuff.birth,
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
        let sqlRequest = "INSERT into stuff (name, tel, birth, gift_title, gift_id,gift_year) " +
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
        let sqlRequest = "INSERT into stuff (id, name, tel, birth, gift_title, gift_id,gift_year) " +
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

    existByName(Stuff) {
        let sqlRequest = "SELECT (count(*) > 0) as found FROM stuff " +
            " WHERE" +
            " name=$name " +
            " and tel=$tel " +
            " and birth=$birth ";
             if(Stuff.giftYear!=null||Stuff.giftYear!="null"||Stuff.giftYear!=undefined){
                 sqlRequest += " and gift_year=$giftYear";
             }
        console.log(Stuff.giftYear);
        console.log(Stuff.giftYear != null);
        let sqlParams = {
            $name: Stuff.name,
            $tel: Stuff.tel,
            $birth: Stuff.birth,
            $giftYear:Stuff.giftYear
        };
        console.log(sqlRequest);
        console.log(sqlParams);
        return this.common.run(sqlRequest, sqlParams);
    };

    findByName(Stuff) {
        let sqlRequest = "SELECT id, name, tel, birth, gift_title, gift_id,gift_year,create_time FROM stuff  "+
        " WHERE  " +
        " name = '"+Stuff.name+"'";
       // "and tel=$tel " +
       // "and birth=$birth ";
       //  if(Stuff.giftYear!=null||Stuff.giftYear!="null"||Stuff.giftYear!=undefined){
       //      sqlRequest += " and gift_year=$giftYear";
       //  }
        let sqlParams = {
           // $name: Stuff.name
            // $tel: Stuff.tel,
            // $birth: Stuff.birth,
            // $giftYear:Stuff.giftYear
        };
        return this.common.findAll(sqlRequest).then(rows => {
            let stuffs = [];
            for (const row of rows) {
                stuffs.push(new Stuff(row.id, row.name, row.tel, row.birth, row.gift_title, row.gift_id,row.gift_year,row.create_time));
            }
            return stuffs;
        });
    };
}

module.exports = StuffDao;