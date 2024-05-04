
export interface MacrosCalcParams {
    system: string;
    gender: string;
    goal: string;
    age: number;
    height: number;
    weight: number;
    activityLevel: string;
}

export interface Macros {
    totalCalories: number;
    protein: number;
    carbs: number;
    fats: number;
}

export class MacrosCalculatorService {
    public static calculateMacros(params: MacrosCalcParams): Macros {
        let bmr: number;
        if (params.gender === 'male') {
            bmr = 10 * params.weight + 6.25 * params.height - 5 * params.age + 5;
        } else {
            bmr = 10 * params.weight + 6.25 * params.height - 5 * params.age - 161;
        }

        let multiplier: number;
        switch (params.activityLevel) {
            case 'sedentary':
                multiplier = 1.2;
                break;
            case 'moderate':
                multiplier = 1.55;
                break;
            case 'active':
                multiplier = 1.9;
                break;
            default:
                multiplier = 1.2;
        }
        let totalCalories = bmr * multiplier;

        switch (params.goal) {
            case 'lose':
                totalCalories *= 0.85;
                break;
            case 'gain':
                totalCalories *= 1.15;
                break;
        }

        let protein = totalCalories * 0.3 / 4;
        let carbs = totalCalories * 0.5 / 4;
        let fats = totalCalories * 0.2 / 9;

        return {
            totalCalories: Math.round(totalCalories),
            protein: Math.round(protein),
            carbs: Math.round(carbs),
            fats: Math.round(fats),
        };
    }
}