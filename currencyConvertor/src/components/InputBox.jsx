import { useId } from "react";
const InputBox = ({
  // eslint-disable-next-line react/prop-types
  label,
  // eslint-disable-next-line react/prop-types
  amount,
  // eslint-disable-next-line react/prop-types
  onChangeAmount,
  // eslint-disable-next-line react/prop-types
  onChangeCurrency,
  // eslint-disable-next-line react/prop-types
  currencyOptions = [],
  // eslint-disable-next-line react/prop-types
  selectCurrency,
  // eslint-disable-next-line react/prop-types
  amountDisable = false,
  // eslint-disable-next-line react/prop-types
  currencyDisable = false,
  // eslint-disable-next-line react/prop-types
  className =""
}) => {
  const uId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={uId} className="text-black/60 mb-2 inline-block">
          {label}
        </label>
        <input
          id={uId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onChangeAmount && onChangeAmount(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full ">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onChangeCurrency && onChangeCurrency(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default InputBox;
