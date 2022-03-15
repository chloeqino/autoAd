import React, { useState, useEffect,useRef,forwardRef, createContext } from "react";
import * as htmlToImage from 'html-to-image';
import bg from "../testbg.png";
function ddShortMonth(dateobject){
  
    
   return dateobject.toLocaleString('default', { month: 'short' });
   
  
}
const AdHtml = forwardRef((props,ref)=>{
/*<div className="bgImgContainer">
   <img src={`${props.locationData.picture}188160.png`} alt={props.locationData.city_name} crossOrigin="*" />
    </div> */
    return (<div ref={ref} className="adCard" key={props.locationData.id}>
   <div className="bgImgContainer">
   <img src={bg} alt={props.locationData.city_name} />
    </div>
    <div className="foreground">
    <div className="logosvg">
    <svg width="100" height="60" viewBox="0 0 226 119" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.2809 41.9986C10.2809 42.5336 9.95993 42.8546 8.99691 42.9616C8.14089 43.0686 7.07086 42.9616 6.00083 42.6406C4.9308 42.4266 3.75377 41.9986 2.68374 41.5706C1.61371 41.1426 0.971695 40.6076 0.650686 40.1796C0.00866938 36.0064 -0.205334 32.2614 0.222678 28.9443C0.650689 25.6272 1.50671 22.7381 2.68374 20.277C3.86077 17.816 5.35881 15.5689 7.17786 13.7499C8.99691 11.9308 10.923 10.3258 12.849 9.04174C14.8821 7.75771 16.9151 6.58068 18.9482 5.72465C20.9812 4.86863 23.0143 4.11961 24.8333 3.5846C27.9364 2.51457 31.3605 1.76555 34.8916 1.44454C38.4227 1.01653 41.9538 0.802518 45.3779 0.802518C48.3739 0.802518 51.584 0.909526 54.7941 1.01653C58.0042 1.23053 61.0003 1.44454 63.8894 1.65854C66.4574 1.87255 69.0255 1.97955 71.4866 2.19356C73.9476 2.40756 76.4087 2.40756 78.6557 2.40756C81.4378 2.40756 84.0059 2.19355 86.2529 1.87255C88.5 1.55154 90.5331 0.909524 92.1381 0.0535017C92.4591 -0.160504 92.7801 0.267504 93.1011 1.33753C93.3151 2.30056 93.5291 3.47759 93.6361 4.86863C93.7431 6.25967 93.7431 7.5437 93.7431 8.72073C93.7431 9.89776 93.5291 10.6468 93.2081 10.9678C91.1751 11.8238 88.928 12.4658 86.4669 12.8938C84.0059 13.2148 81.5448 13.4289 78.8697 13.4289C75.9807 13.4289 72.8776 13.3219 69.8815 13.0008C66.7784 12.6798 63.6753 12.3588 60.4653 12.0378C57.0412 11.7168 53.6171 11.2888 50.086 10.9678C46.6619 10.6468 43.2378 10.4328 39.9207 10.4328C37.8877 10.4328 35.7476 10.5398 33.7146 10.7538C31.6815 10.9678 29.6485 11.1818 27.7224 11.6098C25.0473 12.1448 22.5863 13.1078 20.1252 14.4989C17.7711 15.7829 15.7381 17.709 14.026 20.063C12.314 22.4171 11.137 25.4132 10.3879 29.0513C9.85293 32.5824 9.74593 36.8625 10.2809 41.9986ZM40.8837 10.8608C41.0977 10.6468 41.5258 10.5398 42.1678 10.6468C42.8098 10.7538 43.5588 11.0748 44.4148 11.5028C45.2709 11.9308 46.1269 12.4658 47.0899 13.1078C47.9459 13.7499 48.802 14.4989 49.551 15.3549C50.3 16.2109 50.942 17.0669 51.37 17.923C51.798 18.779 51.905 19.742 51.798 20.491C49.765 24.0221 47.7319 27.7672 45.8059 31.8333C43.8798 35.8994 42.0608 40.0725 40.4557 44.3527C38.8507 48.6328 37.3527 53.0199 35.9616 57.407C34.5706 61.7941 33.5006 66.0742 32.5375 70.1404C31.6815 74.3135 30.9325 78.1656 30.5045 81.9107C30.0765 85.6558 29.8625 88.9728 30.0765 91.8619C30.0765 92.2899 29.6485 92.1829 28.7924 91.7549C27.9364 91.2199 26.9734 90.5779 26.0104 89.6149C24.9403 88.7588 23.9773 87.7958 23.1213 86.8328C22.2653 85.8698 21.7302 85.1208 21.6232 84.6927C21.3022 81.5897 21.3022 77.9516 21.7302 73.9925C22.1583 69.9264 22.8003 65.7532 23.7633 61.2591C24.7263 56.872 25.9034 52.2709 27.2944 47.6698C28.6854 43.0686 30.0765 38.4675 31.6815 34.0804C33.1795 29.6933 34.7846 25.4132 36.3896 21.4541C37.8877 17.495 39.3857 13.9639 40.8837 10.8608Z" fill="white"/>
<path d="M87.8162 69.613C86.8421 71.4276 85.6244 73.2422 84.2851 75.0569C82.9457 76.8715 81.4845 78.5794 79.6581 80.0738C77.9534 81.5682 76.0052 82.8491 73.9353 83.7031C71.8653 84.6638 69.6736 85.0907 67.2383 84.984C65.7772 84.8772 64.5595 84.6638 63.3419 84.13C62.2461 83.5963 61.272 82.9559 60.4196 82.1019C59.5673 81.248 58.9585 80.2873 58.3497 79.2199C57.7408 78.1524 57.4973 76.9783 57.2538 75.8041C57.0103 74.0962 57.0103 72.495 57.2538 71.0006C57.4973 69.5062 57.8626 68.0118 58.3497 66.7309C58.8367 65.45 59.4455 64.0623 60.1761 62.7814C60.9067 61.5005 61.6372 60.1128 62.4896 58.8319L63.829 56.5903V56.697L65.4119 54.0284C65.6554 53.4947 66.1425 52.961 66.7513 52.4273C67.3601 51.8936 68.4559 51.4666 69.9171 51.1464C69.1865 51.2531 68.4559 51.4666 68.0907 51.4666C67.7254 51.4666 67.2383 51.6801 66.873 51.7868C66.1425 51.8936 65.4119 52.1071 64.6813 52.2138C63.9507 52.3205 63.0984 52.4273 62.0025 52.3205H61.3937C60.4196 54.1352 59.4455 55.8431 58.715 57.551C57.9844 59.2589 57.2538 60.86 56.5232 62.3544L56.4015 62.2477C56.2797 62.5679 55.9144 62.6746 55.3056 62.4612C54.6968 62.3544 53.9662 62.0342 53.2356 61.6072C52.5051 61.1802 52.018 60.7533 51.531 60.3263C51.0439 59.8993 50.9222 59.3656 51.0439 59.0454V59.1521L55.3056 50.0789C54.4533 49.225 53.9662 48.1576 53.8445 46.8766C53.6009 45.2755 53.6009 43.7811 54.2097 42.6069C54.8185 41.4327 55.4274 39.9383 56.1579 38.2304C56.4015 37.59 56.7668 36.8428 57.0103 35.9888C57.2538 35.1349 57.6191 34.1742 57.8626 33C58.8367 33.427 59.8108 33.8539 60.7849 34.2809C61.759 34.7079 62.7331 35.2416 63.5854 35.8821C64.4378 36.5225 65.1684 37.163 65.7772 37.9102C66.386 38.6574 66.7513 39.6181 66.873 40.5788C66.9948 41.0058 66.9948 41.5395 66.9948 42.0732C66.9948 42.6069 66.873 43.2474 66.6295 43.9946L64.1943 47.5171C63.9507 47.8373 64.1943 47.8373 64.6813 47.6238C65.1684 47.4103 65.8989 46.9834 66.873 46.4497C67.8471 45.9159 68.8212 45.1687 69.9171 44.4215C71.013 43.6743 72.1088 42.8204 73.2047 42.0732C74.3005 41.326 75.1529 40.5788 76.0052 39.8316C76.8575 39.1911 77.3446 38.6574 77.5881 38.2304C77.9534 38.2304 78.4405 38.3372 79.0493 38.6574C79.6581 38.9776 80.3887 39.2979 80.9975 39.7248C81.728 40.1518 82.3369 40.472 82.8239 40.7923C83.311 41.1125 83.6762 41.326 83.798 41.4327C84.5286 42.2867 84.8939 43.3541 84.8939 44.635C84.8939 45.8092 84.6503 47.1969 84.0415 48.6913C83.4327 50.1857 82.7021 51.6801 81.728 53.388C80.7539 54.9891 79.6581 56.697 78.684 58.4049C78.0752 59.3656 77.3446 60.3263 76.8575 61.1802C76.2487 62.1409 75.6399 63.1016 75.0311 64.0623C74.5441 64.8095 74.057 65.6634 73.57 66.5174C73.0829 67.4781 72.5959 68.4388 72.1088 69.3995C71.6218 70.3602 71.2565 71.3209 71.013 72.2815C70.7694 73.2422 70.6477 73.9894 70.7694 74.6299C70.7694 74.9501 71.1347 75.0569 71.8653 75.0569C72.4741 75.1636 73.3264 74.9501 74.1788 74.4164C75.0311 73.9894 76.0052 73.349 76.9793 72.495C77.9534 71.6411 78.9275 70.7871 79.7798 69.613C80.7539 68.5455 81.4845 67.3713 82.0933 65.9837C82.9457 64.2758 83.798 62.6746 84.5286 61.0735C85.2592 59.4723 85.868 58.0847 86.355 56.9105C86.5985 56.697 86.9638 56.5903 87.6944 56.8038C88.425 57.0172 89.0338 57.2307 89.7644 57.6577C90.4949 58.0847 90.982 58.5117 91.469 59.1521C91.9561 59.6858 92.0778 60.1128 91.9561 60.5398V60.433L90.2514 64.3825L87.8162 69.613Z" fill="white"/>
<path d="M89.6734 38.2552C90.3155 37.9342 91.1715 37.9342 92.4555 38.4692C93.6325 38.8972 94.9166 39.6462 96.0936 40.7163C97.2706 41.6793 98.2337 42.8563 99.0897 44.0334C99.9457 45.2104 100.267 46.4944 100.053 47.6715C99.9457 48.0995 99.8387 48.8485 99.6247 49.8115C99.4107 50.7745 99.0897 51.8446 98.7687 53.0216V52.9146C98.3407 54.6266 97.8056 56.5527 97.2706 58.6928C96.7356 60.8328 96.3076 62.8659 95.8796 65.0059C95.4516 67.146 95.1306 69.072 94.9166 70.8911C94.7026 72.7101 94.7026 74.2082 94.8096 75.2782C94.8096 75.7062 94.8096 75.9202 94.7026 75.9202H95.4516C96.8426 75.3852 98.0197 74.5292 99.0897 73.3522C100.16 72.1751 101.123 70.8911 101.979 69.393C102.835 67.895 103.584 66.29 104.333 64.5779C105.082 62.8659 105.724 61.2608 106.366 59.6558H106.259C106.366 59.3348 106.473 59.0138 106.687 58.7998C106.794 58.4787 107.008 58.1578 107.115 57.9437C107.65 55.0547 108.078 51.9516 108.613 48.7415C109.148 45.5314 109.576 42.1073 109.897 38.6832C110.539 38.3622 111.609 38.3622 112.786 38.7902C114.07 39.2182 115.354 39.9673 116.531 40.8233C117.708 41.7863 118.778 42.8563 119.634 44.0334C120.49 45.2104 120.811 46.4944 120.704 47.6715L113.963 78.5953C113.321 81.4844 112.679 84.2664 112.037 86.9415C111.395 89.5096 110.646 92.0777 110.004 94.3247C111.93 95.3947 113.856 96.5718 115.675 97.8558C117.494 99.1398 119.42 100.317 121.346 101.708L121.239 101.601C121.453 101.708 121.667 101.922 121.881 102.136C122.095 102.35 122.309 102.564 122.63 102.671C123.593 103.313 123.914 104.169 123.486 105.025C123.058 105.881 122.416 106.737 121.453 107.486C120.49 108.235 119.42 108.77 118.243 109.198C117.066 109.626 116.21 109.626 115.675 109.305L111.823 106.523L106.687 102.992C104.44 107.807 101.444 111.552 97.8056 114.227C94.1676 116.902 89.4594 118.186 83.5743 118.186C81.6482 118.186 79.8292 117.972 77.9031 117.544C75.9771 117.116 74.265 116.367 72.66 115.511C71.0549 114.548 69.6639 113.371 68.5939 111.873C67.5238 110.375 66.7748 108.556 66.3468 106.309C65.9188 103.527 66.1328 100.959 66.9888 98.6048C67.8449 96.2508 69.0219 94.2177 70.8409 92.3987C72.553 90.6866 74.693 89.2956 77.2611 88.3326C79.7222 87.3695 82.5043 86.8345 85.3933 86.8345C86.9984 86.8345 88.4964 86.9415 89.7804 87.0485C91.0645 87.1555 92.3485 87.3695 93.5255 87.5835C94.7026 87.7975 95.7726 88.1186 96.8426 88.4396C97.9127 88.7606 98.9827 89.1886 100.16 89.6166C101.016 86.5135 101.872 83.0894 102.728 79.5583L101.765 80.7353C101.444 81.1634 100.909 81.5914 100.374 82.1264C99.8387 82.6614 99.0897 83.0894 98.4477 83.5174C97.6987 83.9454 96.9496 84.2664 95.9866 84.5875C95.1306 84.9085 94.1676 85.0155 93.0975 85.0155C90.7435 84.9085 89.0314 83.9454 87.6404 82.1264C86.2493 80.3073 85.3933 78.0603 84.9653 75.4922C84.8583 74.9572 84.7513 74.3152 84.7513 73.5662C84.6443 72.9241 84.6443 72.2821 84.6443 71.6401C84.7513 69.286 85.0723 66.397 85.5003 63.0799C85.9283 59.7628 86.5704 56.3387 87.1054 53.1286C87.5334 50.4535 87.9614 47.8855 88.2824 45.5314C88.7104 43.0703 88.9244 41.0373 89.0314 39.4322L89.6734 38.2552ZM81.2202 111.98C83.0393 111.98 84.6443 111.659 86.1423 111.017C87.6404 110.375 89.0314 109.412 90.3155 108.128C91.5995 106.844 92.7765 105.346 93.8465 103.634C94.9166 101.922 95.8796 99.9959 96.8426 97.9628C93.7395 96.7858 90.4225 96.1438 86.7844 96.0368C85.0723 96.0368 83.2533 96.2508 81.3272 96.6788C79.4012 97.1068 77.6891 97.6418 76.1911 98.4978C74.693 99.3538 73.516 100.424 72.66 101.601C71.804 102.885 71.59 104.383 71.911 106.095C72.125 107.272 72.446 108.235 73.088 108.984C73.73 109.733 74.479 110.375 75.4421 110.803C76.2981 111.231 77.2611 111.552 78.2241 111.766C79.4012 111.873 80.3642 111.98 81.2202 111.98Z" fill="white"/>
<path d="M127.775 38.5744C128.31 38.2534 129.059 38.2534 129.915 38.4674C130.878 38.6814 131.841 39.1094 132.804 39.6444C133.767 40.1794 134.837 40.9284 135.693 41.7845C136.656 42.6405 137.405 43.4965 137.94 44.4595C139.973 42.4265 142.22 40.9284 144.681 39.6444C147.142 38.4674 149.603 37.9324 151.957 38.2534C153.669 38.4674 155.167 39.0024 156.451 39.7514C157.735 40.5004 158.805 41.3565 159.661 42.5335C160.517 43.6035 161.159 44.8876 161.694 46.1716C162.229 47.4556 162.55 48.9537 162.764 50.3447C162.978 51.5217 163.085 52.8058 163.085 53.9828C163.085 55.1598 162.978 56.3369 162.978 57.4069C162.55 60.617 161.694 63.8271 160.517 66.9302C159.34 70.0332 157.735 72.8153 155.809 75.3834C153.883 77.9514 151.743 79.9845 149.282 81.5896C146.821 83.1946 144.253 84.1576 141.578 84.4786C139.117 84.3716 136.977 83.8366 135.265 82.8736C133.553 81.9106 132.162 80.5195 131.092 79.0215C130.985 79.2355 130.878 79.5565 130.771 79.8775C130.664 80.1985 130.557 80.4125 130.45 80.7335C129.808 82.8736 129.166 85.1206 128.524 87.4747C127.882 89.8288 127.347 92.1828 126.918 94.6439C126.49 96.998 126.062 99.459 125.955 101.92C125.741 104.381 125.741 106.735 125.848 109.089C125.955 109.731 125.527 110.052 124.564 110.052C123.601 110.052 122.638 109.838 121.568 109.41C120.498 108.982 119.428 108.447 118.358 107.698C117.395 107.056 116.753 106.307 116.539 105.558C116.218 102.99 116.111 100.315 116.325 97.747C116.432 95.1789 116.753 92.6109 117.181 90.0428C117.609 87.4747 118.144 84.9066 118.786 82.3386C119.428 79.7705 120.177 77.2024 120.819 74.6344C121.461 72.3873 121.996 70.2472 122.531 68.2142C123.066 66.1811 123.494 64.0411 124.029 61.901V62.115C124.243 60.51 124.564 59.0119 124.885 57.2999C125.206 55.6948 125.527 54.0898 125.741 52.4848C126.169 50.0237 126.597 47.5626 127.025 45.2086C127.346 42.8545 127.56 40.6074 127.775 38.5744ZM133.981 67.6792L133.874 68.3212L134.088 70.0332C134.302 71.2103 134.73 72.1733 135.265 73.1363C135.8 74.0993 136.763 74.5274 137.94 74.6344C139.117 74.7414 140.294 74.4204 141.578 73.5643C142.862 72.7083 144.039 71.6383 145.216 70.1402C146.393 68.7492 147.463 67.0371 148.426 65.2181C149.389 63.399 150.245 61.473 150.994 59.547C151.743 57.6209 152.171 55.8018 152.492 53.9828C152.813 52.1637 152.813 50.5587 152.599 49.1677C152.385 47.5626 151.529 46.7066 150.245 46.7066C149.068 46.5996 147.891 46.8136 146.714 47.2416C145.537 47.6696 144.253 48.3116 143.076 49.0607C141.899 49.8097 140.722 50.7727 139.652 51.9497C138.582 53.1268 137.619 54.1968 136.763 55.5878C136.335 57.5139 135.907 59.547 135.372 61.687C134.837 63.8271 134.409 65.8601 133.981 67.6792Z" fill="white"/>
<path d="M138.683 110.268C137.72 110.268 136.864 109.947 136.329 109.305C135.687 108.663 135.366 107.914 135.366 106.951C135.366 105.774 135.794 104.811 136.757 103.848C137.613 102.991 138.683 102.563 139.86 102.563C140.823 102.563 141.679 102.884 142.214 103.526C142.856 104.169 143.177 104.918 143.177 105.881C143.177 107.058 142.749 108.021 141.786 108.984C140.93 109.84 139.86 110.268 138.683 110.268Z" fill="white"/>
<path d="M168.541 99.7803C168.862 99.6733 169.183 99.7803 169.397 99.8873C169.611 99.9943 169.718 100.315 169.611 100.636C169.504 100.85 169.504 100.957 169.397 101.171C169.29 101.385 169.183 101.599 168.969 101.92C168.648 102.455 168.327 102.99 167.899 103.632C167.471 104.274 167.043 104.809 166.615 105.237C165.759 106.2 164.796 107.163 163.619 107.912C162.442 108.662 161.265 109.197 160.088 109.625C158.804 109.946 157.52 110.16 156.236 110.053C154.952 109.946 153.668 109.625 152.384 108.983C151.1 108.34 150.244 107.377 149.602 106.2C148.96 105.023 148.639 103.739 148.532 102.348C148.425 100.957 148.639 99.5663 148.96 98.0682C149.388 96.5702 149.923 95.1791 150.779 94.0021C151.635 92.7181 152.598 91.6481 153.882 90.792C155.059 89.936 156.557 89.401 158.162 89.187C159.232 89.08 160.302 89.08 161.372 89.294C162.335 89.508 163.191 89.936 163.94 90.685C164.582 91.327 165.01 91.9691 165.331 92.9321C165.652 93.7881 165.759 94.6441 165.652 95.5001C165.652 96.3562 165.331 97.2122 164.903 97.9612C164.475 98.7102 163.94 99.3523 163.084 99.6733C162.228 100.101 161.372 100.208 160.516 100.101C159.767 99.8873 159.125 99.5663 158.59 99.2452C158.055 98.8172 157.734 98.4962 157.627 98.0682C157.52 97.6402 157.734 97.4262 158.162 97.4262C158.911 97.5332 159.66 97.2122 160.302 96.6772C160.944 96.1422 161.372 95.5002 161.693 94.8581C161.907 94.2161 162.014 93.6811 161.907 93.3601C161.8 92.9321 161.693 92.7181 161.372 92.5041C161.051 92.2901 160.73 92.2901 160.302 92.3971C159.874 92.5041 159.339 92.6111 158.911 92.9321C158.162 93.3601 157.52 94.0021 156.878 94.9651C156.236 95.8212 155.701 96.7842 155.166 97.7472C154.631 98.7102 154.417 99.7803 154.31 100.85C154.203 101.92 154.31 102.776 154.631 103.632C154.952 104.381 155.38 105.023 156.022 105.558C156.664 106.093 157.306 106.414 158.055 106.628C158.804 106.842 159.66 106.842 160.623 106.628C161.586 106.414 162.549 105.986 163.512 105.344C164.261 104.809 165.01 104.167 165.652 103.418C166.294 102.669 166.936 101.92 167.471 101.064C167.685 100.743 167.792 100.529 168.006 100.422C168.22 100.315 168.327 99.7803 168.541 99.7803Z" fill="white"/>
<path d="M188.434 100.85C188.541 100.636 188.755 100.529 188.969 100.529C189.183 100.529 189.397 100.636 189.504 100.85C189.611 101.064 189.718 101.385 189.611 101.813C189.611 102.241 189.397 102.776 189.076 103.418C188.648 104.167 188.22 104.916 187.578 105.558C187.043 106.2 186.401 106.735 185.652 107.163C184.903 107.591 184.047 107.912 183.084 108.233C182.121 108.447 180.944 108.554 179.66 108.447C178.055 109.517 176.45 110.052 174.845 110.159C173.133 110.266 171.742 109.838 170.351 109.089C169.067 108.34 167.997 107.163 167.355 105.665C166.606 104.167 166.392 102.241 166.713 99.994C166.927 98.71 167.248 97.426 167.676 96.142C168.104 94.8579 168.746 93.7879 169.602 92.8249C169.923 92.3968 170.351 92.0758 170.779 91.7548C171.207 91.4338 171.742 91.1128 172.277 90.7918C172.812 90.5778 173.347 90.3638 173.882 90.2568C174.417 90.1498 174.952 90.2568 175.487 90.3638C175.594 90.2568 175.701 90.2568 175.808 90.2568C175.915 90.2568 176.022 90.1498 176.129 90.1498C177.734 89.5078 179.125 89.2938 180.302 89.6148C181.479 89.8288 182.442 90.3638 183.084 91.2198C183.833 92.0758 184.261 93.0389 184.582 94.3229C184.903 95.6069 184.903 96.891 184.796 98.282C184.689 99.566 184.368 100.743 183.833 102.027C183.405 103.311 182.763 104.381 182.014 105.451C182.763 105.558 183.512 105.558 184.154 105.344C184.796 105.13 185.331 104.702 185.866 104.274C186.401 103.846 186.829 103.311 187.15 102.776C187.471 102.241 188.113 101.385 188.434 100.85ZM172.063 103.311C172.384 104.381 172.812 105.237 173.561 105.665C174.31 106.2 175.166 106.307 176.022 105.879C174.952 104.809 174.203 103.418 173.668 101.92C173.133 100.315 172.812 98.817 172.812 97.319C172.384 98.175 172.063 99.138 171.849 100.315C171.742 101.385 171.849 102.455 172.063 103.311ZM181.051 97.854C181.265 96.463 181.158 95.2859 180.944 94.4299C180.623 93.5739 180.195 93.0389 179.767 92.8249C179.232 92.6108 178.804 92.8249 178.269 93.3599C177.734 93.8949 177.413 94.9649 177.306 96.463C177.199 97.64 177.306 98.817 177.627 99.994C177.948 101.171 178.483 102.241 179.125 103.204C179.66 102.455 179.981 101.599 180.409 100.636C180.623 99.673 180.944 98.817 181.051 97.854Z" fill="white"/>
<path d="M225.036 101.28C225.143 101.066 225.25 100.959 225.464 101.066C225.678 101.066 225.785 101.28 225.892 101.494C225.999 101.708 225.999 102.029 225.999 102.564C225.999 102.992 225.785 103.634 225.464 104.276C225.036 105.025 224.608 105.881 223.966 106.63C223.324 107.379 222.682 108.021 221.933 108.556C221.184 109.091 220.328 109.519 219.472 109.84C218.616 110.161 217.653 110.268 216.797 110.161C215.299 109.947 214.122 109.412 213.48 108.556C212.731 107.593 212.303 106.416 212.196 105.025C212.089 104.169 212.089 103.206 212.196 102.243C212.303 101.28 212.41 100.317 212.624 99.3536C212.838 98.7116 212.945 97.9626 213.159 97.1065C213.373 96.2505 213.587 95.3945 213.801 94.5385C213.801 93.6825 213.694 93.2544 213.373 93.3614C213.052 93.3614 212.517 93.6825 211.982 94.3245C211.34 94.9665 210.698 95.8225 209.949 96.8925C209.2 97.9626 208.451 99.2466 207.702 100.638C206.952 102.029 206.203 103.42 205.561 104.918C204.919 106.416 204.384 107.914 203.956 109.305C203.849 109.626 203.742 109.84 203.635 110.054C203.528 110.268 203.314 110.268 202.993 110.268C202.458 110.268 201.923 110.268 201.388 110.054C200.853 109.84 200.318 109.626 199.89 109.305C199.462 108.984 199.141 108.556 198.927 108.021C198.713 107.486 198.606 106.951 198.82 106.309C199.034 105.132 199.355 104.062 199.569 102.885C199.783 101.708 200.104 100.638 200.425 99.4606C200.532 99.1396 200.532 98.8186 200.639 98.4976C200.746 98.1766 200.853 97.8556 200.853 97.5346C200.96 97.1066 200.96 96.7855 201.067 96.4645C201.174 96.1435 201.281 95.8225 201.388 95.3945C201.602 94.3245 201.602 93.5755 201.388 93.3614C201.174 93.1474 200.746 93.2544 200.318 93.5754C199.89 93.8965 199.248 94.6455 198.499 95.6085C197.75 96.5715 197.108 97.6416 196.359 98.9256C195.61 100.21 194.861 101.601 194.219 103.099C193.47 104.597 192.935 105.988 192.4 107.486C192.293 107.914 192.186 108.235 192.079 108.556C191.972 108.877 191.865 109.198 191.758 109.519C191.651 109.84 191.651 109.947 191.544 109.947C191.437 109.947 191.223 110.054 190.902 110.054C190.367 110.054 189.832 110.054 189.297 109.84C188.762 109.626 188.227 109.412 187.799 109.091C187.371 108.77 187.05 108.342 186.836 107.807C186.622 107.272 186.515 106.737 186.729 106.095C187.371 103.313 188.013 100.638 188.655 97.9626C189.297 95.2875 189.939 92.6124 190.581 89.8303C190.581 89.6163 190.688 89.5094 190.902 89.5094C191.544 89.4024 192.293 89.4024 192.935 89.5094C193.577 89.5094 194.112 89.7234 194.54 89.9374C194.968 90.1514 195.289 90.5794 195.503 91.1144C195.717 91.6494 195.717 92.2914 195.503 93.1474C195.396 93.6825 195.289 94.2175 195.182 94.7525C195.075 95.2875 194.968 95.8225 194.754 96.3575C195.396 95.0735 196.038 93.8965 196.787 92.8264C197.536 91.7564 198.606 90.9004 199.783 90.2584C200.211 90.0444 200.639 89.8304 201.174 89.7234C201.709 89.6164 202.351 89.5093 202.993 89.4023C203.635 89.4023 204.17 89.4023 204.812 89.4023C205.347 89.4023 205.882 89.6164 206.31 89.7234C206.845 89.9374 207.381 90.3654 207.595 90.9004C207.916 91.4354 207.916 92.1844 207.702 93.1474C207.595 93.6825 207.488 94.2175 207.381 94.7525C207.274 95.2875 207.166 95.8225 207.059 96.3575C207.702 95.0735 208.344 93.8965 209.093 92.8264C209.842 91.7564 210.912 90.9004 212.089 90.2584C212.517 89.9374 213.159 89.7233 213.801 89.6163C214.443 89.5093 215.192 89.4024 215.941 89.5094C216.69 89.6164 217.332 89.7234 217.974 90.0444C218.616 90.3654 219.044 90.7934 219.365 91.3284C219.793 92.0774 219.9 92.8264 219.9 93.7895C219.9 94.7525 219.686 95.6085 219.365 96.5715C219.151 97.3206 218.937 97.9626 218.723 98.7116C218.616 99.4606 218.402 100.103 218.188 100.852C218.081 101.494 217.974 102.029 217.974 102.564C217.867 103.099 217.867 103.634 217.974 104.062C217.974 105.239 218.402 106.095 219.044 106.416C219.686 106.737 220.542 106.63 221.612 105.881C222.04 105.56 222.361 105.239 222.789 104.811C223.11 104.383 223.431 103.955 223.752 103.527C224.073 103.099 224.287 102.671 224.501 102.35C224.715 102.029 224.822 101.494 225.036 101.28Z" fill="white"/>
</svg>
</div>
     <div className="priceBox">
         <div className="svgContainer">
         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 57 53" fill="none">
<g filter="url(#filter0_b_211_6911)">
<path d="M19.764 8.6861C30.3255 4.23426 42.7457 8.55604 47.532 18.2702C52.3183 27.9844 47.6963 39.4898 37.1348 43.9416C26.5733 48.3934 14.1531 44.0717 9.36684 34.3575C4.58052 24.6433 9.2025 13.1379 19.764 8.6861Z" fill="#2274A5" stroke="white"/>
<path d="M30.4408 36.9717L31.9688 33.9993C32.1956 33.5473 32.8124 33.2873 33.3301 33.4255L36.7579 34.309C37.463 34.3325 38.034 33.771 37.9656 33.1109L37.789 31.6054C37.7509 31.2413 37.4061 30.8283 37.0346 30.6998L33.5155 29.4747C33.2571 29.3935 32.9638 29.137 32.8523 28.9108L31.471 26.1074C31.2675 25.6943 31.5002 25.3586 31.9925 25.3411L38.2417 25.2255C39.2205 25.2049 39.6918 24.5192 39.2847 23.6929L38.6595 22.424C38.3347 21.765 37.4298 21.2317 36.6444 21.2539L29.5316 21.3892C29.3275 21.392 29.0769 21.2482 28.9896 21.0712L27.5357 18.1202C27.0801 17.1956 25.8083 16.4131 24.7066 16.3667C24.3149 16.3536 23.9426 16.5105 23.6963 16.7925C23.0114 17.592 22.8204 19.003 23.276 19.9276L24.7299 22.8786C24.8172 23.0556 24.77 23.3249 24.6338 23.4655L19.8676 28.3375C19.3294 28.8613 19.1709 29.8428 19.4956 30.5019L20.1208 31.7708C20.5279 32.597 21.3966 32.7179 22.0556 32.0482L26.2498 27.7618C26.5715 27.4243 27.0136 27.4874 27.2171 27.9005L28.5984 30.7039C28.7099 30.9301 28.7267 31.3032 28.6341 31.5323L27.325 34.7926C27.1861 35.1362 27.2921 35.638 27.569 35.9133L28.6815 37.0243C29.154 37.5141 29.9916 37.4937 30.4408 36.9717Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_b_211_6911" x="-8.03125" y="-8.55591" width="72.9648" height="69.7395" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImage" stdDeviation="7.5"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_211_6911"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_211_6911" result="shape"/>
</filter>
</defs>
</svg>
         </div>
       <div className="price">{props.price.toFixed(0)}</div>
       per person
     </div>
    <div className="textContent">
    <h2>{props.title}</h2>
    <div className="date">
       <span className="start">From: <date>{new Date(props.startDate).getDate()} <span className="thinner">{ddShortMonth(new Date(props.startDate))}</span></date></span>
       <span className="end">  To: <date>{new Date(props.endDate).getDate()} <span className="thinner">{ddShortMonth(new Date(props.endDate))}</span></date></span>
    </div>
    <div className="rtrip">
        <div>
        <h3>Round Trip</h3>
        </div>
    {props.roundTripArray.map((e,i)=>{
        return (<div key={i} className="city">
           {
              (i!=0 && i!=props.roundTripArray.length-1)?<svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 39 40" fill="none">
              <circle cx="19.5" cy="20.0769" r="18.6" transform="rotate(90 19.5 20.0769)" fill="white" stroke="#2274A5" stroke-width="1.8"/>
              <path d="M22.208 9.80713L19.7356 11.8869C19.3642 12.2053 18.7488 12.2053 18.3774 11.8869L15.905 9.80713C15.332 9.52063 14.6316 9.80713 14.4194 10.4226L13.9525 11.8339C13.8358 12.1734 13.9525 12.6721 14.2072 12.9268L16.6159 15.3462C16.7963 15.5159 16.9343 15.8555 16.9343 16.0996V19.1237C16.9343 19.5694 16.6053 19.7816 16.1915 19.6119L10.9814 17.3623C10.1643 17.0121 9.49582 17.4472 9.49582 18.3385L9.49582 19.7074C9.49582 20.4183 10.0264 21.2354 10.6843 21.5113L16.6159 24.0686C16.7857 24.1428 16.9343 24.3657 16.9343 24.5567V27.74C16.9343 28.7375 17.6664 29.9153 18.5578 30.3716C18.8761 30.5308 19.2475 30.5308 19.5658 30.3716C20.4572 29.9153 21.1894 28.7269 21.1894 27.7294V24.5461C21.1894 24.3551 21.3379 24.1322 21.5077 24.0579L27.4287 21.5006C28.0866 21.2354 28.6172 20.4183 28.6172 19.7074L28.6172 18.3385C28.6172 17.4472 27.9487 17.0121 27.1316 17.3623L21.9215 19.6119C21.5183 19.7922 21.1787 19.5694 21.1787 19.1237L21.1787 16.0996C21.1787 15.8555 21.3167 15.5159 21.4865 15.3462L23.8952 12.9268C24.1499 12.6721 24.2666 12.184 24.1499 11.8339L23.683 10.4226C23.492 9.80713 22.7916 9.51001 22.208 9.80713Z" fill="white" stroke="#2274A5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>:<svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 29 35" fill="none">
<path d="M14.5019 19.6106C17.1997 19.6106 19.3867 17.4236 19.3867 14.7258C19.3867 12.028 17.1997 9.84106 14.5019 9.84106C11.8042 9.84106 9.61719 12.028 9.61719 14.7258C9.61719 17.4236 11.8042 19.6106 14.5019 19.6106Z" stroke="#2274A5" stroke-width="2"/>
<path d="M1.38007 11.8758C4.46435 -1.68256 24.5514 -1.66691 27.62 11.8914C29.4205 19.8448 24.4731 26.577 20.1363 30.7416C16.9894 33.7789 12.0107 33.7789 8.84811 30.7416C4.52698 26.577 -0.420406 19.8292 1.38007 11.8758Z" stroke="#2274A5" stroke-width="2"/>
</svg>}
            <div className="label">{e}</div>
       {(i==props.roundTripArray.length-1)?"": <div className="vline"></div>}</div>)
    })}
    </div>
    </div>
    </div>
</div>);
});
export default function AdCard(props){
    const [imgElem, setimgElem] = useState(null);
    const htmlref = useRef(null);
    const [imgUrl,setUrl] = useState(null);
    const canvasContainer = useRef(null);
    var canvas = null;
useEffect(() => {
    htmlToImage.toPng(htmlref.current,{cacheBust:true,}).then(function(dataUrl){
        var img = new Image();
        img.src = dataUrl;
        img.setAttribute("key",dataUrl);
        setUrl(dataUrl);
        //img.setAttribute('crossOrigin', 'Anonymous');
        //console.log("url: "+dataUrl);
        var  bgimg = new window.Image();
         bgimg.setAttribute('crossOrigin', '*')
        canvas = document.createElement("canvas");
        canvas.width = 600;
        canvas.height = 500;
        let ctx = canvas.getContext('2d');
        ctx.moveTo(0,0);
        ctx.lineTo(200,100);
        
        ctx.globalCompositeOperation = "destination-over";
           
       bgimg.onload = function(){
            
            ctx.drawImage(bgimg,0,0,600,500);
            canvas.toDataURL('image/png');
       }
        img.onload = function(){
            
            ctx.drawImage(img,0,0,600,500);
        }
       
        bgimg.setAttribute("src",`${props.locationData.picture}188160.png`);
        //bgimg.crossOrigin = "Anonymous";
        //canvasContainer.current.appendChild(canvas);
        //canvasContainer.current.appendChild(img);
    }).catch(function(error){
        console.error('oops');
    });
  },[props.locationData]);
  
    return (
        <div className='canvasContainer' ref={canvasContainer}>
            <div className='dn'>
            <AdHtml ref={htmlref} locationData={props.locationData} title={props.title} price={props.price} roundTripArray={props.roundTripArray} startDate={props.startDate}
            endDate={props.endDate} />
            </div>
            <img src={imgUrl} key="img" width="400"/>
          
        </div>
    );
}