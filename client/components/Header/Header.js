import Link from "next/link";
import Router from "next/router";
import React, {
  useCallback,
  useEffect,
  useState,
  useLayoutEffect,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../../reducers/user";
import {
  NavContainer,
  Tab,
  Input,
  AuthTab,
  ToggleMenuWrapper,
  SanchaekWrapper,
  CommunityWrapper,
} from "./styled";
import { useRouter } from "next/router";

const Header = () => {
  const canUseDOM = typeof window !== "undefined";
  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;
  const router = useRouter();
  const currentPath = router.pathname;
  const [pathCheck, setPathCheck] = useState(currentPath);
  const [inputVal, setInputVal] = useState("");
  const [visibile, setVisibile] = useState(false);
  const [toggleVisible, setToggleVisible] = useState("none");

  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

  useIsomorphicLayoutEffect(() => {
    if (pathCheck.includes("sanchaek")) {
      setPathCheck("sanchaek");
    } else if (pathCheck.includes("community")) {
      setPathCheck("community");
    }
  }, [pathCheck]);

  const logOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  const handleValChange = (event) => {
    if (event.target.value !== "") {
      setVisibile(true);
    } else {
      setVisibile(false);
    }
    setInputVal(event.target.value);
  };

  const clearInputVal = (e) => {
    e.preventDefault();
    setInputVal("");
    setVisibile(false);
  };

  const handleToggleVisible = () => {
    if (toggleVisible === "none") {
      setToggleVisible("block");
    } else {
      setToggleVisible("none");
    }
  };

  return (
    <>
      <NavContainer>
        <div id="menu_left">
          <div id="logo_wrapper">
            <Link href="/" passHref>
              <a>
                <div id="logo"></div>
              </a>
            </Link>
          </div>
          <ul id="lnb">
            <li>
              <Tab>
                <Link href="/sanchaek" passHref>
                  <SanchaekWrapper path={pathCheck}>산책메이트</SanchaekWrapper>
                </Link>
              </Tab>
            </li>
            <li>
              <Tab>
                <Link href="/community" passHref>
                  <CommunityWrapper path={pathCheck}>커뮤니티</CommunityWrapper>
                </Link>
              </Tab>
            </li>
          </ul>
        </div>
        <div id="menu_right">
          <form>
            <Input
              placeholder="검색어를 입력하세요"
              onChange={handleValChange}
              value={inputVal}
            />
            {visibile && (
              <button className="cancel_btn" onClick={clearInputVal}>
                <img src="../img/cancel-btn.png" />
              </button>
            )}
          </form>
          <ul id="gnb">
            {me ? (
              <>
                <AuthTab>
                  <Link href="/profile" passHref>
                    <a>프로필</a>
                  </Link>
                </AuthTab>
                <AuthTab>
                  <span onClick={logOut}>로그아웃</span>
                </AuthTab>
              </>
            ) : (
              <>
                <AuthTab>
                  <Link href="/login" passHref>
                    <a>로그인</a>
                  </Link>
                </AuthTab>
                <AuthTab>
                  <Link href="/signup" passHref>
                    <a>회원가입</a>
                  </Link>
                </AuthTab>
              </>
            )}
          </ul>
        </div>

        {/* toggle menu */}
        <ToggleMenuWrapper display={toggleVisible}>
          <div id="toggle_btn" onClick={handleToggleVisible}>
            <img src="../img/toggle-menu-btn.png" alt="메뉴" />
          </div>
          <div id="toggle_menu">
            <div id="close_btn" onClick={handleToggleVisible}>
              <img src="../img/close-btn.png" alt="메뉴" />
            </div>
            <form id="search_input">
              <Input
                placeholder="검색어를 입력하세요"
                onChange={handleValChange}
                value={inputVal}
              />
              {visibile && (
                <button className="toggle_cancel_btn" onClick={clearInputVal}>
                  <img src="../img/cancel-btn.png" />
                </button>
              )}
            </form>
            <div id="menu_list">
              <ul>
                <li>
                  <Tab>
                    <Link href="/sanchaek" passHref>
                      <SanchaekWrapper>산책메이트</SanchaekWrapper>
                    </Link>
                  </Tab>
                </li>
                <li>
                  <Tab>
                    <Link href="/community" passHref>
                      <CommunityWrapper>커뮤니티</CommunityWrapper>
                    </Link>
                  </Tab>
                </li>
                {me ? (
                  <>
                    <AuthTab>
                      <Link href="/profile" passHref>
                        프로필
                      </Link>
                    </AuthTab>
                    <AuthTab>
                      <span onClick={logOut}>로그아웃</span>
                    </AuthTab>
                  </>
                ) : (
                  <>
                    <AuthTab>
                      <Link href="/login" passHref>
                        <a>로그인</a>
                      </Link>
                    </AuthTab>
                    <AuthTab>
                      <Link href="/signup" passHref>
                        <a>회원가입</a>
                      </Link>
                    </AuthTab>
                  </>
                )}
              </ul>
            </div>
          </div>
        </ToggleMenuWrapper>
      </NavContainer>
    </>
  );
};

export default Header;
