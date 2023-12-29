import { useState } from 'react';
import PriceCard from "../components/PriceCard"

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState('basic');
  return (
    <div className="flex flex-col items-center bg-black p-4">
      <div className="mb-2 mt-12 text-center">
        <h1 className="mb-4 text-7xl font-black text-white">Pricing Plans</h1>
        <p className="text-lg text-white">Choose the right pricing for you and get started working on your project.</p>

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
  )
}

export default Pricing