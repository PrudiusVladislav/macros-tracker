import Header from "@/components/Header";
import RadioPickerGroup from "@/components/ui/RadioPickerGroup";

function InputBlock(){
  return (
    <div className="col-span-2 bg-main-bg text-left pl-5 pt-4">
      <h1 className="text-3xl text-main-text mb-2">Calculate Your Macros</h1>
      <p className="text-secondary-text mb-4">Craft your ideal micronutrient ratio now using our macros calculator</p>
      <div className="space-y-4">
        <RadioPickerGroup 
          options={[{value: "imperial", label: "Imperial"}, {value: "metric", label: "Metric"}]} 
          value="metric" 
          description="System"/>
      </div>
    </div>
  )
}

function ResultBlock(){
  return (
    <div className="col-span-1 bg-main-bg-darker pt-4">
      <h1 className="text-3xl text-main-text">Your Daily Macro Goals</h1>
    </div>
  )
}

function Home() {
  return (
    <div className="flex-grow">
      <Header pageName="Home" userName="John Doe"/>
      <main className="grid grid-cols-3 h-full">
        <InputBlock/>
        <ResultBlock/>
      </main>
    </div>
  );
}

export default Home;