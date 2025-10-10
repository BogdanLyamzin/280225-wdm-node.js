class TypeError extends Error {
    constructor(message, detailsMessage) {
        super(message);
        this.detailsMessage = detailsMessage;
    }
}

export {
    TypeError
}