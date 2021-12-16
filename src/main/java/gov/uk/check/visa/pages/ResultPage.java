package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class ResultPage extends Utility {
    public ResultPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//div[@id='result-info']//h2[@class='gem-c-heading gem-c-heading--font-size-27 govuk-!-margin-bottom-6']")
    WebElement result;
    public String getResultMsg(){
        String resultMsg = getTextFromElement(result);
        return resultMsg;
    }
    public void confirmResultMessage(String expectedMessage) {
      Assert.assertTrue(expectedMessage.equals(getResultMsg()));
    }
}