export default class ErrorRepository {
    constructor(id, text) {
        this.members = new Map();
        this.id = id;
        this.members.set(
            this.id,
            {id, text}
        );
    }

    translate(code) {
        if (this.members.has(code)) {
            return this.members.get(code).text;
        } else {
            return 'Unknown error';
        }
    }
}
