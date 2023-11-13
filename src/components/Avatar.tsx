import { useEffect } from 'react';

const Logo = (props: any) => {
    return (
        <svg height="100%" version="1.1" viewBox="0 0 1024 1024" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs />
            <g id="Circles">
                <path d="M509.531 14.3125C233.097 14.3125 8.99996 238.41 9 514.844C8.99996 791.278 233.097 1015.38 509.531 1015.38C785.965 1015.38 1010.09 791.278 1010.09 514.844C1010.09 238.41 785.965 14.3126 509.531 14.3125ZM509.094 31.0312C596.465 31.0312 678.38 54.319 749.125 94.8438C750.934 111.693 737.124 141.777 718.75 147.688C699.969 153.729 673.371 152.884 642.469 152.75C605.978 152.592 563.436 152.5 519.719 152.5C432.547 152.5 353.586 152.375 335.375 152.375C319.334 152.375 300.777 151.59 287.938 138.75C275.995 126.808 280.143 93.5813 282.781 87.2812C350.325 51.4401 427.3 31.0313 509.094 31.0312ZM253.219 104.312C255.134 113.678 253.031 126.008 253.031 134.906C253.141 152.276 252.482 169.224 251.844 197.812C250.874 241.303 249.14 274.065 252.5 297.094C254.735 312.42 261.293 322.53 268.438 331.688C277.38 343.147 288.57 352.023 308.312 355.406C347.449 362.112 411.409 355.312 518.344 355.312C619.168 355.312 702.852 359.01 719.719 352.625C770.575 333.375 768.625 311.363 768.625 231.688C768.625 140.969 771.293 109.378 771.375 108.406C889.644 184.899 972.358 311.537 989.438 458.281C984.32 465.719 934.175 463.156 897.344 463.156C831.298 463.156 708.17 462.594 511.031 462.594C282.129 462.594 233.422 461.875 176.594 461.875C159.377 461.875 150.475 449.436 142.812 441.781C130.576 429.558 133.562 407.054 133.562 398.406C132.769 382.65 132.469 229.663 132.469 218.781C132.469 215.138 134.389 210.578 136.75 206.062C169.803 166.23 209.141 131.854 253.219 104.312ZM642.156 168.5C673.14 168.293 695.306 168.764 710.938 171.562C727.723 174.568 735.372 181.358 740.562 190.25C744.005 196.148 747.573 203.503 748.625 212.531C750.074 224.969 748.25 240.71 748.25 261.5C748.25 269.677 748.344 277.719 748.344 285.156C748.344 345.555 709.275 338.469 529.312 338.469C284.936 338.469 270 355.843 270 245.719C270 207.412 277.235 185.269 297.938 175.469C311.831 168.892 330.811 169.441 364.094 169.562C399.438 169.691 450.656 169.594 520.469 169.594C571.356 169.594 611.172 168.708 642.156 168.5ZM115.656 233.594C115.559 236.083 115.531 238.978 115.531 243.281C115.531 256.848 116.136 401.316 116.656 422.031C116.656 428.916 121.56 447.766 143.219 466.438C156.914 478.243 173.405 480.469 203.5 480.469C218.931 480.469 454.366 481.125 467.406 481.125C480.445 481.125 483.96 481.741 493.688 491.469C503.416 501.196 497.969 518.594 497.969 548.812C497.969 584.7 401.977 551.197 249 641.75C176.485 684.675 115.684 763.869 101.969 775.75C53.5996 700.445 25.4062 610.904 25.4062 514.75C25.4062 409.851 58.9259 312.848 115.656 233.594ZM637.844 478.125C709.709 478.506 821.637 481.5 982.344 481.5C985.77 481.5 989.67 485.648 992.125 489.062C992.571 497.576 992.813 506.126 992.812 514.75C992.812 607.109 966.913 693.438 922 766.844C909.891 761.874 890.87 736.813 869.656 719.188C848.235 701.39 798.031 655.386 728.125 617.781C658.219 580.177 566.766 567.406 544.438 567.406C522.107 567.406 520.688 545.087 520.688 523.75C520.688 500.384 520.514 486.748 549.906 481.5C566.036 478.62 594.724 477.896 637.844 478.125ZM511.156 585.406C568.779 585.406 633.942 602.911 639.531 608.5C645.12 614.089 643.938 631.933 643.938 637.562C643.938 643.192 642.875 922.764 642.875 933.406C642.683 963.593 635.678 977.125 633.125 982.344C593.539 992.815 551.971 998.438 509.094 998.438C465.977 998.438 424.22 992.74 384.438 982.156C378.791 977.233 376.469 945.393 376.469 934.844C376.469 923.714 377.312 635.307 377.312 615.781C377.312 596.254 453.534 585.406 511.156 585.406ZM344.375 616.094C359.595 616.094 358.656 636.254 358.656 644.625C358.656 652.996 357.844 899.691 357.844 921.406C357.844 940.106 352.869 965.068 347.844 970.812C261.231 940.187 186.019 885.594 130.031 815C124.384 806.263 116.964 792.614 120.938 784.656C128.551 768.901 212.208 689.387 232.062 675.625C251.915 661.863 329.155 616.094 344.375 616.094ZM678.688 616.094C689.485 616.094 718.474 632.665 731.875 641.188C748.749 651.919 815.504 692.166 859.188 734.25C877.538 751.928 909.046 782.875 904.625 793.062C846.609 875.352 763.624 938.693 666.625 972.094C665.987 969.514 661.656 951.635 661.656 930.844C661.656 908.512 662.562 636.299 662.562 630.438C662.562 624.577 667.891 616.094 678.688 616.094Z" fill="#141414" opacity="1" stroke="#0f0f0f" className="svg-elem-1" />
            </g>
        </svg>

    )
};

export default function AnimatedLogo() {
    useEffect(() => {var wrapper = document.querySelector('.wrapper svg')
        if (!wrapper) {
            console.log('wrapper not found');
            return;
        }
        wrapper.classList.add('active');
    }, []);

    return (
        <div className="wrapper w-1/6 py-10">
            <Logo />
        </div>
    )
}
