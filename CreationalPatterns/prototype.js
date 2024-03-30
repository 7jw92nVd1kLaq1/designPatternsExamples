// Abstract class for a game NPC
class NPC {
    constructor() {
        if (this.constructor === NPC) {
            throw new Error("Cannot instantiate abstract class!");
        }
    }
    clone() {
        throw new Error("This method must be overwritten!");
    }
}

// Concrete class for a game NPC with a lot of properties, including textures
class Orc extends NPC {
    #name;
    #health;
    #attack;
    #defense;
    #textures;
    constructor(name, health, attack, defense, textures) {
        super();
        this.#name = name;
        this.#health = health;
        this.#attack = attack;
        this.#defense = defense;
        if (Array.isArray(textures))
            this.loadTextures(textures);
        else
            this.#textures = textures;
    }
    processTextures(textures) {
        console.log("Processing textures...");
        return textures;
    }
    loadTextures(textures) {
        console.log("Loading textures...");
        this.#textures = this.processTextures(textures);
    }
    clone() {
        const clone = structuredClone(this);
        clone.#health = 100;
        return clone;
    }
}

// Usage
// Create an Orc NPC
const orc = new Orc("Orc", 100, 20, 10, ["orc.png", "orc.3d"]);
const orc2 = orc.clone();