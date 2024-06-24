const { Builder, By} = require('selenium-webdriver');
const driver = new Builder().forBrowser('chrome').build();

driver.get("https://www.python.org/");

driver.findElement(By.id('id-search-field')).sendKeys('mustafa');

driver.findElement(By.id('submit')).click();

// await driver.findElement(By.id('password')).sendKeys('password');

// setTimeout(() => {
//     if(driver.findElement(By.id('submit')).click()){
//         console.log("Find it lol");
//     }else{
//         console.log("Didn't find them...")
//     }
// }, 3000);

// setTimeout(() => {
//     console.log("Waiting for a while");
// }, 2000);

setTimeout(() => {
    try{
        eleText = driver.findElement(By.id('mustafa')).getText();
    }
    catch(e){
        console.log("Element not found");
    }
}, 1000)



  

setTimeout(() => {
    driver.quit();
}, 3000);
 