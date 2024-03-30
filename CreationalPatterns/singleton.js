class Document {
    static #lock = null;
    static #content = {
        title: "Document",
        body: "This is a document",
        footer: "End of document"
    };

    constructor() {
        throw new Error("Cannot instantiate this class!");
    }

    static acquireLock(name) {
        if (Document.#isLockExpired()) {
            Document.releaseLock();
        }
        if (!Document.isLocked()) {
            Document.#lock = {
                name: name,
                timestamp: Date.now()
            };
        } else {
            throw new Error("Document is already locked!");
        }
    }

    static releaseLock() {
        Document.#lock = null;
    }

    static isLocked() {
        return Boolean(Document.#lock);
    }

    static #isLockExpired() {
        return Document.#lock && (Date.now() - Document.#lock.timestamp > 5000);
    }

    static modifyContent(key, content) {
        if (!Document.isLocked() || Document.#lock.name !== key)
            throw new Error("Document is locked or you do not hold the lock!");
        Document.#content = content;
        Document.releaseLock();
    }

    static getContent() {
        return Document.#content;
    }
}

// Usage
const key = 'John Doe';
Document.acquireLock(key);
console.log(Document.isLocked()); // true
console.log(Document.getContent());
Document.modifyContent(key, {
    title: "New Document",
    body: "This is a new document",
    footer: "End of new document"
});
console.log(Document.getContent());