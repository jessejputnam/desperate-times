import Product from "./Product";

import { DocumentNode, gql, useQuery } from "@apollo/client";
import styled from "styled-components";

const ALL_PRODUCTS_QUERY: DocumentNode = gql`
  query ALL_PRODUCTS_QUERY {
    products {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const StyledProductsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function Products() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);

  if (loading) return <p>Loaidng...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <StyledProductsList>
        {data.products.map((product: any) => (
          <Product key={product.id} product={product} />
        ))}
      </StyledProductsList>
    </div>
  );
}
