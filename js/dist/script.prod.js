"use strict";$(document).ready(function(){$(".humberger-menu").click(function(){$(".navigation").toggleClass("change"),$(this).toggleClass("active")}),lightbox.option({wrapAround:!0}),$(".accordin-writers").click(function(t){"button"===t.target.id.split("-")[0]&&($("#book1").attr("src","images/img/writers/"+t.target.id.split("-")[1]+"-book1.jpg"),$("#book2").attr("src","images/img/writers/"+t.target.id.split("-")[1]+"-book2.jpg")),console.log(t.target.id.split("-")[1]+"-book1.jpg")})});