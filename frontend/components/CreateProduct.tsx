import useForm from "@/lib/useForm";

import Form from "./styles/Form";

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm();

  function submit(e: any) {
    e.preventDefault();
    console.log(inputs);
  }

  return (
    <div>
      <Form onSubmit={submit}>
        <fieldset>
          <label htmlFor='image'>
            Name
            <input
              type='file'
              id='image'
              name='image'
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor='name'>
            Name
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Name'
              value={inputs.name ?? ""}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor='price'>
            Price
            <input
              type='number'
              id='price'
              name='price'
              placeholder='Price'
              value={inputs.price ?? ""}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor='description'>
            Description
            <textarea
              id='description'
              name='description'
              placeholder='Description'
              value={inputs.description ?? ""}
              onChange={handleChange}
              required
            />
          </label>
          <button type='submit'>+ Add Product</button>
        </fieldset>
      </Form>
    </div>
  );
}
