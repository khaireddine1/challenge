/* Ajoutez votre code JavaScript ici.
Si vous utilisez la bibliotheque jQuery library, noubliez pas de wrapper votre code dans le jQuery.ready() comme ceci :
jQuery(document).ready(function( $ ){
    // Votre code ici 
});
--
Si vous voulez lier un fichier JavaScript qui se trouve sur un autre serveur (similaire a
<script src="https://example.com/your-js-file.js"></script>), utilisez 
la page "Ajouter du code HTML", car c'est du code HTML qui appelle un fichier JavaScript.
Fin du commentaire */
jQuery(document).ready(function ($) {


    jQuery("#newsletter-footer input#mailerlite-1-field-email").attr("placeholder", "Votre E-mail");
    jQuery('#newsletter-footer .mailerlite-form').after('<div class="editchekbox"><label><input type="checkbox" name="ny" required="" class="tnp-privacy"> En m\’inscrivant à cette Newsletter, j\’accepte de recevoir maximum 2 mails par mois concernant les nouveautés et offres promotionnelles éventuelles d\’ Atelier de steffy et son Blog.</label></div>');
    jQuery(' form.woocommerce-product-search button').attr("value", "U");
    jQuery('img').removeAttr('title');
    //jQuery('li.et_pb_menu_page_id-75.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-367').after('<span id="iconsMenu"><span id="listicons1"><a href="/panier"><i class="fas fa-shopping-cart"></i></a><a href="/wishlist"><i class="far fa-heart"></i></a><a href="/mon-compte"><i class="far fa-user"></i></a> </span><span id="listicons2"><a href="https://www.facebook.com/latelierdesteffyD" target="_blank" rel="noopener"><i class="fab fa-facebook-f"></i></a> <a href="https://www.instagram.com/latelierdesteffy" target="_blank" rel="noopener"><i class="fab fa-instagram"></i></a><a href="https://www.pinterest.fr/latelierdesteffy/" target="_blank" rel="noopener"><i class="fab fa-pinterest-p"></i></a></span> </span>');

    //Changer style input=file en page de contact
    $('.change-image').css('display', 'none');
    $('#file').on('change', function () {
        $input = $(this);
        if ($input.val().length > 0) {
            fileReader = new FileReader();
            fileReader.onload = function (data) {
                $('.image-preview').attr('src', data.target.result);
            }
            fileReader.readAsDataURL($input.prop('files')[0]);
            $('.image-button').css('display', 'none');
            $('.image-preview').css('display', 'block');
            $('.change-image').css('display', 'block');
        } else {
            $('.change-image').css('display', 'none');
        }
    });
    $('.change-image').on('click', function () {
        $control = $(this);
        $('#imageInput').val('');
        $preview = $('.image-preview');
        $preview.attr('src', '');
        $preview.css('display', 'none');
        $control.css('display', 'none');
        $('.image-button').css('display', 'flex');
    });

    $('.dgbm_blog_module .post-meta>span.comments').html(function () {
        var text = $(this).text().split(' ');
        var last = text.pop();
        return text.join(" ") + (text.length > 0 ? ' <span class="last">' + last + '</span>' : last);
    });

    //Ajouter attr placeholder a la zone de recherche

    $("#searchform #s").attr("placeholder", "Recherche ...");

    //Ajouter l'attribut Alt de l'image à une div
    (function ($) {
        $(".i13_bx_slider img").each(function () {
            $("<div class='alt-img'></div>").insertAfter(this);
            $(".alt-img").text($(this).attr("alt"))
        })
    })(jQuery);


});
/* 
 var count=0;
     jQuery(window).resize(function() {
   if (count ==0){
       if (window.matchMedia('(max-width: 980px)').matches) {
     var a= jQuery( "#iconsMenu").detach();
     a.insertAfter( "li.et_pb_menu_page_id-75.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-367");
    }
    count++; 
     } 
});
*/