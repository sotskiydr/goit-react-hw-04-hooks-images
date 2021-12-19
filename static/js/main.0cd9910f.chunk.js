(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3iRwM","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__3CMUD"}},11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__21j6m",Modal:"Modal_Modal__32mLz"}},13:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2s6Dc"}},14:function(e,t,a){e.exports={Button:"Button_Button__2BYYQ"}},16:function(e,t,a){e.exports={loader:"Loader_loader__2hZcM"}},21:function(e,t,a){},22:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(8),c=a.n(o),s=(a(21),a(12)),i=a(3),l=a(4),u=a(6),h=a(5),m=(a(22),a(7)),g=a.n(m),d=a(0),b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleChange=function(t){e.setState({value:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.value),e.setState({value:""})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(d.jsx)("header",{className:g.a.Searchbar,children:Object(d.jsxs)("form",{className:g.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:g.a["SearchForm-button"],children:Object(d.jsx)("span",{className:g.a["SearchForm-button-label"],children:"Search"})}),Object(d.jsx)("input",{className:g.a["SearchForm-input"],type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.value,onChange:function(t){e.handleChange(t)}})]})})}}]),a}(r.a.Component),p=b,j=a(13),f=a.n(j),v=a(10),O=a.n(v),y=function(e){var t=e.images,a=e.openModal;return t.map((function(e){return Object(d.jsx)("li",{className:O.a.ImageGalleryItem,onClick:function(){a({src:e.largeImageURL,id:e.id})},children:Object(d.jsx)("img",{className:O.a["ImageGalleryItem-image"],src:e.webformatURL,alt:e.id})},e.id)}))},S=function(e){var t=e.hits,a=e.toggleModal;return Object(d.jsx)("ul",{className:f.a.ImageGallery,children:Object(d.jsx)(y,{images:t,openModal:a})})},_=a(14),x=a.n(_),I=function(e){var t=e.incrementPage,a=Object(n.useRef)();return Object(d.jsx)("button",{onClick:function(){t(a)},className:x.a.Button,ref:a,type:"button",children:"Load More"})},M=(a(24),a(15)),w=a.n(M),k=a(16),F=a.n(k),N=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)(w.a,{className:F.a.loader,type:"ThreeDots",color:"#00BFFF",height:200,width:200,timeout:1e3})}}]),a}(r.a.Component),D=a(11),G=a.n(D),C=document.querySelector("#modal-root"),L=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.toggleModal(),t.target===t.currentTarget&&e.props.toggleModal()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.img;return Object(o.createPortal)(Object(d.jsxs)("div",{className:G.a.Overlay,onClick:this.handleKeyDown,children:[Object(d.jsx)(N,{}),Object(d.jsx)("div",{className:G.a.Modal,children:Object(d.jsx)("img",{src:e.src,alt:e.id})})]}),C)}}]),a}(r.a.Component),B=L;var R=function(e,t){var a="https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&").concat("key=23877606-1096bee22002de3079c9510e6","&image_type=photo&orientation=horizontal&per_page=12");return fetch(a).then((function(e){return e.json()}))},U=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={page:1,images:[],searchValue:"",status:"idle",showModal:!1,largeImageURL:{},error:""},e.toggleModal=function(t){var a=t||{};e.setState((function(e){return{showModal:!e.showModal,largeImageURL:a}}))},e.onPushImagesToState=function(t){e.setState((function(e){return{status:"resolved",images:[].concat(Object(s.a)(e.images),Object(s.a)(t.hits))}}))},e.onSubmitForm=function(t){""!==t.trim()&&t!==e.state.searchValue&&(e.setState({status:"pending",images:[],searchValue:t,page:1}),e.getData(t,e.state.page))},e.onLoadMore=function(t){var a=e.state,n=a.searchValue,r=a.page;e.setState((function(e){return{status:"pending",page:e.page+1}})),e.getData(n,r+1),setTimeout((function(){t.current.scrollIntoView({behavior:"smooth"})}),500)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({status:"pending"})}},{key:"getData",value:function(e,t){var a=this;R(e,t).then((function(e){return a.onPushImagesToState(e)})).catch((function(e){return a.setState({error:e})}))}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.status,n=e.showModal,r=e.largeImageURL,o=e.searchValue;return Object(d.jsxs)("div",{className:"App",children:[n&&Object(d.jsx)(B,{img:r,toggleModal:this.toggleModal}),Object(d.jsx)(p,{onSubmit:this.onSubmitForm}),"pending"===a&&Object(d.jsx)(N,{}),""===o.trim()&&Object(d.jsx)("h2",{className:"title",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441 \u0432 \u043f\u043e\u0438\u0441\u043a"}),t.length>0&&Object(d.jsx)(S,{hits:t,toggleModal:this.toggleModal}),t.length>0&&Object(d.jsx)(I,{incrementPage:this.onLoadMore})]})}}]),a}(r.a.Component),V=U;c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(V,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2Ep_q",SearchForm:"Searchbar_SearchForm__2I4mE","SearchForm-button":"Searchbar_SearchForm-button__1hOB2","SearchForm-button-label":"Searchbar_SearchForm-button-label__2xw8R","SearchForm-input":"Searchbar_SearchForm-input__2VZGK"}}},[[45,1,2]]]);
//# sourceMappingURL=main.0cd9910f.chunk.js.map