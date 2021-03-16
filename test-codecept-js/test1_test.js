Feature('');

//to run tests please write below commands
///npm run codeceptjs


Scenario('adding new user', ({ I }) => {
    I.amOnPage('http://localhost:3000/testUsers');
    I.see('ДОБАВИТЬ ПОЛЬЗОВАТЕЛЯ')
    I.click('//html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/button[1]')
    I.fillField('//html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]', 'Test');
    I.fillField('//html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/input[1]', 'Test');
    I.click('//html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/span[2]/span[1]/span[1]/input[1]')
    I.wait(1)
    I.click('//html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]/span[1]')
    I.wait(1)
    I.see('Test')
});

Scenario('choose HR', ({ I }) => {
    I.amOnPage('http://localhost:3000/testUsers');
    I.see('Human resource')
    I.click('//html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/span[1]/span[1]/input[1]\n')
    I.wait(1)
    I.see('accountant')
});
