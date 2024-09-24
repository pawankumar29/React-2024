import { useContext, useRef } from "react";
import { facebookContext } from "../store/facebbok_store";
import { Form as RouterForm, redirect } from "react-router-dom";

const Form = () => {
  let titleRef = useRef();
  let textRef = useRef();

  const { add, postArray } = useContext(facebookContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: titleRef.current.value,
      text: textRef.current.value,
      userId: Date.now(),
    };
    console.log("sdfdsfdsfdsf" + add);
    add(formData);

    console.log("Form Data Submitted:", formData);

    // Clear form after submission if needed
    titleRef.current.value = "";
    textRef.current.value = "";
  };

  return (
    <RouterForm method="POST">
      <div className="mb-3">
        <label htmlFor="titleInput" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="titleInput"
          placeholder="Enter title"
          name="title"
          ref={titleRef}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="textInput" className="form-label">
          Text
        </label>
        <textarea
          className="form-control"
          id="textInput"
          rows="3"
          placeholder="Enter text"
          name="body"
          ref={textRef}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </RouterForm>
  );
};

export async function CreatePostAction(data) {

  console.log("inside action");
  const formData = await data.request.formData();
  console.log(formData);

  const postData = Object.fromEntries(formData);
  console.log(postData);

 // add(postData);
  // Clear form after submission if needed
  
  return redirect("/");
}

export default Form;
