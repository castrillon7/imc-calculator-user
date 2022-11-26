import {
  IMC,
  Macronutrients,
  Gender,
  MacronutrientsStrategy,
  PhysicalActivityLevel,
} from '@castrillon7/imc-calculator';

(function main() {
  const weight = 80;
  const height = 1.8;
  console.log({
    weight,
    height,
    imc: IMC.calculate(weight, height),
    macro: {
      bulkingActive: Macronutrients.calculate(
        80,
        Gender.MALE as any,
        MacronutrientsStrategy.BULKING as any,
        PhysicalActivityLevel.HIGHLY_ACTIVE as any
      ),
      other: Macronutrients.calculate(
        80,
        Gender.MALE as any,
        MacronutrientsStrategy.MAINTAIN as any,
        PhysicalActivityLevel.SEDENTARY as any
      ),
    },
  });
})();
