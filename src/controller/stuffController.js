/**
 * Created by levy on 2018/7/18.
 */
/* Load Car Data Access Object */
const StuffDao = require('../dao/stuffDao');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/* Load Car entity */
const Stuff = require('../model/stuff');

/**
 * Car Controller
 */
class StuffController {

    constructor() {
        this.stuffDao = new StuffDao();
        this.common = new ControllerCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params req, res
     * @return entity
     */
    findById(req, res) {
        let stuff = new Stuff();
        if (req.body.id) {
            stuff.id = req.body.id;
        }
        stuff.name = req.body.name;
        stuff.tel= req.body.tel;
        stuff.giftYear = req.body.giftYear;

        this.stuffDao.findById(stuff)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll(res) {
        this.stuffDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll(res) {

        this.stuffDao.countAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Updates the given entity in the database
     * @params req, res
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(req, res) {
        let stuff = new Stuff();
       // stuff.id = req.body.id;
        stuff.name = req.body.name;
        stuff.tel= req.body.tel;
        stuff.giftYear= req.body.giftYear;
        stuff.giftTitle= req.body.giftTitle;
        stuff.giftId= req.body.giftId;

        return this.stuffDao.update(stuff)
            .then(this.common.findSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Creates the given entity in the database
     * @params req, res
     * returns database insertion status
     */
    create(req, res) {
        let stuff = new Stuff();
        // if (req.body.id) {
        //     stuff.id = req.body.id;
        // }
        stuff.name = req.body.name;
        stuff.tel= req.body.tel;
        stuff.birth= req.body.birth;
        stuff.giftTitle= req.body.giftTitle;
        stuff.giftId= req.body.giftId;
        stuff.giftYear = req.body.giftYear;
        return this.stuffDao.create(stuff)
            .then(this.common.findSuccess(res))
            .catch(this.common.serverError(res));
        // if (req.body.id) {
        //     return this.stuffDao.createWithId(stuff)
        //         .then(this.common.editSuccess(res))
        //         .catch(this.common.serverError(res));
        // }
        // else {
        //     return this.stuffDao.create(stuff)
        //         .then(this.common.editSuccess(res))
        //         .catch(this.common.serverError(res));
        // }

    };

    /**
     * Deletes an entity using its Id / Primary Key
     * @params req, res
     * returns database deletion status
     */
    deleteById(req, res) {
        let stuff = new Stuff();
        stuff.name = req.body.name;
        stuff.tel= req.body.tel;
        stuff.giftYear = req.body.giftYear;

        this.stuffDao.deleteById(stuff)
            .then(this.common.findSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @params req, res
     * @return
     */
    exists(req, res) {
        let stuff = new Stuff();
        stuff.name = req.body.name;
        stuff.tel= req.body.tel;
        stuff.giftYear = req.body.giftYear;
        this.stuffDao.exists(stuff)
            .then(this.common.existsSuccess(res))
            .catch(this.common.findError(res));
    };

    existByName(req, res) {
        let stuff = new Stuff();
        stuff.name = req.body.name;
        stuff.tel= req.body.tel;
        stuff.birth= req.body.birth;
        stuff.giftYear = req.body.giftYear;
        return this.stuffDao.existByName(stuff)
            .then(this.common.existsSuccess(res))
            .catch(this.common.findError(res));

    };

    findByName(req, res) {
        let stuff = new Stuff();

        stuff.name = req.body.name;
        stuff.tel= req.body.tel;
        stuff.birth= req.body.birth;
        stuff.giftYear = req.body.giftYear;

        return this.stuffDao.findByName(stuff)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));

    };

}

module.exports = StuffController;