import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="container max-w-4xl m-5">
        <div className="p-8 bg-gray-200 rounded-lg">
      <Accordion
        title="Can we upgrade or downgrade our plan?"
        answer="Yes! You can upgrade or downgrade your plan at any time."
      />
      <Accordion
        title="How frequently is the tool updated with new features or improvements?"
        answer="The tool undergoes regular updates and improvements based on advancements in AI and user feedback. Updates are scheduled periodically to enhance its capabilities and usability."
      />
      <Accordion title="Can the tool handle multiple languages?" answer="Currently, the tool primarily supports English-language research papers. However, efforts are underway to expand its language capabilities to encompass other languages." />
      <Accordion
        title="What types of research papers does the tool support?"
        answer="Our AI tool can process and generate knowledge graphs from a wide range of research papers across various domains, including but not limited to science, technology, medicine, social sciences, and more."/>
        <Accordion
        title="How can we reach out to the team for support?"
        answer="You can reach out to the team for support by contacting us at genoshi@graff.com"/>
    </div>
    </div>
  );
};

export default FAQ;