/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query fetchBoard($boardId: ID!) {\n    fetchBoard(boardId: $boardId) {\n      _id\n      writer\n      title\n      contents\n      youtubeUrl\n      likeCount\n      dislikeCount\n      images\n      boardAddress {\n        zipcode\n        address\n        addressDetail\n      }\n      user {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n": typeof types.FetchBoardDocument,
    "\n  query fetchBoards($endDate: DateTime, $startDate: DateTime, $search: String, $page: Int!) {\n    fetchBoards(endDate: $endDate, startDate: $startDate, search: $search, page: $page) {\n      _id\n      title\n      writer\n      createdAt\n    }\n  }\n": typeof types.FetchBoardsDocument,
    "\n  mutation deleteBoard($boardId: ID!) {\n    deleteBoard(boardId: $boardId)\n  }\n": typeof types.DeleteBoardDocument,
    "\n  query fetchUser($email: String!) {\n    fetchUser(email: $email) {\n      _id\n      email\n      name\n      picture\n      userPoint {\n        amount\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n": typeof types.FetchUserDocument,
    "\n  mutation loginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      accessToken\n    }\n  }\n": typeof types.LoginUserDocument,
    "\n  mutation createUser($createUserInput: CreateUserInput!) {\n    createUser(createUserInput: $createUserInput) {\n      _id\n      email\n    }\n  }\n": typeof types.CreateUserDocument,
    "\n  query fetchTravelproduct($travelproductId: ID!) {\n    fetchTravelproduct(travelproductId: $travelproductId) {\n      name\n      remarks\n      contents\n      price\n      tags\n      images\n      pickedCount\n      travelproductAddress {\n        lat\n        lng\n      }\n      seller {\n        _id\n        email\n        name\n        picture\n      }\n    }\n  }\n": typeof types.FetchTravelproductDocument,
    "\n  mutation deleteTravelproduct($travelproductId: ID!) {\n    deleteTravelproduct(travelproductId: $travelproductId)\n  }\n": typeof types.DeleteTravelproductDocument,
    "\n  query fetchTravelproducts($isSoldout: Boolean, $search: String, $page: Int) {\n    fetchTravelproducts(isSoldout: $isSoldout, search: $search, page: $page) {\n      _id\n      name\n      remarks\n      price\n      tags\n      images\n      pickedCount\n      seller {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n    }\n  }\n": typeof types.FetchTravelproductsDocument,
    "\n  mutation updateBoardComment(\n    $updateBoardCommentInput: UpdateBoardCommentInput!\n    $password: String\n    $boardCommentId: ID!\n  ) {\n    updateBoardComment(\n      updateBoardCommentInput: $updateBoardCommentInput\n      password: $password\n      boardCommentId: $boardCommentId\n    ) {\n      _id\n      writer\n      contents\n      rating\n      user {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n": typeof types.UpdateBoardCommentDocument,
    "\n  mutation updateTravelproductQuestion(\n    $updateTravelproductQuestionInput: UpdateTravelproductQuestionInput!\n    $travelproductQuestionId: ID!\n  ) {\n    updateTravelproductQuestion(\n      updateTravelproductQuestionInput: $updateTravelproductQuestionInput\n      travelproductQuestionId: $travelproductQuestionId\n    ) {\n      _id\n      contents\n      user {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n": typeof types.UpdateTravelproductQuestionDocument,
    "\n  mutation deleteBoardComment($password: String, $boardCommentId: ID!) {\n    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)\n  }\n": typeof types.DeleteBoardCommentDocument,
    "\n  mutation deleteTravelproductQuestion($travelproductQuestionId: ID!) {\n    deleteTravelproductQuestion(travelproductQuestionId: $travelproductQuestionId)\n  }\n": typeof types.DeleteTravelproductQuestionDocument,
    "\n  query fetchBoardComments($page: Int, $boardId: ID!) {\n    fetchBoardComments(page: $page, boardId: $boardId) {\n      _id\n      writer\n      contents\n      rating\n      user {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n": typeof types.FetchBoardCommentsDocument,
    "\n  query fetchTravelproductQuestions($page: Int, $travelproductId: ID!) {\n    fetchTravelproductQuestions(page: $page, travelproductId: $travelproductId) {\n      _id\n      contents\n      user {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n": typeof types.FetchTravelproductQuestionsDocument,
    "\n  mutation createBoardComment($createBoardCommentInput: CreateBoardCommentInput!, $boardId: ID!) {\n    createBoardComment(createBoardCommentInput: $createBoardCommentInput, boardId: $boardId) {\n      _id\n      writer\n      contents\n      rating\n      user {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n": typeof types.CreateBoardCommentDocument,
    "\n  mutation createTravelproductQuestion(\n    $createTravelproductQuestionInput: CreateTravelproductQuestionInput!\n    $travelproductId: ID!\n  ) {\n    createTravelproductQuestion(\n      createTravelproductQuestionInput: $createTravelproductQuestionInput\n      travelproductId: $travelproductId\n    ) {\n      _id\n      contents\n      user {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n": typeof types.CreateTravelproductQuestionDocument,
    "\n  mutation createBoard($createBoardInput: CreateBoardInput!) {\n    createBoard(createBoardInput: $createBoardInput) {\n      _id\n    }\n  }\n": typeof types.CreateBoardDocument,
    "\n  mutation updateBoard($updateBoardInput: UpdateBoardInput!, $password: String, $boardId: ID!) {\n    updateBoard(updateBoardInput: $updateBoardInput, password: $password, boardId: $boardId) {\n      _id\n      writer\n      title\n      contents\n      youtubeUrl\n      images\n      boardAddress {\n        zipcode\n        address\n        addressDetail\n      }\n    }\n  }\n": typeof types.UpdateBoardDocument,
    "\n  mutation uplaodFile($file: Upload!) {\n    uploadFile(file: $file) {\n      url\n    }\n  }\n": typeof types.UplaodFileDocument,
    "\n  mutation createTravelproduct($createTravelproductInput: CreateTravelproductInput!) {\n    createTravelproduct(createTravelproductInput: $createTravelproductInput) {\n      _id\n    }\n  }\n": typeof types.CreateTravelproductDocument,
    "\n  query fetchBoardsCount($endDate: DateTime, $startDate: DateTime, $search: String) {\n    fetchBoardsCount(endDate: $endDate, startDate: $startDate, search: $search)\n  }\n": typeof types.FetchBoardsCountDocument,
};
const documents: Documents = {
    "\n  query fetchBoard($boardId: ID!) {\n    fetchBoard(boardId: $boardId) {\n      _id\n      writer\n      title\n      contents\n      youtubeUrl\n      likeCount\n      dislikeCount\n      images\n      boardAddress {\n        zipcode\n        address\n        addressDetail\n      }\n      user {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n": types.FetchBoardDocument,
    "\n  query fetchBoards($endDate: DateTime, $startDate: DateTime, $search: String, $page: Int!) {\n    fetchBoards(endDate: $endDate, startDate: $startDate, search: $search, page: $page) {\n      _id\n      title\n      writer\n      createdAt\n    }\n  }\n": types.FetchBoardsDocument,
    "\n  mutation deleteBoard($boardId: ID!) {\n    deleteBoard(boardId: $boardId)\n  }\n": types.DeleteBoardDocument,
    "\n  query fetchUser($email: String!) {\n    fetchUser(email: $email) {\n      _id\n      email\n      name\n      picture\n      userPoint {\n        amount\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n": types.FetchUserDocument,
    "\n  mutation loginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      accessToken\n    }\n  }\n": types.LoginUserDocument,
    "\n  mutation createUser($createUserInput: CreateUserInput!) {\n    createUser(createUserInput: $createUserInput) {\n      _id\n      email\n    }\n  }\n": types.CreateUserDocument,
    "\n  query fetchTravelproduct($travelproductId: ID!) {\n    fetchTravelproduct(travelproductId: $travelproductId) {\n      name\n      remarks\n      contents\n      price\n      tags\n      images\n      pickedCount\n      travelproductAddress {\n        lat\n        lng\n      }\n      seller {\n        _id\n        email\n        name\n        picture\n      }\n    }\n  }\n": types.FetchTravelproductDocument,
    "\n  mutation deleteTravelproduct($travelproductId: ID!) {\n    deleteTravelproduct(travelproductId: $travelproductId)\n  }\n": types.DeleteTravelproductDocument,
    "\n  query fetchTravelproducts($isSoldout: Boolean, $search: String, $page: Int) {\n    fetchTravelproducts(isSoldout: $isSoldout, search: $search, page: $page) {\n      _id\n      name\n      remarks\n      price\n      tags\n      images\n      pickedCount\n      seller {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n    }\n  }\n": types.FetchTravelproductsDocument,
    "\n  mutation updateBoardComment(\n    $updateBoardCommentInput: UpdateBoardCommentInput!\n    $password: String\n    $boardCommentId: ID!\n  ) {\n    updateBoardComment(\n      updateBoardCommentInput: $updateBoardCommentInput\n      password: $password\n      boardCommentId: $boardCommentId\n    ) {\n      _id\n      writer\n      contents\n      rating\n      user {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n": types.UpdateBoardCommentDocument,
    "\n  mutation updateTravelproductQuestion(\n    $updateTravelproductQuestionInput: UpdateTravelproductQuestionInput!\n    $travelproductQuestionId: ID!\n  ) {\n    updateTravelproductQuestion(\n      updateTravelproductQuestionInput: $updateTravelproductQuestionInput\n      travelproductQuestionId: $travelproductQuestionId\n    ) {\n      _id\n      contents\n      user {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n": types.UpdateTravelproductQuestionDocument,
    "\n  mutation deleteBoardComment($password: String, $boardCommentId: ID!) {\n    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)\n  }\n": types.DeleteBoardCommentDocument,
    "\n  mutation deleteTravelproductQuestion($travelproductQuestionId: ID!) {\n    deleteTravelproductQuestion(travelproductQuestionId: $travelproductQuestionId)\n  }\n": types.DeleteTravelproductQuestionDocument,
    "\n  query fetchBoardComments($page: Int, $boardId: ID!) {\n    fetchBoardComments(page: $page, boardId: $boardId) {\n      _id\n      writer\n      contents\n      rating\n      user {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n": types.FetchBoardCommentsDocument,
    "\n  query fetchTravelproductQuestions($page: Int, $travelproductId: ID!) {\n    fetchTravelproductQuestions(page: $page, travelproductId: $travelproductId) {\n      _id\n      contents\n      user {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n": types.FetchTravelproductQuestionsDocument,
    "\n  mutation createBoardComment($createBoardCommentInput: CreateBoardCommentInput!, $boardId: ID!) {\n    createBoardComment(createBoardCommentInput: $createBoardCommentInput, boardId: $boardId) {\n      _id\n      writer\n      contents\n      rating\n      user {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n": types.CreateBoardCommentDocument,
    "\n  mutation createTravelproductQuestion(\n    $createTravelproductQuestionInput: CreateTravelproductQuestionInput!\n    $travelproductId: ID!\n  ) {\n    createTravelproductQuestion(\n      createTravelproductQuestionInput: $createTravelproductQuestionInput\n      travelproductId: $travelproductId\n    ) {\n      _id\n      contents\n      user {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n": types.CreateTravelproductQuestionDocument,
    "\n  mutation createBoard($createBoardInput: CreateBoardInput!) {\n    createBoard(createBoardInput: $createBoardInput) {\n      _id\n    }\n  }\n": types.CreateBoardDocument,
    "\n  mutation updateBoard($updateBoardInput: UpdateBoardInput!, $password: String, $boardId: ID!) {\n    updateBoard(updateBoardInput: $updateBoardInput, password: $password, boardId: $boardId) {\n      _id\n      writer\n      title\n      contents\n      youtubeUrl\n      images\n      boardAddress {\n        zipcode\n        address\n        addressDetail\n      }\n    }\n  }\n": types.UpdateBoardDocument,
    "\n  mutation uplaodFile($file: Upload!) {\n    uploadFile(file: $file) {\n      url\n    }\n  }\n": types.UplaodFileDocument,
    "\n  mutation createTravelproduct($createTravelproductInput: CreateTravelproductInput!) {\n    createTravelproduct(createTravelproductInput: $createTravelproductInput) {\n      _id\n    }\n  }\n": types.CreateTravelproductDocument,
    "\n  query fetchBoardsCount($endDate: DateTime, $startDate: DateTime, $search: String) {\n    fetchBoardsCount(endDate: $endDate, startDate: $startDate, search: $search)\n  }\n": types.FetchBoardsCountDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoard($boardId: ID!) {\n    fetchBoard(boardId: $boardId) {\n      _id\n      writer\n      title\n      contents\n      youtubeUrl\n      likeCount\n      dislikeCount\n      images\n      boardAddress {\n        zipcode\n        address\n        addressDetail\n      }\n      user {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n"): (typeof documents)["\n  query fetchBoard($boardId: ID!) {\n    fetchBoard(boardId: $boardId) {\n      _id\n      writer\n      title\n      contents\n      youtubeUrl\n      likeCount\n      dislikeCount\n      images\n      boardAddress {\n        zipcode\n        address\n        addressDetail\n      }\n      user {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoards($endDate: DateTime, $startDate: DateTime, $search: String, $page: Int!) {\n    fetchBoards(endDate: $endDate, startDate: $startDate, search: $search, page: $page) {\n      _id\n      title\n      writer\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query fetchBoards($endDate: DateTime, $startDate: DateTime, $search: String, $page: Int!) {\n    fetchBoards(endDate: $endDate, startDate: $startDate, search: $search, page: $page) {\n      _id\n      title\n      writer\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteBoard($boardId: ID!) {\n    deleteBoard(boardId: $boardId)\n  }\n"): (typeof documents)["\n  mutation deleteBoard($boardId: ID!) {\n    deleteBoard(boardId: $boardId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchUser($email: String!) {\n    fetchUser(email: $email) {\n      _id\n      email\n      name\n      picture\n      userPoint {\n        amount\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n"): (typeof documents)["\n  query fetchUser($email: String!) {\n    fetchUser(email: $email) {\n      _id\n      email\n      name\n      picture\n      userPoint {\n        amount\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation loginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      accessToken\n    }\n  }\n"): (typeof documents)["\n  mutation loginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      accessToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createUser($createUserInput: CreateUserInput!) {\n    createUser(createUserInput: $createUserInput) {\n      _id\n      email\n    }\n  }\n"): (typeof documents)["\n  mutation createUser($createUserInput: CreateUserInput!) {\n    createUser(createUserInput: $createUserInput) {\n      _id\n      email\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchTravelproduct($travelproductId: ID!) {\n    fetchTravelproduct(travelproductId: $travelproductId) {\n      name\n      remarks\n      contents\n      price\n      tags\n      images\n      pickedCount\n      travelproductAddress {\n        lat\n        lng\n      }\n      seller {\n        _id\n        email\n        name\n        picture\n      }\n    }\n  }\n"): (typeof documents)["\n  query fetchTravelproduct($travelproductId: ID!) {\n    fetchTravelproduct(travelproductId: $travelproductId) {\n      name\n      remarks\n      contents\n      price\n      tags\n      images\n      pickedCount\n      travelproductAddress {\n        lat\n        lng\n      }\n      seller {\n        _id\n        email\n        name\n        picture\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteTravelproduct($travelproductId: ID!) {\n    deleteTravelproduct(travelproductId: $travelproductId)\n  }\n"): (typeof documents)["\n  mutation deleteTravelproduct($travelproductId: ID!) {\n    deleteTravelproduct(travelproductId: $travelproductId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchTravelproducts($isSoldout: Boolean, $search: String, $page: Int) {\n    fetchTravelproducts(isSoldout: $isSoldout, search: $search, page: $page) {\n      _id\n      name\n      remarks\n      price\n      tags\n      images\n      pickedCount\n      seller {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query fetchTravelproducts($isSoldout: Boolean, $search: String, $page: Int) {\n    fetchTravelproducts(isSoldout: $isSoldout, search: $search, page: $page) {\n      _id\n      name\n      remarks\n      price\n      tags\n      images\n      pickedCount\n      seller {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateBoardComment(\n    $updateBoardCommentInput: UpdateBoardCommentInput!\n    $password: String\n    $boardCommentId: ID!\n  ) {\n    updateBoardComment(\n      updateBoardCommentInput: $updateBoardCommentInput\n      password: $password\n      boardCommentId: $boardCommentId\n    ) {\n      _id\n      writer\n      contents\n      rating\n      user {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n"): (typeof documents)["\n  mutation updateBoardComment(\n    $updateBoardCommentInput: UpdateBoardCommentInput!\n    $password: String\n    $boardCommentId: ID!\n  ) {\n    updateBoardComment(\n      updateBoardCommentInput: $updateBoardCommentInput\n      password: $password\n      boardCommentId: $boardCommentId\n    ) {\n      _id\n      writer\n      contents\n      rating\n      user {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateTravelproductQuestion(\n    $updateTravelproductQuestionInput: UpdateTravelproductQuestionInput!\n    $travelproductQuestionId: ID!\n  ) {\n    updateTravelproductQuestion(\n      updateTravelproductQuestionInput: $updateTravelproductQuestionInput\n      travelproductQuestionId: $travelproductQuestionId\n    ) {\n      _id\n      contents\n      user {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n"): (typeof documents)["\n  mutation updateTravelproductQuestion(\n    $updateTravelproductQuestionInput: UpdateTravelproductQuestionInput!\n    $travelproductQuestionId: ID!\n  ) {\n    updateTravelproductQuestion(\n      updateTravelproductQuestionInput: $updateTravelproductQuestionInput\n      travelproductQuestionId: $travelproductQuestionId\n    ) {\n      _id\n      contents\n      user {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteBoardComment($password: String, $boardCommentId: ID!) {\n    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)\n  }\n"): (typeof documents)["\n  mutation deleteBoardComment($password: String, $boardCommentId: ID!) {\n    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteTravelproductQuestion($travelproductQuestionId: ID!) {\n    deleteTravelproductQuestion(travelproductQuestionId: $travelproductQuestionId)\n  }\n"): (typeof documents)["\n  mutation deleteTravelproductQuestion($travelproductQuestionId: ID!) {\n    deleteTravelproductQuestion(travelproductQuestionId: $travelproductQuestionId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoardComments($page: Int, $boardId: ID!) {\n    fetchBoardComments(page: $page, boardId: $boardId) {\n      _id\n      writer\n      contents\n      rating\n      user {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n"): (typeof documents)["\n  query fetchBoardComments($page: Int, $boardId: ID!) {\n    fetchBoardComments(page: $page, boardId: $boardId) {\n      _id\n      writer\n      contents\n      rating\n      user {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchTravelproductQuestions($page: Int, $travelproductId: ID!) {\n    fetchTravelproductQuestions(page: $page, travelproductId: $travelproductId) {\n      _id\n      contents\n      user {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n"): (typeof documents)["\n  query fetchTravelproductQuestions($page: Int, $travelproductId: ID!) {\n    fetchTravelproductQuestions(page: $page, travelproductId: $travelproductId) {\n      _id\n      contents\n      user {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createBoardComment($createBoardCommentInput: CreateBoardCommentInput!, $boardId: ID!) {\n    createBoardComment(createBoardCommentInput: $createBoardCommentInput, boardId: $boardId) {\n      _id\n      writer\n      contents\n      rating\n      user {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n"): (typeof documents)["\n  mutation createBoardComment($createBoardCommentInput: CreateBoardCommentInput!, $boardId: ID!) {\n    createBoardComment(createBoardCommentInput: $createBoardCommentInput, boardId: $boardId) {\n      _id\n      writer\n      contents\n      rating\n      user {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createTravelproductQuestion(\n    $createTravelproductQuestionInput: CreateTravelproductQuestionInput!\n    $travelproductId: ID!\n  ) {\n    createTravelproductQuestion(\n      createTravelproductQuestionInput: $createTravelproductQuestionInput\n      travelproductId: $travelproductId\n    ) {\n      _id\n      contents\n      user {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n"): (typeof documents)["\n  mutation createTravelproductQuestion(\n    $createTravelproductQuestionInput: CreateTravelproductQuestionInput!\n    $travelproductId: ID!\n  ) {\n    createTravelproductQuestion(\n      createTravelproductQuestionInput: $createTravelproductQuestionInput\n      travelproductId: $travelproductId\n    ) {\n      _id\n      contents\n      user {\n        _id\n        email\n        name\n        picture\n        createdAt\n        updatedAt\n        deletedAt\n      }\n      createdAt\n      updatedAt\n      deletedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createBoard($createBoardInput: CreateBoardInput!) {\n    createBoard(createBoardInput: $createBoardInput) {\n      _id\n    }\n  }\n"): (typeof documents)["\n  mutation createBoard($createBoardInput: CreateBoardInput!) {\n    createBoard(createBoardInput: $createBoardInput) {\n      _id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateBoard($updateBoardInput: UpdateBoardInput!, $password: String, $boardId: ID!) {\n    updateBoard(updateBoardInput: $updateBoardInput, password: $password, boardId: $boardId) {\n      _id\n      writer\n      title\n      contents\n      youtubeUrl\n      images\n      boardAddress {\n        zipcode\n        address\n        addressDetail\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation updateBoard($updateBoardInput: UpdateBoardInput!, $password: String, $boardId: ID!) {\n    updateBoard(updateBoardInput: $updateBoardInput, password: $password, boardId: $boardId) {\n      _id\n      writer\n      title\n      contents\n      youtubeUrl\n      images\n      boardAddress {\n        zipcode\n        address\n        addressDetail\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation uplaodFile($file: Upload!) {\n    uploadFile(file: $file) {\n      url\n    }\n  }\n"): (typeof documents)["\n  mutation uplaodFile($file: Upload!) {\n    uploadFile(file: $file) {\n      url\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createTravelproduct($createTravelproductInput: CreateTravelproductInput!) {\n    createTravelproduct(createTravelproductInput: $createTravelproductInput) {\n      _id\n    }\n  }\n"): (typeof documents)["\n  mutation createTravelproduct($createTravelproductInput: CreateTravelproductInput!) {\n    createTravelproduct(createTravelproductInput: $createTravelproductInput) {\n      _id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoardsCount($endDate: DateTime, $startDate: DateTime, $search: String) {\n    fetchBoardsCount(endDate: $endDate, startDate: $startDate, search: $search)\n  }\n"): (typeof documents)["\n  query fetchBoardsCount($endDate: DateTime, $startDate: DateTime, $search: String) {\n    fetchBoardsCount(endDate: $endDate, startDate: $startDate, search: $search)\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;