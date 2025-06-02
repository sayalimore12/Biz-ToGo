import React, {useState} from 'react';
import PageWrapper from '../components/PageWrapper';

const sections = [
  {
    id: 'start-llc',
    title: 'How to start your LLC business in 7 simple steps',
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-4">7 Steps to Start Your LLC</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          <li>Choose your state of formation</li>
          <li>Pick a unique business name</li>
          <li>Appoint a registered agent</li>
          <li>File Articles of Organization</li>
          <li>Create an LLC Operating Agreement</li>
          <li>Apply for an EIN (Employer Identification Number)</li>
          <li>Comply with ongoing state requirements</li>
        </ol>
      </div>
    ),
  },
  {
    id: 'state-llc',
    title: 'State Specific LLC formation',
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-4">LLC Formation by State</h2>
        <p className="text-gray-700 mb-4">
          LLC formation requirements vary by state. We simplify this by providing state-specific guidance for formation, fees, and compliance.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>California LLC</li>
          <li>Texas LLC</li>
          <li>Florida LLC</li>
          <li>New York LLC</li>
          <li>...and all 50 states</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'post-formation',
    title: 'Steps after forming LLC',
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-4">After You Form Your LLC</h2>
        <p className="text-gray-700">Once your LLC is formed, here's what you should do next:</p>
        <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
          <li>Obtain an EIN from the IRS</li>
          <li>Open a business bank account</li>
          <li>Apply for any necessary business licenses</li>
          <li>Set up accounting and bookkeeping</li>
          <li>Understand your tax obligations</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'licenses',
    title: 'Obtain the required business license and permits',
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Business Licenses & Permits</h2>
        <p className="text-gray-700">
          Depending on your industry and location, you may need specific local, state, or federal licenses to operate legally. We help identify and obtain them for you.
        </p>
      </div>
    ),
  },
  {
    id: 'faq',
    title: 'FAQ',
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <ul className="space-y-4 text-gray-700">
          <li>
            <strong>Q: How long does it take to form an LLC?</strong><br />
            A: It varies by state but typically takes 5-10 business days.
          </li>
          <li>
            <strong>Q: Do I need a lawyer to form an LLC?</strong><br />
            A: No, our service makes it easy without hiring a lawyer.
          </li>
          <li>
            <strong>Q: What's a registered agent?</strong><br />
            A: A person or business authorized to receive legal documents for your LLC.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'reviews',
    title: 'Reviews',
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-4">What Our Clients Say</h2>
        <div className="space-y-6 text-gray-700">
          <div className="border-l-4 border-indigo-600 pl-4 italic">
            “Super fast, super easy! I had my LLC formed in less than a week.” — Sarah K.
          </div>
          <div className="border-l-4 border-green-500 pl-4 italic">
            “The support team is incredible. They walked me through every step.” — James R.
          </div>
          <div className="border-l-4 border-yellow-500 pl-4 italic">
            “I’ve used other services. This one is by far the best and most affordable.” — Emma W.
          </div>
        </div>
      </div>
    ),
  },
];
const OurServices = () => {
  const [selectedSection, setSelectedSection] = useState(sections[0].id);

  const current = sections.find((s) => s.id === selectedSection);
  return (
    <PageWrapper>
       <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="md:w-1/4 w-full bg-gray-100 border-r md:sticky top-0 p-6">
        <h3 className="text-lg font-bold mb-6 text-gray-900">Our Services</h3>
        <ul className="space-y-4">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => setSelectedSection(section.id)}
                className={`text-left w-full text-gray-700 font-medium hover:text-indigo-600 transition ${
                  selectedSection === section.id ? 'text-indigo-600 font-semibold' : ''
                }`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">{current?.content}</div>
      </main>
    </div>

    </PageWrapper>
  );
};


export default OurServices;
