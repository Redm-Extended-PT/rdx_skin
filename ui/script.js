$(document).ready(function(){


  // Listen for NUI Events
  window.addEventListener('message', function(event){
    // Open Skin Creator
    if(event.data.openSkinCreator == true){
      $(".skinCreator").css("display","block");
      $(".rotation").css("display","flex");;
    }
    // Close Skin Creator
    if(event.data.openSkinCreator == false){
      $(".skinCreator").fadeOut(400);
      $(".rotation").fadeOut(400);
    }
  });


  // Form update
  $('input').change(function(){
	  var test = $('input[name=sex]:checked', '#formSkinCreator').val()
	  if(test == 1){
	$("#beard").css("display","block");  
	  }
	  else{
     $("#beard").css("display","none");
      }	  
    $.post('http://RDX_skin/updateBody', JSON.stringify({
      value: false,
// Body
      sex: $('input[name=sex]:checked', '#formSkinCreator').val(),
      skincolor: $('input[name=skincolor]:checked', '#formSkinCreator').val(),
      eyecolor: $('input[name=eyecolor]:checked','#formSkinCreator').val(),
      bodysize: $('.bodysize .active').attr('data'),      
      face: $('.face').val(),
      face_size: $('.face_size').val(),
      // Features
      face_width: $('.face_width').val(),    
      eyebrow_height: $('.eyebrow_height').val(),
      eyebrow_width: $('.eyebrow_width').val(),
      eyebrow_depth: $('.eyebrow_depth').val(),
      ears_width: $('.ears_width').val(),
      ears_angle: $('.ears_angle').val(),
	  ears_height: $('.ears_height').val(),
      earlobe_size: $('.earlobe_size').val(),    
      cheekbones_height: $('.cheekbones_height').val(),
      cheekbones_width: $('.cheekbones_width').val(),
      cheekbones_depth: $('.cheekbones_depth').val(),
      jaw_height: $('.jaw_height').val(),
      jaw_width: $('.jaw_width').val(),
      jaw_depth: $('.jaw_depth').val(),
      chin_height: $('.chin_height').val(),
      chin_width: $('.chin_width').val(),
      chin_depth: $('.chin_depth').val(),
	  eyelid_height: $('.eyelid_height').val(),
      eyelid_width: $('.eyelid_width').val(),  
	  eyes_depth: $('.eyes_depth').val(),
      eyes_angle: $('.eyes_angle').val(),
	  eyes_distance: $('.eyes_distance').val(),
	  nose_width: $('.nose_width').val(),  
	  nose_size: $('.nose_size').val(),
      nose_height: $('.nose_height').val(),
	  nose_angle: $('.nose_angle').val(),
      nose_curvature: $('.nose_curvature').val(),
	  nostrils_distance: $('.nostrils_distance').val(),  
	  mouth_width: $('.mouth_width').val(),
      mouth_depth: $('.mouth_depth').val(),
	  mouth_x_pos: $('.mouth_x_pos').val(),
      mouth_y_pos: $('.mouth_y_pos').val(),  
	  upper_lip_height: $('.upper_lip_height').val(),  
	  upper_lip_width: $('.upper_lip_width').val(),
      upper_lip_depth: $('.upper_lip_depth').val(),
	  lower_lip_height: $('.lower_lip_height').val(),
      lower_lip_width: $('.lower_lip_width').val(),
	  lower_lip_depth: $('.lower_lip_depth').val(),
	  hair: $('.hair').val(),
	  beard: $('.beard').val(),
	  ////Brwi///////////
	  eyebrows_t: $('.eyebrows_type').val(),
      eyebrows_op: $('.eyebrows_opa').val(),
	  eyebrows_id: $('.eyebrows_pal_id').val(),
	  eyebrows_c1: $('.eyebrows_color_1').val(),
	  eyebrows_c2: $('.eyebrows_color_2').val(),
	  eyebrows_c3: $('.eyebrows_color_3').val(),
	  ////Blizny///////////
	  scars_t: $('.scars_type').val(),
      scars_op: $('.scars_opa').val(),
	  ////Wiek///////////
	  freckles_t: $('.freckles_type').val(),
      freckles_op: $('.freckles_opa').val(),
	    ////Piegi///////////
	  ageing_t: $('.ageing_type').val(),
      ageing_op: $('.ageing_opa').val(),  
	    ////Wiek///////////
	  moles_t: $('.moles_type').val(),
      moles_op: $('.moles_opa').val(),
	    ////Wiek///////////
	  spots_t: $('.spots_type').val(),
      spots_op: $('.spots_opa').val(),
	  /////////////////////////
	  
    }));
  });
  
  
  $('.arrow').on('click', function(e){
    e.preventDefault();
	  var test = $('input[name=sex]:checked', '#formSkinCreator').val()
	  if(test == 1){
	$("#beard").css("display","block");  
	  }
	  else{
     $("#beard").css("display","none");
      }
    $.post('http://RDX_skin/updateBody', JSON.stringify({
      value: false,
// Body
      sex: $('input[name=sex]:checked', '#formSkinCreator').val(),
      skincolor: $('input[name=skincolor]:checked', '#formSkinCreator').val(),
      eyecolor: $('input[name=eyecolor]:checked','#formSkinCreator').val(),
      bodysize: $('.bodysize .active').attr('data'),      
      face: $('.face').val(),
      face_size: $('.face_size').val(),
      // Features
      face_width: $('.face_width').val(),    
      eyebrow_height: $('.eyebrow_height').val(),
      eyebrow_width: $('.eyebrow_width').val(),
      eyebrow_depth: $('.eyebrow_depth').val(),
      ears_width: $('.ears_width').val(),
      ears_angle: $('.ears_angle').val(),
	  ears_height: $('.ears_height').val(),
      earlobe_size: $('.earlobe_size').val(),    
      cheekbones_height: $('.cheekbones_height').val(),
      cheekbones_width: $('.cheekbones_width').val(),
      cheekbones_depth: $('.cheekbones_depth').val(),
      jaw_height: $('.jaw_height').val(),
      jaw_width: $('.jaw_width').val(),
      jaw_depth: $('.jaw_depth').val(),
      chin_height: $('.chin_height').val(),
      chin_width: $('.chin_width').val(),
      chin_depth: $('.chin_depth').val(),
	  eyelid_height: $('.eyelid_height').val(),
      eyelid_width: $('.eyelid_width').val(),  
	  eyes_depth: $('.eyes_depth').val(),
      eyes_angle: $('.eyes_angle').val(),
	  eyes_distance: $('.eyes_distance').val(), 
	  nose_width: $('.nose_width').val(),  
	  nose_size: $('.nose_size').val(),
      nose_height: $('.nose_height').val(),
	  nose_angle: $('.nose_angle').val(),
      nose_curvature: $('.nose_curvature').val(),
	  nostrils_distance: $('.nostrils_distance').val(),  
	  mouth_width: $('.mouth_width').val(),
      mouth_depth: $('.mouth_depth').val(),
	  mouth_x_pos: $('.mouth_x_pos').val(),
      mouth_y_pos: $('.mouth_y_pos').val(),  
	  upper_lip_height: $('.upper_lip_height').val(),  
	  upper_lip_width: $('.upper_lip_width').val(),
      upper_lip_depth: $('.upper_lip_depth').val(),
	  lower_lip_height: $('.lower_lip_height').val(),
      lower_lip_width: $('.lower_lip_width').val(),
	  lower_lip_depth: $('.lower_lip_depth').val(),
	  hair: $('.hair').val(),
	  beard: $('.beard').val(),
	  ////Brwi///////////
	  eyebrows_t: $('.eyebrows_type').val(),
      eyebrows_op: $('.eyebrows_opa').val(),
	  eyebrows_id: $('.eyebrows_pal_id').val(),
	  eyebrows_c1: $('.eyebrows_color_1').val(),
	  eyebrows_c2: $('.eyebrows_color_2').val(),
	  eyebrows_c3: $('.eyebrows_color_3').val(),
	  ////Blizny///////////
	  scars_t: $('.scars_type').val(),
      scars_op: $('.scars_opa').val(),
	  ////Wiek//////////
	  freckles_t: $('.freckles_type').val(),
      freckles_op: $('.freckles_opa').val(),
	    ////Piegi///////////
	  ageing_t: $('.ageing_type').val(),
      ageing_op: $('.ageing_opa').val(),  
	    ////Wiek///////////
	  moles_t: $('.moles_type').val(),
      moles_op: $('.moles_opa').val(),
	    ////Wiek///////////
	  spots_t: $('.spots_type').val(),
      spots_op: $('.spots_opa').val(),
	  /////////////////////////
    }));
  });

  // Form submited
  $('.yes').on('click', function(e){
    e.preventDefault();
    $.post('http://RDX_skin/saveSkin', JSON.stringify({
      value: true,
      // Face
            // Body
      sex: $('input[name=sex]:checked', '#formSkinCreator').val(),
      skincolor: $('input[name=skincolor]:checked', '#formSkinCreator').val(),
      eyecolor: $('input[name=eyecolor]:checked','#formSkinCreator').val(),
      bodysize: $('.bodysize .active').attr('data'),      
      face: $('.face').val(),
      face_size: $('.face_size').val(),
      // Features
      face_width: $('.face_width').val(),    
      eyebrow_height: $('.eyebrow_height').val(),
      eyebrow_width: $('.eyebrow_width').val(),
      eyebrow_depth: $('.eyebrow_depth').val(),
      ears_width: $('.ears_width').val(),
      ears_angle: $('.ears_angle').val(),
	  ears_height: $('.ears_height').val(),
      earlobe_size: $('.earlobe_size').val(),    
      cheekbones_height: $('.cheekbones_height').val(),
      cheekbones_width: $('.cheekbones_width').val(),
      cheekbones_depth: $('.cheekbones_depth').val(),
      jaw_height: $('.jaw_height').val(),
      jaw_width: $('.jaw_width').val(),
      jaw_depth: $('.jaw_depth').val(),
      chin_height: $('.chin_height').val(),
      chin_width: $('.chin_width').val(),
      chin_depth: $('.chin_depth').val(),
	  eyelid_height: $('.eyelid_height').val(),
      eyelid_width: $('.eyelid_width').val(),  
	  eyes_depth: $('.eyes_depth').val(),
      eyes_angle: $('.eyes_angle').val(),
	  eyes_distance: $('.eyes_distance').val(), 
	  nose_width: $('.nose_width').val(),  
	  nose_size: $('.nose_size').val(),
      nose_height: $('.nose_height').val(),
	  nose_angle: $('.nose_angle').val(),
      nose_curvature: $('.nose_curvature').val(),
	  nostrils_distance: $('.nostrils_distance').val(),  
	  mouth_width: $('.mouth_width').val(),
      mouth_depth: $('.mouth_depth').val(),
	  mouth_x_pos: $('.mouth_x_pos').val(),
      mouth_y_pos: $('.mouth_y_pos').val(),  
	  upper_lip_height: $('.upper_lip_height').val(),  
	  upper_lip_width: $('.upper_lip_width').val(),
      upper_lip_depth: $('.upper_lip_depth').val(),
	  lower_lip_height: $('.lower_lip_height').val(),
      lower_lip_width: $('.lower_lip_width').val(),
	  lower_lip_depth: $('.lower_lip_depth').val(),
	  hair: $('.hair').val(),
	  beard: $('.beard').val(),
	  ////Brwi///////////
	  eyebrows_t: $('.eyebrows_type').val(),
      eyebrows_op: $('.eyebrows_opa').val(),
	  eyebrows_id: $('.eyebrows_pal_id').val(),
	  eyebrows_c1: $('.eyebrows_color_1').val(),
	  eyebrows_c2: $('.eyebrows_color_2').val(),
	  eyebrows_c3: $('.eyebrows_color_3').val(),
	  ////Blizny///////////
	  scars_t: $('.scars_type').val(),
      scars_op: $('.scars_opa').val(),
	  ////Wiek///////////
	  freckles_t: $('.freckles_type').val(),
      freckles_op: $('.freckles_opa').val(),
	    ////Piegi///////////
	  ageing_t: $('.ageing_type').val(),
      ageing_op: $('.ageing_opa').val(),  
	    ////Wiek///////////
	  moles_t: $('.moles_type').val(),
      moles_op: $('.moles_opa').val(),
	    ////Wiek///////////
	  spots_t: $('.spots_type').val(),
      spots_op: $('.spots_opa').val(),
	  /////////////////////////
    }));
  }); 
  
  // Rotate player
  $(document).keypress(function(e) {
    if(e.which == 113){ // Q pressed
    console.log("bagno jest");
      $.post('http://RDX_skin/heading', JSON.stringify({
        value: -10
      }));
    }
    if(e.which == 101){ // E pressed
      $.post('http://RDX_skin/heading', JSON.stringify({
        value: 10
      }));
    }
  });



});