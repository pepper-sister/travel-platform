import { HttpResponse, graphql } from "msw";

const gql = graphql.link("http://mock.com/graphql");

export const apis = [
  gql.mutation("createTravelproduct", ({ variables }) => {
    const { _id } = variables.createTravelproductInput;

    return HttpResponse.json({
      data: {
        createTravelproduct: {
          _id,
          __typename: "Travelproduct",
        },
      },
    });
  }),
];
