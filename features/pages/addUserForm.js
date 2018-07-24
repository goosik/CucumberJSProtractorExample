'use strict';
module.exports = {

    addUserForm: {
        self: $('[name="smartTableValidForm"]'),
        firstNameInput: $('[name="FirstName"]'),
        lastNameInput: $('[name="LastName"]'),
        userNameInput: $('[name="UserName"]'),
        passwordInput: $('[name="Password"]'),
        customerCheckbox: $('tbody > tr:nth-child(5) > td:nth-child(2)'),
        roleDropdown: $('[name="RoleId"]'),
        emailInput: $('[name="Email"]'),
        phoneInput: $('[name="Mobilephone"]'),
        saveBtn: $('.btn-success'),
        closeBtn: $('.btn-danger')
    },

    customerCheckbox: {
        companyAAA: $('[value="15"]'),
        companyBBB: $('[value="16"]')
    },

    roleDropdown: {
        admin: $('[value="2"]'),
        customer: $('[value="1"]'),
        salesTeam: $('[value="0"]')
    },

    fillForm: function (data) {
        let form = this.addUserForm;
        this.clearAllFields();
        form.firstNameInput.sendKeys(data[0][0]);
        form.lastNameInput.sendKeys(data[0][1]);
        form.userNameInput.sendKeys(data[0][2]);
        form.passwordInput.sendKeys(data[0][3]);
        form.emailInput.sendKeys(data[0][6]);
        form.phoneInput.sendKeys(data[0][7]);
        this.chooseCompany(data[0][4]);
        this.selectRole(data[0][5]);
    },

    chooseCompany: function (company) {
        let checkbox = this.customerCheckbox;
        if (company == "Company AAA") {
            checkbox.companyAAA.click();
        }
        if (company == "Company BBB") {
            checkbox.companyBBB.click();
        }
    },

    selectRole: function (role) {
        let select = this.roleDropdown;
        let form = this.addUserForm;
        form.roleDropdown.click();
        if (role == "Admin") {
            select.admin.click();
        } else if (role = "Customer") {
            select.customer.click();
        } else if (role = "Sales Team") {
            select.salesTeam.click();
        }
    },
    submitForm: function () {
        let form = this.addUserForm;
        form.saveBtn.click();
    },
    editName: function (name) {
        let form = this.addUserForm;
        form.firstNameInput.clear();
        form.firstNameInput.sendKeys(name);
    },
    clearAllFields(){
        let form = this.addUserForm;
        form.firstNameInput.clear();
        form.lastNameInput.clear();
        form.userNameInput.clear();
        form.passwordInput.clear();
        form.emailInput.clear();
        form.phoneInput.clear();
    }
};
