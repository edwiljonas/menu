
				var slide_toggle = true;
				//script
				jQuery(function(){	
					//remove borders
					hmenu_enable_remove_borders();
					//bind search animation
					hmenu_bind_search();
					//enable dropdown script
					if(getWidth() > 767){
						//enable main menu switch	
						hmenu_enable_dropdown_animation('hover');
					} else { 
						//enable mobile switch	
						hmenu_enable_dropdown_animation('click');
					}
					//scroll
					hmenu_bind_scroll_listener();
					//resize
					hmenu_bind_resize();
				});
				
				/* window resize */
				var resize_time_var;
				var check_width = jQuery(window).width(), check_height = jQuery(window).height();
				
				// device detection
				if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
					|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))){
					
					heroIsMobile = true;					
				} else {					
					heroIsMobile = false;					
				}
				
				if(heroIsMobile){
					if(jQuery(window).width() != check_width && jQuery(window).height() != check_height){
						jQuery(window).on('resize', function(){
							//enable dropdown script
							if(getWidth() > 768){
								//enable main menu switch	
								hmenu_enable_dropdown_animation('hover');
							} else { 
								//enable mobile switch	
								hmenu_enable_dropdown_animation('click');
							}
							//resize lightbox holder
							hmenu_resize();
							hmenu_get_offset();
							clearTimeout(resize_time_var);
							resize_time_var = setTimeout(function(){
								hmenu_get_offset();
							},500);
						});
					};
				} else {
					jQuery(window).on('resize', function(){
						//enable dropdown script
						if(getWidth() > 768){
							//enable main menu switch	
							hmenu_enable_dropdown_animation('hover');
						} else { 
							//enable mobile switch	
							hmenu_enable_dropdown_animation('click');
						}
						//resize lightbox holder
						hmenu_resize();
						hmenu_get_offset();
						clearTimeout(resize_time_var);
						resize_time_var = setTimeout(function(){
							hmenu_get_offset();
						},500);
					});
				}
				
				//remove border
				function hmenu_enable_remove_borders(){
					
					//check the list items and remove first or last occurance of borders	
					jQuery('.hmenu_sub ul').each(function(index, element) {
						jQuery(this).children('li').last().addClass('hmenu_no_bottom_border');	
					});
					
					//nav item last border removed
					jQuery('.hmenu_navigation_holder > ul').each(function(index, element) {
						jQuery(this).children('li').last().children('.hmenu_item_devider').css({
							opacity:0
						});	
					});
					
					//section deviders
					jQuery('.hmenu_inner_holder > div').each(function(index, element) {
						jQuery(this).children('.hmenu_grp_devider').last().remove();	
					});
					
				}
								
				//bind search animations
				function hmenu_bind_search(){
					
					jQuery('.hmenu_trigger_search').off().on('click', function(){
						jQuery(this).parent('form').children('.hmenu_search_submit').trigger('click');
					});
					
					hmenu_bind_search_animation();
					
				}
				
				function hmenu_resize(){
					//lightbox
					jQuery('.hmenu_search_lightbox_input').css({
						height:jQuery(window).height()+'px'
					});
				}
				
				//search animation
				function hmenu_bind_search_animation(){
					
					hmenu_resize();
					
					jQuery('.hmenu_search_slide .hmenu_trigger_lightbox').off().on('click', function(){
						
						var the_link = jQuery(this).attr('data-link');
						var the_id = jQuery(this).attr('data-id');
						
						//set css
						jQuery('#'+the_link).css({
							display:'table'
						});	
						jQuery('#'+the_link).animate({
							opacity: 1
						}, 500, function(){
							jQuery('.hmenu_search_'+the_id).focus();
							//close
							jQuery('#'+the_link+' .hmenu_search_lightbox_close').off().on('click', function(){
								jQuery('#'+the_link).animate({
									opacity: 0
								}, 500, function(){
									jQuery('#'+the_link).css({
										display:'none'
									});	
								});
							});
						});					
						
					});
					
					//slide full
					jQuery('.hmenu_search_full .hmenu_trigger_full').off().on('click', function(){
						
						var the_link = jQuery(this).attr('data-link');
						var the_height = jQuery(this).attr('data-height');
						var the_id = jQuery(this).attr('data-id');
						var this_element = jQuery(this);
						
						if(!jQuery(this_element).attr('data-search-toggle') || jQuery(this_element).attr('data-search-toggle') == 'close'){	
							jQuery(this_element).attr('data-search-toggle', 'open');			
							//open	
							jQuery('#'+the_link).stop().animate({
								opacity: 1,
								height: the_height+'px'
							}, 200);			
						} 
						
						jQuery('.hmenu_search_'+the_id).focus();
						
						jQuery('.hmenu_search_'+the_id).focusout(function() {
							jQuery(this_element).attr('data-search-toggle', 'close');
							//close
							jQuery('#'+the_link).stop().animate({
								opacity: 0,
								height: 0
							}, 200);														
						})
						
					});
					
				}
				
				//dropdown animation
				function hmenu_enable_dropdown_animation(hmenu_event){
					
					if(hmenu_event == 'hover'){	
						//reset
						jQuery('.hmenu_submenu').css({
							'opacity': 0,
							'visibility': 'hidden',
							'display':'none',
							'height': 'auto'
						});
						jQuery('.hmenu_navigation_holder ul').each(function(index, element) {        
							
							jQuery(this).children('li').each(function(index, element) {            
								
								jQuery(this).off().on(
									{
										mouseenter: function(){
											
											if(jQuery(this).find('> .hmenu_submenu').length > 0){
												var sub_menu = jQuery(this).find('> .hmenu_submenu');
												//animate menu
												jQuery(this).addClass('hmenu_main_active');
												jQuery(sub_menu).css({ 
													'display': 'table-cell',
													'visibility':'visible'
												});

												if(jQuery(sub_menu).hasClass('hmenu_sub')){
                                                    var normal_sub = jQuery(this).find('> .hmenu_sub');
                                                    var off_set = normal_sub.offset();
                                                    var sub_menu_width = jQuery(this).find('> .hmenu_submenu').width();
                                                    var the_check_offset = (off_set.left + sub_menu_width);
                                                    if(normal_sub.attr('data-menu-level') < 1){
                                                        if(the_check_offset > jQuery(window).width()){
                                                            jQuery(normal_sub).css({
                                                                'left':'auto',
                                                                'right':0
                                                            });
                                                            jQuery(normal_sub).addClass('hmenu_has_changed');
                                                        }
                                                    }else{
                                                        if(the_check_offset > jQuery(window).width()){
                                                            jQuery(normal_sub).css({
                                                                'left':-(sub_menu_width)
                                                            });
                                                            jQuery(normal_sub).addClass('hmenu_has_changed');
                                                        } else {
                                                            if(jQuery(this).parents().hasClass('hmenu_has_changed')){
                                                                jQuery(normal_sub).css({
                                                                    'left':-(sub_menu_width)
                                                                });
                                                            }
                                                        }
                                                    }
                                                }

												
							jQuery(sub_menu).stop().animate({
								opacity: 1
							}, 1000);
						
											};
											if(jQuery(sub_menu).hasClass('hmenu_mega_sub')){
												var the_height = jQuery(sub_menu).height();
												var the_pad_top = jQuery(sub_menu).children('.hmenu_mega_inner').css('padding-top');
													var replace_top = the_pad_top.replace('px', '');
												var the_pad_bot = jQuery(sub_menu).children('.hmenu_mega_inner').css('padding-bottom');
													var replace_bot = the_pad_bot.replace('px', '');
												var final_height = the_height - (parseInt(replace_top)+parseInt(replace_bot));
												jQuery(sub_menu).children('.hmenu_mega_inner').children('div').last().children('.hmenu_col_devider').hide();
												jQuery(sub_menu).children('.hmenu_mega_inner').children('div').each(function(index, element) {
													jQuery(this).children('.hmenu_col_devider').css({
														'height':final_height+'px'
													});
												});
											}
										},
										mouseleave: function(){
											if(jQuery(this).find('> .hmenu_submenu').length > 0){
												var sub_menu = jQuery(this).find('> .hmenu_submenu');
												//animate menu
												jQuery(this).removeClass('hmenu_main_active');
												jQuery(sub_menu).stop().animate({
													opacity: 0
												}, 100, function(){
													jQuery(this).css({
														'visibility': 'hidden',
														'display':'none'
													});
												});
											};
										}
									}
								);	
								
							});		
						});	
					} else if(hmenu_event == 'click') {
						
						//reset
						jQuery('.hmenu_submenu').css({
							'opacity': 0,
							'display': 'block',
							'visibility': 'visible',
							'height': 0
						});
						
						jQuery('.hmenu_navigation_holder ul').each(function(index, element) {     
							jQuery(this).children('li').each(function(index, element) {  
								jQuery(this).off();
							});
						});
						
						var the_ul_height = jQuery('.hmenu_navigation_holder').children('ul').height();
						
						jQuery('.hmenu_navigation_holder').each(function(){
							
							var the_parent = jQuery(this).parents('.hmenu_inner_holder');
							
							jQuery(the_parent).children('.hmenu_right').children('.hmenu_toggle_holder').off().on('click', function(){		
							
								if(!jQuery(this).attr('data-toggle') || jQuery(this).attr('data-toggle') == 'close'){	
									jQuery(this).attr('data-toggle', 'open');			
									//open	
									jQuery(the_parent).children('div').children('.hmenu_navigation_holder').hide().slideDown( 'slow', function() {
										
									});					
								} else if(jQuery(this).attr('data-toggle') == 'open'){
									jQuery(this).attr('data-toggle', 'close');
									//close
									jQuery(the_parent).children('div').children('.hmenu_navigation_holder').css({ 'display':'block'});
									jQuery(the_parent).children('div').children('.hmenu_navigation_holder').slideUp( 'slow', function() {
										jQuery(this).css({ 'display':'none'});
									});					
								}
								
							});
							
						});
						
						var item_height = jQuery('.hmenu_navigation_holder > ul > li').first().height();
						
						jQuery('.hmenu_mobile_menu_toggle').remove();
						
						//add toggle div to menu
						jQuery('.icon_hero_default_thin_e600').each(function(index, element) {
							jQuery(this).parent('a').parent('li').append('<div class="hmenu_mobile_menu_toggle" data-toggle="close"></div>');
						});
						jQuery('.icon_hero_default_thin_e602').each(function(index, element) {
							jQuery(this).parent('a').parent('li').append('<div class="hmenu_mobile_menu_toggle" data-toggle="close"></div>');
						});
						
						if(jQuery('.hmenu_mobile_menu_toggle').length > 0){
							jQuery('.hmenu_mobile_menu_toggle').off().on('click', function(event){
								
								var current_toggle = jQuery(this);
								
								if(jQuery(this).parent('li').parent('ul').hasClass('hmenu_full_hover') && jQuery(this).attr('data-toggle') != 'open'){
									//close any open menu items
									jQuery('.hmenu_navigation_holder ul > li').each(function(index, element) {
									   if(jQuery(this).children('.hmenu_mobile_menu_toggle').attr('data-toggle') == 'open'){
											jQuery(this).children('.hmenu_mobile_menu_toggle').attr('data-toggle', 'close');
											//close
											jQuery(this).children('.hmenu_mobile_menu_toggle').prev().css({ 'display':'block'});				
											jQuery(this).children('.hmenu_mobile_menu_toggle').prev().animate({
												opacity: 0,
												height: 0
											}, 200);
										}	
									});	
								}
								
								if(!jQuery(this).attr('data-toggle') || jQuery(this).attr('data-toggle') == 'close'){
										
									jQuery(this).attr('data-toggle', 'open');			
									
									//open	
									if(jQuery(this).prev().hasClass('hmenu_mega_sub')){
										var the_height = jQuery(this).prev().children('.hmenu_mega_inner').height();
									} else {
										var the_height = jQuery(this).prev().children('ul').height();
									}
									
									jQuery(this).prev().animate({
										opacity: 1,
										height: the_height
									}, 200, function(){
										jQuery(this).css({ 'display':'table', 'height':'auto'});
									});	
											
								} else if(jQuery(this).attr('data-toggle') == 'open'){
									
									jQuery(this).attr('data-toggle', 'close');
									
									//close
									jQuery(this).prev().css({ 'display':'block'});
									
									jQuery(this).prev().animate({
										opacity: 0,
										height: 0
									}, 200);	
												
								}
								
							});
							
						}	
											
					}
					
				}
				
				//bind home scroll listener
				function hmenu_bind_resize(){
					var mobile_res = 768;
					var current_width = jQuery( window ).width();
					jQuery( window ).resize(function() {
						current_width = jQuery( window ).width();
						if(current_width < mobile_res){
							hmenu_remove_class('remove');
						} else {
							hmenu_remove_class('reset');
							//hmenu_bind_scroll_listener();
						}
					});
					if(current_width < mobile_res){
						hmenu_remove_class('remove');
					} else {
						hmenu_remove_class('reset');
					}
				}
				
				//bind remove and add classes
				function hmenu_remove_class(todo){
					if(todo == 'remove'){
						jQuery('.hmenu_submenu').find('.icon_hero_default_thin_e602').addClass('icon_hero_default_thin_e600').removeClass('icon_hero_default_thin_e602');
					} else{
						jQuery('.hmenu_submenu').find('.icon_hero_default_thin_e600').addClass('icon_hero_default_thin_e602').removeClass('icon_hero_default_thin_e600');
					}					
				}
				
				//bind home scroll listener
				function hmenu_bind_scroll_listener(){
						
					//variables
					var sticky_menu = jQuery('.hmenu_load_menu').find('[data-sticky="yes"]');						
					var sticky_height = parseInt(sticky_menu.attr('data-height'));						
					var sticky_activate = parseInt(sticky_menu.attr('data-activate'));						
					var body_top = jQuery(document).scrollTop();						
					var menu_id = jQuery(sticky_menu).parent('.hmenu_load_menu').attr('data-menu-id');
					
					//show menu
					jQuery('.hmenu_load_menu').removeAttr('style');	
					
					//check current state
					if(body_top >= sticky_activate){
						hmenu_bind_sticky(sticky_menu, sticky_height, sticky_activate, body_top, menu_id);
					} else {
						hmenu_bind_sticky(sticky_menu, sticky_height, sticky_activate, body_top, menu_id);
					}
					
					//scroll trigger			
					jQuery(window).scroll(function(){
						body_top = jQuery(document).scrollTop();		
						hmenu_bind_sticky(sticky_menu, sticky_height, sticky_activate, body_top, menu_id);
						//hmenu_get_offset();
					});
						
				}
				
				//bind sticky
				function hmenu_bind_sticky(sticky_menu, sticky_height, sticky_activate, body_top, menu_id){
					
					//get window width
					var window_width = jQuery(window).width();
					
					if(window_width > 768){
						//activate switch
						if(body_top >= sticky_activate){
							
										
							//add class
							jQuery(sticky_menu).parent('.hmenu_load_menu').addClass('hmenu_is_sticky ' + 'hmenu_sticky_' + menu_id);
							if(slide_toggle){
								jQuery(sticky_menu).parent('.hmenu_load_menu').css({
									'position': 'fixed',
									'top':'-'+sticky_height+'px'
								});
								jQuery(sticky_menu).parent('.hmenu_load_menu').animate({
									'top':'0px'
								}, 200);
								slide_toggle = false;
							}
						} else {
							slide_toggle = true;	
				
							//remove class
							jQuery(sticky_menu).parent('.hmenu_load_menu').removeClass('hmenu_is_sticky ' + 'hmenu_sticky_' + menu_id);	
							jQuery(sticky_menu).parent('.hmenu_load_menu').removeAttr('style');							
						}
					}					
				}
				
			