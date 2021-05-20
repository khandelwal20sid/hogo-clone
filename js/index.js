function showDashboard() {    
    document.getElementById('breadcrumb-text').innerHTML="Dashborad 01";
    document.getElementById('dashboard-content').style.display="block";
    document.getElementById('apps-content').style.display="none";
    document.getElementById('widgets-content').style.display="none";
    document.getElementById('charts-content').style.display="none";
    document.getElementById('ui-content').style.display="none";
    document.getElementById('elements-content').style.display="none";
    document.getElementById('pages-content').style.display="none";
    document.getElementById('icons-content').style.display="none"; 
  }
  
  function showApps() {
    document.getElementById('breadcrumb-text').innerHTML="Apps";
    document.getElementById('dashboard-content').style.display="none";
    document.getElementById('apps-content').style.display="block";
    document.getElementById('widgets-content').style.display="none";
    document.getElementById('charts-content').style.display="none";
    document.getElementById('ui-content').style.display="none";
    document.getElementById('elements-content').style.display="none";
    document.getElementById('pages-content').style.display="none";
    document.getElementById('icons-content').style.display="none"; 
  }

  function showWidgets() {
    document.getElementById('breadcrumb-text').innerHTML="Widgets";
    document.getElementById('dashboard-content').style.display="none";
    document.getElementById('apps-content').style.display="none";
    document.getElementById('widgets-content').style.display="block";
    document.getElementById('charts-content').style.display="none";
    document.getElementById('ui-content').style.display="none";
    document.getElementById('elements-content').style.display="none";
    document.getElementById('pages-content').style.display="none";
    document.getElementById('icons-content').style.display="none"; 
  }
  function showCharts() {
    document.getElementById('breadcrumb-text').innerHTML="Charts";
    document.getElementById('dashboard-content').style.display="none";
    document.getElementById('apps-content').style.display="none";
    document.getElementById('widgets-content').style.display="none";
    document.getElementById('charts-content').style.display="block";
    document.getElementById('ui-content').style.display="none";
    document.getElementById('elements-content').style.display="none";
    document.getElementById('pages-content').style.display="none";
    document.getElementById('icons-content').style.display="none"; 
  }
  function showUi() {
    document.getElementById('breadcrumb-text').innerHTML="Advanced UI";
    document.getElementById('dashboard-content').style.display="none";
    document.getElementById('apps-content').style.display="none";
    document.getElementById('widgets-content').style.display="none";
    document.getElementById('charts-content').style.display="none";
    document.getElementById('ui-content').style.display="block";
    document.getElementById('elements-content').style.display="none";
    document.getElementById('pages-content').style.display="none";
    document.getElementById('icons-content').style.display="none"; 
  }
  function showElements() {
    document.getElementById('breadcrumb-text').innerHTML="Elements";
    document.getElementById('dashboard-content').style.display="none";
    document.getElementById('apps-content').style.display="none";
    document.getElementById('widgets-content').style.display="none";
    document.getElementById('charts-content').style.display="none";
    document.getElementById('ui-content').style.display="none";
    document.getElementById('elements-content').style.display="block";
    document.getElementById('pages-content').style.display="none";
    document.getElementById('icons-content').style.display="none"; 
  }
  function showPages() {
    document.getElementById('breadcrumb-text').innerHTML="Pages";
    document.getElementById('dashboard-content').style.display="none";
    document.getElementById('apps-content').style.display="none";
    document.getElementById('widgets-content').style.display="none";
    document.getElementById('charts-content').style.display="none";
    document.getElementById('ui-content').style.display="none";
    document.getElementById('elements-content').style.display="none";
    document.getElementById('pages-content').style.display="block";
    document.getElementById('icons-content').style.display="none"; 
  }
  function showIcons() {
    document.getElementById('breadcrumb-text').innerHTML="Icons";
    document.getElementById('dashboard-content').style.display="none";
    document.getElementById('apps-content').style.display="none";
    document.getElementById('widgets-content').style.display="none";
    document.getElementById('charts-content').style.display="none";
    document.getElementById('ui-content').style.display="none";
    document.getElementById('elements-content').style.display="none";
    document.getElementById('pages-content').style.display="none";
    document.getElementById('icons-content').style.display="block"; 
  }
  

  $(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
   
   // breakpoint and up  
   $(window).resize(function(){
     if ($(window).width() >= 980){  
   
         // when you hover a toggle show its dropdown menu
         $(".navbar .dropdown-toggle").hover(function () {
            $(this).parent().toggleClass("show");
            $(this).parent().find(".dropdown-menu").toggleClass("show"); 
          });
   
           // hide the menu when the mouse leaves the dropdown
         $( ".navbar .dropdown-menu" ).mouseleave(function() {
           $(this).removeClass("show");  
         });
     
       // do something here
     } 
   });  
     
     
   
   // document ready  
   });
   