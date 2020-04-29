package uk.gov.harrow.cucumber.stepdefs;

import com.cucumber.listener.Reporter;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import uk.gov.harrow.pages.HomePage;
import uk.gov.harrow.pages.LoginPage;

public class MyStepdefs {
    @Given("^I am on Home Page$")
    public void iAmOnHomePage() {
        Reporter.addStepLog("I am on Home Page :");


    }

    @When("^I clcik on login Page$")
    public void iClcikOnLoginPage() {
        new HomePage().clickOnLoginOrRegisterLink();


    }

    @Then("^I should  navigate Login Page successfully$")
    public void iShouldNavigateLoginPageSuccessfully() {
        Assert.assertEquals(new LoginPage().getWelcomeText(), "Welcome Guest!");
    }

    @When("^I clcik on login link$")
    public void iClcikOnLoginLink() {
    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email) {
        new LoginPage().enterEmailToField(email);

    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new LoginPage().enterPasswordToField(password);

    }

    @And("^I clcik on login button$")
    public void iClcikOnLoginButton() {
        new LoginPage().clickOnLoginBtn();
    }

    @Then("^I should see the error message \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessage(String errMsg)  {
        Assert.assertEquals(new LoginPage().getErrorMessageFrom(),errMsg);

    }


}
