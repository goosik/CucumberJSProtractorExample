const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
let addUserForm = require('../pages/addUserForm');
let table = require('../pages/tablePage');

const { Given, When, Then } = require('cucumber');

  Given('I open page {string}', function (url) {
   browser.get(url);
   return browser.waitForAngular(); 
  });

  When('I can create user with following data:', function (dataTable) {
    browser.waitForAngular(); 
    table.tablePage.userTable.isPresent();
    table.tablePage.addButton.click();
    addUserForm.fillForm(dataTable.rows());
    addUserForm.submitForm();
  });

  Then('I can see {string} in the board', function (name, callback) {
    expect(table.seeTextInTable(name).isPresent()).to.eventually.be.equal(true)
    .and.notify(callback);
  });

  When('I can edit {string} to:', function (oldName, dataTable) {
    table.findEditUser(oldName);
    addUserForm.editName(dataTable.rows()[0][0]);
    addUserForm.submitForm();
  });

  Then('I can delete {string} from the board', function (name) {
    table.findDelete(name);
    table.acceptModal();
  });

  Then('I can not see {string} in the board', function (name, callback) {
    browser.waitForAngular();
    expect(table.seeTextInTable(name).isPresent()).to.eventually.be.equal(false)
    .and.notify(callback);
  });
