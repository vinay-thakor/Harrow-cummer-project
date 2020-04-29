package uk.gov.harrow.cucumber.stepdefs;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import uk.gov.harrow.pages.HomePage;
import uk.gov.harrow.pages.ServicePage;

public class ServiceDefs {
    @When("^I click on services button$")
    public void iClickOnServicesButton() {
        new HomePage().clickOnServicesBtn();
    }

    @Then("^I should navigate to service page successfully$")
    public void iShouldNavigateToServicePageSuccessfully() {
        Assert.assertEquals(new ServicePage().getAdultSocialCareText(), "Adult Social Care");
    }

    @When("^I click on service button$")
    public void iClickOnServiceButton() {
        new HomePage().clickOnServicesBtn();

    }

    @And("^I click on close button$")
    public void iClickOnCloseButton() {
        new ServicePage().clickOnCloseButton();
    }

    @Then("^I should see \"([^\"]*)\" text$")
    public void iShouldSeeText(String sermsg) {
        Assert.assertEquals(new HomePage().getServicesText(), sermsg);
    }
}
