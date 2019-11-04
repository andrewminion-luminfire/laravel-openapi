(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{206:function(a,t,e){"use strict";e.r(t);var n=e(0),r=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),e("p",[a._v("You can install the package via composer:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("composer require vyuldashev/laravel-openapi\n")])])]),e("p",[a._v("The service provider will automatically get registered. Or you may manually add the service provider in your config/app.php file:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'providers'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    // "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n    Vyuldashev"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("LaravelOpenApi"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("OpenApiServiceProvider::class,\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("p",[a._v("You can publish the config file with:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("php artisan vendor:publish --provider"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Vyuldashev\\LaravelOpenApi\\OpenApiServiceProvider"')]),a._v(" --tag"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"openapi-config"')]),a._v("\n")])])]),e("h2",{attrs:{id:"additional-information"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#additional-information"}},[a._v("#")]),a._v(" Additional information")]),a._v(" "),e("p",[e("em",[a._v("This package use some annotations. If you are using PhpStorm consider installing "),e("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/7320-php-annotations/",target:"_blank",rel:"noopener noreferrer"}},[a._v("PHP Annotations"),e("OutboundLink")],1),a._v(" plugin.")])]),a._v(" "),e("p",[a._v("Before starting using this package you need to be familiar with OpenAPI specification and it's terms.")]),a._v(" "),e("p",[a._v("Here are some useful links that will help to gain enough knowledge:")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("OpenAPI Specification"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://openapi-map.apihandyman.io",target:"_blank",rel:"noopener noreferrer"}},[a._v("OpenAPI Map"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://editor.swagger.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Swagger Editor"),e("OutboundLink")],1)])]),a._v(" "),e("h2",{attrs:{id:"generating-openapi-document"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generating-openapi-document"}},[a._v("#")]),a._v(" Generating OpenAPI document")]),a._v(" "),e("p",[a._v("In order to generate OpenAPI document run Artisan command:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("php artisan openapi:generate\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);