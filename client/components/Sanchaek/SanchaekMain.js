import Link from "next/link";
import { SanchaekContainer, SanchaekBanner } from "./styled";
import ContentList from "./ContentList";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import {
  sanchaekLoadPostsRequestAction,
  sanchaekPostResetAction,
} from "../../reducers/sanchaek";
import { useEffect } from "react";

const SanchaekMain = () => {
  const { me } = useSelector((state) => state.user);
  const { sanchaekAddPostDone } = useSelector((state) => state.sanchaek);
  const dispatch = useDispatch();

  const goToNew = () => {
    if (!me) {
      Router.replace("/login");
    } else {
      if (window.confirm("글 작성하러 가시겠습니까?")) {
        Router.replace("/sanchaek/new");
      }
    }
  };

  // useEffect(() => {
  //   dispatch(sanchaekLoadPostsRequestAction());
  // }, []);

  useEffect(() => {
    if (sanchaekAddPostDone) {
      dispatch(sanchaekPostResetAction());
    }
  }, [sanchaekAddPostDone]);

  return (
    <SanchaekContainer>
      <SanchaekBanner onClick={goToNew}>
        <img src="../img/sanchaekbanner.png" />
      </SanchaekBanner>
      <ContentList />
    </SanchaekContainer>
  );
};

export default SanchaekMain;
