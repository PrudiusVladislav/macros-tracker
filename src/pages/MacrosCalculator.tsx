import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Macros, MacrosCalcParams, MacrosCalculatorService } from "@/services/MacrosCalculatorService";
import { useState } from "react";


// function InputBlock(){

//     return (
//       <div className="col-span-2 bg-main-bg text-left p-8">
//         <h1 className="text-3xl text-main-text mb-2">Calculate Your Macros</h1>
//         <p className="text-secondary-text mb-8">Craft your ideal micronutrient ratio now using our macros calculator</p>
//         <div className="space-y-8">
//             <div>
//                 <p className="text-secondary-text mb-3">System</p>
//                 <Tabs defaultValue="metric">
//                     <TabsList>
//                         <TabsTrigger key="imperial" value="imperial">Imperial</TabsTrigger>
//                         <TabsTrigger key="metric" value="metric">Metric</TabsTrigger>
//                     </TabsList>
//                 </Tabs>
//             </div>
//             <div>
//                 <p className="text-secondary-text mb-3">I`m a</p>
//                 <Tabs defaultValue="male">
//                     <TabsList>
//                         <TabsTrigger key="male" value="male">Male</TabsTrigger>
//                         <TabsTrigger key="female" value="female">Female</TabsTrigger>
//                     </TabsList>
//                 </Tabs>
//             </div>
//             <div>
//                 <p className="text-secondary-text mb-3">What is your main weight goal?</p>
//                 <Tabs defaultValue="maintain">
//                     <TabsList>
//                         <TabsTrigger key="lose" value="lose">Lose</TabsTrigger>
//                         <TabsTrigger key="maintain" value="maintain">Maintain</TabsTrigger>
//                         <TabsTrigger key="gain" value="gain">Gain</TabsTrigger>
//                     </TabsList>
//                 </Tabs>
//             </div>
//             <div>
//                 <p className="text-secondary-text mb-4">
//                     I`am <span className="font-bold text-main-text">{age}</span> years young
//                 </p>
//                 <Slider defaultValue={[age]} max={100} step={1} onValueChange={(value) => setAge(value[0])}/>
//             </div>
//             <div>
//                 <p className="text-secondary-text mb-4">
//                     My height is <span className="font-bold text-main-text">{height}</span> cm
//                 </p>
//                 <Slider defaultValue={[height]} max={220} step={1} onValueChange={(value) => setHeight(value[0])}/>
//             </div>
//             <div>
//                 <p className="text-secondary-text mb-4">
//                     Current weight <span className="font-bold text-main-text">{weight}</span> kg
//                 </p>
//                 <Slider defaultValue={[weight]} max={150} step={1} onValueChange={(value) => setWeight(value[0])}/>
//             </div>
//             <div>
//                 <p className="text-secondary-text mb-4">Activity level</p>
//                 <Tabs defaultValue="sedentary">
//                     <TabsList>
//                         <TabsTrigger key="sedentary" value="sedentary" className="flex flex-col items-center">
//                             <div>Sedentary</div>
//                             <div className="text-secondary-text text-sm">(no exercise)</div>
//                         </TabsTrigger>
//                         <TabsTrigger key="moderate" value="moderate" className="flex flex-col items-center py-2">
//                             <div>Moderate</div>
//                             <div className="text-secondary-text text-sm">(3x-4x per week)</div>
//                         </TabsTrigger>
//                         <TabsTrigger key="active" value="active" className="flex flex-col items-center py-2">
//                             <div>Active</div>
//                             <div className="text-secondary-text text-sm">(5x+ per week)</div>
//                         </TabsTrigger>
//                     </TabsList>
//                 </Tabs>
//             </div>
//             <div className="px-6">
//                 <Button className="text-main-text text-lg bg-buttons-pink py-7 w-full hover:bg-nav-menu-hover">Calculate Macros</Button>
//             </div>
//         </div>
//       </div>
//     )
// }
  
// function ResultBlock( {totalCalories, protein, carbs, fats}: Macros){
//     return (
//         <div className="col-span-1 bg-main-bg-darker p-8">
//             <h1 className="text-3xl text-main-text">Your Daily Macro Goals</h1>
//             <div className="flex justify-center my-10">
//                 <div className="border-18 border-buttons-pink bg-transparent rounded-full w-52 h-52 flex items-center justify-center">
//                     <p className="text-main-text">
//                         Total <br/><span className="font-bold text-3xl">{totalCalories}</span><br/>kcal
//                     </p>
//                 </div>
//             </div>
//             <div className="text-left">
//                 <p className="text-secondary-text mb-4">Daily Macros</p>
//                 <div className="flex justify-around">
//                     <div className="bg-main-bg px-4 py-6 text-center rounded-md space-y-1">
//                         <p className="text-main-text text-3xl">{protein}g</p>
//                         <p className="text-secondary-text">Protein</p>
//                     </div>
//                     <div className="bg-main-bg px-4 py-6 text-center rounded-md  space-y-1">
//                         <p className="text-main-text text-3xl">{carbs}g</p>
//                         <p className="text-secondary-text">Carbs</p>
//                     </div>
//                     <div className="bg-main-bg px-4 py-6 text-center rounded-md space-y-1">
//                         <p className="text-main-text text-3xl">{fats}g</p>
//                         <p className="text-secondary-text">Fat</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

