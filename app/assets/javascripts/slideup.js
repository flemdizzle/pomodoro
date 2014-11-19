<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript">
$(document).ready(function(){
  // build a variable to target the #menu div
  var menu = $('#menu')
  // bind a click function to the menu-trigger
  $('#menu-trigger').click(function(event){
    event.preventDefault();
    // if the menu is visible slide it up
    if (menu.is(":visible"))
    {
      menu.slideUp(400);
      $(this).removeClass("open");
    }
    // otherwise, slide the menu down
    else
    {
      menu.slideDown(400);
      $(this).addClass("open");
    }
  });
});
</script>
