import CreateVoucherUI from "@/app/voucher/new/_components";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ApolloProvider } from "@apollo/client/react";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from "cross-fetch";
import { useRouter } from "next/navigation";
import React from "react";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
  useSearchParams: jest.fn().mockReturnValue({
    get: jest.fn().mockReturnValue(null),
  }),
}));

it("게시글 잘 등록되는지 테스트하자!", async () => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: "http://mock.com/graphql",
      fetch,
    }),
    cache: new InMemoryCache(),
  });

  render(
    <ApolloProvider client={client}>
      <CreateVoucherUI />
    </ApolloProvider>,
  );

  fireEvent.change(screen.getByRole("input-name"), {
    target: { value: "상품명" },
  });

  fireEvent.change(screen.getByRole("input-remarks"), {
    target: { value: "한줄요약" },
  });

  fireEvent.change(screen.getByRole("input-price"), {
    target: { value: "150000" },
  });

  fireEvent.click(screen.getByRole("submit-button"));

  await waitFor(() => {
    const router = useRouter();
    expect(router.push).toHaveBeenCalled();
  });
});
