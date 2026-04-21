import { HttpResponse, graphql } from "msw";

const gql = graphql.link("http://mock.com/graphql");

export const apis = [
  gql.mutation("createTravelproduct", ({ variables }) => {
    const { name, remarks, contents, price, travelproductAddress, images } = variables.createTravelproductInput;

    return HttpResponse.json({
      data: {
        createTravelproduct: {
          name,
          remarks,
          contents,
          price,
          travelproductAddress,
          images,
          __typename: "Travelproduct",
        },
      },
    });
  }),
];
