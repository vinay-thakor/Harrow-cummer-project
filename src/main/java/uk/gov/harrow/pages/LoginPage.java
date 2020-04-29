package uk.gov.harrow.pages;

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.gov.harrow.utility.Utility;

public class LoginPage extends Utility {
    private static Logger log = LogManager.getLogger(LoginPage.class.getName());


    //@FindBy(xpath = "//li[@class='navbar-text myprofile_salutation']")
    @FindBy(className = "navbar-text myprofile_salutation")
    WebElement _welcomeText;

    @FindBy(id = "username-input")
    WebElement _emailField;

    @FindBy(id = "password-input")
    WebElement _passwordField;

    @FindBy(id = "submitBtnSignIn")
    WebElement _loginButton;

    @FindBy(id = "password.errors")
    WebElement _errorMessage;




    public String getWelcomeText() {
        waitUntilElementToBeClickable(_welcomeText,10);
        Reporter.addStepLog("Get Welcome Guest text: " + _welcomeText.toString());
        log.info("Get Welcome Guest text: " + _welcomeText.toString());
        return getTextFromElement(_welcomeText);
    }


    public void enterEmailToField(String email) {
        waitUntilElementToBeClickable(_emailField,10);
        Reporter.addStepLog("Enter email : " + email + "in email field " + _emailField.toString() + "<br>");
        sendTextToElement(_emailField, email);
        log.info("Enter email : " + email + "in email field " + _emailField.toString());

    }

    public void enterPasswordToField(String passwrd) {
        waitUntilElementToBeClickable(_passwordField,10);
        Reporter.addStepLog("Enter email : " + passwrd + "in password field " + _passwordField.toString() + "<br>");
        sendTextToElement(_passwordField, passwrd);
        log.info("Enter email : " + passwrd + "in email field " + _passwordField.toString());

    }

    public void clickOnLoginBtn() {
        waitUntilElementToBeClickable(_loginButton,10);
        Reporter.addStepLog("Clicking on login Button : " + _loginButton.toString() + "<br");
        clickOnElement(_loginButton);
        log.info("Clicking on login Button : " + _loginButton.toString());


    }

    public String getErrorMessageFrom() {
        waitUntilElementToBeClickable(_errorMessage,10);
        Reporter.addStepLog(" Get Invalid Username/Password supplied text: "+_errorMessage.toString());
        log.info(" Get Invalid Username/Password supplied text: "+_errorMessage.toString());
        return getTextFromElement(_errorMessage);
    }

}