import { ProductsProps } from "@/interfaces";
import StyledItem from "./styles/StyledItem";
import Link from "next/link";
import Title from "./styles/Title";
import PriceTag from "./styles/PriceTag";
import formatMoney from "@/lib/formatMoney";
import styled from "styled-components";

const Description = styled.p`
  text-align: center;
`;

export default function Product({ product }: ProductsProps) {
  return (
    <StyledItem>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />

      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <Description>{product.description}</Description>
    </StyledItem>
  );
}
