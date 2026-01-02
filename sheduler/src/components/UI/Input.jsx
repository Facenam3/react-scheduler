export default function Input({
  name,
  placeholder,
  type,
  label,
  description,
  ...props
}) {
  let inputForm = (
    <div className="mb-3">
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );

  if (label) {
    inputForm = (
      <div>
        <label
          className="text-left block mb-2 text-xl font-semibold w-full text-stone-50"
          htmlFor={name}
        >
          {label}
        </label>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          {...props}
        />
      </div>
    );
  }

  if (description) {
    return (
      <div>
        <label
          className="text-left block mb-2 text-xl font-semibold w-full text-stone-50"
          htmlFor={name}
        >
          {label}
        </label>
        <textarea
          rows="3"
          cols="2"
          name={name}
          id={name}
          placeholder={placeholder}
          {...props}
        ></textarea>
      </div>
    );
  }

  return inputForm;
}
