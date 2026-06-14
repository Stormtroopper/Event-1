export const typeDefs = `#graphql
type User {
    id: ID!
    name: String!
    email: String!
    isEmailVerified: Boolean!
    createdAt: String!
    updatedAt: String!
}
    type FileExtraction{
        id: ID!
        userId: ID!
        filePath: String!
        extractedText: String!
        createdAt: String!
        updatedAt: String!
    }
        type AuthPayload{
        users:[User!]!
        user(id:ID!):User
        extractions:[FileExtraction!]!
        }
        type Query{
        getExtraction:[FileExtraction!]!
        
        getExtractionById(id:ID!):FileExtraction
        getUsers:[User!]!
        getUserById(id:ID!):User
    },
    type Mutation{
        createUser(name: String!, email: String!,password:String!): User!
        updateUser(id: ID!, name: String, email: String): User!
        loginUser(email: String!, password: String!): AuthPayload!
        deleteUser(id: ID!): User!
        deleteExtraction(id: ID!): FileExtraction!
    }
    `