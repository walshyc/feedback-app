import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';
const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(8);

  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };
  return (
    <div className="flex flex-wrap gap-3 justify-center items-center my-6">
      <div
        className={
          selected === 1
            ? 'bg-yellow-300 hover:bg-yellow-200 text-gray-600 font-bold h-12 w-12 rounded-full flex justify-center items-center cursor-pointer'
            : 'bg-gray-300 hover:bg-yellow-200 text-gray-600 h-12 w-12 rounded-full flex justify-center items-center cursor-pointer'
        }
      >
        <label className="p-4 cursor-pointer select-none" htmlFor="num1">
          1
        </label>
        <input
          type="radio"
          name="rating"
          id="num1"
          value="1"
          onChange={handleChange}
          checked={selected === 1}
          className="appearance-none"
        />
      </div>
      <div
        className={
          selected === 2
            ? 'bg-yellow-300 hover:bg-yellow-200 text-gray-600 font-bold h-12 w-12 rounded-full flex justify-center items-center cursor-pointer'
            : 'bg-gray-300 hover:bg-yellow-200 text-gray-600 h-12 w-12 rounded-full flex justify-center items-center cursor-pointer'
        }
      >
        <input
          type="radio"
          className="appearance-none"
          name="rating"
          id="num2"
          value="2"
          onChange={handleChange}
          checked={selected === 2}
        />
        <label className="p-4 cursor-pointer select-none" htmlFor="num2">
          2
        </label>
      </div>
      <div
        className={
          selected === 3
            ? 'bg-yellow-300 hover:bg-yellow-200 text-gray-600 font-bold h-12 w-12 rounded-full flex justify-center items-center cursor-pointer'
            : 'bg-gray-300 hover:bg-yellow-200 text-gray-600 h-12 w-12 rounded-full flex justify-center items-center cursor-pointer'
        }
      >
        <input
          type="radio"
          className="appearance-none"
          name="rating"
          id="num3"
          value="3"
          onChange={handleChange}
          checked={selected === 3}
        />
        <label className="p-4 cursor-pointer select-none" htmlFor="num3">
          3
        </label>
      </div>
      <div
        className={
          selected === 4
            ? 'bg-yellow-300 hover:bg-yellow-200 text-gray-600 font-bold h-12 w-12 rounded-full flex justify-center items-center cursor-pointer'
            : 'bg-gray-300 hover:bg-yellow-200 text-gray-600 h-12 w-12 rounded-full flex justify-center items-center cursor-pointer'
        }
      >
        <input
          type="radio"
          className="appearance-none"
          name="rating"
          id="num4"
          value="4"
          onChange={handleChange}
          checked={selected === 4}
        />
        <label className="p-4 cursor-pointer select-none" htmlFor="num4">
          4
        </label>
      </div>
      <div
        className={
          selected === 5
            ? 'bg-yellow-300 hover:bg-yellow-200 text-gray-600 font-bold h-12 w-12 rounded-full flex justify-center items-center cursor-pointer'
            : 'bg-gray-300 hover:bg-yellow-200 text-gray-600 h-12 w-12 rounded-full flex justify-center items-center cursor-pointer'
        }
      >
        <input
          type="radio"
          className="appearance-none"
          name="rating"
          id="num5"
          value="5"
          onChange={handleChange}
          checked={selected === 5}
        />
        <label className="p-4 cursor-pointer select-none" htmlFor="num5">
          5
        </label>
      </div>
      <div
        className={
          selected === 6
            ? 'bg-yellow-300 hover:bg-yellow-200 text-gray-600 font-bold h-12 w-12 rounded-full flex justify-center items-center cursor-pointer'
            : 'bg-gray-300 hover:bg-yellow-200 text-gray-600 h-12 w-12 rounded-full flex justify-center items-center cursor-pointer'
        }
      >
        <input
          type="radio"
          className="appearance-none"
          name="rating"
          id="num6"
          value="6"
          onChange={handleChange}
          checked={selected === 6}
        />
        <label className="p-4 cursor-pointer select-none" htmlFor="num6">
          6
        </label>
      </div>
      <div
        className={
          selected === 7
            ? 'bg-yellow-300 hover:bg-yellow-200 text-gray-600 font-bold h-12 w-12 rounded-full flex justify-center items-center cursor-pointer'
            : 'bg-gray-300 hover:bg-yellow-200 text-gray-600 h-12 w-12 rounded-full flex justify-center items-center cursor-pointer'
        }
      >
        <input
          type="radio"
          className="appearance-none"
          name="rating"
          id="num7"
          value="7"
          onChange={handleChange}
          checked={selected === 7}
        />
        <label className="p-4 cursor-pointer select-none" htmlFor="num7">
          7
        </label>
      </div>
      <div
        className={
          selected === 8
            ? 'bg-yellow-300 hover:bg-yellow-200 text-gray-600 font-bold h-12 w-12 rounded-full flex justify-center items-center cursor-pointer'
            : 'bg-gray-300 hover:bg-yellow-200 text-gray-600 h-12 w-12 rounded-full flex justify-center items-center cursor-pointer'
        }
      >
        <input
          type="radio"
          className="appearance-none"
          name="rating"
          id="num8"
          value="8"
          onChange={handleChange}
          checked={selected === 8}
        />
        <label className="p-4 cursor-pointer select-none" htmlFor="num8">
          8
        </label>
      </div>
      <div
        className={
          selected === 9
            ? 'bg-yellow-300 hover:bg-yellow-200 text-gray-600 font-bold h-12 w-12 rounded-full flex justify-center items-center cursor-pointer'
            : 'bg-gray-300 hover:bg-yellow-200 text-gray-600 h-12 w-12 rounded-full flex justify-center items-center cursor-pointer'
        }
      >
        <input
          type="radio"
          className="appearance-none"
          name="rating"
          id="num9"
          value="9"
          onChange={handleChange}
          checked={selected === 9}
        />
        <label className="p-4 cursor-pointer select-none" htmlFor="num9">
          9
        </label>
      </div>
      <div
        className={
          selected === 10
            ? 'bg-yellow-300 hover:bg-yellow-200 text-gray-600 font-bold h-12 w-12 rounded-full flex justify-center items-center cursor-pointer'
            : 'bg-gray-300 hover:bg-yellow-200 text-gray-600 h-12 w-12 rounded-full flex justify-center items-center cursor-pointer'
        }
      >
        <input
          type="radio"
          className="appearance-none"
          name="rating"
          id="num10"
          value="10"
          onChange={handleChange}
          checked={selected === 10}
        />
        <label className="p-4 cursor-pointer select-none" htmlFor="num10">
          10
        </label>
      </div>
    </div>
  );
};

export default RatingSelect;
