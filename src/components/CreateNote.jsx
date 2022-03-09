import { useState } from "react";

function CreateNote() {
  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <div className="container">
      <h3>Create a Note</h3>
      <form>
        <div className="form-group mb-3">
          <input
            value={input.title}
            name="title"
            autoComplete="off"
            type="text"
            className="form-control"
            placeholder="note title"
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            placeholder="note content"
            className="form-control mb-3"
            autoComplete="off"
            onChange={handleChange}
            name="content"
            value={input.content}
          />
        </div>

        <button
          type="button"
          name="content"
          className="btn btn-success"
          onClick={handleClick}
        >
          add note
        </button>
      </form>
    </div>
  );
}

export default CreateNote;
