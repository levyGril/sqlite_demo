/**
 * Created by levy on 2018/7/18.
 */
/* Load Car Data Access Object */
const GiftDao = require('../dao/giftDao');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/* Load Car entity */
const Gift = require('../model/gift');

/**
 * Car Controller
 */
class GiftController {

    constructor() {
        this.giftDao = new GiftDao();
        this.common = new ControllerCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params req, res
     * @return entity
     */
    findById(req, res) {
        let id = req.params.id;

        this.giftDao.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll(res) {
        this.giftDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll(res) {

        this.giftDao.countAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Updates the given entity in the database
     * @params req, res
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(req, res) {
        let gift = new Gift();
        gift.id = req.params.id;
        return this.giftDao.update(gift)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Creates the given entity in the database
     * @params req, res
     * returns database insertion status
     */
    create(req, res) {
        let gift = new Gift();
        if (req.body.id) {
            gift.id = req.body.id;
        }
        gift.title = req.body.title;
        gift.notes = req.body.notes;
        gift.count = req.body.count;
        gift.category = req.body.category;
        gift.status = req.body.status;

        if (req.body.id) {
            return this.giftDao.createWithId(gift)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));
        }
        else {
            return this.giftDao.create(gift)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));
        }

    };

    /**
     * Deletes an entity using its Id / Primary Key
     * @params req, res
     * returns database deletion status
     */
    deleteById(req, res) {
        let id = req.params.id;

        this.giftDao.deleteById(id)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @params req, res
     * @return
     */
    exists(req, res) {
        let id = req.params.id;

        this.giftDao.exists(id)
            .then(this.common.existsSuccess(res))
            .catch(this.common.findError(res));
    };
}

module.exports = GiftController;