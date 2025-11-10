export default function DateInput({ title, ref }) {
  const inputClassName = "w-full p-1 border-b-2 border-stone-300 focus:outline-none focus:border-stone-600"

  return <p className="block mb-4">
    <label className="block text-sm font-bold uppercase text-stone-500 mb-2">{title}</label>
    <input required ref={ref} type="date" className={inputClassName} />
  </p>
}