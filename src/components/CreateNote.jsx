import React from "react";

function CreateNote() {
  return (
    <div className="container">
      <h3>Create a Note</h3>
      <form>
        <div className="form-group mb-3">
          <input
            name="title"
            autoComplete="off"
            type="text"
            className="form-control"
            placeholder="note title"
          />
        </div>
        <div>
          <textarea
            placeholder="note content"
            className="form-control mb-3"
            autoComplete="off"
          />
        </div>

        <button type="button" name="content" className="btn btn-success">
          add note
        </button>
      </form>
    </div>
  );
}

export default CreateNote;
