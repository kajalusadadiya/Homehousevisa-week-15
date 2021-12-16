$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Visa checks",
  "description": "",
  "id": "visa-checks",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4833922799,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "An Australian coming to the UK for Tourism.",
  "description": "",
  "id": "visa-checks;an-australian-coming-to-the-uk-for-tourism.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    },
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on the Check UK visa website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I start visa check",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select a nationality of \u0027australia\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select reason \u0027tourism\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I will be informed \u0027You will not need a visa to come to the UK\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "MyHomeOfficeSteps.iAmOnTheCheckUKVisaWebsite()"
});
formatter.result({
  "duration": 126108400,
  "status": "passed"
});
formatter.match({
  "location": "MyHomeOfficeSteps.iStartVisaCheck()"
});
formatter.result({
  "duration": 238863200,
  "status": "passed"
});
formatter.match({
  "location": "MyHomeOfficeSteps.iSelectANationalityOfAustralia()"
});
formatter.result({
  "duration": 6773300,
  "error_message": "java.lang.IllegalArgumentException: Locator must be set\r\n\tat org.openqa.selenium.internal.Require.nonNull(Require.java:56)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:373)\r\n\tat gov.uk.check.visa.utility.Utility.selectByValueFromDropDown(Utility.java:155)\r\n\tat gov.uk.check.visa.pages.SelectNationalityPage.selectNationality(SelectNationalityPage.java:26)\r\n\tat gov.uk.check.visa.cucumber.steps.MyHomeOfficeSteps.iSelectANationalityOfAustralia(MyHomeOfficeSteps.java:73)\r\n\tat ✽.And I select a nationality of \u0027australia\u0027(src/test/java/resources/featurefile/login.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyHomeOfficeSteps.iClickOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyHomeOfficeSteps.iSelectReasonTourism()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyHomeOfficeSteps.iClickOnContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyHomeOfficeSteps.iWillBeInformedYouWillNotNeedAVisaToComeToTheUK()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 229092500,
  "status": "passed"
});
formatter.before({
  "duration": 1858670599,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "A Chilean coming to the UK for Work and plans on staying for longer than 6 months.",
  "description": "",
  "id": "visa-checks;a-chilean-coming-to-the-uk-for-work-and-plans-on-staying-for-longer-than-6-months.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Smoke"
    },
    {
      "line": 15,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on the Check UK visa website",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I start visa check",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I select a nationality of \u0027chile\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select reason \u0027Work, academic visit or business\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I state I am intending to stay for \u0027more\u0027 than 6 months",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I state I have planning to work \u0027health\u0027 types of job",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I will be informed \u0027You need a visa to work in health and care\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "MyHomeOfficeSteps.iAmOnTheCheckUKVisaWebsite()"
});
formatter.result({
  "duration": 51999,
  "status": "passed"
});
formatter.match({
  "location": "MyHomeOfficeSteps.iStartVisaCheck()"
});
formatter.result({
  "duration": 217746700,
  "status": "passed"
});
formatter.match({
  "location": "MyHomeOfficeSteps.iSelectANationalityOfChile()"
});
formatter.result({
  "duration": 6730400,
  "error_message": "java.lang.IllegalArgumentException: Locator must be set\r\n\tat org.openqa.selenium.internal.Require.nonNull(Require.java:56)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:373)\r\n\tat gov.uk.check.visa.utility.Utility.selectByValueFromDropDown(Utility.java:155)\r\n\tat gov.uk.check.visa.pages.SelectNationalityPage.selectNationality(SelectNationalityPage.java:26)\r\n\tat gov.uk.check.visa.cucumber.steps.MyHomeOfficeSteps.iSelectANationalityOfChile(MyHomeOfficeSteps.java:88)\r\n\tat ✽.And I select a nationality of \u0027chile\u0027(src/test/java/resources/featurefile/login.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyHomeOfficeSteps.iClickOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyHomeOfficeSteps.iSelectReasonWorkAcademicVisitOrBusiness()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyHomeOfficeSteps.iClickOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 47
    }
  ],
  "location": "MyHomeOfficeSteps.iStateIAmIntendingToStayForMoreThanMonths(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyHomeOfficeSteps.iClickOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyHomeOfficeSteps.iStateIHavePlanningToWorkHealthTypesOfJob()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyHomeOfficeSteps.iClickOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyHomeOfficeSteps.iWillBeInformedYouNeedAVisaToWorkInHealthAndCare()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 213508800,
  "status": "passed"
});
formatter.before({
  "duration": 2110782600,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "A Columbian national coming to the UK to join a partner for a long stay. They do have an Article 10 or 20 card.",
  "description": "",
  "id": "visa-checks;a-columbian-national-coming-to-the-uk-to-join-a-partner-for-a-long-stay.-they-do-have-an-article-10-or-20-card.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I am on the Check UK visa website",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I start visa check",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I select a nationality  of \u0027colombia\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select reason \u0027family\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I state My partner or family member have uk immigration status \u0027yes\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I will be informed \u0027You’ll need a visa to join your family or partner in the UK\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "MyHomeOfficeSteps.iAmOnTheCheckUKVisaWebsite()"
});
formatter.result({
  "duration": 35800,
  "status": "passed"
});
formatter.match({
  "location": "MyHomeOfficeSteps.iStartVisaCheck()"
});
formatter.result({
  "duration": 256682601,
  "status": "passed"
});
formatter.match({
  "location": "MyHomeOfficeSteps.iSelectANationalityOfColombia()"
});
formatter.result({
  "duration": 119564600,
  "status": "passed"
});
formatter.match({
  "location": "MyHomeOfficeSteps.iClickOnNextButton()"
});
formatter.result({
  "duration": 414365999,
  "status": "passed"
});
formatter.match({
  "location": "MyHomeOfficeSteps.iSelectReasonFamily()"
});
formatter.result({
  "duration": 65611100,
  "status": "passed"
});
formatter.match({
  "location": "MyHomeOfficeSteps.iClickOnNextButton()"
});
formatter.result({
  "duration": 268765400,
  "status": "passed"
});
formatter.match({
  "location": "MyHomeOfficeSteps.iStateMyPartnerOrFamilyMemberHaveUkImmigrationStatusYes()"
});
formatter.result({
  "duration": 70340600,
  "status": "passed"
});
formatter.match({
  "location": "MyHomeOfficeSteps.iClickOnNextButton()"
});
formatter.result({
  "duration": 338744199,
  "status": "passed"
});
formatter.match({
  "location": "MyHomeOfficeSteps.iWillBeInformedYouLlNeedAVisaToJoinYourFamilyOrPartnerInTheUK()"
});
formatter.result({
  "duration": 41919000,
  "status": "passed"
});
formatter.after({
  "duration": 31600,
  "status": "passed"
});
});