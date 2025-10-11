class Volunteer {
    constructor(id, First_name, Last_name, email, CPF, password, phone) {
        this.id = id;
        this.First_name = First_name;
        this.Last_name = Last_name;
        this.email = email;
        this._password = password;
        this._CPF = CPF;
        this._phone = phone;
    }

get CPF() {
    return this._CPF;
}

set CPF(newCPF) {
    if (!/^\d{11}$/.test(newCPF)) {
        throw new Error('CPF deve ter exatamente 11 dígitos numéricos.');
    }
    this._CPF = newCPF;
}


get phone() {
    return this._phone;
}

set phone(newPhone) {
    if (!/^\d{10,11}$/.test(newPhone)) {
        throw new Error('Telefone deve ter 10 ou 11 dígitos numéricos.');
    }
    this._phone = newPhone;
}

get password() {
    return this._password;
}

set password(newPassword) {
    if (newPassword.length < 6) {
        throw new Error('A senha deve ter pelo menos 6 caracteres.');
    }
    this._password = newPassword;
}
}

module.exports = Volunteer;
