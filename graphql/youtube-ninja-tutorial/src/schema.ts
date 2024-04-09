// graphql types => Int, String, Float, Boolean, ID
// for array types => [String]
// to make a field required use => !
// [String!]! => means that the array cannot be null and also its elements cannot be null too
// the Query type is mandatory where it defines the entry points to the graph and what should be returned

export const typeDefs = `#graphql

	type Game {
		id: ID!
		title: String!
		platform: [String!]!
	}

	type Review {
		id: ID!
		rating: Int!
		content: String!
	}

	type Author {
		id: ID!
		name: String!
		verified: Boolean!
	}

	type Query {
		reviews: [Reviews]
		games: [Game]
		authors: [Author]
	}

`;
