export const schema = gql`
  type User {
    id: Int!
    name: String
    email: String!
#    hashedPassword: String!
#    salt: String!
#    resetToken: String
#    resetTokenExpiresAt: DateTime
    roles: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    name: String
    email: String!
    # hashedPassword: String!
    # salt: String!
    # resetToken: String
    # resetTokenExpiresAt: DateTime
    roles: String!
  }

  input UpdateUserInput {
    name: String
    email: String
    # hashedPassword: String
    # salt: String
    # resetToken: String
    # resetTokenExpiresAt: DateTime
    roles: String
  }
`
