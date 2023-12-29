
import PriceCard from "../components/PriceCard"

const Pricing = () => {
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
        description ="Get started with the basic plan"
        price="4"
        features ={["1 User", "10 Graphs", "500 Chatbot Queries"]}
        binText="Start Free Plan"/>
        <PriceCard
        color = "#fcd638"
        name = "Pro"
        description ="Get started with more Advanced plan"
        price="8"
        features ={["1 User", "50 Graphs", "1000 Chatbot Queries", "Email + Live Chat Support"]}
        binText="Start Pro Plan"/>
        <PriceCard
        color = "#ffb5ba"
        name = "Enterprise"
        description ="For Enterprises"
        price = ""
        features ={["Unlimited Graphs", "Able to Upload Custom PDFs", "24/7 Phone + Email Support"]}
        binText="Contact for Pricing"/>
      </div>
    </div>
  )
}

export default Pricing