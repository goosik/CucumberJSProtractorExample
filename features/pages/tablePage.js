'use strict';
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
module.exports = {

  tablePage: {
    userTable: $('tbody'),
    addButton: $('button[type="add"]'),
    editBtn: $('button[type="edit"]'),
    tableRows: element.all(by.repeater('dataRow in displayedCollection'))
  },

  confirmationModal: {
    self: $('.modal ng-scope'),
    agreeBtn: element(by.buttonText('OK')),
    cancelBtn: element(by.xpath('//*[contains(text(),"Cancel")]'))
  },

  seeTextInTable: function (text) {
    let name = text.split(' ')[0];
    let lastName = text.split(' ')[1];
    return element(by.xpath('//*[text()="' + name + '"]/following-sibling::*[text()="' + lastName + '"]'));
  },

  findEditUser: function (currentName) {
    let name = currentName.split(' ')[0];
    let last = currentName.split(' ')[1];
    let editBtn = element(by.xpath('//*[text()="' + name + '"]/following-sibling::*[text()="' + last + '"]/following-sibling::*//*[@type="edit"]'));
    editBtn.click();
  },

  findDelete: function (currentName) {
    let name = currentName.split(' ')[0];
    let last = currentName.split(' ')[1];
    let deleteBtn = element(by.xpath('//*[text()="' + name + '"]/following-sibling::*[text()="' + last + '"]/following-sibling::*//*[@ng-click="delUser()"]'));
    deleteBtn.click();
  },

  acceptModal: function () {
    this.confirmationModal.self.isPresent();
    this.confirmationModal.agreeBtn.click();
  }
};