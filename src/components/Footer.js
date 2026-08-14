const Footer = () => {
  return (
    <div className='px-16 py-12 text-gray-400 bg-black'>
      
      <p className='mb-6 cursor-pointer hover:underline'>
        Questions? Call 000-800-919-1694
      </p>

      {/* Links Grid */}
      <div className='grid grid-cols-4 gap-4 mb-8 text-sm'>
        {[
          "FAQ", "Help Centre", "Account", "Media Centre",
          "Investor Relations", "Jobs", "Ways to Watch", "Terms of Use",
          "Privacy", "Cookie Preferences", "Corporate Information", "Contact Us",
          "Speed Test", "Legal Notices", "Only on Netflix", "Ad Choices"
        ].map((item) => (
          <a key={item} href="#" className='hover:underline'>{item}</a>
        ))}
      </div>

      {/* Language Selector */}
      <div className='mb-6'>
        <select className='px-4 py-2 text-gray-400 bg-black border border-gray-600 rounded'>
          <option>English</option>
          <option>Hindi</option>
        </select>
      </div>

      <p className='text-sm'>Netflix India</p>
    </div>
  );
};

export default Footer;