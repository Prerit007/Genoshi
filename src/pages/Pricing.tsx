import { useState } from 'react';
import PriceCard from "../components/Pricing/PriceCard"
import ComparisonTable from "../components/Pricing/ComparisonTable"
import FAQ from "../components/Pricing/FAQ"

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState('basic');
  return (
    <>
    <div className="flex flex-col items-center bg-black p-4">
      <div className="mb-2 mt-12 text-center">
        <h1 className="mb-4 text-7xl font-black text-[#3898ED]">Pricing Plans</h1>
        <p className="text-lg text-white">Select the perfect price tag and dive into your project journey!</p>

      </div>
      <div className="flex flex-col gap-8 p-10 xl:flex-row">
        <PriceCard
        color = "#78e3fc"
        name = "Basic"
        plan='basic'
        description ="Get started with the basic plan"
        price="4"
        features ={["1 User", "Upto 10 Graphs", "Upto 500 Chatbot Queries"]}
        binText="Start Free Plan"
        selected={selectedPlan === 'basic'}
        onSelect={()=> setSelectedPlan("basic")}/>
        <PriceCard
        color = "#fcd638"
        name = "Pro"
        plan = "pro"
        description ="Get started with more Advanced plan"
        price="8"
        features ={["1 User", "Upto 50 Graphs", "Upto 1000 Chatbot Queries", "Email + Live Chat Support"]}
        binText="Start Pro Plan"
        selected={selectedPlan === 'pro'}
        onSelect={()=> setSelectedPlan("pro")}/>
        <PriceCard
        color = "#ffb5ba"
        name = "Enterprise"
        plan = "enterprise"
        description =""
        price = ""
        features ={["Unlimited Graphs", "Able to Upload Custom PDFs", "24/7 Phone + Email Support"]}
        binText="Contact for Pricing"
        selected={selectedPlan === 'enterprise'}
        onSelect={()=> setSelectedPlan("enterprise")}/>
      </div>
    </div>

    <div className="flex flex-col items-center bg-gray-700">
      <h2 className="mb-4 text-7xl font-black text-[#0C0C1C] text-center mt-12">Comparison</h2>
      <p className="text-lg text-white text-center p-2 mb-5">"Comparing prices: Find your project's perfect match!"</p>
      <ComparisonTable />
    </div>
    <div className="flex flex-col items-center bg-gray-700">
      <h2 className="mb-4 text-7xl font-black text-[#0C0C1C] text-center mt-12">Frequently Asked Questions</h2>
      <p className="text-lg text-white text-center p-2 mb-5">If you’ve got a question, there’s a good chance we’ve answered it below. Take a look and if you still need help, get in touch, and we’ll happily help you out!</p>
      <FAQ /> 
    </div>
    </>
  )
}

export default Pricing