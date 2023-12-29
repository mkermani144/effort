const TextField = ({ title, name, type }) => (
  <label className="block">
    <span className="block text-sm font-medium text-slate-300">{title}</span>
    <input
      type={type}
      className="mt-1 block w-full px-3 py-2 bg-transparent border border-slate-300 rounded-md text-sm focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      name={name}
    />
  </label>
);

export default TextField;
