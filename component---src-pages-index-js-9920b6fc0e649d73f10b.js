"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[293],{4967:function(e,t,a){var l=a(6540),n=a(4810);t.A=()=>{var e;const t=null===(e=(0,n.GR)("2785349746").site.siteMetadata)||void 0===e?void 0:e.author;return l.createElement("div",{className:"bio"},(null==t?void 0:t.name)&&l.createElement("p",null,"`gatsby-demo-plugin-recommend-article`のデモです。 このサイト内の記事は生成AIを用いて生成しているため、内容には誤りが含まれる可能性があります。 また記事内の記載はすべてフィクションであり、実在の人物・団体・場所とは一切関係ありません。"))}},3895:function(e,t,a){var l=a(6540),n=a(4810);t.A=e=>{let{location:t,title:a,children:r}=e;const o="/gatsby-demo-plugin-recommend-article/"===t.pathname;let i;return i=o?l.createElement("h1",{className:"main-heading"},l.createElement(n.N_,{to:"/"},a)):l.createElement(n.N_,{className:"header-link-home",to:"/"},a),l.createElement("div",{className:"global-wrapper","data-is-root-path":o},l.createElement("header",{className:"global-header"},i),l.createElement("main",null,r),l.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",l.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"),l.createElement("br",null),"powered by"," ",l.createElement("a",{href:"https://github.com/gatsbyjs/gatsby-starter-blog"},"Gatsby Starter Blog")))}},7528:function(e,t,a){var l=a(6540),n=a(4810);t.A=e=>{var t,a,r;let{description:o,title:i,children:c}=e;const{site:m}=(0,n.GR)("2841359383"),s=o||m.siteMetadata.description,d=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return l.createElement(l.Fragment,null,l.createElement("title",null,d?`${i} | ${d}`:i),l.createElement("meta",{name:"description",content:s}),l.createElement("meta",{property:"og:title",content:i}),l.createElement("meta",{property:"og:description",content:s}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:creator",content:(null===(a=m.siteMetadata)||void 0===a||null===(r=a.social)||void 0===r?void 0:r.twitter)||""}),l.createElement("meta",{name:"twitter:title",content:i}),l.createElement("meta",{name:"twitter:description",content:s}),c)}},9639:function(e,t,a){a.r(t),a.d(t,{Head:function(){return c}});var l=a(6540),n=a(4810),r=a(4967),o=a(3895),i=a(7528);t.default=e=>{var t;let{data:a,location:i}=e;const c=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",m=a.allMarkdownRemark.nodes;return 0===m.length?l.createElement(o.A,{location:i,title:c},l.createElement(r.A,null),l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.createElement(o.A,{location:i,title:c},l.createElement(r.A,null),l.createElement("ol",{style:{listStyle:"none"}},m.map((e=>{const t=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(n.N_,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t))),l.createElement("small",null,e.frontmatter.date)),l.createElement("div",null,e.frontmatter.tags.map((e=>l.createElement("span",null,"#",e," ")))),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))};const c=()=>l.createElement(i.A,{title:"All posts"})}}]);
//# sourceMappingURL=component---src-pages-index-js-9920b6fc0e649d73f10b.js.map