$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/uk/gov/harrow/resources/featurefile/harrow.feature");
formatter.feature({
  "line": 1,
  "name": "Harrow login  Test",
  "description": "As a user I want to navigate to login page",
  "id": "harrow-login--test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 33705968100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User Should navigate to Login page successfully",
  "description": "",
  "id": "harrow-login--test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I clcik on login Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should  navigate Login Page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 608311000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClcikOnLoginPage()"
});
formatter.result({
  "duration": 15526817300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldNavigateLoginPageSuccessfully()"
});
formatter.result({
  "duration": 20147225100,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: Proxy element for: DefaultElementLocator \u0027By.className: navbar-text myprofile_salutation\u0027 (tried for 10 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat uk.gov.harrow.utility.Utility.waitUntilElementToBeClickable(Utility.java:94)\r\n\tat uk.gov.harrow.pages.LoginPage.getWelcomeText(LoginPage.java:34)\r\n\tat uk.gov.harrow.cucumber.stepdefs.MyStepdefs.iShouldNavigateLoginPageSuccessfully(MyStepdefs.java:29)\r\n\tat ✽.Then I should  navigate Login Page successfully(src/test/java/uk/gov/harrow/resources/featurefile/harrow.feature:7)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".navbar\\-text\\ myprofile_salutation\"}\n  (Session info: chrome\u003d81.0.4044.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-59P8T20\u0027, ip: \u0027192.168.0.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:59651}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f4796347ee67ee5e5c3d7bf8b4297c85\n*** Element info: {Using\u003dclass name, value\u003dnavbar-text myprofile_salutation}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:670)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:666)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat uk.gov.harrow.utility.Utility.waitUntilElementToBeClickable(Utility.java:94)\r\n\tat uk.gov.harrow.pages.LoginPage.getWelcomeText(LoginPage.java:34)\r\n\tat uk.gov.harrow.cucumber.stepdefs.MyStepdefs.iShouldNavigateLoginPageSuccessfully(MyStepdefs.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3356477900,
  "status": "passed"
});
formatter.uri("src/test/java/uk/gov/harrow/resources/featurefile/service.feature");
formatter.feature({
  "line": 1,
  "name": "Services function",
  "description": "As a user i want to check the service on Harrow website",
  "id": "services-function",
  "keyword": "Feature"
});
formatter.before({
  "duration": 19027187400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to service page successfully",
  "description": "",
  "id": "services-function;user-should-navigate-to-service-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on services button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to service page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 1947700,
  "status": "passed"
});
formatter.match({
  "location": "ServiceDefs.iClickOnServicesButton()"
});
formatter.result({
  "duration": 475023500,
  "status": "passed"
});
formatter.match({
  "location": "ServiceDefs.iShouldNavigateToServicePageSuccessfully()"
});
formatter.result({
  "duration": 976600200,
  "status": "passed"
});
formatter.after({
  "duration": 852082100,
  "status": "passed"
});
formatter.before({
  "duration": 13944610800,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "verify text when user close Service page",
  "description": "",
  "id": "services-function;verify-text-when-user-close-service-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on service button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should navigate to service page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on close button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see \"SERVICES\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 423100,
  "status": "passed"
});
formatter.match({
  "location": "ServiceDefs.iClickOnServiceButton()"
});
formatter.result({
  "duration": 319753300,
  "status": "passed"
});
formatter.match({
  "location": "ServiceDefs.iShouldNavigateToServicePageSuccessfully()"
});
formatter.result({
  "duration": 830031900,
  "status": "passed"
});
formatter.match({
  "location": "ServiceDefs.iClickOnCloseButton()"
});
formatter.result({
  "duration": 223386800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SERVICES",
      "offset": 14
    }
  ],
  "location": "ServiceDefs.iShouldSeeText(String)"
});
formatter.result({
  "duration": 165543200,
  "status": "passed"
});
formatter.after({
  "duration": 928929100,
  "status": "passed"
});
});