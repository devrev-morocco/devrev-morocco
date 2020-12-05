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
  CheckedSvg
} from '../../components/svgs';
import { Timer } from '../../utils';

const JoinCommunity = () => {
  const inputRef = useRef(null);

  const [Message, setMessage] = useState({
    msg: '',
    isError: false,
    active: false
  });

  const [FocusOn, setFocusOn] = useState(false);

  // const subscribe = async (e) => {
  //   e.preventDefault();

  //   console.log('inputRef.current :>> ', inputRef.current);
  //   console.log('inputRef :>> ', inputRef.current.value);
  // };

  const subscribe = async (e) => {
    e.preventDefault();

    console.log('inputRef.current.value :>> ', inputRef.current.value);

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

    console.log('error :>> ', error);

    if (error) {
      HandleMessage(error, true);
      return;
    }

    // Clear the input value and show a success message.
    inputRef.current.value = '';
    const msg = 'Success! You are now subscribed to the newsletter.';
    HandleMessage(msg, false);
  };

  const HandleCloseMessage = () => {
    setMessage((prev) => {
      return {
        msg: prev.msg,
        isError: false,
        active: false
      };
    });
    return;
  };

  const HandleMessage = (msg, isError) => {
    setMessage({
      msg: msg,
      isError: isError,
      active: true
    });
    Timer(5000).then(() => {
      HandleCloseMessage();
    });
  };

  const HandleFocus = () => setFocusOn((prev) => !prev);

  const { msg, isError, active } = Message;

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
        <SubscribeContainer>
          <div className="Showcase-line"></div>
          <div className="Showcase-title sub">Subscribe to the newsletter</div>
          <div className="sub-txt">
            Get emails from me about tech, early access to new episodes and live
            events.
          </div>
          <SubForm Focus={FocusOn} as="form" onSubmit={subscribe}>
            <SubInput
              as="input"
              name="email"
              placeholder="you@apple.com"
              ref={inputRef}
              type="email"
              onFocus={HandleFocus}
              onBlur={HandleFocus}
            />

            <SubMessageBox isError={isError} Active={active}>
              <div className="msg-state">
                {isError ? (
                  <div className="msg-alert">
                    <XSvg height={25} width={25} />
                  </div>
                ) : (
                  <div className="msg-success">
                    <CheckedSvg height={25} width={25} />
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
                <XSvg height={16} width={16} />
              </div>
            </SubMessageBox>
            <SubButtonContainer>
              <SubButton as="button" type="submit">
                Subscribe
              </SubButton>
            </SubButtonContainer>
          </SubForm>
        </SubscribeContainer>
      </ShowcaseContainer>
    </JoinCommunityContainer>
  );
};

export default JoinCommunity;
