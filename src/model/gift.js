/**
 * Created by levy on 2018/7/18.
 */
class Gift{
    constructor(id, title, notes, count, category, status, createTime){
        this.id = id;
        this.title = title;
        this.notes = notes;
        this.count =count;
        this.category = category;
        this.status = status;
        this.createTime = createTime;
    }
}

module.exports = Gift;