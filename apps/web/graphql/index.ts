import gql from "gql";

const getBooksQuery = gql`
  query getBooksQuery {
    books {
      title
      author
    }
  }
`;

const loginMutation = gql`
  mutation login($input: loginRequest!) {
    login(loginRequest: $input) {
      status {
        success
        message
      }
      token
      user {
        id
        name
        email
        emailVerified
        image
      }
    }
  }
`;
