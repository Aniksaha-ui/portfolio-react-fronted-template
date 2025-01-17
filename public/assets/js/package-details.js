(function ($) {
    "use strict";
  
        // show or hide the attachment input field for offline payment gateway
        $('#payment-gateways').on('change', function () {
            // get the selected offline payment gateway id
            var gatewayId = $(this).val();

            if(gatewayId == 'stripe') {
                $("#tab-stripe").removeClass('d-none');
                $("#tab-stripe").addClass('d-block');

                $('#gateway-description').removeClass('d-block');
                $('#gateway-description').addClass('d-none');
                $('#gateway-instruction').removeClass('d-block');
                $('#gateway-instruction').addClass('d-none');
                $('#gateway-attachment').removeClass('d-block');
                $('#gateway-attachment').addClass('d-none');
            } else {
                $("#tab-stripe").removeClass('d-block');
                $("#tab-stripe").addClass('d-none');

                // change string type to integer type
                gatewayId = parseInt(gatewayId);
    
                // loop to check which element's id match with selected offline payment's id
                for (var key in offlineGateways) {
                    if (Object.hasOwnProperty.call(offlineGateways, key)) {
                        var elementId = offlineGateways[key].id;
    
                        if (elementId == gatewayId) {
                            if (offlineGateways[key].attachment_status == 1) {
                                $('#gateway-attachment').removeClass('d-none');
                            } else {
                                $('#gateway-attachment').addClass('d-none');
                            }
    
                            if (offlineGateways[key].short_description.length > 0) {
                                $('#gateway-description').removeClass('d-none');
                                $('#gateway-description').html(offlineGateways[key].short_description);
                            } else {
                                $('#gateway-description').addClass('d-none');
                            }
    
                            if (offlineGateways[key].instructions.length > 0) {
                                $('#gateway-instruction').removeClass('d-none');
                                $('#gateway-instruction').html(offlineGateways[key].instructions);
                            } else {
                                $('#gateway-instruction').addClass('d-none');
                            }
                            break;
                        } else {
                            $('#gateway-description').addClass('d-none');
                            $('#gateway-instruction').addClass('d-none');
                            $('#gateway-attachment').addClass('d-none');
                        }
                    }
                }
            }
        });


        // get the rating (star) value in integer
        $('.review-value li a').on('click', function () {
            var ratingValue = $(this).attr('data-ratingVal');

            // first, remove star color from all the 'review-value' class
            $('.review-value li a i').removeClass('text-warning');

            // second, add star color to the selected parent class
            var parentClass = 'review-' + ratingValue;
            $('.' + parentClass + ' li a i').addClass('text-warning');

            // finally, set the rating value to a hidden input field
            $('#ratingId').val(ratingValue);
        });
  })(jQuery);
  