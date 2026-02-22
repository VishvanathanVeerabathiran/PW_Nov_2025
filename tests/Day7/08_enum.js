// learning enums in typescript
// enum declaration with numeric values
var TestResults;
(function (TestResults) {
    TestResults[TestResults["Pass"] = 0] = "Pass";
    TestResults[TestResults["Fail"] = 1] = "Fail";
    TestResults[TestResults["Skip"] = 2] = "Skip";
})(TestResults || (TestResults = {}));
function logTestResults(result) {
    console.log("Test Result: " + TestResults[result]);
    console.log("Test Result Numeric Value: ".concat(result));
}
logTestResults(TestResults.Pass);
logTestResults(TestResults.Fail);
logTestResults(TestResults.Skip);
//enum declaration with string values
var FruitColors;
(function (FruitColors) {
    FruitColors["Apple"] = "Red";
    FruitColors["Banana"] = "Yellow";
    FruitColors["Grape"] = "Purple";
})(FruitColors || (FruitColors = {}));
function logFruitColor(fruit) {
    console.log("Fruit Color: " + fruit);
    console.log("Fruit Color: ".concat(fruit));
}
logFruitColor(FruitColors.Apple);
logFruitColor(FruitColors.Banana);
logFruitColor(FruitColors.Grape);
//enum with mixed values heterogeneous values
var MixedEnum;
(function (MixedEnum) {
    //heterogeneous values it is mandatory to assign values   
    MixedEnum["Yes"] = "YES";
    MixedEnum[MixedEnum["No"] = 0] = "No";
    MixedEnum[MixedEnum["Maybe"] = 1] = "Maybe";
    MixedEnum[MixedEnum["Maybe1"] = 2] = "Maybe1";
    MixedEnum["Unknown"] = "UNKNOWN";
})(MixedEnum || (MixedEnum = {}));
function logMixedEnum(value) {
    console.log("Mixed Enum Value: " + value);
    console.log("Mixed Enum Value: ".concat(value));
}
logMixedEnum(MixedEnum.Yes);
logMixedEnum(MixedEnum.No);
logMixedEnum(MixedEnum.Maybe);
logMixedEnum(MixedEnum.Maybe1);
logMixedEnum(MixedEnum.Unknown);
