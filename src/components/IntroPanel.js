import styled from "styled-components";
import CanvasDraw from "react-canvas-draw";
import { useEffect, useRef, useState } from "react";
import { circle } from "../assets/firstPanelCircle.svg";
import anime from "animejs/lib/anime.es.js";

const MainContainer = styled.div`
  background-color: #020c1b;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  flex-direction: column;
  padding-left: 20px;
  position: relative;
  left: 50;
  margin-left: 200px;
`;
const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  text-align: center;
`;
const FirstText = styled.div`
  color: #ffffff;
  margin: 0;
  font-size: 80px;
  width: 600px;
  position: relative;
`;
const DescriptionText = styled.p`
  font-size: 30px;
  margin: 0;
  width: 70%;
  color: #0e6ba8;
  display: flex;
  width: 600px;
`;
const CircleContainer = styled.div`
  position: absolute;
  top: -283px;
  left: 266px;
  z-index: 0;

  overflow: "hidden";
`;
const Canvas = styled.canvas`
  background-color: 1c1c1c;
`;
const Name = styled.span`
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: linear-gradient(90deg, #5ba9f0 0%, #4941a5 100%);
`;
const IntroPanel = () => {
  const animation = useRef();
  useEffect(() => {
    animation.current = anime.timeline({
      direction: "normal",
    });

    animation.current.add({
      targets: "#hexagon path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutQuart",
      duration: 2000,
      delay: 250,
    });
  }, []);

  const [brushSize, setBrushSize] = useState(1);
  const [color, setColor] = useState("#2a9d8f");
  const [image, setImage] = useState("");
  const [classy, setClassy] = useState(false);
  const ref = useRef();

  return (
    <MainContainer ref={ref}>
      <LeftContainer>
        <FirstText>
          Hi, my <br /> name is{" "}
          <Name className={classy ? "reverseGradient" : ""}>Adrien.</Name>
          <CircleContainer>
            <svg
              ref={animation}
              width="1134"
              id="hexagon"
              height="1024"
              viewBox="0 0 1134 1024"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M236.828 748.828C367.624 975.36 657.296 1052.97 883.828 922.172C1110.36 791.376 1187.97 501.704 1057.17 275.172C926.376 48.6403 636.704 -28.9685 410.172 101.828C347.001 138.302 295.411 187.131 256.691 243.5C225.049 289.566 202.003 340.667 188.256 394.176"
                stroke="#5BA9F0"
                strokeOpacity="0.2"
                strokeWidth="8.24427"
              />
              <path
                d="M344.752 436.406L328.614 364.709L376.085 354.024L378.898 366.522L346.585 373.795L350.431 390.879L379.593 384.315L382.406 396.813L353.244 403.377L359.911 432.994L344.752 436.406ZM402.419 423.426L386.281 351.729L414.568 345.362C419.982 344.143 424.821 344.071 429.085 345.147C433.367 346.194 436.908 348.254 439.708 351.326C442.527 354.37 444.469 358.261 445.535 362.998C446.607 367.759 446.502 372.087 445.221 375.98C443.934 379.849 441.546 383.133 438.059 385.831C434.594 388.523 430.108 390.49 424.6 391.729L405.661 395.993L402.918 383.81L419.407 380.098C422.301 379.447 424.616 378.509 426.351 377.285C428.086 376.06 429.242 374.55 429.818 372.752C430.418 370.95 430.452 368.87 429.922 366.513C429.386 364.132 428.456 362.233 427.131 360.815C425.83 359.391 424.116 358.477 421.99 358.073C419.882 357.64 417.369 357.752 414.451 358.409L404.229 360.71L417.578 420.014L402.419 423.426ZM433.794 382.083L458.958 410.699L442.224 414.466L417.445 385.763L433.794 382.083ZM524.931 358.185C526.691 366.003 526.706 372.988 524.976 379.14C523.27 385.287 520.199 390.38 515.763 394.419C511.344 398.429 505.973 401.147 499.648 402.57C493.276 404.004 487.233 403.845 481.517 402.091C475.801 400.336 470.855 397.048 466.68 392.225C462.505 387.403 459.54 381.094 457.785 373.299C456.025 365.48 455.998 358.498 457.704 352.351C459.411 346.205 462.473 341.126 466.891 337.115C471.304 333.081 476.697 330.347 483.068 328.913C489.393 327.489 495.413 327.654 501.129 329.409C506.863 331.134 511.818 334.408 515.993 339.231C520.192 344.048 523.171 350.366 524.931 358.185ZM509.562 361.644C508.422 356.579 506.702 352.479 504.403 349.343C502.126 346.202 499.42 344.04 496.285 342.858C493.15 341.675 489.75 341.496 486.086 342.321C482.422 343.146 479.427 344.764 477.101 347.176C474.775 349.588 473.244 352.703 472.51 356.522C471.799 360.336 472.014 364.775 473.154 369.839C474.294 374.904 476.002 379.007 478.278 382.148C480.578 385.284 483.296 387.443 486.431 388.626C489.566 389.808 492.966 389.987 496.63 389.162C500.294 388.337 503.289 386.719 505.615 384.307C507.941 381.896 509.46 378.783 510.171 374.969C510.905 371.15 510.702 366.709 509.562 361.644ZM588.06 306.31L604.198 378.007L591.105 380.954L549.755 342.85L549.23 342.968L559.388 388.093L544.229 391.505L528.091 319.809L541.394 316.814L582.49 354.939L583.121 354.797L572.971 309.706L588.06 306.31ZM600.666 316.604L597.853 304.106L656.737 290.851L659.55 303.349L637.6 308.29L650.925 367.489L635.942 370.862L622.617 311.663L600.666 316.604ZM703.41 311.794L706.074 323.627L673.376 330.987L670.712 319.154L703.41 311.794ZM725.799 350.635L709.661 278.939L757.972 268.064L760.785 280.562L727.632 288.024L731.478 305.108L762.145 298.205L764.958 310.703L734.291 317.606L738.144 334.725L771.437 327.231L774.25 339.729L725.799 350.635ZM829.993 251.853L846.131 323.549L833.038 326.497L791.688 288.392L791.163 288.51L801.321 333.636L786.162 337.048L770.024 265.351L783.327 262.357L824.424 300.481L825.054 300.34L814.904 255.249L829.993 251.853ZM884.071 315.009L858.655 320.73L842.517 249.034L868.143 243.265C875.355 241.642 881.886 241.68 887.736 243.379C893.582 245.055 898.507 248.25 902.51 252.964C906.537 257.673 909.389 263.75 911.065 271.195C912.746 278.664 912.778 285.4 911.163 291.403C909.57 297.401 906.471 302.427 901.866 306.48C897.285 310.527 891.353 313.37 884.071 315.009ZM870.89 304.33L880.518 302.163C884.999 301.155 888.589 299.513 891.289 297.237C894.008 294.934 895.759 291.928 896.543 288.22C897.345 284.484 897.144 279.944 895.941 274.599C894.748 269.301 892.992 265.148 890.672 262.139C888.375 259.125 885.519 257.169 882.105 256.27C878.69 255.371 874.742 255.426 870.261 256.435L860.599 258.61L870.89 304.33ZM371.543 555.428L355.405 483.731L384.111 477.27C389.386 476.083 393.961 475.874 397.837 476.645C401.714 477.415 404.851 478.989 407.25 481.367C409.644 483.722 411.245 486.696 412.054 490.291C412.684 493.091 412.679 495.68 412.036 498.056C411.389 500.408 410.237 502.482 408.582 504.277C406.944 506.043 404.939 507.488 402.568 508.61L402.726 509.31C405.483 508.812 408.212 509.007 410.913 509.895C413.637 510.777 416.035 512.334 418.107 514.565C420.173 516.773 421.603 519.639 422.396 523.163C423.252 526.967 423.071 530.576 421.853 533.989C420.653 537.373 418.416 540.341 415.14 542.893C411.865 545.445 407.543 547.325 402.175 548.533L371.543 555.428ZM383.912 539.623L396.27 536.842C400.494 535.891 403.394 534.392 404.968 532.346C406.538 530.276 407.018 527.887 406.408 525.18C405.962 523.196 405.089 521.554 403.791 520.252C402.493 518.95 400.859 518.067 398.891 517.603C396.947 517.134 394.761 517.172 392.333 517.718L379.625 520.579L383.912 539.623ZM377.316 510.321L388.554 507.792C390.631 507.324 392.394 506.548 393.841 505.462C395.307 504.347 396.354 503.008 396.983 501.444C397.635 499.875 397.748 498.145 397.323 496.255C396.74 493.664 395.348 491.783 393.147 490.611C390.969 489.434 388.2 489.223 384.839 489.98L373.321 492.572L377.316 510.321ZM449.078 537.976L432.834 541.632L441.446 464.364L460.981 459.967L501.835 526.101L485.591 529.757L455.181 478.486L454.621 478.613L449.078 537.976ZM441.719 510.023L480.088 501.386L482.751 513.219L444.382 521.856L441.719 510.023ZM559.866 464.081L544.533 467.533C543.806 465.612 542.838 463.979 541.627 462.633C540.412 461.263 539.004 460.183 537.403 459.39C535.803 458.598 534.05 458.11 532.145 457.926C530.263 457.736 528.295 457.873 526.242 458.335C522.531 459.17 519.506 460.82 517.167 463.283C514.823 465.724 513.286 468.865 512.557 472.707C511.823 476.526 512.015 480.921 513.134 485.892C514.285 491.004 516.01 495.127 518.309 498.263C520.633 501.394 523.371 503.536 526.524 504.69C529.677 505.844 533.063 506.014 536.68 505.2C538.711 504.743 540.529 504.051 542.135 503.126C543.765 502.195 545.141 501.064 546.263 499.732C547.381 498.377 548.215 496.853 548.765 495.16C549.339 493.461 549.586 491.616 549.505 489.623L564.854 486.241C565.198 489.622 564.921 493.019 564.022 496.434C563.141 499.82 561.641 503.014 559.522 506.017C557.42 508.991 554.695 511.591 551.346 513.816C548.015 516.012 544.051 517.628 539.453 518.663C533.058 520.102 527.015 519.942 521.322 518.183C515.653 516.419 510.742 513.122 506.59 508.294C502.462 503.461 499.52 497.147 497.765 489.352C496.006 481.533 495.979 474.551 497.685 468.404C499.391 462.258 502.442 457.182 506.837 453.176C511.226 449.148 516.572 446.424 522.873 445.006C527.028 444.07 531.01 443.787 534.82 444.156C538.654 444.519 542.2 445.511 545.458 447.131C548.711 448.729 551.563 450.943 554.015 453.775C556.491 456.602 558.441 460.037 559.866 464.081ZM581.225 508.23L565.086 436.534L580.245 433.122L587.361 464.734L588.306 464.521L606.991 427.101L625.161 423.011L605.78 461.103L641.614 494.637L623.48 498.719L597.205 473.663L591.797 484.444L596.383 504.818L581.225 508.23ZM668.683 444.663L671.346 456.496L638.649 463.856L635.985 452.023L668.683 444.663ZM691.072 483.505L674.933 411.808L723.245 400.933L726.058 413.431L692.905 420.894L696.751 437.978L727.418 431.075L730.231 443.573L699.564 450.476L703.417 467.595L736.71 460.101L739.523 472.599L691.072 483.505ZM795.265 384.722L811.404 456.419L798.311 459.366L756.961 421.262L756.436 421.38L766.593 466.505L751.435 469.917L735.296 398.221L748.6 395.226L789.696 433.351L790.327 433.209L780.177 388.118L795.265 384.722ZM849.344 447.879L823.928 453.6L807.79 381.903L833.416 376.135C840.627 374.511 847.159 374.549 853.009 376.248C858.855 377.924 863.779 381.119 867.783 385.833C871.81 390.542 874.662 396.619 876.337 404.064C878.018 411.533 878.051 418.269 876.435 424.272C874.843 430.271 871.744 435.296 867.139 439.349C862.558 443.396 856.626 446.24 849.344 447.879ZM836.163 437.2L845.79 435.033C850.271 434.024 853.862 432.382 856.562 430.107C859.28 427.803 861.032 424.797 861.815 421.09C862.617 417.354 862.417 412.813 861.214 407.469C860.021 402.171 858.265 398.017 855.945 395.009C853.648 391.995 850.792 390.038 847.378 389.139C843.963 388.24 840.015 388.295 835.534 389.304L825.872 391.479L836.163 437.2ZM425.731 614.619C424.815 611.858 423.12 609.934 420.644 608.849C418.168 607.763 415.11 607.63 411.469 608.449C408.995 609.006 406.985 609.827 405.439 610.91C403.887 611.971 402.793 613.21 402.156 614.629C401.542 616.042 401.409 617.519 401.756 619.059C401.998 620.353 402.519 621.413 403.317 622.238C404.14 623.059 405.155 623.701 406.362 624.165C407.565 624.605 408.913 624.927 410.405 625.13C411.893 625.311 413.457 625.4 415.1 625.398L421.888 625.488C425.173 625.485 428.254 625.772 431.131 626.35C434.007 626.929 436.594 627.855 438.891 629.128C441.189 630.401 443.123 632.074 444.693 634.148C446.287 636.217 447.431 638.743 448.127 641.725C449.091 646.118 448.827 650.174 447.335 653.894C445.861 657.585 443.246 660.785 439.491 663.494C435.754 666.174 430.969 668.171 425.134 669.485C419.346 670.787 414.105 671.035 409.411 670.228C404.741 669.416 400.813 667.541 397.626 664.605C394.458 661.64 392.234 657.592 390.957 652.46L405.625 649.158C406.33 651.526 407.47 653.378 409.046 654.715C410.64 656.023 412.556 656.855 414.794 657.21C417.05 657.536 419.484 657.404 422.098 656.816C424.666 656.238 426.81 655.363 428.533 654.191C430.278 653.013 431.527 651.641 432.277 650.074C433.028 648.507 433.209 646.861 432.821 645.133C432.458 643.523 431.675 642.277 430.471 641.396C429.291 640.509 427.704 639.885 425.71 639.525C423.739 639.159 421.376 638.955 418.62 638.914L410.372 638.71C403.997 638.601 398.706 637.376 394.502 635.037C390.297 632.697 387.61 628.876 386.441 623.573C385.44 619.237 385.742 615.185 387.345 611.415C388.972 607.64 391.635 604.381 395.333 601.636C399.031 598.891 403.493 596.93 408.721 595.753C414.043 594.555 418.892 594.42 423.269 595.347C427.67 596.269 431.344 598.103 434.291 600.848C437.239 603.593 439.228 607.093 440.26 611.348L425.731 614.619ZM446.795 588.213L465.489 584.005L496.077 627.732L496.917 627.543L505.818 574.927L524.513 570.719L540.651 642.416L525.948 645.725L515.444 599.059L514.849 599.193L506.72 649.686L496.707 651.939L467.688 609.625L467.093 609.759L477.636 656.6L462.933 659.91L446.795 588.213ZM565.498 636.823L549.255 640.479L557.867 563.211L577.402 558.814L618.256 624.948L602.012 628.604L571.602 577.333L571.042 577.46L565.498 636.823ZM558.14 608.87L596.509 600.233L599.172 612.066L560.803 620.703L558.14 608.87ZM626.885 623.005L610.747 551.308L639.034 544.941C644.448 543.722 649.287 543.651 653.551 544.726C657.832 545.773 661.374 547.833 664.174 550.905C666.992 553.949 668.935 557.84 670.001 562.578C671.073 567.339 670.968 571.666 669.687 575.559C668.4 579.429 666.012 582.713 662.525 585.41C659.06 588.103 654.574 590.069 649.066 591.309L630.126 595.572L627.384 583.389L643.873 579.677C646.767 579.026 649.082 578.088 650.817 576.864C652.552 575.64 653.708 574.129 654.284 572.332C654.884 570.529 654.918 568.449 654.388 566.092C653.852 563.712 652.922 561.812 651.597 560.394C650.296 558.97 648.582 558.056 646.456 557.652C644.347 557.219 641.835 557.331 638.917 557.988L628.695 560.289L642.044 619.593L626.885 623.005ZM658.26 581.662L683.424 610.279L666.69 614.045L641.911 585.342L658.26 581.662ZM675.525 549.858L672.711 537.36L731.595 524.106L734.408 536.604L712.458 541.545L725.784 600.744L710.8 604.117L697.475 544.918L675.525 549.858ZM477.897 732.637L462.563 736.089C461.836 734.168 460.868 732.534 459.658 731.188C458.442 729.819 457.034 728.738 455.434 727.946C453.833 727.154 452.08 726.666 450.175 726.481C448.293 726.292 446.326 726.428 444.272 726.891C440.561 727.726 437.536 729.375 435.197 731.839C432.853 734.279 431.316 737.421 430.587 741.263C429.853 745.082 430.045 749.477 431.164 754.448C432.315 759.559 434.04 763.683 436.34 766.819C438.663 769.95 441.401 772.092 444.554 773.246C447.707 774.4 451.093 774.57 454.71 773.755C456.741 773.298 458.559 772.607 460.165 771.681C461.795 770.751 463.171 769.619 464.294 768.288C465.411 766.933 466.245 765.409 466.795 763.715C467.369 762.017 467.616 760.171 467.535 758.179L482.885 754.797C483.229 758.177 482.951 761.575 482.052 764.989C481.172 768.375 479.671 771.57 477.552 774.573C475.451 777.547 472.725 780.146 469.376 782.372C466.045 784.568 462.081 786.184 457.483 787.219C451.088 788.658 445.045 788.498 439.352 786.739C433.683 784.974 428.772 781.678 424.62 776.85C420.492 772.017 417.55 765.703 415.796 757.908C414.036 750.089 414.009 743.107 415.715 736.96C417.421 730.814 420.472 725.738 424.867 721.732C429.256 717.703 434.602 714.98 440.904 713.561C445.058 712.626 449.04 712.343 452.85 712.711C456.684 713.075 460.23 714.066 463.488 715.687C466.741 717.284 469.594 719.499 472.046 722.331C474.521 725.158 476.471 728.593 477.897 732.637ZM557.071 726.107C558.831 733.926 558.846 740.911 557.117 747.063C555.411 753.21 552.339 758.302 547.903 762.342C543.485 766.352 538.113 769.069 531.788 770.493C525.417 771.927 519.373 771.767 513.657 770.013C507.941 768.259 502.996 764.971 498.82 760.148C494.645 755.326 491.68 749.017 489.926 741.222C488.166 733.403 488.139 726.42 489.845 720.274C491.551 714.127 494.613 709.049 499.032 705.038C503.445 701.004 508.837 698.27 515.209 696.836C521.533 695.412 527.554 695.577 533.27 697.331C539.004 699.057 543.958 702.331 548.134 707.154C552.332 711.971 555.311 718.289 557.071 726.107ZM541.703 729.567C540.563 724.502 538.843 720.402 536.543 717.266C534.267 714.125 531.561 711.963 528.426 710.78C525.29 709.598 521.891 709.419 518.227 710.244C514.562 711.069 511.567 712.687 509.241 715.099C506.915 717.511 505.385 720.626 504.651 724.445C503.94 728.259 504.154 732.698 505.294 737.762C506.434 742.827 508.142 746.93 510.419 750.071C512.719 753.207 515.436 755.366 518.571 756.549C521.706 757.731 525.106 757.91 528.77 757.085C532.434 756.26 535.43 754.642 537.756 752.23C540.082 749.818 541.6 746.706 542.311 742.892C543.046 739.073 542.843 734.631 541.703 729.567ZM620.2 674.233L636.338 745.93L623.245 748.877L581.896 710.772L581.371 710.891L591.528 756.016L576.369 759.428L560.231 687.732L573.534 684.737L614.631 722.862L615.261 722.72L605.112 677.629L620.2 674.233ZM632.807 684.526L629.994 672.028L688.877 658.774L691.691 671.272L669.74 676.213L683.066 735.412L668.082 738.784L654.757 679.586L632.807 684.526ZM714.713 728.288L698.575 656.591L726.861 650.224C732.276 649.005 737.115 648.934 741.379 650.009C745.66 651.056 749.201 653.116 752.002 656.188C754.82 659.232 756.763 663.123 757.829 667.861C758.901 672.622 758.796 676.949 757.514 680.842C756.228 684.712 753.84 687.996 750.352 690.693C746.888 693.386 742.402 695.352 736.894 696.592L717.954 700.855L715.212 688.672L731.701 684.961C734.595 684.309 736.909 683.371 738.645 682.147C740.38 680.923 741.536 679.412 742.112 677.615C742.712 675.812 742.746 673.732 742.215 671.375C741.68 668.995 740.749 667.095 739.425 665.677C738.123 664.253 736.41 663.339 734.283 662.935C732.175 662.503 729.663 662.615 726.745 663.271L716.523 665.572L729.872 724.876L714.713 728.288ZM746.088 686.945L771.251 715.562L754.517 719.329L729.739 690.625L746.088 686.945ZM791.766 710.944L775.522 714.6L784.135 637.332L803.669 632.935L844.524 699.069L828.28 702.725L797.87 651.455L797.31 651.581L791.766 710.944ZM784.408 682.991L822.777 674.354L825.44 686.187L787.071 694.824L784.408 682.991ZM902.555 637.05L887.221 640.501C886.495 638.58 885.526 636.947 884.316 635.601C883.101 634.232 881.693 633.151 880.092 632.359C878.491 631.566 876.739 631.078 874.834 630.894C872.952 630.704 870.984 630.841 868.93 631.303C865.219 632.138 862.194 633.788 859.855 636.252C857.511 638.692 855.975 641.833 855.246 645.676C854.511 649.494 854.704 653.89 855.823 658.861C856.973 663.972 858.698 668.095 860.998 671.232C863.321 674.362 866.059 676.505 869.213 677.658C872.366 678.812 875.751 678.982 879.369 678.168C881.399 677.711 883.218 677.019 884.824 676.094C886.453 675.163 887.829 674.032 888.952 672.7C890.069 671.345 890.903 669.821 891.454 668.128C892.028 666.429 892.274 664.584 892.194 662.591L907.543 659.21C907.887 662.59 907.61 665.987 906.711 669.402C905.83 672.788 904.33 675.982 902.21 678.985C900.109 681.959 897.384 684.559 894.035 686.784C890.704 688.98 886.74 690.596 882.142 691.631C875.747 693.071 869.703 692.911 864.011 691.151C858.341 689.387 853.431 686.091 849.279 681.263C845.15 676.429 842.209 670.115 840.454 662.32C838.694 654.502 838.667 647.519 840.373 641.372C842.08 635.226 845.13 630.15 849.525 626.145C853.915 622.116 859.261 619.392 865.562 617.974C869.716 617.039 873.699 616.755 877.509 617.124C881.342 617.487 884.888 618.479 888.147 620.099C891.4 621.697 894.252 623.911 896.704 626.743C899.18 629.57 901.13 633.006 902.555 637.05ZM907.858 622.614L905.044 610.116L963.928 596.862L966.741 609.36L944.791 614.301L958.117 673.5L943.133 676.872L929.808 617.674L907.858 622.614ZM1017.16 606.544C1016.25 603.783 1014.55 601.86 1012.07 600.775C1009.6 599.689 1006.54 599.556 1002.9 600.375C1000.42 600.932 998.415 601.752 996.869 602.836C995.317 603.896 994.223 605.136 993.586 606.554C992.972 607.968 992.839 609.444 993.186 610.985C993.428 612.279 993.948 613.339 994.747 614.164C995.569 614.985 996.585 615.627 997.792 616.09C998.995 616.531 1000.34 616.853 1001.84 617.056C1003.32 617.236 1004.89 617.326 1006.53 617.324L1013.32 617.414C1016.6 617.41 1019.68 617.698 1022.56 618.276C1025.44 618.855 1028.02 619.781 1030.32 621.054C1032.62 622.327 1034.55 624 1036.12 626.074C1037.72 628.143 1038.86 630.669 1039.56 633.651C1040.52 638.044 1040.26 642.1 1038.77 645.82C1037.29 649.511 1034.68 652.711 1030.92 655.42C1027.18 658.1 1022.4 660.097 1016.56 661.41C1010.78 662.713 1005.53 662.961 1000.84 662.154C996.171 661.342 992.243 659.467 989.056 656.531C985.887 653.566 983.664 649.518 982.387 644.386L997.055 641.084C997.759 643.451 998.9 645.304 1000.48 646.641C1002.07 647.949 1003.99 648.781 1006.22 649.135C1008.48 649.461 1010.91 649.33 1013.53 648.742C1016.1 648.164 1018.24 647.289 1019.96 646.116C1021.71 644.939 1022.96 643.567 1023.71 642C1024.46 640.433 1024.64 638.786 1024.25 637.059C1023.89 635.449 1023.1 634.203 1021.9 633.321C1020.72 632.435 1019.13 631.811 1017.14 631.451C1015.17 631.085 1012.81 630.881 1010.05 630.839L1001.8 630.636C995.426 630.527 990.136 629.302 985.931 626.963C981.727 624.623 979.04 620.802 977.87 615.499C976.87 611.163 977.172 607.11 978.775 603.341C980.402 599.566 983.065 596.306 986.763 593.561C990.46 590.816 994.923 588.855 1000.15 587.679C1005.47 586.481 1010.32 586.346 1014.7 587.273C1019.1 588.195 1022.77 590.029 1025.72 592.774C1028.67 595.519 1030.66 599.019 1031.69 603.274L1017.16 606.544Z"
                fill="white"
                fillOpacity="0.1"
              />
              <circle cx="189.102" cy="396.819" r="8.87143" fill="#5BA9F0" />
            </svg>
          </CircleContainer>
        </FirstText>
        <DescriptionText>
          I am a fullstack developper passionate about turning great ideas into
          beautiful web and mobile apps.
        </DescriptionText>
      </LeftContainer>
      <RightContainer></RightContainer>
    </MainContainer>
  );
};

export default IntroPanel;
