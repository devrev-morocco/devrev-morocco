import React, { useRef, useState } from 'react';
import Link from 'next/link';
import {
  JoinCommunityContainer,
  ShowcaseContainer,
  IconsShowcaseContainer,
  IconShowcase,
  SubscribeContainer,
  SubForm,
  SubInput,
  SubButton,
  SubButtonContainer,
  SubMessageBox
} from './styles';
import {
  YouTubeSvg,
  FacebookSvg,
  TwitchSvg,
  InstagramSvg,
  RedditSvg,
  TwitterSvg,
  SpotifySvg,
  XSvg,
  CheckedSvg,
  Loader
} from '../../components/svgs';
import { Timer } from '../../utils';

const JoinCommunity = () => {
  const inputRef = useRef(null);

  const [Message, setMessage] = useState({
    msg: '',
    isError: false,
    isActive: false
  });
  const [Loading, setLoading] = useState(false);
  const [FocusOn, setFocusOn] = useState(false);

  const Subscribe = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (inputRef.current.value) {
      const res = await fetch('/api/subscribe', {
        body: JSON.stringify({
          email: inputRef.current.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      });

      const { error } = await res.json();

      if (error) {
        HandleMessage(error, true);
        setLoading(false);
        return;
      }

      inputRef.current.value = '';
      let msg;
      if (res.status === 200)
        msg = 'This email address has already subscribed to the newsletter.';
      if (res.status === 201)
        msg = 'Success! You are now subscribed to the newsletter.';
      if (res.status === 500)
        // Report the error message
        msg = 'Something went wrong, Please Try again!';
      HandleMessage(msg, false);
      setLoading(false);
    } else {
      setLoading(false);
      return;
    }
  };

  const HandleCloseMessage = () => {
    setMessage((prev) => {
      return {
        msg: prev.msg,
        isError: prev.isError,
        isActive: false
      };
    });
    return;
  };

  const HandleMessage = (msg, isError) => {
    setMessage({
      msg: msg,
      isError: isError,
      isActive: true
    });
    Timer(6000).then(() => {
      HandleCloseMessage();
    });
  };

  const HandleFocus = () => setFocusOn((prev) => !prev);

  const { msg, isError, isActive } = Message;

  return (
    <JoinCommunityContainer as="section">
      <ShowcaseContainer>
        <h1 className="Showcase-title">Join The Community</h1>
        <div className="Showcase-line"></div>
        <IconsShowcaseContainer as="ul" className="icons_Showcase_container">
          <IconShowcase as="li">
            <Link
              href="https://www.youtube.com/channel/UCohUHFN_a54IJz2qVSEgf4g"
              passHref
            >
              <a
                aria-label="YouTube"
                rel="noreferrer"
                target="_blank"
                className="icon_wrap icon-yt"
              >
                <YouTubeSvg />
              </a>
            </Link>
          </IconShowcase>
          <IconShowcase as="li">
            <Link href="https://www.facebook.com/devrevmorocco/" passHref>
              <a
                aria-label="Facebook"
                rel="noreferrer"
                target="_blank"
                className="icon_wrap"
              >
                <FacebookSvg />
              </a>
            </Link>
          </IconShowcase>
          <IconShowcase as="li">
            <Link href="https://twitch.com/devrevmorocco" passHref>
              <a
                aria-label="Twitch"
                rel="noreferrer"
                target="_blank"
                className="icon_wrap icon-tw"
              >
                <TwitchSvg />
              </a>
            </Link>
          </IconShowcase>
          <IconShowcase as="li">
            <Link href="https://www.instagram.com/devrevmorocco/" passHref>
              <a
                aria-label="Instagram"
                rel="noreferrer"
                target="_blank"
                className="icon_wrap"
              >
                <InstagramSvg />
              </a>
            </Link>
          </IconShowcase>
          <IconShowcase as="li">
            <Link href="https://www.reddit.com/r/DevRevMorocco/" passHref>
              <a
                aria-label="Reddit"
                rel="noreferrer"
                target="_blank"
                className="icon_wrap"
              >
                <RedditSvg />
              </a>
            </Link>
          </IconShowcase>
          <IconShowcase as="li">
            <Link href="https://twitter.com/devrevmorocco" passHref>
              <a
                aria-label="Twitter"
                rel="noreferrer"
                target="_blank"
                className="icon_wrap"
              >
                <TwitterSvg />
              </a>
            </Link>
          </IconShowcase>
          <IconShowcase as="li">
            <Link
              href="https://open.spotify.com/show/2AEvg78E02j5Kux9ncQwUH"
              passHref
            >
              <a
                aria-label="Spotify"
                rel="noreferrer"
                target="_blank"
                className="icon_wrap"
              >
                <SpotifySvg />
              </a>
            </Link>
          </IconShowcase>
        </IconsShowcaseContainer>
        <SubscribeContainer id="subscribe">
          <div className="Showcase-title sub">Subscribe to the newsletter</div>
          <div className="Showcase-line"></div>
          <div className="sub-txt">
            Get emails from me about tech, early access to new episodes and live
            events.
          </div>
          <SubForm Focus={FocusOn} as="form" onSubmit={Subscribe}>
            <SubInput
              as="input"
              name="email"
              placeholder="you@apple.com"
              ref={inputRef}
              type="email"
              onFocus={HandleFocus}
              onBlur={HandleFocus}
            />

            <SubMessageBox isError={isError} isActive={isActive}>
              <div className="msg-state">
                {isError ? (
                  <div className="msg-icon">
                    <div className="sub-icon sub-icon--alert">
                      <XSvg height={16} width={16} />
                    </div>
                  </div>
                ) : (
                  <div className="msg-icon">
                    <div className="sub-icon sub-icon--success">
                      <CheckedSvg height={25} width={25} />
                    </div>
                  </div>
                )}
              </div>
              <div className="sub-msg-area">{msg}</div>
              <div
                role="button"
                tabIndex={0}
                onKeyPress={HandleCloseMessage}
                onClick={HandleCloseMessage}
                className="close-msg-btn"
              >
                <XSvg height={11} width={11} />
              </div>
            </SubMessageBox>
            {Loading && <Loader />}
            <SubButtonContainer as="button" type="submit">
              <SubButton>Subscribe</SubButton>
            </SubButtonContainer>
          </SubForm>
        </SubscribeContainer>
      </ShowcaseContainer>
    </JoinCommunityContainer>
  );
};

export default JoinCommunity;
