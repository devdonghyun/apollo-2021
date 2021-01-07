import { gql, useMutation } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LIKE_MOVIE = gql `
  mutation likeMovie($id: Int!, $isLiked: Boolean!) {
    toggleLikeMovie(id: $id, isLiked: $isLiked) @client
  }
`

const Container = styled.div`
   height: 380px;
   width: 100%;
   box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
   border-radius: 7px;
 `;

 const Poster = styled.div`
   background-image: url(${props => props.bg});
   height: 100%;
   width: 100%;
   background-size: cover;
   background-position: center center;
 `;

 const ToggleLike = styled.button`
  background-color: transparent;
  border: transparent;
  font-size: 20px;
`;


 export default ({ id, bg, isLiked }) => {
   const [toggleLikeMovie] = useMutation(LIKE_MOVIE, { variables: { id, isLiked }});
   return (
      <Container>
        <Link to={`/${id}`}>
          <Poster bg={bg} />
        </Link>
        <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
        <ToggleLike onClick={toggleLikeMovie}>{isLiked ? "👎" : "👍"}</ToggleLike>
      </Container>
    );
 }



// export default ({id}) => (
//     <div>
//         <Link to = {`/${id}`}>{id}</Link>
//     </div>
// );