function MacrosCalculator() {
    const [age, setAge] = useState(27);
    const [height, setHeight] = useState(171);
    const [weight, setWeight] = useState(75);
    const [gender, setGender] = useState<'male' | 'female'>('male');
    const [goal, setGoal] = useState<'lose' | 'maintain' | 'gain'>('maintain');
    const [activityLevel, setActivityLevel] = useState<'sedentary' | 'moderate' | 'active'>('sedentary');
    const [system, setSystem] = useState('metric');

    const getMacros = (): Macros => {
        const params: MacrosCalcParams = { system, gender, goal, age, height, weight, activityLevel };
        return MacrosCalculatorService.calculateMacros(params);
    }
    
    const [macros, setMacros] = useState<Macros>(getMacros());

    const handleSubmit = (): void => setMacros(getMacros());

    return (
        <div className="flex-grow">
            <Header pageName="Home" userName="John Doe"/>
            <main className="grid grid-cols-3 h-screen">
                <div className="col-span-2 bg-main-bg text-left p-8">
                    <h1 className="text-3xl text-main-text mb-2">Calculate Your Macros</h1>
                    <p className="text-secondary-text mb-8">Craft your ideal micronutrient ratio now using our macros calculator</p>
                    <div className="space-y-8">
                        <div>
                            <p className="text-secondary-text mb-3">System</p>
                            <Tabs defaultValue={system}>
                                <TabsList>
                                    <TabsTrigger key="imperial" value="imperial">Imperial</TabsTrigger>
                                    <TabsTrigger key="metric" value="metric">Metric</TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>
                        <div>
                            <p className="text-secondary-text mb-3">I`m a</p>
                            <Tabs defaultValue="male">
                                <TabsList>
                                    <TabsTrigger key="male" value="male">Male</TabsTrigger>
                                    <TabsTrigger key="female" value="female">Female</TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>
                        <div>
                            <p className="text-secondary-text mb-3">What is your main weight goal?</p>
                            <Tabs defaultValue="maintain">
                                <TabsList>
                                    <TabsTrigger key="lose" value="lose">Lose</TabsTrigger>
                                    <TabsTrigger key="maintain" value="maintain">Maintain</TabsTrigger>
                                    <TabsTrigger key="gain" value="gain">Gain</TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>
                        <div>
                            <p className="text-secondary-text mb-4">
                                I`am <span className="font-bold text-main-text">{age}</span> years young
                            </p>
                            <Slider defaultValue={[age]} max={100} step={1} onValueChange={(value) => setAge(value[0])}/>
                        </div>
                        <div>
                            <p className="text-secondary-text mb-4">
                                My height is <span className="font-bold text-main-text">{height}</span> cm
                            </p>
                            <Slider defaultValue={[height]} max={220} step={1} onValueChange={(value) => setHeight(value[0])}/>
                        </div>
                        <div>
                            <p className="text-secondary-text mb-4">
                                Current weight <span className="font-bold text-main-text">{weight}</span> kg
                            </p>
                            <Slider defaultValue={[weight]} max={150} step={1} onValueChange={(value) => setWeight(value[0])}/>
                        </div>
                        <div>
                            <p className="text-secondary-text mb-4">Activity level</p>
                            <Tabs defaultValue="sedentary">
                                <TabsList>
                                    <TabsTrigger key="sedentary" value="sedentary" className="flex flex-col items-center">
                                        <div>Sedentary</div>
                                        <div className="text-secondary-text text-sm">(no exercise)</div>
                                    </TabsTrigger>
                                    <TabsTrigger key="moderate" value="moderate" className="flex flex-col items-center py-2">
                                        <div>Moderate</div>
                                        <div className="text-secondary-text text-sm">(3x-4x per week)</div>
                                    </TabsTrigger>
                                    <TabsTrigger key="active" value="active" className="flex flex-col items-center py-2">
                                        <div>Active</div>
                                        <div className="text-secondary-text text-sm">(5x+ per week)</div>
                                    </TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>
                        <div className="px-6">
                            <Button className="text-main-text text-lg bg-buttons-pink py-7 w-full hover:bg-nav-menu-hover"
                                onSubmit={handleSubmit}>
                                Calculate Macros
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 bg-main-bg-darker p-8">
                    <h1 className="text-3xl text-main-text">Your Daily Macro Goals</h1>
                    <div className="flex justify-center my-10">
                        <div className="border-18 border-buttons-pink bg-transparent rounded-full w-52 h-52 flex items-center justify-center">
                            <p className="text-main-text">
                                Total <br/><span className="font-bold text-3xl">{macros.totalCalories}</span><br/>kcal
                            </p>
                        </div>
                    </div>
                    <div className="text-left">
                        <p className="text-secondary-text mb-4">Daily Macros</p>
                        <div className="flex justify-around">
                            <div className="bg-main-bg px-4 py-6 text-center rounded-md space-y-1">
                                <p className="text-main-text text-3xl">{macros.protein}g</p>
                                <p className="text-secondary-text">Protein</p>
                            </div>
                            <div className="bg-main-bg px-4 py-6 text-center rounded-md  space-y-1">
                                <p className="text-main-text text-3xl">{macros.carbs}g</p>
                                <p className="text-secondary-text">Carbs</p>
                            </div>
                            <div className="bg-main-bg px-4 py-6 text-center rounded-md space-y-1">
                                <p className="text-main-text text-3xl">{macros.fats}g</p>
                                <p className="text-secondary-text">Fat</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default MacrosCalculator;