import gql from "gql";

gql`
  query getBooksQuery {
    books {
      title
      author
    }
  }
`;

gql`
  query getUserInformation($input: String!) {
    getUserInformation(userId: $input) {
      status {
        message
        success
      }
      user {
        id
        username
        email
      }
    }
  }
`;

gql`
  mutation storeUserInformation($storeUserInput: StoreUserInput!) {
    storeUserInformation(storeUserInput: $storeUserInput) {
      status {
        success
        message
      }
      user {
        id
        username
        email
      }
    }
  }
`;
