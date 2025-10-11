class Event {
    constructor (id, name, date, description, adress){
        this._id = id;
        this._name = name;
        this.date = date;
        this.description = description;
        this._adress = adress;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get adress() {
        return this._adress;
    }

    set adress (newAdress){
        if (!newAdress || newAdress.trim().length <5) {
            throw new Error('Endereço do evento deve ter pelo menos 5 caracteres.');
        }
        this._adress = newAdress;
    }

    get name() {
        return this._name;
    }
    get fomattedDate(){
        return this.date ? new Date(this.date).toLocaleDateString('pt-BR'): null;
    }

    set name(newName) {
        if (!newName || newName.trim().toLowerCase().length <3) {
            throw new Error('Nome do evento deve ter pelo menos 3 caracteres.');
        }
        this._name = newName;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            date: this.formattedDate,
            description: this.description,
        }
    }
}

module.exports = Event;
