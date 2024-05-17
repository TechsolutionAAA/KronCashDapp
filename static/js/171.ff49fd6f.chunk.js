"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[171],{2447:(e,t,s)=>{s.d(t,{Ao:()=>i,D8:()=>N,IN:()=>p,dC:()=>V,jL:()=>n,lH:()=>R,mb:()=>m,pV:()=>k,vZ:()=>c});var o=s(8993);const a=(0,o.BX)({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),n={state:a,subscribe:e=>(0,o.B1)(a,(()=>e(a))),push(e,t){e!==a.view&&(a.view=e,t&&(a.data=t),a.history.push(e))},reset(e){a.view=e,a.history=[e]},replace(e){a.history.length>1&&(a.history[a.history.length-1]=e,a.view=e)},goBack(){if(a.history.length>1){a.history.pop();const[e]=a.history.slice(-1);a.view=e}},setData(e){a.data=e}},i={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>typeof window<"u"&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>i.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){const e=navigator.userAgent.toLowerCase();return i.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,formatNativeUrl(e,t,s){if(i.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let o=e;o.includes("://")||(o=e.replaceAll("/","").replaceAll(":",""),o="".concat(o,"://")),o.endsWith("/")||(o="".concat(o,"/")),this.setWalletConnectDeepLink(o,s);const a=encodeURIComponent(t);return"".concat(o,"wc?uri=").concat(a)},formatUniversalUrl(e,t,s){if(!i.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let o=e;o.endsWith("/")||(o="".concat(o,"/")),this.setWalletConnectDeepLink(o,s);const a=encodeURIComponent(t);return"".concat(o,"wc?uri=").concat(a)},wait:async e=>new Promise((t=>{setTimeout(t,e)})),openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(i.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(i.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(i.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(i.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=null==(e=n.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},l=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),r=(0,o.BX)({enabled:l,userSessionId:"",events:[],connectedWalletId:void 0}),c={state:r,subscribe:e=>(0,o.B1)(r.events,(()=>e((0,o.P9)(r.events[r.events.length-1])))),initialize(){r.enabled&&typeof(null==crypto?void 0:crypto.randomUUID)<"u"&&(r.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){r.connectedWalletId=e},click(e){if(r.enabled){const t={type:"CLICK",name:e.name,userSessionId:r.userSessionId,timestamp:Date.now(),data:e};r.events.push(t)}},track(e){if(r.enabled){const t={type:"TRACK",name:e.name,userSessionId:r.userSessionId,timestamp:Date.now(),data:e};r.events.push(t)}},view(e){if(r.enabled){const t={type:"VIEW",name:e.name,userSessionId:r.userSessionId,timestamp:Date.now(),data:e};r.events.push(t)}}},d=(0,o.BX)({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),p={state:d,subscribe:e=>(0,o.B1)(d,(()=>e(d))),setChains(e){d.chains=e},setWalletConnectUri(e){d.walletConnectUri=e},setIsCustomDesktop(e){d.isCustomDesktop=e},setIsCustomMobile(e){d.isCustomMobile=e},setIsDataLoaded(e){d.isDataLoaded=e},setIsUiLoaded(e){d.isUiLoaded=e},setIsAuth(e){d.isAuth=e}},u=(0,o.BX)({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),m={state:u,subscribe:e=>(0,o.B1)(u,(()=>e(u))),setConfig(e){var t,s;c.initialize(),p.setChains(e.chains),p.setIsAuth(Boolean(e.enableAuthMode)),p.setIsCustomMobile(Boolean(null==(t=e.mobileWallets)?void 0:t.length)),p.setIsCustomDesktop(Boolean(null==(s=e.desktopWallets)?void 0:s.length)),i.setModalVersionInStorage(),Object.assign(u,e)}};var g=Object.defineProperty,h=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,I=(e,t,s)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const y="https://explorer-api.walletconnect.com",C="wcm",f="js-2.6.2";async function w(e,t){const s=((e,t)=>{for(var s in t||(t={}))b.call(t,s)&&I(e,s,t[s]);if(h)for(var s of h(t))v.call(t,s)&&I(e,s,t[s]);return e})({sdkType:C,sdkVersion:f},t),o=new URL(e,y);return o.searchParams.append("projectId",m.state.projectId),Object.entries(s).forEach((e=>{let[t,s]=e;s&&o.searchParams.append(t,String(s))})),(await fetch(o)).json()}const W={getDesktopListings:async e=>w("/w3m/v1/getDesktopListings",e),getMobileListings:async e=>w("/w3m/v1/getMobileListings",e),getInjectedListings:async e=>w("/w3m/v1/getInjectedListings",e),getAllListings:async e=>w("/w3m/v1/getAllListings",e),getWalletImageUrl:e=>"".concat(y,"/w3m/v1/getWalletImage/").concat(e,"?projectId=").concat(m.state.projectId,"&sdkType=").concat(C,"&sdkVersion=").concat(f),getAssetImageUrl:e=>"".concat(y,"/w3m/v1/getAssetImage/").concat(e,"?projectId=").concat(m.state.projectId,"&sdkType=").concat(C,"&sdkVersion=").concat(f)};var L=Object.defineProperty,E=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,U=(e,t,s)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const D=i.isMobile(),M=(0,o.BX)({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),k={state:M,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=m.state;if("NONE"===e||"ALL"===t&&!e)return M.recomendedWallets;if(i.isArray(e)){const t={recommendedIds:e.join(",")},{listings:s}=await W.getAllListings(t),o=Object.values(s);o.sort(((t,s)=>e.indexOf(t.id)-e.indexOf(s.id))),M.recomendedWallets=o}else{const{chains:e,isAuth:s}=p.state,o=null===e||void 0===e?void 0:e.join(","),a=i.isArray(t),n={page:1,sdks:s?"auth_v1":void 0,entries:i.RECOMMENDED_WALLET_AMOUNT,chains:o,version:2,excludedIds:a?t.join(","):void 0},{listings:l}=D?await W.getMobileListings(n):await W.getDesktopListings(n);M.recomendedWallets=Object.values(l)}return M.recomendedWallets},async getWallets(e){const t=((e,t)=>{for(var s in t||(t={}))O.call(t,s)&&U(e,s,t[s]);if(E)for(var s of E(t))A.call(t,s)&&U(e,s,t[s]);return e})({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:o}=m.state,{recomendedWallets:a}=M;if("ALL"===o)return M.wallets;a.length?t.excludedIds=a.map((e=>e.id)).join(","):i.isArray(s)&&(t.excludedIds=s.join(",")),i.isArray(o)&&(t.excludedIds=[t.excludedIds,o].filter(Boolean).join(",")),p.state.isAuth&&(t.sdks="auth_v1");const{page:n,search:l}=e,{listings:r,total:c}=D?await W.getMobileListings(t):await W.getDesktopListings(t),d=Object.values(r),u=l?"search":"wallets";return M[u]={listings:[...M[u].listings,...d],total:c,page:null!==n&&void 0!==n?n:1},{listings:d,total:c}},getWalletImageUrl:e=>W.getWalletImageUrl(e),getAssetImageUrl:e=>W.getAssetImageUrl(e),resetSearch(){M.search={listings:[],total:0,page:1}}},j=(0,o.BX)({open:!1}),N={state:j,subscribe:e=>(0,o.B1)(j,(()=>e(j))),open:async e=>new Promise((t=>{const{isUiLoaded:s,isDataLoaded:o}=p.state;if(i.removeWalletConnectDeepLink(),p.setWalletConnectUri(null===e||void 0===e?void 0:e.uri),p.setChains(null===e||void 0===e?void 0:e.chains),n.reset("ConnectWallet"),s&&o)j.open=!0,t();else{const e=setInterval((()=>{const s=p.state;s.isUiLoaded&&s.isDataLoaded&&(clearInterval(e),j.open=!0,t())}),200)}})),close(){j.open=!1}};var S=Object.defineProperty,T=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,_=(e,t,s)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const x=(0,o.BX)({themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),R={state:x,subscribe:e=>(0,o.B1)(x,(()=>e(x))),setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(x.themeMode=t),s&&(x.themeVariables=((e,t)=>{for(var s in t||(t={}))B.call(t,s)&&_(e,s,t[s]);if(T)for(var s of T(t))P.call(t,s)&&_(e,s,t[s]);return e})({},s))}},H=(0,o.BX)({open:!1,message:"",variant:"success"}),V={state:H,subscribe:e=>(0,o.B1)(H,(()=>e(H))),openToast(e,t){H.open=!0,H.message=e,H.variant=t},closeToast(){H.open=!1}}},7171:(e,t,s)=>{s.d(t,{WalletConnectModal:()=>a});var o=s(2447);class a{constructor(e){this.openModal=o.D8.open,this.closeModal=o.D8.close,this.subscribeModal=o.D8.subscribe,this.setTheme=o.lH.setThemeConfig,o.lH.setThemeConfig(e),o.mb.setConfig(e),this.initUi()}async initUi(){if(typeof window<"u"){await s.e(126).then(s.bind(s,9126));const e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),o.IN.setIsUiLoaded(!0)}}}}}]);
//# sourceMappingURL=171.ff49fd6f.chunk.js.map