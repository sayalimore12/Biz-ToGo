import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';

const resources = [
  {
    id: 'guides',
    title: 'Guides & Tutorials',
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-4">LLC Formation Guides</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>How to File an LLC in Your State</li>
          <li>Step-by-Step Business Formation Checklist</li>
          <li>LLC vs Sole Proprietorship vs Corporation</li>
          <li>Understanding Operating Agreements</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'templates',
    title: 'Business Templates',
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Free Downloadable Templates</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>LLC Operating Agreement Template (PDF/Word)</li>
          <li>Business Plan Template</li>
          <li>Invoice Template</li>
          <li>Non-Disclosure Agreement (NDA)</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'tax',
    title: 'Tax Resources',
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Tax Help for LLCs</h2>
        <p className="text-gray-700 mb-2">
          Understanding how your LLC is taxed can save you time and money.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>LLC Tax Classification (Single-member, Multi-member, S-Corp)</li>
          <li>How to File Taxes as an LLC</li>
          <li>Estimated Quarterly Payments Guide</li>
          <li>Choosing an Accountant or CPA</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'legal',
    title: 'Legal Documents',
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Essential Legal Forms</h2>
        <p className="text-gray-700">
          Browse downloadable legal documents commonly needed for LLC operation.
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
          <li>LLC Operating Agreement</li>
          <li>Partnership Agreement</li>
          <li>Registered Agent Consent Form</li>
          <li>LLC Articles of Amendment</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'blog',
    title: 'Blog & Articles',
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-4">From Our Blog</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Top 5 Mistakes New Business Owners Make</li>
          <li>When to Upgrade to an S-Corp</li>
          <li>Annual Compliance Tips for 2025</li>
          <li>LLC Myths You Should Ignore</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'support',
    title: 'Support & Help Center',
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
        <p className="text-gray-700 mb-2">We’re here to guide you 7 days a week.</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Contact Support</li>
          <li>Live Chat (9am – 9pm EST)</li>
          <li>Knowledge Base</li>
          <li>Schedule a Free Consultation</li>
        </ul>
      </div>
    ),
  },
];

const Resources = () => {
  const [selected, setSelected] = useState(resources[0].id);
  const current = resources.find((r) => r.id === selected);

  return (
  <PageWrapper>
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="md:w-1/4 w-full bg-gray-100 border-r md:sticky top-0 p-6">
        <h3 className="text-lg font-bold mb-6 text-gray-900">Resources</h3>
        <ul className="space-y-4">
          {resources.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setSelected(item.id)}
                className={`text-left w-full text-gray-700 font-medium hover:text-indigo-600 transition ${
                  selected === item.id ? 'text-indigo-600 font-semibold' : ''
                }`}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">{current?.content}</div>
      </main>
    </div>
  </PageWrapper>
  );
};

export default Resources;
