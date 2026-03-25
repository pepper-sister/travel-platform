import { gql } from "@apollo/client";

export const UPLOAD_FILE = gql`
  mutation uplaodFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
