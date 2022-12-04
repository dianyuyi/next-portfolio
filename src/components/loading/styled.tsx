import tw, { styled } from 'twin.macro'

export const LoadingBox = styled.div`
  ${tw`w-screen h-screen z-[9999] bg-white opacity-50 fixed top-0 left-0`}

  .box {
    ${tw`w-full max-w-[300px] justify-center items-center text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
  }

  #l-left {
    transform-origin: left center;
    animation: name-l 2s cubic-bezier(0.2, 0, 0.6, 0.5) 4s both;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  #l-bottom {
    transform-origin: left top;
    animation: name-l-b 2s cubic-bezier(0.2, 0, 0.6, 0.5) 4s both;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  #o {
    transform-origin: left center;
    animation: name-o 2s cubic-bezier(0.2, 0, 0.6, 0.5) 4s both;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  #x {
    transform-origin: left center;
    animation: name-x 2s cubic-bezier(0.2, 0, 0.6, 0.5) 4s both;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  #x #x-center {
    animation: name-x-c 2s cubic-bezier(0.2, 0, 0.6, 0.5) 4s both;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  #i-point {
    transform-origin: left center;
    animation: name-i-p 2s cubic-bezier(0.2, 0, 0.6, 0.5) 4s both;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  #i-line {
    transform-origin: left center;
    animation: name-i-l 2s cubic-bezier(0.2, 0, 0.6, 0.5) 4s both;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes name-l {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-80px) scaleY(0.65);
    }
  }

  @keyframes name-l-b {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translate(-80px, -10px) scale(0.3, 0.9);
    }
  }

  @keyframes name-o {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-30px) scale(0.68);
    }
  }

  @keyframes name-x {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(60px) scale(0.8);
    }
  }

  @keyframes name-x-c {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0.75;
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes name-i-p {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(60px) scale(0.8);
    }
  }

  @keyframes name-i-l {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translate(60px, 5px) scale(0.8, 0.65);
    }
  }
`
