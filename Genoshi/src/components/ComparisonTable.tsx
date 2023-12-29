import React from 'react';

const FeatureTable: React.FC = () => {
  const featureGroups = [
    {
      title: 'Features',
      features: [
        { label: 'Upto 10 Graphs', basic: true, pro: true, enterprise: true },
        { label: "Upto 50 Graphs", basic: false, pro: true, enterprise: true },
        { label: "Unlimited Graphs", basic: false, pro: false, enterprise: true },
        { label: 'Upto 500 Chatbot Queries', basic: true, pro: true, enterprise: true },
        { label: "Upto 1000 Chatbot Queries", basic: false, pro: true, enterprise: true },
        { label: "Email + Live Chat Support", basic: false, pro: true, enterprise: true },
        { label: "24/7 Phone + Email Support", basic: false, pro: false, enterprise: true },
        { label: "Able to Upload Custom PDFs", basic: false, pro: false, enterprise: true },
      ],
    },
  ];

  return (
    <div className="container max-w-7xl mx-auto">
      <div className="flex items-center justify-center">
        <div className="bg-white shadow-md rounded px-12 pt-6 pb-8 mb-4">
          <div className="items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Feature Comparison</h2>
          </div>
          {featureGroups.map((group) => (
            <div key={group.title} className="bg-gray-100 rounded-lg p-8 mb-4">
              <table className="table-auto w-full">
                <thead>
                  <tr >
                    <th className="text-left font-medium text-gray-700">Features</th>
                    <th className="text-center font-medium text-gray-700">Basic</th>
                    <th className="text-center font-medium text-gray-700">Pro</th>
                    <th className="text-center font-medium text-gray-700">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {group.features.map((feature) => (
                    <tr key={feature.label}>
                      <td className="p-4 border border-black">{feature.label}</td>
                      <td className="p-4 text-center border border-black">
                        {feature.basic && (
                          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 467.36"><g fill-rule="nonzero"><path fill="#333" d="M58.327 0h254.296c-11.984 13.787-22.844 27.299-32.641 40.444H58.327c-4.929 0-9.415 2.01-12.656 5.227a17.95 17.95 0 00-5.227 12.657v350.705c0 4.868 2.04 9.331 5.288 12.579 3.264 3.263 7.75 5.304 12.595 5.304h395.345c4.815 0 9.286-2.056 12.557-5.327 3.271-3.271 5.326-7.742 5.326-12.556V211.536A1199.255 1199.255 0 00512 194.294v214.739c0 15.995-6.611 30.592-17.173 41.154-10.562 10.562-25.159 17.173-41.155 17.173H58.327c-15.996 0-30.623-6.58-41.193-17.15C6.595 439.671 0 425.082 0 409.033V58.328C0 26.298 26.298 0 58.327 0z"/><path fill="#01A601" d="M137.419 167.477l62.691-.825a10.042 10.042 0 015.427 1.513c12.678 7.329 24.639 15.69 35.789 25.121a243.712 243.712 0 0122.484 21.681c21.972-34.811 48.576-70.325 76.509-103.639 34.552-41.2 71.358-79.245 104.09-108.6a10.045 10.045 0 016.718-2.567l48.071-.039c5.579 0 10.111 4.532 10.111 10.111 0 2.752-1.108 5.259-2.896 7.077-44.311 49.249-89.776 105.68-130.969 163.496-38.09 53.466-72.596 108.194-99.23 159.612-2.553 4.945-8.644 6.894-13.588 4.341a10.07 10.07 0 01-4.693-5.105c-14.582-31.196-32.052-59.924-52.916-85.679-20.887-25.778-45.244-48.645-73.567-68.087-4.593-3.134-5.777-9.423-2.644-14.016 2.002-2.935 5.296-4.479 8.613-4.395z"/></g></svg>
                        )}
                      </td>
                      <td className="p-4 text-center border border-black">
                        {feature.pro && (
                          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 467.36"><g fill-rule="nonzero"><path fill="#333" d="M58.327 0h254.296c-11.984 13.787-22.844 27.299-32.641 40.444H58.327c-4.929 0-9.415 2.01-12.656 5.227a17.95 17.95 0 00-5.227 12.657v350.705c0 4.868 2.04 9.331 5.288 12.579 3.264 3.263 7.75 5.304 12.595 5.304h395.345c4.815 0 9.286-2.056 12.557-5.327 3.271-3.271 5.326-7.742 5.326-12.556V211.536A1199.255 1199.255 0 00512 194.294v214.739c0 15.995-6.611 30.592-17.173 41.154-10.562 10.562-25.159 17.173-41.155 17.173H58.327c-15.996 0-30.623-6.58-41.193-17.15C6.595 439.671 0 425.082 0 409.033V58.328C0 26.298 26.298 0 58.327 0z"/><path fill="#01A601" d="M137.419 167.477l62.691-.825a10.042 10.042 0 015.427 1.513c12.678 7.329 24.639 15.69 35.789 25.121a243.712 243.712 0 0122.484 21.681c21.972-34.811 48.576-70.325 76.509-103.639 34.552-41.2 71.358-79.245 104.09-108.6a10.045 10.045 0 016.718-2.567l48.071-.039c5.579 0 10.111 4.532 10.111 10.111 0 2.752-1.108 5.259-2.896 7.077-44.311 49.249-89.776 105.68-130.969 163.496-38.09 53.466-72.596 108.194-99.23 159.612-2.553 4.945-8.644 6.894-13.588 4.341a10.07 10.07 0 01-4.693-5.105c-14.582-31.196-32.052-59.924-52.916-85.679-20.887-25.778-45.244-48.645-73.567-68.087-4.593-3.134-5.777-9.423-2.644-14.016 2.002-2.935 5.296-4.479 8.613-4.395z"/></g></svg>
                        )}
                      </td>
                      <td className="p-4 text-center border border-black">
                        {feature.enterprise && (
                          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 467.36"><g fill-rule="nonzero"><path fill="#333" d="M58.327 0h254.296c-11.984 13.787-22.844 27.299-32.641 40.444H58.327c-4.929 0-9.415 2.01-12.656 5.227a17.95 17.95 0 00-5.227 12.657v350.705c0 4.868 2.04 9.331 5.288 12.579 3.264 3.263 7.75 5.304 12.595 5.304h395.345c4.815 0 9.286-2.056 12.557-5.327 3.271-3.271 5.326-7.742 5.326-12.556V211.536A1199.255 1199.255 0 00512 194.294v214.739c0 15.995-6.611 30.592-17.173 41.154-10.562 10.562-25.159 17.173-41.155 17.173H58.327c-15.996 0-30.623-6.58-41.193-17.15C6.595 439.671 0 425.082 0 409.033V58.328C0 26.298 26.298 0 58.327 0z"/><path fill="#01A601" d="M137.419 167.477l62.691-.825a10.042 10.042 0 015.427 1.513c12.678 7.329 24.639 15.69 35.789 25.121a243.712 243.712 0 0122.484 21.681c21.972-34.811 48.576-70.325 76.509-103.639 34.552-41.2 71.358-79.245 104.09-108.6a10.045 10.045 0 016.718-2.567l48.071-.039c5.579 0 10.111 4.532 10.111 10.111 0 2.752-1.108 5.259-2.896 7.077-44.311 49.249-89.776 105.68-130.969 163.496-38.09 53.466-72.596 108.194-99.23 159.612-2.553 4.945-8.644 6.894-13.588 4.341a10.07 10.07 0 01-4.693-5.105c-14.582-31.196-32.052-59.924-52.916-85.679-20.887-25.778-45.244-48.645-73.567-68.087-4.593-3.134-5.777-9.423-2.644-14.016 2.002-2.935 5.296-4.479 8.613-4.395z"/></g></svg>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureTable;

{/* <svg className="w-4 h-4 text-green-600 fill-current" viewBox="0 0 20 20">
                            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                          </svg> */}