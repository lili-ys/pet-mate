import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { Item, SanchaekContent, BtnContainer, ItemImage } from "./styled";
import {
  sanchaekLoadMorePostsAction,
  sanchaekLoadPostsRequestAction,
  sanchaekLoadPostDetailResetAction,
  sanchaekLoadMoreResetAction,
} from "../../reducers/sanchaek";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
const ContentList = () => {
  const [noMoreList, setNoMoreList] = useState();
  const {
    sanchaekPosts,
    sanchaekLoadPostsDone,
    sanchaekLoadMoreDone,
    sanchaekMorePosts,
  } = useSelector((state) => state.sanchaek);
  const dispatch = useDispatch();
  // const morePostsRef = useRef(1);

  useEffect(() => {
    dispatch(sanchaekLoadPostsRequestAction());
    console.log(sanchaekPosts);
  }, []);

  return (
    <>
      <SanchaekContent>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 4 }}
          >
            {sanchaekPosts &&
              sanchaekPosts.map((item) => (
                <Grid item xs={12} sm={6} md={3} key={item.id}>
                  <Item key={item.id}>
                    {item.image ? (
                      <ItemImage src={item.image} />
                    ) : (
                      <ItemImage src="../img/defaultimg1.png" />
                    )}
                    <div id="text_box">
                      <h2>{item.title}</h2>
                      {item.mapInfo && item.mapInfo.location && (
                        <span>{item.mapInfo.location}</span>
                      )}
                    </div>
                  </Item>
                </Grid>
              ))}
          </Grid>
        </Box>
        <BtnContainer>
          <span></span>
          <button>더보기</button>
        </BtnContainer>
      </SanchaekContent>
    </>
  );
};

export default ContentList;
