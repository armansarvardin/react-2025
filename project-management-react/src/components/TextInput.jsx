export default function TextInput({title, isLong, ref}) {
  const inputClassName = "w-full p-1 border-b-2 border-stone-300 focus:outline-none focus:border-stone-600"
  
  return <p className="block mb-4">
    <label className="block text-sm font-bold uppercase text-stone-500 mb-2">{title}</label>
    {!isLong && <input required className={inputClassName} ref={ref} />}
    {isLong && <textarea required className={inputClassName} ref={ref} />}
  </p>
}