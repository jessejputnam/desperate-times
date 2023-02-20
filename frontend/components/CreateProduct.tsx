import useForm from "@/lib/useForm";
import gql from "graphql-tag";
import { DocumentNode } from "graphql";
import { useMutation } from "@apollo/client";

import Form from "./styles/Form";
import DisplayError from "./ErrorMessage";

const CREATE_PRODUCT_MUTATION: DocumentNode = gql`
  mutation CREATE_PRODUCT_MUTATION(
    # Which variables ar getting passed in? and what types are they?
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      price
      description
      name
    }
  }
`;

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm();

  async function submit(e: any) {
    e.preventDefault();
    console.log(inputs);
    const res = await createProduct();
    console.log(res);
  }

  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: inputs
    }
  );

  return (
    <div>
      <Form onSubmit={submit}>
        <DisplayError error={error} />
        <fieldset disabled={loading} aria-busy={loading}>
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
