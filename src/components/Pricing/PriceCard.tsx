interface PriceCardProps {
  name: string,
  plan: string,
  description: string,
  binText: string,
  price: string,
  features: string[],
  color: string,
  selected?: boolean,
  onSelect: () => void,
}

const PriceCard = ({name, plan,description, binText, price, features, color, selected, onSelect}: PriceCardProps) => {
  return (
    <div className="flex flex-col items-center">
      <div style={{ backgroundColor: color, opacity: selected ? 1 : 0.5 }} className="flex min-h-[428px] w-[320px] flex-col rounded-3xl p-8 mt-4 mb-4">
        <h2 className="mb-5 text-5xl font-bold text-center">{name}</h2>
        <div className="mb-5 flex items-end text-3xl font-black">
        {price ? (<> <div>${price}/month</div></>): (" ")}
        </div>
        <p className="mb-5">{description}</p>
      <ul className="mb-10 flex flex-col gap-y-2">
        {features.map((feature) => (
          <li className="flex items-center gap-x-2">
            <svg fill="#000000" height="16px" width="16px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
	 viewBox="0 0 191.667 191.667">
<path d="M95.833,0C42.991,0,0,42.99,0,95.833s42.991,95.834,95.833,95.834s95.833-42.991,95.833-95.834S148.676,0,95.833,0z
	 M150.862,79.646l-60.207,60.207c-2.56,2.56-5.963,3.969-9.583,3.969c-3.62,0-7.023-1.409-9.583-3.969l-30.685-30.685
	c-2.56-2.56-3.97-5.963-3.97-9.583c0-3.621,1.41-7.024,3.97-9.584c2.559-2.56,5.962-3.97,9.583-3.97c3.62,0,7.024,1.41,9.583,3.971
	l21.101,21.1l50.623-50.623c2.56-2.56,5.963-3.969,9.583-3.969c3.62,0,7.023,1.409,9.583,3.969
	C156.146,65.765,156.146,74.362,150.862,79.646z"/>
</svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className="mt-auto rounded-xl bg-black py-3 px-6 text-lg font-medium text-white">{binText}</button>
      </div>
      <input
        className="w-5 h-5"
        type="radio"
        name="plan"
        id={`${plan}-plan`}
        value={plan}
        checked={selected}
        onChange={onSelect}
      />
    </div>
    
  )
}

export default PriceCard