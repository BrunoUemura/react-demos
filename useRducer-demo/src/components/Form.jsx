import { useReducer, useRef } from "react";
import { FORM_ACTION_TYPES } from "../constants/formActionTypes";
import { formReducer, INITIAL_STATE } from "../reducers/formReducer";

export default function Form() {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const tagRef = useRef();

  const handleChange = (event) => {
    dispatch({
      type: FORM_ACTION_TYPES.UPDATE_INPUT,
      payload: {
        name: event.target.name,
        value: event.target.value,
      },
    });
  };

  const handleTags = () => {
    const tags = tagRef.current.value.split(",");
    tags.forEach((tag) => {
      dispatch({ type: FORM_ACTION_TYPES.ADD_TAG, payload: tag });
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Title"
          onChange={handleChange}
          name="title"
        />
        <input
          type="text"
          placeholder="Desc"
          onChange={handleChange}
          name="desc"
        />
        <input
          type="number"
          placeholder="Price"
          onChange={handleChange}
          name="price"
        />
        <p>Category:</p>
        <select onChange={handleChange} name="category">
          <option value="sneakers">Sneakers</option>
          <option value="tshirts">T-shirts</option>
          <option value="jeans">Jeans</option>
        </select>
        <p>Tags:</p>
        <textarea
          ref={tagRef}
          placeholder="Seperate tags with commas..."
        ></textarea>
        <button onClick={handleTags} type="button">
          Add Tags
        </button>
        <div className="tags">
          {state.tags.map((tag) => (
            <small
              onClick={() =>
                dispatch({ type: FORM_ACTION_TYPES.REMOVE_TAG, payload: tag })
              }
              key={tag}
            >
              {tag}
            </small>
          ))}
        </div>
        <div className="quantity">
          <button
            onClick={() => dispatch({ type: FORM_ACTION_TYPES.DECREASE })}
            type="button"
          >
            -
          </button>
          <span>Quantity ({state.quantity})</span>
          <button
            onClick={() => dispatch({ type: FORM_ACTION_TYPES.INCREASE })}
            type="button"
          >
            +
          </button>
        </div>
      </form>
    </div>
  );
}
