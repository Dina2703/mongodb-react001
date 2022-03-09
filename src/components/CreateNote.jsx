import { useState } from "react";

export default function CreateNote() {
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
  };
  return (
    <div className="container">
      <h3>Create a Note</h3>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> e11ec6dcddfb1fcc1a5847fd2fd5044cefa86648
      <form>
        <div className="form-group mb-3">
          <input
            name="title"
<<<<<<< HEAD
=======
            value={input.title}
>>>>>>> e11ec6dcddfb1fcc1a5847fd2fd5044cefa86648
            autoComplete="off"
            type="text"
            className="form-control"
            placeholder="note title"
<<<<<<< HEAD
=======
            onChange={handleChange}
>>>>>>> e11ec6dcddfb1fcc1a5847fd2fd5044cefa86648
          />
        </div>
        <div>
          <textarea
            placeholder="note content"
            className="form-control mb-3"
            autoComplete="off"
<<<<<<< HEAD
          />
        </div>

        <button type="button" name="content" className="btn btn-success">
          add note
        </button>
      </form>
>>>>>>> parent of b4882f1 (FrontEnd: setup handleChange and handleClick)
=======
            onChange={handleChange}
            name="content"
            value={input.content}
          />
        </div>

        <button type="button" className="btn btn-success" onClick={handleClick}>
          add note
        </button>
      </form>
>>>>>>> e11ec6dcddfb1fcc1a5847fd2fd5044cefa86648
    </div>
  );
}
