function setClass(e,s,a){$(e)[a?"addClass":"removeClass"](s)}function goto(e,s){$.scrollTo(e,500,{offset:s||-60,easing:"swing"})}function changeToggle(e,s){$(e).change(function(e){setClass("form",s,"yes"==$(this).val())}).change()}$.fn.serializeObject=function(){var e={},s=this.serializeArray();return $.each(s,function(){void 0!==e[this.name]?(e[this.name].push||(e[this.name]=[e[this.name]]),e[this.name].push(this.value||"")):e[this.name]=this.value||""}),e},Parse.initialize("2b3PmoTwQyVTrAQnVBK8ZDIiWhsbUg1KQlxczhIJ","WEkQ8CclHvIbD3fFSOMf6bFsCfExpiQu0uterfbe"),$(function(){$(window).scroll(function(){setClass("body","scrolling",window.scrollY>150)}).scroll()});var RSVP=Parse.Object.extend("RSVP");$("form").submit(function(e){e.preventDefault(),data=$("form").serializeObject(),$(".has-error").removeClass("has-error");var s=!1;if(data.name||($("[name=name]").closest(".form-group").addClass("has-error"),s=!0),data.attending||($("[name=attending]").closest(".form-group").addClass("has-error"),s=!0),!s){var a=new RSVP;a.save(data,{success:function(e){$("form").hide(),$(".success").show()},error:function(e,s){alert(s)}})}}),changeToggle("[name=attending]","is_attending"),changeToggle("[name=guest]","has_guest");