// learning enums in typescript
// enum declaration with numeric values
enum TestResults {
     Pass,
     Fail, 
     Skip
}
function logTestResults(result: TestResults) {
    console.log(`Test Result: ` + TestResults[result]);
    console.log(`Test Result Numeric Value: ${result}`);
}
logTestResults(TestResults.Pass);
logTestResults(TestResults.Fail);
logTestResults(TestResults.Skip);

//enum declaration with string values
enum FruitColors {
    Apple = "Red",
    Banana = "Yellow",
    Grape = "Purple"
}
function logFruitColor(fruit: FruitColors) {
    console.log(`Fruit Color: ` + fruit);
    console.log(`Fruit Color: ${fruit}`);
}
logFruitColor(FruitColors.Apple);
logFruitColor(FruitColors.Banana);
logFruitColor(FruitColors.Grape);
//enum with mixed values heterogeneous values
enum MixedEnum {
    //heterogeneous values it is mandatory to assign values   
    Yes = "YES",
    No = 0,
    Maybe = 1,
    Maybe1,
    Unknown = "UNKNOWN"
}
function logMixedEnum(value: MixedEnum) {
    console.log(`Mixed Enum Value: ` + value);
    console.log(`Mixed Enum Value: ${value}`);
}
logMixedEnum(MixedEnum.Yes);
logMixedEnum(MixedEnum.No);
logMixedEnum(MixedEnum.Maybe);
logMixedEnum(MixedEnum.Maybe1);
logMixedEnum(MixedEnum.Unknown);